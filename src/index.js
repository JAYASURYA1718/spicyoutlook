import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/contact';
import Products from './pages/Products';
import NoPage  from './pages/NoPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Trackpants from './pages/Trackpants';
import Tshirts from './pages/T-shirts';
import Shorts from './pages/Shorts';
import Hoodies from './pages/Hoodies';
import Pants from './pages/Pants';
import Shirts from './pages/Shirts';

export default function App(){
return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/NoPage' element={<NoPage/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Shirts' element={<Shirts/>}/>
    <Route path='/Pants' element={<Pants/>}/>
    <Route path='/Tshirts' element={<Tshirts/>}/>
    <Route path='/Trackpants' element={<Trackpants/>}/>
    <Route path='/Hoodies' element={<Hoodies/>}/>
    <Route path='/Shorts' element={<Shorts/>}/>
    </Route>

  </Routes>
  </BrowserRouter>
)

}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)