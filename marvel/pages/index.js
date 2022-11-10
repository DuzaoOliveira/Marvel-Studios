import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import Head from 'next/head';

function Home() {
  const [name, setName] = useState('')
  const [nameHeroes, setNameHeroes] = useState();

  return (

    <div className={styles.container}>

      <Head>
        <title>Marvel</title>
        <meta name="Marvel" content="Marvel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.title}>
        <h1>Mysuperhero</h1>
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
      <div />
    </div>
  );
}

export default Home;
