import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const PokemonItemBlock = styled.li`
  // min-width: 100px;
  max-width: 100px;
  margin: 8px auto;
`;

const PokemonFigure = styled.figure`
  background: #eee;
  border-radius: 12px;
`;
const PokemonInfo = styled.div``;

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
      <PokemonFigure>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
          alt={pokemon.name}
          css={css`
            width: 100%;
            height: auto;
          `}
        />
      </PokemonFigure>
      <PokemonInfo>{pokemon.name}</PokemonInfo>
    </PokemonItemBlock>
  );
};

export default ListPokemonItem;
