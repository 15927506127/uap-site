---
id: message-query
title: 查询我的消息列表
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> 本接口在小程序端调用

## 接口来源

>auth-account的接口 ,详细说明见[服务端API](/specification.md)

## 请求地址
``` 
POST /v1/message/list
```
## 请求参数

|属性|类型|默认值|必填|说明|
|----|----|----|-----|----|
|messageStatus|bool|-|是|消息状态（TRUE:已读，FALSE:未读，NULL:所有）|
|messageType|string|-|是|三选一: TENANT_MESSAGE, BUSINESS_MESSAGE, PLAT_MESSAGE|
|pageNum|int|-|是|页数|
|pageSize|int|-|是|列表size|

## 请求参数样例
```
/*
 获取消息列表
 data:{
  "messageStatus": true,
  "messageType": "PLAT_MESSAGE",
  "pageNum": 1,
  "pageSize": 10
}
 */
export const getMessageList = (data) => request({
    url: uapUrls.getMessageList,
    method: 'POST',
    data: {...data}
})
``` 

## 返回值
<b>Object</b>  
返回的JSON 数据包

|属性|类型|说明|
|----|----|----|
|code|string|接口码，例如:U000000|
|msgCode|string|接口信息码|
|data|object|接口返回信息|

## data 结构
|属性|类型|说明|
|----|----|----|
|messageInboxId|string|-|
|messageId|string|-|
|messageStatus|bool|（TRUE:已读，FALSE:未读，NULL:所有）|
|receiveDatetime|string|-|
|createDatetime|string|-|
|messageLevel|string|-|
|messageTitle|string|-|
|messageText|string|-|
|messageType|string|(PLAT_MESSAGE:平台消息，BUSINESS_MESSAGE：业务消息，TENANT_MESSAGE：站内消息)|

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
        "messageInboxId": "1323901058403622914",
        "messageId": "1323214088794882049",
        "messageStatus": true,
        "receiveDatetime": "2020-11-04T16:13:03.000+0800",
        "createDatetime": "2020-11-02T18:43:18.000+0800",
        "messageLevel": "INFO",
        "messageTitle": "22222",
        "messageText": "22222",
        "messageType": "平台消息"
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

