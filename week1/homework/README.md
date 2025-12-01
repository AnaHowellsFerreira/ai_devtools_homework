# TODO Application

A simple Django-based TODO application for managing tasks with due dates and resolution tracking.

## Features

- ✅ **Create TODOs** - Add new tasks with title, description, and due date
- ✏️ **Edit TODOs** - Update existing tasks
- 🗑️ **Delete TODOs** - Remove tasks you no longer need
- 📅 **Due Dates** - Assign and track due dates for your tasks
- ✔️ **Mark as Resolved** - Toggle tasks between resolved and unresolved states
- ⚠️ **Overdue Detection** - Automatically highlights overdue tasks
- 📊 **Admin Interface** - Full Django admin panel for advanced management

## Tech Stack

- **Python** 3.13+
- **Django** 5.2
- **SQLite** (default database)

## Installation

### Prerequisites

- Python 3.10 or higher
- pip (Python package manager)

### Setup Steps

1. **Navigate to the homework directory:**
   ```bash
   cd week1/homework
   ```

2. **Create a virtual environment:**
   ```bash
   python3 -m venv venv
   ```

3. **Activate the virtual environment:**
   ```bash
   # On macOS/Linux:
   source venv/bin/activate
   
   # On Windows:
   venv\Scripts\activate
   ```

4. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Run database migrations:**
   ```bash
   python manage.py migrate
   ```

6. **(Optional) Create a superuser for admin access:**
   ```bash
   python manage.py createsuperuser
   ```

## Running the Application

1. **Start the development server:**
   ```bash
   python manage.py runserver
   ```

2. **Open your browser and visit:**
   - Main app: http://127.0.0.1:8000/
   - Admin panel: http://127.0.0.1:8000/admin/

## Usage

### Main Interface

- **View TODOs**: The home page displays all your tasks
- **Add TODO**: Click the "+ Add New TODO" button
- **Edit TODO**: Click "Edit" on any task
- **Delete TODO**: Click "Delete" and confirm
- **Mark as Resolved**: Click "Mark as Resolved" to toggle status
- **Status Indicators**:
  - ✓ Resolved (green) - Task is complete
  - ⏳ Pending (yellow) - Task is incomplete
  - ⚠ Overdue (red) - Task is past due date and incomplete

### Admin Interface

Access the Django admin panel at `/admin/` to:
- Bulk manage TODOs
- Filter by status and due date
- Search tasks
- View detailed statistics

## Project Structure

```
homework/
├── manage.py              # Django management script
├── requirements.txt       # Python dependencies
├── todoproject/           # Project settings
│   ├── settings.py        # Configuration
│   └── urls.py            # Root URL routing
├── tasks/                 # Main app
│   ├── models.py          # Todo data model
│   ├── views.py           # View logic
│   ├── urls.py            # App URL patterns
│   ├── admin.py           # Admin configuration
│   └── templates/         # HTML templates
│       └── tasks/
│           ├── base.html              # Base template
│           ├── todo_list.html         # List view
│           ├── todo_form.html         # Create/Edit form
│           └── todo_confirm_delete.html  # Delete confirmation
└── db.sqlite3            # Database file
```

## Data Model

The `Todo` model includes:
- `title` (CharField) - Required, max 200 characters
- `description` (TextField) - Optional, for detailed notes
- `due_date` (DateField) - Optional, for deadline tracking
- `resolved` (BooleanField) - Default False, marks completion status
- `created_at` (DateTimeField) - Auto-generated timestamp
- `updated_at` (DateTimeField) - Auto-updated timestamp

## Development

### Running Tests
```bash
python manage.py test tasks
```

### Making Changes
After modifying models:
```bash
python manage.py makemigrations
python manage.py migrate
```

## Assignment Context

This is the **homework assignment** for Week 1-2 of the AI DevTools Zoomcamp by DataTalks Club. The goal was to build a functional TODO application using Django with AI-assisted development.

### Requirements Met

- ✅ Create, edit, and delete TODOs
- ✅ Assign due dates
- ✅ Mark TODOs as resolved
- ✅ Built using Python and Django

## License

This project is part of the AI DevTools Zoomcamp coursework.
