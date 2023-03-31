import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import CharacterContainer from "./components/CharacterContainer";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=2"
    );
    const phrases = await api.json();
    setCharacters(phrases);
  };

  const reset = () => {
    setCharacters(null)
  }

  return (
    <Container>
      <Header />
      {!characters ? (
        <Welcome reqApi={reqApi} />
      ) : (
        <>
          <CharacterContainer characters={characters} reqApi={reqApi} reset={reset}  />
        </>
      )}
    </Container>
  );
}

export default App;
