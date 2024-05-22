export interface TodoItem {
   value:string,
   isChecked:boolean,
   id:number
}

export interface State {
    todos:TodoItem[],
    currentDisplay:boolean,
    currentValue:string
}

