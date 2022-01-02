import React from 'react';
import {makeStyles, Drawer, Divider} from "@material-ui/core"
import NavBarList from "./NavBar/NavBarList"


const useStyles = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    toolbar: theme.mixins.toolbar,
}))

const NavigationDrawer = (props) => {
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            classes={{paper: classes.drawerPaper}}
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}

        >
            <div className={classes.toolbar}>
            </div>
            <Divider/>
            <NavBarList/>
        </Drawer>
    );
};

export default NavigationDrawer;
