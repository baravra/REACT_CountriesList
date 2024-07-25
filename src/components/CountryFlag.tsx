interface CountryInfo{
    name: string
    population: number
    flag: string
    region: string
}

export function CountryFlag(props: CountryInfo) {
  return (
    <div className="relative rounded-lg overflow-hidden  bg-blue-500" >
        <img  className="h-4 w-4" alt=""  src={props.flag}/>

        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>{props.name}</strong>
            <span className='text-zinc-300 text-sm block mt-1'>{props.population} pessoas - {props.region}</span>
        </div>
    </div>
  );
}