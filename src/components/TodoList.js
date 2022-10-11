import React, {useState} from "react";
import TodoTable from './TodoTable';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from "@mui/material";
import '../App.css';


export default function TodoList() {
    const [todo, setTodo] = useState({desc: '', date: ''});
    const [todos, setTodos] = useState([]);
    const [date, setDate] = useState({});
    
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

    const dateChanged = (date) => {
      //console.log(date._d.toLocaleDateString());
      setDate(date);
      setTodo({...todo, ['date']: date._d.toLocaleDateString()});
    }

    return(
        <div>
            <form onSubmit={addTodo}>
            <div className="FlexHorizontal">

              <div>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DesktopDatePicker
                    label="Date"
                    inputFormat="DD/MM/YYYY"
                    value={date}
                    onChange= {(date) => dateChanged(date)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>

              <div>
                Description: <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
              </div>
              <input type="submit" value="Add" />
            </div>
            </form>
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}