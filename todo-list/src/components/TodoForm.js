import {useState, useContext} from "react"
import {Context} from "../Context"

function TodoForm(props){
    
    const [input, setInput] = useState({id:null,text:'',isCompleted:false}) 
    const [id, setId] = useState(0)
    const {addTodo} = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(id)
        input.id = id
        
        addTodo(input)
        // add input obj to Context todoItems
        setInput((prevState)=> {
            return({
              ...prevState,
              id:null,
              text: '',
              isCompleted:false
            })
        })

        increment()
    }

    const increment = () => {
        setId(id+1)
    }

    const handleInput = (e) => {
        const {value} = e.target
        console.log(input)
        setInput((prevState)=> {
            return({
              ...prevState,
              text: value,
            })
        })
    }

    return(
        
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
            className="todo-input"
            type="text"
            name="input" 
            placeholder="Add Todo item" 
            value={input.text}
            onChange={handleInput} 
            />
            <button 
            className="todo-button"
            type="submit">
                Add
            </button>
        </form>
    )
}

export default TodoForm