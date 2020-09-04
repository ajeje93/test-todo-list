import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Alert from '@material-ui/lab/Alert';
import Item from './Item';
import { useParams } from 'react-router-dom';
import ItemAdd from './ItemAdd';
import NoMatch from './NoMatch';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ItemList() {
    const [listItems, setListItems] = useState([]);

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

    const { type } = useParams();

    let itemsToShow = [];
    switch (type) {
        case "done":
            itemsToShow = listItems.filter(item => item.done);
            break;
        case "todo":
            itemsToShow = listItems.filter(item => !item.done);
            break;
        case undefined:
            itemsToShow = listItems;
            break;
        default:
            itemsToShow = undefined;
            break;
    }

    if (itemsToShow) {
        return (
            <Grid container
                direction="column"
                justify="center"
                alignItems="center">
                <Grid item xs>
                    <List className={classes.root}>
                        {
                            itemsToShow.map(({ id, text, done }) => {
                                const labelId = `checkbox-list-label-${id}`;

                                return (
                                    <Item key={id} id={id} labelId={labelId} handleRemove={handleRemove} handleToggle={handleToggle} text={text} done={done} />
                                );
                            })
                        }
                        {itemsToShow.length === 0 ? (<Alert severity="info">No TODOs!</Alert>) : ""}
                    </List>
                </Grid>
                <Grid item xs style={{display: type==='done' ? 'none' : ''}}>
                    <ItemAdd listItems={listItems} setListItems={setListItems} />
                </Grid>
            </Grid>
        );
    } else {
        return (<NoMatch />);
    }

} 
