import React from 'react'

import { BiTimeFive } from "react-icons/bi"

import logo1 from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'
import logo5 from '../../Assets/logo5.png'
import logo6 from '../../Assets/logo6.png'
import logo7 from '../../Assets/logo7.png'
import logo8 from '../../Assets/logo8.png'


const Data = [
  {
    id:1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque iusto sed delectus, ',
    company:'Novac Linus Co.'
  },
  {
    id:2,
    image: logo2,
    title: 'UI Designer',
    time: '14Hr',
    location: 'Manchester',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque iusto sed delectus, ',
    company:'Liquid Accessments'
  },
  {
    id:3,
    image: logo3,
    title: 'Software Eng',
    time: '10Hr',
    location: 'Austria',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque iusto sed delectus, ',
    company:'Web Tech Agency'
  },
  {
    id:4,
    image: logo4,
    title: 'Product Designer',
    time: 'Now',
    location: 'Germany',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. , ',
    company:'Latent View'
  },
  {
    id:5,
    image: logo5,
    title: 'Quality Assurence',
    time: '17Hr',
    location: 'Brazil',
    desc:'Lorem ipsum dolor sit amet consectetur, ',
    company:'Newcastle'
  },
  {
    id:6,
    image: logo6,
    title: 'Researcher',
    time: '5Hr',
    location: 'Itely',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque iusto sed delectus, ',
    company:'Nin Co.'
  },
  {
    id:7,
    image: logo7,
    title: 'Lead Developer',
    time: '14Hr',
    location: 'Austria',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque iusto sed delectus, ',
    company:'EA Games'
  },
  {
    id:8,
    image: logo8,
    title: 'Data Engineer',
    time: '10Hr',
    location: 'Swedan',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque iusto sed delectus, ',
    company:'Data Latics Co.'
  }
]

function Jobs() {
  return (
    <div>
      
      <div className="jobContainer flex gap-10 justify-center flex-wrap item-center py-10">
        
      {
        Data.map(({id,image,title,time,location,desc,company}) => {
        return (
          <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded
              [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">


              <span className='flex justify-between item-center gap-4'>
                <h1 className='text-[16px] font-semibold text-textColor
                group-hover:text-white'>{title}</h1>

                <span className='flex items-center text-[#ccc] gap-1'>
                  <BiTimeFive />{time}
                </span>
              </span>

              <h6 className='text-[#ccc]'>{location}</h6>

              <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px]
                group-hover:text-white'>
                {desc} 
               
              
              </p>

              <div className='company flex item-center gap-2'>
                <img src={image} alt="Company Logo" className='w-[10%] m-2' />
                <span className='text-[14px] block group-hover:text-white m-2'>{company}</span>
              </div>

              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px]
              font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                Apply Now
              </button>

          </div>
        )})
      }
      </div>
    
    </div>
  )
}

export default Jobs
