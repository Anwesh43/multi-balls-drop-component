import MutliBallsExpandDropPresentational from './MutliBallsExpandDropPresentational'
import React from 'react'
import {useDimension, useAnimatedScale} from './hooks'

const MutliBallsExpandDropComponent = ({n}) => {
  const {scale, start} = useAnimatedScale(0.02, 20)
  const {w, h} = useDimension()
  return (
  <div>
    <MutliBallsExpandDropPresentational scale = {scale} w = {w} h = {h} onClick = {start} n = {n}/>
  </div>
  )  
}

export default MutliBallsExpandDropComponent