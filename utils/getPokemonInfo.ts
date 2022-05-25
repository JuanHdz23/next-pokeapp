import { Pokemon } from '../interfaces';
import { pokeApi } from '../api';

export const getPokemonInfo = async( nameOrId: string ) => {
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ nameOrId }`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
}