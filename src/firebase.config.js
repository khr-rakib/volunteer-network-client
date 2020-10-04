import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyB7IDyqAfk2fSy8p4v10fpNOF71XaDCHG0",
  authDomain: "volunteer-network-a985c.firebaseapp.com",
  databaseURL: "https://volunteer-network-a985c.firebaseio.com",
  projectId: "volunteer-network-a985c",
  storageBucket: "volunteer-network-a985c.appspot.com",
  messagingSenderId: "1043170540241",
  appId: "1:1043170540241:web:e671323f32ac32f878e3f0",
});

const auth = firebase.auth();

export default auth;
