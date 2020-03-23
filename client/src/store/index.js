import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data : [],
    reports : [],
  },
  mutations: {
    setData : (state, data) => {
      state.data = data
    },
    setReports : (state, data) =>{
      state.reports = data
    }
  },
  actions: {
    getData(context) {
      axios({
        method : 'get',
        url : 'http://localhost:3000/countries',
        headers : {
          token : localStorage.getItem('token')
        }
      })
      .then(data=>{
        context.commit('setData', data.data)
      })
      .catch(err=>{
        console.log(err)
      })
    },
    seeReports(context){  
      axios({
        method : 'get',
        url : 'http://localhost:3000/reports',
        headers : {
          token : localStorage.getItem('token')
        }
      })
      .then(data=>{
        context.commit('setReports', data.data)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  modules: {
  }
})
