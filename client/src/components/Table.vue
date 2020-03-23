<template>
    <div>
        <table class="table table-striped border" border="1">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Country</th>
                    <th>Cases</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(country, index) in data" :key="country.id">
                    <th>{{index += 1}}</th>
                    <th>{{country.name}}</th>
                    <th>{{country.cases}}</th>
                    <th>{{country.deaths}}</th>
                    <th>{{country.recovered}}</th>
                    <th><a @click="addReport(country.id)" class="btn btn-info">Add Report</a></th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data () {
        return {

        }
    },
    computed : mapState(['data']),
    created() {
        this.$store.dispatch('getData')
    },
    methods : {
        addReport(){
            this.$route.push({
                path : '/addreport'
            })
        }
    }

}
</script>