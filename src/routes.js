import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Result from 'pages/Result';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/result" component={Result} />
        </Switch>
    </BrowserRouter>
);

export default Router;