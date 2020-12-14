---
id: career-query
title: 职业信息查询
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> 本接口在小程序端调用

## 接口来源

>auth-account的接口 ,详细说明见[服务端API](/specification.md)


## 请求地址
``` 
GET /v1/account/userProfession/?accountId=&tenantId=
```
## 请求参数

|属性|类型|默认值|必填|说明|
|----|----|----|-----|----|
|accountId|string|-|是|联影云用户ID|
|tenantId|string|-|是|租户ID|

 
 


## 返回值
<b>Object</b>  
返回的JSON 数据包

|属性|类型|说明|
|----|----|----|
|code|string|接口码，例如:U000000|
|msgCode|string|接口信息码|
|data|array|接口返回的信息|

## data item 结构
|属性|类型|说明|
|----|----|----|
|accountId|string|联影云用户ID|
|tenantId|string|租户ID|
|tenantName|number|租户名称|
|orgName|number|机构|
|deptName|object|部门|
|duty|string|职务|
|employeeNo|string|编号|
|signUrl|string|-|

## 返回数据示例
```
[{
    "accountId": "4042053130253308199",
    "tenantId": "1300804603026509826",
    "tenantName": "UIH",
    "orgName": "United-imaging Management",
    "deptName": "Super_Dep",
    "duty": null,
    "employeeNo": null,
    "signUrl": null
  },{
    "accountId": "4042053130253308199",
    "tenantId": "1300804603026509826",
    "tenantName": "UIH",
    "orgName": "United-imaging Management",
    "deptName": "Super_Dep",
    "duty": null,
    "employeeNo": null,
    "signUrl": null
  }]
```
## code 的合法值
|错误码|错误信息|说明|
|----|----|----|
|U000000|success.id|正常|


:::caution

错误码需要补充完整，方便第三方调用错误查找

:::

