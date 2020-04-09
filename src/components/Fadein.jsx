import React, { useEffect, useState } from 'react'

export const Fadein = ({props}) => {
  const [toggle, settoggle] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
    settoggle(true)

  }, [])

  return (
    <div className={`Fadein_wrapper ${toggle && 'show'}`}>
      {props}
    </div>
  )
}
