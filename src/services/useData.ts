import request from '@/utils/request';

export async function getGlobalData() {
  console.log('发送请求');
  return request('/api/data', {
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
