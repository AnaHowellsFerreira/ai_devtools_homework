from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .models import Todo

def todo_list(request):
    """Display all TODOs"""
    todos = Todo.objects.all()
    return render(request, 'tasks/todo_list.html', {'todos': todos})

def todo_create(request):
    """Create a new TODO"""
    if request.method == 'POST':
        title = request.POST.get('title')
        description = request.POST.get('description', '')
        due_date = request.POST.get('due_date') or None
        
        if title:
            Todo.objects.create(
                title=title,
                description=description,
                due_date=due_date
            )
            messages.success(request, 'TODO created successfully!')
            return redirect('todo_list')
        else:
            messages.error(request, 'Title is required!')
    
    return render(request, 'tasks/todo_form.html')

def todo_edit(request, pk):
    """Edit an existing TODO"""
    todo = get_object_or_404(Todo, pk=pk)
    
    if request.method == 'POST':
        todo.title = request.POST.get('title')
        todo.description = request.POST.get('description', '')
        todo.due_date = request.POST.get('due_date') or None
        todo.resolved = request.POST.get('resolved') == 'on'
        todo.save()
        messages.success(request, 'TODO updated successfully!')
        return redirect('todo_list')
    
    return render(request, 'tasks/todo_form.html', {'todo': todo})

def todo_delete(request, pk):
    """Delete a TODO"""
    todo = get_object_or_404(Todo, pk=pk)
    
    if request.method == 'POST':
        todo.delete()
        messages.success(request, 'TODO deleted successfully!')
        return redirect('todo_list')
    
    return render(request, 'tasks/todo_confirm_delete.html', {'todo': todo})

def todo_toggle_resolved(request, pk):
    """Toggle the resolved status of a TODO"""
    todo = get_object_or_404(Todo, pk=pk)
    todo.resolved = not todo.resolved
    todo.save()
    messages.success(request, f'TODO marked as {"resolved" if todo.resolved else "unresolved"}!')
    return redirect('todo_list')

