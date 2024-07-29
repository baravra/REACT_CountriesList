
import { Key } from "react";
import { useGetAllCountriesQuery } from "../api/api";
import { CountryFlag } from "./CountryFlag";
import CountriesList from "./Pagination";

const Countries = () => {
    const { data , isError, isFetching, refetch } = useGetAllCountriesQuery();

    if (isError)
        return (
          <>
            <h1>Error</h1>
            <button onClick={() => refetch()}>Try Again</button>
          </>
        );
    
    if (isFetching) return <h1>Loading...</h1>;

    // return <h1>{data[0].name}</h1>
    return (
      <div>
        <div className='flex flex-col items-center my-2'>
          <h1 className='font-bold text-slate-800 block text-2xl pb-4'>Países: {data.length}</h1>     
          
          <CountriesList 
          key={null}
          countriesParam={data}/>

        </div>
      </div>
    )

}

export default Countries;