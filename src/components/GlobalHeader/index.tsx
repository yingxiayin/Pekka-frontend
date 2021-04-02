import React, {FC, useEffect, useState} from 'react'

import styles from './style.less'

import {Layout, Menu} from 'antd'
import logoDark from '@/assets/img/logo_dark.png'
import logoLight from '@/assets/img/logo_light.png'

const {Header} = Layout

const GlobalHeader: FC = () => {

  const [scrollTop, setScrollTop] = useState<number>(0)
  const [isWindowScroll, setWindowScroll] = useState<boolean>(false)
  const handleScroll = () => {
    setScrollTop(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop)
  }

  useEffect(() => {
    if (scrollTop !== 0) {
      setWindowScroll(true)
    } else if (scrollTop === 0) {
      setWindowScroll(false)
    }
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <>
      {isWindowScroll ? (
        <Header className={styles.header_hover}>
          <div className={styles.logo_position}>
            <div className={styles.logo_area}>
              <img className={styles.logo} src={logoDark} alt="logo"/>
            </div>
          </div>
          <a className={styles.menu_hover} href="/history">发展历程</a>
          <a className={styles.menu_hover} href="/cases">成功案例</a>
          <a className={styles.menu_hover} href="/solutions">解决方案</a>
          <a className={styles.menu_hover} href="/values">产品理念</a>
          <a className={styles.menu_hover} href="/data">全球数据</a>
          <a className={styles.menu_hover} href="/home">首页</a>
        </Header>
      ) : (
        <Header className={styles.header}>
          <div className={styles.logo_position}>
            <div className={styles.logo_area}>
              <img className={styles.logo} src={logoLight} alt="logo"/>
            </div>
          </div>
          <a className={styles.menu} href="/history">发展历程</a>
          <a className={styles.menu} href="/cases">成功案例</a>
          <a className={styles.menu} href="/solutions">解决方案</a>
          <a className={styles.menu} href="/values">产品理念</a>
          <a className={styles.menu} href="/data">全球数据</a>
          <a className={styles.menu} href="/home">首页</a>
        </Header>
      )}

    </>
  )
}

export default GlobalHeader
