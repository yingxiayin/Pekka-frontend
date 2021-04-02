import styles from './style.less'

import {Layout} from 'antd'
import React, {FC} from 'react'

import logoLight from '@/assets/img/logo_light.png'

const {Footer} = Layout

const GlobalFooter: FC = () => {
  return (
    <>
      <Footer className={styles.footer}>
        <div className={styles.logo_position}>
          <div className={styles.logo_area}>
            <img className={styles.logo} src={logoLight} alt="logo"/>
          </div>
        </div>
        <a className={styles.menu} href='./about'>关于Pekka</a>
        <a className={styles.menu}>联系我们</a>
        <a className={styles.menu}>隐私条款</a>
        <div className={styles.right}>Pekka ©2021 Created by Pekka</div>
      </Footer>
    </>
  )
}

export default GlobalFooter
