<template>
   <div class="mt-5 mb-5 mx-auto w-10/12">
      <h1>1. Create new transactions</h1>
      <div class="mt-3">
         <input :class="form.nama_item === '' ? 'border-red-600' : ''" v-model="form.nama_item" class="input" type="text" placeholder="Nama item"/>
         <select :class="form.jenis_transaksi === '' ? 'border-red-600' : ''" v-model="form.jenis_transaksi" class="input text-gray-500 focus:text-gray-700">
             <option selected>--Select</option>
             <option value="pemasukan">Pemasukan</option>
             <option value="pengeluaran">Pengeluaran</option>
         </select>
         <div class="flex">
            <span class="block mr-2 text-xl" >Rp</span>
            <input :class="form.nominal_transaksi === 0 || form.nominal_transaksi == '' ? 'border-red-600' : ''" v-model="form.nominal_transaksi" class="input" type="number" placeholder="Nominal transaksi"/>
         </div>
         <input :class="form.tanggal_transaksi === '' ? 'border-red-600' : ''" v-model="form.tanggal_transaksi" class="input" @blur="textInput" @focus="dateInput" type="text" placeholder="Tanggal transaksi"/>
         <small v-if="isEmptyForm" class="block font-semibold mb-2 text-red-500" >! Empty input detected</small>
         <button ref="btnSubmit" @click="postDataKasir" :class="isEmptyForm ? 'bg-blue-300' : 'bg-blue-600'" class="px-3 py-1 disabled:opacity-50 rounded font-semibold text-gray-50" type="button">Submit</button>
      </div>
   </div>
   
   <div class="mt-5 mx-auto w-10/12 overflow-scroll">
      <h1>2. All transactions</h1>
      <span v-if="dataKasir" class="badge">Banyak records : {{ dataKasir.results.length }}</span>
      <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
        <tr class="text-left border-b-2 border-gray-300">
          <th class="px-4 py-3">ID</th>
          <th class="px-4 py-3">Nama item</th>
          <th class="px-4 py-3">Nominal</th>
          <th class="px-4 py-3">Tanggal</th>
          <th class="px-4 py-3">Jenis</th>
          <th class="px-4 py-3">Actions</th>
        </tr>
        
        <tr class="border-b-2 border-gray-300" v-if="dataKasir" v-for="data in dataKasir.results" :key="data.id_transaksi">
           <td class="px-4 py-3">{{ data.id_transaksi }}</td>
           <td class="px-4 py-3">{{ data.nama_item }}</td>
           <td class="px-4 py-3">{{ data.nominal_transaksi }}</td>
           <td class="px-4 py-3">{{ new Date(data.tanggal_transaksi).toLocaleString() }}</td>
           <td class="px-4 py-3">{{ data.jenis_transaksi }}</td>
           <td class="px-4 py-3">
             <button @click="updateDataKasir(data.id_transaksi)" class="bg-green-300 mb-1 mr-1 px-2 rounded" type="button">Edit</button>
             <button @click="deleteDataKasir(data.id_transaksi, getDataKasir)" class="bg-red-400 px-2 rounded" type="button">Delete</button>
           </td>
        </tr>
      </table>
   </div>
   <EditKasir v-on:close_modal="isShowModalEdit = !isShowModalEdit" :isShow="isShowModalEdit" :id-transaksi="updateById">
      
   </EditKasir>
</template>

<script setup >
   
   import  axios from 'axios'
   import { reactive, ref, watch, onMounted } from 'vue'
   import deleteDataKasir from '../components/delete.js'
   import EditKasir from '../components/modal/EditKasir.vue'
   
   //Get data from table
   let dataKasir = ref()
   const getDataKasir = () => {
      axios.get('http://localhost:8080/kasir/all')
         .then( res => dataKasir.value = res.data)
         .catch( err => alert(err))
   }
   onMounted(getDataKasir)
   
   // Edit data kasir
   const isShowModalEdit = ref(true)
   const updateById = ref(null)
   const updateDataKasir = id => {
      isShowModalEdit.value = !isShowModalEdit.value
      updateById.value = id
   }
   
   //Input tanggal_transaksi event
   const dateInput = e => e.target.setAttribute('type', 'date')
   const textInput = e => e.target.setAttribute('type', 'text')
   
   //Object for store form
   const form = reactive({
      nama_item: '',
      jenis_transaksi: '',
      tanggal_transaksi: '',
      nominal_transaksi: ''
   })
   
   //Validation system
   const isEmptyForm = ref(true)
   watch(form, () => {
      if ( Object.values(form).filter( val => val === '' || val === 0).length > 0 ) isEmptyForm.value = true
      else isEmptyForm.value = false
   })
   
   //Post data
   const btnSubmit = ref(null)
   const postDataKasir = () => {
      btnSubmit.value.innerHTML = 'Loading ..'
      axios.post('http://localhost:8080/kasir/new', form)
         .then( res => {
            if ( res.data.code === 200 ) {
               getDataKasir() // refresh table
               setTimeout(() => {
                  btnSubmit.value.innerHTML = 'Submit'
                  // Delete all form
                  Object.keys(form).forEach( key => form[key] = "") 
               }, 500)
            }   
         })
         .catch( err => console.log(err))
   }
</script>
<style>
   .badge {
      @apply inline-block px-3 py-2 bg-green-500 rounded-md text-gray-50 mt-3; 
   }
   .input {
      @apply bg-gray-200 px-3 py-2 w-full rounded mb-3 border border-gray-400;
   }
</style>