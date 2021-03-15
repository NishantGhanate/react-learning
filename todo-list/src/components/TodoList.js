import {useContext} from "react"
import {Context} from "../Context"

function TodoList(props){
    const {todoItems, removeTodo, toggleTodo} = useContext(Context)
    
    const todoList = todoItems.map( item => (
        <div key={item.id} 
        className={item.IsCompleted ? 'todo-row complete' : 'todo-row'}
        >
           <input 
                type="checkbox" 
                checked={item.IsCompleted} 
                onChange={() => toggleTodo(item.id)}
            />
            <span > {item.text} </span>
            <i className= ''></i>
            <i className= 'remove-todo'
               onClick= {() => removeTodo(item.id)}
            >
                Trash icon
            </i>

        </div>
    ))

    return (
        <div className="todo-list">
           {todoList}
        </div>
    )
}

export default TodoList