import React, { useEffect } from 'react'
import { client } from '../client'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils'
import { useState } from 'react'
import '../styles/ExactNews.scss'
import { Markup } from 'interweave'
import { NavLink } from 'react-router-dom'
export const ExactNews = ({ match }) => {

  console.log(match.params.newsid)

  const [state, setstate] = useState('')
  const fetchData = async () => {
    const entries = await client.getEntries({
      content_type: "news",


    })
    let newarray = entries.items.filter(el =>
      el.fields.id == match.params.newsid)
    console.log(newarray[0])
    setstate(newarray[0].fields)
  }
  useEffect(() => {
    fetchData()

  }, [])
  return (
    <div className='allNews_wrapper'>
      <div className='imgtitle' style={{ color: 'white' }}>
        {state.img&&
        <>
        <img src={state.img.fields.file.url} alt=""/>
      <div style={{color:'#8d8795', fontSize:'14px'}}> {state.author}</div>
        </>
        }
        
        s
      </div>


      <div className={`${!state.img&&'line'}`}></div>
      {state !== '' &&
        <div className='textcontainer'>
          <div className='publisher' >
            {state.publisher}
          </div>
          <div className='newstitle'>
            <h1>{state.title}</h1>
          </div>
          <div style={{fontSize:'18px'}}>
          <Markup content={state.text}/>
          </div>
          <div className='source' style={{color:'#8d8795'}}>Источник: <span style={{color:'#fb5f3d'}}> {state.source}</span>  </div>
        </div>
      }
     <NavLink to='/news'> <div className='btnback'>К списку новостей</div></NavLink>
    </div>
  )
}
