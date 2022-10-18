import React, { useEffect, useState } from 'react';
import axios from "axios";
import styles from '../styles/Home.module.css'

function Home() {
  const [resposta, setResposta] = useState('')
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('')

  const myhero = (name) => {
    setIsOpen(true);
    axios.get(` http://gateway.marvel.com/v1/public/characters?nameStartsWith=iron&ts=1&apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a${name}`)
      .then((preview) => {
        setResposta(preview.data);
      })

    console.log('myhero')
  }

  return (
    <div className={styles.container}>


      {/* {Object.values().map((item) => {
        <p>{item?.name}</p>;
      })} */}

      <div className={styles.logohome}>
        <img
          src='https://www.g33kmania.com/wp-content/uploads/marvel-logo-personnages.jpg'
          alt="logo marvel" />
      </div>

      <div className={styles.input}>
        <div className={styles.button}>
          <input onChange={(e) => setName(e.target.value)} value={name} />
          <button onClick={() => myhero(name)}>Buscar</button>
        </div>
      </div>

      <div className={styles.enter}>
        <button onClick={() => window.location.href = "/heroes"}>
          Mysuperhero
        </button>
      </div>

    </div>


  );

}


export default Home;
