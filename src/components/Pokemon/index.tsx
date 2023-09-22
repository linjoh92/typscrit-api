import { useState } from "react"
import styles from './pokemon.module.scss'

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
              <div className={styles.pokemon} >
                <h3 className={styles["pokemon__name"]}>{pokemon.name}</h3>
                <div className={styles[`pokemon__image--${pokemon.types[0]}`]}>
                  <img className={styles["pokemon__image--img"]} src={pokemon.image} />
                </div>
                <div className={styles["pokemon__type"]} >
                  {pokemon.types.map((item:string, i:number) => <p  className={styles[`pokemon__type--${item}`]} key={i}>{item} </p>)}
                </div>
            </div>
            }
             <div className={styles["pokemon__actions"]}>
               <button className={styles["pokemon__actions--button"]} onClick={() => getPokemon(API_URL) }>Catch a Pokemon</button>
            </div>
        </div>
    )
}

export default Pokemon