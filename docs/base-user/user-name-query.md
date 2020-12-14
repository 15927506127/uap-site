---
id: user-name-query
title: 根据用户名查询用户
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> 本接口在Solar端调用

## 接口来源

>auth-account的接口 ,详细说明见[服务端API](/specification.md)


## 请求地址
``` 
GET /v1/user/id/name?userId=&nameLike=&pageNum=&pageSize=
```
## 请求参数

|属性|类型|默认值|必填|说明|
|----|----|----|-----|----|
|userId|string |-|是|用户ID|
|nameLike|string |-|是|搜索名称|
|pageNum|int |-|是|页数|
|pageSize|int |-|是|页面Size|
 
 
## 请求参数示例
```
userId：1316189995139514370
nameLike:蒋
pageNum:1
pageSize:5
```


## 返回值
<b>Object</b>  
返回的JSON 数据包

|属性|类型|说明|
|----|----|----|
|code|string|接口码，例如:U000000|
|msgCode|string|接口信息码|
|data|object|接口返回的信息|

## data 结构
|属性|类型|说明|
|----|----|----|
|cur|integer($int64)|当前页数|
|total|integer($int64)|总数量|
|data|array|用户列表|

## data list结构
 |属性|类型|说明|
|----|----|----|
|userId|string|-|
|name|string|-|
|nickName|string|-|
|loginId|string|-|
|gender|string|-|
|userHead|string|-|
|phoneNo|string|-|
|email|string|-|
|doctorStaffNo|string|-|
|doctorCertNo|string|-|
|orgName|string|-|
|department|string|-|
|duty|string|-|
|active|bool|-|
|userUapPortalRole|string|-|
|joinDate|string|-|
|inactiveDate|string|-|
|roleList|string|-|
|tenantName|string|-|
|employeeNo|string|-|
|structures|string|-|

## 返回数据示例
```
{
  "code": "U000000",
  "msgCode": "success.id",
  "data": {
    "cur": 1,
    "total": 1,
    "data": [
      {
        "userId": "1316189995139514370",
        "name": "蒋祥俊",
        "nickName": null,
        "loginId": "xiangjun.jiang@united-imaging.com",
        "gender": "M",
        "userHead": null,
        "phoneNo": null,
        "email": null,
        "doctorStaffNo": null,
        "doctorCertNo": null,
        "orgName": null,
        "department": null,
        "duty": null,
        "active": true,
        "userUapPortalRole": null,
        "joinDate": "2020-10-14 09:44:42",
        "inactiveDate": null,
        "roleList": null,
        "tenantName": null,
        "employeeNo": null,
        "structures": null
      }
    ]
  }
}
```
## code 的合法值
|错误码|错误信息|说明|
|----|----|----|
|U000000|success.id|正常|


:::caution

错误码需要补充完整，方便第三方调用错误查找

:::

