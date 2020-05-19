This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### built using github-API and cra. 
live version here : https://lav-hinsu.netlify.app/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `serve -s build`

serves app locally for production testing

### `npm -i -g netlify-cli`

installs netlify cli

### `netlify deploy`

deploys a draft version of the app to netlify.

(note: you will have to make a redirect rule to ./build folder (or the folder you want to specify to netlify) because of how react-router-dom works)

### `netlify deploy --prod`

deploys a production version of the app to netlify

### Can i copy this?

sure. just fork it and change relevant info. there's a github token you should change. 
make sure the token you create doesn't have any permission. you don't need any permissions, 
you just need it to increase your github api rate limit.

### How do i filter for repos i want to showcase in the profile? 

add (portfolio) in the description of the repo. only those repos will be shown in the app.
i do this because i have tons of forks i do for easy access and from different organizations

### Why do some repos don't have language data? 

because github api doesn't show language data for forked repos, even if you were the author.
you could use octokit for this if you absolutely want to show data.

### is this responsive? 

i tried my best to make it as responsive as possible, however some devices may still show some wierd stuff. open a issue with the device name, or a pull request.
