import React from 'react';
import { Background } from '@components/Layout';
import { ThemeContext } from '@util/theme';

const Index = () => {
  const { toggleTheme } = React.useContext(ThemeContext);

  return (
    <Background>
      <button onClick={toggleTheme}>toggle!</button>
    </Background>
  );
};

export default Index;
