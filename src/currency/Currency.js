import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import UserContext from '../auth/UserContext'

import CryptoApi from '../api/api'

import './Currency.css'

function Currency(props) {
    const { currentUser } = useContext(UserContext)

    const history = useHistory()
    const def = {
        "circulating_supply": 18727906,
        "date_added": "2013-04-28T00:00:00.000Z",
        "id": 1,
        "last_updated": "2021-06-06T04:14:02.000Z",
        "max_supply": 21000000,
        "name": "Bitcoin",
        "quote": {
            "USD": {
                "last_updated": "2021-06-06T04:14:02.000Z",
                "market_cap": 674244839244.1047,
                "percent_change_1h": -0.33709051,
                "percent_change_7d": 3.43260805,
                "percent_change_24h": -4.19557436,
                "percent_change_30d": -35.18685348,
                "percent_change_60d": -37.78196295,
                "percent_change_90d": -28.65379404,
                "price": 36002.1477705038,
                "volume_24h": 35849607046.41296
            }
        },
        "slug": "bitcoin",
        "symbol": "BTC"
    }

    const baseApiNums = props.data ? props.data.information[Object.keys(props.data.information)[0]] : def
    const currShort = props.data ? props.data.conversionCurr : 'USD'

    let price_length

    if (baseApiNums.quote[currShort].price > 1000) {
        price_length = 2
    }
    else if (baseApiNums.quote[currShort].price > 1 && baseApiNums.quote[currShort].price < 1000) {
        price_length = 4
    }
    else {
        price_length = 6
    }

    const name = baseApiNums.name
    const price = baseApiNums.quote[currShort].price.toFixed(price_length).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    const raw_price = baseApiNums.quote[currShort].price.toFixed(price_length)

    const market_cap = baseApiNums.quote[currShort].market_cap.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    const raw_market_cap = baseApiNums.quote[currShort].market_cap.toFixed(2)

    const price_change_hour = baseApiNums.quote[currShort].percent_change_1h.toFixed(3).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    const price_change_day = baseApiNums.quote[currShort].percent_change_24h.toFixed(3).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    const price_change_week = baseApiNums.quote[currShort].percent_change_7d.toFixed(3).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    const price_change_month = baseApiNums.quote[currShort].percent_change_30d.toFixed(3).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")

    const volume = baseApiNums.quote[currShort].volume_24h.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    const raw_volume = baseApiNums.quote[currShort].volume_24h.toFixed(2)

    let day
    let hour
    let am_pm
    let minutes
    let month

    const date = new Date()

    if (date.getMinutes() < 10) {
        minutes = '0' + date.getMinutes()
    }
    else {
        minutes = date.getMinutes()
    }

    if (date.getHours() > 12) {
        hour = date.getHours() - 12
    }
    else {
        hour = date.getHours()
    }

    if (date.getHours() <= 11) {
        am_pm = 'AM'
    }
    else {
        am_pm = 'PM'
    }

    if (date.getDate() < 10) {
        day = '0' + date.getDate()
    }
    else {
        day = date.getDate()
    }

    if ((date.getMonth() + 1) < 10) {
        month = '0' + (date.getMonth() + 1)
    }
    else {
        month = date.getMonth() + 1
    }

    const seconds = date.getSeconds()

    const orig_hour = date.getHours()
    const year = date.getFullYear()

    const formatted_date = `${month + '-' + day + '-' + year + ' ' + hour + ':' + minutes + ' ' + am_pm}`
    const formatted_date_v2 = `${year + '-' + month + '-' + day + ' ' + orig_hour + ':' + minutes + ':' + seconds}`


    const cryptoObj = {
        username: currentUser.username,
        name: name,
        price: raw_price,
        market_cap: raw_market_cap,
        volume: raw_volume,
        date: formatted_date_v2,
        currency: currShort
    }

    async function handleWatchlistAdd() {
        await CryptoApi.addWatchlist(cryptoObj)

        props.retrieveWatchlist()

        history.push('/watchlist')
    }

    return (
        <div className="result">
            <h4> {name} </h4>

            <p>
                <b>Price:</b> <u>{price} {currShort}</u>
            </p>
            <p>
                <b>Market Cap:</b> <u>{market_cap} {currShort}</u>
            </p>
            <p>
                <b>1 Hour Price Change:</b> <u>{price_change_hour}%</u>
            </p>
            <p>
                <b>24 Hour Price Change:</b> <u>{price_change_day}%</u>
            </p>
            <p>
                <b>7 Day Price Change:</b> <u>{price_change_week}%</u>
            </p>
            <p>
                <b>30 Day Price Change:</b> <u>{price_change_month}%</u>
            </p>
            <p>
                <b>Volume:</b> <u>{volume} {currShort}</u>
            </p>

            <h6>{formatted_date}</h6>

            <button onClick={handleWatchlistAdd} className='btn btn-sm btn-primary'>Add to Watchlist</button>
        </div>
    )
}

export default Currency