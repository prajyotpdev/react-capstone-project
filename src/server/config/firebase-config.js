
const config = {
     apiKey: "AIzaSyD69dPG4N6ukN7QOr-eAOU3KNX-4OUk_MM",
     authDomain: "rekord-a64f0.firebaseapp.com",
     projectId: "rekord-a64f0",
     storageBucket: "rekord-a64f0.appspot.com",
     messagingSenderId: "158422557848",
     appId: "1:158422557848:web:e1f8615e022c8599d51ced"
   };
 
   export function getFirebaseConfig() {
     if (!config || !config.apiKey) {
       throw new Error('No Firebase configuration object provided.' + '\n' +
       'Add your web app\'s configuration object to firebase-config.ts');
     } else {
       return config;
     }
   }    
   