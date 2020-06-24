import React from 'react'
import {useStyle} from './hooks'

const Ball = ({style}) => {
  return (
    <div style = {style}></div>
  )
}

const createBalls = (getBallStyle, n) => {
  const balls = []
  for (let i = 0; i < n; i++) {
    balls.push(<Ball style = {getBallStyle(i)}/>)
  }
  return balls
}

const MutliBallsExpandDropPresentational = ({w, h, scale, onClick, n}) => {
  const {getBallStyle, getBtnStyle} = useStyle(n, w, h, scale)
  return (<div>
      {createBalls(getBallStyle, n)}
      <button style = {getBtnStyle()} onClick = {onClick}>Start</button>
    </div>)
}

export default MutliBallsExpandDropPresentational