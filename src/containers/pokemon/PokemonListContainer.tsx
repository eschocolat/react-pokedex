import React, { useRef } from 'react';
import useSWR from 'swr';
import styled from '@emotion/styled';
import fetcher from '@lib/fetcher';
import ListPokemonItem from '@components/pokemon/ListPokemonItem';

const PokemonListBlock = styled.ul`
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 481px) and (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PokemonListContainer: React.FC = () => {
  const currentPage = useRef(1);
  const limit = useRef(898);
  const { data: list, error } = useSWR<any>(
    `https://pokeapi.co/api/v2/pokemon/?offset=${(currentPage.current - 1) * limit.current}&limit=${limit.current}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!list) return <div>loading...</div>;

  // render data
  return (
    <PokemonListBlock>
      {list.results?.map((pokemon: any, i: number) => (
        <ListPokemonItem pokemon={pokemon} index={i} key={pokemon.name} />
      ))}
    </PokemonListBlock>
  );
};

export default PokemonListContainer;
