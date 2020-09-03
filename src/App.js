import React, { useState } from 'react';
import './App.css';
import ItemAdd from './components/ItemAdd';
import ItemList from './components/ItemList';
import NavigationBar from './components/NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

function App() {
  const [listItems, setListItems] = useState([]);
  const [itemText, setItemText] = useState("");

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path="/">
            <ItemList listItems={listItems} setListItems={setListItems} />
            <ItemAdd listItems={listItems} setListItems={setListItems} itemText={itemText} setItemText={setItemText} />
          </Route>
          <NavigationBar />
        </header>
      </div>
    </Router>
  );
}

export default App;
