import request from '@/utils/request';
import {
  dataTableProps,
  lineDataType,
  pieDataType,
} from '@/pages/GlobalData/model';

import { dataProp } from '@/pages/Admin/model';

const baseUrl = 'https://api.pekicr.com';

export async function getConfig() {
  console.log('发送请求');
  return request(baseUrl + '/config', {
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

  return request(baseUrl + '/config', {
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
