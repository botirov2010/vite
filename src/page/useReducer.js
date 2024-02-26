// function reducer(state, action) {
//   switch (action.type) {
//     case "changeModal":
//       state.isOpen = !state.isOpen;
//       break;

//     case "username":
//       state.userObj = { ...state.userObj, username: action.payload };
//       break;

//     case "email":
//       state.userObj = { ...state.userObj, email: action.payload };
//       break;

//     case "phone":
//       state.userObj = { ...state.userObj, phone: action.payload };
//       break;

//     case "role1":
//       if (action.payload.__isNew__) {
//         let id1 = state.options[state.options.length - 1].id;
//         state.options.push({ id: id1 + 1, name: action.payload.label });
//       } else {
//         state.userObj = { ...state.userObj, role1: action.payload.label };
//       }

//       break;

    // case "save":
    //   if (state.currentI === "") {
    //     state.users.push({ ...state.userObj, img: action.payload });
    //   } else {
    //     state.users[state.currentI] = state.userObj;
    //     state.currentI = "";
    //   }

    //   state.userObj = { username: "", email: "", phone: "" };
    //   state.users = [...state.users];
    //   state.isOpen = !state.isOpen;

    //   break;

//     case "delete":
//       state.users.splice(action.payload, 1);
//       state.users = [...state.users];

//       break;

    // case "edit":
    //   state.currentI = action.payload;
    //   state.userObj = state.users[action.payload];
    //   break;

//     default:
//       break;
//   }
//   return { ...state };
// }
// export default reducer;
