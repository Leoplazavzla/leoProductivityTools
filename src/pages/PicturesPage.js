import React from "react"
import {Container, Button, Box, TextField, Typography} from "@material-ui/core"
import AddPicture from "../components/AddPicture"
import PictureList from "../components/PictureList"
import {PicturesProvider} from "../contexts/PicturesContext"
import {usePicture} from "../contexts/PicturesContext";

const Pictures = () => {
    const {pictureArray} = usePicture();
    console.log(pictureArray)

    return(
        <>
            <Container>
                <AddPicture/>
                <PicturesProvider>
                    {pictureArray ? <PictureList pictureArray={pictureArray}/> : <div>Could not find any pictures</div>}
                </PicturesProvider>


            </Container>
        </>
    )
}
export default Pictures;