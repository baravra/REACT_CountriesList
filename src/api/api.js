import { createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v2/" }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => `all`,
      transformResponse: (response) =>
        response.map(({ numericCode, name, population, flag, region }) => {
          return {numericCode, name, population, flag, region };
        }),
      transformErrorResponse: (response) => response.status
    }),
  }),
});


export const {
  useGetAllCountriesQuery,
  
} = countriesApi;