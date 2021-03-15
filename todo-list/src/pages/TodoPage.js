import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"

function TodoPage(params) {

    return(
        <div>
            <h1>Yo! What's the Plan for Today?</h1>
            <TodoForm/>
            <TodoList/>
        </div>
    )
}

export default TodoPage