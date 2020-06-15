import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC5Sg4zD9-I6GpJeZBP3EaszxVzU8JkOsU',
  authDomain: 'travelapp-deb06.firebaseapp.com',
  databaseURL: 'https://travelapp-deb06.firebaseio.com',
  projectId: 'travelapp-deb06',
  storageBucket: 'travelapp-deb06.appspot.com',
  messagingSenderId: '77323621470',
  appId: '1:77323621470:web:a933cbe6cd7b26195310cf',
  measurementId: 'G-HYS9M212Y6',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
