<template>
    <div>
        <h1>Added Tasks</h1>
        <ul>
          <li v-for="(todo,index) in todoStore.getValues" :key="index">{{ todo }}</li>
        </ul>
    </div>
</template>

<style scoped> 
   div{
     max-width: 800px;
   }
</style>

<script setup lang="ts"> 
   import { useTodoStore } from "../stores/TodoStorage.js";
   const todoStore = useTodoStore()

</script>

