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
  // const [modalcontent, setmodalcontent] = useState([{text:'<h1>Антикризисный план</h1><p>Правительство России утвердило план действий по обеспечению устойчивого развития в связи с распространением новой коронавирусной инфекции. В числе мер:</p><ul><li> 	 Временное ограничение движения через авто-, ж/д и другие пункты на границе страны с 30 марта;</li> <li>Формирование перечня товаров первой необходимости и оперативный мониторинг их наличия в организациях торговли;</li><li>Создание дополнительных мощностей по производству тест-систем, что позволит выпускать более 300 тысяч тестов в сутки;</li> <liРасширение списка лабораторий для тестирования населения, в том числе за счет привлечения частных организаций;></li> <li>Выделение средств на дооснащение больниц в регионах;</li> <li>Резервирование 171 млрд рублей на реструктуризацию и предоставление отсрочки по выплате бюджетных кредитов, а также на компенсацию потерь региональных бюджетов;</li> <li>Временное закрытие санаториев, курортов до 1 июня, а также заведений общественного питания, не обеспечивающих дистанционную торговлю – до 5 апреля;</li> <li>Временная приостановка работы культурно-развлекательных учреждений, а также запрет на проведение спортивных, зрелищных и других массовых мероприятий;</li> <li>Введение моратория на проверки бизнеса, в том числе налоговые, за исключением вопросов, несущих риски для жизни и здоровья граждан;</li> <li>Облегчение условий кредитования отраслей, пострадавших от коронавируса;</li>   <li>Снижение имущественных налогов для арендодателей в обмен на снижение ставок аренды или отсрочки платежей для арендаторов отдельных категорий бизнеса;</li><li>Запуск специального сервиса для помощи работникам и работодателям по вопросам трудовой деятельности на сайте онлайниспекция.рф;</li> <li>Запуск специального сервиса для помощи работникам и работодателям по вопросам трудовой деятельности на сайте онлайниспекция.рф;</li><li>Дистанционные выплаты пособий, в том числе по безработице;</li>  <li>Предоставление Росавиации 1,5 млрд рублей на возмещение затрат авиакомпаний, занимающихся возвращением граждан РФ из-за границы;</li> <li>Дистанционная продажа лекарств, продающихся без рецепта.</li> </ul> <p> <a href="https://стопкоронавирус.рф/smbsupport/">Подробнее о мерах поддержки малого и среднего бизнеса</a> </>'}, ])


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
      </KoronaContext.Provider>
    </HashRouter>
  );
}

export default App;
