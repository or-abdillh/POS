<template>
   <div class="mt-5 mb-5 mx-auto w-10/12">
      <h1>1. Create new transactions</h1>
      <div class="mt-3">
         <input class="input" type="text" placeholder="Nama item"/>
         <select class="input text-gray-500 focus:text-gray-700">
            <option>--Select</option>
             <option value="Pemasukan">Pemasukan</option>
             <option value="Pengeluaran">Pengeluaran</option>
         </select>
         <div class="flex">
            <span class="block mr-2 text-xl" >Rp</span>
            <input class="input" type="number" placeholder="Nominal transaksi"/>
         </div>
         <input class="input" @blur="textInput" @focus="dateInput" type="text" placeholder="Tanggal transaksi"/>
         <button class="bg-blue-500 px-3 py-1 rounded font-semibold text-gray-50" type="button">Submit</button>
      </div>
   </div>
   
   <div class="mt-5 mx-auto w-10/12 overflow-scroll">
      <h1>2. All transactions</h1>
      <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
        <tr class="text-left border-b-2 border-gray-300">
          <th class="px-4 py-3">ID</th>
          <th class="px-4 py-3">Nama item</th>
          <th class="px-4 py-3">Nominal</th>
          <th class="px-4 py-3">Tanggal</th>
          <th class="px-4 py-3">Actions</th>
        </tr>
        
        <tr v-if="dataKasir" v-for="data in dataKasir.results" :key="data.id_transaksi">
           <td class="px-4 py-3">{{ data.id_transaksi }}</td>
           <td class="px-4 py-3">{{ data.nama_item }}</td>
           <td class="px-4 py-3">{{ data.nominal_transaksi }}</td>
           <td class="px-4 py-3">{{ new Date(data.tanggal_transaksi).toLocaleString() }}</td>
           <td class="px-4 py-3">
             <button class="bg-green-300 mb-1 mr-1 px-2 rounded" type="button">Edit</button>
             <button class="bg-red-400 px-2 rounded" type="button">Delete</button>
           </td>
        </tr>
        
        <!-- <template v-for="data in dataKasir.results" :key="data.id_transaksi">
           <tr class="bg-gray-100 border-b border-gray-200">
             <td class="px-4 py-3">{{ data.id_transaksi }}</td>
             <td class="px-4 py-3">{{ data.nama_item }}</td>
             <td class="px-4 py-3">{{ data.nama_item }}</td>
             <td class="px-4 py-3">{{ new Date(data.tanggal_transaksi).toLocaleString() }}</td>
             <td class="px-4 py-3">
                <button class="bg-green-300 mb-1 mr-1 px-2 rounded" type="button">Edit</button>
                <button class="bg-red-400 px-2 rounded" type="button">Delete</button>
             </td>
           </tr>
        </template> -->
        
   </table>

   </div>
</template>

<script setup >
   
   import  axios from 'axios'
   import { shallowRef, ref, onMounted } from 'vue'
   
   let dataKasir = ref()
   const getDataKasir = () => {
      axios.get('http://localhost:8080/kasir/all')
         .then( res => dataKasir.value = res.data)
         .catch( err => alert(err))
   }
   
   onMounted(getDataKasir)

   
</script>

<style>
   
   .input {
      @apply bg-gray-200 px-3 py-2 w-full rounded mb-3 border-2 border-gray-400;
   }
   
</style>