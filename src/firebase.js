import firebase from 'firebase/app'
import 'firebase/auth'
const app = firebase.initializeApp({
    apiKey: "AIzaSyCbLf4ObKhyLfTGmopTkLxOdkYl5CTMlQ8",
    authDomain: "auth-project-85d7b.firebaseapp.com",
    projectId: "auth-project-85d7b",
    storageBucket: "auth-project-85d7b.appspot.com",
    messagingSenderId: "787474410015",
    appId: "1:787474410015:web:236fceb44011377115432a"
})
export const auth = app.auth();
export default app