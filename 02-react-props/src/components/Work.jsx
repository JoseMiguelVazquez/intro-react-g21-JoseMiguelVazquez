import React from 'react'
import uno from '../assets/img/uno.jpg'
import dos from '../assets/img/dos.jpg'
import tres from '../assets/img/tres.jpg'
import cuatro from '../assets/img/cuatro.jpg'
import cinco from '../assets/img/cinco.jpg'
import seis from '../assets/img/seis.jpg'

const Work = () => {
  return (
    <section className='galeria'>
      <div className='contenedor'>
        <h2 className='titulo'>Our work</h2>
        <article className='galeria-cont'>
          <img src={uno} alt='' />
          <img src={dos} alt='' />
          <img src={tres} alt='' />
          <img src={cuatro} alt='' />
          <img src={cinco} alt='' />
          <img src={seis} alt='' />
        </article>
      </div>
    </section>
  )
}

export default Work
