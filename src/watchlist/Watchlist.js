import React, { useState, useContext } from 'react'

import UserContext from '../auth/UserContext'

import './Watchlist.css'

function Watchlist(props) {
    const [formData, setFormData] = useState({
        sortBy: "name",
        orderBy: ""
    })

    const { currentUser, watchlist } = useContext(UserContext)

    const is_testing = false
    const test_watchlist = {
        "watchlist":
            [{
                "currency": "USD",
                "date": "2021-06-03T02:05:49.000Z",
                "market_cap": 698208752460.92,
                "name": "Bitcoin",
                "price": 37287.18,
                "volume": 32850986431.73,
                "username": 'ciewicnjqwicnuehfu3fbwkrenfujn3'
            },
            {
                "currency": "USD",
                "date": "2021-06-03T00:39:10.000Z",
                "market_cap": 55504648942.88,
                "name": "Cardano",
                "price": 1.7373,
                "volume": 3305794201.01,
                "username": 'ciewicnjqwicnuehfu3fbwkrenfujn3'
            }]
    }



    let data = !is_testing ? watchlist['watchlist'] : test_watchlist['watchlist']

    function handleSubmit(evt) {
        evt.preventDefault()

        props.retrieveWatchlist(currentUser.username, formData.sortBy, formData.orderBy)
    }
    function handleChange(evt) {
        const { name, value } = evt.target
        setFormData(s => ({ ...s, [name]: value }))
    }

    return (
        <div className="list">
            <h3>Cryptocurrency Watchlist:</h3>
            <br />

            <form onSubmit={handleSubmit} className="container">
                <select className="form-control" name="sortBy" onChange={handleChange} value={formData.sortBy}>
                    <option value="name">Alphabetical</option>
                    <option value="price">Price</option>
                    <option value="market_cap">Market Cap</option>
                    <option value="volume">Volume</option>
                    <option value="date">Date</option>
                </select>
                <br />

                <select className="form-control" name="orderBy" onChange={handleChange} value={formData.orderBy}>
                    <option value="ASC">Ascending</option>
                    <option value="DESC">Descending</option>
                </select>
                <br />

                <button className="btn btn-md btn-primary">Sort</button>
            </form>
            <br />
            <hr />

            <div className="info">
                {data.map((data, idx) => (
                    <div key={idx}>
                        <h5>{data.name}</h5>
                        <b>Price:</b> <u>{data.price} {data.currency}</u>
                        <br />
                        <b>Market Cap:</b> <u>{data.market_cap} {data.currency}</u>
                        <br />
                        <b>Volume:</b> <u>{data.volume} {data.currency}</u>
                        <br /> <br />
                        <i>Information Accurate As Of: {data.date.split("T")[0]}</i>
                        <br /> <br />
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Watchlist