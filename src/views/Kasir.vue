<template>
   <section class="container md:mx-auto py-4 px-3 md:px-5">
      <h1 class="text-center text-xl font-semibold" >Aplikasi Kasir</h1>
      <p class="text-center text-gray-500" >Selamat Datang di Ojon Mart Cabang Ohio</p>
      <ul class="mt-3 flex md:justify-center justify-evenly font-semibold">
         <template v-for="menu in menus" :key="menu.name">
            <li :class="menuActive === menu.name ? 'active' : ''" 
               @click="menuActive = menu.name, currentTab = menu.component" class="menu md:mr-4" >{{ menu.name }}</li>
         </template>
      </ul>
      <component :is="currentTab" ></component>
   </section>
</template>

<script setup >
   
   import { ref } from 'vue'
   import Home from '../components/Home.vue'
   import Inventory from '../components/Inventory.vue'
   import Manage from '../components/Manage.vue'
   
   
   const menus = ref([
         {name: 'Home', component: Home},
         {name: 'Inventory', component: Inventory},
         {name: 'Manage', component: Manage}
      ])
      
   const menuActive = ref('Home')   
   const currentTab = ref(Home)
</script>

<style>
   
   .menu {
      @apply duration-300 bg-gray-200 text-gray-700 px-4 py-2 rounded;
   }
   .active {
      @apply bg-green-500 text-gray-100;
   }
   
</style>