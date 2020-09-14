import {request,requestNew} from './request'

export function getDetail(iid) {
    return requestNew({
        url:'/detail',
        params:{
            iid
        }
    })
}
export function GoodsInfo(itemInfo,columns,services){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.lowPrice;
    this.discount = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
}

export function Params(Params){
    this.info = Params.info.set;
    this.rule = Params.rule.tables[0];
}