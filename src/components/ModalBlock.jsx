import React from 'react'
import { useContext } from "react";
import { KoronaContext } from "../App";
import '../styles/ModalBlock.scss'

export const ModalBlock = (props) => {

  const { SolutionsRef, modal, setmodal, setmodalId } = useContext(KoronaContext)

  return (

    <div  onClick={() => {{props.id&& setmodal(true); setmodalId(props.id) } }} className='modal'>
      <div className='insidemodal'>
        <img style={{width:props.width}} src={props.props} alt="" />
      </div>
      <div style={{fontSize:props.size}} className='insidemodal text'>
        {props.text}
      </div>
    </div>

  )

}