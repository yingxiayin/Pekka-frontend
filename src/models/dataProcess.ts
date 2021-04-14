import { DvaModel, Reducer, Effect } from '@/models/connect';

import { dataProp, pieOneProp, pieListProp } from '@/pages/Admin/model';

import { getConfig, changeConfig } from '@/services/dataProcess';
import { message } from 'antd';

export interface DataProcessModelState {
  listAllConfigData: dataProp;
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

const DataProcess: DataProcessModelStore = {
  namespace: 'dataProcess',

  state: {
    listAllConfigData: {
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
  },
  effects: {
    *fetchConfig(_, { call, put }) {
      console.log('fetch');
      const response = yield call(getConfig);
      if (response) {
        console.log(response.http);
        let listAllConfigData = response;
        yield put({
          type: 'save',
          payload: { listAllConfigData: listAllConfigData },
        });
      }
    },

    *changeConfig({ payload }, { call, put }) {
      const response = yield call(changeConfig, payload);

      console.log(response);

      if (response) {
        message.info('修改成功');
      }
    },
  },
  reducers: {
    // effect获取数据处理方法
    save(state, { payload }) {
      console.log('保存');
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default DataProcess;
