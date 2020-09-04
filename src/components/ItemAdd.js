import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { nanoid } from 'nanoid'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function ItemAdd({ listItems, setListItems }) {
    const [itemText, setItemText] = useState("");

    const classes = useStyles();

    const handleAddItem = (itemText, setItemText, listItems, setListItems) => {
        const nextItem = {
            id: nanoid(),
            text: itemText,
            done: false
        }

        const nextListItems = [...listItems, nextItem];
        setListItems(nextListItems);
        setItemText("");
    };

    const handleChange = (e) => {
        setItemText(e.target.value)
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Note" onChange={handleChange} value={itemText} />
            <Button variant="contained" onClick={() => handleAddItem(itemText, setItemText, listItems, setListItems)}>ADD</Button>
        </form >
    );
}

export default ItemAdd;