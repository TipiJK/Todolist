import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault(); // don't submit form to url
    setTodos([...todos, todo]);
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  }


  return (
    <div className="App">
      <div className="App-header">Simple Todolist</div>
      <form onSubmit={addTodo}>
        Date: <input type="date" name="date" value={todo.date} onChange={inputChanged} />
        Description: <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
        <input type="submit" value="Add" />
      </form>
      <TodoTable todoprop={todos} functionprop={deleteTodo} />
    </div>
  );
}

export default App;
