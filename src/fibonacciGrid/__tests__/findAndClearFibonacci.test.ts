import findAndClear from '../findAndClearFibonacci'

describe('findAndClear function', () => {
    it('returns original array if fibonacci sequence is not found', () => {
        const list = [
            [1,2,3,6,7,10,12,16,18,12],
            [1,2,3,6,7,10,12,16,18,12],
            [1,2,3,6,7,10,12,16,18,12],
            [1,2,3,6,7,10,12,16,18,12],
            [1,2,3,6,7,10,12,16,18,12],
            [1,2,3,6,7,10,12,16,18,12],
            [1,2,3,6,7,10,12,16,18,12],
            [1,2,3,6,7,10,12,16,18,12],
        ]

        expect(findAndClear(list, 4)).toEqual(list)
    })

    it('set numbers in array to 0 if it founds 5 consecutive numbers in the Fibonacci sequence and they are next to each other', () => {
        const list = [
            [1,2,3,6,5,8,13,21,34,12],
            [1,3,3,6,5,8,13,21,34,12],
            [1,5,3,6,5,8,13,21,34,12],
            [1,8,3,6,5,8,13,21,34,12],
            [1,13,3,6,5,8,13,21,34,12],
            [1,21,3,6,5,8,13,5,34,12],
            [1,35,3,6,5,8,13,10,34,12],
            [1,13,3,6,5,8,13,15,34,12],
            [1,23,3,6,5,8,13,25,34,12],
            [1,51,3,6,5,8,13,40,34,12],
        ]

        expect(findAndClear(list, 5)).toEqual([
            [1,0,3,6,0,0,0,0,0,12],
            [1,0,3,6,0,0,0,0,0,12],
            [1,0,3,6,0,0,0,0,0,12],
            [1,0,3,6,0,0,0,0,0,12],
            [1,0,3,6,0,0,0,0,0,12],
            [1,21,3,6,5,8,13,0,34,12],
            [1,35,3,6,5,8,13,0,34,12],
            [1,13,3,6,5,8,13,0,34,12],
            [1,23,3,6,5,8,13,0,34,12],
            [1,51,3,6,5,8,13,0,34,12],
        ])
    })

    it('set numbers in array to 0 if it founds 5 consecutive numbers in the Fibonacci sequence and they are next to each other that overlaps vertically', () => {
        const list = [
            [1,2,3,6,5,8,13,21,34,12],
            [1,3,3,6,5,8,13,21,34,12],
            [1,5,3,6,5,8,13,21,34,12],
            [1,8,3,6,5,8,13,21,34,12],
            [1,13,3,6,5,8,13,21,34,12],
            [1,21,3,6,5,1,13,5,34,12],
            [1,35,3,6,5,9,13,10,34,12],
            [1,13,3,6,5,10,13,15,34,12],
            [1,23,3,6,5,19,13,25,34,12],
            [1,51,3,6,5,8,13,40,34,12],
        ]

        expect(findAndClear(list, 5)).toEqual([
            [1,0,3,6,0,0,0,0,0,12],
            [1,0,3,6,0,0,0,0,0,12],
            [1,0,3,6,0,0,0,0,0,12],
            [1,0,3,6,0,0,0,0,0,12],
            [1,0,3,6,0,0,0,0,0,12],
            [1,21,3,6,5,0,13,0,34,12],
            [1,35,3,6,5,0,13,0,34,12],
            [1,13,3,6,5,0,13,0,34,12],
            [1,23,3,6,5,0,13,0,34,12],
            [1,51,3,6,5,8,13,0,34,12],
        ])
    })

})