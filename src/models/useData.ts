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
    pc: { start: number; end: number };
    low: { start: number; end: number };
    mid: { start: number; end: number };
    high: { start: number; end: number };
    distribute: { start: number; end: number };
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
    solutionTableData: {
      pc: { start: 0, end: 0 },
      low: { start: 0, end: 0 },
      mid: { start: 0, end: 0 },
      high: { start: 0, end: 0 },
      distribute: { start: 0, end: 0 },
    },
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
    // effect????????????????????????
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default UseData;
