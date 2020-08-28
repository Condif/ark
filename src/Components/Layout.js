import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import ProductGrid from "./ProductGrid/ProductGrid";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Presentation from "./Presentation/Presentation";


const Layout = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <Presentation/>
            <ProductGrid/>
            <Contact/>
            <Footer/>
        </> 
    )
}

export default Layout;