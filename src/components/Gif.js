import React from "react";

 const Gif = ({title, url, id}) => {
    return (
        <div>
            <h3>{title}</h3>
            <img alt={title} src={url} key={id}/>
        </div>
    )
}

export default Gif;