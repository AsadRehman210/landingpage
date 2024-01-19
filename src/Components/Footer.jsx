import React from "react";
import logo from "../Images/Schoolway-footerlogo 1.png"
import { NavLink } from "react-router-dom";

const Footer = () =>{
    return(
        <footer>
            <div className="container">
                <div className="row footer-row-1">
                    <div className="col-lg-4 col-md-6 col-sm-12 footer_1">
                        <img src={logo} alt="footer logo" />
                        <p>Enhancing the global landscape through the creation of refined hierarchies</p>
                    </div>
    {/* ======================================================================================
    Footer-2
    ===================================================================================== */}

                    <div className="col-lg-4 col-md-6 col-sm-12 footer_2">
                    <h5>Contact</h5>
                    <ul type="none">
                    <li><a href="tel:00112246">
                        <i className="fa fa-phone-square" aria-hidden="true"></i> 001122467</a></li>

                        <li><a href="mailto: info@schoolway.org">
                        <i className="fa fa-envelope" aria-hidden="true"></i>info@schoolway.org</a></li>

                        <li><a href="https://maps.app.goo.gl/Kd4H6PfCmZWZKVGp6" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>2201 Edgmont Ave Chester, Netherland</a></li>
                    </ul>

                    </div>
    {/* ======================================================================================
    Footer-3
    ===================================================================================== */}
                <div className="col-lg-2 col-md-6 col-sm-12 footer_3">
                    <h5>Quick link</h5>
                    <ul type="none">
                        <li><a href="#home"> Home</a></li>

                        <li><a href="#features">Features</a></li>

                        <li><a href="#pricing">Pricing</a></li>

                        <li><a href="#frequent">Faqs</a></li>

                        <li><a href="#contact">Contact us</a></li>
                    </ul>

                </div>
     {/*======================================================================================
    Footer-4
    ===================================================================================== */}
    <div className="col-lg-2 col-md-6 col-sm-12 footer_4">
                    <h5>Social link</h5>
                    <ul type="none">
                        <li ><NavLink> <i className="fa-brands fa-facebook"></i></NavLink></li>

                        <li><NavLink><i className="fa-brands fa-square-twitter"></i></NavLink></li>

                        <li><NavLink><i className="fa-brands fa-linkedin"></i></NavLink></li>

                        <li><NavLink><i className="fa-brands fa-square-instagram"></i></NavLink></li>

                    </ul>

                </div>
            </div>
            </div>
            
            <hr />
            <div className="row footer-para">
                <div className="col-12">
                <p className="">© 2023 Schoolway,All rights reserved </p>
                </div>
            </div>

        </footer>

    )
}

export default Footer;