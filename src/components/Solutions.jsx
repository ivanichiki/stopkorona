import React, { useState } from 'react'
import '../styles/Solutions.scss'
import { useContext } from 'react'
import { KoronaContext } from '../App'
import table from '../svg/Layer_8.svg'
import call from '../svg/call.svg'
import many from '../svg/many.svg'
import fly from '../svg/fly.svg'
import zig from '../svg/zig.svg'
import world from '../svg/world.svg'
import skorb from '../svg/skorb.svg'
import line from '../svg/line.svg'
import { useEffect } from 'react'
import { ModalBlock } from './ModalBlock'





export const Solutions = () => {

  const [loaded, setloaded] = useState(false)
  const [counter, setcounter] = useState(0)
  
  const { SolutionsRef, modal, setmodal, setmodalId } = useContext(KoronaContext)

  function onLoad() {
    setcounter(counter=>counter+1)
   console.log(counter)
    if (counter==7) {
    setloaded(true);
    }
  }

  return (
    <div ref={SolutionsRef} className='solution_wrapper'>
      <div className='solutions_title'>

        Какие меры принимаются для борьбы с коронавирусом
     </div>
      <div className='solutions_subtitle'>
        Необходимые ограничения и меры поддержки направлены на то, чтобы предотвратить распространение инфекции, оказать помощь тем, кто нуждается в наблюдении и лечении, а также снизить негативные последствия для бизнеса.
      </div>
      <div onLoad={onLoad} className='modal_container'>
      
        <ModalBlock loaded={loaded} props={table} id={1} text='Антикризисный план' />
        <ModalBlock loaded={loaded} props={call}   id={2} text='Нерабочие дни, которые нужно провести дома'/>
        <ModalBlock loaded={loaded}props={many}   id={3} text='Ответственность за нарушение режима'/>
        <ModalBlock loaded={loaded} props={fly}   id={4} text='Ограничение полетов'/>
    
        <ModalBlock loaded={loaded} props={zig} id={5} text='Пересичение государственных границ' />
        <ModalBlock loaded={loaded} props={world}   id={6} text='Эпидемическая ситуация в мире'/>
        <ModalBlock loaded={loaded} props={skorb}   id={7} text='Режим повышенной готовности'/>
        <ModalBlock loaded={loaded} props={line}   id={8} text='Дополнительные меры для обеспечения устойчевого экономического развития'/>
      </div>
    </div>
  )
}
