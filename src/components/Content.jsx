import React from 'react'
import image from '../assets/images/batman.jpg'

export default function Content(props) {
  return (
    <div>
      <h2 style ={{color: props.color}}> {props.text}</h2>
      <img className='image' src={image}/>
    </div>
    
  );
}
