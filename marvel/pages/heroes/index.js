
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './styles.module.css';

function Mysuperhero() {
  const [resposta, setResposta] = useState();
  const [valores, setValores] = useState();
  const [nameHeroes, setNameHeroes] = useState();

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
  }, [nameHeroes]);

  console.log(resposta, 'ress')

  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className={styles.container}>
      <>
        <h1>Mysuperhero</h1>
      </>

      <>
        <button onClick={handleClick}>
          Voltar
        </button>
      </>

      <div>
        <>
          {resposta &&

            resposta?.data?.results?.map((item) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className={styles.card} onClick={() => escolherHero(item)}>

                  <div className={styles.nomes}>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
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