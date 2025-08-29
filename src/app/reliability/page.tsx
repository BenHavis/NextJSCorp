import React from 'react'
import reliabilityImage from 'public/reliability.jpg'
import Hero from '@/components/Hero'


const ReliabilityPage = () => {
  return (
     <Hero 
       imgData={reliabilityImage}
       imgAlt='Reliability'
       title='Super high reliability hosting'  />
  )
}

export default ReliabilityPage