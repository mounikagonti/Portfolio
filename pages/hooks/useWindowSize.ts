import React, {useEffect, useState} from 'react'

interface WindowSize {
  width: number
  height: number
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  })

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    handleSize() // Set size on initial render

    const handleResize = () => {
      handleSize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize) // Cleanup the event listener on unmount
    }
  }, [])

  return {windowSize}
}
