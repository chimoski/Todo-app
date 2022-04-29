import React,{useState,useEffect} from 'react';
import './App.css';
import Todolist from './components/Todolist';
import Form from './components/Form';
function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState('All');
  const [filterTodos, setFilterTodos] = useState([]);

  const handleFilter =()=>{
    switch(status) {
      case 'completed':
        setFilterTodos(todos.filter(todo=>todo.completed===true));
        break;
        case 'uncompleted':
          setFilterTodos(todos.filter(todo=>todo.completed===false));
          break;
        default :
        setFilterTodos(todos);
    }
  }

  useEffect(() => {
    handleFilter();
  }, [status,todos]);






  return (
    <>
    <h3>Prince's Todo list</h3>
    <div className="App"> 
    <Form setInputText={setInputText} inputText={inputText} setStatus={setStatus } todos={todos} setTodos={setTodos}/>
    <Todolist setFilterTodos={setFilterTodos} filterTodos={filterTodos} todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText}  />
     
     </div>
    </>
   
  );
}

export default App;
