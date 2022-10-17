import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import axios from 'axios'

function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')


  const heroi = (name) => {
    setIsOpen(true);
    axios.get(` http://gateway.marvel.com/v1/public/characters?nameStartsWith=iron&ts=1&apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a/${name}`)
      .then((preview) => {
        setResposta(preview.data);
      })

  }

  return (
    <>

      {Object.values(name).map((item) => {
        <p>{item?.name}</p>;
      })}

      <div className={styles.logohome}>
        <img
          src='https://www.g33kmania.com/wp-content/uploads/marvel-logo-personnages.jpg'
          alt="logo marvel" />
      </div>
      <div className={styles.input}>
        <input onChange={(e) => setName(e.target.value)} value={name} />
        <div className={styles.button}>
          <button onClick={() => window.location.href = "/heroi"}>Buscar</button>
        </div>
      </div>
    </>
  );

}

export default Home;
