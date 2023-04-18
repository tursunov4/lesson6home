<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto text-center">
        <appModal v-model="dialog">
          <div class=" col-md-6 mx-auto">
            <h1 class="text-center m-3">Add Users </h1>
              <input @change="(e)=>store.state.name= e.target.value" class="m-2 form-control " type="text" placeholder="Enter your name">         
              <input @change="(e)=>store.state.username= e.target.value" class="m-2 form-control " type="text" placeholder="Enter your username">         
              <input @change="(e)=>store.state.address= e.target.value" class="m-2 form-control " type="text" placeholder="Enter your address">         
              <input @change="(e)=>store.state.number= e.target.value" class="m-2 form-control " type="number" placeholder="Enter your number">         
            <button @click="handleClick" class="btn btn-success text-center">Add</button>
          </div>
        </appModal>
        <button class="btn btn-success m-5 " @click="dialog = true">Add Users</button>

        <table class="table table-striped table-hover">
           <thead>
               <tr >
                 <th>T/R</th>
                 <th>Name</th>
                 <th>UserName</th>
                 <th>Address</th>
                 <th>Number</th>
                 <th>Actions</th>
               </tr>
           </thead>
           <tbody>
               <tr  v-for="(item , index) in store.state.users"  :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.username }}</td>
                  <td>{{ item.address }}</td>
                  <td>{{ item.number }}</td>
                  <td> <button @click="()=>deletBut(item.id)" class="btn btn-danger">delet</button></td>
               </tr>
           </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import {  ref } from 'vue';
import appModal from '@/components/ui/app-modal.vue';
import store from '@/store';
const name=ref('')

const handleClick =()=>{
  store.state.users = [...store.state.users , {name :store.state.name , id : store.state.users.length+1  , username :store.state.username , number : store.state.number, address : store.state.address}]
  dialog.value=false
   store.state.name = ''
   store.state.username = ''
   store.state.address = ''
   store.state.number = ''
}
const deletBut=(id)=>{
  store.state.users = store.state.users.filter((item , index) => item.id != id)
}

const dialog = ref(false)


</script>
