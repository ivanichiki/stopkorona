import React, { useEffect } from 'react'
import '../styles/AllNews.scss'
import { client } from '../client'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { KoronaContext } from '../App'

export const AllNews = ({ match }) => {


  const { state } = useContext(KoronaContext);
  const postsPerPage = 6;
  const indexOfLastPost = match.params.page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const [count, setcounter] = useState(0)
  const [loaded, setloaded] = useState(false)
  useEffect(() => {
 
    window.scrollTo(0, 0)
    setloaded(false)
    setcounter(0)
  }, [match])



  const pageNumbers = [];
  const afterCP = [];

  for (let i = 1; i < match.params.page; i++) {
    pageNumbers.push(i);
  }
  for (let i = match.params.page; i <= Math.ceil(state.length / postsPerPage); i++) {
    afterCP.push(i);
  }
  let array = state.slice(indexOfFirstPost, indexOfLastPost)

   


let g=0;
let f=0;
let counter = 0;

const onLoad = ()=> {
  setcounter(count+1)
  console.log(count)
  console.log(array.filter(el=> el.fields.img).length-1)

  if (count==array.filter(el=> el.fields.img).length-1)
  setloaded(true)

}

console.log(loaded)
 
  return (
    <div className={`Fadein_wrapper ${loaded && 'show'}`}>
    <div  onLoad={onLoad} className='allNews_wrapper'>
      <div className='allNews_title'>
        <h1>Новости</h1>
      </div>

      {state !== '' ? array.map(el => <div>
          <>
      <div style={{display:'none'}}>{counter++}</div>
        {el.fields.img ?
     
          <div  className={`news_header ${counter==postsPerPage&&'withoutline'}`}>
           
            <div>
        <NavLink to={`/news/${el.fields.id}`}> <img   src={el.fields.img.fields.file.url} alt="" /> </NavLink>
              <div style={{ color: '#8d8795', fontSize: '14px' }}>{el.fields.author} </div>
            </div>
            <div className='rigtcolumn'>
              <div style={{ color: '#8790ba', fontSize: '14px' }}>    {el.fields.publisher}</div>
              <NavLink to={`/news/${el.fields.id}`}>     <div className='title1stnews'>  {el.fields.title} </div></NavLink>
            </div>

          </div>
          : <>
            <div className={`news_container ${counter==postsPerPage&&'withoutline'}`}>
            <div style={{display:'none'}}></div> 
              <div style={{ color: '#8790ba', fontSize: '14px' }}>{el.fields.publisher}</div>
              <NavLink to={`/news/${el.fields.id}`}>  <div style={{ fontSize: '24px' }}>{el.fields.title}</div> </NavLink>
            </div>
          </>}
          </>
          
      </div>
      
    )
    :<div style={{paddingBottom:'700px'}}></div>
    }

      <div className='pagination'>

{match.params.page==1
?        <div className='disable LeftBtn'>  &lsaquo; </div>
:      <NavLink to={`/allnews/${match.params.page-1}`}> <div  className='LeftBtn'> &lsaquo; </div></NavLink> 
      }
        {pageNumbers.map(el =>
      
        <>
        {el==1||el==2||el+1==match.params.page||el==match.params.page-2?
          <NavLink to={`/allnews/${el}`}>
            <div className={`page ${el==match.params.page&&'focus'}`} >
              <span> {el}</span>
            </div>
          </NavLink>
        : 
        <>
        <div style={{display:'none'}}>{g++}
        </div>
        {g==1&&<div className='triplepoint'>...</div>}
        </>
        }
          </>
        )}
        {afterCP.map(el =>
      
      <>
      
      {el==1||el==2||el==match.params.page||el==state.length||el==state.length-1||el-1==match.params.page||el-2==match.params.page?
        <NavLink to={`/allnews/${el}`}>
          <div  className={`page ${el==match.params.page&&'focus'}`} >
            <span> {el}</span>
          </div>
        </NavLink>
      : 
      <>
      <div style={{display:'none'}}>{f++}
      </div>
      {f==1&&<div  className='triplepoint'>...</div>}
      </>
      }
        </>
      )}
           {match.params.page== Math.ceil(state.length / postsPerPage)
            ?        <div className='disable RightBtn'> &rsaquo; </div>
            :         <NavLink to={`/allnews/${Number(match.params.page)+1}`}> <div className='RightBtn'> &rsaquo; </div></NavLink> 
           }
       
      </div>

    </div>
 </div>
  )
}
