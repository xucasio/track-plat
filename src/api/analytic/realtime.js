import request from '@/utils/request'

export function list(data) {
  return request({
    url: '/realtime/list',
    method: 'post',
    data
  })
}
export function detail(data) {
  return request({
    url: '/realtime/list',
    method: 'post',
    data
  })
}
