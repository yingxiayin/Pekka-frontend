import styles from './style.less';
import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'dva';
import {
  Layout,
  Button,
  Row,
  Col,
  Form,
  Input,
  Table,
  message,
  List,
} from 'antd';

const { Header } = Layout;

import logoDark from '@/assets/img/logo_dark.png';
import { dataProp, pieListProp, pieOneProp } from '@/pages/Admin/model';

import { ConnectState } from '@/models/connect';

const { Content } = Layout;

const listForm1: { key: number; name: string; title: string; exp: string }[] = [
  { key: 1, name: 'nodeUser', title: '节点用户', exp: '每日增加范围' },
  { key: 2, name: 'nodeAmount', title: '接入节点数量', exp: '每日增加范围' },
  { key: 3, name: 'hashrate', title: '当前算力', exp: '每小时增加范围' },
  { key: 4, name: 'provider', title: '服务商', exp: '每周增加范围' },
  { key: 5, name: 'fan', title: '粉丝群', exp: '每日增加范围' },
  { key: 6, name: 'visit', title: '访问量', exp: '每分钟增加范围' },
];
const listForm2: { key: number; name: string; title: string }[] = [
  { key: 1, name: 'pc', title: '我的电脑' },
  { key: 2, name: 'low', title: '云渲染特惠服务器' },
  { key: 3, name: 'mid', title: '云渲染主流服务器' },
  { key: 4, name: 'high', title: '云端渲染高配服务器' },
  { key: 5, name: 'distribute', title: '云端渲染分布式' },
];

const AdminPage: FC = () => {
  const dispatch = useDispatch();

  // 获取最新配置
  const initListData: dataProp = {
    nodeUser: {
      base: 0,
      min: 0,
      max: 0,
    },
    nodeAmount: {
      base: 0,
      min: 0,
      max: 0,
    },
    hashrate: {
      base: 0,
      min: 0,
      max: 0,
    },
    provider: {
      base: 0,
      min: 0,
      max: 0,
    },
    fan: {
      base: 0,
      min: 0,
      max: 0,
    },
    visit: {
      base: 0,
      min: 0,
      max: 0,
    },
    proportion: [
      {
        name: '其他',
        proportion: 1,
      },
    ],
    pc: {
      start: 0,
      end: 0,
    },
    low: {
      start: 0,
      end: 0,
    },
    mid: {
      start: 0,
      end: 0,
    },
    high: {
      start: 0,
      end: 0,
    },
    distribute: {
      start: 0,
      end: 0,
    },
  };

  const initPieOneData: pieOneProp = {
    name: ' ',
    proportion: 0,
  };

  const [listAllData, handleChangeAllListData] = useState<dataProp>(
    initListData,
  );
  const [pieOneData, handleChangePieOneData] = useState<pieOneProp>(
    initPieOneData,
  );
  const [pieListData, handleChangePieListData] = useState<pieListProp>({
    proportion: initListData.proportion,
  });
  const [isLogin, changeLoginStatus] = useState<boolean>(true);

  useEffect(() => {
    handleChangeAllListData((listAllData) => {
      // @ts-ignore
      listAllData.proportion = pieListData.proportion;
      return { ...listAllData };
    });
    console.log(listAllData);
  }, [pieListData]);

  const handleGlobalInputChange = (
    name: string,
    alt: string,
    value: number,
  ) => {
    console.log(name, alt, value);
    handleChangeAllListData((listAllData) => {
      // @ts-ignore
      listAllData[`${name}`][`${alt}`] = value;
      return { ...listAllData };
    });
    console.log(listAllData);
  };

  const handleGlobalPieChange = (form: pieOneProp) => {
    let { name, proportion } = form;
    handleChangePieOneData((pieOneData) => {
      pieOneData.name = name;
      pieOneData.proportion = Number(proportion);
      return { ...pieOneData };
    });
    console.log(pieOneData);
  };

  const handlePieBtnClick = () => {
    handleChangePieListData((pieListData) => {
      if (
        pieOneData.proportion !== 0 &&
        pieListData.proportion.slice(-1)[0].proportion -
          pieOneData.proportion >=
          0
      ) {
        pieListData.proportion.unshift(pieOneData);
        pieListData.proportion.slice(-1)[0].proportion = Number(
          (
            pieListData.proportion.slice(-1)[0].proportion -
            pieOneData.proportion
          ).toFixed(2),
        );
        handleChangePieOneData(initPieOneData);
      } else {
        message.error('数据重复或数据有误（大于1）');
      }
      return { ...pieListData };
    });
    console.log(pieListData.proportion);
  };

  // 删除一项
  /**
  const handleDeletePieListData = (name: string) => {
    handleChangePieListData((pieListData) => {
      let i = 0
      while (i < pieListData.proportion.length) {
        if (pieListData.proportion[i].name == name && name !== '其他') {
          pieListData.proportion.slice(-1)[0].proportion = Number((pieListData.proportion.slice(-1)[0].proportion + pieListData.proportion[i].proportion).toFixed(2))
          pieListData.proportion = pieListData.proportion.splice(i, 1)
        }
        i++
      }
      return {...pieListData}
    })
  }
  **/

  const handleSolutionInputChange = (
    name: string,
    alt: string,
    value: number,
  ) => {
    console.log(name, alt, value);
    handleChangeAllListData((listAllData) => {
      // @ts-ignore
      listAllData[`${name}`][`${alt}`] = value;
      return { ...listAllData };
    });
    console.log(listAllData);
  };

  const handleAllDataChangeBtn = () => {
    dispatch({
      type: 'dataProcess/changeConfig',
      payload: { ...listAllData },
    });
  };

  return (
    <div>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <div className={styles.logo_position}>
            <a href="/home">
              <img className={styles.logo} src={logoDark} alt="logo" />
            </a>
          </div>
        </Header>
        <Content>
          {isLogin ? (
            <>
              <div className={styles.content_one}>
                <div className={styles.content_title}>全球数据参数配置</div>
                <div className={styles.content_one_form1_area}>
                  <Form className={styles.content_one_form1}>
                    {listForm1.map((item) => (
                      <Row>
                        <Col span={4}>{item.title}</Col>
                        <Col span={2}>
                          <span>基础值</span>
                        </Col>
                        <Col span={6}>
                          <Form.Item>
                            <Input
                              type={'number'}
                              alt="base"
                              onChange={(event) =>
                                handleGlobalInputChange(
                                  item.name,
                                  event.target.alt,
                                  event.target.valueAsNumber,
                                )
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={4}>
                          <span className={styles.exp1}>{item.exp}</span>
                        </Col>
                        <Col span={3}>
                          <Form.Item>
                            <Input
                              type={'number'}
                              alt="min"
                              onChange={(event) =>
                                handleGlobalInputChange(
                                  item.name,
                                  event.target.alt,
                                  event.target.valueAsNumber,
                                )
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={2}>
                          <span className={styles.exp2}>到</span>
                        </Col>
                        <Col span={3}>
                          <Form.Item>
                            <Input
                              type={'number'}
                              alt="max"
                              onChange={(event) =>
                                handleGlobalInputChange(
                                  item.name,
                                  event.target.alt,
                                  event.target.valueAsNumber,
                                )
                              }
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                    ))}
                  </Form>
                </div>
                <div className={styles.content_one_table_area}>
                  <div className={styles.content_subtitle}>
                    云渲染节点分部比例
                  </div>
                  <div>
                    <Form
                      layout="inline"
                      name="newPieData"
                      onValuesChange={(changedValues, allValues) =>
                        handleGlobalPieChange(allValues)
                      }
                    >
                      <Form.Item name="name" label="节点名称">
                        <Input />
                      </Form.Item>
                      <Form.Item name="proportion" label="百分比">
                        <Input type={'number'} placeholder="占比总和需小于1" />
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary" onClick={handlePieBtnClick}>
                          新增
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                  <div className={styles.content_one_table}>
                    <List
                      itemLayout="horizontal"
                      dataSource={pieListData.proportion}
                      renderItem={(item) => (
                        <List.Item
                        // actions={[<a onClick={() => handleDeletePieListData(item.name)}>删除</a>]}
                        >
                          <List.Item.Meta title={item.name} />
                          <div>{item.proportion}</div>
                        </List.Item>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.content_two}>
                <div className={styles.content_title}>解决方案参数配置</div>
                <div className={styles.content_one_form2_area}>
                  <Form className={styles.content_one_form2}>
                    {listForm2.map((item) => (
                      <Row>
                        <Col span={6}>{item.title}</Col>
                        <Col span={3}>
                          <span className={styles.exp2}>起始值</span>
                        </Col>
                        <Col span={6}>
                          <Form.Item>
                            <Input
                              type={'number'}
                              alt="start"
                              onChange={(event) =>
                                handleSolutionInputChange(
                                  item.name,
                                  event.target.alt,
                                  event.target.valueAsNumber,
                                )
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={3}>
                          <span className={styles.exp2}>终止值</span>
                        </Col>
                        <Col span={6}>
                          <Form.Item>
                            <Input
                              type={'number'}
                              alt="end"
                              onChange={(event) =>
                                handleSolutionInputChange(
                                  item.name,
                                  event.target.alt,
                                  event.target.valueAsNumber,
                                )
                              }
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                    ))}
                  </Form>
                </div>
              </div>
              <div className={styles.content_three}>
                <Button type={'primary'} onClick={handleAllDataChangeBtn}>
                  提交
                </Button>
              </div>
            </>
          ) : (
            <div>登录</div>
          )}
        </Content>
      </Layout>
    </div>
  );
};

export default AdminPage;
