import styles from './style.less'
import React, {FC, useEffect} from 'react'
import {Layout, Card} from 'antd'
import CountUp from 'react-countup'

import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'
import topImg from '@/assets/img/solutions/solution_top_title.png'
import {boardIcon1, boardIcon2, boardIcon3, boardIcon4, boardIcon5} from './content'
import {flowIcon1, flowIcon2, flowIcon3, flowIcon4, flowIconLine} from './content'
import {featureList} from './content'
import {dashboardData} from '../../../public/fakeData'
import {dashboardDataProps} from './model'
import {useSelector} from '@@/plugin-dva/exports'
import {ConnectState, DataModelState} from '@/models/connect'
import {useDispatch} from 'dva'

const {Content} = Layout

const SolutionsPage: FC = () => {
  // const {dashboardData} = useSelector<ConnectState, DataModelState>(state => state.data);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: 'data/fetchSolutionData',
    });
  },[])

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
              <Card className={styles.two_content_board_card}>
                <Card.Grid className={styles.two_content_board_item} hoverable={false}>
                  <img src={boardIcon1} alt='boardIcon'/>
                  <div style={{fontSize: '2.5VW', fontWeight: 'bold', marginTop: '1.6VW', marginBottom: '0.2VW'}}>
                    <CountUp start={dashboardData[0].start} end={dashboardData[0].end}/>
                    <span style={{fontSize: '0.1VW'}}>GHZ</span>
                  </div>
                  <div style={{fontSize: '1VW'}}>我的电脑
                    <span style={{fontSize: '0.5VW', color: '#999999', display: 'block'}}>（4核8线程）</span>
                  </div>
                </Card.Grid>
                <Card.Grid className={styles.two_content_board_item} hoverable={false}
                           style={{backgroundColor: '#FAFAFA'}}>
                  <img src={boardIcon2} alt='boardIcon'/>
                  <div style={{fontSize: '2.5VW', fontWeight: 'bold', marginTop: '1.6VW', marginBottom: '0.2VW'}}>
                    <CountUp start={dashboardData[1].start} end={dashboardData[1].end}/>
                    <span style={{fontSize: '0.1VW'}}>GHZ</span>
                  </div>
                  <div style={{fontSize: '1VW'}}>云渲染特惠服务器
                    <span style={{fontSize: '0.5VW', color: '#999999', display: 'block'}}>（12核24线程）</span>
                  </div>
                </Card.Grid>
                <Card.Grid className={styles.two_content_board_item} hoverable={false}>
                  <img src={boardIcon3} alt='boardIcon'/>
                  <div style={{fontSize: '2.5VW', fontWeight: 'bold', marginTop: '1.6VW', marginBottom: '0.2VW'}}>
                    <CountUp start={dashboardData[2].start} end={dashboardData[2].end}/>
                    <span style={{fontSize: '0.1VW'}}>GHZ</span>
                  </div>
                  <div style={{fontSize: '1VW'}}>云渲染主流服务器
                    <span style={{fontSize: '0.5VW', color: '#999999', display: 'block'}}>（16核32线程）</span>
                  </div>
                </Card.Grid>
                <Card.Grid className={styles.two_content_board_item} hoverable={false}
                           style={{backgroundColor: '#FAFAFA'}}>
                  <img src={boardIcon4} alt='boardIcon'/>
                  <div style={{fontSize: '2.5VW', fontWeight: 'bold', marginTop: '1.6VW', marginBottom: '0.2VW'}}>
                    <CountUp start={dashboardData[3].start} end={dashboardData[3].end}/>
                    <span style={{fontSize: '0.1VW'}}>GHZ</span>
                  </div>
                  <div style={{fontSize: '1VW'}}>云渲染高配服务器
                    <span style={{fontSize: '0.5VW', color: '#999999', display: 'block'}}>（28核56线程）</span>
                  </div>
                </Card.Grid>
                <Card.Grid className={styles.two_content_board_item} hoverable={false}>
                  <img src={boardIcon5} alt='boardIcon'/>
                  <div style={{fontSize: '2.5VW', fontWeight: 'bold', marginTop: '1.6VW', marginBottom: '0.2VW'}}>
                    <CountUp start={dashboardData[4].start} end={dashboardData[4].end}/>
                    <span style={{fontSize: '0.1VW'}}>GHZ</span>
                  </div>
                  <div style={{fontSize: '1VW'}}>云渲染分布式
                    <span style={{fontSize: '0.5VW', color: '#999999', display: 'block'}}>（最高560线程）</span>
                  </div>
                </Card.Grid>
              </Card>
            </div>
          </div>
          <div className={styles.content_three}>
            <div className={styles.content_title}>一步到位，渲染更简单</div>
            <div className={styles.content_subtitle}>可在3ds Max软件中提交渲染文件，系统自动匹配最优节点，客户端操作更直接便捷，渲染简单高效！</div>
            <div className={styles.three_flow_area}>
              <div className={styles.three_flow_area_item}>
                <img src={flowIcon1} alt='flowIcon' style={{width: '8VW'}}/>
                <div style={{fontSize: '1VW', fontWeight: 'bold', margin: '1.6VW 0 0.4VW 0'}}>STEP 1</div>
                <div style={{fontSize: '0.4VW'}}>打开渲染文件，点击“渲云”</div>
              </div>
              <div style={{display: 'inline-block', width: '10%', verticalAlign: 'top', paddingTop: '7VW'}}>
                <img src={flowIconLine} alt='flowIcon' style={{width: '60%'}}/>
              </div>
              <div className={styles.three_flow_area_item}>
                <img src={flowIcon2} alt='flowIcon' style={{width: '8VW'}}/>
                <div style={{fontSize: '1VW', fontWeight: 'bold', margin: '1.6VW 0 0.4VW 0'}}>STEP 2</div>
                <div style={{fontSize: '0.4VW'}}>确认参数，提交渲染任务</div>
              </div>
              <div style={{display: 'inline-block', width: '10%', verticalAlign: 'top', paddingTop: '7VW'}}>
                <img src={flowIconLine} alt='flowIcon' style={{width: '60%'}}/>
              </div>
              <div className={styles.three_flow_area_item}>
                <img src={flowIcon3} alt='flowIcon' style={{width: '8VW'}}/>
                <div style={{fontSize: '1VW', fontWeight: 'bold', margin: '1.6VW 0 0.4VW 0'}}>STEP 3</div>
                <div style={{fontSize: '0.4VW'}}>客户端查看渲染进度</div>
              </div>
              <div style={{display: 'inline-block', width: '10%', verticalAlign: 'top', paddingTop: '7VW'}}>
                <img src={flowIconLine} alt='flowIcon' style={{width: '60%'}}/>
              </div>
              <div className={styles.three_flow_area_item}>
                <img src={flowIcon4} alt='flowIcon' style={{width: '8VW'}}/>
                <div style={{fontSize: '1VW', fontWeight: 'bold', margin: '1.6VW 0 0.4VW 0'}}>STEP 4</div>
                <div style={{fontSize: '0.4VW'}}>渲染完成，查看结果文件</div>
              </div>
            </div>
            <div className={styles.three_feature_area}>
              <Card className={styles.three_feature_card}>
                {featureList.map((item) =>
                  <Card.Grid className={styles.three_feature_item} hoverable={false}>
                    <div className={styles.three_feature_item_img_area}>
                      <img src={item.iconUrl} alt="icon"/>
                    </div>
                    <div>{item.content}</div>
                  </Card.Grid>)}
              </Card>
            </div>
          </div>
        </Content>
        <GlobalFooter/>
      </Layout>
    </div>
  )
}

export default SolutionsPage
