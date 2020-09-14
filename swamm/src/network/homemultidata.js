import {request,requestNew} from './request.js';
 export function homemultdata(){
    return request({
        url:'home/multidata'
    })
 }

 export function getHomeGoods(type,page){
     return requestNew({
         url:'/home/data',
         params:{
            type,
            page
         }
     })
 }