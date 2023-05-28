import React from 'react'
import './Card.css'
import image from './image 12.png'
import {FaStar} from "react-icons/fa";

const Card = () => {
  return (
    <div className='Card-Container'>
        <img src={image} alt="Athlete image" />
        <div className='Icon-Container'>
            <p className='Icon-Number'> <FaStar color=
'#FE395C' fontSize='15px'/> 5.0 <span className='Icon-Details'> (6) . USA</span> </p>
        </div>
        <p className='Icon-Text'>Life lessons with Katie Zaferes</p>
        <p className='Price'><span className='Price-tag'>From $136</span> / person</p>
    </div>
  )
}

export default Card
