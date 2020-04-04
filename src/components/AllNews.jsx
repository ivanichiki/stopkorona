import React, { useEffect } from 'react'
import '../styles/AllNews.scss'
import { client } from '../client'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { KoronaContext } from '../App'

export const AllNews = () => {

  const {state} = useContext(KoronaContext) ;
  let i = 0;
  return (
    <div className='allNews_wrapper'>
      <div className='allNews_title'>
        <h1>Новости</h1>
      </div>
      {state != '' &&
        <div className='news_header'>
          <div>
          <NavLink to= {`/news/${state[0].fields.id}`}>   <img src={state[0].fields.img.fields.file.url} alt="" /> </NavLink>
          <div style={{color:'#8d8795', fontSize:'14px'}}>{state[0].fields.author} </div>
          </div>
          <div className='rigtcolumn'>
            <div style={{ color: '#8790ba', fontSize: '14px' }}>    {state[0].fields.publisher}</div>
            <NavLink to= {`/news/${state[0].fields.id}`}>     <div className='title1stnews'>  {state[0].fields.title} </div></NavLink>
          </div>
        </div>}
      {state !== '' && state.map(el => <div>
        <div style={{ display: 'none' }}>{i++}</div>
        {i > 1 ?
          <div className='news_container'>
            <div style={{ color: '#8790ba', fontSize: '14px' }}>{el.fields.publisher}</div>
            <NavLink to= {`/news/${el.fields.id}`}>  <div style={{fontSize:'24px'}}>{el.fields.title}</div> </NavLink>
          </div>
          : null
        }
      </div>)}
    </div>
  )
}
