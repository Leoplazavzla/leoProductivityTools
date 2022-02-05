import react, {useState} from "react";
import {Box, Button} from "@mui/material";
import React from "react";

const MotorcycleBox = (props) =>{
    const [motoDown, setMotoDown] = useState(8)
    const [motoUp, setMotoUp] = useState()

    return(
        <Box
            border={'1px solid grey'}
            m={1}
            color="primary.main"
            bgcolor="common.white"
        >
            <Button
                key={props.time.toString()}
                onClick={ () => {
                    setMotoDown(motoDown -1)

                }}
            >The time is {props.time}
            </Button>
        </Box>
    )
}
export default MotorcycleBox;