import React from 'react'
import Nav from '../components/Nav'
import Marquee from 'react-fast-marquee'

const About = () => {
  return (
    <div>
        <Nav/>
        <Marquee pauseOnHover={true} className='bg-bluish h-12 -z-0'>
        <div>
          <h1 className='text-[25px] text-white'>
            #CapTech2024- “Discover. Connect. Execute”- Monday 25th November 2024 to Thursday 28th November 2024- ICC Sydney Australia
          </h1>
        </div>
      </Marquee>
      <div className='w-full bg-blue-900 h-52 mt-3 flex justify-center items-center'>
        <h1 className='text-white text-[60px]'>About Us</h1>
      </div>
      <div className="mt-3">
        <p className='mx-60 mt-10 mb-6 font-bold'>Who are we</p>
        <p className='mx-60'>SIPBN Inc is a not for profit incorporated association that facilitates and provides a global platform of capital sources and business opportunities for growing Australian businesses.  This helps them grow in local and overseas markets which in turn, improves trade, innovation and business growth in Australia.</p>
        <p className='mx-60 mt-6 mb-6 font-bold'>How we connect people</p>
        <p className='mx-60 mt-6 mb-6'>For <span className='font-bold'>business</span>: funding opportunities, global networks, pitching events, and advocacy.</p>
        <p className='mx-60 mt-6 mb-6'>For <span className='font-bold'>investors</span>:  business connections and deal flow</p>
        <p className='mx-60 mt-10 mb-6 font-bold'>How we achieve this</p>

        <p className='mx-60 mt-6 mb-6'>We achieve outcomes through our four enabling pillars:</p>
        <ul className='mx-60 mt-6 mb-6'>
          <li className='mx-10 mt-6 mb-6 list-disc'>Active Network Connectivity</li>
          <li className='mx-10 mt-6 mb-6 list-disc'>Cross Border Business Match Making and Trade Assistance</li>
          <li className='mx-10 mt-6 mb-6 list-disc'>Continuous High Value Deal flow</li>
          <li className='mx-10 mt-6 mb-6 list-disc'>Targeted Advocacy to Media and Government</li>
        </ul>

        <p className='mx-60 mt-10 mb-6 font-bold'>What we provide</p>
        <ul className='mx-60 mt-6 mb-6'>
          <li className='mx-10 mt-6 mb-6 list-disc'>Regular business presentations and pitching sessions with Australian businesses and connecting with potential local and overseas investors </li>
          <li className='mx-10 mt-6 mb-6 list-disc'>Dedicated business and project matching sessions</li>
          <li className='mx-10 mt-6 mb-6 list-disc'>Investment and Trade delegations to other countries</li>
          <li className='mx-10 mt-6 mb-6 list-disc'>Networking events </li>
          <li className='mx-10 mt-6 mb-6 list-disc'>An annual CAPTECH conference </li>
        </ul>

        <p className='mx-60 mt-10 mb-6 font-bold'>Membership Benefits</p>
        <ol className='mx-60 mt-6 mb-6'>
          <li className='mx-10 mt-6 mb-6 list-disc'>3 Strategic Introductions </li>
          <li className='mx-10 mt-6 mb-6 list-disc'>20% member discount on #CapTech2023 & India business delegation</li>
          <li className='mx-10 mt-6 mb-6 list-disc'>Attend all our standard events at no cost</li>
          <li className='mx-10 mt-6 mb-6 list-disc'>Promotion of your services, projects and business</li>
          <li className='mx-10 mt-6 mb-6 list-disc'>Access to high quality deal flow & projects  </li>
        </ol>

        <p className='mx-60 mt-10 mb-6 font-bold'>Affiliate Offices</p>
        <ol className='mx-60 mt-6 mb-6'>
          <li className='mx-10 mt-6 mb-6 list-disc'>Sydney, New South Wales </li>
          <li className='mx-10 mt-6 mb-6 list-disc'>Sunshine Coast, Queensland </li>
          <li className='mx-10 mt-6 mb-6 list-disc'>India</li>
          <li className='mx-10 mt-6 mb-6 list-disc'>Hong Kong</li>
          <li className='mx-10 mt-6 mb-6 list-disc'>Middle East</li>
        </ol>

      </div>

      <div className="mx-60 my-10 flex">
          <div className='flex-1 mx-8'>
            <h1 className='text-[40px]'>Our Vision</h1>
            <hr className="border-bluish border-2 w-20 my-8 "></hr>
            <p className='pr-10'>To be the recognised as the premium meeting point for the Sydney community of business leaders, investors, regulators, and government representatives with a focus on international investment and trade.</p>
          </div>
          <div className='flex-1 mx-8'>
            <h1 className='text-[40px]'>Our Mission</h1>
            <hr className="border-bluish border-2 w-20 my-8 "></hr>
            <p className='pr-10'>SIPBN will empower access for members to cross border investment and trade into and out of Australia through our central platform of events, services and connections.</p>
          </div>
      </div>

      <h1 className='mx-64 mt-20 mb-10 font-semibold text-[25px]'>The Four Pillars That Empower SIPBN</h1>
      <hr className="mx-64 border-bluish border-2 w-64 my-8 "></hr>

      <div className='mx-60 flex my-10'>
        <div className="shadow-2xl flex-1 mx-3">
            <p className='text-center font-semibold my-10'>Active Network Connectivity</p>
            <p className='text-center my-10 px-6'>SIPBN membership grants you access via events and strategic introductions to an exclusive network of peers in business leaders, investors, mergers & acquisitions, private equity, family offices, government agencies and peer reviewed service providers.</p>
        </div>
        <div className="flex-1 shadow-2xl mx-3">
            <p className='text-center font-semibold my-10'>Active Network Connectivity</p>
            <p className='text-center  my-10 px-6'>SIPBN links members with businesses and reliable service providers to enable effective investment and trade outcomes. E.g: How to enter a country, the required etiquette, language services and market intelligence.</p>
        </div>
      </div>

      <div className='mx-60 flex my-10'>
        <div className="shadow-2xl flex-1 mx-3">
            <p className='text-center font-semibold my-10'>Targeted Advocacy to Media and Government</p>
            <p className='text-center my-10 px-6'>SIPBN champions initiatives and lobby for policy approaches that foster increased investment and trade opportunities for the betterment of all Australians.</p>
        </div>
        <div className="flex-1 shadow-2xl mx-3 ">
            <p className='text-center font-semibold my-10'>Continuous High Value Deal flow</p>
            <p className='text-center my-10 px-6'>The SIPBN platform provides members with the opportunity to exchange information on high value business, investment and trade deals.</p>
        </div>
        
      </div>

      <div className=' mx-60 my-10 flex'>
        <button className='py-6 px-16 mx-2 bg-bluish rounded-xl text-white'>Advisory Board</button>
        <button className='py-6 px-16 mx-2 bg-bluish rounded-xl text-white'>Executive Board</button>
        <button className='py-6 px-16 mx-2 bg-bluish rounded-xl text-white'>Committees</button>
      </div>

    </div>
  )
}

export default About
