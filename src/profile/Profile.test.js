import React from 'react'
import { MemoryRouter } from 'react-router'

import { render } from '@testing-library/react'

import UserProvider from '../testUtils'

import Profile from './Profile'

it('renders without crashing', () => {
    render(
        <MemoryRouter>
            <UserProvider>
                <Profile />
            </UserProvider>
        </MemoryRouter>
    )
})

it('matches snapshot', () => {
    const { asFragment } = render(
        <UserProvider>
            <Profile />
        </UserProvider>
    )

    expect(asFragment()).toMatchSnapshot()
})