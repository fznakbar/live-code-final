<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="" @click="home">Home <span class="sr-only">(current)</span></a>
            </li>
            </ul>
        </div>
        <a class="btn btn-primary" @click="logout">Logout</a>
    </nav>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods : {
        home(){
            this.$router.push({
                path : '/'
            })
        },
        logout(){
            localStorage.removeItem('token')
            this.$router.push({
                path : '/login'
            })
        }
    }
}
</script>