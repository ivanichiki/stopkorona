import React, { useEffect } from 'react'
import { client } from '../client'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils'
import { useState } from 'react'
import '../styles/ExactNews.scss'
import { Markup } from 'interweave'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { KoronaContext } from '../App'
export const ExactNews = ({ match }) => {

  console.log(match.params.newsid)

  const [exactstate, setstate] = useState('')
  const {state} = useContext(KoronaContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const fetchData = () => {
    if(state!='')
    {
    let newarray = state.filter(el =>
      el.fields.id == match.params.newsid)
  
    setstate(newarray[0].fields)
  }
  }
  useEffect(() => {
    fetchData()

  }, [state])
  return (
    <div className='allNews_wrapper'>
      <div className='imgtitle' style={{ color: 'white' }}>
        {exactstate.img&&
        <>
        <img src={exactstate.img.fields.file.url} alt=""/>
      <div style={{color:'#8d8795', fontSize:'14px'}}> {exactstate.author}</div>
        </>
        }
        
        s
      </div>


      <div className={`${!exactstate.img&&'line'}`}></div>
      {exactstate !== '' &&
        <div className='textcontainer'>
          <div className='publisher' >
            {exactstate.publisher}
          </div>
          <div className='newstitle'>
            <h1>{exactstate.title}</h1>
          </div>
          <div style={{fontSize:'18px'}}>
          <Markup content={exactstate.text}/>
          </div>
          <div className='source' style={{color:'#8d8795'}}>Источник: <span style={{color:'#fb5f3d'}}> {exactstate.source}</span>  </div>
        </div>
      }
     <NavLink to='/news'> <div className='btnback'>К списку новостей</div></NavLink>
    </div>
  )
}
