import React, { useState } from 'react'
import Header from '../components/header/Header'
import { Route, Routes} from "react-router-dom"
import Home from '../pages/Home'
import Footer from '../components/footer/Footer'
import Contacts from '../pages/Contacts'
import Catalog from '../pages/Catalog'
import Favourites from '../pages/Favourites'
import DetailProduct from '../pages/DetailProduct'
import SignUp from '../components/signUp/SignUp'

const Layout = () => {
  const [isVisible, setIsVisible]=useState(false);
  const changeVisible=()=>{
    setIsVisible(true)
  }
  return (
    <div>
      {/* <Header changeVisible={changeVisible}/> */}
      {isVisible && 
      <SignUp setIsVisible={setIsVisible}/>}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/favorites" element={<Favourites/>}/>
          <Route path="/detail" element={<DetailProduct/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Layout