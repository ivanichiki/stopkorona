import React, { useRef, useState, useEffect, useReducer } from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { Operativdata } from './components/OperativData/Operativdata';
import { News } from './components/News';
import ScrollAnimation from 'react-animate-on-scroll';
import { HashRouter, Route } from 'react-router-dom';
import { AllNews } from './components/AllNews';
import { ExactNews } from './components/ExactNews';
import { LinksunderNews } from './components/LinksunderNews';
import { Videopage } from './components/Videopage';
import { client } from './client';
import { Solutions } from './components/Solutions';
import { Modal } from './components/modal';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { BusinessMesures } from './components/BusinessMesures';
import { BusinessTopic } from './components/BusinessMesures/BusinessTopic';
import { Fadein } from './components/Fadein';
import { stataReducer } from './reducers/stateReducer';
import { Council } from './components/Council';
import { Hq } from './components/Hq';
import { AboutCovid } from './components/About_covid/AboutCovid';



export const KoronaContext = React.createContext(null)



function App() {



  const [render, setrender] = useState(0)
  const [state, setstate] = useState('')
  const [headerloaded, setheaderloaded] = useState(false)
  const [modal, setmodal] = useState(false)
  const [modalId, setmodalId] = useState(0)
  const [modalcontent, setmodalcontent] = useState([])
  const [detaleData, sedetaleData] = useState('')
  const [scrollMenuToggle, setscrollMenuToggle] = useState(false)



  const fetchData = async () => {
    const entries = await client.getEntries({
      content_type: "news",
      // order: 'fields.id'
    })
    setstate(entries.items)
  }
  const fetchDetaleData = async () => {
    const entries = await client.getEntries({
      content_type: "detaleData",
      order: 'fields.id'
    })
    sedetaleData(entries.items)
  }

  const fetchModalContent = async () => {
    const entries = await client.getEntries({
      content_type: "modal"
    })
    setmodalcontent(entries.items)
  }


  const fetchOperData = async ()=> {

    const entries = await client.getEntries({
      content_type: "stata",
      
     
    })
   
    dispatch({type:'setamount',value:entries.items[0].fields})
    dispatch({type:'setmounth',value:entries.items[0].sys.updatedAt.slice(5,7)})
    dispatch({type:'setday',value:entries.items[0].sys.updatedAt.slice(8,10)})
    dispatch({type:'settime',value:entries.items[0].sys.updatedAt.slice(11,16)})
  }
  const initialstate = {stat:'', mounth:'',day:'', time:''}
  const [stateOper,dispatch] = useReducer(stataReducer,initialstate)

  useEffect(() => {
    fetchData()
    fetchOperData()
    fetchModalContent()
    fetchDetaleData()
  }, [])

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
         setmodal(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  return (
    <>
    
    <HashRouter>
    
      <KoronaContext.Provider
      value={{state, modal, setmodal,wrapperRef,modalcontent,setmodalId,modalId,detaleData,stateOper,scrollMenuToggle, setscrollMenuToggle,headerloaded,setheaderloaded,setrender, render}}
      >

    <div style={{overflow:'hidden'}} className='wrapper'>
    
       <div className={`modalwrapper ${modal==false&&'act'}`}><Modal/></div>
      
        <Header /> 
   {headerloaded&&
   <>

       {scrollMenuToggle&& <div className={`modalOverlay_mobile`}> </div>}

        <Route exact path='/' render={() => <Operativdata />} />
       
        <ScrollAnimation delay='100' duration='1' animateOnce animateIn="fadeIn">
          <Route exact path='/' render={() => <News />} />
      

        </ScrollAnimation>

        <Route path="/news/:newsid"
            component={ExactNews} />

    
       
          <Route exact path="/allnews/:page" component={AllNews} />
          <Route exact path='/what-is-done/solutions' render={() => <Fadein props={<Solutions/>} />} />
          <Route exact path='/what-is-done/council' render={() => <Council  />} />
          <Route exact path='/what-is-done/hq' render={() => <Hq  />} />
          <Route exact path='/what-to-do/business' render={() => <BusinessMesures />} />
          
          <Route path="/about-covid/:ref" component={AboutCovid} />
          <Route path="/what-to-do/business/topics/:topicid" component={BusinessTopic} />
          </>  }  
    </div>
  
      <ScrollAnimation delay='100' duration='1' animateOnce animateIn="fadeIn">
          <Route exact path='/' render={() => <Videopage />} />
      </ScrollAnimation>
 
  <ScrollAnimation delay='100' duration='1' animateOnce animateIn="fadeIn">
          <Route exact path='/' render={() => <Menu />} />
      </ScrollAnimation>
    


      <ScrollAnimation delay='100' duration='1' animateOnce animateIn="fadeIn">
          <Footer/>
      </ScrollAnimation> 
  
 {/* </div>  */}
      </KoronaContext.Provider>
  
    </HashRouter>
 
    </>
  );
}

export default App;
