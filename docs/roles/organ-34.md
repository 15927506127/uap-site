---
id: organ-34
title: organ-34
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> 本接口在Solar端调用

## 接口来源

>auth-account的接口 ,详细说明见[服务端API](/specification.md)

## 请求地址
``` 
GET /v1/organization/user?accountId=
```
## 请求参数

|属性|类型|默认值|必填|说明|
|----|----|----|-----|----|
|accountId|long|-|是|-|
 

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
      "name": "United-imaging Management",
      "code": "570796872",
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

