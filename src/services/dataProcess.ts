import request from '@/utils/request';
import {
  dataTableProps,
  lineDataType,
  pieDataType,
} from '@/pages/GlobalData/model';

import { dataProp } from '@/pages/Admin/model';

export async function getConfig() {
  console.log('发送请求');
  return request('/api/config', {
    method: 'GET',
  })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function changeConfig(param: JSON) {
  console.log(param);

  let data = JSON.stringify(param);

  console.log(data);

  return request('/api/config', {
    method: 'POST',
    data,
  })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}
