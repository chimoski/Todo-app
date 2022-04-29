import React from 'react'
import { icons } from 'react-icons';
import {MdDownloadDone} from 'react-icons/md';
import {IoIosUndo} from 'react-icons/io';
import {AiFillEdit} from 'react-icons/ai'
import {MdDeleteForever} from 'react-icons/md';

export default function Todo({text,todos,todo, setTodos,inputText,setInputText}) {
    const deleteTodo =()=>{
       setTodos(todos.filter(el=>el.id !==todo.id));
    }
    const completeTodo = ()=>{
        
        setTodos(todos.map((item)=>{
            if(item.completed ==true){
               document.querySelectorAll('#comp').innerHTML ='complete'
            } else{
                document.querySelectorAll('#comp').innerHTML ='undo' 
            }
            if(item.id === todo.id) {
            return{
                ...item,completed:!item.completed
            }
            }
            else return item;
            

            
        }))

    }
    const editTodo =()=>{
      
       if(inputText == '') {
        setTodos(todos.filter(e => e.id !== todo.id
            ))
        setInputText(text);
       }
        else {
           return
       }
    }
  return (
    <div className='todo-list'>
        <li className={`list ${todo.completed ? 'completed':''}`}>{text}</li>
        <div className='btn' onClick={completeTodo}>{todo.completed?<IoIosUndo />:<MdDownloadDone />}</div>
        <div className='btn' onClick={editTodo}><AiFillEdit /></div>
        <div className='btn' onClick={deleteTodo}><MdDeleteForever /></div>
    </div>
  )
}
