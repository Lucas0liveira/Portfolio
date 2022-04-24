import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
`

export const HeroLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  width: 32px;
  height: 32px;
  margin: 1rem 0.5rem;
  border-radius: 50%;
  border: none;
  box-shadow: 8px 8px 16px ${props => props.theme.colors.shadow};
`