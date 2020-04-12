import React, { useContext } from 'react'
import './modal.scss'
import { KoronaContext } from '../App';

import closebtn from '../svg/closebtn.png'
import facebook from '../svg/facebook.png'
import vk1 from '../svg/vk1.png'
import odno from '../svg/odno.png'
import twitter from '../svg/twitter.png'
import closebtn2 from '../svg/close2.svg'
import { Markup } from 'interweave';
import { useState } from 'react';
import { useEffect } from 'react';
import { MapData } from './MapData';
import { Transition, useTransition, animated } from 'react-spring';



document.body.style.scrollbar3dlightColor = "black"

export const Modal = () => {
  const { modal, setmodal, wrapperRef, modalcontent, modalId } = useContext(KoronaContext)
  const [state, setstate] = useState('')

  useEffect(() => {
    let newarray = []
    if (modalcontent.length > 1) {
      if(modalId==10) {

      }
      else {
        newarray = modalcontent.filter(el => el.fields.id == modalId)
        console.log(newarray[0].fields.text)
        setstate(newarray[0].fields.text)
      }
     

    }

  }, [modal])

  if (modal) {
    document.body.style.overflow = "hidden";

  }

  if (modal == false) {
    document.body.style.overflow = "auto";
  }

  const transitions = useTransition(modal, null, {
    from: {opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config :{duration:500}
    })
  const up = useTransition(modal, null, {
    from: {opacity: 0, top: '200px' },
    enter: { opacity: 1, top: '0px' },
    leave: { opacity: 0, top: '200px'  },
    config :{duration:500}
  })
  const btn = useTransition(modal, null, {
  from:{ opacity: 0, delay: 500 },
  enter:{ opacity: 1, top: '0px', delay: 700 },
  leave:{opacity: 0, top: '200px' },
  })
  return (
<div>
  {transitions.map(({item,key,props})=>
  item&&<animated.div className={`modalOverlay`} key={key} style={props}>

   
    

        <div className="text_easy" >

        {up.map(({item,key,props})=>
         item&&<animated.div ref={wrapperRef} className={`modalwindow${modalId==10?'-map':''}`} key={key} style={props}>

        
     
            {modalId==10?
            
            <MapData/>

            :
              <div className='modal_text'>

             

                <Markup content={state} />

                <div className='social_modal'>
                 
                
                  <div onClick={() => window.open('https://www.facebook.com/sharer.php?src=sp&u=https%3A%2F%2Fxn--80aesfpebagmfblc0a.xn--p1ai%2F&title=%D0%9A%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81%20COVID%E2%80%9319%20%7C%20%D0%92%D1%81%D0%B5%20%D1%87%D1%82%D0%BE%20%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%82%D1%8C&utm_source=share2', 'facebook', "margin=auto, height=500,width=516")} className='fc'>    <img src={facebook} alt="" /> </div>

                  <div onClick={() => window.open('https://vk.com/share.php?url=https%3A%2F%2Fxn--80aesfpebagmfblc0a.xn--p1ai%2F&title=%D0%9A%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81%20COVID%E2%80%9319%20%7C%20%D0%92%D1%81%D0%B5%20%D1%87%D1%82%D0%BE%20%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%82%D1%8C&utm_source=share2', 'facebook', "height=500,width=516")} className='vk_wrapper soc_wrapper' style={{ display: 'flex' }}>
                    <div className='vk'>   <img src={vk1} alt="" /></div>
                    <div className='vk counter'> <span className='vk_number_block'> 168</span> </div>

                  </div>

                  <div onClick={() => window.open('https://connect.ok.ru/offer?url=https%3A%2F%2Fxn--80aesfpebagmfblc0a.xn--p1ai%2F&title=%D0%9A%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81%20COVID%E2%80%9319%20%7C%20%D0%92%D1%81%D0%B5%20%D1%87%D1%82%D0%BE%20%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%82%D1%8C&utm_source=share2', 'facebook', "height=500,width=516")} className='odnoklasniki_wrapper soc_wrapper' style={{ display: 'flex' }}>
                    <div className='odnoklasniki'>   <img src={odno} alt="" /></div>
                    <div className='odnoklasniki counter'> <span> 10532</span> </div>
                  </div>

                  <div onClick={() => window.open('https://twitter.com/intent/tweet?text=%D0%9A%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81%20COVID%E2%80%9319%20%7C%20%D0%92%D1%81%D0%B5%20%D1%87%D1%82%D0%BE%20%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%82%D1%8C&url=https%3A%2F%2Fxn--80aesfpebagmfblc0a.xn--p1ai%2F&utm_source=share2', 'facebook', "height=500,width=516")} className='twitter_wrapper soc_wrapper' style={{ display: 'flex' }}>
                    <div className='twitter'>   <img src={twitter} alt="" /></div>
                   
                  </div>



                </div>

                {btn.map(({item,key,props})=>
        item&&<animated.div onClick={() => setmodal(false)} className={`mobile clsbtn${modalId==10?'-hide':''}`} key={key} style={props}>
         
        

            <img src={closebtn2} alt="" />

            </animated.div>)}
              </div>

            }

</animated.div>)}

        </div>

        
        {btn.map(({item,key,props})=>
        item&&<animated.div onClick={() => setmodal(false)} className={`desktop clsbtn${modalId==10?'-hide':''}`} key={key} style={props}>
         
        

            <img src={closebtn} alt="" />

            </animated.div>)}
         


        </animated.div>
    )}
      </div>


  
  )
}
