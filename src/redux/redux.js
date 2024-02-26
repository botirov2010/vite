// import { createStore } from "redux";

// function reducer(state, action) {
// switch (action.type) {
//   case "input1":
    // state.usersObj={...state.usersObj, name1:action.payload}
//     break;
//     case "save":
    //   if (state.currentI === "") {
    //     state.users.push({ ...state.usersObj});
    //   } else {
    //     state.users[state.currentI] = state.usersObj;
    //     state.currentI = "";
    //   }

    //   state.usersObj = { name1: ""};
    //   state.users = [...state.users];

//       break;
//       case "edit":
        // state.currentI = action.payload;
        // state.usersObj = state.users[action.payload];
//         break;
//     case "del":
//    state.users.splice(action.payload,1)
//    state.users = [...state.users];

//       break
//       case "chek":
//         if (isOpen===true) {
//         state.users.splice(action.payload,1)
          
//         }
//         state.users[action.payload].comlated=!state.users[action.payload].comlated
//         // state.users.splice(action.payload,1)
//         state.users = [...state.users];
     
//            break

//            case "addB":
//             // if (isOpen===true) {
//             //   state.users.splice(action.payload,1000)
//             // }
//             state.isOpen.checked=true
//             break
//   default:
//     break;
// }
//   return { ...state };
// }
// const store = createStore(reducer, {
//   users:[],
//   isOpen:false,
//   currentI:"",
//   usersObj:{
   
//   name1:"",
//   }
  
// });
// export default store;
