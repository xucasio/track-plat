import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/vue-element-admin/article/list',
    method: 'get',
    params: query
  })
}

export function del(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function add(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}
