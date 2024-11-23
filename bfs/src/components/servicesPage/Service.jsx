import React from 'react'
import ServiceCard from './ServiceCard'

import img1 from '../../assets/aboutImg/img2.jpg'
import img2 from '../../assets/serviceImg/img2.jpg'
import img3 from '../../assets/serviceImg/img3.jpg'
import img4 from '../../assets/serviceImg/img4.jpg'
import bgImage from '../../assets/serviceImg/bgImage.jpg'
import Modal from '../utilities/Modal'


const Service = () => {

    const services=[
        {
            img: img1,
            title: 'Bodyguard',
            description: 'Highly trained bodyguards for personal and event security.',
          },
          {
            img: img2,
            title: 'Security Guard',
            description: 'Reliable security guards for residential and commercial properties.',
          },
          {
            img: img3,
            title: 'Cook',
            description: 'Professional cooking services for households and events.',
          },
          {
            img: img4,
            title: 'Housekeeping',
            description: 'Efficient housekeeping staff to keep your space clean and organized.',
          },
          {
            img: img1,
            title: 'Bodyguard',
            description: 'Highly trained bodyguards for personal and event security.',
          },
          {
            img: img2,
            title: 'Security Guard',
            description: 'Reliable security guards for residential and commercial properties.',
          },
          {
            img: img3,
            title: 'Cook',
            description: 'Professional cooking services for households and events.',
          },
          {
            img: img4,
            title: 'Housekeeping',
            description: 'Efficient housekeeping staff to keep your space clean and organized.',
          },
    ]

  return (
    <div className="p-3 md:4 bg-gray-50 max-w-[1200px] mx-auto">
        
        <div className='relative bg-cover bg-center h-52' style={{backgroundImage:`url(${bgImage})`}}>
          <div className='absolute h-full w-full flex flex-col gap-4 md:flex-row bg-black bg-opacity-70 items-center p-3 justify-center md:justify-between'>
              <h2 className="text-3xl font-bold text-white">Our Services</h2>
              <Modal/>
          </div>
        </div>

        
        <div className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-2'>
            {
                services.map((services,index)=>(
                    <ServiceCard
                        key={index}
                        img={services.img}
                        title={services.title}
                        description={services.description}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Service