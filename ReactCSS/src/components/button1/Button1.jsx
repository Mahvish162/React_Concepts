import React from 'react'
import styles from './Button1.module.css'

const Button1 = () => {
  return (
    <div>
      <div id={styles.block1}>
        <button className={styles.btn}>click me</button>
      </div>
    </div>
  )
}

export default Button1