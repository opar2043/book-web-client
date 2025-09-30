import React from 'react'
import Banner from '../Shared/Banner'
import Books from '../card/Books'
import Simple from '../Faq/Simple'
import Faq from '../Faq/Faq'
import Policy from '../Faq/Policy'

const Hero = () => {
  return (
    <div>
        <Banner></Banner>
        <Books></Books>
        <Simple></Simple>
        <Faq></Faq>
        <Policy></Policy>
    </div>
  )
}

export default Hero