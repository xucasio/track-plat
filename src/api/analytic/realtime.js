import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/realtime/list',
    method: 'post',
    params: query
  })
}
