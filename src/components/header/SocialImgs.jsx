import React from 'react'

import facebook from '../../svg/download.svg'
import instagram from '../../svg/instagram.svg'
import watsup from '../../svg/watsup.svg'
import icq from '../../svg/icq.svg'
import telega from '../../svg/telega.svg'
import odnokashniki from '../../svg/odnokashniki.svg'
import vk from '../../svg/vk.svg'

export const SocialImgs = () => {
  return (
    <div className='socseti'>
    <a target="_blank" href="https://vk.com/stopcoronavirusrf">
      <img className='social instagram' src={vk} alt="" />
    </a>
    <a target="_blank" href="https://ok.ru/stopcoronavirusrf">
      <img className='social odnokashniki' src={odnokashniki} alt="" />
    </a>

    <a target="_blank" href="https://t.me/stopcoronavirusrussia">
      <img className='social instagram' src={telega} alt="" />
    </a>

    <a target="_blank" href="https://icq.im/stopcoronavirus">
      <img className='social instagram' src={icq} alt="" />
    </a>

    <a target="_blank" href="https://invite.viber.com/?g2=AQBcynAipR6Xe0tEiCKYKFbAufoqkOMwTqUnq%2FPSkSHejIyln14LBwLEZl8xAj9y">
      <img className='social instagram' src={watsup} alt="" />
    </a>

    <a target="_blank" href="https://www.instagram.com/stopcoronavirusrf/">
      <img className='social instagram' src={instagram} alt="" />
    </a>

    <a target="_blank" href="https://www.facebook.com/stopcoronavirusrf/">
      <img className='social facebook' src={facebook} alt="" />
    </a>
  </div>
  )
}
