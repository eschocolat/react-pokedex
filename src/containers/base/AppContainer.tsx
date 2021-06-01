import React from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import GlobalStyles from '../../GlobalStyles';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const AppContainer: React.FC = ({ children }) => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <AppBlock>{children}</AppBlock>
    </>
  );
};

export default AppContainer;
