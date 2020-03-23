<template>
  <div class="home">
    <Navbar />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="container">
     <h1>Covid 19 Data Around The World</h1>
     <a href="" class="btn btn-warning" @click="seeReport">See your reports</a>
     <Table />
    </div>
  </div>
</template>

<script>
import Table from '../components/Table'
import Navbar from '../components/NavBar'
// import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Table, Navbar
  },
  methods : {
    seeReport(){
      this.$router.push({
        path : '/reports'
      })
    }
  }
}
</script>
