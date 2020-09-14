import axios from 'axios'
///home/multidata
export function request(config){
    const interfect = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    interfect.interceptors.response.use(response => {
   
    return response.data;
    },error => {
   
    return Promise.reject(error);
    });
    interfect.interceptors.request.use(config => {

    return config;
    },error => {

    return Promise.reject(error);
    });

   return interfect(config)
}
export function requestNew(config){
    const interfect = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/z8',
        timeout: 5000
    })
    interfect.interceptors.response.use(response => {
    // Do something before response is sent
    // console.log(response.data);
    return response.data;
    },error => {

    return Promise.reject(error);
    });
    return interfect(config);
}