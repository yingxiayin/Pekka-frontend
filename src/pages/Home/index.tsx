import styles from './style.less'
import React, {FC, useEffect} from 'react'
import {Layout, Card, List, Button, Row} from 'antd'

import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'

import {topImg, structureImg, featureList, softwareList} from './content'

const {Content} = Layout

const HomePage: FC = () => {
  return (
    <div>
      <Layout className={styles.layout}>
        <GlobalHeader/>
        <Content>
          <div className={styles.content_one}>
            <div className={styles.one_button_position}>
              <div className={styles.one_subtitle}>全球领先的高性能渲染平台</div>
              <div className={styles.one_title}>极速、极简、极致</div>
              <Button ghost={true} shape="round" className={styles.one_button}>立即体验</Button>
            </div>
            <div className={styles.top_bg_position}>
              <img className={styles.img_top} src={topImg} alt="topImg"/>
            </div>
          </div>
          <div className={styles.content_two}>
            <div className={styles.content_title}>Pekka分布式云渲染特色</div>
            <div className={styles.content_subtitle}>专注分布式云渲染服务,提升服务品质</div>
            <div className={styles.two_card_area}>
              <Card className={styles.two_card} bordered={false}>
                {featureList.map((item) =>
                  <Card.Grid hoverable={false} className={styles.card_item}>
                    <div className={styles.two_card_img}>
                      <img src={item.iconUrl} alt='icon-img'/>
                    </div>
                    <div className={styles.two_card_h1}>{item.title}</div>
                    <div className={styles.two_card_p}>{item.explain}</div>
                  </Card.Grid>
                )}
              </Card>
            </div>
          </div>
          <div className={styles.content_three}>
            <div className={styles.content_title}>云渲染计算数据平台示意图</div>
            <div className={styles.content_subtitle}>大量的边缘GPU渲染服务器可通过分布式计算进行充分利用</div>
            <img className={styles.img_structure} src={structureImg} alt="img-structure"/>
          </div>
          <div className={styles.content_four}>
            <div className={styles.content_title}>兼容大部分主流软件和插件</div>
            <div className={styles.content_subtitle}>大量的边缘GPU渲染服务器可通过分布式计算进行充分利用</div>
            <List
              grid={{gutter: 16, column: 6}}
              className={styles.four_list}
              dataSource={softwareList}
              renderItem={item => (
                <List.Item>
                  <div className={styles.list_card_item}>
                    <div className={styles.list_card_item_img}>
                      <img src={item.iconUrl} alt='icon-img'/>
                    </div>
                    <div className={styles.list_card_name}>{item.name}</div>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </Content>
        <GlobalFooter/>
      </Layout>
    </div>
  )
}

export default HomePage
