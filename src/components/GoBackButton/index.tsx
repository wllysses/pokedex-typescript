import { Link } from "react-router-dom"
import './styles.scss'

export const GoBackButton = () => {
    return (
        <div className="go-back-button">
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}