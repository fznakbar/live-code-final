<template>
    <div>
        <h1>Covid - 19 Information LOGIN</h1>
        <form v-on:submit.prevent="login">
            <label for="username">Username:</label><br>
            <input type="text" v-model="username_login" required><br>
            <label for="lname">Password:</label><br>
            <input type="text" v-model="password_login" required><br><br>
            <input type="submit" value="Login">
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            username_login : null,
            password_login : null
        }
    },
    methods : {
        login(){
            axios({
                method : 'post',
                url : 'http://localhost:3000/login',
                data : {
                    username : this.username_login,
                    password : this.password_login
                }
            })
            .then(response=>{
                localStorage.setItem('token', response.data.token)
                this.$router.push({
                    path : '/'
                })
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>