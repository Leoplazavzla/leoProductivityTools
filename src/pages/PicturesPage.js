import React, {useEffect} from "react"
import {Container} from "@material-ui/core"
import AddPicture from "../components/AddPicture"
import PictureList from "../components/PictureList"
import {PicturesProvider} from "../contexts/PicturesContext"

const Pictures = () => {

    useEffect(() => {

    })

    return(
            <Container>
                <PicturesProvider>
                    <AddPicture/>
                    <PictureList/>
                    {/*{pictureArray ? : <div>Could not find any pictures</div>}*/}
                </PicturesProvider>
            </Container>
    )
}
export default Pictures;