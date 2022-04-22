import React, { useContext } from 'react';
import { Container } from  './styles'
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface Props {
  toggleTheme(): void;
}

const NavBar: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)
  return (
    <Container>

      <Switch 
        onChange={() => {toggleTheme()}}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        offColor={colors.accent}
        onColor={colors.accent}
        onHandleColor={colors.text}
        offHandleColor={colors.text}
      />
    </Container>
  );
}

export default NavBar;