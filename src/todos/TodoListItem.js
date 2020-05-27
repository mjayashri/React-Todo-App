import React from 'react';
import './TodoListItem.css';
import './TodoList.css';

const TodoListItem = ({todo,onRemovePressed}) =>(
    <div className={"todo-item-container"}>
        <h3>{todo.text}</h3>
        <div className={"button-container"}>
            <button
                onClick={()=> onRemovePressed(todo.text)}
                className={"completed-button"}>Mark as Completed</button>
            <button className={"remove-button"}>Remove</button>
        </div>
    </div>
);

export default TodoListItem;