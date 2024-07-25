import { Provider } from 'react-redux';
import  Countries  from './components/Countries'
import { useGetAllCountriesQuery } from "./api/api";
import  store  from './api/store';

export interface Contries{
  numericCode: number
  name: string
  population: number
  flag: string
  region: string
}

export function Countries_bkp(){
  // const [pokemonForSearch, setPokemonForSearch] = useState("");
  const { data , isError, isFetching, refetch } = useGetAllCountriesQuery();

  // pesquisa
  // const changePokemonSearch = (event) => {
  //   event.preventDefault();
  //   setPokemonForSearch(event.target.value);
  // };
  if (isError)
    return (
      <>
        <h1>Error</h1>
        <button onClick={() => refetch()}>Try Again</button>
      </>
    );

  if (isFetching) return <h1>Loading...</h1>;

  
  const CountriesData = () =>{
      return <h1>{data[0].name}</h1>
  };
  
  return 
  (
    <div>
      <CountriesData/>
    </div>
  );

}

function App() {

  return (
    <Provider store={store}>
      <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
        <Countries/>
      </div>
    </Provider>
  )
}

export default App
