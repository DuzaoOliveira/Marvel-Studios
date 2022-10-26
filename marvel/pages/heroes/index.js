
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './styles.module.css';

function Mysuperhero() {
  const [resposta, setResposta] = useState();
  // const [valores, setValores] = useState();

  // const escolherHero = (name) => {
  //   setOpenModal(true);
  //   axios
  //     .get(
  //       `https://pokeapi.co/api/v2/pokemon/${name}`,
  //     )
  //     .then((preview) => {
  //       setValores(preview.data);
  //     })
  // }

  let url
  let nameHeroes

  if (typeof window !== 'undefined') {
    url = window.location?.href;
    nameHeroes = url.split("name=")[1];
  }


  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?&ts=1&apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a`)
      .then((response) => {
        setResposta(response.data.data.results);
      });
  }, [nameHeroes]);

  console.log(resposta, 'heroes')

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
          {resposta?.map((item) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className={styles.card} onClick={() => escolherHero(pokemons.name)}>

                <div className={styles.nomes}>
                  <p>{item.name}</p>
                </div>

                {/* <div className={styles.api}>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`} />
                </div> */}
              </div>
            );
          })}
        </>
      </div>

      {/* {valores &&
        <Modal
          nome={valores?.name}
          tipo={valores.types && valores?.types[0]?.type?.name}
          hp={valores.stats && valores?.stats[0].base_stat}
          ataque={valores.stats && valores?.stats[1].base_stat}
          defesa={valores.stats && valores?.stats[2].base_stat}
          ataqueEspecial={valores.stats && valores?.stats[3].base_stat}
          defesaEspecial={valores.stats && valores?.stats[4].base_stat}
          velocidade={valores.stats && valores?.stats[5].base_stat}
          imagem={
            valores?.sprites?.other["official-artwork"]?.front_default
          }
          setIsOpen={setOpenModal}
          isOpen={openModal}
        />
      } */}
    </div>

  );
}
export default Mysuperhero;