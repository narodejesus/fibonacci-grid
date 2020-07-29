import generateGrid from '../generateGrid'

describe('generateGrid function', () => {
    it('returns a 10x10 grid with 0 in as initial value', () => {
        expect(generateGrid(10)).toEqual([
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ])
    })

    it('returns a 2x2 grid with 0 in as initial value', () => {
        expect(generateGrid(2)).toEqual([
            [0, 0],
            [0, 0],
        ])
    })

    it('returns empty if param is 0 ', () => {
        expect(generateGrid(0)).toEqual([])
    })
})