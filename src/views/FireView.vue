<template>
    <div>
      <h2>Create users document</h2>
        <input type="text" v-model="userData.firstName" /></br>
        <input type="text" v-model="userData.lastName" /></br>
        <input type="text" v-model="userData.birthDate" /></br>
        <button @click="handleCreateUser">Create</button>
    </div>
</template>
  
<script>
import { createUser } from '../scripts/dbscripts.js';  // Adjust the path as necessary

export default {
  data() {
    return {
      userData: {
        firstName: '',
        lastName: '',
        birthdate: '',
      }
    };
  },
  methods: {
    async handleCreateUser() {
      try {
        const docRef = await createUser(this.userData);
        console.log('User created with ID:', docRef.id);
        this.resetForm();
      } catch (error) {
        console.error('Failed to create user:', error);
      }
    },
    resetForm() {
      this.userData.firstName = '';
      this.userData.lastName = '';
      this.userData.birthdate = '';
    }
  }
}
</script>
    