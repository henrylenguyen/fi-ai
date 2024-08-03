import * as React from 'react'
import { throttle } from 'lodash'

interface ICursorProps {}

const Cursor: React.FunctionComponent<ICursorProps> = () => {
  React.useEffect(() => {
    const cursor = document.querySelector('.cursor')
    if (!cursor) return

    const updateCursor = (e: MouseEvent) => {
      cursor.setAttribute('style', 'top: ' + (e.pageY - scrollY) + 'px; left: ' + e.pageX + 'px')
    }

    const handleMouseMove = throttle(updateCursor, 16) // 16ms ~ 60fps

    document.addEventListener('mousemove', handleMouseMove)

    document.addEventListener('click', () => {
      cursor.classList.add('expand')

      setTimeout(() => {
        cursor.classList.remove('expand')
      }, 500)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('click', () => {})
    }
  }, [])

  return <div className='cursor'></div>
}

export default Cursor
