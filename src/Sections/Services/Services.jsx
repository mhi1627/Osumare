import React from 'react'
import ServicesCard from '../../Components/ServicesCard/ServicesCard'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import Button from '../../Components/Button/Button'
import {ChartColumnBig,
  MousePointer2,
  ChartNetwork,
  Clapperboard,
  Brain,
  BookText,
  FileCode2,
  Waypoints
} from 'lucide-react'
export default function Services() {

  const ServiceData = [
    {heading:'Automotive SEO',
     description:'Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today',
     icon : ChartColumnBig
    },
    {heading:'PPC Precision',
     description:'Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.',
      icon : MousePointer2
    },
    {heading:'Social Acceleration',
     description:`Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.`,
     icon : Waypoints
    },
    {heading:'Content Excellence',
     description:'Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.',
     icon : BookText
    },
    {heading:'Web Design',
     description:'Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.',
     icon : FileCode2
    },
    {heading:'Data-Driven Insights',
     description:'Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.',
     icon : ChartNetwork
    },
    {heading:'End-to-End Solutions',
     description:'From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.',
      icon : Brain
    },
    {heading:'Video marketing',
     description:'Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.',
     icon : Clapperboard
    },
  ]
  return (
<div className='services w-full bg-[#F9F9F9] flex flex-col items-center justify-evenly py-4 sm:mt-25  mt-7 sm:pb-20 pb-10'>
    <SectionHeader header={`Our Service Offerings`} subHeader={` Strategies that Drive Property Market Excellence`} ></SectionHeader>
<div className='flex p-5 gap-5 flex-wrap items-center justify-between sm:items-center sm:justify-evenly sm:mt-5'>
     {ServiceData.map(service=>(
      <ServicesCard heading={service.heading} description={service.description} icon = {service.icon}></ServicesCard>
     ))}
    </div>
    <Button style={`bg-[#0078FF] sm:h-8 h-12 sm:h-12 lg:py-3 s:w-1/2 sm:w-1/4 text-white hover:bg-transparent sm:mt-4 w-[90%] `}>Get Started</Button>
</div>
  )
}         

