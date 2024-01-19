import React from "react";
import Starter from "./Starter";
import Package from "./Package";
import Package2 from "./Package2";
import Package3 from "./Package3";

const Pricing = () =>{
    
    return(
        <section className="Pricing_features" id="pricing">
        <div className="container">
        <Starter 
                starter_heading="Pricing plan"
                starter_heading_2 = "Pricing plan"
            />
        <div className="row">
        <Package  />
        <Package2 />
        <Package3 />


        </div>
        </div>
        

        </section>

    )
}

export default Pricing;