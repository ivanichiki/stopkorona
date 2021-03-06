import React, { useEffect } from 'react'

import { useState } from 'react'
import '../styles/ExactNews.scss'
import { Markup } from 'interweave'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { KoronaContext } from '../App'
export const ExactNews = ({ match }) => {

  
  const [exactstate, setstate] = useState('')
  const {state} = useContext(KoronaContext)
  const [loaded,setloaded]=useState(false)

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

   const onLoad = ()=> {
     if (loaded==false)
    setloaded(true)
     
   }

  useEffect(() => {
    fetchData()

  }, [state])



  return (
    <div onLoad={()=> setloaded(true)} className={`Fadein_wrapper ${loaded && 'show'}`}>
  <div className='real_wrapper'>


      <div className='imgtitle' style={{ color: 'white' }}>
        {exactstate.img?
        <>
        <img src={exactstate.img.fields.file.url} alt=""/>
      <div style={{color:'#8d8795', fontSize:'14px'}}> {exactstate.author}</div>
        </>
        : onLoad()
        }
        
        s
      </div>


      <div className={`${!exactstate.img&&'line'}`}></div>
      {exactstate !== '' ?
        <div className='textcontainer'>
          <div className='publisher' >
            {exactstate.publisher}
          </div>
          <div className='newstitle'>
            <h1>{exactstate.title}</h1>
          </div>
          <div className='exactText' >
          <Markup content={exactstate.text}/>
          </div>
          <div className='source' style={{color:'#8d8795'}}>Источник: <span style={{color:'#fb5f3d'}}> {exactstate.source}</span>  </div>
        </div>
        : <div style={{paddingBottom:'700px'}}></div>
      }
     <NavLink to='/allnews/1'> <div className='btnback'>К списку новостей</div></NavLink>
     </div>
    </div>

  )
}
