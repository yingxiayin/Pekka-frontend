import styles from './style.less';
import React, { FC, useEffect } from 'react';
import { Layout } from 'antd';

import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import topImg from '@/assets/img/aboutus/about_top_title.png';
import subImg from '@/assets/img/aboutus/about_des_img.png';
import problemImg from '@/assets/img/aboutus/about_bg.png';
import mapImg from '@/assets/img/aboutus/about_map.png';

const { Content } = Layout;

const AboutUsPage: FC = () => {
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
            <div className={styles.content_title}>关于Pekka</div>
            <div className={styles.content_subtitle}>
              Global distributed cloud rendering, computing and date platform
            </div>
            <div className={styles.two_content_area}>
              <div className={styles.two_content_img_area}>
                <img
                  className={styles.two_content_img}
                  src={subImg}
                  alt="subImg"
                />
              </div>
              <div className={styles.two_content_p}>
                <p>
                  Pekka是一个利用全球闲置显卡算力和分布式的云算力，通过开发者创建服务的深度云计算服务平台，使用户可以轻松使用价格低廉且多样化的渲染，边缘计算等服务来满足其商业需求。
                </p>
                <p>
                  其满足于家装、大型3D动画、游戏等基于3D建模的应用内容，开发者可以在Pekka平台开发并创建远程分布式云服务（例如：AR&VR、统计工具、室内设计工具等）供其他用户使用。
                </p>
              </div>
            </div>
            <div className={styles.two_problem_area}>
              <div className={styles.two_problem_title_position}>
                <div className={styles.two_problem_title}>现存问题</div>
                <div className={styles.two_problem_subtitle}>
                  尚未有一个分布式云渲染计算数据平台能有效连接需求方和供应方
                </div>
              </div>
              <div className={styles.two_problem_img_position}>
                <img
                  className={styles.two_problem_img}
                  src={problemImg}
                  alt="problemImg"
                />
              </div>
              <div className={styles.two_problem_content_1}>
                <p>
                  随着VR，大型游戏，影视公司的需求增长，很多企业越来越难承受设备采购的昂贵价格。同时它们对种类丰富的计算服务有很强烈的需求。
                </p>
                <p>
                  *例如媒体转码服务，可供开发人员和企业将媒体文件从其源文件格式转换(或“转码”)为可在智能手机，平板电脑和PC等设备上播放的文件。
                </p>
              </div>
              <div className={styles.two_problem_content_2}>
                <p>
                  世界上每天有68%的计算机资源未被使用。开发者可以利用这些闲置计算机以较低成本开发和部署种类丰富的分布式计算服务。作为创新型云计算及人工智能科技算法平台，致力于为视觉行业的计算需求提供云端化解决方案。分布式大数据平台，目前拥有高性能物理计算节点6890个，并不断在增加。可为电脑动画、影视特效、家装建筑设计可视化、游戏、VR以及商业广告提供高效、便捷、个性化的云渲染服务，也可为人工智能、科学计算、基因测序等提供计算支持。
                </p>
              </div>
            </div>
          </div>
          <div className={styles.content_three}>
            <div className={styles.content_title}>联系我们</div>
            <div className={styles.map_area}>
              <img src={mapImg} alt="mapImg" />
            </div>
          </div>
        </Content>
        <GlobalFooter />
      </Layout>
    </div>
  );
};

export default AboutUsPage;
