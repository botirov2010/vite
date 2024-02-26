// import React, { useState } from 'react';
// import Context from './context';
// import { useContext } from 'react';
// import Rodal from 'rodal'
// import M from '../Imglar/m.jpg'
// import Creatable from 'react-select/creatable'
// const Home = () => {
// const {state,dispatch}= useContext(Context);
// const [img, setImg] = useState("");


// function saveImg(e){
// console.log(e);
// const reader=new FileReader()
// let file=e.target.files[0]
// reader.readAsDataURL(file)
// reader.onload =()=>{ 
//     setImg(reader.result)
// }
// }

//     return (
//         <div className='card p-3 '>
//             <button className='btn1 btn btn-primary' onClick={()=>dispatch({type:"changeModal"})}>Open Modal</button>
//     <Rodal width={1050} visible={state.isOpen} onClose={()=>dispatch({type:"changeModal"})}>
//     <div className='card p-3 w-25 '>
//  a
//         <Creatable className='crac mb-3' onChange={(newValue)=>dispatch({type:"role1",payload:newValue})}
//          options={state.options.map((itm)=>{
//          return{value:itm.id,label:itm.name}
//         })}/>
//         <input value={state.userObj.username} className='form-control mb-3'placeholder='UserName' type="text"  onChange={(e)=>dispatch({type:"username",payload:e.target.value})}  />
//         <input value={state.userObj.email} className='form-control mb-3'placeholder='Email' type="text"  onChange={(e)=>dispatch({type:"email",payload:e.target.value})}  />
//         <input value={state.userObj.phone} className='form-control mb-3'placeholder='Phone' type="number"  onChange={(e)=>dispatch({type:"phone",payload:e.target.value})}  />
//         <button className='btn btn-success' onClick={()=>dispatch({type:"save",payload:img})}>save</button>
//         </div>
//     </Rodal>
      
//         <table className='table mx-auto'>
            
//            <thead>
//         <tr>
//                 <th>Img</th>
//                 <th>Select</th>
//                 <th>Username</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Delete</th>
//                 <th>Edit</th>
                
               
                
   
//         </tr>
//            </thead>
//                   <tbody>
   
//                {
//                 state.users.map((itm,i)=>{
//                     return(
//                     <tr> 
//                         <td>
//                         <img style={{width:"100px"}} src={itm.img} alt="" />
//                         </td>
//                         <td>{itm.role1}</td>
//                         <td>{itm.username}</td>
//                         <td>{itm.email}</td>
//                         <td>{itm.phone}</td>
                   
//                     <td>
//                     <button onClick={()=>dispatch({type:"delete",payload:i})} className='btn btn-light'>🗑</button>
//                     </td>
//                     <td>
//                     <button onClick={()=>dispatch({type:"edit",payload:i})} className='btn btn-light'>🖊</button>

//                     </td>
//                     </tr>
                        
//                      ) 
//                 })
//                }
 
//                   </tbody>
//         </table>
//         </div>
//     );
// }

// export default Home;
