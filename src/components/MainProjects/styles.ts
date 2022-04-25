import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12rem;
`

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${props => props.theme.colors.primary};
  margin: 1rem 0;
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 8px 8px 16px ${props => props.theme.colors.shadow};
  max-width: 800px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`


export const Title = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem
`

export const Techs = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  width: 100%;

  span {
    margin-right: 1rem;
    border: 1px solid ${props => props.theme.colors.text};
    padding: 0.2rem 0.4rem;
    border-radius: 6px;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`

export const Action = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  width: 80px;
  margin-right: 1rem;
  padding: 0.24rem 0.5rem;
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 50px;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.text};
  text-decoration: none;

  &:hover{
    transition: 0.15s ease-out;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.accent};
    border-radius: 0;
  }
`

export const Image = styled.img`
  max-width: 600px;
  max-height: 400px;
  border-radius: 6px;
`

