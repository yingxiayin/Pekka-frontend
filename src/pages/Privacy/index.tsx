import styles from './style.less';
import React, { FC, useEffect } from 'react';
import { Layout } from 'antd';

import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import topImg from '@/assets/img/privacy/privacy_top_title.png';

const { Content } = Layout;

const PrivacyPage: FC = () => {
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
            <div className={styles.content_title}>隐私条款</div>
            <div className={styles.content_subtitle}>Privacy Policy</div>
            <div className={styles.two_content_area}>
              <h3>基本条款</h3>
              <p>
                Pekicr非常重视对您的个人隐私保护，有时候我们需要某些信息才能为您提供您请求的服务，本隐私政策解释了这些情况下的数据收集和使用情况。
              </p>
              <p>
                本政策适用于Pekicr的所有相关服务，随着Pekicr服务范围的扩大，隐私政策的内容可由Pekicr随时更新，且毋须另行通知。
              </p>
              <p>更新后的隐私政策一旦在网页上公布即有效代替原来的隐私政策。</p>
              <h3>我们收集哪些信息</h3>
              <p>
                通常，您能在匿名的状态下访问Pekicr并获取信息。当我们需要能识别您的个人信息或者可以与您联系的信息时，我们会征求您的同意。
              </p>
              <p>
                通常，在您注册Pekicr或申请开通新的功能时，我们可能收集这些信息：
              </p>
              <p>姓名、E-mail地址、住址和电话号码，并征求您的确认。</p>
              <h3>关于您的个人信息</h3>
              <p>Pekicr严格保护您个人信息的安全。</p>
              <p>
                我们使用各种安全技术和程序来保护您的个人信息不被未经授权的访问、使用或泄漏。
              </p>
              <p>
                Pekicr会在法律要求或符合Pekicr的相关服务条款、软件许可使用协议约定的情况下透露您的个人信息，或者有充分理由相信必须这样做才能：
              </p>
              <p>
                (a)满足法律或行政法规的明文规定，或者符合Pekicr站适用的法律程序；
              </p>
              <p>(b)符合Pekicr相关服务条款、软件许可使用协议的约定；</p>
              <p>(c)保护Pekicr的权利或财产；</p>
              <p>
                (d)在紧急情况下保护Pekicr员工、Pekicr产品或服务的用户或大众的个人安全；
              </p>
              <p>
                Pekicr不会未经您的允许将这些信息与第三方共享，本政策已经列出的上述情况除外。
              </p>
              <h3>Cookie的使用</h3>
              <p>
                使用 Cookie 能帮助您实现您的联机体验的个性化，您可以接受或拒绝
                Cookie ，大多数 Web 浏览器会自动接受
                Cookie，但您通常可根据自己的需要来修改浏览器的设置以拒绝
                Cookie。
              </p>
              <p>
                Pekicr有时会使用 Cookie
                以便知道哪些网站受欢迎，使您在访问Pekicr时能得到更好的服务。Cookie不会跟踪个人信息。
              </p>
              <p>来自Pekicr的 Cookie 只能被Pekicr读取。</p>
              <p>
                如果您的浏览器被设置为拒绝
                Cookie，您仍然能够访问Pekicr的大多数网页。
              </p>
            </div>
          </div>
        </Content>
        <GlobalFooter />
      </Layout>
    </div>
  );
};

export default PrivacyPage;
