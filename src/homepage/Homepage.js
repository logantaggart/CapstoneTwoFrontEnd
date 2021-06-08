import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../auth/UserContext'

import CryptoApi from '../api/api'

import Currency from '../currency/Currency'

import './Homepage.css'


function Homepage(props) {
    const { currentUser } = useContext(UserContext)

    const [formData, setFormData] = useState({
        cryptoname: "",
        convertname: "USD",
        isSubmitted: false
    })

    const [cryptoInfo, setCryptoInfo] = useState({
        information: "",
        conversionCurr: "USD"
    })

    useEffect(() => {
        console.log("Changed:", cryptoInfo)
    }, [cryptoInfo])

    useEffect(() => {
        console.log("Changed:", formData)
    }, [formData.isSubmitted])

    async function handleSubmit(evt) {
        evt.preventDefault()

        let info = await CryptoApi.getCoin({ cryptoname: formData.cryptoname.toLowerCase(), convertname: formData.convertname })

        setCryptoInfo({ information: info.data, conversionCurr: formData.convertname })
        setFormData({ cryptoname: "", convertname: "USD", isSubmitted: true })
    }

    function handleChange(evt) {
        const { name, value } = evt.target
        setFormData(s => ({ ...s, [name]: value }))
    }


    return (
        <div className="homepage">
            <div className="container text-center">
                <h1 className="mb-3 font-weight-bold logo">Cryptic</h1>
                {currentUser ?
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input
                                name="cryptoname"
                                placeholder="Please Enter A Cryptocurrency Name (Ex: Ethereum)"
                                className="form-control form-control-lg flex-grow-1"
                                onChange={handleChange}
                                value={formData.cryptoname}
                                required
                            />

                            <br />

                            <select name="convertname" onChange={handleChange} value={formData.convertname} className="form-control form-control-sm flex-grow-1">
                                <option value="USD">USD ($)</option>
                                <option value="EUR">EUR (€)</option>
                                <option value="JPY">JPY (¥)</option>
                                <option value="GPY">GBP (£)</option>
                                <option value="AUD">AUD (A$)</option>
                                <option value="CAD">CAD (C$)</option>
                                <option value="CHF">CHF (Fr)</option>
                                <option value="CNY">CNY (¥)</option>
                                <option value="HKD">HKD (HK$)</option>
                                <option value="NZD">NZD (NZ$)</option>
                                <option value="SEK">SEK (Kr)</option>
                                <option value="KRW">KRW (₩)</option>
                                <option value="SGD">SGD (S$)</option>
                                <option value="NOK">NOK (Kr)</option>
                                <option value="MXN">MXN ($)</option>
                                <option value="INR">INR (₹)</option>
                                <option value="RUB">RUB (₽)</option>
                                <option value="ZAR">ZAR (R)</option>
                                <option value="TRY">TRY (₺)</option>
                                <option value="BRL">BRL (R$)</option>
                            </select>
                        </form>
                    </div>
                    : <>
                        <p className="description">Cryptic is a tool built for the future of finance that allows users to find and save information on their cryptocurrency of choice.</p>
                        <Link className="btn btn-primary btn-lg font-weight-bold mr-3 linkbtn" to="/login">
                            Log in
                        </Link>
                        <Link className="btn btn-primary btn-lg font-weight-bold linkbtn" to="/signup">
                            Sign up
                        </Link>
                    </>}

                {currentUser && formData.isSubmitted ? <Currency data={cryptoInfo} retrieveWatchlist={props.retrieveWatchlist} /> : null}
            </div>
        </div>
    )
}

export default Homepage