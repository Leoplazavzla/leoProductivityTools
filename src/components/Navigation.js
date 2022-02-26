import React, {useState} from "react";
import NavBar from "./NavBar/NavBar";
import {makeStyles} from "@material-ui/core/styles";
import {Hidden} from "@material-ui/core";
import NavigationDrawer from "./NavigationDrawer";
import NavigationRoutes from "../NavigationRoutes";
import {BrowserRouter} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${240}px)`,
            marginLeft: 240
        }

    },
}));

const Navigation = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(!open)
    }


    return (
        <BrowserRouter>
            <div>
                <NavBar
                    handleDrawerOpen={handleDrawerOpen}
                />
                <Hidden xsDown>
                    <NavigationDrawer
                        variant={"permanent"}
                        open={true}
                    />
                </Hidden>
                <Hidden smUp>
                    <NavigationDrawer
                        variant={"temporary"}
                        open={open}
                        onClose={handleDrawerOpen}
                    />
                </Hidden>

                <div className={classes.appBar}>
                    <main className={classes.content}>
                        <NavigationRoutes/>
                    </main>


                </div>


            </div>
        </BrowserRouter>
    )
}
export default Navigation;