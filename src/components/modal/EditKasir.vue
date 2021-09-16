<template>
   <div v-if="isShow" class="duration-300 bg-gray-800 w-screen h-screen fixed inset-0 bg-opacity-50 opcaity-50 mb-5 mx-auto w-10/12">
      <div class="container w-3/4 md:w-1/4 bg-gray-200 rounded-md px-3 py-2 mx-auto mt-5">
         <h1 class="text-center font-semibold" >Update</h1>
         <input type="text" placeholder="Nama item" class="input bg-gray-300 mt-3" />
         <select class="input bg-gray-300">
            <option selected="">--Select</option>
            <option value="pemasukan">Pemasukan</option>
            <option value="pengeluaran">Pengeluaran</option>
         </select>
         <div class="flex">
            <span class="block mr-2 text-xl" >Rp</span>
            <input type="text" placeholder="Nominal" class="input bg-gray-300" />
         </div>
         <button class="bg-blue-600 text-gray-50 px-3 py-1 mr-2 mt-3 rounded" type="button">Update</button>
         <button @click="closeModal" class="px-3 py-1 rounded border border-red-600" type="button">Cancel</button>
      </div>
   </div>
</template>

<script setup >
   
   import { defineProps, defineEmits } from 'vue'
   
   defineProps({
      idTransaksi : {
         type: String
      },
      isShow: {
         type: Boolean,
         default: false
      }
   })
   
   const emit = defineEmits(
      ['close_modal']
   )
   
   const closeModal = () => {
      emit('close_modal')
   }
   
</script>

<style>
</style>