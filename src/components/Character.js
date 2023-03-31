import styled from "styled-components";

const CardContent = styled.div`
  margin: 10px;
  color: #fff;
  padding: 20px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #0000007a;
  filter: brightness(80%);
  &:hover {
    filter: brightness(100%);
    cursor: pointer;
  }
`;

const ContentImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CharacterImage = styled.img`
  width: 130px;
  height: auto;
  text-align: center;
`;

const CharacterTitle = styled.h2`
  font-size: 1rem;
  text-align: center;
`;
const CharacterQuote = styled.h4`
  font-size: 1rem;
  text-align: justify;
`;

function Character(props) {
  const { dataCharacter } = props;
  const { character, image, quote } = dataCharacter;
  return (
    <CardContent>
      <CharacterTitle>{character}</CharacterTitle>
      <ContentImage>
        <CharacterImage src={image} alt={character} />
      </ContentImage>
      <CharacterQuote>{quote}</CharacterQuote>
    </CardContent>
  );
}

export default Character;
