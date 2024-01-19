import React from "react";

const Package3 = () =>{
    const check = {
        color: "#154B69"
    }
    const bgColor = {
        background : "white",
        color : "#154B69"
    }
    
    
    return(
        <div className="col-lg-4 col-md-6 col-sm-12 package_container" style={bgColor}>
        <h4>Advanced  Package</h4>
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

            <li>
            <i className="fa-sharp fa-solid fa-circle-check" style={check}></i>
            Attachments Book</li>

            <li>
            <i className="fa-sharp fa-solid fa-circle-check" style={check}></i>
            Bulk Sms And Email</li>

            <li>
            <i className="fa-sharp fa-solid fa-circle-check" style={check}></i>
            Card Management</li>

            <li>
            <i className="fa-sharp fa-solid fa-circle-check" style={check}></i>
            Custom Domain</li>

            <li>
            <i className="fa-sharp fa-solid fa-circle-check" style={check}></i>
            Events</li>

            <li>
            <i className="fa-sharp fa-solid fa-circle-check" style={check}></i>
            Hostel</li>
        </ul>

        </div>

    )
}

export default Package3;