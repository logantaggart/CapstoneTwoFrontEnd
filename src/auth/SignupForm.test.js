import React from 'react'
import { MemoryRouter } from 'react-router'

import { render } from '@testing-library/react'

import SignupForm from './SignupForm'

it('matches snapshot', () => {
    const { asFragment } = render(
        <MemoryRouter>
            <SignupForm />
        </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot()
})