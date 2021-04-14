import request from '@/utils/request';

const baseUrl = 'https://api.pekicr.com';

export async function getGlobalData() {
  console.log('发送请求');
  return request(baseUrl + '/api/data', {
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
