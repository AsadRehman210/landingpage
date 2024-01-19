import React from "react";

const Starter = ({starter_heading, starter_heading_2})=>{
    return(
        <>
            <h2 className="Starter_heading"> {starter_heading}</h2>
            <p className="feature_heading">{starter_heading_2}</p>
        </>

    )
}

export default Starter;