import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import ItemList from './ItemList';
import AddItem from './AddItem';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={ItemList} />
                    <Route path="/add-new-item" component={AddItem} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
