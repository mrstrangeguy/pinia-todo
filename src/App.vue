<template>
  <div class="todo-wrapper">
  <div class="todo-container">
 
 <div class="todos">
  <TodoItem v-for="(todo,index) in todoArray"  :id="todo.id" :key="index" :value="todo.value" :checked="todo.isChecked"/>
 </div>

 <div>
  <div v-if="todoStore.currentDisplay" class="todo-edit-container">
    <div>
    <input type="text" class="add-input" placeholder="New Todo" v-model="todoStore.currentValue">
  </div>
  <div>
    <button @click="todoStore.addTodo">OK</button>
  </div>
  </div>
  <button @click="todoStore.toggleTodo" class="add-todo">Add Todo</button>
 </div>
</div>
</div>
</template>

<script  lang="ts">
type TodoStoreType = ReturnType<typeof useTodoStore>
import { defineComponent,ref } from 'vue';
import {useTodoStore} from './stores/TodoStorage.js'
import TodoItem from './components/TodoItem.vue';
import {TodoItem as TodoInterface} from './types/todo'
export default defineComponent({ 
  name: 'App',
  setup(){
    const todoStore:TodoStoreType = useTodoStore();
    const todoArray = ref<TodoInterface[]>(todoStore?.todos);
    const inputDisplay = ref<boolean>(false);
    const currentValue = ref<string>('')

    return{
      todoArray,
      inputDisplay,
      currentValue,
      todoStore
    }
  },
  components: {
    TodoItem
  }
});
</script>

<style scoped>

.add-todo{
  border: 0;
  padding: 10px 25px;
  border-radius: 15px;
}

.todo-edit-container{
  display: flex;
 
  margin-bottom: 15px;
  gap: 30px;
}

.todo-edit-container input{
   display: block;
   width: 100%;
}

.todo-edit-container div:nth-child(1){
  flex-grow: 1;
}



.todo-edit-container button{
  height: 100%;
  padding: 0px 10px;
  border: 0;
  border-radius: 15px;
  display: block;
}

.todo-wrapper{
 
  max-width: 800px;
  margin: 0 auto;
}
.todo-container{
  
  width: 100%;
  padding: 20px;
  background-color: green;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;

}
.todo-wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
}
body{
  padding: 0;
  margin: 0;
}
.todos{
  display: flex;
  flex-direction: column;
  gap: 15px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.add-input{
  min-height: 35px;
  border: 0;
  margin: 0;
  padding: 0px 10px;
  border-radius: 15px;
}

@media screen and (max-width:800px) {
  .todo-container{
    width: 100%;
  }
}

</style>
