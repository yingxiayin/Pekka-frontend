import React from 'react'

import styles from './style.less'

import {Button} from 'antd'
import {Line} from '@ant-design/charts'

interface dataType {
  time: string;
  value: number;
}

export interface lineDataProps{
  dataList: dataType[]
}

const LineTable: (props: lineDataProps) => any = (props: lineDataProps) => {

  const { dataList } = props;

  const lineConfig = {
    data: dataList,
    padding: 'auto',
    smooth: true,
    color: '#1FA3FF',
    xField: 'time',
    yField: 'value',
    yAxis: {
      label: {
        formatter: function formatter(v:string) {
          return ''.concat(v, ' nanoFIL');
        },
      },
    },
    lineStyle: {
      lineWidth: 3,
    },
    tooltip: {
      formatter: function formatter(v:dataType) {
        return {name: 'Base Fee', value: v.value + ' nanoFIL'};
      },
    }

  }

  return (
    <>
      <div className={styles.line_area}>
        <Line {...lineConfig} />
      </div>
    </>
  )
}

export default LineTable
