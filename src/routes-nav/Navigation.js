import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import UserContext from '../auth/UserContext'

import logo from '../crypticlogo.jpeg'

import './Navigation.css'

function Navigation({ logout }) {
    const { currentUser } = useContext(UserContext)

    function loggedInNav() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-4">
                    <NavLink className="nav-link lnk" to="/watchlist">
                        Watchlist
                    </NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink className="nav-link lnk" to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li className="nav-item">
                    <Link className="nav-link lnk" to="/" onClick={logout}>
                        Log Out ({currentUser.firstName || currentUser.username})
                    </Link>
                </li>
            </ul>
        )
    }

    function loggedOutNav() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-4">
                    <NavLink className="nav-link lnk" to="/login">
                        Log In
                    </NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink className="nav-link lnk" to="/signup">
                        Sign Up
                    </NavLink>
                </li>
            </ul>
        )
    }

    return (
        <nav className="Navigation navbar navbar-expand-md nav">
            <Link className="navbar-brand nav-link" to="/">
                <img src={logo} className="imglogo" />
            </Link>
            {currentUser ? loggedInNav() : loggedOutNav()}
        </nav>
    )
}

export default Navigation