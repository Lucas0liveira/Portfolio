import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-shadow: 0px 4px 16px ${props => props.theme.colors.shadow};

  .react-switch-bg {
    border: 1px solid ${props => props.theme.colors.text};
  }
`
export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Link = styled.a`
  text-decoration: none;
  font-weight: 700;
  margin: 0 1rem;
  color: ${props => props.theme.colors.text};

  &:hover {
    transition: 0.15s ease-out;
    color: ${props => props.theme.colors.accent};
  }
`

export const Button = styled.button`
  background: transparent;
  border: 2px solid ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.accent};
  margin-right: auto;
  margin-left: 1rem;
  font-weight: 700;
  width: 96px;
  height: 32px;
  cursor: pointer;

  &:hover {
    transition: 0.25s ease-out;
    border: none;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.accent};

  }  
`
export const Select = styled.select`
  height: 32px;
  padding: 0 0.5rem;
  margin: 0 1rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border-radius: 6px;
  border: 1px solid ${props => props.theme.colors.text};
`