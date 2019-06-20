import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBDqqVByGKy_la9Iq4aAsO0hpds2vVIlEA",
    authDomain: "quackv2-8cca2.firebaseapp.com",
    databaseURL: "https://quackv2-8cca2.firebaseio.com",
    projectId: "quackv2-8cca2",
    storageBucket: "quackv2-8cca2.appspot.com",
    messagingSenderId: "sender-id",
    appID: "1:157508921688:ios:87cff8d4742e1d53",
};

firebase.initializeApp(firebaseConfig);