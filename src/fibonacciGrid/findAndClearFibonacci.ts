import find from './findAndClearFibonacci'

const createCopy = (list) => list.map((v) => {
    return v.slice()
})
const findAndClearFibonacci = (list: number[][], numberOfSequence: number) => {
    let newList = list.slice()
    let horizontalListCopy = createCopy(list)

    for (let x = 0; x < newList.length; x++) {
        let verticalFibonaccis = []
        let horizontalFibonaccis = []
     
        for(let y = 0; y < horizontalListCopy[x].length; y++) {
            const firstIndex = y - 2
            const SecondIndex = y - 1

            const verticalFibonacci = y > 1 && horizontalListCopy[y] ? horizontalListCopy[firstIndex][x] + horizontalListCopy[SecondIndex][x] : null
            const horizontalFibonacci = y > 1 ? horizontalListCopy[x][firstIndex] + horizontalListCopy[x][SecondIndex] : null

            const currentVertical = horizontalListCopy[y] ? horizontalListCopy[y][x] : null
            const currentHorizontal = horizontalListCopy[x][y]
         

            if (currentVertical === verticalFibonacci) {
                if (verticalFibonaccis.length === 0) {
                    verticalFibonaccis.push(firstIndex)
                    verticalFibonaccis.push(SecondIndex)
                }
                verticalFibonaccis.push(y)
            
            } else {
                verticalFibonaccis = []
            }


            if (currentHorizontal === horizontalFibonacci) {
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