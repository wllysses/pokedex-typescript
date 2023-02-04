import { createContext, ReactNode, useEffect, useState } from "react";
import { fetchPokemons, fetchPokemon } from "../../services/api";

export type PokemonTypes = {
    type: {
        name: string;
        type: string
    }
}

interface IChildren {
    children: ReactNode
}

interface IContextProps {
    pokemonsList: IPokemonsProps[]
    handleLoadMorePokemons: () => void
}

export interface IPokemonsProps {
    name: string
    id: number
    image: string
    sprites?: any
    types: PokemonTypes[]
}

const initialValue = {
    limit: 12,
    pokemonsList: [],
    handleLoadMorePokemons: () => {}
}

export const PokemonsContext = createContext<IContextProps>(initialValue)

export const PokemonsProvider = ({ children }: IChildren) => {

    const [pokemonsList, setPokemonsList] = useState<IPokemonsProps[]>(initialValue.pokemonsList)
    const [limit, setLimit] = useState<number>(initialValue.limit)

    const handleLoadMorePokemons = () => {
        setLimit(limit + 10)
    }

    useEffect(() => {
        const getPokemons = async () => {
           const pokemons = await fetchPokemons(limit)
           const names = pokemons.map((pokemon: IPokemonsProps) => fetchPokemon(pokemon.name))
           const getPokemonsPromise = await Promise.all(names)
           
           setPokemonsList(getPokemonsPromise)
        }

        getPokemons()
    }, [limit])

    return (
        <PokemonsContext.Provider value={{ pokemonsList, handleLoadMorePokemons }}>
            { children }
        </PokemonsContext.Provider>
    )
}