import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.example.com',  // API 根地址
  timeout: 10000
})

// 定义一些常用的请求方法
export const fetchData = () => api.get('/data')

// 你可以根据需要扩展更多 API 请求

