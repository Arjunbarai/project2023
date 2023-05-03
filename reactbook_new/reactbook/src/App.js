// import logo from './logo.svg';
import "./App.css";
import { Navbar } from "./pages/Navbar";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { Route, Routes } from "react-router-dom";
import { AdminDashboard } from "./pages/AdminDashboard";
import { UserDashboard } from "./pages/UserDashboard";
import { Home } from "./pages/Home";
import { Footer } from "./pages/Footer";
import { Shop } from "./pages/Shop";
import { Productdetail } from "./pages/Productdetail";
import { Cart } from "./pages/Cart";
import { Out } from "./pages/Out";
import { Seller } from "./pages/Seller";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { UpdateA } from "./pages/UpdateA";
import { List } from "./pages/List";
import { Updatel } from "./pages/Updatel";
import { Payment } from "./pages/Payment";
// import { Account } from './pages/Account';

function App() {

  const [bookId, setBookId] = useState('');

  var style = {
    overflow: " hidden; padding-right: 14px;",
  };
  var style1 = {
    background: "url(img/product-5.jpg)",
  };

  return (
    <body class="modal-open" style={style}>
      <div class="d-none">
        <svg width="0" height="0" class="hidden"></svg>
      </div>
      <div class="page-holder">
        

        
        <div class="container">
          <Navbar />
          <Routes>
            {/* <Route path='/about' element={<About/>}/> */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/seller" element={<Seller />} />
            <Route exact path="/admin" element={<AdminDashboard />} />
            <Route exact path="/user" element={<UserDashboard />} />
            <Route exact path="/shop" element={<Shop setId={setBookId}/>} />
            <Route exact path="/product/:id" element={<Productdetail />} />
            <Route exact path="/cart" element={<Cart bookId = {bookId}/>} />
            <Route exact path="/check" element={<Out />} />
            <Route exact path="/update/:id" element={<UpdateA/>}/>
            
            <Route exact path="/list" element={<List/>}/>
            <Route exact path="/update1/:id" element={<Updatel/>}/>
            <Route exact path="/payment" element={<Payment/>}/>
          </Routes>

          <Footer />
        </div>
      </div>
    </body>
  );
}

export default App;