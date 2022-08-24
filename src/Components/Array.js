import React from "react";

const Array = (props)=>{

    let arr = props.data;

    const sarr = arr.map((item,index)=>{

        
        
        return (
            <div style={{order:index}} id={index} key={index} className="column eblock block">
                <div className="ui fluid card imageItem">
                    <div className="image images"><span>{item}</span></div>
                </div>
            </div>
                )
    })

    return(
        <div id='arraySorting' className="ui grid">
            {sarr}
        </div>
    )
}

export default Array;