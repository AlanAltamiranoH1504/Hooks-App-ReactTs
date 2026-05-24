import {useCountter} from "./hooks/useCountter.ts";
import {usePokemon} from "./hooks/usePokemon.ts";

export default function PokemonPage() {
    const {
        counter,
        increment,
        decrement
    } = useCountter(1);

    const {
        pokemon,
        isLoadign
    } = usePokemon({id: counter});

    return (
        <>
            {isLoadign ? (
                <>
                    <p className="font-thin text-sm">Cargando datos de pokeon API</p>
                </>
            ) : (
                <div className="bg-gradient flex flex-col items-center">
                    <h1 className="text-2xl font-thin text-white">Pokémon</h1>
                    <h3 className="text-xl font-bold text-white">#{counter} - {pokemon?.name}</h3>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`}
                        alt=""
                    />

                    <div className="flex gap-2">

                        <button
                            onClick={() => decrement()}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                            Anterior
                        </button>

                        <button
                            onClick={() => increment()}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                            Siguiente
                        </button>

                    </div>
                </div>
            )}
        </>
    )
}
