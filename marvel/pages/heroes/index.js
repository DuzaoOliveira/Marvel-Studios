import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './styles.module.css';

function Pokemons() {
  const [resposta, setResposta] = useState();
  const [valores, setValores] = useState();

  const escolherHeroi = (name) => {
    setOpenModal(true);
    axios(` http://gateway.marvel.com/v1/public/characters?nameStartsWith=iron&ts=1&apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a${name}`)

    console.log(preview.data, 'escolherHero')
      .then((preview) => {
        setValores(preview.data);
      })
  }

  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className={styles.cont}>
      <div className={styles.lista}>
        <h1>Mysuperhero</h1>
      </div>

      <div className={styles.voltar}>
        <button onClick={handleClick}>
          Voltar
        </button>
      </div>

      <div className={styles.cards}>
        <>
          {resposta?.results.map((pokemons, index, name) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className={styles.card} onClick={() => escolherHeroi(pokemons.name)}>

                <div className={styles.nomes}>
                  <p>{pokemons.name}</p>
                </div>

                <div className={styles.api}>
                  <img src={`http://gateway.marvel.com/v1/public/characters?nameStartsWith=iron&ts=1&apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a/${index + 1}.png`} />
                </div>
              </div>
            );
          })}
        </>
      </div>


    </div>

  );
}
export default Pokemons;