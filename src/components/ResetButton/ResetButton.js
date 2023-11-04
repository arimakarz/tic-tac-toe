import React from 'react'
import './ResetButton.css'

export const ResetButton = ({ resetBoard }) => {
  return (
    <button className="resetButton" onClick={ resetBoard }>Reset this game</button>
  )
}
