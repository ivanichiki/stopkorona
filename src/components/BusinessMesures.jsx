import React, { useState } from 'react'
import { ModalBlock } from './ModalBlock'
import measure1 from '../svg/measure1.svg'
import measure2 from '../svg/moratorii_na_proverki_biznesa.svg'
import measure3 from '../svg/kred_kanikuli.svg'
import measure4 from '../svg/krediti_na_zarplatu.svg'
import measure5 from '../svg/snixhenie_strah_vznosov_2_.svg'
import measure6 from '../svg/nalogovie_kanikuli.svg'
import measure7 from '../svg/otsrochka_arend_platexhei.svg'
import measure8 from '../svg/pomosch_eksporteram.svg'
import load from '../svg/load.svg'

import '../styles/Business.scss'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
export const BusinessMesures = () => {

const [loaded, setloaded] = useState(false)
const [counter, setcounter] = useState(0)
const [state, setstate] = useState([{id:0, size:'21px', props:measure1, text:'Мораторий на банкротство'},
{id:1, size:'21px', props:measure2, text:'Мораторий на проверки бизнеса'},
{id:2, size:'21px', props:measure3, text:'Кредитные каникулы'},
{id:3, size:'21px', props:measure4, text:'Беспроцентные кредиты на зарплату'},
{id:4, size:'21px', props:measure5, text:'Снижение и отсрочка страховых взносов'},
{id:5, size:'21px', props:measure6, text:'Налоговые каникулы'},
{id:6, size:'21px', width:true, props:measure7, text:'Отсрочка арендных платежей'},
{id:7, size:'21px', props:measure8, text:'Помощь экспертам'},

])
function onLoad() {
  setcounter(counter=>counter+1)

  if (counter==8) {
  setloaded(true);
  }
}
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  return (
    <div onLoad={onLoad} className={`Business_wrapper`}>
      <h1>Меры поддержки малых и средних предприятий</h1>
      <div  className='modal_container'>
        {state.map(el=>
          
          <>
    
          <NavLink  to={`/what-to-do/business/topics/${el.id}`}> 
        
        <ModalBlock loaded={loaded} size={el.size} width={el.width} props={el.props} text={el.text} />
        
        </NavLink>
        </>
        )}
      </div >

      <div className='link'>
        <img src={load} alt="" />
        <a target='blank' href="https://стопкоронавирус.рф/files/support_measures.pdf">Все меры поддержки МСП – в списке Минэкономразвития России</a></div>
    </div>
  )
}
