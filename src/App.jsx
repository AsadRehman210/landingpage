import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "./CSS/Index.css"
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import Frequent from "./Components/Frequent";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ToButton from "./Components/ToButton";

const App = () =>{
    
    return(
        <>
        <Header/>
        <HeroSection />
        <Features />
        <Pricing />
        <Frequent />
        <Contact />
        <ToButton />
        <Footer />
        
        
        

        </>
    )
}

export default App;