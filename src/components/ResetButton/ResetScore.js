import React from 'react'
import './ResetButton.css'

export const ResetScore = ({ resetScore }) => {
  return (
    <button className="resetButton" onClick={ resetScore }>Reset score</button>
  )
}
