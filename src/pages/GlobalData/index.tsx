import styles from './style.less';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'dva';
import { Layout, Card, Button } from 'antd';
import moment from 'moment';

import { ConnectState } from '@/models/connect';
import { UseDataModelState } from '@/models/connect';

import LineTable from '@/components/LineTable';
import PieTable from '@/components/PieTable';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import topImg from '@/assets/img/globaldata/data_top_title.png';
import mapImg from '@/assets/img/globaldata/data_map_img.png';
import mapPointImg from '@/assets/img/globaldata/data_map_img.svg';
import { dataTableProps, lineDataType } from './model';

import { lineOneData, lineTwoData } from '../../../public/fakeData';
import { useSelector } from '@@/plugin-dva/exports';

const { Content } = Layout;

const GlobalDataPage: FC = () => {
  const dispatch = useDispatch();
  const { listTableData, hashLineData, nodeLineData, proportion } = useSelector<
    ConnectState,
    UseDataModelState
  >((state) => state.useData);
  const [lineOne, handleChangeLineOneType] = useState<lineDataType[]>([]);
  const [lineTwo, handleChangeLineTwoType] = useState<lineDataType[]>([]);

  // 获取初始数据
  useEffect(() => {
    dispatch({
      type: 'useData/fetchGlobalData',
      payload: {},
    });
  }, []);

  useEffect(() => {
    handleChangeLineOneType(hashLineData);
  }, [hashLineData]);

  useEffect(() => {
    handleChangeLineTwoType(nodeLineData);
  }, [nodeLineData]);

  const dataTableTitle: dataTableProps[] = [
    { title: '节点用户', name: 'node_user' },
    {
      title: '接入节点数量',
      name: 'node_amount',
    },
    {
      title: '当前算力 GH/s',
      name: 'hashrate',
    },
    {
      title: '服务商',
      name: 'provider',
    },
    {
      title: '粉丝群',
      name: 'fan',
    },
    {
      title: '访问量',
      name: 'visit',
    },
  ];

  const [nowTime, setUpdateNowTime] = useState<number>(0);

  function getTime() {
    setUpdateNowTime(moment().get('minutes'));
  }

  window.setInterval(getTime, 1000);

  useEffect(() => {
    console.log(nowTime);
    dispatch({
      type: 'useData/fetchGlobalData',
      payload: {},
    });
  }, [nowTime]);

  const handleChangeOneType = (key: string) => {
    console.log(key);
    switch (key) {
      case 'week': {
        handleChangeLineOneType(hashLineData.splice(-7));
        break;
      }
      case 'month': {
        handleChangeLineOneType(hashLineData.splice(-30));
        break;
      }
      case 'year': {
        handleChangeLineOneType(hashLineData);
        break;
      }
    }
  };

  const handleChangeTwoType = (key: string) => {
    console.log(key);
    switch (key) {
      case 'week': {
        handleChangeLineTwoType(nodeLineData.splice(-7));
        break;
      }
      case 'month': {
        handleChangeLineTwoType(nodeLineData.splice(-30));
        break;
      }
      case 'year': {
        handleChangeLineTwoType(nodeLineData);
        break;
      }
    }
  };

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
            <div className={styles.content_title}>
              Pekicr分布式云渲染全球节点实时动态数据
            </div>
            <div className={styles.content_subtitle}>
              用全球分布式去中心化区块链技术改变云渲染产业，让世界更高效
            </div>
            <div className={styles.two_data_table_area}>
              <Card className={styles.two_card}>
                {dataTableTitle.map((item) => (
                  <Card.Grid className={styles.two_card_item} hoverable={false}>
                    <div className={styles.two_card_num}>
                      {listTableData[`${item.name}`]}
                    </div>
                    <div className={styles.two_card_title}>{item.title}</div>
                  </Card.Grid>
                ))}
              </Card>
            </div>
          </div>
          <div className={styles.content_three}>
            <div className={styles.content_three_title}>实时算力趋势图</div>
            <div className={styles.three_data_table_area}>
              <div className={styles.table_button_area}>
                <Button
                  type="default"
                  size="small"
                  onClick={() => handleChangeOneType('week')}
                >
                  7天
                </Button>
                <Button
                  type="default"
                  size="small"
                  onClick={() => handleChangeOneType('month')}
                >
                  30天
                </Button>
                <Button
                  type="default"
                  size="small"
                  onClick={() => handleChangeOneType('year')}
                >
                  1年
                </Button>
              </div>
              <LineTable dataList={lineOne} unit={'GH/s'} />
            </div>
          </div>
          <div className={styles.content_four}>
            <div className={styles.content_four_title}>实时接入节点数</div>
            <div className={styles.four_data_table_area}>
              <div className={styles.table_button_area}>
                <Button
                  type="default"
                  size="small"
                  onClick={() => handleChangeTwoType('week')}
                >
                  7天
                </Button>
                <Button
                  type="default"
                  size="small"
                  onClick={() => handleChangeTwoType('month')}
                >
                  30天
                </Button>
                <Button
                  type="default"
                  size="small"
                  onClick={() => handleChangeTwoType('year')}
                >
                  1年
                </Button>
              </div>
              <LineTable dataList={lineTwo} unit={'个'} />
            </div>
          </div>
          <div className={styles.content_five}>
            <div className={styles.content_five_title}>实时接入节点数</div>
            <div className={styles.five_data_table_area}>
              <PieTable dataList={proportion} />
            </div>
          </div>
          <div className={styles.content_six}>
            <div className={styles.content_title}>
              共享全球算力，开启云渲染服务
            </div>
            <div className={styles.content_subtitle}>
              Pekicr节点算力来自全球各地，实现海量节点拓展，提供全球性急速渲染服务，用户遍及美洲、亚洲、欧洲、中东等区域，为全球用户带来极致非凡的云渲染解决方案服务。
            </div>
            <div className={styles.six_map_table_area}>
              <embed src={mapPointImg} />
              <img src={mapImg} alt="mapImg" />
            </div>
          </div>
        </Content>
        <GlobalFooter />
      </Layout>
    </div>
  );
};

export default GlobalDataPage;
