import {TodoContextProvider} from "./Context"
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <TodoContextProvider>
       <div className="todo-app">
         <TodoPage/>
      </div>
    </TodoContextProvider>
   
  )

}

export default App;
