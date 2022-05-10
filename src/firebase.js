import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyA6hiJWwMBOySSls_vuEjNE6ygDXRp9hjY",
  authDomain: "esoteric-state-337906.firebaseapp.com",
  databaseURL: "https://esoteric-state-337906-default-rtdb.firebaseio.com",
  projectId: "esoteric-state-337906",
  storageBucket: "esoteric-state-337906.appspot.com",
  messagingSenderId: "302101700450",
  appId: "1:302101700450:web:c76ff1857e318f90c5963b",
  measurementId: "G-74JYSF04N2"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}

// export const getUser = async id => {
//   const user = await usersCollection.doc(id).get()
//   return user.exists ? user.data() : null
// }

// export const updateUser = (id, user) => {
//   return usersCollection.doc(id).update(user)
// }

// export const deleteUser = id => {
//   return usersCollection.doc(id).delete()
// }

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
