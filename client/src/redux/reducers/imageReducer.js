const initialData = {
    profileImage : [
        "https://wumbo.net/symbols/plus/feature.png",
        "https://wumbo.net/symbols/plus/feature.png",
        "https://wumbo.net/symbols/plus/feature.png",
        "https://wumbo.net/symbols/plus/feature.png",
        "https://wumbo.net/symbols/plus/feature.png"
      ],

};

export const profileImageView = (state=initialData , action)=>{

     switch(action.type)
     {
         case 'GET_ALL_IMAGES' : {
             return{
                 ...state,
                 profileImage : action.payload
             }
         }
         
         default:return state
     }

}
