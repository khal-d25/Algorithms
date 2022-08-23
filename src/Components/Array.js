import React from "react";
import './app.css'


const Array = (props)=>{

    if(props.data !== undefined){
        const array = props.data.map((item,index)=>{
            return <div className="block" key={index}>{item}</div>
        })
    
        return(
            <div className="eachArray">{array}</div>
        )
    }
    
}

export default Array;