import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircle from '@material-ui/icons/RemoveCircle';

export default function Item({ labelId, id, text, done, handleRemove, handleToggle }) {
    return (
        <ListItem role={undefined} dense button onClick={handleToggle(id)}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={done}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </ListItemIcon>
            <ListItemText id={labelId} style={{ textDecoration: done ? "line-through" : "none" }}>{text}</ListItemText>
            <ListItemSecondaryAction onClick={() => handleRemove(id)}>
                <IconButton edge="end" aria-label="remove">
                    <RemoveCircle />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}