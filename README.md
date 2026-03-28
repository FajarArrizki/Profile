# Profile

This is a simple React project for displaying profile pages.  
The project uses React, Vite, Tailwind CSS, and React Router DOM.

## Tech Tools

- React
- Vite
- Tailwind CSS
- React Router DOM
- Git
- GitHub
- npm

## Repository

GitHub repository:

```bash
https://github.com/FajarArrizki/Profile.git
```

## Getting Started

### 1. Clone the repository

Use this command to download the project to your computer:

```bash
git clone https://github.com/FajarArrizki/Profile.git
```

### 2. Open the project folder

After cloning, move into the project directory:

```bash
cd Profile
```

### 3. Install dependencies

Install all required packages before running the project:

```bash
npm install
```

### 4. Run the development server

Start the project in development mode:

```bash
npm run dev
```

### 5. Build for production

Create an optimized production build:

```bash
npm run build
```

## Branch Workflow

Each member should create and use their own branch before starting work.

Suggested branch names:

- `khalimatus-saharani-pramudyah`
- `salsabila-khairunnisa-lumbantobing`
- `fajar-arrizki`

### Step 1. Check the current branch

Before creating a new branch, check which branch is currently active:

```bash
git branch --show-current
```

### Step 2. Create your own branch

Choose the branch name that matches your name:

For Khalimatus:

```bash
git checkout -b khalimatus-saharani-pramudyah
```

For Salsabila:

```bash
git checkout -b salsabila-khairunnisa-lumbantobing
```

For Fajar:

```bash
git checkout -b fajar-arrizki
```

### Step 3. Make your changes in your own branch

After switching to your branch, update only your own profile page and related files.

### Step 4. Check changed files

```bash
git status
```

### Step 5. Add files to staging

```bash
git add .
```

### Step 6. Create a commit

Example:

```bash
git commit -m "feat: update profile page"
```

### Step 7. Push to your own branch

Push your work to the same branch you created earlier.

For Khalimatus:

```bash
git push -u origin khalimatus-saharani-pramudyah
```

For Salsabila:

```bash
git push -u origin salsabila-khairunnisa-lumbantobing
```

For Fajar:

```bash
git push -u origin fajar-arrizki
```

### Step 8. Update the `main` branch

After your branch has been pushed, the changes should also be added to the `main` branch.

Recommended workflow:

1. Push your personal branch first.
2. Open a Pull Request from your branch to `main`.
3. Review the changes.
4. Merge the branch into `main`.

If you are updating `main` locally after the merge, use:

```bash
git checkout main
git pull origin main
```

If the repository owner wants to merge directly from a local machine, merge each completed branch into `main` one by one:

```bash
git checkout main
git pull origin main
git merge khalimatus-saharani-pramudyah
git merge salsabila-khairunnisa-lumbantobing
git merge fajar-arrizki
git push origin main
```

Only merge branches that are finished and already reviewed. If there is a conflict, resolve it first before continuing to the next branch.

### Important Notes

- Do not rename your branch to `main` if you want to push to your personal branch.
- Create the branch first, then work, then commit, then push to the same branch.
- The branch name in `git push` must match the branch name created with `git checkout -b`.
- After updating your personal branch, the final approved changes should also be merged into `main`.
- To keep `main` fully synchronized, merge all approved member branches into `main`, not just one branch.

## Project Structure

Main folders used in this project:

```bash
.
|-- src/
|   |-- components/
|   |   |-- NameCard.jsx
|   |   `-- profile/
|   |      |-- ProfileAboutSection.jsx
|   |      |-- ProfileActionBadge.jsx
|   |      |-- ProfileCard.jsx
|   |      |-- ProfileHero.jsx
|   |      |-- ProfileInfoItem.jsx
|   |      |-- ProfileProjectsSection.jsx
|   |      |-- ProfileSocialLinks.jsx
|   |      |-- ProfileTechStackSection.jsx
|   |      |-- ProjectCardItem.jsx
|   |      |-- SocialBadge.jsx
|   |      |-- TechStackBadge.jsx
|   |      `-- TechStackIcon.jsx
|   |-- layouts/
|   |   `-- MainLayout.jsx
|   |-- pages/
|   |   |-- KhalimatusPage.jsx
|   |   |-- SalsabilaPage.jsx
|   |   `-- FajarPage.jsx
|   |-- routes/
|   |   `-- AppRouter.jsx
|   |-- App.jsx
|   |-- main.jsx
|   `-- index.css
|-- index.html
|-- package.json
|-- package-lock.json
|-- vite.config.js
|-- .gitignore
`-- README.md
```

### Structure Explanation

```bash
src/
  components/
  layouts/
  pages/
  routes/
```

- `src/components/`
  Stores reusable UI components.
  This folder now contains shared profile UI components.

- `src/components/profile/`
  Stores modular profile sections such as hero, tech stack, projects, social badges, and about section.
  Current examples:
  - `ProfileCard.jsx`
  - `ProfileHero.jsx`
  - `ProfileTechStackSection.jsx`
  - `ProfileProjectsSection.jsx`
  - `ProfileAboutSection.jsx`

- `src/layouts/`
  Stores layout files used across pages.
  Current example: `MainLayout.jsx`

- `src/pages/`
  Stores page-level components.
  Current examples:
  - `KhalimatusPage.jsx`
  - `SalsabilaPage.jsx`
  - `FajarPage.jsx`

- `src/routes/`
  Stores routing configuration.
  Current example: `AppRouter.jsx`

- `src/App.jsx`
  Main root component of the application.

- `src/main.jsx`
  Entry point that renders the React app into the DOM.

- `src/index.css`
  Global styling file for Tailwind CSS and base styles.

- `index.html`
  Main HTML template used by Vite.

- `package.json`
  Stores project name, scripts, and dependencies.

- `vite.config.js`
  Configuration file for Vite.

- `.gitignore`
  Prevents unnecessary files such as `node_modules` and `dist` from being committed.

## What Should Be Built

The main task in this project is to complete the profile content for each member.

Each profile page must contain:

- full name
- class
- major or study program
- domicile
- profile photo
- about me / self description with a minimum of 100 words


## Development Workflow

To keep the project clean, follow this workflow when adding new code:

### 1. Create reusable components in the `components` folder

If the UI will be used more than once, create it inside:

```bash
src/components/
```

Examples:

- profile card
- button
- section title
- avatar box

### 2. Create page-level files in the `pages` folder

If the file represents one full page, create it inside:

```bash
src/pages/
```

Examples:

- `KhalimatusPage.jsx`
- `SalsabilaPage.jsx`
- `FajarPage.jsx`

### 3. Put layout code in the `layouts` folder

If the code is part of the main page structure such as navbar or page wrapper, place it inside:

```bash
src/layouts/
```

Current example:

- `MainLayout.jsx`

### 4. Update routes in the `routes` folder

When a new page is created, register the route inside:

```bash
src/routes/AppRouter.jsx
```

### 5. Fill in each member profile page

Each member should focus on completing their own page content.

Example tasks:

- Khalimatus updates `KhalimatusPage.jsx`
- Salsabila updates `SalsabilaPage.jsx`
- Fajar updates `FajarPage.jsx`

The page content can include:

- name
- class
- major or study program
- domicile
- profile photo
- about me / self description with a minimum of 100 words

### 6. Add styling with Tailwind CSS

Use Tailwind utility classes directly inside components and pages.

Global styles are stored in:

```bash
src/index.css
```

## Current Completed Work

The following parts have already been completed in this version:

- project setup with React and Vite
- Tailwind CSS integration
- navbar layout with title and React logo
- footer section
- route setup using React Router DOM
- modular profile component system
- social badges for GitHub, LinkedIn, and Instagram
- tech stack section
- projects section
- about me section with collapse / expand button
- profile pages for:
  - Khalimatus Saharani Pramudyah
  - Salsabila Khairunnisa Lumbantobing
  - Fajar Arrizki
- cleanup of unused files such as old auth and protected route files

## Render Flow

The application flow is:

`main.jsx` -> `App.jsx` -> `AppRouter.jsx` -> `MainLayout.jsx` -> `pages` -> `components/profile/*`

## Notes

- This project is still a simple starter project.
- The structure is clean and ready to be extended later.
- Each member should work on their own branch before merging changes.
