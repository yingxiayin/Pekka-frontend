import styles from './style.less'
import React, {FC, useEffect} from 'react'
import {Layout, Card, List, Button, Row} from 'antd'

import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'
import topImg from '@/assets/img/productvalues/value_top_title.png'
import modelImg from '@/assets/img/productvalues/value_model.png'

const {Content} = Layout

const ProductValuesPage: FC = () => {
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
            <div className={styles.content_title}>Pekka全球分布式云渲染计算数据平台</div>
            <div className={styles.content_subtitle}>Global distributed cloud rendering, computing and date platform
            </div>
            <div className={styles.two_content_area}>
              <div className={styles.two_content_p}>一个利用全球闲置显卡算力和分布式的云算力，通过</div>
              <div className={styles.two_content_p}>开发者创建服务的深度云计算服务平台，使用户可以轻松使用廉价且多样化</div>
              <div className={styles.two_content_p}>的渲染，边缘计算等服务来满足其商业需求</div>
            </div>
          </div>
          <div className={styles.content_three}>
            <div className={styles.content_three_title}>Pekka将通过区块链把终端用户、技术开发者、算力提供商和营销者统一在一个生态系统中，并扮演好各自的角色</div>
            <div className={styles.three_model_area}>
              <img className={styles.img_model} src={modelImg} alt="modelImg"/>
            </div>
          </div>
        </Content>
        <GlobalFooter/>
      </Layout>
    </div>
  )
}

export default ProductValuesPage
