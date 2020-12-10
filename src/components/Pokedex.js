import { useState, useEffect } from 'react';
import Axios from 'axios';
;
function Pokedex() {
    const [pokemonName, setPokemonName] = useState('pikachu')
    const [pokemonImage, setPokemonImage] = useState('')

    useEffect(() => {
        console.log('useEffect');

        if (pokemonName === '') {
            return
        }
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) => {
            setPokemonImage(res.data.sprites.front_default)
        }).catch((err) => {
            setPokemonImage('')
        })
    })

    return(
        <div>
            <h1>Function Component Pokedex</h1>
            <input value={pokemonName} onChange={(e) => {setPokemonName(e.target.value.toLowerCase())}} />
            <div>
                <img src={pokemonImage} alt="" />
            </div>
        </div>
    )
}

export default Pokedex;