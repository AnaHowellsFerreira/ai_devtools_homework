# Contributing to AI DevTools Zoomcamp Homework

This document outlines the conventions and workflow for organizing weekly homework projects in this repository.

## 📁 Repository Structure

Each week's project lives in its own directory:

```
ai_devtools_homework/
├── week1/              # Week 1-2 project
├── week2/              # Week 2 project
├── week3/              # Week 3 project
├── TEMPLATE/           # Template for new projects
├── README.md           # Main repository documentation
└── CONTRIBUTING.md     # This file
```

## 🚀 Starting a New Week's Project

### Option 1: Using the TEMPLATE

1. **Copy the template directory:**
   ```bash
   cp -r TEMPLATE/ weekX/
   cd weekX/
   ```

2. **Update the project details:**
   - Edit `package.json`: Change `name` to `weekX-project-name`
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
   mkdir weekX/
   cd weekX/
   ```

2. **Initialize your project** (React, Node.js, Python, etc.)

3. **Add a README.md** with:
   - Project description
   - Tech stack
   - Setup instructions
   - Features/objectives

## 📝 Naming Conventions

- **Directory names:** Use `week1/`, `week2/`, `week3/`, etc.
- **Package names:** Use format `weekX-project-description` (e.g., `week1-snake-game`)
- **Branch names:** Use `week-X-feature-name` if working on branches

## ✅ Project Checklist

Before considering a week's project complete, ensure:

- [ ] Project runs successfully (`npm start` or equivalent)
- [ ] README.md exists with clear documentation
- [ ] Dependencies are listed in package.json
- [ ] Project-specific .env files are in the project directory (not root)
- [ ] Main repository README.md is updated with project link and description
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
