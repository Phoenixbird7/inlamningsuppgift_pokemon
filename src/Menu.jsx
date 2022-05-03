import { useState } from "react"
import { data } from "./data"

export function Menu({ addTeammember }) {
  const [searchValue, setSearchValue] = useState("")

  const pokemons = data
    .results
    .filter(pokemon => !searchValue || pokemon.name.includes(searchValue))

  return <div className="container">
    <div className="Meny">
      <div className="My collection-List">My best collection
        <div className="Shop">Pokemon "Shop"
        </div>
        <div className="Play">Play
        </div>
        <div className="pokemoner">
          <div><label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              onChange={event => setSearchValue(event.target.value)}
              value={searchValue}
            />
          </div>

          <div className="list">
            {pokemons.length === 0
              ? <p>No pokemons matched your search</p>
              : <ul>
                {pokemons.map(p =>
                  <p key={p.name}>{p.name}
                    <button onClick={() => addTeammember({ name: p.name, nickname: null })}> add</button> </p>
                )}
              </ul>
            }
          </div>
        </div>
      </div>
    </div>
  </div>
}
