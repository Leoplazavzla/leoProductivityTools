import React, {useContext, useState, useEffect} from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {Typography} from "@mui/material";

const DateContext = React.createContext(1);

export function useDate() {
    return useContext(DateContext)
};

export function DateProvider({children}) {

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <LocalizationProvider dateAdapter={AdapterDateFns}> {children}</LocalizationProvider>
        </MuiPickersUtilsProvider>

    )
};

