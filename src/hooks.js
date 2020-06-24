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
  const position = 'absolute'
  const sf = sinify(scale)
  const borderRadius = '50%'
  return {
      getBallStyle(i) {
          const sfi = divideScale(sf, i, n)
          const sfi1 = divideScale(sfi, 0, 2)
          const sfi2 = divideScale(sfi, 1, 2)
          const dynSize = size * sfi1
          const left = `${size * i + size / 2 - dynSize / 2}px`
          const width = `${dynSize}px`
          const height = `${dynSize}px`
          const background = '#3F51B5'
          const top = `${size / 2 - dynSize / 2 + (h - size) * sfi2}px`
          return {position, width, height, position, left, top, borderRadius, background}
      },
      getBtnStyle() {
        const left = `${0.45 * w}px`
        const top = `${0.45 * h}px`
        return {position, left, top}
      }
  }
}
