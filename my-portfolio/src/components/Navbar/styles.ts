import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-shadow: 8px 8px 16px ${props => props.theme.colors.shadow};
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
    transition: 0.3s;
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
    transition: 0.5s;
    border: none;
    border-radius: 50px;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.accent};
  }  
`
export const Select = styled.select`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  margin: 0 1rem;
  box-shadow: 8px 8px 16px ${props => props.theme.colors.shadow};
`