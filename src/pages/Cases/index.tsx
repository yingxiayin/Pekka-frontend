import styles from './style.less';
import React, { FC, useEffect } from 'react';
import { Layout, Card } from 'antd';

import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import topImg from '@/assets/img/cases/case_top_title.png';
import v1 from '@/assets/img/cases/case_v_1.png';
import v2 from '@/assets/img/cases/case_v_2.png';
import v3 from '@/assets/img/cases/case_v_3.png';
import v4 from '@/assets/img/cases/case_v_4.png';

const { Content } = Layout;

const CasesPage: FC = () => {
  return (
    <div>
      <Layout className={styles.layout}>
        <GlobalHeader />
        <Content>
          <div className={styles.content_one}>
            <div className={styles.top_bg_position}>
              <img className={styles.img_top} src={topImg} alt="topImg" />
            </div>
          </div>
          <div className={styles.content_two}>
            <div className={styles.content_title}>Pekka成功案例展示</div>
            <div className={styles.content_subtitle}>
              Global distributed cloud rendering, computing and date platform
            </div>
            <div className={styles.two_content_big_area}>
              <div className={styles.two_content_big_video}>
                <img src={v1} alt="v1" />
              </div>
              <div className={styles.two_content_big_text}>
                <div className={styles.h}>Pekka成功案例展示</div>
                <div className={styles.p}>
                  Pekka云渲染提供给客户简单便捷的操作方式，数倍于单机版本的渲染效果，同时可以将全球各地的GPU有效的利用起来
                </div>
              </div>
            </div>
            <div className={styles.two_content_small_area}>
              <Card className={styles.two_content_small_area_card}>
                <Card.Grid className={styles.two_content_small_area_item}>
                  <div className={styles.two_content_small_area_div}>
                    <img src={v2} alt="v2" />
                    电影渲染效果
                  </div>
                </Card.Grid>
                <Card.Grid className={styles.two_content_small_area_item}>
                  <div className={styles.two_content_small_area_div}>
                    <img src={v3} alt="v3" />
                    装修渲染效果
                  </div>
                </Card.Grid>
                <Card.Grid className={styles.two_content_small_area_item}>
                  <div className={styles.two_content_small_area_div}>
                    <img src={v4} alt="v4" />
                    游戏渲染效果
                  </div>
                </Card.Grid>
              </Card>
            </div>
          </div>
        </Content>
        <GlobalFooter />
      </Layout>
    </div>
  );
};

export default CasesPage;
