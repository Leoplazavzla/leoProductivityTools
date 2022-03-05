import React from "react"
import {Container, Stack, TextField, Button, Grid } from "@mui/material";
import {TableBody, TableCell, TableHead, Table, TableRow} from "@material-ui/core";


const PictureList = ({pictureArray}) => {
    console.log(pictureArray)
    return (
        <>
            <Container>
                <Table>
                    <TableBody>
                        {pictureArray.map((pictureObject) => {
                            return (
                                <TableRow key={pictureObject.id}>
                                    <TableCell>{pictureObject.test}</TableCell>
                                    <TableCell><Button >See file</Button> </TableCell>
                                    <TableCell><Button >Download File</Button> </TableCell>
                                    <TableCell><Button >Copy URL</Button> </TableCell>
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

/*
*/
