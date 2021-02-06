import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Dashboard from './components/Dashboard/index';

import './App.scss';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
