<template>
    <div>
      <button @click="getUsers">Get users</button><br/>
  
      <div class="users" v-for="user in users" :key="user.id">
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
      </div>
    </div>
</template>
  
<script>
    import axios from "axios";
    import { ref } from 'vue';
    
    export default {
      setup() {
        const users = ref([]);
    
        const getUsers = async () => {
          try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            users.value = response.data;
          } catch (e) {
            console.error(e);
          }
        };
    
        return {
          users,
          getUsers
        };
      }
    }
</script>
    