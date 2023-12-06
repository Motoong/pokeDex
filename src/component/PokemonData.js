import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PokemonData() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
        setPokemonData(response.data);
        console.log(response.data); // API 데이터를 콘솔에 출력
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemonData.order} {pokemonData.name}</h2>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <ul>
        <li>Height: {pokemonData.height}</li>
        <li>Weight: {pokemonData.weight}</li>
        <li>Weight: {pokemonData.weight}</li>
        {/* 추가적인 데이터 필드를 원하는 대로 출력할 수 있습니다 */}
      </ul>
    </div>
  );
}

export default PokemonData;
