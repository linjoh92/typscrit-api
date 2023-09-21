import { useState } from "react"

type Pokemon = {
    name: string,
    image: string,
    types: string[]
}


const Pokemon = () => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null)

    const API_URL:string = "https://pokeapi.co/api/v2/";

    const getPokemon = async (url:string):Promise<void> => {
        const id:number = Math.floor(Math.random() * 150);

        const response:any = await fetch(url + "pokemon/" + id)
        const data:any = await response.json()

        const name:string = data.name;
        const image:string = data.sprites.front_default;
        const types:string[] = data.types.map((item:any) => item.type.name)

        setPokemon({name, image, types});
    }
    
    return (
        <div>
            {pokemon && 
              <div>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.image} />
                {pokemon.types.map((item:string, i:number) => <p key={i}> Types : {item} </p>)}
            </div>
            }

            <button onClick={() => getPokemon(API_URL) }>Catch a Pokemon</button>
        </div>
    )
}

export default Pokemon