---
id: organ-change
title: 切换租户
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> 本接口在小程序端调用

## 接口来源

>auth-account的接口 ,详细说明见[服务端API](/specification.md)


## 请求地址
``` 
POST /v1/user/changeUserTenant
```
## 请求参数

|属性|类型|默认值|必填|说明|
|----|----|----|-----|----|
|tenantId|Long|-|是|租户ID|
|userId|Long|-|是|用户ID|
 
 
## 返回值
<b>Object</b>  
返回的JSON 数据包

|属性|类型|说明|
|----|----|----|
|code|string|接口码，例如:U000000|
|msgCode|string|接口信息码|
|data|-|-|

## 返回数据示例
```
{
"code": "U000000",
"msgCode": "success.id",
"data": []
}
```
## code 的合法值
|错误码|错误信息|说明|
|----|----|----|
|U000000|success.id|正常|


:::caution

错误码需要补充完整，方便第三方调用错误查找

:::

