import React, { useEffect, useState } from 'react'
import '../styles/News.scss'
import news_img from '../svg/news_img.jpg'
import { client } from '../client'
import { Markup } from 'interweave'
import { NavLink } from 'react-router-dom'

export const News = () => {

  const [state, setstate] = useState('')
  const fetchData = async () => {
    const entries = await client.getEntries({
      content_type: "news",


    })
    console.log(entries.items[0].fields)
    setstate(entries.items)
  }
  useEffect(() => {
    fetchData()

  }, [])
  let i = 0;
  return (
    <div className='news_wrapper'>

      <h1>Последние новости</h1>
      {state !== '' &&
        <div className='news_wrapp'>

          <div className='pic' >

            <NavLink to={`/news/${state[0].fields.id}`}> <img src={state[0].fields.img.fields.file.url} alt="" /></NavLink>
            <div className='news_title'>
              <div style={{ fontSize: '15px' }} >{state[0].fields.publisher}</div>
              <div>{state[0].fields.title}
              </div>

            </div>

          </div>

          <div>
            {state.map(el => <div>
            <div style={{display:'none'}}> {console.log(el)}{i++}</div> 
             
              {i > 1 & i<6 ? 
              <div className='right_news'>
                <div style={{ color: '#8790ba', fontSize: '17px' }} >{el.fields.publisher}</div>

              <NavLink to={`/news/${el.fields.id}`}> <div className='righttitle'> 
                   {el.fields.title}
                   </div></NavLink> 
                   </div>:null
                      }
            </div>)}
          </div>

        </div>}
      {state !== '' &&
        <div style={{ color: '#8790ba', fontSize: '15px', paddingTop: '10px' }}> {state[0].fields.author}</div>}
    </div>
  )
}
