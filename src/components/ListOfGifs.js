import React, {useEffect, useState} from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";


const ListOfGifs = ({params}) => {
    const [gifs, setGifs] = useState([])
    const {keyword} = params
    useEffect(() => {
        getGifs(keyword)
            .then(gifs => setGifs(gifs))
    }, [keyword])

    return (
        gifs.map(({title, id, url}) =>
            <Gif
                key={id}
                title={title}
                id={id}
                url={url}
            />
        )
    )
}


export default ListOfGifs;