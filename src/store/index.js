import { createStore } from 'vuex'
import Counter from './counter/counter'
import Auth from './auth/auth'
export default createStore({
    state:{
      name :'',
      username:"",
      address :"",
      number :"",
      users:[]
    },
   modules: {
 
  }
})
