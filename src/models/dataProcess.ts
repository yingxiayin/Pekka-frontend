import { DvaModel, Reducer, Effect } from '@/models/connect';

import { dataProp, pieOneProp, pieListProp } from '@/pages/Admin/model';

import { getConfig, changeConfig } from '@/services/dataProcess';
import { message } from 'antd';

export interface DataProcessModelState {
  listAllData: dataProp;
  pieOneData: pieOneProp;
  pieListData: pieListProp;
}

export interface DataProcessModelStore extends DvaModel<DataProcessModelState> {
  namespace: string;
  state: DataProcessModelState;
  effects: {
    fetchConfig: Effect;
    changeConfig: Effect;
  };
  reducers: {
    save: Reducer;
  };
}

const Data: DataProcessModelStore = {
  namespace: 'dataProcess',

  state: {
    listAllData: {
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
    },
    pieOneData: {
      name: ' ',
      proportion: 0,
    },
    pieListData: { proportion: [] },
  },
  effects: {
    *fetchConfig({ payload }, { call, put }) {
      const response = yield call(getConfig, payload);
      if (response.code === 200) {
        console.log(response.data);
        let listAllData = response.data;
        yield put({
          type: 'save',
          payload: { listAllData: listAllData },
        });
      }
    },

    *changeConfig({ payload }, { call, put }) {
      const response = yield call(changeConfig, payload);

      console.log(response.status);

      if (response.status === 200) {
        message.info('修改成功');
      }
    },
  },
  reducers: {
    // effect获取数据处理方法
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default Data;
