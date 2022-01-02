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

export default function NavBarList() {
    return (

            <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablepadding={"false"} button>
                            <ListItemButton component="a" href="#">
                                <ListItemIcon>
                                    <DashboardIcon/>
                                </ListItemIcon>
                                <ListItemText primary={Strings.navBar.dashboard}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablepadding={"false"} button>
                            <ListItemButton component="a" href="#">
                                <ListItemIcon>
                                    <DraftsIcon/>
                                </ListItemIcon>
                                <ListItemText primary={Strings.navBar.messages}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider/>
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablepadding={"false"} color={"primary"} button>
                            <ListItemButton component="a" href="#">
                                <ListItemText primary={Strings.navBar.new}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablepadding={"false"} button>
                            <ListItemButton component="a" href="#">
                                <ListItemText primary={Strings.navBar.logout}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
    );
}