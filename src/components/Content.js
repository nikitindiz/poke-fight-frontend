import React from 'react';
import { Route, Switch } from 'react-router-dom';


import HomePage from '../pages/HomePage';
import PokeFightPage from '../pages/PokeFightPage';

const Content = () => {
    return (
        <div className="app-content">
            <Switch>
                <Route path="/pokemon-fight">
                    <PokeFightPage />
                </Route>

                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </div>
    );
};

export default Content;