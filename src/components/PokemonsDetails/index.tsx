import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonTypes } from '../../contexts/PokemonsContext'
import { fetchPokemon } from '../../services/api'
import { PokemonType } from '../Card'
import './styles.scss'

interface PokeMoves {
    move: {
        move: string
        name: string
    }
}

interface PokeAbilities {
    ability: {
        ability: string
        name: string
    }
}

interface IPokeProps {
    id: number | null
    name: string
    image: string
    weight: number | null
    height: number | null
    types: PokemonTypes[]
    moves: PokeMoves[]
    abilities: PokeAbilities[]
}

const initialValue = {
    id: null,
    name: '',
    image: '',
    weight: null,
    height: null,
    types: [],
    moves: [],
    abilities: []
}

export const PokemonsDetails = () => {

    const { name } = useParams()
    const [details, setDetails] = useState<IPokeProps>(initialValue)

    useEffect(() => {
        const getPokemon = async () => {
            const data = await fetchPokemon(name)
            setDetails({
                id: data.id,
                name: data.name,
                image: data.sprites.other['official-artwork'].front_default,
                moves: data.moves.slice(0, 3),
                abilities: data.abilities,
                types: data.types,
                weight: data.weight,
                height: data.height
            })
        }

        getPokemon()
    }, [])

    return (
        <div className="container">
            <div className="content">
                <div className="image-side">
                    <h2>{details.name} #{details.id}</h2>
                    <img 
                        src={details.image} 
                        alt={`Pokemon name: ${details.image}`}
                    />
                </div>
                <div className="details-side">
                    <h4>Types</h4>
                    <div className='types'>
                        {
                            details.types.map((type, index) => {
                                return (
                                    <PokemonType key={index} itemProp={type.type.name}>{type.type.name}</PokemonType>
                                )
                            })
                        }
                    </div>
                    
                    <h4>Moves</h4>
                    <ul>
                        {
                            details.moves.map((move, index) => {
                                return (
                                    <li key={index}>{move.move.name}</li>
                                )
                            })
                        }
                    </ul>

                    <h4>Abilities</h4>
                    <ul>
                        {
                            details.abilities.map((ability, index) => {
                                return (
                                    <li key={index}>{ability.ability.name}</li>
                                )
                            })
                        }
                    </ul>

                    <div>
                        <h4>Height</h4>
                        <span>{Number(details.height) / 10}m</span>
                    </div>

                    <div>
                        <h4>Weight</h4>
                        <span>{Number(details.weight) / 10}kg</span>
                    </div>
                </div>
            </div>
        </div>
    )
}