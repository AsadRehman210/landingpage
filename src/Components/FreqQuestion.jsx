import React, { useState } from "react";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const FreqQuestion = ({QHeading, QAnswer}) =>{
    let [show, setShow] = useState(false);

    const showPara = () =>{
        setShow(!show)
    }

    return(
        <div className="col-12 Fre-tab">
            <div className="Freq_Question">
            <div className="Fre_heading" onClick={showPara}>
            <h4 >{QHeading} </h4>
            <p>{!show? (<i className="fa fa-angle-down" aria-hidden="true"></i>) : (<i className="fa fa-angle-up" aria-hidden="true"></i>)}</p>
            </div>
            {show && (<p>{QAnswer}</p>)}


            </div>
        </div>

    )
}

export default FreqQuestion;