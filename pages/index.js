import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function section1() {
  return (
    <section className={`${styles.main}`}>
      <div className="container">
        <p>EM CONSTRUÇÂO</p>
        <Link className={styles.chamativoLink} href="/polio">
          POLIO
        </Link>
      </div>
    </section>
  )
}
