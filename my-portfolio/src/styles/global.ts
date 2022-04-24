import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    font-family: 'Roboto';
    color: ${(props) => props.theme.colors.text};
  }

  .title {
    font-size: 64px;
    font-weight: bold;
    color: ${props => props.theme.colors.accent};
  }

  .subtitle {
    font-weight: bold;
    font-size: 36px;
  }

  .text {
    font-size: 18px;
    color: ${props => props.theme.colors.text};
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 8rem 4rem;
  }

`;
