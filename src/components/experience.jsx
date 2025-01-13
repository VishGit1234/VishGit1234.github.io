import React from 'react'
import { useState } from 'react'

const Experience = ({ title, duration, company, description }) => {
  // state that when true shows the full description, if false shows just the top
  const [showFullDescription, setShowFullDescription] = useState(false)

  return (
    <>
      {/* overflow-hidden trick used to force parent container to recognize the float divs */}
      <div className="p-4 backdrop-blur-lg bg-slate-300/10 rounded-lg overflow-hidden lg:text-2xl">
        <div className="overflow-hidden">
          <div className="float-left">{ title }</div>
          <div className="float-right mx-4">{ duration }</div>
          <br/>
          <div class="italic text-base lg:text-lg">{company}</div>
        </div>
        <div className={`${showFullDescription ? "" : "hidden"} text-base lg:text-lg`}>
          <ul className='list-disc list-inside'>
            { description.map((point) => (
              <li>{point}</li>
            )) }
          </ul>
        </div>
        <div className="mx-auto flex justify-center">
          <button onClick={ () => setShowFullDescription(
            (prevState) => !prevState 
          ) } className="text-2xl mr-1 hover:bg-slate-300/10 rounded-full">
            <svg className={`mt-[2px] ${showFullDescription ? "hidden" : ""}`} xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e2e8f0"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            <svg className={`mb-[2px] ${showFullDescription ? "" : "hidden"}`} xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e2e8f0"><path d="M480-545.33 287.33-352.67 240-400l240-240 240 240-47.33 47.33L480-545.33Z"/></svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Experience
