import React from 'react'
import First from '../components/section1/First'
import Trending from '../components/section2/Trending'
import Sale from '../components/section3/Sale'
import News from '../components/section4/News'


const Home = () => {
  return (
    <div>
      <First/>
      <Trending/>
      <Sale/>
   <News/>
    </div>
  )
}

export default Home
