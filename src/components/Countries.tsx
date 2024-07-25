
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

    console.log(data)

    // return <h1>{data[0].name}</h1>
    return (
        <div className='grid grid-cols-6 gap-6 mt-16 '>
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
    )

}

export default Countries;