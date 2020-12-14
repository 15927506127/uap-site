---
id: user-query
title: 基础信息查询
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> 本接口在小程序端调用

## 接口来源

>auth-account的接口 ,详细说明见[服务端API](/specification.md)


## 请求地址
``` 
GET /v1/account/userBase/{accountId}
```
## 请求参数

|属性|类型|默认值|必填|说明|
|----|----|----|-----|----|
|accountId|string |-|是|联影云用户ID|
 
 


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
|accountId|integer($int64)|联影云ID|
|address|string|联系地址|
|birthday|string|出生日期|
|description|string|描述|
|gender|string|性别（F:女, M:男, O:其他）|
|headUrl|string|头像云存储objectuid|
|name|string|姓名|
|nickName|string|昵称|
|email|string|邮箱|
|phoneNo|string|电话|

:::danger
此处的email与phoneNo仅作为
接受消息，不同于登陆账号(不懂啥意思)
:::
## 返回数据示例
```
{
"code": "U000000",
"msgCode": "success.id",
"data": {
"accountId": "1301461546102185988",
"nickName": "昵称",
"headUrl": "7fb9d81639a741838c437e64df210d32",
"description": "描述",
"name": "姓名",
"gender": "F",
"birthday": "2010-01-01",
"email": null,
"phoneNo": null,
"address": "地址"
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

