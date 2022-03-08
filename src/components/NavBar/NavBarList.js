import React from 'react';
import Box from '@material-ui/core/Box';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core';
import ListItemButton from '@material-ui/core/ListItem';
import {Dashboard as DashboardIcon} from "@material-ui/icons"
import DraftsIcon from '@material-ui/icons/Drafts';
import Strings from "../../resources/Strings";
import {paths} from "../../resources/paths"
import {useAuth} from "../../contexts/AuthContext"
import {auth} from "../../firebase/firebaseConfig"
import {useNavigate, NavLink} from "react-router-dom"

export default function NavBarList() {

    const {logOut, currentUser} = useAuth();
    let navigate = useNavigate();

    const signOut = () => {
        logOut(auth).then(navigate("/login"))
    }

    return (

            <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {currentUser ? <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablepadding={"false"} button>
                            <ListItemButton component="a" href={paths.dashboard}>
                                <ListItemIcon>
                                    <DashboardIcon/>
                                </ListItemIcon>
                                <ListItemText primary={Strings.navBar.dashboard}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablepadding={"false"} button>
                            <NavLink to={paths.messages.basePath}>
                                <ListItemIcon>
                                    <DraftsIcon/>
                                </ListItemIcon>
                                <ListItemText primary={Strings.navBar.messages}/>
                            </NavLink>
                        </ListItem>
                    </List>
                </nav> : <div></div>}

                <Divider/>
                <nav aria-label="secondary mailbox folders">

                        {currentUser ?
                            <List>
                            <ListItem disablepadding={"false"} color={"primary"} button>
                                <NavLink to={paths.alarm.basePath}>
                                    <ListItemText primary={Strings.alarm.name}/>
                                </NavLink>
                            </ListItem>
                            <ListItem disablepadding={"false"} color={"primary"} button>
                                <NavLink to={paths.pictures.basePath}>
                                    <ListItemText primary={Strings.pictures.name}/>
                                </NavLink>
                            </ListItem>
                            <ListItem disablepadding={"false"} button>
                            <ListItemButton  onClick={signOut} >
                            <ListItemText primary={Strings.navBar.logout}/>
                            </ListItemButton>
                            </ListItem>
                            </List>
                            :
                            <List>
                            <ListItem disablepadding={"false"} button>
                            <ListItemButton component="a" href={paths.register}>
                            <ListItemText primary={Strings.register.name}/>
                            </ListItemButton>
                            </ListItem>
                            </List>
                        }

                </nav>
            </Box>
    );
}