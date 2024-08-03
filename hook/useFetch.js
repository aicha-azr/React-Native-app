import { useState, useEffect } from "react";
import axios from 'axios';


const useFetch = (endpoint, query)=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'x-rapidapi-key': 'dd4694b046msheb73fcce9c5ec21p12aa27jsn2212eb8bb7e4',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query},
      };
     const fetchData = async()=>{
        setIsLoading(true);

        try{
            const response = await axios.request(options);
            setData(response.data.data);
        }catch(error){
            setError(error);
            alert('there is an error')
        } finally{
            setIsLoading(false);
        } 
        }
        useEffect(()=>{
            fetchData();
        }, [])
        const refetch = ()=>{
            setIsLoading(true);
            fetchData();
        }
        return { data, isLoading, error, refetch}
}
export default useFetch;