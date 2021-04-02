import {EffectsCommandMap, Subscription} from 'dva'
import {AnyAction, Reducer} from 'redux'
import {MenuDataItem} from '@ant-design/pro-layout'
import {DataModelState} from './data'


declare global {
  namespace NodeJS {
    export interface Global {
      g_app: {
        _store: { dispatch: Dispatch; getState: () => ConnectState };
      };
    }
  }
}

export { DataModelState }


export interface ConnectState {
  data: DataModelState
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}

export {Reducer, EffectsCommandMap, Subscription}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & {
    select: <T>(func: (state: ConnectState) => T) => T;
  },
) => void;

export type Action<P = any, C = (payload: P) => void> = {
  type: string;
  payload?: P;
  callback?: C;
  meta?: {
    mixpanel?: any;
  };
  [key: string]: any;
};

/**
 * @type P: Type of payload
 * @type C: Type of callback
 */
export type Dispatch = <P = any, C = (payload: P) => void>(action: {
  type: string;
  payload?: P;
  callback?: C;
  [key: string]: any;
}) => any;

export interface DispatchProps {
  dispatch: Dispatch;
}

export interface DvaModel<S> {
  namespace?: string;
  state: S;
  reducers: {
    save: Reducer<S>;
  };
  effects?: { [key: string]: Effect };
  subscriptions?: { [key: string]: Subscription };
}
