import React, {useState, useEffect} from 'react'
import Row from './components/Row'
import './styles.css'
import findAndClearFibonacci from './helper/findAndClearFibonacci'
import generateGrid from './helper/generateGrid'
import {Grid} from './types'

const incrementColumns = (grid: Grid[], columnIndex: number, rowIndex: number) => grid.map((rows: Grid, i: number) => {
  if (columnIndex !== i) {
    rows[rowIndex] += 1
  }
  return rows
})

const incrementRows = (grid: Grid[], columnIndex: number) => {
  grid[columnIndex] = grid[columnIndex].map((value: number) => value + 1)

  return grid
}
const FibonacciGrid = (): JSX.Element => {
  const [grid, setGrid] = useState([])

  useEffect(() => {
    const generated50by50Grid = generateGrid(50)
    setGrid(generated50by50Grid)
  }, [])

  const handleOnClickBox = (index: number, rowIndex: number) => () => {
    let newGrid = grid.slice()
    newGrid = incrementColumns(newGrid, rowIndex, index)
    newGrid = incrementRows(newGrid, rowIndex)
    newGrid = findAndClearFibonacci(newGrid, 5)
    setGrid(newGrid)
  }

  return (
    <table className="fibonacci-table">
        <tbody>
            {grid.map((rows: Grid, rowIndex: number): JSX.Element => (
                <tr key={`${rowIndex}-table`}>
                    {rows.map((rowValue: number, index: number): JSX.Element => (
                        <Row
                            key={`row-${index}`}
                            onClick={handleOnClickBox(index, rowIndex)}
                            rowValue={rowValue}
                            testId={`row-${rowIndex}-${index}`}
                        />
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
  );
}

export default FibonacciGrid;
