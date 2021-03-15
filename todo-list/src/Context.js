import React, {useState} from "react"

const Context = React.createContext()

function TodoContextProvider({children}){
    const [todoItems, setTodoItems] = useState([])

    function addTodo(input){
        setTodoItems(() => ([...todoItems,input]) )
    }
    console.log(todoItems)

    function editTodo(id,value){
        const updatedTodos = todoItems.map((item) => {
            if (item.id === id){
                console.log(id)
                return{
                    ...item, 
                    text:value
                }
            }
            return item
        })
        setTodoItems(updatedTodos)
    }

    function toggleTodo(id){
        const updatedTodos = todoItems.map((item) => {
            if (item.id === id){
                console.log(id)
                return{...item, isCompleted:!item.isCompleted}
            }
            return item
        })
        setTodoItems(updatedTodos)
    }

    function removeTodo(id){
        setTodoItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function clearTodoList(){
        setTodoItems([])
    }

    return(
        <Context.Provider value={
            {
                todoItems,
                addTodo,
                editTodo,
                toggleTodo,
                removeTodo,
                clearTodoList
            }}>
            {children}
        </Context.Provider>
    )
}

export {TodoContextProvider,Context}