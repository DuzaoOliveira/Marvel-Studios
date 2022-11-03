import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import axios from "axios";

function Historia() {
  const [open, setOpen] = useState('');

  const handleClick = () => {
    window.location.href = "/";
  };

  let url
  let idHistory

  if (typeof window !== "undefined") {
    url = window.location?.href;
    idHistory = url.split("id=")[1];
  }

  console.log(idHistory, 'history')
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

        open.map((item, comics) => {

          { console.log(item, 'item') }

          return (
            // eslint-disable-next-line react/jsx-key
            <div className={styles.box}>

              <div className={styles.card2}>
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}></img>
              </div>

              <div>
                <div className={styles.name}>
                  <p>{item.name}</p>
                </div>
                <p>{item.description}</p>
                {/* <p>{item.modified}</p> */}
              </div>
            </div>

          );
        })}

    </container>
  );
}

export default Historia;
