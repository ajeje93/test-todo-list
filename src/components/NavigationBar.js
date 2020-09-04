import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import ListIcon from '@material-ui/icons/List';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="All" icon={<ListIcon />} component={Link} to="/" />
            <BottomNavigationAction label="To do" icon={<PlaylistAddIcon />} component={Link} to="/todo" />
            <BottomNavigationAction label="Done" icon={<PlaylistAddCheckIcon />} component={Link} to="/done" />
        </BottomNavigation>
    );
}