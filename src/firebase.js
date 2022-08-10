import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAmNzdeCDWeIXslAHHM1SDrajq21Di8pJU",
  authDomain: "gdrive-clone-efaa7.firebaseapp.com",
  projectId: "gdrive-clone-efaa7",
  storageBucket: "gdrive-clone-efaa7.appspot.com",
  messagingSenderId: "15294631670",
  appId: "1:15294631670:web:41c86c1baf938cabd7e6d7"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
