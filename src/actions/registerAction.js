import { types } from "../types/types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";

export const register = (names, image, email,password) => {
  return {
    type: types.register,
    payload: {
      names,
      image,
      email,
      password,
    },
  };
};

export const registerEmailPassword = (names, image, email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(async({user}) => {
        await updateProfile(auth.currentUser, {displayName: names, photoURL: image });
        console.log(user);
        dispatch(register(user.displayName, user.photoURL,user.email, user.uid ));
      
      })
      .catch(e =>{
        console.log(e);
      })
  
  };
  
};
