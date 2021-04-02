import styles from './style.less'
import React, {FC, useEffect} from 'react'
import {Layout, Card} from 'antd'

import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'
import topImg from '@/assets/img/cases/case_top_title.png'

const {Content} = Layout

const CasesPage: FC = () => {
  return (
    <div>
      <Layout className={styles.layout}>
        <GlobalHeader/>
        <Content>
          <div className={styles.content_one}>
            <div className={styles.top_bg_position}>
              <img className={styles.img_top} src={topImg} alt="topImg"/>
            </div>
          </div>
          <div className={styles.content_two}>
            <div className={styles.content_title}>Pekka成功案例展示</div>
            <div className={styles.content_subtitle}>Global distributed cloud rendering, computing and date platform</div>
            <div className={styles.two_content_big_area}>
              <video/>
              <div>
                <div>Pekka成功案例展示</div>
                <div>Pekka云渲染提供给客户简单便捷的操作方式，数倍于单机版本的渲染效果，同时可以将全球各地的GPU有效的利用起来</div>
              </div>
            </div>
            <div className={styles.two_content_small_area}>
              <Card className={styles.two_content_small_area_card}>
                <Card.Grid className={styles.two_content_small_area_item}><div>视频1</div></Card.Grid>
                <Card.Grid className={styles.two_content_small_area_item}><div>视频1</div></Card.Grid>
                <Card.Grid className={styles.two_content_small_area_item}><div>视频1</div></Card.Grid>
              </Card>
            </div>
          </div>
        </Content>
        <GlobalFooter/>
      </Layout>
    </div>
  )
}

export default CasesPage
