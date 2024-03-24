const initialData = {
    verified:0
};

export const statusView = (state=initialData , action)=>{

     switch(action.type)
     {
         case 'GET_STATUS' : {
             return {
                ...state, 
                verified:action.payload}
         }
         
         default:return state
     }

}
