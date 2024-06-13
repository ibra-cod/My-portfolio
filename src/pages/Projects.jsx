/* eslint-disable react/prop-types */
import Card from '../Components/Card.jsx'
import { useFetch } from '../hooks/hooks.js'



export default function Projects() {

    const {
          projects,
          waitingProducts: wait, 
          error : err} = useFetch('./src/project.json')
  return (
            <div className="w-full  ">
                    <Card projects={projects} />
            </div>
  )
}

