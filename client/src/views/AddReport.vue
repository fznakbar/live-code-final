<template>
    <form v-on:submit.prevent="addReport">
            <label for="username">Cases:</label><br>
            <input type="number" v-model="username_login" required><br>
            <label for="lname">Password:</label><br>
            <input type="text" v-model="password_login" required><br><br>
            <input type="submit" value="Login">
        </form>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {

        }
    },
    methods : {
        addReport(){
        axios({
                method : 'post',
                url : 'http://localhost:3000/reports',
                headers : {
                    token : localStorage.getItem('token')
                }
            })
            .then(()=>{
                this.$store.dispatch('seeReports')
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>