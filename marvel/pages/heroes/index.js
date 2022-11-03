
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './styles.module.css';

function Mysuperhero() {
  const [resposta, setResposta] = useState();
  const [nameHeroes] = useState();

  let url
  let nameHero

  if (typeof window !== 'undefined') {
    url = window.location?.href;
    nameHero = url.split("name=")[1];
  }

  console.log(nameHero, 'nameHero')

  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameHero}&ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`)
      .then((response) => {
        setResposta(response.data);
      });
  }, [nameHero, nameHeroes]);

  console.log(resposta, 'ress')

  const handleClick = () => {
    window.location.href = "/";
  };

  return (

    <div className={styles.container}>

      <div className={styles.h1}>
        <h1>Mysuperhero</h1>
      </div>

      <div className={styles.voltar}>
        <button onClick={handleClick}>
          Voltar
        </button>
      </div>

      <div className={styles.boxcard}>
        <>
          {resposta &&

            resposta?.data?.results?.map((item) => {

              console.log(item, 'item')

              return (
                // eslint-disable-next-line react/jsx-key
                <div className={styles.box}>

                  <button onClick={() => window.location.href = "/heroes?name"}>
                    <p>{item.name}</p>
                  </button>

                  <div className={styles.cards} onClick={() => window.location.href = `/historia?id=${item.id}`}>

                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}></img>
                  </div>
                </div>

              );
            })}
        </>
      </div>

    </div>



  );
}
export default Mysuperhero;