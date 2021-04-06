import request from '@/utils/request';
import {
  dataTableProps,
  lineDataType,
  pieDataType,
} from '@/pages/GlobalData/model';
import { requestParams } from '@/models/data';

export async function changeGlobalListData(params: requestParams) {
  const { page } = params;
  const data = { page };

  console.log(data);

  return request('/api/changeGlobalListData', {
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

export async function changeGlobalPieData(params: requestParams) {
  const { page } = params;
  const data = { page };

  console.log(data);

  return request('/api/changeGlobalPieData', {
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

export async function changeCaseData(params: requestParams) {
  const { page } = params;
  const data = { page };

  console.log(data);

  return request('/api/changeCaseData', {
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
