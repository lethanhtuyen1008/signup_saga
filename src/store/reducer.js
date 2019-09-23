var initialState = {
    user : '',
};
var myReducer = (state = initialState, action) =>{
  switch(action.type){
      case "SIGN_UP_ON":
          return {
            user : action.user,
          };
      default:
          return state;
  }
};

export default myReducer;
