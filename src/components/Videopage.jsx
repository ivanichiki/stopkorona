import React, { useRef, useContext } from 'react'
import '../styles/Videopage.scss'
import { useState } from 'react'
import { useReducer } from 'react'
import { videopageReducer } from '../reducers/videopageReducer'
import { KoronaContext } from '../App'


export const Videopage = () => {

  const {VideoRef} = useContext(KoronaContext)

  const initialstate = { right: 0, mobile:false }
 
  const [state, dispatch] = useReducer(videopageReducer, initialstate)



  return (
    <div ref={VideoRef}  className='video_wrapp_wrapper'>
      <div  className='videotitle'>
        Узнай больше про коронавирус <span>COVID–19</span>
      </div>

      <div onClick={() => dispatch({ type: 'plusright' })} className={`rightstralka desktop ${state.right ==1200 && 'off'}`}>&rsaquo;</div>
      <div onClick={() => dispatch({ type: 'minusrigh' })} className={`leftstrelka  desktop ${state.right == 0 && 'off'}`}>&lsaquo;</div>

      <div onClick={() => dispatch({ type: 'plusrightMobile' })} className={`rightstralka mobile ${state.right == 85*5 && 'off'}`}>&rsaquo;</div>
      <div onClick={() => dispatch({ type: 'minusrighMobile' })} className={`leftstrelka  mobile ${state.right == 0 && 'off'}`}>&lsaquo;</div>

      <div  className='video_wrapper'>
        <div style={{ right: `${state.right}${state.mobile?'vw':'px'}` }} className='videocontainer'>
          <iframe className='video' src="https://www.youtube.com/embed/OovOLgepfIY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>

        <div  style={{ right: `${state.right}${state.mobile?'vw':'px'}` }}  className='videocontainer'>
          <iframe  className='video'src="https://www.youtube.com/embed/mor0ac6hm98" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>
        <div style={{ right: `${state.right}${state.mobile?'vw':'px'}` }}  className='videocontainer'>
          <iframe className='video' src="https://www.youtube.com/embed/h-Vhn5Ri32M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>

        <div style={{ right: `${state.right}${state.mobile?'vw':'px'}` }}  className='videocontainer'>
          <iframe className='video' src="https://www.youtube.com/embed/AJBGKRnaTfo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>

        <div style={{ right: `${state.right}${state.mobile?'vw':'px'}` }}  className='videocontainer'>
          <iframe className='video' src="https://www.youtube.com/embed/DBZA6EbrIEM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>

        <div style={{ right: `${state.right}${state.mobile?'vw':'px'}` }}  className='videocontainer'>
          <iframe className='video' src="https://www.youtube.com/embed/iLqVMrG8RRA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>

      </div>
      <div className='minibtn_wrapper'>
        <div onClick={() => dispatch({ type: 'tostart' })} className={`minibtn desktop ${state.right < 1200 && 'select'}`}></div>
        <div onClick={() => dispatch({ type: 'toend' })} className={`minibtn desktop ${state.right == 1200 && 'select'}`}></div>


        <div onClick={() => dispatch({ type: 'tostart' })} className={`minibtn mobile ${state.right ==85*0 && 'select'}`}></div>
        <div onClick={() => dispatch({ type: 'shortcut',value:85*1 })} className={`minibtn mobile ${state.right == 85*1 && 'select'}`}></div>
        <div onClick={() =>dispatch({ type: 'shortcut',value:85*2 })} className={`minibtn mobile ${state.right == 85*2  && 'select'}`}></div>
        <div onClick={() => dispatch({ type: 'shortcut',value:85*3 })} className={`minibtn mobile ${state.right == 85*3  && 'select'}`}></div>
        <div onClick={() => dispatch({ type: 'shortcut',value:85*4 })} className={`minibtn mobile ${state.right == 85*4 && 'select'}`}></div>
        <div onClick={() => dispatch({ type: 'shortcut',value:85*5 })} className={`minibtn mobile ${state.right == 85*5 && 'select'}`}></div>
      </div>
    </div>
  )
}
