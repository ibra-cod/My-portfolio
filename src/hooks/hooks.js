import { useEffect, useState } from "react"

export const useFetch = function (url) {

    const [projects, setProjects] = useState([])
    const [waitingProjects, setWaitingProjects] = useState(true)
    const [error, setError] = useState('')


    
    const getProjects  = async function (url,options = {}) {
        const request = await fetch(url,options)
        
        if (request.ok) {
             const result = request.json()
            return result
        }
    }

    useEffect(() => {
        getProjects(url).then((result) => 
            setProjects(result)
    ).catch((err) => {
        setError(err)
    }).finally(() => setWaitingProjects(!waitingProjects))
    }, [url])

    return {
        projects,
        error,
        waitingProjects
    }

}

