import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"

const initialState =[
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3, 
        description: 'Recolectar la piedra del tiempo',
        done: false,
    }
]

export const TodoApp = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, initialState )

    const handleNewTodo = (todo) =>{
        console.log({todo});
    }

    return (
        <>
            <h1>TodoApp: 10,  <span>Pendientes: 2</span></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                        <TodoList todos = { todos } />
                </div>

                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoAdd onNewTodo={(todo)=> handleNewTodo(todo) }/>
                </div>
            </div>
        </>
    )
}
