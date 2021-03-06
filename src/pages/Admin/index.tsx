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

import logoDark from '@/assets/img/logo_dark.png';
import { dataProp, pieListProp, pieOneProp } from '@/pages/Admin/model';

import { ConnectState, DataProcessModelState } from '@/models/connect';

const { Header, Content } = Layout;
const listForm1: { key: number; name: string; title: string; exp: string }[] = [
  { key: 1, name: 'nodeUser', title: '节点用户', exp: '每日增加范围' },
  { key: 2, name: 'nodeAmount', title: '接入节点数量', exp: '每日增加范围' },
  { key: 3, name: 'hashrate', title: '当前算力', exp: '每日增加范围' },
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

  // 获取初始数据
  useEffect(() => {
    console.log('获取数据');
    dispatch({
      type: 'dataProcess/fetchConfig',
      payload: {},
    });
  }, []);

  const { listAllConfigData } = useSelector<
    ConnectState,
    DataProcessModelState
  >((state) => state.dataProcess);

  console.log(listAllConfigData);

  const initPieOneData: pieOneProp = {
    name: ' ',
    proportion: 0,
  };

  const [listAllConfigNewData, handleChangeAllListData] = useState<dataProp>(
    listAllConfigData,
  );
  const [pieOneData, handleChangePieOneData] = useState<pieOneProp>(
    initPieOneData,
  );
  const [pieListData, handleChangePieListData] = useState<pieListProp>({
    proportion: listAllConfigData.proportion,
  });
  const [isLogin, changeLoginStatus] = useState<boolean>(true);

  useEffect(() => {
    console.log('本地数据更新');
    handleChangeAllListData(listAllConfigData);
    handleChangePieListData({ proportion: listAllConfigData.proportion });
  }, [listAllConfigData]);

  useEffect(() => {
    handleChangeAllListData((listAllConfigNewData) => {
      // @ts-ignore
      listAllConfigNewData.proportion = pieListData.proportion;
      return { ...listAllConfigNewData };
    });
  }, [pieListData]);

  const handleGlobalInputChange = (
    name: string,
    alt: string,
    value: number,
  ) => {
    console.log(name, alt, value);
    handleChangeAllListData((listAllConfigNewData) => {
      // @ts-ignore
      listAllConfigNewData[`${name}`][`${alt}`] = value;
      return { ...listAllConfigNewData };
    });
    console.log(listAllConfigNewData);
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

  const handleDeletePieListData = (name: string, p: number) => {
    handleChangePieListData((pieListData) => {
      let i = 0;
      while (i < pieListData.proportion.length) {
        if (
          pieListData.proportion[i].name == name &&
          pieListData.proportion[i].proportion == p
        ) {
          pieListData.proportion[
            pieListData.proportion.length - 1
          ].proportion = Number(
            (
              pieListData.proportion[pieListData.proportion.length - 1]
                .proportion + pieListData.proportion[i].proportion
            ).toFixed(2),
          );
          pieListData.proportion.splice(i, 1);
        }
        i++;
      }
      return { ...pieListData };
    });
  };

  const handleSolutionInputChange = (
    name: string,
    alt: string,
    value: number,
  ) => {
    console.log(name, alt, value);
    handleChangeAllListData((listAllConfigNewData) => {
      // @ts-ignore
      listAllConfigNewData[`${name}`][`${alt}`] = value;
      return { ...listAllConfigNewData };
    });
    console.log(listAllConfigNewData);
  };

  const handleAllDataChangeBtn = () => {
    console.log('change data');
    dispatch({
      type: 'dataProcess/changeConfig',
      payload: { ...listAllConfigNewData },
    });
    dispatch({
      type: 'dataProcess/fetchConfig',
      payload: {},
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
                              value={listAllConfigData[`${item.name}`].base}
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
                              value={listAllConfigData[`${item.name}`].min}
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
                              value={listAllConfigData[`${item.name}`].max}
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
                          actions={[
                            item.name !== '其他' ? (
                              <a
                                onClick={() =>
                                  handleDeletePieListData(
                                    item.name,
                                    item.proportion,
                                  )
                                }
                              >
                                删除
                              </a>
                            ) : (
                              ''
                            ),
                          ]}
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
                              value={listAllConfigData[`${item.name}`].start}
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
                              value={listAllConfigData[`${item.name}`].end}
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
