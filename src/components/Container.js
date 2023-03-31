import styled from "styled-components";

const Content = styled.div`
  max-width: 1200px;
  min-height: 96vh;
  padding: 10px;
  margin: 0 auto;
  @media screen and (max-width: 428px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100% !important;
  }
`;

function Container({ children }) {
  return (
    <Content>
        {children}
    </Content>
  ); 
}

export default Container;
