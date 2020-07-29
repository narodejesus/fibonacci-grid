import React from 'react'
import Row from '../Row'
import {render} from '@testing-library/react'

jest.useFakeTimers()

describe('Row component', () => {
    it('renders row component', () => {
        const {baseElement} = render(
           <table>
                <tbody>
                    <tr>
                        <Row onClick={jest.fn()} rowValue={0} />
                    </tr>
                </tbody>
            </table>
        )

        expect(baseElement).toMatchSnapshot()
    })

    it('renders row component with rowValue', () => {
        const {baseElement} = render(
           <table>
                <tbody>
                    <tr>
                        <Row onClick={jest.fn()} rowValue={1} />
                    </tr>
                </tbody>
            </table>
        )

        expect(baseElement).toMatchSnapshot()
    })
})