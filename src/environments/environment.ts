// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // apiURL: 'https://development.d2sku90pz3iu04.amplifyapp.com/home' // for testing purpose since development pulls from github branch so environment stays default
  apiURL: 'http://localhost:4200/home',

  stripe:{
    testKey:'pk_test_51J5pLGGMvqm1YdKKUFJOjUuZ6hGaIXpMIrRObpgztkVTWH8BGBNM4iqsfziUB4R87YAjraNhD2YhK0rSYJmdQ6Nw00YlveEQf8'
  },
  firebaseConfig : {
    apiKey: "AIzaSyBEJLWeMjl15gGmJ4pZibplB82xs9hvIqo",
    authDomain: "meelz-312208.firebaseapp.com",
    projectId: "meelz-312208",
    storageBucket: "meelz-312208.appspot.com",
    messagingSenderId: "630108236691",
    appId: "1:630108236691:web:2ce017a3ef9e4090965666"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
