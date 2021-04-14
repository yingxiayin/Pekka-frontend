import {
  dataTableProps,
  lineDataGroupProps,
  pieDataType,
} from '@/pages/GlobalData/model';
import { dashboardDataProps } from '@/pages/Solutions/model';

export const listData: dataTableProps[] = [
  { title: '节点用户', num: '1820', addFrom: 0, addTo: 5 },
  {
    title: '接入节点数量',
    num: '11350',
    addFrom: 0,
    addTo: 5,
  },
  {
    title: '当前算力',
    num: '8987M/S',
    addFrom: 0,
    addTo: 5,
  },
  { title: '服务商', num: '98', addFrom: 0, addTo: 5 },
  { title: '粉丝群', num: '1101', addFrom: 0, addTo: 5 },
  {
    title: '访问量',
    num: '361609',
    addFrom: 0,
    addTo: 5,
  },
];

export const lineOneData: { time: string; value: number }[] = [
  { time: '2021-04-04', value: 460.087 },
  { time: '2021-04-05', value: 468.362 },
  { time: '2021-04-06', value: 472.987 },
  { time: '2021-04-07', value: 473.715 },
  { time: '2021-04-08', value: 479.188 },
  { time: '2021-04-09', value: 479.624 },
  { time: '2021-04-10', value: 481.079 },
  { time: '2021-04-11', value: 487.137 },
  { time: '2021-04-12', value: 491.169 },
  { time: '2021-04-13', value: 493.693 },
];

export const lineTwoData: lineDataGroupProps = {
  day: [
    { time: '12:21', value: 20 },
    { time: '12:22', value: 50 },
    { time: '12:23', value: 10 },
    { time: '12:24', value: 20 },
  ],
  week: [
    { time: '01-23', value: 20 },
    { time: '01-30', value: 50 },
    { time: '02-06', value: 10 },
    {
      time: '02-13',
      value: 20,
    },
  ],
  month: [
    { time: '1991-01', value: 20 },
    { time: '1991-02', value: 50 },
    { time: '1991-03', value: 10 },
    {
      time: '1991-04',
      value: 20,
    },
  ],
  year: [
    { time: '1991', value: 20 },
    { time: '1992', value: 70 },
    { time: '1993', value: 10 },
    { time: '1994', value: 20 },
  ],
};

export const pieData: pieDataType[] = [
  { name: '1991', value: 50 },
  { name: '1992', value: 50 },
];

export const dashboardData: dashboardDataProps[] = [
  {
    start: 0,
    end: 35,
  },
  {
    start: 0,
    end: 60,
  },
  {
    start: 0,
    end: 90,
  },
  {
    start: 0,
    end: 150,
  },
  {
    start: 0,
    end: 1500,
  },
];
