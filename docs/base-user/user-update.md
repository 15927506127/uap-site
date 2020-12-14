---
id: user-update
title: 基础信息更新
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> 本接口在小程序端调用

## 接口来源

>auth-account的接口 ,详细说明见[服务端API](/specification.md)


## 请求地址
``` 
PUT /v1/account/userBase
```
## 请求参数

|属性|类型|默认值|必填|说明|
|----|----|----|-----|----|
|userBaseModifyData|object |-|是|基础信息对象|
 
 ## userBaseModifyData 结构
 |属性|类型|说明|
|----|----|----|
|accountId|integer($int64)|联影云用户ID|
|address|string|联系地址|
|birthday|string|出生日期|
|description|string|描述|
|gender|string|性别（F:女, M:男, O:其他）|
|headUrl|string|头像云存储objectuid|
|name|string|姓名|
|nickName|string|昵称|


## 返回值
<b>Object</b>  
返回的JSON 数据包

|属性|类型|说明|
|----|----|----|
|code|string|接口码，例如:U000000|
|msgCode|string|接口信息码|
|data|string|接口返回的信息|


## 返回数据示例
```
{
"code": "U000000",
"msgCode": "success.id",
"data": "更新用户基本信息成功！"
}
```
## code 的合法值
|错误码|错误信息|说明|
|----|----|----|
|U000000|success.id|正常|


:::caution

错误码需要补充完整，方便第三方调用错误查找

:::

