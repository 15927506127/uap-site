---
id: organ-apply
title: 申请加入租户
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> 本接口在小程序端调用

## 接口来源

>auth-account的接口 ,详细说明见[服务端API](/specification.md)

:::info
只能加入租户，不能加入机构
:::

## 请求地址
``` 
POST /v1/user/join/org
```
## 请求参数

|属性|类型|默认值|必填|说明|
|----|----|----|-----|----|
|JoinUserData|object|-|是|加入用户信息|
 
## JoinUserData 结构
|属性|类型|默认值|必填|说明|
|----|----|----|-----|----|
|emailAccountName|string|-|是|邮箱|
|name|string|-|是|用户姓名|
|orgId|integer($int64)|-|是|机构ID|
|phoneNoAccountName|string|-|是|手机号|
|userId|string|-|是|用户ID|

## 请求参数样例
```
JoinUserData{
emailAccountName* string
邮箱
name* string
用户姓名
orgId* integer($int64)
机构ID
phoneNoAccountName* string
手机号
userId* integer($int64)
用户ID
}
``` 


## 返回值
<b>Object</b>  
返回的JSON 数据包

|属性|类型|说明|
|----|----|----|
|code|string|接口码，例如:U000000|
|msgCode|string|接口信息码|
|data|null|无|

## 返回数据示例
```
{
"code": "U000000",
"msgCode": "success.id",
"data": null
}
```
## code 的合法值
|错误码|错误信息|说明|
|----|----|----|
|U000000|success.id|正常|


:::caution

错误码需要补充完整，方便第三方调用错误查找

:::

