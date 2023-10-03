import React from 'react'
import styles from '../../styles/Home.module.css'

export default function Section1() {
  return (
    <section id="secao1" className={`${styles.section} ${styles.section1}`}>
      <div className="container">
        <h1 className={styles.customH1}>
          <span className={styles.redText}>CRIE A</span>
          <br />
          <span className={styles.redText}>ESPERANÇA</span>
          <br />
          <span className={styles.whiteText}>NO MUNDO.</span>
        </h1>
      </div>
    </section>
  )
}
