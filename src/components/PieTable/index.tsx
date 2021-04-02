import React from 'react'

import styles from './style.less'
import {Pie} from '@ant-design/charts'

interface dataType {
  name: string;
  value: number;
}

export interface pieDataProps{
  dataList: dataType[]
}

const PieTable: (props: pieDataProps) => any = (props: pieDataProps) => {

  const { dataList } = props;

  const pieConfig = {
    data: dataList,
    appendPadding: 10,
    angleField: 'value',
    colorField: 'name',
    radius: 0.8,
    interactions: [{ type: 'tooltip', enable: false }],
    legend: false,
  }

  // @ts-ignore
  return (
    <>
      <div className={styles.line_area}>
        <Pie {...pieConfig} />
      </div>
    </>
  )
}

export default PieTable
