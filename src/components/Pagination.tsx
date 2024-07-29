import { Box, Pagination } from '@mui/material';
import { CountryFlag } from './CountryFlag';
import { useState } from 'react';
import { Contries } from '../App';

const paginate = (array: any, pageSize: number) => {
    const pageCount = Math.ceil(array.length / pageSize);
    return Array.from({ length: pageCount }, (_, index) =>
      array.slice(index * pageSize, (index + 1) * pageSize)
    );
};

const CountriesList = (countriesParam: any) => {

    const [countries] = useState(countriesParam.countriesParam);
    const [currentPage, setCurrentPage] = useState(1);
    
    const pageSize = 50;
    const paginatedFlags = paginate(countries, pageSize);
    const currentFlags = paginatedFlags[currentPage - 1];


    return(
        <Box>
            
        {paginatedFlags.length > 1 && (
            <Box display="flex" justifyContent="center">

                <Pagination
                count={paginatedFlags.length}
                page={currentPage}
                onChange={(_, newPage) => setCurrentPage(newPage)}
                />
            </Box>
        )}
        <div className='grid grid-cols-5 gap-6 mt-16 '>
            {currentFlags && currentFlags.map((country:Contries ) => (
                    <CountryFlag 
                    key={country.numericCode} //diferenciar os jogos (colocar o id unico)
                    name={country.name} 
                    population ={country.population} 
                    flag={country.flag} 
                    region={country.region} 
                    />
                
            ))}

        </div>
        </Box>
    )
}

export default CountriesList;