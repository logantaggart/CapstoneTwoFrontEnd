import React from 'react'
import { MemoryRouter } from 'react-router'

import { render } from '@testing-library/react'

import UserProvider from '../testUtils'

import PrivateRoute from './PrivateRoute'

it('renders without crashing', () => {
    render(
        <MemoryRouter>
            <UserProvider>
                <PrivateRoute />
            </UserProvider>
        </MemoryRouter>
    )
})

it('matches snapshot', () => {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider>
                <PrivateRoute />
            </UserProvider>
        </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot()
})

it('matches snapshot when logged out', () => {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider currentUser={null}>
                <PrivateRoute />
            </UserProvider>
        </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot()
})