import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import { PageNotFound } from './pages/PageNotFound';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

export const Routes = () => (
    <Switch>
        <Route path="/" exact={true}>
            <FirstPage/>
        </Route>
        <Route path="/second" exact={true}>
            <SecondPage/>
        </Route>
        <Route path="/third">
            <ThirdPage/>
        </Route>
        <Route>
            <PageNotFound/>
        </Route>
    </Switch>
);

//  /third/3-1   exact   /third