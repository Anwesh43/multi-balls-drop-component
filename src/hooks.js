import {useEffect, useState} from 'react'
import {sinify, divideScale} from './utils'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        animated, 
        start() {
          let currScale = scale 
          if (!animated) {
            const interval = setInterval(() => {
              currScale += scGap 
              setScale(currScale)
              if (currScale > 1) {
                setScale(0)
                setAnimated(false)
                clearInterval(interval)
              } 
            }, delay)
          }
        }
    }
}

export const useDimension = () => {
  const [w, setW] = useState(window.innerWidth)
  const [h, setH] = useState(window.innerHeight)
  useEffect(() => {
    window.onresize = () => {
      setW(window.innerWidth)
      setH(window.innerHeight)
    }
  })
  return {
    w, 
    h
  } 
}

export const useStyle = (n, w, h, scale) => {
  const size = w / n 
  const width = `${size}px`
  const height = `${size}px`
  const position = 'absolute'
  const sf = sinify(scale)
  const borderRadius = '50%'
  return {
      getBallStyle(i) {
          const sfi = divideScale(sf, i, n)
          const left = `${size * i}px`
          const top = `${(h - size) * sfi}px`
          return {position, width, height, position, left, top, borderRadius}
      }
  }
}
