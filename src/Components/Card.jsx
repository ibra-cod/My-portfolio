/* eslint-disable react/prop-types */


function Card({projects}) {

  const projectRender = projects.map((project) => (

    <div key={project.id}  className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="md:shrink-0">
        <img className="h-48 w-full object-cover md:h-full md:w-28" src="/img/building.jpg" alt="Modern building architecture"/>
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{project.name}</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
        <p className="mt-2 text-slate-500">{project.description}</p>
      </div>
    </div>
  </div>
  ))

  
  return <div className="w-full border-y-indigo-600 grid xl:grid-cols-2 lg:grid-cols-2 gap-4 p-8 md:grid-cols-2 sm:grid-cols-1 ">{projectRender}</div>
 
}

export default Card
