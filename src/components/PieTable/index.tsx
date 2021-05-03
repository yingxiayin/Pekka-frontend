import React, { useCallback, useState, useEffect } from 'react';

import styles from './style.less';
import { Pie } from '@ant-design/charts';

interface dataType {
  name: string;
  proportion: number;
}

export interface pieDataProps {
  dataList: dataType[];
}

const PieTable: (props: pieDataProps) => any = (props: pieDataProps) => {
  const ChangeSize = () => {
    const [size, setSize] = useState({
      width: document.documentElement.clientWidth,
    });

    const onResize = useCallback(() => {
      setSize({
        width: document.documentElement.clientWidth,
      });
    }, []);

    useEffect(() => {
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize);
      };
    }, []);

    return size;
  };

  let size = ChangeSize();

  const { dataList } = props;

  const pieConfig = {
    data: dataList,
    appendPadding: 10,
    autoFit: true,
    angleField: 'proportion',
    colorField: 'name',
    color: '#1FA3FF',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name}  {percentage}',
      style: {
        fontSize: 12,
      },
    },
    interactions: [{ type: 'tooltip', enable: false }],
    legend: false,
  };
  const pieConfig600 = {
    data: dataList,
    appendPadding: 10,
    autoFit: true,
    angleField: 'proportion',
    colorField: 'name',
    color: '#1FA3FF',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name}  {percentage}',
      style: {
        fontSize: 6,
      },
    },
    interactions: [{ type: 'tooltip', enable: false }],
    legend: false,
  };

  // @ts-ignore
  return (
    <>
      <div className={styles.pie_area}>
        {size.width < 600 ? <Pie {...pieConfig600} /> : <Pie {...pieConfig} />}
      </div>
    </>
  );
};

export default PieTable;
