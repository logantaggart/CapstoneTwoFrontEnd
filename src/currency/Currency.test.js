import React from 'react'
import { MemoryRouter } from 'react-router'

import { render } from '@testing-library/react'

import UserProvider from '../testUtils'

import Currency from './Currency'

it('renders without crashing', () => {
    render(
        <MemoryRouter>
            <UserProvider>
                <Currency />
            </UserProvider>
        </MemoryRouter>
    )
})

it('matches snapshot', () => {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider>
                <Currency />
            </UserProvider>
        </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot()
})