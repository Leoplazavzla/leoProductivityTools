import React from 'react';
import {makeStyles, Drawer, Divider} from "@material-ui/core"
import NavBarList from "./NavBar/NavBarList"
import {IconButton} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';



const useStyles = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    toolbar: theme.mixins.toolbar,
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    }
}))

const NavigationDrawer = (props) => {
    const classes = useStyles();
    const {closeDrawer} = props;
    return (
        <Drawer
            anchor={"left"}
            className={classes.drawer}
            classes={{paper: classes.drawerPaper}}
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}

        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={closeDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            {/*<div className={classes.toolbar}>
            </div>*/}
            <Divider/>
            <NavBarList/>
        </Drawer>
    );
};

export default NavigationDrawer;
