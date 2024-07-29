
export interface CountryInfo{
    name: string
    population: number
    flag: string
    region: string
}

const formatNumber = (population:number) => {
  return population.toLocaleString('pt-BR');
}

export function CountryFlag(props: CountryInfo) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:cursor-pointer" >
        <img  className="h-40 w-70 border-2 opacity-85" alt=""  src={props.flag}/>

        <div className='w-full pt-1 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0'>
            <strong className='font-bold text-slate-800 block'>{props.name}</strong>
            <span className='text-slate-700 text-sm block mt-1'>{formatNumber(props.population)} habitantes - {props.region.toUpperCase()}</span>
        </div>
    </div>
  );
}