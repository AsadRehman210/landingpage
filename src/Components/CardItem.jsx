import React from "react";
// import computer from "../Images/linear-online-course 1.svg"

const CardItem = ({imgsrc, heading, detail}) =>{
    return(
        <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="row card_item">
        <div className="col-12">
        <div className="card_image">
            <img src={imgsrc} alt="computer" width="6.2rem" height="6.2rem"/>

           

        </div>
        <h3>{heading}</h3>
        <p>{detail}</p>


        </div>

        </div>
        </div>

    )
}

export default CardItem;