import React, { useState } from 'react';
import styles from './styles.module.css';

function Historia() {


  const handleClick = () => {
    window.location.href = "/heroes?name=du";
  };


  return (
    <>
      <div className={styles.h1}>teste</div>
      <div className={styles.voltar}>
        <button onClick={handleClick}>
          Voltar
        </button>
      </div>
    </>
  );
}

export default Historia;
