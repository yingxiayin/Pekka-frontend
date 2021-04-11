import styles from './style.less';

import { Layout } from 'antd';
import React, { FC } from 'react';

import logoLight from '@/assets/img/logo_light.png';

const { Footer } = Layout;

const GlobalFooter: FC = () => {
  return (
    <>
      <Footer className={styles.footer}>
        <div className={styles.logo_position}>
          <a href="/home">
            <img className={styles.logo} src={logoLight} alt="logo" />
          </a>
        </div>
        <a className={styles.menu} href="./about">
          关于Pekicr
        </a>
        <a className={styles.menu} href="./about">
          联系我们
        </a>
        <a className={styles.menu} href="./privacy">
          隐私条款
        </a>
        <div className={styles.right}>Pekicr ©2021 Created by Pekicr</div>
      </Footer>
    </>
  );
};

export default GlobalFooter;
