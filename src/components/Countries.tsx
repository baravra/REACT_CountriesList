
import { Key } from "react";
import { useGetAllCountriesQuery } from "../api/api";
import { CountryFlag } from "./CountryFlag";

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
        <h1 className='font-bold text-slate-800 block text-2xl'>Países: {data.length}</h1>
        <div className='grid grid-cols-5 gap-6 mt-16 '>
            {data.map((country: { numericCode: Key | number; name: string; population: number; flag: string; region: string; }) => {
              return(
                <CountryFlag 
                  key={country.numericCode} //diferenciar os jogos (colocar o id unico)
                  name={country.name} 
                  population ={country.population} 
                  flag={country.flag} 
                  region={country.region} 
                />
              )
            })}
        </div>
      </div>
    )

}

export default Countries;