import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import jwt from 'jsonwebtoken'

import Routes from './routes-nav/Routes'
import Navigation from './routes-nav/Navigation'

import useLocalStorage from './hooks/useLocalStorage'
import UserContext from './auth/UserContext'

import CryptoApi from './api/api.js'

import './App.css'

export const TOKEN_STORAGE_ID = "crypto-token"


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID)

  const [watchlist, setWatchlist] = useState(null)

  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token)
          CryptoApi.token = token

          let currentUser = await CryptoApi.getCurrentUser(username)
          setCurrentUser(currentUser)
        }
        catch (err) {
          setCurrentUser(null)
        }
      }
    }
    getCurrentUser()
  }, [token])

  useEffect(function getWatchlistOnLoad() {
    async function getCurrentUserWatchlist() {
      if (currentUser) {
        try {
          let username = currentUser.username
          let sortBy = 'name'
          let orderBy = 'ASC'

          let data = { username, sortBy, orderBy }
          let currentUserWatchlist = await CryptoApi.getWatchlist(data)
          setWatchlist(currentUserWatchlist)
        }
        catch (err) {
          setWatchlist(null)
        }
      }
    }
    getCurrentUserWatchlist()
  }, [currentUser])

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  async function signup(signupData) {
    try {
      let token = await CryptoApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errs) {
      console.error("signup failed", errs);
      return { success: false, errs };
    }
  }

  async function login(loginData) {
    try {
      let token = await CryptoApi.login(loginData)
      setToken(token)
      return { success: true }
    }
    catch (errs) {
      console.error('login failed', errs)
      return { success: false, errs }
    }
  }

  async function retrieveWatchlist(username = currentUser.username, sortBy = 'name', orderBy = 'ASC') {
    let data = { username, sortBy, orderBy }
    const list = await CryptoApi.getWatchlist(data)
    setWatchlist(list)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser, watchlist }}>
          <Navigation logout={logout} />
          <Routes login={login} signup={signup} retrieveWatchlist={retrieveWatchlist} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;
