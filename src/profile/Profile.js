import React, { useContext } from 'react'
import UserContext from '../auth/UserContext'

import './Profile.css'

function Profile() {
    const { currentUser } = useContext(UserContext)

    return (
        <div className="account">
            <div className="details">
                <h2>Account Details:</h2>
                <hr />
                <br />
                <h5>
                    <b>Username:</b> {currentUser.username}
                </h5>
                <br />
                <h5>
                    <b>Full Name:</b> {currentUser.firstName} {currentUser.lastName}
                </h5>
                <br />
                <h5>
                    <b>Email:</b> {currentUser.email}
                </h5>
            </div>
        </div>
    )
}

export default Profile