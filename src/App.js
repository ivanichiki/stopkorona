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

export const KoronaContext = React.createContext(null)



function App() {

  const VideoRef = useRef(null)
  const OperRef = useRef(null)
  const scrollToRef = (ref) => ref.current.scrollIntoView({behavior: 'smooth', 
  block: "nearest"})   

  const executeScrolltoVideo = () => scrollToRef(VideoRef)
  const executeScrolltoOper = () => scrollToRef(OperRef)

  
  const [state, setstate] = useState('')
  const fetchData = async () => {
    const entries = await client.getEntries({
      content_type: "news",


    })

    setstate(entries.items)
  }
  useEffect(() => {
    fetchData()

  }, [])



  return (
    <HashRouter>
      <KoronaContext.Provider
      value={{VideoRef, OperRef, scrollToRef, executeScrolltoVideo,executeScrolltoOper,state}}
      >
      <div className='wrapper'>

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


      </div>
      </KoronaContext.Provider>
    </HashRouter>
  );
}

export default App;
