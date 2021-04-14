import { DvaModel, Reducer, Effect } from '@/models/connect';

import { getGlobalData } from '@/services/useData';
import { lineDataType } from '@/pages/GlobalData/model';

export interface UseDataModelState {
  listTableData: {
    timestamp: string;
    node_user: number;
    node_amount: number;
    hashrate: number;
    provider: number;
    fan: number;
    visit: number;
  };
  hashLineData: [{ time: string; value: number }];
  nodeLineData: [{ time: string; value: number }];
  proportion: { name: string; proportion: number }[];
  solutionTableData: {
    pc: number;
    low: number;
    mid: number;
    high: number;
    distribute: number;
  };
}

export interface UseDataModelStore extends DvaModel<UseDataModelState> {
  namespace: string;
  state: UseDataModelState;
  effects: {
    fetchGlobalData: Effect;
  };
  reducers: {
    save: Reducer;
  };
}

const UseData: UseDataModelStore = {
  namespace: 'useData',

  state: {
    listTableData: {
      timestamp: 'string',
      node_user: 0,
      node_amount: 0,
      hashrate: 0,
      provider: 0,
      fan: 0,
      visit: 0,
    },
    hashLineData: [{ time: '', value: 0 }],
    nodeLineData: [{ time: '', value: 0 }],
    proportion: [],
    solutionTableData: { pc: 0, low: 0, mid: 0, high: 0, distribute: 0 },
  },
  effects: {
    *fetchGlobalData(_, { call, put }) {
      console.log('fetch');
      const response = yield call(getGlobalData);
      if (response) {
        let newArr1: lineDataType[] = [];
        let newArr2: lineDataType[] = [];
        response.hash_line.forEach((item: any) => {
          let obj: lineDataType = { time: '', value: 0 };
          obj.time = item[0];
          obj.value = item[1];
          newArr1.push(obj);
        });
        response.node_line.forEach((item: any) => {
          let obj: lineDataType = { time: '', value: 0 };
          obj.time = item[0];
          obj.value = item[1];
          newArr2.push(obj);
        });
        yield put({
          type: 'save',
          payload: {
            listTableData: response.data,
            hashLineData: newArr1,
            nodeLineData: newArr2,
            proportion: response.proportion,
            solutionTableData: response.solution,
          },
        });
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

export default UseData;
