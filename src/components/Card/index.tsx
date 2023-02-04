import { Link } from 'react-router-dom'
import { IPokemonsProps } from '../../contexts/PokemonsContext'
import styled from 'styled-components'
import './styles.scss'

export const Card = ({ name, id, image, types }: IPokemonsProps) => {

    return (
        <Link to={`/details/${name}`} className="card-item">
            <img
                src={image}
                alt={`Pokemon name: ${name}`}
            />
            <div className="pokemon-data">
                <span className='pokeId'>N°{id}</span>
                <h5 className='pokeName'>{name}</h5>
                <div className="types">
                    {
                        types.map((type, index) => {
                            return (
                                <PokemonType 
                                    key={index}
                                    itemProp={type.type.name}
                                >
                                    {type.type.name}
                                </PokemonType>
                                
                            )
                        })
                    }
                </div>
            </div>
        </Link>
    )
}

export const PokemonType = styled.span`
    background-color: ${
    props => props.itemProp === 'grass' ? '#36B44C' 
    : props.itemProp === 'poison' ? '#91288D' 
    : props.itemProp === 'fire' ? '#F7941F'
    : props.itemProp === 'normal' ? '#C4B59D'
    : props.itemProp === 'flying' ? '#C1B7D8'
    : props.itemProp === 'water' ? '#00AEEC'
    : props.itemProp === 'fighting' ? '#BC1F2D'
    : props.itemProp === 'electric' ? '#e9d822'
    : props.itemProp === 'ground' ? '#FFCD6A'
    : props.itemProp === 'psychic' ? '#EC2B7A'
    : props.itemProp === 'rock' ? '#C39B6D'
    : props.itemProp === 'ice' ? '#A3DCF6'
    : props.itemProp === 'bug' ? '#AACF4F'
    : props.itemProp === 'dragon' ? '#4D3090'
    : props.itemProp === 'ghost' ? '#867299'
    : props.itemProp === 'dark' ? '#3F2316'
    : props.itemProp === 'steel' ? '#A1ABB3'
    : props.itemProp === 'fairy' ? '#F393BD'
    : props.itemProp === 'cell' ? '#68B0AA'
    : props.itemProp === 'cyber' ? '#3956A5'
    : 'gray'
    };
    color: white;
    padding: 0.35rem;
    border-radius: 0.5rem;
`