import styled from "styled-components";
import Character from "./Character";

const ContainerCharacter = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 428px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ContentButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: rgb(217 59 22);
  transition: all 0.2s ease-out;
  &:hover {
    cursor: pointer;
    background-color: rgb(193 63 33);
  }
  @media screen and (max-width: 428px) {
    width: 100px !important;
  }
`;

function CharacterContainer(props) {
  const { characters, reqApi, reset } = props;

  return (
    <>
      <ContainerCharacter>
        {characters.map((character, index) => (
          <Character dataCharacter={character} key={index} />
        ))}
      </ContainerCharacter>
      <ContentButtons>
        <Button onClick={reset}>Atras</Button>
        <Button onClick={reqApi}>Buscar</Button>
      </ContentButtons>
    </>
  );
}

export default CharacterContainer;
