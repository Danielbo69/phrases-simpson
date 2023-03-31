import styled from "styled-components";
import Logo from "../img/the-simpson.png";

const ImageLogo = styled.img`
  width: 500px;
  height: auto;
  text-align: center;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 428px) {
    width: 100%;
  }
`;
const ContentLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WelcomeText = styled.p`
  color: #2a9d8f;
  text-align: justify;
  font-weight: 700;
  padding: 10px;
  font-size: 1.5rem;
  @media screen and (max-width: 428px) {
    font-size: 1rem;
  }
`;

function Welcome(props) {
  const { reqApi } = props;

  return (
    <ContentLogo>
      <WelcomeText>
        Bienvenidos, para ver las frases clickea la imagen
      </WelcomeText>
      <ImageLogo src={Logo} alt="The Simpson" onClick={reqApi} />
    </ContentLogo>
  );
}

export default Welcome;
