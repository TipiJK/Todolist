import React from "react";

export default function TodoTable(props) {
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <td>Date</td>
                    <td>Description</td>
                </tr>
                </thead>
                <tbody>
                    {props.todos.map((todo, index) => 
                        <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.desc}</td>
                        <td><button value={index} onClick={() => props.deleteTodo(index)} >Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
