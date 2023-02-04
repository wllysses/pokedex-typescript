import { useContext } from "react"
import { IPokemonsProps, PokemonsContext } from "../../contexts/PokemonsContext"
import { Card } from "../Card"
import './styles.scss'

export const Pokemons = () => {

    const { pokemonsList } = useContext(PokemonsContext)

    return (
        <div className="container">
            <div className="card-list">
                {
                    pokemonsList.length === 0 && <span>Carregando...</span>
                }
                {
                    pokemonsList.map((pokemon: IPokemonsProps) => {
                        return (
                            <Card 
                                key={pokemon.id}
                                id={pokemon.id}
                                name={pokemon.name}
                                image={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
                                types={pokemon.types}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}