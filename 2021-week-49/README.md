# 2021 Week 49

**Project**: Build a TodoApp using ReactJS, NextJS, and Supabase.

**Tutorial Guide**: https://www.freecodecamp.org/news/how-to-build-a-todoapp-using-react-and-supabase/

**To Do**:
- [x] get started with React JS
- [x] get started with Next JS
- [ ] get started with Supabase
- [ ] build a TodoApp

## Overview

- [Getting Started](#getting-started)

## Getting Started

### ReactJS

#### Resources:
- 100 Seconds Intro: https://www.youtube.com/watch?v=Tn6-PIqc4UM
- Documentation: https://reactjs.org/docs/getting-started.html
- Awesome: https://github.com/enaqx/awesome-react
- Intro Tutorial: https://reactjs.org/tutorial/tutorial.html

#### Intro Tutorial Notes:

1.  Install Node.js: https://nodejs.org/en/. Check if Node.js is installed: `node -v` and `npm -v`.

2.  Create New React App: https://reactjs.org/docs/create-a-new-react-app.html#create-react-app.
    -   Create:
        ```
        cd react-intro
        npx create-react-app tic-tac-toe
        ```
    -   Run React App: 
        ```
        cd react-intro/tic-tac-toe && npm start
        ```
    -   Try production build: 
        ```
        cd react-intro/tic-tac-toe
        npm run build
        npm install -g serve
        sudo npm install -g serve
        serve -s build
        ```

3.  Run Tic-Tac-Toe App:
    ```
    cd react-intro/tic-tac-toe && npm start
    ```

### NextJS

#### Resources:
- 100 Seconds Intro: https://www.youtube.com/watch?v=Sklc_fQBmcs&ab_channel=Fireship
- Documentation: https://nextjs.org/docs/getting-started
- Awesome: https://github.com/unicodeveloper/awesome-nextjs
- Intro Tutorial: https://github.com/fireship-io/nextjs-basics

#### Intro Tutorial Notes:

1.  Create New Next App:
    ```
    cd next-intro
    npx create-next-app next-demo-app
    ```

2.  Run Next "Dev" App:
    ```
    cd next-intro/next-demo-app && npm run dev
    ```

3.  Test Hello Page: http://localhost:3000/hello

4.  Test Cars Page: http://localhost:3000/cars

5.  Test dynamic routing inside cars page: 
    - http://localhost:3000/cars/tesla
    - http://localhost:3000/cars/lambo
    - http://localhost:3000/cars/ford
