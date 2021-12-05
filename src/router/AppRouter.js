import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/users/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/nav/Styles.css";
import "../components/users/login/StylesLogin.css";
import ProductDetails from "../components/productos/productoDetalle/ProductDetails";
import { Register } from "../components/users/user/Register";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { loginEmailPassword } from "../actions/loginAction";

function App() {

  const dispatch = useDispatch()
  
  const [checking, setChecking] = useState(true);
  const [isLoggenIn, setIsLoggenIn] = useState(false);

useEffect(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user?.uid) {
      dispatch(loginEmailPassword(user.uid,user.displayName,user.photoURL))
      setIsLoggenIn(true);
    } else {
      setIsLoggenIn(false);
    }
    setChecking(false);
  });
}, [dispatch, setChecking, setIsLoggenIn]);
  if (checking){
    return <h1>Espere...</h1>
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/details_product" element={<ProductDetails />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
