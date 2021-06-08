import React from 'react'
import { MemoryRouter } from 'react-router'

import { render } from '@testing-library/react'

import UserProvider from '../testUtils'

import Homepage from './Homepage'

it('matches snapshot', () => {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider>
                <Homepage />
            </UserProvider>
        </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot()
})

it('matches snapshot when logged out', () => {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider currentUser={null}>
                <Homepage />
            </UserProvider>
        </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot()
})