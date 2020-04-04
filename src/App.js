import React from 'react';
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


function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
