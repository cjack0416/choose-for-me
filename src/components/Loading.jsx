import { useEffect } from "react"
import { ReactComponent as Loader } from "../assets/Rolling-1s-200px.svg"

export default function Loading({ setIsLoading, loadingTime }) {

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false)
            clearTimeout(timeout)
        }, loadingTime)
    }, [setIsLoading, loadingTime])
    
    return(
        <Loader />
    )
}