
import {Grid} from '../types'

type GridList = Grid[]

const createCopy = (list: GridList): GridList => list.map((value: Grid) => {
    return value.slice()
})

const findAndClearFibonacci = (list: GridList, numberOfSequence: number) => {
    let newList = list.slice()
    let hListCopy = createCopy(list)

    for (let x = 0; x < newList.length; x++) {
        let verticalFibonaccis = []
        let horizontalFibonaccis = []
     
        for(let y = 0; y < hListCopy[x].length; y++) {
            const firstIndex = y - 2
            const SecondIndex = y - 1

            const verticalFibonacci = y > 1 && hListCopy[y] && hListCopy[firstIndex][x] ? hListCopy[firstIndex][x] + hListCopy[SecondIndex][x] : null
            const horizontalFibonacci = y > 2 && hListCopy[x][firstIndex] ? hListCopy[x][firstIndex] + hListCopy[x][SecondIndex] : null

            const currentVertical = hListCopy[y] ? hListCopy[y][x] : null
            const currentHorizontal = hListCopy[x][y]

            if (verticalFibonacci !==0 && currentVertical === verticalFibonacci) {
                if (verticalFibonaccis.length === 0) {
                    verticalFibonaccis.push(firstIndex)
                    verticalFibonaccis.push(SecondIndex)
                }
                verticalFibonaccis.push(y)
            } else {
                verticalFibonaccis = []
            }

            if (horizontalFibonacci !==0 && currentHorizontal === horizontalFibonacci) {
                if (horizontalFibonaccis.length === 0) {
                    horizontalFibonaccis.push(firstIndex)
                    horizontalFibonaccis.push(SecondIndex)
                }
                horizontalFibonaccis.push(y)
            } else {
                horizontalFibonaccis = []
            }

            if(horizontalFibonaccis.length === numberOfSequence) {
                horizontalFibonaccis.forEach((indexes) => {
                    newList[x][indexes] = 0
                })
                horizontalFibonaccis = []
            }
            
            if(verticalFibonaccis.length === numberOfSequence) {
                verticalFibonaccis.forEach((indexes) => {
                    if (newList[indexes]) {
                        newList[indexes][x] = 0
                    }
                })
                verticalFibonaccis = []
            } 
        }
    }

    return newList
}

export default findAndClearFibonacci