import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Operativdata } from './components/Operativdata';
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

export const KoronaContext = React.createContext(null)



function App() {

  const VideoRef = useRef(null)
  const OperRef = useRef(null)
  const SolutionsRef = useRef(null)
  const scrollToRef = (ref) => window.scrollTo({top: ref.current.offsetTop-200, behavior: 'smooth'})   

  const executeScrolltoVideo = () => scrollToRef(VideoRef)
  const executeScrolltoOper = () => scrollToRef(OperRef)
  const executeScrolltoSolutions = () => scrollToRef(SolutionsRef)
  
  const [state, setstate] = useState('')
  const [modal, setmodal] = useState(false)
  const [modalId, setmodalId] = useState(0)
  const [modalcontent, setmodalcontent] = useState([])
  

  const fetchData = async () => {
    const entries = await client.getEntries({
      content_type: "news",
    })
    setstate(entries.items)
  }

  const fetchModalContent = async () => {
    const entries = await client.getEntries({
      content_type: "modal",
    })
    setmodalcontent(entries.items)
  }
  useEffect(() => {
    fetchData()
    fetchModalContent()

  }, [])

console.log(modalcontent, modalId)

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
    <HashRouter>
      <KoronaContext.Provider
      value={{VideoRef, OperRef, scrollToRef, executeScrolltoVideo,executeScrolltoOper,state,SolutionsRef,executeScrolltoSolutions, modal, setmodal,wrapperRef,modalcontent,setmodalId,modalId}}
      >
      <div style={{overflow:'hidden'}} className='wrapper'>
     <div className={`modalwrapper ${modal==false&&'act'}`} > <Modal/> </div>
        <Header />

        <Route exact path='/' render={() => <Operativdata />} />
       
        <ScrollAnimation delay='100' duration='1' animateOnce animateIn="fadeIn">
          <Route exact path='/' render={() => <News />} />
          <Route exact path="/news/" render={() => <AllNews />} />

          <Route path="/news/:newsid"
            component={ExactNews} />
        </ScrollAnimation>
       
        <ScrollAnimation delay='100' duration='1' animateOnce animateIn="fadeIn">
          <Route exact path='/' render={() => <LinksunderNews />} />
        </ScrollAnimation>

        <ScrollAnimation delay='100' duration='1' animateOnce animateIn="fadeIn">
          <Route exact path='/' render={() => <Videopage />} />
        </ScrollAnimation>
        
        <ScrollAnimation delay='100' duration='1' animateOnce animateIn="fadeIn">
          <Route exact path='/' render={() => <Solutions />} />
          </ScrollAnimation>


       
      </div>
      <Footer/>
      </KoronaContext.Provider>
    </HashRouter>
  );
}

export default App;
