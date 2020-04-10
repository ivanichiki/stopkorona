import React from 'react'
import snimok from '../../svg/snimok.jpg'
import load from '../../svg/load.svg'

export const Otchet = () => {
  return (
    <>
        <div>
            <img src={snimok} alt="" />
          </div>

          <div className='right_block' >
            <a target="_blank" href="https://стопкоронавирус.рф/ai/html/3/attach/2020-04-03_coronavirus_government_report_1_.pdf" download>

              <span className='text'>   Отчет о текущей ситуации с коронавирусом в РФ: статистика, данные из регионов, меры Правительства РФ.</span>

              <span className='size'>PDF 2.7 MB</span>   <span>Скачать</span>
              <img src={load} alt="" />

            </a>
            </div>
       
    </>
  )
}
