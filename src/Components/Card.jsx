/* eslint-disable react/prop-types */

import Tags from "./Tags"


function Card({projects}) {

  const projectRender = projects.map((project) => (

    <div key={project.id}  className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10">
    <div className="md:flex mt-10">
      <div className="md:shrink-0">
        <img className="h-full w-full object-cover md:h-full md:w-32 lg:w-48" src={project.image} alt=""/>
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{project.name}</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
        <p className="mt-2 text-slate-500">{project.description}</p>
        <div>
        <Tags tags={project.tags} />
      </div>
      </div>
    
    </div>
  </div>
  ))

  
  return <div className="w-full border-y-indigo-600 grid xl:grid-cols-2 lg:grid-cols-2 gap-4 p-8 md:grid-cols-2 sm:grid-cols-1 ">{projectRender}</div>
 
}

export default Card
