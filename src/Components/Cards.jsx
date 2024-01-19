import React from "react";
import CardItem from "./CardItem";
import ApiCard from "./ApiCard";
const Cards = ()=>{
    return(
        <div className="Cards">
        <div className="row g-5 m-md-auto m-sm-auto">
            
            {ApiCard.map((element, index)=>{
                return(
                        <CardItem
                        key = {element.id}
                        id = {index}
                        imgsrc={element.imgsrc}
                        heading = {element.card_Heading}
                        detail = {element.card_detail}
                        />
                    

                )
            })}

           
        </div>


        </div>

    )
}
export default Cards;