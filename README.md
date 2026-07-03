# Playwright SQA Bootcamp Project

This is a very small Playwright project for SQA bootcamp students. It is built
to be easy to understand, easy to push to GitHub, and useful for teaching why
version control matters.

## What students learn

- How to run a simple local web app
- How to automate a login flow with Playwright
- How to save progress with Git commits
- How to create a feature branch for test improvements
- How to push the project to GitHub

## Project structure

```text
playwright-sqa-bootcamp/
├── public/
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── tests/
│   └── login-flow.js
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Run the project

```bash
npm install
npm test
```

This runs the Playwright script directly against the local HTML page.

If you want to preview the demo app in the browser:

```bash
npm start
```

Then visit `http://127.0.0.1:3000`.

## Why Git matters in this project

This project is intentionally simple so students can focus on Git habits:

- Commit the first working automation
- Create a new branch for extra assertions
- Compare changes before and after improvements
- Revert a mistake without losing all work
- Push clean history to GitHub

## Suggested classroom workflow

```bash
git init
git add .
git commit -m "Create simple Playwright login automation"

git checkout -b add-more-checks
```

Then students can improve `tests/login-flow.js` by adding:

- One more assertion for the page title
- One more assertion for the checklist items
- A negative test for wrong password

After that:

```bash
git add .
git commit -m "Add stronger Playwright checks"
git push -u origin main
```

## GitHub setup

```bash
git remote add origin https://github.com/YOUR-USERNAME/playwright-sqa-bootcamp.git
git branch -M main
git push -u origin main
```

## Teaching idea

Ask students to first break the password in `public/app.js`, run the test, and
watch it fail. Then ask them to use Git to inspect changes and fix the issue in
a new commit. That shows the practical value of version control instead of only
explaining it in theory.
