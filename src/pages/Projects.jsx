/* eslint-disable react/prop-types */
import Card from '../Components/Card.jsx'
import {useFetch} from '../hooks/hooks.js'

const projects = [ {
        "id" : 1,
        "name" : "TODOLIST APP",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum atque veniam deleniti. A, nam! Recusandae ipsa, magnam dolores cum assumenda dolorum, enim maiores est animi a deserunt repudiandae eligendi numquam?",
        "tags" : [
                "Javascrpit", "PHP", "MYSQL", "HTML" ,  "CSS"
        ],
        "image" : "src/images/ales-nesetril-Im7lZjxeLhg-unsplash 1.png"
      },
      
      {
        "id" : 2,
        "name" : "TODOLIST APP",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum atque veniam deleniti. A, nam! Recusandae ipsa, magnam dolores cum assumenda dolorum, enim maiores est animi a deserunt repudiandae eligendi numquam?",
        "tags" : [
                "Javascrpit", "PHP", "MYSQL", "HTML" ,  "CSS"
        ],
        "image" : "src/images/ales-nesetril-Im7lZjxeLhg-unsplash 1.png"
      },
      
      {
        "id" : 3,
        "name" : "TODOLIST APP",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum atque veniam deleniti. A, nam! Recusandae ipsa, magnam dolores cum assumenda dolorum, enim maiores est animi a deserunt repudiandae eligendi numquam?",
        "tags" : [
                "Javascrpit", "PHP", "MYSQL", "HTML" ,  "CSS"
        ],
        "image" : "src/images/ales-nesetril-Im7lZjxeLhg-unsplash 1.png"
      },
      
      {
        "id" : 4,
        "name" : "TODOLIST APP",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum atque veniam deleniti. A, nam! Recusandae ipsa, magnam dolores cum assumenda dolorum, enim maiores est animi a deserunt repudiandae eligendi numquam?",
        "tags" : [
                "Javascrpit", "PHP", "MYSQL", "HTML" ,  "CSS"
        ],
        "image" : "src/images/ales-nesetril-Im7lZjxeLhg-unsplash 1.png"
      }
      ,
      {
        "id" : 5,
        "name" : "TODOLIST APP",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum atque veniam deleniti. A, nam! Recusandae ipsa, magnam dolores cum assumenda dolorum, enim maiores est animi a deserunt repudiandae eligendi numquam?",
        "tags" : [
                "Javascrpit", "PHP", "MYSQL", "HTML" ,  "CSS"
        ],
        "image" : "src/images/ales-nesetril-Im7lZjxeLhg-unsplash 1.png"
      }
      
      ,
      {
        "id" : 6,
        "name" : "TODOLIST APP",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum atque veniam deleniti. A, nam! Recusandae ipsa, magnam dolores cum assumenda dolorum, enim maiores est animi a deserunt repudiandae eligendi numquam?",
        "tags" : [
                "Javascrpit", "PHP", "MYSQL", "HTML" ,  "CSS"
        ],
        "image" : "src/images/ales-nesetril-Im7lZjxeLhg-unsplash 1.png"
      }
      
      ]



export default function Projects() {

        useFetch('../project.json')

  return (
    <section className="section max-w-screen-2xl mx-auto flex justify-center items-center mt-16">
            <div className="w-full  ">
                    <Card projects={projects}/>
            </div>
        </section>
  )
}

