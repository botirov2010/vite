import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux'
import store from './redux/redux.js'
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
    <Provider store={store}>
    <App/>
    </Provider>
    </BrowserRouter>

)


// import { applyMiddleware, createStore } from "redux";

// function reducer(state, action) {
// switch (action.type) {
//   case "plus":
//   state.count++
//     break
//     case "minus":
//       state.count--
//     break

//   default:
//     break;
// }
//   return { ...state };
// }


// const myMiddleware=(store)=>(next)=>(action)=>{
// console.log(store.getState());
// console.log(action);
// next(action)
// console.log(store.getState());
// console.log("-----------");
// }

// const store=createStore(reducer,{
//     count:0
//     },applyMiddleware(myMiddleware))

//     store.dispatch({type:"plus"})
//     store.dispatch({type:"plus"})
//     store.dispatch({type:"plus"})