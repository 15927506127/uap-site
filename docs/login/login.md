---
id: login
title: 企业微信登录认证
sidebar_label: 企业微信登录认证
slug: /
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> 本接口在小程序端调用

## 接口来源

>auth-server的接口 ,详细说明见[服务端API](/specification.md)


## 请求地址
``` 
GET /v1/corwechat/authorize?code=CODE&clientId=CLIENT_ID
```
## 请求参数

|属性|类型|默认值|必填|说明|
|----|----|----|-----|----|
|code|string|-|是|企业微信wx.qy.login接口返回的[code](https://work.weixin.qq.com/api/doc/90000/90136/91506)|
|clientId|string|-|是|小程序端的clientId, 示例：小程序端wechat-drawboard-web|

## 返回值
<b>Object</b>  
返回的JSON 数据包

|属性|类型|说明|
|----|----|----|
|code|string|接口码，例如:U000000|
|msgCode|string|接口信息码|
|data|object|接口返回的数据包|

## data 结构
|属性|类型|说明|
|----|----|----|
|access_token|string|-|
|login_key|string|-|
|expires_at|number|-|
|errCode|number|-|
|profile|object|-|
|errMsg|string|-|
|userId|string|-|

## profile 结构
|属性|类型|说明|
|----|----|----|
|iat|number|-|
|exp|number|-|
|iss|string|-|
|aud|string|-|
|sub|string|-|
|name|string|-|
|at_hash|string|-|
|userId|string|-|
|clientId|string|-|
|userPhone|string|-|
|userEmail|string|-|
|userName|string|-|
|userDirectory|string|-|
|appId|string|-|
|tenantId|string|-|
|nickName|string|-|
|userHead|string-|
|userLoginId|string|-|
|roles|string|-|
|permissions|string|-|
|nonce|string|-|
|extendedField|object|-|

## errcode 的合法值
|错误码|错误信息|说明|
|----|----|----|
|0|ok|正常|


:::caution

错误码需要补充完整，方便第三方调用错误查找

:::

## 返回数据示例
```
{
	"code": "U000000",
	"msgCode": "success.id",
	"data": {
		"access_token": "",
		"login_key": "4e5c5c3240ef2b3b70a02fa74cf441ea",
		"expires_at": 7000000,
		"errCode": 0,
		"profile": {
			"iat": 1605148718015,
			"exp": 1607740718015,
			"iss": "openid://com.uih.uplus.auth/v1",
			"aud": null,
			"sub": "4042053130253308199",
			"name": "18202716756",
			"at_hash": null,
			"userId": "4042053130253308199",
			"clientId": null,
			"userPhone": null,
			"userEmail": null,
			"userName": null,
			"userDirectory": null,
			"appId": "4110810540140478012",
			"tenantId": "1300804603026509826",
			"nickName": null,
			"userHead": null,
			"userLoginId": "18202716756",
			"roles": null,
			"permissions": null,
			"nonce": null,
			"extendedField": "{}"
		},
		"errMsg": "ok",
		"userId": "zhendong.li"
	}
}
```

## 企业微信登录流程图

<img alt="Docusaurus with Keytar" src={useBaseUrl('img/qylogin.png')} />