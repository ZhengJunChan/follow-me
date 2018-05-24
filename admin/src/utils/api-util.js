/**
 * 封装http接口
 * Created by 郑君婵 on 2017-05-24
 */

import axios from 'axios'
let BASE_URL = 'http://localhost:3000'

let $http = axios.create()

export default {
  /**
   * http get 请求
   * @Author   郑君婵
   * @DateTime 2017-05-24
   * @param {string} url    [参考request.url]
   * @param {Object} params [参考request.params]
   * @returns {promise}     [参考 request 返回值]
   */
  get (url, params, isAsync) {
    return $http.get(BASE_URL + url, {params: params})
  },
  /**
   * http post 请求
   * @Author   郑君婵
   * @DateTime 2017-05-24
   * @param {string} url    [参考request.url]
   * @param {Object} params [参考request.params]
   * @returns {promise}     [参考 request 返回值]
   */
  post (url, params) {
    return $http.post(BASE_URL + url, params)
  },
  /**
   * [all 同时请求多个接口]
   * @Author   郑君婵
   * @DateTime 2017-06-15
   * @param    {[arr]}   arr [需要请求的数组 eg: [this.get('https://api.github.com/xxx/1'), this.get('https://api.github.com/xxx/2')]]
   * @return   {[type]}       [description]
   */
  all (arr) {
    return $http.all(arr)
  }
}
