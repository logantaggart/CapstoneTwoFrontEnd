import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Alert from '../common/Alert'

import './authForms.css'

function LoginForm({ login }) {
    const history = useHistory()

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const [formErrors, setFormErrors] = useState([])

    async function handleSubmit(evt) {
        evt.preventDefault()
        let result = await login(formData)
        if (result.success) {
            history.push("/")
        } else {
            setFormErrors(result.errs)
        }
    }

    function handleChange(evt) {
        const { name, value } = evt.target
        setFormData(l => ({ ...l, [name]: value }))
    }

    return (
        <div className="AuthForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h3 className="mb-3 formName">Log In</h3>

                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    name="username"
                                    className="form-control"
                                    value={formData.username}
                                    onChange={handleChange}
                                    autoComplete="username"
                                    required
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                    required
                                />
                            </div>
                            <br />

                            {formErrors.length ? <Alert type="danger" messages={formErrors} /> : null}

                            <button className="btn btn-primary float-right" onSubmit={handleSubmit}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoginForm