import ScrollToTop from "react-scroll-to-top";
import { Header } from "../../components/Header"
import { LoadMoreButton } from "../../components/LoadMoreButton"
import { Pokemons } from "../../components/Pokemons"

export const Home = () => {
    return (
        <>
            <Header />
            <Pokemons />
            <LoadMoreButton />
            <ScrollToTop smooth />
        </>
    )
}