
const intialState={
    name:'',
    email:''
}
const getUserInfoReducer=(state=intialState,action)=>{
     switch(action.type){
        case 'GETNAME': return {...state,name:action.payload};
        case 'GETEMAIL': return {...state,email:action.payload};
        default :return state;
     }
}
export default getUserInfoReducer;