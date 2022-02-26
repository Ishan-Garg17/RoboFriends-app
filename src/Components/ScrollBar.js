import React from "react";

const ScrollBar = (props)=>{
    
    return(
        <div style={{overflowY: 'scroll', border: '1px solid cyan', margin: '20px', height: `600px`}}>
            <br/>
            <br/>
            {props.children}
        </div>
    )

}


export default ScrollBar;