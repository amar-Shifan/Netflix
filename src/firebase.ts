import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
         getAuth,
         signInWithEmailAndPassword, 
         signOut
    } from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAuYTYcQewpyPnLRm4CB5SML6Z-WTaNDYc",
  authDomain: "netflixclone-470d7.firebaseapp.com",
  projectId: "netflixclone-470d7",
  storageBucket: "netflixclone-470d7.firebasestorage.app",
  messagingSenderId: "537293251653",
  appId: "1:537293251653:web:dd8d1b60502d516686ef2c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

type signUpType = {
    name:string;
    email:string;
    password: string;
}

const signup = async ({name , email , password}: signUpType) => {
    try {
        const response = await createUserWithEmailAndPassword(auth , email , password)
        const user = response.user
        await addDoc(collection(db , 'user') , {
            uid: user.uid,
            name,
            authProvider: 'local',
            email
        })
    } catch (error) {
        console.log('error in firebase' , error)
        alert(error);
    }
}

type loginType = {
    email: string;
    password: string;
}

const login = async ( { email, password }: loginType) => {
    try {
        await signInWithEmailAndPassword(auth , email , password)
    } catch (error) {
        console.log(error)
        alert(error)
    }
}

const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error)
    }
}


export {auth , db , login ,signup , logout}