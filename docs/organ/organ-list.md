---
id: organ-list
title: 查询租户
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> 本接口在Solar端调用

## 接口来源

>auth-account的接口 ,详细说明见[服务端API](/specification.md)

## 请求地址
``` 
GET /v1/organization/query/list?sopid=&sopId=
```
## 请求参数

|属性|类型|默认值|必填|说明|
|----|----|----|-----|----|
|-|object|-|是|加入用户信息|
 
## - 结构
|属性|类型|默认值|必填|说明|
|----|----|----|-----|----|
|emailAccountName|string|-|是|邮箱|
|name|string|-|是|用户姓名|
|orgId|integer($int64)|-|是|机构ID|
|phoneNoAccountName|string|-|是|手机号|
|userId|string|-|是|用户ID|


## 返回值
<b>Object</b>  
返回的JSON 数据包

|属性|类型|说明|
|----|----|----|
|code|string|接口码，例如:U000000|
|msgCode|string|接口信息码|
|data|aray|列表|

## data list 结构
|属性|类型|说明|
|----|----|----|
|orgId|string|租户ID|
|sopId|string||
|name|string|-|
|-|-|-|

## 返回数据示例
```
{
  "code": "U000000",
  "msgCode": "success.id",
  "data": [
    {
      "orgId": "1300809275791544322",
      "sopId": "1",
      "name": null,
      "code": null,
      "description": null,
      "countryCode": null,
      "proCode": null,
      "cityCode": null,
      "disCode": null,
      "countryId": null,
      "proId": null,
      "cityId": null,
      "disId": null,
      "address": null,
      "phoneNo": null,
      "isDefault": null,
      "creatDatetime": null,
      "tenants": null
    },
    {
      "orgId": "1302844429678612482",
      "sopId": "2",
      "name": null,
      "code": null,
      "description": null,
      "countryCode": null,
      "proCode": null,
      "cityCode": null,
      "disCode": null,
      "countryId": null,
      "proId": null,
      "cityId": null,
      "disId": null,
      "address": null,
      "phoneNo": null,
      "isDefault": null,
      "creatDatetime": null,
      "tenants": null
    }
  ]
}
```
## code 的合法值
|错误码|错误信息|说明|
|----|----|----|
|U000000|success.id|正常|


:::caution

错误码需要补充完整，方便第三方调用错误查找

:::

