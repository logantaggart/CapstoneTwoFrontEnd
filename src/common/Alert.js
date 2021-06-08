import React from 'react'

function Alert({ type = 'danger', messages = [] }) {
    return (
        <div className={`alert alert-${type}`} role='alert'>
            {messages.map((error, idx) => (
                <p className="mb-0 small" key={idx}>
                    {error}
                </p>
            ))}
        </div>
    )
}

export default Alert