import React, { useEffect } from 'react'
import '../styles/Council.scss'
import { Council_blocks } from './Council_blocks'




export const Council = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
 

  }, [])
  return (
    <div className='council_wrapper'>
     <div className='title'> <h1>Координационный совет по борьбе с COVID-19</h1>
     <p>Председатель Правительства РФ Михаил Мишустин <b>14 марта 2020 года</b> возглавил Координационный совет по борьбе с коронавирусом. Совет в ежедневном режиме вырабатывает решения и координирует действия, направленные на ограничение распространения новой коронавирусной инфекции и её возможных последствий.</p>
     
     </div>
     <div>    <h2>Президиум Координационного совета:</h2></div>
 
     <div className='line_blocks'>

        <Council_blocks name='Мишустин М.В.' position='Председатель Координационного совета, президиума Координационного совета' subPosition='Председатель Правительства Российской Федерации' />
        <Council_blocks name='Белоусов А.Р.' position='Заместитель председателя Координационного совета' subPosition='Первый заместитель Председателя Правительства Российской Федерации'/>
        <Council_blocks name='Голикова Т.А.' position='Заместитель председателя Координационного совета' subPosition='Заместитель Председателя Правительства Российской Федерации'/>
        <Council_blocks name='Чернышенко Д.Н.' position='Ответственный секретарь Координационного совета' subPosition='Заместитель Председателя Правительства Российской Федерации'/>
        <Council_blocks name='Григоренко Д.Ю.'subPosition='Заместитель Министра иностранных дел Российской Федерации — Руководитель Аппарата Правительства Российской Федерации'/>
        <Council_blocks name='Силуанов А.Г.' subPosition='Министр финансов Российской Федерации
'/>
     </div>
     

     <div>    <h2>Члены Координационного совета:</h2></div>

     <div className='line_blocks'>
     <Council_blocks name='Собянин С.С.'subPosition='Мэр Москвы (первый заместитель председателя Координационного совета)'/>
     <Council_blocks name='Бортников А.В.'subPosition='Директор Федеральной службы безопасности Российской Федерации'/>
     <Council_blocks name='Булавин В.И.'subPosition='Руководитель Федеральной таможенной службы'/>
     <Council_blocks name='Булгаков Д.В.'subPosition='Заместитель Министра обороны Российской Федерации'/>
     <Council_blocks name='Воробьев А.Ю.'subPosition='Губернатор Московской области'/>
     <Council_blocks name='Гогин Д.Ю.'subPosition='Руководитель Федерального агентства по государственным резервам'/>
     <Council_blocks name='Данкверт С.А.'subPosition='Руководитель Федеральной службы по ветеринарному и фитосанитарному надзору'/>
     <Council_blocks name='Дитрих Е.И.'subPosition='Министр транспорта Российской Федерации'/>
     <Council_blocks name='Дмитриев К.А.'subPosition='Генеральный директор акционерного общества "Управляющая компания Российского Фонда Прямых Инвестиций"'/>
     <Council_blocks name='Жуков А.Д.'subPosition='Первый заместитель Председателя Государственной Думы Федерального Собрания Российской Федерации'/>
     <Council_blocks name='Журавлев Н.А.'subPosition='Заместитель Председателя Совета Федерации Федерального Собрания Российской Федерации'/>
     <Council_blocks name='Зиничев Е.Н.'subPosition='Министр Российской Федерации по делам гражданской обороны, чрезвычайным ситуациям и ликвидации последствий стихийных бедствий'/>

       </div>
    </div>
  )
}
