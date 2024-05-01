<template>
    <div>
        <h2>Add user</h2>
        <input type="text" v-model="name" /></br>
        <input type="text" v-model="email" /></br>
        <button @click="createUser">Post User</button>
    <div>
</template>

<script setup>
    import {ref} from 'vue'
    import axios from 'axios'
    const users = ref([])
    const name = ref("")
    const email = ref("")

    // HTTP GET
    const getUsers = async () => {
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            users.value = response.data
        }
        catch(e){
            console.error(e)
        }
    }

    // HTTP POST
    const postUser = async () => {
        try{
            const user = await axios.post(
                "https://jsonplaceholder.typicode.com/users",
                {
                    name: name.value,
                    email: email.value
                }
            )
            console.log(user)
            getUsers()
        }
        catch(e){
            console.error(e)
        }
    }
</script>