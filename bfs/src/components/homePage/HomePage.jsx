import React from 'react'
import Carousal from './Carousal'
import Stats from './Stats'
import FeaturedServices from './FeaturedServices'
import FAQ from './FAQ'
import WelcomeSection from './WecomeSection'

const HomePage = () => {
  return (
    <div>
      <WelcomeSection/>
      <Carousal/>
      <Stats />
      <FeaturedServices />
      <FAQ />
    </div>
  )
}

export default HomePage