import React, { useRef, useContext } from 'react'
import '../styles/Videopage.scss'
import { useState } from 'react'
import { useReducer } from 'react'
import { videopageReducer } from '../reducers/videopageReducer'
import { KoronaContext } from '../App'

export const Videopage = () => {

  const {VideoRef} = useContext(KoronaContext)


  const [right, setright] = useState(0)

  let plusright = () => {
    if (right != 1200) {
      setright(e => e + 400)
    }
  }
  let minusright = () => {
    if (right != 1200) {
      setright(e => e - 400)
    }
  }
  const initialstate = { right: 0 }
 
  const [state, dispatch] = useReducer(videopageReducer, initialstate)
  return (
    <div ref={VideoRef} style={{ position: 'relative', width: '1240px', paddingLeft: '30px', marginRight: '20px', backgroundColor: 'white', right: '55px', paddingBottom: '100px' }}>
      <div className='videotitle'>
        Узнай больше про коронавирус <span>COVID–19</span>
      </div>
      <div onClick={() => dispatch({ type: 'plusright' })} className={`rightstralka ${state.right == 1200 && 'off'}`}>&rsaquo;</div>
      <div onClick={() => dispatch({ type: 'minusrigh' })} className={`leftstrelka ${state.right == 0 && 'off'}`}>&lsaquo;</div>

      <div className='video_wrapper'>
        <div style={{ right: state.right }} className='videocontainer'>
          <iframe width="360" height="360" src="https://www.youtube.com/embed/OovOLgepfIY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>

        <div style={{ right: state.right }} className='videocontainer'>
          <iframe width="360" height="360" src="https://www.youtube.com/embed/mor0ac6hm98" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>
        <div style={{ right: state.right }} className='videocontainer'>
          <iframe width="360" height="360" src="https://www.youtube.com/embed/h-Vhn5Ri32M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>

        <div style={{ right: state.right }} className='videocontainer'>
          <iframe width="360" height="360" src="https://www.youtube.com/embed/AJBGKRnaTfo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>

        <div style={{ right: state.right }} className='videocontainer'>
          <iframe width="360" height="360" src="https://www.youtube.com/embed/DBZA6EbrIEM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>

        <div style={{ right: state.right }} className='videocontainer'>
          <iframe width="360" height="360" src="https://www.youtube.com/embed/iLqVMrG8RRA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>

      </div>
      <div className='minibtn_wrapper'>
        <div onClick={() => dispatch({ type: 'tostart' })} className={`minibtn ${state.right < 1200 && 'select'}`}></div>
        <div onClick={() => dispatch({ type: 'toend' })} className={`minibtn ${state.right == 1200 && 'select'}`}></div>
      </div>
    </div>
  )
}
