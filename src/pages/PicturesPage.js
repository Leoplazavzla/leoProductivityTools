import React, {useEffect} from "react"
import AddPicture from "../components/AddPicture"
import PictureList from "../components/PictureList"
import {PicturesProvider} from "../contexts/PicturesContext"
import BaseLayout from "../BaseLayout";

const Pictures = () => {

    useEffect(() => {

    })

    return(
            <BaseLayout>
                <PicturesProvider>
                    <AddPicture/>
                    <PictureList/>
                </PicturesProvider>
            </BaseLayout>
    )
}
export default Pictures;