import React from 'react'
import scaleImage from 'public/scale.jpg'
import Hero from '@/components/Hero'


const ScalePage = () => {
  return (
     <Hero 
       imgData={scaleImage}
       imgAlt='Steel factory'
       title='Scale your app to infinity'  />
  )
}

export default ScalePage