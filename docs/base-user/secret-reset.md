---
id: secret-reset
title: 重置密码
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> 本接口在小程序端调用

## 接口来源

>auth-server的接口 ,详细说明见[服务端API](/specification.md)


## 请求地址
``` 
POST /v1/authServer/forgetPassword
```
## 请求参数

|属性|类型|默认值|必填|说明|
|----|----|----|-----|----|
|userName|string|-|是|登录ID|
|newPassword|string|-|是|新密码(需base64加密）|

:::caution

验证码发送接口，需要使用auth-server接口，详见[验证码](/base-user/send-code.md)

:::

## 返回值
<b>Object</b>  
返回的JSON 数据包

|属性|类型|说明|
|----|----|----|
|code|string|接口码，例如:U000000|
|msgCode|string|接口信息码|
|data|null|接口返回的信息|


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

