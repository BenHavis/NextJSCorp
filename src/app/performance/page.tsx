import React from 'react'
import performanceImg from 'public/performance.jpg'
import Hero from '@/components/Hero'


const PerformancePage = () => {
  return (
     <Hero 
       imgData={performanceImg}
       imgAlt='welding'
       title='We serve high performance applications'  />
  )
}

export default PerformancePage