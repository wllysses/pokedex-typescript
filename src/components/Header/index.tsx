import pokeballImage from '../../assets/pokeball.png'
import './styles.scss'

export const Header = () => {

    return (
        <div className="header">
            <div className="container">
                <header>
                    <div>
                        <img src={pokeballImage} alt="Pokeball Image" />
                        <div className="title-and-subtitle">
                            <h1 className="title">MyPokedéx</h1>
                            <span className="subtitle">with Typescript</span>
                        </div>
                    </div>

                </header>
            </div>
        </div>
    )
}