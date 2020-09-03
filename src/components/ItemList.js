import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircle from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ItemList({ listItems, setListItems }) {
    const classes = useStyles();

    const handleToggle = (id) => () => {
        const newCheckedItem = listItems.find((item) => item.id === id);
        newCheckedItem.done = !newCheckedItem.done;
        const nextListItems = listItems.map(item => newCheckedItem.id === item.id ? newCheckedItem : item);
        setListItems(nextListItems);
    };

    const handleRemove = (id) => {
        var nextListItems = listItems.filter((item) => (
            item.id !== id
        ));
        setListItems(nextListItems);
    };

    return (
        <List className={classes.root}>
            {listItems.map(({ id, text, done }) => {
                const labelId = `checkbox-list-label-${id}`;

                return (
                    <ListItem key={id} role={undefined} dense button onClick={handleToggle(id)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={done}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} style={{ textDecoration: done ? "line-through" : 'none' }}>{text}</ListItemText>
                        <ListItemSecondaryAction onClick={() => handleRemove(id)}>
                            <IconButton edge="end" aria-label="comments">
                                <RemoveCircle />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}