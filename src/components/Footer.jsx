import React from 'react'
import '../styles/Footer.scss'
import facebook from '../svg/facebook.png'
import vk1 from '../svg/vk1.png'
import odno from '../svg/odno.png'
import mz from '../svg/mz.svg'
import rpn from '../svg/rpn.svg'

export const Footer = () => {
  return (
    <div className='Footer_wrapper'>
      <div className='Footer'>
        <div className='Footer_up'>
          <div className='soc'>
            <div> <h1>Поделитесь информацией в социальных сетях</h1></div>
           <div><p>О коронавирусе и методах защиты от него должно узнать как можно больше людей.</p></div>
          
            <div className='social_modal'>
              <div onClick={() => window.open('https://vk.com/share.php?url=https%3A%2F%2Fxn--80aesfpebagmfblc0a.xn--p1ai%2F&title=%D0%9A%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81%20COVID%E2%80%9319%20%7C%20%D0%92%D1%81%D0%B5%20%D1%87%D1%82%D0%BE%20%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%82%D1%8C&utm_source=share2', 'facebook', "height=500,width=516")} className='vk_wrapper soc_wrapper' style={{ display: 'flex' }}>
                <div className='vk'>   <img src={vk1} alt="" /></div>
                <div className='vk counter'> <span className='vk_number_block'> 168</span> </div>

              </div>

              <div onClick={() => window.open('https://connect.ok.ru/offer?url=https%3A%2F%2Fxn--80aesfpebagmfblc0a.xn--p1ai%2F&title=%D0%9A%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81%20COVID%E2%80%9319%20%7C%20%D0%92%D1%81%D0%B5%20%D1%87%D1%82%D0%BE%20%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%82%D1%8C&utm_source=share2', 'facebook', "height=500,width=516")} className='odnoklasniki_wrapper soc_wrapper' style={{ display: 'flex' }}>
                <div className='odnoklasniki'>   <img src={odno} alt="" /></div>
                <div className='odnoklasniki counter'> <span> 10532</span> </div>
              </div>


              <div onClick={() => window.open('https://www.facebook.com/sharer.php?src=sp&u=https%3A%2F%2Fxn--80aesfpebagmfblc0a.xn--p1ai%2F&title=%D0%9A%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81%20COVID%E2%80%9319%20%7C%20%D0%92%D1%81%D0%B5%20%D1%87%D1%82%D0%BE%20%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%82%D1%8C&utm_source=share2', 'facebook', "margin=auto, height=500,width=516")} className='fc'>    <img src={facebook} alt="" />
              </div>

            </div>
          </div>

          <div className='center'>
            <img src={mz} alt="" />
            <img src={rpn} alt="" />
          </div>
          <div className='end'>
          <div className='hotline'>Единая горячая линия:</div>
          <div className='number'> <span> <a href="tel:88002000112">8-800-2000-112</a></span></div>
          </div>
       
        </div>
        <div className='Footer_down'></div>
        <div className='footertext'>© 2020, Стопкоронавирус.рф — Официальный интернет-ресурс для информирования населения по вопросам коронавируса (COVID-19).</div>
      </div>
    
    </div>
  )
}
