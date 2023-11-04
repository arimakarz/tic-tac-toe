import React from 'react'
import './Board.css'
import { Box } from '../Box/Box'

export const Board = ({ board, onClick}) => {
  return (
    <div className='board'>
        {
            board.map((value, index) => {
                return <Box key={ index } value={ value } onClick={() => value === null && onClick(index)}/> 
            })
        }
        
    </div>
  )
}
