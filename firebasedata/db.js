import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_apiKey,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_authDomain,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_databaseURL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_appId,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_measurementId,
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth

export { db, auth, firebase }
