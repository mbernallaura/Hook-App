import React from 'react';
import ReactDOM from 'react-dom/client';
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
//import { CounterApp } from './01-useState/CounterApp'
//import { HooksApp } from './HooksApp'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { MultipleCustomHoks } from './03-examples/MultipleCustomHoks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { Memorize } from './06-memos/Memorize'
//import { MemoHook } from './06-memos/MemoHook'
//import { CallBackHook } from './06-memos/CallBackHook'
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
//import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';
import './index.css'

// const router = createBrowserRouter([{
//   path:'/',
//   element: <MainApp/>,
// },]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <RouterProvider router ={ router } />  
  // </React.StrictMode>,

  <BrowserRouter>
    <MainApp/>
  </BrowserRouter>
)
