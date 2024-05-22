export interface TodoItemType {
   value:string,
   isChecked:boolean,
   id:number
}

export interface State {
    todos:TodoItemType[],
    currentDisplay:boolean,
    currentValue:string
}

