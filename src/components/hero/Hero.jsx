import React from 'react'
import styles from './Hero.module.css'
import Fon from '../../img/fon.png'
import Header from '../header/Header'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="container">
        <Header/>
        <div className={styles.HeroBlock}>
          <h2>Новая коллекция</h2>
          <NavLink className='NavLink'>Смотреть Новинки</NavLink>
        </div>
         
      </div>
    </div>
  )
}

export default Hero