<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/api">API</router-link>
  </nav>
  <router-view/>
</template>

<script>
  // the relevant methods
  import { collection, addDoc } from "firebase/firestore"
  // the firestore instance
  import db from './firebase/init.js'

  export default {
    created() {
      this.createUser()
    },
    methods: {
      async createUser() {
        // 'users' collection reference
        const colRef = collection(db, 'users')
        // data to send
        const dataObj = {
          firstName: 'John',
          lastName: 'Doe',
          dob: '1990'
        }

        // create document and return reference to it
        const docRef = await addDoc(colRef, dataObj)

        // access auto-generated ID with '.id'
        console.log('Document was created with ID:', docRef.id)
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
