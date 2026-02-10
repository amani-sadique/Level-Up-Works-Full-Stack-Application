# Welcome to your Mission X Repo for the frontend

# First Git Actions

- After cloning and pulling the base project please create on your local machines your own development branch and push to remote
- Commit often
- Please put concise and precise commit messages
- Push often
- For more information, refer to the Git workflow

# Below are some guidelines so that we all code in sync

## Sample React project structure

There is no particular official project structure for React. I've followed some of the commonly used practices for code organization in react projects in this sample code.

Typically within the src folder anything component related such as a component file and its corresponding CSS files should start with a capital letter (and if applicable a folder that houses a specific component) - all other files and folders should be lowercase. So for example, if you have a page/component called "StudentDashboard.js" it should indeed be named "StudentDashboard.js". Or if your page/component is made of multiple components, then your folder name could also reflect the exact component name and format for example "StudentDashboard" folder which houses "StudentDashboard.js" and its related components. Ultimately though, so long as you and your team all follow an agreed upon format, that is the main thing, otherwise you will run into conflicts upon merging. Again, there is no ideal structure for all projects, but you could start with the below structure:

```
|--public
|  |-images (get from public/images folder in the portal)
|--src
|  |-assets (get from src/assets folder in the portal)
|  |-pages
|  |  |-Home
|  |  |  |-components (all reusable components that make up the page)
|  |  |  |  |-component1
|  |  |  |-Home.jsx
|  |  |-StudentDashboard
|  |  |  |-components (all reusable components that make up the page)
|  |  |  |  |-component1
|  |  |  |-StudentDashboard.jsx
|  |-common (all reusable components that might be used on multiple pages)
|  |  |-Navbar.jsx
```

Ideally no new major folders are to be created unless discussed with your team first to avoid conflicts/confusion.

## Naming Conventions:

- All components/pages should be written in camelCase but with the first letter capitalised: - ie: HomePageNavBar.js - HomePageFooter.js - StudentProfileNavBar.js

- If your team decides to use CSS modules, make sure you name your CSS classes with camelCase

## Images

Keep in mind that as a team, you should have an images folder inside of the public folder, and an images (commonly named "assets") folder inside of your src folder. To access images in the public folder, you don't need to "import" them at the top of your component files, you can specify a path to them, React will always search in the public folder if a path is specified. So your paths (in the src attribute) for images in the public folder will likely be something like: /images/students/AliceKindellan.png

# How to Start:

1. After cloning this repo to your local directory, change to the project directory first:

### `cd current-repo-name`

2. And then install packages:

### `npm install` or `npm i`

3. Runs the app in the development mode:

### `npm run dev`

Ctrl + Click the link in your terminal [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
