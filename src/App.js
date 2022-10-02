import React, {useState} from 'react';
import './App.css';

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


  return (
    <div className="App">
      <div className="App-header">Simple Todolist</div>
      <form onSubmit={addTodo}>
        Date: <input type="date" name="date" value={todo.date} onChange={inputChanged} />
        Description: <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
        <input type="submit" value="Add" />
      </form>
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => 
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.desc}</td>
              <td><button value={index} onClick={() => {setTodos(todos.filter((todo, i) => i !== index))}} >Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
