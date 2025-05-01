import Image from 'next/image';
import { PokemonsReponse, SimplePokemon } from "@/app/pokemons";
import { PokemonsItem } from '@/app/components/Pokemonitem';


const getData = async(limit = 10, offset = 0):Promise<SimplePokemon[]> => {
   const data:PokemonsReponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
   .then((response) => response.json())
   const response = data.results.map( item => ({
       id: item.url.split('/').at(-2)!,
       name: item.name
   }) )
   return response;
}


export default async function PokemonPage () {
   const data = await getData();
   console.log(data);
   return (
     <div>
       <h1>Pokemon Page V1</h1>
       {
        //JSON.stringify(data)
           data.map(item=><PokemonsItem key={item.id}
           {...item}
           />)
       }
     </div>
   );
 };
