import React from 'react';
import styled from '@emotion/styled';

const PokemonItemBlock = styled.div`
  color: hotpink;
`;

export interface ListPokemonItemProps {
  pokemon: any | null;
  index: number;
}

const ListPokemonItem: React.FC<ListPokemonItemProps> = ({ pokemon, index }) => {
  if (!pokemon) {
    return null;
  }

  return (
    <PokemonItemBlock>
      <figure>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            index + 1
          }.png`}
          alt={pokemon.name}
        />
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </PokemonItemBlock>
  );
};

export default ListPokemonItem;
