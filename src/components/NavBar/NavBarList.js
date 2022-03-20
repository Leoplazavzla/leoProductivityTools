import React from 'react';
import Box from '@material-ui/core/Box';
import {Divider, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import ListItemButton from '@material-ui/core/ListItem';
import {Dashboard as DashboardIcon} from "@material-ui/icons"
import Image from "@material-ui/icons/Image"
import Strings from "../../resources/Strings";
import {paths} from "../../resources/paths"
import {useAuth} from "../../contexts/AuthContext"
import {auth} from "../../firebase/firebaseConfig"
import {Link, useNavigate} from "react-router-dom"
import {NoteAlt, Timer, NotificationsActive} from "@mui/icons-material";

export default function NavBarList() {

    const {logOut, currentUser} = useAuth();
    let navigate = useNavigate();

    const signOut = () => {
        logOut(auth).then(navigate("/login"))
    }

    return (
        <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            {currentUser ?
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem button disablepadding={"false"} component={Link} to={paths.home}>
                            <ListItemIcon>
                                <DashboardIcon/>
                            </ListItemIcon>
                            <ListItemText primary={Strings.navBar.dashboard}/>
                        </ListItem>

                        <ListItem disablepadding={"false"} color={"primary"} button component={Link}
                                  to={paths.alarm.basePath}>
                            <ListItemIcon>
                                <NotificationsActive/>
                            </ListItemIcon>
                            <ListItemText primary={Strings.alarm.name}/>
                        </ListItem>

                        <ListItem disablepadding={"false"} color={"primary"} button component={Link}
                                  to={paths.notes.basePath}>
                            <ListItemIcon>
                                <NoteAlt/>
                            </ListItemIcon>
                            <ListItemText primary={Strings.notes.name}/>
                        </ListItem>

                        <ListItem disablepadding={"false"} color={"primary"} button component={Link}
                                  to={paths.pictures.basePath}>
                            <ListItemIcon>
                                <Image/>
                            </ListItemIcon>
                            <ListItemText primary={Strings.pictures.name}/>
                        </ListItem>

                        <ListItem disablepadding={"false"} color={"primary"} button component={Link}
                                  to={paths.pomodoro.basePath}>
                            <ListItemIcon>
                                <Timer/>
                            </ListItemIcon>
                            <ListItemText primary={Strings.pomodoro.name}/>
                        </ListItem>
                    </List>
                </nav> : <div></div>}

            <Divider/>
            <nav aria-label="secondary mailbox folders">

                {currentUser ?
                    <List>
                        <ListItem disablepadding={"false"} button>
                            <ListItemButton onClick={signOut}>
                                <ListItemText primary={Strings.navBar.logout}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    :
                    <List>
                        <ListItem disablepadding={"false"} button>
                            <ListItem component={Link} to={paths.register}>
                                <ListItemText primary={Strings.register.name}/>
                            </ListItem>
                        </ListItem>
                    </List>
                }

            </nav>
        </Box>
    );
}