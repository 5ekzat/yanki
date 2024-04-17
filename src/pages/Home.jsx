import React from 'react'
import Hero from '../components/hero/Hero'
import Categories from '../components/categories/Categories'

const Home = () => {
  return (
    <div>
      <Hero/>
      <div className="container">
      <Categories/>
      </div>
    </div>
  )
}

export default Home