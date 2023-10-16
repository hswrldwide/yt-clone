import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyCXhW5tvGb1TIYDDY8MMWg-GOEJ8nhSm7w",
   authDomain: "himanshu-yt.firebaseapp.com",
   projectId: "himanshu-yt",
   storageBucket: "himanshu-yt.appspot.com",
   messagingSenderId: "60701928272",
   appId: "1:60701928272:web:26ba1bbe9babeab40c5a55"
 };

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
