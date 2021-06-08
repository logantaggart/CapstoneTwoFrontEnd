import React from 'react'
import { MemoryRouter } from 'react-router'

import { render } from '@testing-library/react'

import LoginForm from './LoginForm'

it('matches snapshot', () => {
    const { asFragment } = render(
        <MemoryRouter>
            <LoginForm />
        </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot()
})