import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import Homepage from '../homepage/Homepage'

import LoginForm from '../auth/LoginForm'
import SignupForm from '../auth/SignupForm'

import Currency from '../currency/Currency'

import Watchlist from '../watchlist/Watchlist'
import Profile from '../profile/Profile'

function Routes({ login, signup, retrieveWatchlist }) {
    return (
        <div className="pt-5">
            <Switch>

                <Route exact path="/">
                    <Homepage retrieveWatchlist={retrieveWatchlist} />
                </Route>

                <Route exact path="/login">
                    <LoginForm login={login} />
                </Route>

                <Route exact path="/signup">
                    <SignupForm signup={signup} />
                </Route>

                <PrivateRoute exact path="/currency">
                    <Currency />
                </PrivateRoute>

                <PrivateRoute exact path='/watchlist'>
                    <Watchlist retrieveWatchlist={retrieveWatchlist} />
                </PrivateRoute>

                <PrivateRoute exact path="/profile">
                    <Profile />
                </PrivateRoute>

            </Switch>
        </div >
    )
}

export default Routes