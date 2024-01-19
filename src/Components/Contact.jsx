import React from "react";
import ContactForm from "./ContactForm";

const Contact = () =>{
    return(
        <section className="contact_section" id="contact">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-5 col-md-12 col-sm-12 contact_info">
                    <div className="contact-color"></div>
                    <h4>CONTACT INFO</h4>
                    <p>Feel free to reach out at any time if you require immediate assistance</p>
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
    CONTACT FORM
    ====================================================================================== */}
                    <div className="col-lg-7 col-md-12 col-sm-12">
                     
                     <ContactForm />


                    </div>
                </div>
            </div>
            
   
        </section>

    )
}
export default Contact;