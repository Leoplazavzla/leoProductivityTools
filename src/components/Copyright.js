import {Typography} from "@mui/material";
import React from "react";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{mt: 10}}
            {...props}
        >
            {'Copyright © leoproductivitytools '}
            {new Date().getFullYear()}
            {'.'}

        </Typography>
    );
}

export default Copyright;