import React from "react";
import './Gif.css'

 export default function Gif ({title, url, id}) {
    return (
        <a href={`#${id}`} className='Gif'>
            <h3>{title}</h3>
            <img alt={title} src={url} key={id}/>
        </a>
    )
}