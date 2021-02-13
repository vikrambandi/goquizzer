import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'Pages/Home';
import Dashboard from 'Pages/Dashboard';
import Create from 'Pages/Create';

import './App.scss';

function App() {
    return (
        <div className="App">
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/create" component={Create} />
            </Switch>
        </div>
    );
}

export default App;
