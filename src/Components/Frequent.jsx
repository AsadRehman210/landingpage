import React from "react";
import Starter from "./Starter";
import FreqQuestion from "./FreqQuestion";
import ApiQuestion from "./ApiQuestion";

const Frequent = () =>{
    return(
        <section className="Frequent" id="frequent">
        <Starter 
                starter_heading="Have Any Question"
                starter_heading_2 = "Frequently Asked Questions "
        />
        <div className="container">
            <div className="row">
            {ApiQuestion.map((element, Index)=>{
                return(
                    
                    <FreqQuestion 
                        key ={element.id}
                        QHeading ={element.Q_heading}
                        QAnswer ={element.Q_answer}
                    />
                    
                )
            })}
            

            </div>
        </div>


        </section>

    )
}

export default Frequent;