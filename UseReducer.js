const initialState ={
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false
}


// FORMA 1
// const reducerIf = (state, action) => {
//   if (action.type === 'ERROR') {
//     return{
//       ...state, error: true, loading: false
//     }
//   }else if(action.type === 'CHECK') {
//     return{
//       ...state, loading: true
//     }
//   }else{
//     return {
//       ...state
//     }
//   }
// }

// FORMA 2
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ERROR':
//       return{
//         ...state, error: true, loading: false
//       }
//     case 'CHECK':
//       return{
//         ...state, loading: true
//       }
//     default:
//       return state
//   }
// }

// FORMA 3
// const reducerObj = (state) => ({
//   'ERROR':{
//     ...state, error: true, loading: false
//   },
//   'CHECK':{
//     ...state, loading: true
//   }
// })

// const reducer = (state, action) => {
//   if(reducerObj(state)[action.type]){
//     return reducerObj(state)[action.type]
//   }else{
//     return state
//   }
// }