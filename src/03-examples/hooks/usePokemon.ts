import {useEffect, useState} from "react";

interface usePokemonProps {
    id: number
}

interface PokemonData {
    id: number,
    name: string,
    imageUrl: string
}

export const usePokemon = ({id}: usePokemonProps) => {
    const [pokemon, setPokemon] = useState<PokemonData | null>(null);
    const [isLoadign, setisLoading] = useState<boolean>(true);

    const getPokemonById = async (id: number) => {
        setisLoading(true);
        await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((dataPokemon) => {
                setPokemon({
                    id: id,
                    name: dataPokemon.name,
                    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                })
            })
            .catch((error) => {
                console.log(`Ocurrio un error en el llamado de la API: ${error}`)
            });
        setisLoading(false);
    }

    useEffect(() => {
        getPokemonById(id)
    }, [id])

    return {
        pokemon,
        isLoadign
    }
}