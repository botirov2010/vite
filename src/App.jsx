// import React, { useContext,useReducer,useState } from 'react';
// import Context from './page/context';
// import Home from './page/Home';
// import "./main.css"
// import reducer from './page/useReducer';

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, {
//     users:[],
//     imgUrl:"",
//     userObj:{},
//     isOpen:false,
//     currentI:"",
//     options:[
//       {id:1, name:"Teacher"},
//       {id:2, name:"Admin"},
//       {id:3, name:"Direktor"}
//     ]
//   });
//   return (
//     <div>

//       <Context.Provider value={{state,dispatch}}>

//         <Home/>

//       </Context.Provider>
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./main.css";
import { connect } from "react-redux";
import action from "./redux/action";

const App = (props) => {
  return (
    <div className="container1 border rounded">
<div className="card1 border rounded">
<input type="text"
 placeholder="Text..."
 className="inp1 form-control w-25  " 
 onChange={props.input1}/>

 <button onClick={props.save} className="btn1 btn btn-dark">ok</button>
</div>
<div>
  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">action</th>
       <th>
       <button className="btn btn-success" onClick={()=>props.addB(i)}>Full Complated</button>
        </th>

      </tr>
    </thead>
 
  <tbody>
  {
    props.users.map((itm,i)=>{
      return(
    <tr>
      <td>
        <input checked={itm.isOpen} onChange={()=>props.chek(i)} type="checkbox"/>
      </td>
  <td className="p">{itm.name1}</td>
  
        <td>
          <button onClick={()=>props.del(i)} className="btn btn-light">🗑 </button>
          <button onClick={()=>props.edit(i)} className="btn btn-warning">etid </button>
        </td>
    </tr>

      
       

      )
    })
  }
  </tbody>
  <td>
  </td>
  </table>
</div>
    </div>
  );
};

export default connect((state) => ({ ...state }), action)(App);
