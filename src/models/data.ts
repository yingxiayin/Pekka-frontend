import {DvaModel, Reducer, Effect} from '@/models/connect'

import {dataTableProps, lineDataGroupProps, pieDataType} from '@/pages/GlobalData/model'
import {dashboardDataProps} from '@/pages/Solutions/model'

import {getGlobalData, getSolutionData} from '@/services/data'

export interface requestParams {
  page: string
}

export interface DataModelState {
  listData: dataTableProps[],
  lineOneData: lineDataGroupProps,
  lineTwoData: lineDataGroupProps,
  pieData: pieDataType[],
  dashboardData: dashboardDataProps[],
}

export interface DataModelStore extends DvaModel<DataModelState> {
  namespace: string;
  state: DataModelState;
  effects: {
    fetchGlobalData: Effect;
    fetchSolutionData: Effect;
  };
  reducers: {
    save: Reducer;
  };
}

const Data: DataModelStore = {
  namespace: 'data',

  state: {
    listData: [],
    lineOneData: {day: [], week: [], month: [], year: []},
    lineTwoData: {day: [], week: [], month: [], year: []},
    pieData: [],
    dashboardData: [],
  },
  effects: {
    * fetchGlobalData({payload}, {call, put}) {
      const response = yield call(getGlobalData, payload)

    },
    * fetchSolutionData({payload}, {call, put}) {
      const response = yield call(getSolutionData, payload)

    }
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
}

export default Data
