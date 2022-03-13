import React from "react"
import {Container, Stack, TextField, Button, Grid } from "@mui/material";
import {TableBody, TableCell, TableHead, Table, TableRow} from "@material-ui/core";
import {usePicture} from "../contexts/PicturesContext";
import {useAuth} from "../contexts/AuthContext"
import Strings from "../resources/Strings";


const PictureList = () => {
    const {pictureArray, deletePictures} = usePicture();
    const {currentUser} = useAuth();

    return (
        <>
            <Container>
                {pictureArray ?
                    <Table>
                        <TableBody>
                            {pictureArray.map((pictureObject) => {
                                return (
                                    <TableRow key={pictureObject.id}>
                                        <TableCell>{pictureObject.name}</TableCell>
                                        <TableCell><Button >{Strings.pictures.see}</Button> </TableCell>
                                        <TableCell><Button >{Strings.pictures.download}</Button> </TableCell>
                                        <TableCell><Button >{Strings.pictures.copy}</Button> </TableCell>
                                        <TableCell>
                                            <Button
                                                onClick={() => deletePictures(pictureObject.id, currentUser.email)}
                                            >
                                                {Strings.pictures.delete}
                                            </Button> </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>

                    </Table>
                    :
                    <div>No pictures yet</div>}




            </Container>
        </>
    )
}
export default PictureList;

