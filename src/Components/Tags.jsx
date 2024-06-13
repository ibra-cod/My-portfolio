
export default function Tags({tags}) {

    const renderTags = tags.map((item) => 
        (
            <button type="button" className="bg-indigo-700 border-opacity-80 text-white text-md py-2 px-10 rounded-md text-center hover:bg-opacity-80
            bg-gradient-to-br from-purple-600 to-blue-500 mx-5
            ">{item}</button>
        ))
 
  return 
}


