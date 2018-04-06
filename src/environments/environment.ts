// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: 'AIzaSyBYlpOqBLAHUhRXcZr9zmZuTAw7GwXQ0QM',
    authDomain: 'albert-alert.firebaseapp.com',
    databaseURL: 'https://albert-alert.firebaseio.com',
    projectId: 'albert-alert',
    storageBucket: '',
    messagingSenderId: '629866841082'
  }
};
