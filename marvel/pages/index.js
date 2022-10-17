import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <><div className={styles.logohome}>
      <img
        src='https://www.g33kmania.com/wp-content/uploads/marvel-logo-personnages.jpg'
        alt="logo pokemon" />
    </div><>
        <div className={styles.input}>
          <input onChange={(e) => setName(e.target.value)} value={'teste'} />
          <button onClick={() => heroi()}>Buscar</button>
        </div>
      </></>



  )
}
