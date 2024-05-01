<!-- Challenge: separate components for each form like in https://play.vuejs.org/#eNqVUcFOAjEU/JVnL2gguxo9kYUohEQ9qFEvJr2suw8o7Lab9hUxm/132y6gBCXx0KSdmTdvJq3ZTVVFK4uszxKTaVERGCRbDbkUZaU0wcgSKTlWVhJqmGpVQieK91Bv0OEyiVsHN+sehGVVpIT+Rcn8YniLGiF1p0zlJ2RzUeSQKbdEoiRzksROE7T7G+N/gUm828t67CDl3zVr0DiFZlOwLcRlpqQhl9IZwMArTs/PjhQFSN7DSrjOCpEtB5yF2W6Xs0ADvCkLgcMcSoS63rg3DZAo0UTBJW5tDgqRcYmmYhYtjJKuTO3VfklZiQL1Y0XCJeasD4HxXFoU6uM+YKQt9rZ4Nsds+Qu+MGuPcfak0aBeIWc7jlI9Q2rpycsDrt19R5Yqt4VTHyGf0ajC+oytbGRl7mL/0IW0d+FLhJy9msmaUJptKR/UK5ug58x90/hI9e+4l9FVmOOyYc0XEp0C/Q== -->
<template>
    <div>
      <h2>Create users document</h2>
        <input type="text" v-model="userData.firstName" /></br>
        <input type="text" v-model="userData.lastName" /></br>
        <input type="text" v-model="userData.birthdate" /></br>
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
    