import { types } from "../types/types";

export const registerReducer = (state={},action) =>{
    switch (action.type) {
        case types.register:            
            return{                
                email: action.payload.email,
                password: action.payload.password,
                names:action.payload.names,
                image:action.payload.image                
            }
    
        default:
            return state
    }
}
