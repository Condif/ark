import React from "react";
import Navbar from "./Navbar/navbar";
import Header from "./Header/header";
import ProductGrid from "./ProductGrid/productGrid";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";
import Presentation from "./Presentation/presentation";


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