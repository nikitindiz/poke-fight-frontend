import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import PokemonListContainer from '../containers/PokemonListContainer'
import SinglePokemonContainer from '../containers/SinglePokemonContainer'

const PokeFight = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={`${match.path}/:id`}>
                <SinglePokemonContainer />
            </Route>

            <Route path={match.path}>
                <PokemonListContainer />
            </Route>
        </Switch>
    );
}

export default PokeFight;
