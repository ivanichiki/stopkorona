import React, { useContext } from 'react'
import '../styles/MapData.scss'
import map from '../svg/map.svg'
import { ImgLoader } from './ImgLoader'
import { MapDataHeader } from './MapDataHeader'
import Scrollbars from 'react-custom-scrollbars'
import { KoronaContext } from '../App'
// import { Transition } from 'react-spring/renderprops'
import closebtn from '../svg/close2.svg'
import { Circle } from './Circle'
import { Transition, useTransition, animated, useSpring } from 'react-spring'

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const MapData = () => {
  
 
  const { detaleData,setmodal,modal } = useContext(KoronaContext)
//   const [props, set] = useSpring(() => ({ x: 0, y: 0}))
//   const bind=useDrag(({down, movement:[x,y]})=>{
//   set({x:x,y:y})
// }
//   )

  if (modal) {
    document.body.style.overflow = "hidden";

  }

  if (modal == false) {
    document.body.style.overflow = "auto";
  }
  const btn = useTransition(modal, null, {
    from:{ opacity: 0, delay: 500 },
    enter:{ opacity: 1, delay: 700 },
    leave:{opacity: 0 },
    })

  


  return (
    <div className='Map_wrapper'>

        {btn.map(({item,key,props})=>
        item&&<animated.div onClick={() => setmodal(false)} className={`clsbtn`} key={key} style={props}>

       

          <img src={closebtn} alt="" />
          </animated.div>)}

      <MapDataHeader />
      <div style={{ padding: '25px 25px 25px 25px' }}>
        <div className='mapContent' >
<div className='img_container_wrapper'>
<TransformWrapper
limitToBounds={false}
>
<TransformComponent>
<div className='img_container'>
             <img src={map} alt="" />


          <Circle left='16.3%' top='56%' infected={detaleData[0].fields.infected} name={detaleData[0].fields.name}/>
          <Circle left='15.3%' top='56%' infected={detaleData[1].fields.infected} name={detaleData[1].fields.name}/>
          <Circle left='15.3%' top='43%' infected={detaleData[2].fields.infected} name={detaleData[2].fields.name}/>
          <Circle left='32.3%' top='50%' infected={detaleData[3].fields.infected} name={detaleData[3].fields.name}/>
          <Circle left='17.3%' top='44%' infected={detaleData[4].fields.infected} name={detaleData[4].fields.name}/>
          <Circle left='8.3%' top='76%' infected={detaleData[5].fields.infected} name={detaleData[5].fields.name}/>
          <Circle left='12%' top='61%' infected={detaleData[6].fields.infected} name={detaleData[6].fields.name}/>
 
          </div>

</TransformComponent>
</TransformWrapper>
     
 </div>
 <div className='up_scrollbar' >

 
          <Scrollbars style={{ width: '100%', height: 350 }}>
            <div> {detaleData.sort((a, b) => b.fields.infected - a.fields.infected).map(el =>

              <div className='scrollbar'>

                <div className='city' > {el.fields.name}</div>

                <div style={{ display: 'flex', paddingTop: '5px' }}>
                  <div className='scroll_infected' > <span className='dot'></span> {el.fields.infected}</div>
                  <div className='scroll_recovered' > <span style={{ backgroundColor: '#03c8a4', marginRight: '6px' }} className='dot'></span>{el.fields.recovered}</div>
                  <div className='scroll_deaths'> <span style={{ backgroundColor: "#cd0712" }} className='dot'></span> {el.fields.deaths}</div>
                </div>
              </div>)}

            </div>

          </Scrollbars>

          </div>
        </div>
      </div>
    </div>
  )
}
