import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});

export default function RandomFact() {
    const [randomFact, setRandomFact] = useState("");

    const handleRefreshRandomFact = () => {
        axios.get('https://uselessfacts.jsph.pl/random.json', {
            params: {
                language: 'en'
            }
        }).then(response => setRandomFact(response.data.text));
    }

    useEffect(() => handleRefreshRandomFact(), []);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem>
                    <ListItemText>
                        <Typography variant="h6" gutterBottom>
                            <i>{randomFact}</i>
                        </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction onClick={handleRefreshRandomFact}>
                        <IconButton edge="end" aria-label="refresh">
                            <RefreshIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
    );
}