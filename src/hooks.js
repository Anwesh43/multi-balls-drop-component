import {useEffect, useState} from 'react'

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