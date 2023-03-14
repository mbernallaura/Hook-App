const initialState = [{
    id:1,
    todo:'Recolectar la piedra del alma',
    done:false,
}];

//?Lo que hace el REDUCER, es producir un stado en base a la accion que se recive
//! state = estadoAnterior, action= lo que se va a hacer
const todoReducer = (state = initialState, action= {}) =>{
    if(action.type === '[TODO] add todo'){
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer()

//!No se debe mutar porque es una mala practica
// todos.push({
//     id:2,
//     todo: 'Recolectar la piedra del poder',
//     done: false
// })

const newTodo = {
    id:2,
    todo: 'Recolectar la piedra del poder',
    done: false

}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);
console.log({state: todos});