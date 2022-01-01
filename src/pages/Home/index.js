import React, {useState} from "react";
import {Link} from "wouter"

const POPULAR_GIFS = ["Matrix", "Venezuela", "Gatos" ];

export default function Home () {
    const [keyword, setKeyword] = useState('')
    return(
        <>
            <h3>Los gifs mas populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => {
                    return <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de
                        {popularGif}</Link>
                    </li>
                })}
            </ul>
        </>
    )
}