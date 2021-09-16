<template>
   <div v-if="isShow" class="duration-300 bg-gray-800 w-screen h-screen fixed inset-0 bg-opacity-50 opcaity-50 mb-5 mx-auto w-10/12">
      <div class="container w-3/4 md:w-1/4 bg-gray-200 rounded-md px-4 py-4 shadow mx-auto mt-5">
         <h1 class="text-center font-semibold" >Update</h1>
         <input v-model="formKasirById.nama_item" type="text" placeholder="Nama item" class="input bg-gray-300 mt-3" />
         <select v-model="formKasirById.jenis_transaksi" class="input bg-gray-300">
            <option selected="">--Select</option>
            <option value="pemasukan">Pemasukan</option>
            <option value="pengeluaran">Pengeluaran</option>
         </select>
         <div class="flex">
            <span class="block mr-2 text-xl" >Rp</span>
            <input v-model="formKasirById.nominal_transaksi" type="number" placeholder="Nominal" class="input bg-gray-300" />
         </div>
         <button ref="btnUpdate" @click="updateDataKasir" class="bg-blue-600 text-gray-50 px-3 py-1 mr-2 mt-3 rounded" type="button">Update</button>
         <button @click="closeModal" class="px-3 py-1 rounded border border-red-600" type="button">Cancel</button>
      </div>
   </div>
</template>

<script setup >
   
   import { defineProps, defineEmits, reactive, ref, watch, toRefs } from 'vue'
   import updateData from '../update.js'
   
   const props = defineProps({
      isShow: {
         type: Boolean,
         default: false
      },
      form: {
         type: Array
      }
   })
   
   const { isShow, form } = toRefs(props)
   
   const emit = defineEmits(
      ['close_modal', 'update_success']
   )
   
   const closeModal = () => {
      emit('close_modal')
   }
   
   //Store form
   let formKasirById = reactive({
      id_transaksi: '',
      nama_item: "",
      nominal_transaksi: 0,
      jenis_transaksi: ""
   })
   
   // If form data sending to props
   watch(form, (value) => {
      formKasirById.id_transaksi = value[0].id_transaksi
     formKasirById.nama_item = value[0].nama_item
     formKasirById.jenis_transaksi = value[0].jenis_transaksi
     formKasirById.nominal_transaksi = value[0].nominal_transaksi
   })
   
   // Update button
   const btnUpdate = ref(null)
   const updateDataKasir = () => {
      btnUpdate.value.innerHTML = 'Loading...'
      updateData.kasir(formKasirById, emit, btnUpdate.value)
   }
</script>

<style>
</style>