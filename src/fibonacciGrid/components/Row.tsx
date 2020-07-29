import React, {useEffect, useState, memo} from 'react'

type Props = {
    onClick: () => void
    rowValue: number
    testId: string
}


enum RowState {
    empty = '',
    selected = 'selected',
    cleared = 'cleared',
    withValue = 'withValue'
}

const ANIMATION_TIMEOUT = 800
const useRowState = (rowValue: number): RowState => {
    const [rowState, setRowState] = useState<RowState>(RowState.empty)
    
    useEffect(() => {
        let timer
        if (rowValue !== 0) {
            setRowState(RowState.selected)
            timer = setTimeout(() => {
                setRowState(RowState.withValue)
            }, ANIMATION_TIMEOUT)
        } else {
            setRowState((prevState: RowState) => {
                if (prevState === '' && rowValue === 0) {
                    return
                } 
    
                return RowState.cleared
            })
    
            timer = setTimeout(() => {
                setRowState(RowState.empty)
            }, ANIMATION_TIMEOUT)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [rowValue])

    return rowState
}

const Row = ({onClick, rowValue, testId}: Props): JSX.Element => {
    const rowState = useRowState(rowValue)

    return (
        <td 
            data-testid={testId}
            className={rowState} 
            onClick={onClick}>
                {rowValue || ''}
        </td>
    )
}

export default memo<Props>(Row)