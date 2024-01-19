import React from "react";
import school from "../Images/school-31 1 (1).svg";
import student from "../Images/student-17 1.svg";
import girl from "../Images/new_girl-min-removebg-preview 1.png";
import book from "../Images/book.png";
import degree from "../Images/Vector.svg";
import dots from "../Images/lower dots.svg";
import dotsRight from "../Images/lower dots rights.svg";

const HeroSection = () =>{
    return(
        <>
        <div className="topLeft_dot_design"></div>
        <div className="topRight_dot_design"></div>
        

            <section className="HeroSection" id="home">
            <div className="left_dot_design"></div>
            <div className="container">
            <div className="row">
      {/*=====================================================================================
    Hero-Section-1st column
    ==================================================================================== */}
                <div className="col-lg-6 col-md-12 col-sm-12 hero_1">
                <p className="before_heading">
                <span ><i className="fa fa-minus" aria-hidden="true"></i>  </span> 
                SCHOOLWAY</p><br/>
                <h1>Embrace Intelligence:<br/>
                    Opt for Smart Choices in
                    Your Educational Institution</h1>
                <p>Piqes offers a range of services, from open-source solutions to professional services, facilitating the end-to-end process of app development, deployment, testing, and monitoring.</p>
                
                <div className="School_student">
                   <div className="card-student">
                    <div className="school_image">
                    <img src={school} alt="School Logo"  />
                    </div>
                    <p>4k <br/> Schools</p>
                   </div>

                   <div className="card-student">
                   <div className="school_image">
                   <img src={student} alt="School Logo" width="58px" height="58px"/>
                    </div>
                    
                    <p>20k <br/> Students</p>
                   </div>

                </div>

                </div>
    {/*=====================================================================================
    Hero-Section-2nd column
    ==================================================================================== */}
                <div className="col-lg-6 col-md-12 col-sm-12  hero_2">
                <div className="circle">
                <img src={book} alt="book" className="book_image"/>
                <img src={dotsRight} alt="book" className="dots_image-right"/>
                <img src={dots} alt="book" className="dots_image-left"/>
                <img src={degree} alt="book" className="degree_image"/>
                <div className="rectange_l">
                <img src={girl} alt="student"/>

                </div>
                <div className="rectange_2"></div>

                </div>
                
                    
                </div>
            </div>
        </div>
        </section>
        </>

    )
}

export default HeroSection;