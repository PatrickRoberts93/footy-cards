// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBT4IN-uJxUVwEtUENE01_vLCc4RY7rW0w",
    authDomain: "rugby-league-cards.firebaseapp.com",
    databaseURL: "https://rugby-league-cards.firebaseio.com",
    projectId: "rugby-league-cards",
    storageBucket: "rugby-league-cards.appspot.com",
    messagingSenderId: "523916588030"
  }
};
