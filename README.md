# AI DevTools Zoomcamp: Homework Repository

This repository contains homework assignments and projects for the [AI DevTools Zoomcamp](https://courses.datatalks.club/ai-dev-tools-2025/) by DataTalks Club.

## 🎓 About the Course

The AI DevTools Zoomcamp focuses on leveraging AI-powered development tools and LLMs to accelerate software development. Topics include code generation, debugging assistance, documentation automation, and building applications with AI assistance.

## 📋 Prerequisites

Before starting any project in this repository, ensure you have:

- **Node.js** 16+ or 18+ (recommended for React projects)
- **npm** or **yarn** package manager
- **Git** for version control
- A modern code editor (VS Code recommended)
- Basic knowledge of JavaScript/React (for web projects)

## 🚀 Quick Start

### Setting Up a New Week's Project

1. **Use the template:**
   ```bash
   cp -r TEMPLATE/ weekX/
   cd weekX/
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development:**
   ```bash
   npm start
   ```

📖 See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed setup instructions and conventions.

## 📁 Repository Structure

Each week's project is organized in its own directory with independent dependencies and documentation.

```
ai_devtools_homework/
├── week1/
│   ├── exercise/       # Snake Game (Practice)
│   └── homework/       # TODO App (Assignment)
├── week2/              # Week 2 projects
├── week3/              # Week 3 projects
├── TEMPLATE/           # Project template for new weeks
├── README.md           # This file
└── CONTRIBUTING.md     # Project setup guide
```

## 📚 Weekly Projects

### Week 1-2: Snake Game (Exercise) & TODO App (Homework)

**Directory:** [`week1/`](./week1/)

#### Exercise: Snake Game
**Location:** [`week1/exercise/`](./week1/exercise/)  
**Tech Stack:** React, JavaScript  
**Description:** Classic Snake game built with React. Control the snake with arrow keys, eat food to grow, and avoid collisions.

**Run:**
```bash
cd week1/exercise
npm install
npm start
```

#### Homework: TODO App
**Location:** [`week1/homework/`](./week1/homework/)  
**Tech Stack:** Python, Django, Django REST Framework  
**Status:** ✅ Complete  
**Description:** RESTful TODO API built with Django. Supports full CRUD operations with pagination and admin interface.

**Run:**
```bash
cd week1/homework
source venv/bin/activate
python manage.py runserver
```

### Week 3+

**Status:** 📝 Coming Soon

## 🔗 Resources

- **Course Link:** <https://courses.datatalks.club/ai-dev-tools-2025/>
- **Homework Tracking:** Check the course website for submission guidelines

