export function CharacterCards(props) {
  const characters = props.characters;
  return (
    <section id="character-cards">
      {characters.map((character) => {
        return (
          <div className="card" key={character.name}>
            <div className="card-titles">
              <h3>{character.name}</h3>
              <h4>{character.nickName}</h4>
            </div>
            <img src={character.imageUrl} alt={character.name} />
            <p>{character.background}</p>
          </div>
        );
      })}
    </section>
  );
}
