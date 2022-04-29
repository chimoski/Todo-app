import React from 'react'
import Todo from './Todo'

export default function Todolist({todos,setTodos,setFilterTodos,filterTodos,inputText,setInputText}) {
  const deleteAll = ()=>{
    console.log(todos);
    setTodos([]);
  }
  const DeleteAll =()=>{
    if(filterTodos =='') {
    return ''
    }
    else{
      return  <button onClick={deleteAll} className='deleteAll'>delete all</button>
    }
    
  }

  return (
    <div className='todo-container'>
      <ul className='todolist'></ul>
     {filterTodos.map(todo =>{
       return(
        <>
         <Todo key={todo.id} todo={todo} text={todo.text} todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} />
        
        </>
       )
     })}
    < DeleteAll key={todos.id} />
    </div>
  )
}
