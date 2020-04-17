import axios from 'axios'

//接口配置
var instance = axios.create({
  // baseURL: '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
});

instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {

  }
);
export default instance