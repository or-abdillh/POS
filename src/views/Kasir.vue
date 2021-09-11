<template>
   <div class="bg-gray-100 text-center overflow-scroll px-3 py-3">
      <h1 class="text-gray-600 text-2xl" >Kasir</h1>
      <small>Selamat datang di Ojons Mart cabang Orlando</small>
      <div class="border p-3 text-left mt-3">
         <h1>Riwayat transaksi : </h1>
         <button @click="getData" class="bg-green-500 px-3 py-2 mt-2 rounded text-white :active-bg-green-300" type="button">Refresh</button>
         
         <table class="table-auto mt-3">
            <thead class="bg-blue-300 text-gray-800" >
               <tr class="text-sm" >
                  <th class="py-1 px-3">ID</th>
                  <th class="py-1 px-3">Item</th>
                  <th class="py-1 px-3">Nominal</th>
                  <th class="py-1 px-3">Tanggal transaksi</th>
                  <th class="py-1 px-3">Jenis</th>
               </tr>
            </thead>
            <tbody class="bg-blue-200">
               <template v-for="item in data.results" :key='item.id_transaksi'>
                  <tr class="text-center" >
                     <td >{{ item.id_transaksi }}</td>
                     <td>{{ item.nama_item }}</td>
                     <td>{{ item.nominal_transaksi }}</td>
                     <td>{{ new Date(item.tanggal_transaksi).toLocaleString('id') }}</td>
                     <td>{{ item.jenis_transaksi }}</td>
                  </tr>
               </template>
            </tbody>
         </table>
      </div>
   </div>
</template>

<script>
   
   import axios from 'axios'
   import { ref } from 'vue'
   
   export default {
      name: 'Kasir',
      setup() {
         
         const data = ref('')
         
         const getData = () => {
            axios.get('http://localhost:8080/kasir/all')
               .then( response => {
                  data.value= response.data
               })
         }
         
         return { data, getData }
      }
   }
   
</script>

Thu Sep 09 2021 10:24:19 GMT+0800 (Waktu Indonesia Tengah)