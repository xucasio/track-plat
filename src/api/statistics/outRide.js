import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/terminal/list',
    method: 'get',
    params: query
  })
}
