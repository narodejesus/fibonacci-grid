

const generateGrid = (numberOfGrid: number, value?: number): number[] => {
    let newList = []

    for (let i = 0; i < numberOfGrid; i++) {
        newList[i] = value ?? generateGrid(numberOfGrid, 0)
    }

    return newList
}

export default generateGrid