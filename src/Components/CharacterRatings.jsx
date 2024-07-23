import { Component } from "react";

export class CharacterRatings extends Component {
  render() {
    const characters = this.props.characters.sort((a, b) => b.votes - a.votes);

    return (
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          {characters.map((character, i) => {
            const lightOrDark = i % 2 ? "light" : "dark";

            if (character.votes > 80) {
              return (
                <tr key={i} className={lightOrDark}>
                  <td>
                    {character.nickName
                      ? `${character.name}, ${character.nickName} `
                      : `${character.name} `}
                  </td>
                  <td>{character.skillset.join(", ")}</td>
                  <td>{character.votes}</td>
                </tr>
              );
            }
          })}
        </table>
      </section>
    );
  }
}
