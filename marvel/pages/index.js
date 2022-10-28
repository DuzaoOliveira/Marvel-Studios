import React, { useState } from 'react';
import styles from '../styles/Home.module.css'

function Home() {
  const [name, setName] = useState('')
  const [nameHeroes, setNameHeroes] = useState();

  return (
    <div className={styles.container}>

      <div className={styles.logohome}>
        <img
          src='https://www.g33kmania.com/wp-content/uploads/marvel-logo-personnages.jpg'
          alt="logo marvel" />
      </div>

      <div className={styles.input}>
        <div className={styles.button}>
          <input onChange={(e) => setNameHeroes(e.target.value)} value={nameHeroes} />

          <button onClick={() => {
            setName(name),
              (window.location.href = `/heroes?name=${nameHeroes}`)
          }}
          >Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
