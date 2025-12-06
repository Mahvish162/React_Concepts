import React from 'react'
import styles from '../styles/Nav2.module.css'

const Nav2 = () => {
  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.left}>
            <h2>Logo</h2>
        </div>
        <div className={styles.right}>
            <h2>login</h2>
            <h2>SignUp</h2>
        </div>
       </div>
    </div>
  )
}

export default Nav2
