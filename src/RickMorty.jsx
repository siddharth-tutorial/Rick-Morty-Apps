import { useEffect, useState } from "react";
import Header from "./Header";
import "./Rick.css";
function RickMorty() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json()) //Convert the response to JSON
      .then((data) => setCharacters(data.results)) // Store the character data in state
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []);
  return (
    <div>
      <Header />

      <h1 className="bg-black text-white font-bold text-4xl text-center p-8">
        The Rick and Morty Api
      </h1>

      <div className="App">
        <div className="character-container ctdrw">
          {/* Loop through characters and render their images */}
          {characters.map((char) => (
            <div className="bEklxy">
              <div key={char.id} className="character-card hvhElu">
                <div className="charactercard-img fkUcVi ">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="character-image"
                  />
                </div>

                <div className="content-wrapper isMAic">
                  <div className="section">
                    <a
                      href={char.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-title"
                    >
                      <h2>{char.name}</h2>
                    </a>
                    <span
                      className="status"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span
                        className="status-icon"
                        style={{
                          backgroundColor:
                            char.status === "Dead"
                              ? "red"
                              : char.status === "unknown"
                              ? "gray"
                              : "green",
                        }}
                      >
                        {/* <LuDot />  */}
                      </span>
                      {char.status}
                      <span style={{ margin: "0 8px" }}> - </span>
                      {char.species}
                    </span>
                  </div>
                  <br />
                  <div className="section">
                    <span className="text-gray-500  m-0">
                      Last Known Location:
                    </span>
                    <a
                      href={char.origin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="extralink ffGndr"
                    >
                      <br />
                      {/* Citadel of Ricks */}
                      {char.origin.name}
                    </a>
                  </div>
                  <br />
                  <div className="section">
                    <span className="text-gray-500">First seen in:</span>
                    <br />
                    <a
                      href={char.episode[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-link"
                    >
                      Episode {char.episode[0].split("/").pop()}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default RickMorty;
