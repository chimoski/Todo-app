import React from 'react'
import {RiAddBoxFill} from 'react-icons/ri'

export default function Form({setInputText,todos,setTodos,inputText,setStatus}) {
    const inputTextHandler = (e)=>{
        e.preventDefault();
        // console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler =(e)=>{
        e.preventDefault();
        if(inputText == '') {
            return
        } else{
            setTodos([
                ...todos,{text:inputText,completed:false,id:Math.random()*1000}
            ])
        }
        setInputText('');
    }

    const selectTodo =(e)=>{
       setStatus(e.target.value);
    }
  return (
      <form>
          <div className='inputSubmit'>
          <input value={inputText} onChange={inputTextHandler} type="text" className='todo-input' placeholder='Enter your task' />
          <button onClick={submitTodoHandler}  className='todo-button' type='submit'><RiAddBoxFill/></button>
          </div>
          <div className='select'>
              <select onChange={selectTodo} name='todos' className='filter-todo'>
                  <option className='option' value="all" >All</option>
                  <option className='option' value="completed" >completed</option>
                  <option className='option' value="uncompleted" >uncompleted</option>
              </select>
          </div>
      </form>
  )
}
