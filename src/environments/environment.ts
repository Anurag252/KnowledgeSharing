// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyAAwZwekOHpe6FtafXae6hNQkzAhWukvM8",
    authDomain: "daily-blogging.firebaseapp.com",
    databaseURL: "https://daily-blogging.firebaseio.com",
    projectId: "daily-blogging",
    storageBucket: "",
    messagingSenderId: "231558788028",
    appId: "1:231558788028:web:cdc71bf75490c85063f1b9"
  }
};