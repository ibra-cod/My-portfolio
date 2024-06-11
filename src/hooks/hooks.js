import { useEffect, useState } from "react"

export const useFetch = function (url) {

    const [products, setProducts] = useState([])
    const getProducts  = async function (url,options = {}) {
        const request = await fetch(url,options)
        if (request.ok) {
             const result = request.json()
             setProducts(result)
        }
    }
    useEffect(() => {
        getProducts(url)
    }, [url])

}