import React from "react";
import {Icon} from "@material-ui/core/Icon"
import MenuIcon from '@material-ui/core/Icon';
import {SvgIcon} from "@material-ui/core";
import {AppBar, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
        offset: theme.mixins.toolbar
    })
)

const NavBar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar color={"primary"}>
                <Toolbar>
                    <IconButton >
                        <MenuIcon color={"error"}/>
                    </IconButton>
                    <Typography>
                        Tu Batidora Ideal
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </>
    )
}

export default NavBar;