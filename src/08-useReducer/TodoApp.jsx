import { useTodos } from "../hooks/"
import { TodoList, TodoAdd } from "./index"

export const TodoApp = () => {

    const { todos, todosCount, todosPending,handleDeleteTodo, handleNewTodo, handleToggleTodo  } =useTodos();

    return (
        <>
            <h1>TodoApp: { todosCount },  <span>Pendientes: { todosPending }</span></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos = { todos } 
                        onDeleteTodo = { id => handleDeleteTodo(id) }
                        onToggleTodo = { handleToggleTodo }
                    />
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
