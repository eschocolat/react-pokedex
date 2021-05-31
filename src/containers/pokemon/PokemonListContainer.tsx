import React, { useRef } from 'react';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import ListPokemonItem from '../../components/pokemon/ListPokemonItem';

const PokemonContainer: React.FC = () => {
  const currentPage = useRef(1);
  const limit = useRef(20);
  const { data: list, error } = useSWR<any>(
    `https://pokeapi.co/api/v2/pokemon/?offset=${(currentPage.current - 1) * limit.current}&limit=${limit.current}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!list) return <div>loading...</div>;

  // render data
  return (
    <div>
      <h1>pokemon</h1>
      {list.results?.map((pokemon: any, i: number) => (
        <ListPokemonItem pokemon={pokemon} index={i} key={pokemon.name} />
      ))}
    </div>
  );
};

export default PokemonContainer;
