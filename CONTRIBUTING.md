# Contributing to AI DevTools Zoomcamp Homework

This document outlines the conventions and workflow for organizing weekly homework projects in this repository.

## 📁 Repository Structure

Each week's content is organized into subdirectories for exercises and homework:

```
ai_devtools_homework/
├── week1/
│   ├── exercise/       # Practice exercise
│   ├── homework/       # Homework assignment
│   └── README.md       # Week overview
├── week2/              # Future weeks
├── TEMPLATE/           # Template for new projects
├── README.md           # Main repository documentation
└── CONTRIBUTING.md     # This file
```

## 📂 Week Structure

Each week may contain:
- **`exercise/`** - Practice exercise to learn concepts
- **`homework/`** - Required homework assignment
- **`README.md`** - Overview of the week's content

Both exercise and homework are independent React projects with their own dependencies.

## 🚀 Starting a New Week's Project

### Option 1: Using the TEMPLATE (For Exercise or Homework)

1. **Copy the template directory:**
   ```bash
   # For a new week's exercise
   cp -r TEMPLATE/ weekX/exercise/
   cd weekX/exercise/
   
   # OR for homework
   cp -r TEMPLATE/ weekX/homework/
   cd weekX/homework/
   ```

2. **Update the project details:**
   - Edit `package.json`: Change `name` to `weekX-exercise` or `weekX-homework`
   - Edit `README.md`: Replace `[Project Name]` and fill in objectives
   - Edit `public/index.html`: Update title
   - Edit `src/App.js`: Update header text

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start development:**
   ```bash
   npm start
   ```

### Option 2: From Scratch

1. **Create the directory:**
   ```bash
   mkdir -p weekX/exercise/  # or weekX/homework/
   cd weekX/exercise/
   ```

2. **Initialize your project** (React, Node.js, Python, etc.)

3. **Add a README.md** with:
   - Project description
   - Tech stack
   - Setup instructions
   - Features/objectives

4. **Create a week overview README** at `weekX/README.md` explaining both exercise and homework

## 📝 Naming Conventions

- **Directory names:** 
  - Weekly folders: `week1/`, `week2/`, `week3/`, etc.
  - Subdirectories: `exercise/`, `homework/`
- **Package names:** 
  - Exercise: `weekX-exercise-name` (e.g., `week1-snake-game`)
  - Homework: `weekX-homework-name` (e.g., `week1-todo-app`)
- **Branch names:** Use `week-X-feature-name` if working on branches

## ✅ Project Checklist

Before considering a week's project complete, ensure:

- [ ] Project runs successfully (`npm start` or equivalent)
- [ ] README.md exists with clear documentation (for both exercise and homework)
- [ ] Week overview README.md exists at `weekX/README.md`
- [ ] Dependencies are listed in package.json
- [ ] Project-specific .env files are in the project directory (not root)
- [ ] Main repository README.md is updated with project links
- [ ] Code is committed with meaningful commit messages

## 📚 Documentation Standards

### Weekly Project README Should Include:

1. **Title and Description** - What the project does
2. **Objectives** - What you learned/accomplished
3. **Tech Stack** - Technologies and frameworks used
4. **Getting Started** - How to run the project
5. **Features** - Key functionality
6. **Assignment Context** - Link to course week

### Main README Should Include:

- Link to each week's project
- Brief description of each project
- Overall course information

## 🔄 Updating the Main README

When adding a new weekly project, update the main README.md:

```markdown
### Week X: [Project Name]
**Directory:** [`weekX/`](./weekX/)  
**Tech Stack:** [Technologies used]  
**Description:** [Brief description]

**Run:**
\`\`\`bash
cd weekX
npm install
npm start
\`\`\`
```

## 🧹 Keep It Clean

- **Don't commit:** `node_modules/`, `build/`, `.env` files (use `.gitignore`)
- **Do commit:** Source code, READMEs, configuration files
- **Each week is independent:** Manage dependencies separately per project

## 💡 Tips

- Use the TEMPLATE to maintain consistency across projects
- Document challenges and solutions in your weekly README
- Keep each project self-contained with its own dependencies
- Write commit messages that explain what and why

## 🤝 Questions?

Refer to the [course materials](https://courses.datatalks.club/ai-dev-tools-2025/) or ask in the community forums.
