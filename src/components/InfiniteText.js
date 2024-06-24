import React from 'react'
import Marquee from 'react-fast-marquee'
function InfiniteText() {
  return (
    <Marquee pauseOnHover={true} className='bg-bluish h-12 -z-0'>
        <div>
          <h1 className='text-[25px] text-white'>
            #CapTech2024- “Discover. Connect. Execute”- Monday 25th November 2024 to Thursday 28th November 2024- ICC Sydney Australia
          </h1>
        </div>
      </Marquee>
  )
}
export default InfiniteText
