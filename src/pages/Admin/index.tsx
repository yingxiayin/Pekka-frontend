import styles from './style.less';
import React, { FC, useEffect, useState } from 'react';
import { Layout, Button, Row, Col, Form, Input, Table } from 'antd';

const { Header } = Layout;

import logoDark from '@/assets/img/logo_dark.png';
import {
  dataTableProps,
  lineDataGroupProps,
  pieDataType,
} from '@/pages/GlobalData/model';
import {
  listData,
  lineOneData,
  lineTwoData,
  pieData,
} from '../../../public/fakeData';
import { lineDataType } from '@/pages/GlobalData/model';

const { Content } = Layout;

const columns = [
  {
    title: '节点名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '占比',
    dataIndex: 'value',
    key: 'value',
  },
];

const AdminPage: FC = () => {
  const [listData, handleChangeListData] = useState<number[]>([]);

  const listForm1: { title: string; exp: string }[] = [
    { title: '节点用户', exp: '每日增加范围' },
    { title: '接入节点数量', exp: '每日增加范围' },
    { title: '当前算力', exp: '每小时增加范围' },
    { title: '服务商', exp: '每周增加范围' },
    { title: '粉丝群', exp: '每日增加范围' },
    { title: '访问量', exp: '每分钟增加范围' },
  ];
  const listForm2: { title: string }[] = [
    { title: '我的电脑' },
    { title: '云渲染特惠服务器' },
    { title: '云渲染主流服务器' },
    { title: '云端渲染高配服务器' },
    { title: '云端渲染分布式' },
  ];

  return (
    <div>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <div className={styles.logo_position}>
            <img className={styles.logo} src={logoDark} alt="logo" />
          </div>
        </Header>
        <Content>
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
                        <Input type={'number'} />
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <span className={styles.exp1}>{item.exp}</span>
                    </Col>
                    <Col span={3}>
                      <Form.Item>
                        <Input type={'number'} />
                      </Form.Item>
                    </Col>
                    <Col span={2}>
                      <span className={styles.exp2}>到</span>
                    </Col>
                    <Col span={3}>
                      <Form.Item>
                        <Input type={'number'} />
                      </Form.Item>
                    </Col>
                  </Row>
                ))}
              </Form>
            </div>
            <div className={styles.content_one_table_area}>
              <div className={styles.content_subtitle}>云渲染节点分部比例</div>
              <div>
                <Form layout="inline">
                  <Form.Item name="节点名称" label="节点名称">
                    <Input />
                  </Form.Item>
                  <Form.Item name="百分比" label="百分比">
                    <Input type={'number'} />
                  </Form.Item>
                  <Form.Item shouldUpdate>
                    <Button type="primary" htmlType="submit">
                      新增
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <div className={styles.content_one_table}>
                <Table
                  columns={columns}
                  dataSource={pieData}
                  pagination={false}
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
                        <Input type={'number'} />
                      </Form.Item>
                    </Col>
                    <Col span={3}>
                      <span className={styles.exp2}>终止值</span>
                    </Col>
                    <Col span={6}>
                      <Form.Item>
                        <Input type={'number'} />
                      </Form.Item>
                    </Col>
                  </Row>
                ))}
              </Form>
            </div>
          </div>
          <div className={styles.content_three}>
            <Button type={'primary'}>提交</Button>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default AdminPage;
