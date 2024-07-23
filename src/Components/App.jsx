import { Header } from "./Header";
import { CharacterRatings } from "./CharacterRatings";
import { CharacterCards } from "./CharacterCards";
import { characterInformation } from "../characterInformation";
import "./styles/reset.css";
import "./styles/style.css";
import "./styles/header.css";
import "./styles/character-ratings.css";
import "./styles/character-cards.css";

function App() {
  return (
    <>
      <Header />
      <div
        id="section-container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <CharacterRatings characters={characterInformation} />
        <CharacterCards characters={characterInformation} />
      </div>
    </>
  );
}

export default App;
