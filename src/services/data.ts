import request from '@/utils/request';
import {dataTableProps, lineDataType, pieDataType} from '@/pages/GlobalData/model'
import {requestParams} from '@/models/data'

export async function getGlobalData(params: requestParams) {
  const { page } = params;
  const data = { page };

  console.log(data);

  return request('/api/getGlobalData', {
    method: 'POST',
    data,
  })
    .then(function(response) {
      console.log(response);
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
}

export async function getSolutionData(params: requestParams) {
  const { page } = params;
  const data = { page };

  console.log(data);

  return request('/api/getSolutionData', {
    method: 'POST',
    data,
  })
    .then(function(response) {
      console.log(response);
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
}
