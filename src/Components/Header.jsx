import React, { useEffect, useState } from "react";
import logo from "../Images/logo.png";


const Header = () =>{
  let [activeCol, setActiveCol] =useState();

  let isactive = (index) =>{
    setActiveCol(index)
  }

  /// Function to handle scrolling and update the active section
  const handleScroll = () => {
    const sectionElements = document.querySelectorAll("section"); // Assuming your sections are wrapped in <section> tags

    let activeIndex = 0; // Initialize to an invalid value

    sectionElements.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 64 && rect.bottom >= 0) {
        activeIndex = index;
      }
    });

    if (activeIndex !== -1) {
      setActiveCol(activeIndex);
    }
  };

  useEffect(() => {
    // Trigger initial scroll check when the component mounts
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  


 

    return(

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#home">
    <img src={logo} alt="logo" width="20.8rem"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={activeCol === 0 ? "link active-class" : "link"}
                onClick={() => isactive(0)} aria-current="page" href="#home" >Home</a>
        </li>
        <li className="nav-item">
          <a className={activeCol === 1 ? "link active-class" : "link"}
                onClick={() => isactive(1)} href="#features">Features</a>
        </li>
        <li className="nav-item">
          <a className={activeCol === 2 ? "link active-class" : "link"}
                onClick={() => isactive(2)} href="#pricing">Price</a>
        </li>
        <li className="nav-item">
          <a className={activeCol === 3 ? "link active-class" : "link"}
                onClick={() => isactive(3)} href="#frequent">Faq</a>
        </li>
        <li className="nav-item">
          <a className={activeCol === 4 ? "link active-class" : "link"}
                onClick={() => isactive(4)} href="#contact">Contact</a>
        </li>
        
      </ul>
      <form className="d-flex btn-gr-design">
        <a href="#contact" className="btn btn-outline-success btn-1" type="submit" >Login</a>
        <button className="btn btn-outline-success btn-2" type="submit">Register</button>
      </form>
    </div>
  </div>
</nav>

        
        
    )
}

export default Header;