import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import axios from "axios";

function Historia() {
  const [open, setOpen] = useState('');
  // const [characters, setCaracters] = useState('');

  const handleClick = () => {
    window.location.href = "/";
  };

  let url
  let idHistory

  if (typeof window !== "undefined") {
    url = window.location?.href;
    idHistory = url.split("id=")[1];
  }

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${idHistory}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`,
        {
          headers: {},
        }
      )
      .then((preview) => {
        setOpen(preview.data.data.results);
      });
  }, [idHistory]);


  return (
    <container>

      {console.log(open, 'open')}
      <div className={styles.h1}>
        <h1>Mysuperhero</h1>
      </div>

      <div className={styles.voltar}>
        <button onClick={handleClick}>
          Voltar
        </button>
      </div>

      {open &&
        open.map((item, index) => {
          return (
            <div key={index}>
              <div className={styles.box}>
                <div className={styles.card2}>
                  <img alt='heroi' src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
                </div>

                <div>
                  <div className={styles.name}>
                    <p>{item.name}</p>

                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className={styles.characters}>


                <div className={styles.comics}>
                  <h1>Comics</h1>
                  {item.comics.items.map((characters, index) => {
                    return (
                      <p key={index}>{characters.name}</p>
                    )
                  })}
                </div>

                <div className={styles.events}>
                  <h1>Eventos</h1>
                  {item.events.items.map((characters, index) => {
                    return (
                      <p key={index}>{characters.name}</p>
                    )
                  })}
                </div>

                <div className={styles.series}>
                  <h2>Series</h2>
                  {item.series.items.map((characters, index) => {
                    return (
                      <p key={index}>{characters.name}</p>
                    )
                  })}
                </div>

                <div className={styles.historias}>
                  <h2>História</h2>
                  {item.stories.items.map((characters, index) => {
                    return (
                      <p key={index}>{characters.name}</p>
                    )
                  })}
                </div>
              </div>


            </div>
          );
        })}


    </container>
  );
}

export default Historia;
