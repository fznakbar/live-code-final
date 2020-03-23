<template>
    <div>
        <Navbar />
        <h1>Your Reports</h1>
        <table class="table table-striped border" border="1">
            <thead>
                <tr>
                    <td>No</td>
                    <td>Cases</td>
                    <td>Country</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(report, index) in reports" :key="report.id">
                    <td>{{index += 1}}</td>
                    <td>{{report.cases}}</td>
                    <td>{{report.Country.name}}</td>
                    <td @click="deleteReport(report.id)" class="btn btn-danger">Delete</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from './NavBar'
import axios from 'axios'
export default {
    components : {Navbar},
    data () {
        return {

        }
    },
    computed : mapState(['reports']),
    created(){
        this.$store.dispatch('seeReports')
    },
    methods : {
        deleteReport(id){
            axios({
                method : 'delete',
                url : `http://localhost:3000/reports/${id}`,
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