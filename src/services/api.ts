const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

export const fetchPokemons = async (limit: number) => {
    const response = await fetch(`${baseUrl}?limit=${limit}`)
    const data = await response.json()

    return await data.results
}

export const fetchPokemon = async (name: string | undefined) => {
    const response = await fetch(`${baseUrl}/${name}`)
    const data = await response.json()

    return await data
}