import React, { useEffect, useState } from 'react'
import axios from "axios"  
import './ShowCharacter.css'

const ShowCharacter = () => {

  const baseUrl = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);

  //1º Metodo: Promesas (async/await)
  /*
  useEffect(() => {
    async function getAllCharacters() {
      const response = await fetch(baseUrl)
      const data = await response.json()
      console.log(data.results);
      setCharacters(data.results);
    }
    
    getAllCharacters();
  }, []);
  */

  //2º Método: Axios
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      console.log(response.data.results);
      setCharacters(response.data.results);
    })
  }, []);

  if (!characters) return null;

  //Para más info: https://www.freecodecamp.org/espanol/news/como-usar-axios-con-react/#c-mo-hacer-una-solicitud-get

  return (
    <div className="container-character">
      <h1 className="container-title">Rick y Morty, Adult Swim</h1>
      {
        characters.map(character => {

          return (
            <div key={character.id} className="card">
              <h2 className="card-name">{character.name}</h2>
              <img src={character.image} alt={character.name} className="card-img" />
              <p className="card-specie">Especie: {character.species} </p>
              <p className="card-status">Estado: {character.status} </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ShowCharacter