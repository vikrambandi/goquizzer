import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Create from './components/Create';

import './App.scss';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/create" component={Create} />
            </Switch>
        </div>
    );
}

export default App;
