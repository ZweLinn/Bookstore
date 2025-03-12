import { useEffect, useState } from "react";
import axios from "axios";


export default function useFetch(url){

    const [data , setData] = useState([])
    const [load , setLoad] = useState(true);
    const [error, setError ] = useState(false);

    // console.log("url" , url , "data" , data)
    async function loadUrl() {
        try{

           await axios.get(url)
            .then(res=>{setData(res.data.data)})
            setLoad(false);

        }
        catch(e){
            setError(true);
            setLoad(false);
            setData([])
        }

    }

    useEffect(()=>{

        loadUrl(url)
        setError(false);

    }, [])
    return {data , load , error}
}