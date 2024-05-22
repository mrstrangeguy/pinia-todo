<template>
  <div>
   <!-- <TodoHome/> -->
   <router-view/>
  </div>
</template>

<script lang="ts">
   import {defineComponent} from 'vue'
  //  import TodoHome from './components/TodoHome.vue'
   export default defineComponent({
    name:'App',
   
    components:{
      // TodoHome
    }
   })
   
</script>

<style scoped>
    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
 
    color: #2c3e50;
    margin-top: 60px;
  }
</style>