import Link from 'next/link'
import React from 'react'
import styles from '../../styles/main-header.module.css'
const MainHeader = () => {
  return (
    <header className={styles.header}>
        <div  className={styles.logo}>
            <Link href='/'>Next Events</Link>

        </div>
        <nav className={styles.navigation}>
            <Link href='/events'>Show All Events</Link>
        </nav>  
    </header>
  )
}

export default MainHeader