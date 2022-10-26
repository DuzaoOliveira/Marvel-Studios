import React, { useState } from 'react';
// import axios from "axios";
import styles from '../styles/Home.module.css'

function Home() {
  // const [resposta, setResposta] = useState('')
  // const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('')

  return (
    <div className={styles.container}>


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
