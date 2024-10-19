import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/component/Home";
import Menu from "./component/Menu";
import "./style/home.css";
import Order from './component/Order';
import Login from './component/Login';
import Signup from './component/Signup';
import Profile from './component/Profile';
import ProfileOrders from './component/ProfileOrders';
import Favorite from './component/Favorite';
import ProfileEdit from './component/ProfileEdit';
import AdminHome from './admin/component/AdminHome';
import AdminMenu from './admin/component/AdminMenu';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path='/order' element={<Order/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profileOrders" element={<ProfileOrders/>}/>
          <Route path="/favorite" element={<Favorite/>}/>
          <Route path="/profileEdit" element={<ProfileEdit/>}/>
          <Route path="/admin/home" element={<AdminHome/>}/>
          <Route path='/admin/addMenu'element={<AdminMenu/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
