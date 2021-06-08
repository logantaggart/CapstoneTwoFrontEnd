import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001'

class CryptoApi {
    static token

    static async request(endpoint, data = {}, method = 'get') {
        console.debug('API Call:', endpoint, data, method)

        const url = `${BASE_URL}/${endpoint}`
        const headers = { Authorization: `Bearer ${CryptoApi.token}` }
        const params = (method === 'get') ? data : {}

        try {
            return (await axios({ url, method, data, params, headers })).data
        }
        catch (err) {
            console.error('API Error:', err)
            let message = err.response.data.slice((err['response']['data']).indexOf('<pre>') + 5, (err['response']['data']).indexOf('<br>'))
            throw Array.isArray(message) ? message : [message]
        }
    }

    static async getCurrentUser(username) {
        let res = await this.request(`users/${username}`)
        return res.user
    }

    static async login(data) {
        let res = await this.request(`auth/token`, data, "post")
        return res.token
    }

    static async signup(data) {
        let res = await this.request(`auth/register`, data, "post")
        return res.token
    }

    static async getCoin(data) {
        let res = await this.request(`currency/information`, data, "post")
        return res
    }

    static async addWatchlist(data) {
        let res = await this.request(`watchlist/add`, data, "post")
        return res
    }

    static async getWatchlist(data) {
        let res = await this.request(`watchlist/get`, data)
        return res
    }
}

export default CryptoApi