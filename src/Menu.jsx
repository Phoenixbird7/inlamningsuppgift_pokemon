import { useState } from "react"
import { data } from "./data"
import { imageUrl } from "./imageUrl"
//  https://github.com/Phoenixbird7/inlamningsuppgift_pokemon
// https://past-receipt.surge.sh/

export function Menu({ addTeammember }) {
  const [searchValue, setSearchValue] = useState("")

  const pokemons = data
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
                  <div key={p.id} >
                    <img src={imageUrl(p.id)} alt={p.name} />
                    <span>{p.name}</span>
                    <button onClick={() => addTeammember({ id: p.id, name: p.name, nickname: null })}> add</button> </div>
                )}
              </ul>
            }
          </div>
        </div>
      </div>
    </div>
  </div>
}
