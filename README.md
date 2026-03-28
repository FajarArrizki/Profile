# Profile

This is a simple React project for displaying profile pages.  
The project uses React, Vite, Tailwind CSS, and React Router DOM.

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router DOM

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

Each member should work on their own branch.

Suggested branch names:

- `khalimatus-saharani-pramudyah`
- `salsabila-khairunnisa-lumbantobing`
- `fajar-arrizki`

### Create your branch

Choose the branch name that matches your name:

```bash
git checkout -b khalimatus-saharani-pramudyah
```

```bash
git checkout -b salsabila-khairunnisa-lumbantobing
```

```bash
git checkout -b fajar-arrizki
```

## Commit Workflow

After making changes, follow these steps.

### 1. Check changed files

```bash
git status
```

### 2. Add files to staging

```bash
git add .
```

### 3. Create a commit

Example:

```bash
git commit -m "feat: update profile page"
```

## Push Workflow

Push your work to your own branch.

For Khalimatus:

```bash
git push origin khalimatus-saharani-pramudyah
```

For Salsabila:

```bash
git push origin salsabila-khairunnisa-lumbantobing
```

For Fajar:

```bash
git push origin fajar-arrizki
```

## Project Structure

Main folders used in this project:

```bash
src/
  components/
  layouts/
  pages/
  routes/
```

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
- route setup using React Router DOM
- reusable `NameCard` component
- profile pages for:
  - Khalimatus Saharani Pramudyah
  - Salsabila Khairunnisa Lumbantobing
  - Fajar Arrizki
- cleanup of unused files such as old auth and protected route files

## Render Flow

The application flow is:

`main.jsx` -> `App.jsx` -> `AppRouter.jsx` -> `MainLayout.jsx` -> `pages` -> `components/NameCard.jsx`

## Notes

- This project is still a simple starter project.
- The structure is clean and ready to be extended later.
- Each member should work on their own branch before merging changes.
