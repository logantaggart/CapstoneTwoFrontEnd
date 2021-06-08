import React from 'react'
import { MemoryRouter } from 'react-router'

import { render } from '@testing-library/react'

import UserProvider from '../testUtils'

import Watchlist from './Watchlist'

it('renders without crashing', () => {
    render(
        <MemoryRouter>
            <UserProvider>
                <Watchlist />
            </UserProvider>
        </MemoryRouter>
    )
})

it('matches snapshot', () => {
    const { asFragment } = render(
        <UserProvider>
            <Watchlist />
        </UserProvider>
    )

    expect(asFragment()).toMatchSnapshot()
})