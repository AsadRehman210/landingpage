import React, { useState } from "react";

const ContactForm = () =>{
    let [put, setPut] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""

    })
    let [past, setPast] = useState([]);

    let isGet = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setPut((prev, Index)=>{
            return { 
                     ...prev,
                     [name] : value

            }
        })
        
    }
    let onsubmit = (event) =>{
        event.preventDefault();
        setPast([...past, put]);
        return setPut({
            name: "",
            email: "",
            subject: "",
            message: ""
    
        })


    };
    return(
        <div className="contact-form">
        <form action="" onSubmit={onsubmit}>
                     <label className="form_heading">Send A Message 
                     {/* {past[0] ? past[0].name : ''} */}
                     </label><br/>
                     <input type="text" value={put.name} name="name" placeholder="Your Name" className="form_name" onChange={isGet} />

                     <input type="email" value={put.email} name="email" placeholder="Email Address" className="form_email" onChange={isGet} /><br/>

                     <input type="text" value={put.subject} name="subject" placeholder="Subject" className="form_subject" onChange={isGet}/><br/>

                     <textarea type="text" value={put.message} name="message" placeholder="Message" onChange={isGet}/><br/>

                     <button type="submit">Submit</button>


                    </form>

        </div>

    )
}

export default ContactForm;