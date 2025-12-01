from django.test import TestCase
from django.urls import reverse
from django.utils import timezone
from django.contrib.messages import get_messages
from .models import Todo


class TodoModelTests(TestCase):
	def test_create_todo_minimal(self):
		todo = Todo.objects.create(title="Task A")
		self.assertEqual(todo.title, "Task A")
		self.assertFalse(todo.resolved)

	def test_is_overdue(self):
		past = timezone.now().date() - timezone.timedelta(days=1)
		future = timezone.now().date() + timezone.timedelta(days=1)
		overdue = Todo.objects.create(title="Overdue", due_date=past)
		upcoming = Todo.objects.create(title="Upcoming", due_date=future)
		resolved = Todo.objects.create(title="Resolved", due_date=past, resolved=True)
		self.assertTrue(overdue.is_overdue())
		self.assertFalse(upcoming.is_overdue())
		self.assertFalse(resolved.is_overdue())

	def test_str(self):
		todo = Todo.objects.create(title="Readable Title")
		self.assertEqual(str(todo), "Readable Title")


class TodoViewTests(TestCase):
	def setUp(self):
		self.todo = Todo.objects.create(title="Existing", description="Desc")

	def test_list_view(self):
		url = reverse("todo_list")
		resp = self.client.get(url)
		self.assertEqual(resp.status_code, 200)
		self.assertContains(resp, "Existing")

	def test_create_view_valid(self):
		url = reverse("todo_create")
		resp = self.client.post(url, {
			"title": "New Todo",
			"description": "New Desc",
			"due_date": (timezone.now().date() + timezone.timedelta(days=2)).isoformat(),
		}, follow=True)
		self.assertEqual(resp.status_code, 200)
		self.assertTrue(Todo.objects.filter(title="New Todo").exists())
		messages = list(get_messages(resp.wsgi_request))
		self.assertTrue(any("created successfully" in m.message for m in messages))

	def test_create_view_invalid(self):
		url = reverse("todo_create")
		resp = self.client.post(url, {"title": ""}, follow=True)
		self.assertEqual(resp.status_code, 200)
		messages = list(get_messages(resp.wsgi_request))
		self.assertTrue(any("Title is required" in m.message for m in messages))

	def test_edit_view(self):
		url = reverse("todo_edit", args=[self.todo.pk])
		resp = self.client.post(url, {
			"title": "Updated",
			"description": "Updated Desc",
			"due_date": "",
			"resolved": "on",
		}, follow=True)
		self.assertEqual(resp.status_code, 200)
		self.todo.refresh_from_db()
		self.assertEqual(self.todo.title, "Updated")
		self.assertTrue(self.todo.resolved)

	def test_delete_view(self):
		url = reverse("todo_delete", args=[self.todo.pk])
		resp = self.client.post(url, follow=True)
		self.assertEqual(resp.status_code, 200)
		self.assertFalse(Todo.objects.filter(pk=self.todo.pk).exists())

	def test_toggle_resolved(self):
		url = reverse("todo_toggle_resolved", args=[self.todo.pk])
		resp = self.client.get(url, follow=True)
		self.assertEqual(resp.status_code, 200)
		self.todo.refresh_from_db()
		self.assertTrue(self.todo.resolved)
