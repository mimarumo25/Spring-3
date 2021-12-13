import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/users/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/nav/Styles.css";
import "../components/users/login/StylesLogin.css";
import ProductDetails from "../components/productos/productoDetalle/ProductDetails";
import { Register } from "../components/users/user/Register";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listProductAsync } from "../actions/actionProduct";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login } from "../actions/loginAction";
import Carrito from "../components/productos/carrrito/Carrito";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProductAsync());
  }, [dispatch]);
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user.photoURL)
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [dispatch, isLoggedIn]);
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/details_product/:id" element={<ProductDetails />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
