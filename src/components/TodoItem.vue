<template>
  <div class="todo-item-wrapper">
    <div class="todo-item">
      <div class="todo-value">{{ value }}</div>
      <div>
        <input type="checkbox" :checked="checked" @change="changeCheckBox" />

        <button @click="deleteFunc">delete</button>
        <button @click="isEditable = !isEditable">edit</button>
      </div>
    </div>
    <div v-if="isEditable" class="input-edit-div">
      <div>
        <input type="text" placeholder="New Name" v-model="editedValue" />
      </div>
      <div>
        <button @click="handleEdit">OK</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
 export default {
  name:'TodoItem'
 }
</script>

<script setup lang="ts">
import { PropType, ref,defineProps } from "vue";
import { useTodoStore } from "../stores/TodoStorage.js";
   
    const props = defineProps({
      value: {
      type: String as PropType<string>,
      required: true,
    },
    checked: {
      type: Boolean as PropType<boolean>,
    },
    id: {
      type: Number as PropType<number>,
    }
    })

    const todoStorage = useTodoStore();
    const isEditable = ref<boolean>(false);
    const editedValue = ref<string>("");
    const checkBoxFlag = ref<boolean>(false);

    const changeCheckBox = () => {
      checkBoxFlag.value = !checkBoxFlag.value;
      todoStorage.chandeChecked(props.id);
    };

    const deleteFunc = () => {
      todoStorage.deleteTodo(props.id);
    };

    const handleEdit = () => {
      if (editedValue.value !== "") {
        todoStorage.editTodo(props.id, editedValue.value);
        isEditable.value = false;
        editedValue.value = "";
      }
    };

    // return {
    //   isEditable,
    //   todoStorage,
    //   editedValue,
    //   handleEdit,
    //   deleteFunc,
    //   changeCheckBox,
    //   checkBoxFlag,
    // };

  // props: {
  //   value: {
  //     type: String as PropType<string>,
  //     required: true,
  //   },
  //   checked: {
  //     type: Boolean as PropType<boolean>,
  //   },
  //   id: {
  //     type: Number as PropType<number>,
  //   },
  // },
 
</script>

<style scoped>
.input-edit-div input,
.input-edit-div button {
  display: block;
}

input[type="checkbox"] {
  width: 20px;
  height: 20px;
}

.input-edit-div input {
  min-height: 35px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 10px;
  padding: 5px;
}

.input-edit-div {
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
}

.todo-item-wrapper {
  background-color: lightgreen;
  border-radius: 15px;
}
.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  background-color: lightgreen;
  border-radius: 15px;
}

.todo-value {
  color: white;
  font-family: Arial;
  font-weight: bold;
  min-width: 200px;
  text-align: left;
}

.todo-item div:nth-child(2) {
  display: flex;
  align-items: center;
  gap: 5px;
}

button {
  display: block;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
}

.todo-item div:nth-child(2) button:nth-child(1) {
  color: white;
  background: lightgray;
}

@media screen and (max-width: 445px) {
  .todo-value {
    min-width: auto;
    width: 40%;
  }
}
</style>