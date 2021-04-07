import styles from './style.less';
import React, { FC, useEffect } from 'react';
import { Layout } from 'antd';

import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import topImg from '@/assets/img/history/history_top_title.png';
import peopleImg from '@/assets/img/history/history_people_img.png';
import roadImg from '@/assets/img/history/history_road_img.svg';

const { Content } = Layout;

const HistoryPage: FC = () => {
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
            <div className={styles.content_title}>Pekicr发展历程</div>
            <div className={styles.content_subtitle}>
              Global distributed cloud rendering, computing and date platform
            </div>
            <div className={styles.two_content_area}>
              <embed className={styles.two_content_img} src={roadImg} />
            </div>
          </div>
          <div className={styles.content_three}>
            <div className={styles.content_title}>团队介绍</div>
            <div className={styles.three_content_area}>
              <div className={styles.three_people_item}>
                <div className={styles.three_people_item_bg} />
                <div className={styles.three_people_item_area}>
                  <img
                    className={styles.three_people_item_img}
                    src={peopleImg}
                    alt="peopleImg"
                  />
                  <div className={styles.three_people_item_name}>
                    Mike Williams
                    <span
                      style={{
                        fontWeight: 'normal',
                        color: '#666666',
                        display: 'block',
                      }}
                    >
                      CEO
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.three_people_item}>
                <div className={styles.three_people_item_bg} />
                <div className={styles.three_people_item_area}>
                  <img
                    className={styles.three_people_item_img}
                    src={peopleImg}
                    alt="peopleImg"
                  />
                  <div className={styles.three_people_item_name}>
                    Mike Williams
                    <span
                      style={{
                        fontWeight: 'normal',
                        color: '#666666',
                        display: 'block',
                      }}
                    >
                      CEO
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.three_people_item}>
                <div className={styles.three_people_item_bg} />
                <div className={styles.three_people_item_area}>
                  <img
                    className={styles.three_people_item_img}
                    src={peopleImg}
                    alt="peopleImg"
                  />
                  <div className={styles.three_people_item_name}>
                    Mike Williams
                    <span
                      style={{
                        fontWeight: 'normal',
                        color: '#666666',
                        display: 'block',
                      }}
                    >
                      CEO
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
        <GlobalFooter />
      </Layout>
    </div>
  );
};

export default HistoryPage;
