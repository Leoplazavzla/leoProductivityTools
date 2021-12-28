import React, {useEffect, useState} from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";


const ListOfGifs = ({keyword}) => {
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGifs(keyword)
            .then(gifs => setGifs(gifs))
    }, [keyword])

    return gifs.map(({title, id, url}) =>
        <Gif
            title={title}
            id={id}
            url={url}
        />
    )
}

export default ListOfGifs;