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
                    {props.todoprop.map((todo, index) => 
                        <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.desc}</td>
                        <td><button value={index} onClick={() => props.functionprop(index)} >Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
