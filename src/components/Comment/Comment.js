import React from "react";

const Comment = (props) => {
    const {text} = props; 
    console.log('Rendering Comment...');
    return (
        <span className="bg-slate-200">{text}</span>
    )
}

export default React.memo(Comment);