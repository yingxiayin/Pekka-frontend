import React from 'react';

import styles from './style.less';

import { Button } from 'antd';
import { Line } from '@ant-design/charts';

interface dataType {
  time: string;
  value: number;
}

export interface lineDataProps {
  dataList: dataType[];
  unit: string;
}

const LineTable: (props: lineDataProps) => any = (props: lineDataProps) => {
  const { dataList, unit } = props;

  const lineConfig = {
    data: dataList,
    padding: 'auto',
    smooth: true,
    color: '#1FA3FF',
    autoFit: true,
    xField: 'time',
    xAxis: {
      type: 'timeCat',
      tickCount: 5,
    },
    yField: 'value',
    yAxis: {
      label: {
        formatter: function formatter(v: string) {
          return ''.concat(v, ' ' + unit);
        },
      },
    },
    lineStyle: {
      lineWidth: 3,
    },
    tooltip: {
      formatter: function formatter(v: dataType) {
        return { name: 'Base Fee', value: v.value + ' ' + unit };
      },
    },
  };

  return (
    <>
      <div className={styles.line_area}>
        <Line className={styles.line_area_line} {...lineConfig} />
      </div>
    </>
  );
};

export default LineTable;
