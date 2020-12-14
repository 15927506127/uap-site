---
id: email-bind
title: 邮箱绑定
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> 本接口在小程序端调用

## 接口来源

>auth-account的接口 ,详细说明见[服务端API](/specification.md)


## 请求地址
``` 
 POST /v1/account/email?accountId=&captcha=&email=
```
## 请求参数

|属性|类型|默认值|必填|说明|
|----|----|----|-----|----|
|accountId|string|-|是|联影云用户ID|
|captcha|string|-|是|[验证码](/base-user/send-code.md)|
|email|string|-|是|电子邮箱|
 
 


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

