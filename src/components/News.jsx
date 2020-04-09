import React, { useEffect, useState } from 'react'
import '../styles/News.scss'
import { client } from '../client'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { KoronaContext } from '../App'
import { ImgLoader } from './ImgLoader'

export const News = () => {
  
  const {state} = useContext(KoronaContext)

 
  let i = 0;
  return (
    <div className='news_wrapper'>

      <h1>Последние новости</h1>
      {state !== '' &&
        <div className='news_wrapp'>

          <div className='pic' >

            <NavLink to={`/news/${state[0].fields.id}`}> <ImgLoader src={state[0].fields.img.fields.file.url}/> </NavLink>


            <div className='news_title'>
              <div style={{ fontSize: '15px' }} >{state[0].fields.publisher}</div>
              <div>{state[0].fields.title}
              </div>
            </div>

          </div>


          <div>
            {state.map(el => <div>
              <div style={{ display: 'none' }}> {i++}</div>

              {i > 1 & i < 7 ?
                <div className={`right_news ${i == 6 && 'without_border'}`}>
                  <div style={{ color: '#8790ba', fontSize: '17px' }} >{el.fields.publisher}</div>

                  <NavLink to={`/news/${el.fields.id}`}> <div className='righttitle'>
                    {el.fields.title}
                  </div></NavLink>
                </div> : null
              }
            </div>)}

          </div>

        </div>}

      {state !== '' &&
        <div style={{ color: '#8790ba', fontSize: '15px', paddingTop: '10px' }}> {state[0].fields.author}</div>}

      <NavLink to='/allnews/1'>
        <div style={{ display: 'flex', alignItems: 'center' }} className='lenktonews' >Смотреть все новости
        </div>
      </NavLink>


    </div>
  )
}
