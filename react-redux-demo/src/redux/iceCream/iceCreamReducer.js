import { BUY_ICECREAM } from "./iceCreamTypes"

const initialState ={
    numOfIcecream: 20
}

export const iceCreamReducer = (state = initialState, action) =>{
   switch(action.type){
        case BUY_ICECREAM:
            return{
                numOfIcecream: state.numOfIcecream - 1
            }
        default: return state
   }
}