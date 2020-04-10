import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import '../styles/Example.scss'
export const Testblock = () => {

  const [props, set] = useSpring(() => ({ x: 0}))
  const bind = useDrag(({ down, movement: [x] }) => {
    if (x>50) console.log('hi')
    set({ x: down ? x : 0})
  })
  return (
  
  <div className='wrap'  >
  <animated.div   {...bind()} style={props} className='tester'/>

</div>
  ) 
}
