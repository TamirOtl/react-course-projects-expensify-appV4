export default (state={},action)=>{
switch (action.type) {
    case 'LogIn':
        return{
            uid:action.uid
        };
        
    case 'LogOut':
      return{};
           
    default:
    return state;



} 
}