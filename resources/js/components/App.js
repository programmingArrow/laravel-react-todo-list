import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import ItemList from './ItemList';
import AddItem from './AddItem';


function App() {
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={ItemList} />
            <Route path="/add-new-item" component={AddItem} />
        </React.Fragment>
    );
}

export default App;
