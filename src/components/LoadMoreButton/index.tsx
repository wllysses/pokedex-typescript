import { useContext } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import './styles.scss'

export const LoadMoreButton = () => {

    const { handleLoadMorePokemons } = useContext(PokemonsContext)

    return (
        <div className="container">
            <div className="load-more-container">
                <button onClick={handleLoadMorePokemons}>Load More</button>
            </div>
        </div>
    )
}