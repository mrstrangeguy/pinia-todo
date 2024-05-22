import {defineStore} from 'pinia'

export const useTodoStore = defineStore('todoStore',{
   state:() => ({
    todos:[{value:'Task 1',isChecked:false,id:1},{value:'Task 2',isChecked:true,id:2}],
    currentDisplay:false,
    currentValue:''
   }),
   actions:{
      addTodo(){
      if(this.currentValue !== ""){
      this.todos.push({value:this.currentValue,isChecked:false,id:Math.floor(Math.random() * 1000)})
      this.currentDisplay = false
      this.currentValue = ''
      }
      },
      toggleTodo(){
         this.currentDisplay = !this.currentDisplay
      },
      chandeChecked(id){
        
         const findedTodo = this.todos.find((elem) => elem.id === id)
         findedTodo.isChecked = !findedTodo.isChecked
         
      },
      editTodo(id,editValue){
         const findedTodo = this.todos.find((elem) => elem.id === id)
         findedTodo.value = editValue
      },
      deleteTodo(id){
       
         const findedIndex = this.todos.findIndex((elem) => elem.id === id)
         console.log("Finded Index = "+findedIndex)
         this.todos.splice(findedIndex,1)

      } 
   }
})