import React from "react"
import {Container, Stack, TextField, Button, Grid } from "@mui/material";
import {TableBody, TableCell, TableHead, Table, TableRow} from "@material-ui/core";
import {usePicture} from "../contexts/PicturesContext";
import {useAuth} from "../contexts/AuthContext"


const PictureList = () => {
    const {pictureArray, deletePictures} = usePicture();
    const {currentUser} = useAuth();

    return (
        <>
            <Container>
                <Table>
                    <TableBody>
                        {pictureArray.map((pictureObject) => {
                            return (
                                <TableRow key={pictureObject.id}>
                                    <TableCell>{pictureObject.name}</TableCell>
                                    <TableCell><Button >See file</Button> </TableCell>
                                    <TableCell><Button >Download File</Button> </TableCell>
                                    <TableCell><Button >Copy URL</Button> </TableCell>
                                    <TableCell>
                                        <Button
                                            onClick={() => deletePictures(pictureObject.id, currentUser.email)}
                                        >
                                            Delete Picture
                                        </Button> </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>

                </Table>



            </Container>
        </>
    )
}
export default PictureList;

