import styled from 'styled-components'

const Title = styled.h1`
    color: #fff;
    text-align: center;
    @media screen and (max-width: 428px) {
    font-size: 1.25rem;
  }
`;

function Header() {
  return (
    <Title>Frases de los Simpson</Title>
  )
}

export default Header