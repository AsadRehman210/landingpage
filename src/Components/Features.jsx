import React from "react";
import Cards from "./Cards";
import Starter from "./Starter";

const Features = () =>{
    return(
        <section className="Features" id="features" >
        <div className="container">
            <div className="row">
            <Starter 
                starter_heading="Our Features"
                starter_heading_2 = "Features"
            />
            
            <p className="feature_detail">Your expertise improves progressively over time.</p>
            </div>
            <Cards />
        </div>
        
        

        </section>

    )
}
export default Features;