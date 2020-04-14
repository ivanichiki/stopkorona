import React from 'react'
import './Symptoms.scss'
import pdf from '../../svg/pdf.svg'
import load from '../../svg/load.svg'
import symp1 from '../../svg/symp1.svg'
import symp2 from '../../svg/symp2.svg'
import symp3 from '../../svg/symp3.svg'
import symp4 from '../../svg/symp9.svg'
import symp5 from '../../svg/symp11.svg'
import symp6 from '../../svg/symp5.svg'
import symp7 from '../../svg/symp10.svg'
import symp8 from '../../svg/symp6.svg'
import symp9 from '../../svg/symp7.svg'
import symp10 from '../../svg/symp8.svg'

const Labels = (props) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><img width='180px' src={props.src} alt="" /></div>
      <div className='label'>{props.name}</div>
    </div>
  )
}


export const Symptoms = (props) => {
  return (
    <div ref={props.Ref} className='Symptoms'>
      <div className='title'>
        <div className='left'>
          <h2>Симптомы коронавируса <span>COVID—19</span></h2>
          <p>В подавляющем большинстве случаев эти симптомы связаны не с коронавирусом, а с обычной ОРВИ.</p>

        </div>
        <div className='right'>
          <div style={{ display: 'flex' }}>
            <div><img src={pdf} alt="" /></div>
            <a target='blank' href="https://static-1.rosminzdrav.ru/system/attachments/attaches/000/049/726/original/_A3_koronavirus_for_print.pdf?1584091816">
              <div>
                <div className='name'>Памятка о коронавирусе</div>
                <div className='size'>PDF • 143 Kb <span>Скачать <img src={load} alt="" /></span>
                </div>

              </div>

            </a>

          </div>

          <div className='btn'>Все памятки</div>
        </div>

      </div>

      <div><h3>Основные симптомы коронавируса</h3></div>
      <div className='label_wrap'>

        <Labels src={symp1} name='высокая температура тела' />
        <Labels src={symp2} name='кашель (сухой или с небольшим количеством мокроты)' />
        <Labels src={symp3} name='одышка' />
        <Labels src={symp4} name='боль в мышцах' />
        <Labels src={symp5} name='утомляемость' />
      </div>


      <div><h3>Редкие симптомы коронавируса</h3></div>
      <div className='label_wrap'>

        <Labels src={symp6} name='головная боль' />
        <Labels src={symp7} name='заложенность грудной клетки' />
        <Labels src={symp8} name='кровохарканье' />
        <Labels src={symp9} name='диарея' />
        <Labels src={symp10} name='тошнота, рвота' />
      </div>
      <div className='up_line'></div>
      <div className='text_under_line'>Симптомы могут проявиться в течение <span>14 дней</span> после контакта с инфекционным больным. Симптомы во многом сходны со многими респираторными заболеваниями, часто имитируют обычную простуду, могут походить на грипп.</div>
    </div>
  )
}
