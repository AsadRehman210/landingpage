import React from "react";
import PackageDesign from "../Images/Rectangle 7.svg"

const Package2 = () =>{
    const check = {
        color: "#FFF"
    }
    const bgColor = {
        background : "#154B69",
        color : "#FFF"
    }
    const blur = {
        color: "#959497"
    }
    
    return(
        <div className="col-lg-4 col-md-6 col-sm-12 package_container" style={bgColor}>
        <img src={PackageDesign} alt="Package design"/>
        <h4>Intermediate  Package</h4>
        <ul type="none" >
            <li>
            <i className="fa-sharp fa-solid fa-circle-check" style={check}></i> 
            Student Information Management</li>

            <li>
            <i className="fa-sharp fa-solid fa-circle-check" style={check}></i>
            Teacher Management </li>

            <li>
            <i className="fa-sharp fa-solid fa-circle-check" style={check}></i>
            Classroom Management</li>

            <li>
            <i className="fa-sharp fa-solid fa-circle-check" style={check}></i>
            Assessment And Grading  </li>

            <li>
            <i className="fa-sharp fa-solid fa-circle-check" style={check}></i>
            Certificate</li>

            <li>
            <i className="fa-sharp fa-solid fa-circle-check" style={check}></i>
            Homework</li>
            <li>
            <i className="fa-sharp fa-solid fa-circle-check" style={check}></i>
            Reception</li>

            <li >
            <i className="fa-sharp fa-solid fa-circle-xmark"></i>
            Attachments Book</li>

            <li>
            <i className="fa-sharp fa-solid fa-circle-xmark"></i>
            Bulk Sms And Email</li>

            <li>
            <i className="fa-sharp fa-solid fa-circle-xmark"></i>
            Card Management</li>

            <li style={blur}>
            <i className="fa-sharp fa-solid fa-circle-xmark"></i>
            Custom Domain</li>

            <li style={blur}>
            <i className="fa-sharp fa-solid fa-circle-xmark"></i>
            Events</li>

            <li style={blur}>
            <i className="fa-sharp fa-solid fa-circle-xmark"></i>
            Hostel</li>
        </ul>

        </div>

    )
}

export default Package2;