import React from 'react'
import FibonacciGrid from '../'
import {render, fireEvent} from '@testing-library/react'

jest.useFakeTimers()

describe('Fibonacci grid component', () => {
    it('renders 50x50 grid', () => {
        const {baseElement} = render(
           <FibonacciGrid />
        )

        expect(baseElement).toMatchSnapshot()
    })

    it('renders 50x50 grid and increment each item to one', () => {
        const {getByTestId, baseElement} = render(
           <FibonacciGrid />
        )
        const row = getByTestId('row-0-0')
        fireEvent.click(row)
        expect(baseElement).toMatchSnapshot()
    })
})