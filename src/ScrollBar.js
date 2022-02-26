import React from "react";

const ScrollBar = (props)=>{
    
    return(
        <div style={{overflowY: scroll}}>
            {props.children}
        </div>
    )

}


export default ScrollBar;