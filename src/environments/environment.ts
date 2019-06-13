// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    /*
    apiKey: "AIzaSyDSim_G3_YBA3folNagSC_wzMgBnwiWR04",
    authDomain: "sisventadeportiva.firebaseapp.com",
    databaseURL: "https://sisventadeportiva.firebaseio.com",
    projectId: "sisventadeportiva",
    storageBucket: "sisventadeportiva.appspot.com",
    messagingSenderId: "678583436635",
    appId: "1:678583436635:web:bcf410fef75349ba"*/

    apiKey: 'AIzaSyClFQVNkihO81jkMU7OPU6pKPlxpNE8mdU',
    authDomain: 'shoes-store-edd84.firebaseapp.com',
    databaseURL: 'https://shoes-store-edd84.firebaseio.com',
    projectId: 'shoes-store-edd84',
    storageBucket: 'shoes-store-edd84.appspot.com',
    messagingSenderId: '425819031764',
    appId: '1:425819031764:web:f733e5edb2cd4c9e'
  },
  stripeKey: 'pk_test_WdIBoJadHNZGwqWnuFsP5LKu003JwrFPH1',
};

export const test = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDSim_G3_YBA3folNagSC_wzMgBnwiWR04",
    authDomain: "sisventadeportiva.firebaseapp.com",
    databaseURL: "https://sisventadeportiva.firebaseio.com",
    projectId: "sisventadeportiva",
    storageBucket: "sisventadeportiva.appspot.com",
    messagingSenderId: "678583436635",
    appId: "1:678583436635:web:666020a3a8577a79"
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
