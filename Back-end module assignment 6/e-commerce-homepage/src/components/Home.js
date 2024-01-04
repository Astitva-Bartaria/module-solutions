import React from 'react'
import Header from './Header'
import Homecover from './Homecover'
import Slider from './Slider'
import Footer from './Footer'

// this component includes all other component
export default function Home() {
  return (
    <>
    <Header/>
    <Homecover/>
    <Slider/>
    <Footer/>
    </>
  )
}
