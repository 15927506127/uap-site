---
id: message-num
title: 查询消息数量
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> 本接口在小程序端调用

## 接口来源

>auth-account的接口 ,详细说明见[服务端API](/specification.md)

## 请求地址
``` 
GET /v1/message/latest?status=&tenantId=&userId=
```
## 请求参数

|属性|类型|默认值|必填|说明|
|----|----|----|-----|----|
|status|bool|-|是|消息状态（TRUE:已读，FALSE:未读，NULL:所有）|
|tenantId|Long|-|是|租户ID|
|userId|Long|-|是|用户ID|


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
|TENANT_MESSAGE|object|站内消息|
|BUSINESS_MESSAGE|object|业务消息|
|PLAT_MESSAGE|object|平台消息|

## TENANT_MESSAGE 结构
|属性|类型|说明|
|----|----|----|
|messageType|number|消息类型:TENANT_MESSAGE:2 BUSINESS_MESSAGE:1 PLAT_MESSAGE:0|
|count|number|消息数量|
|latestMessage|object|最新消息|

:::note
消息类型 (PLAT_MESSAGE:平台消息，BUSINESS_MESSAGE：业务消息，TENANT_MESSAGE：站内消息)

BUSINESS_MESSAGE, PLAT_MESSAGE 结构与TENANT_MESSAGE相同
:::

## latestMessage 结构
|属性|类型|说明|
|----|----|----|
|id|string|-|
|createUserId|string|-|
|createDatetime|string|-|
|modifyUserId|string|-|
|modifyDatetime|string|-|
|deleted|string|-|
|messageCatalogId|string|-|
|messageText|string|-|
|messageTitle|string|-|
|active|string|-|

## 返回数据示例
```
{
  "code": "U000000",
  "msgCode": "success.id",
  "data": {
    "TENANT_MESSAGE": {
      "messageType": 2,
      "count": 1,
      "latestMessage": {
        "id": "1323213967478833154",
        "createUserId": null,
        "createDatetime": "2020-11-02T18:42:49.000+0800",
        "modifyUserId": null,
        "modifyDatetime": null,
        "deleted": null,
        "messageCatalogId": null,
        "messageText": "string",
        "messageTitle": "string",
        "active": null
      }
    },
    "PLAT_MESSAGE": {
      "messageType": 0,
      "count": 1,
      "latestMessage": {
        "id": "1323214088794882049",
        "createUserId": null,
        "createDatetime": "2020-11-02T18:43:18.000+0800",
        "modifyUserId": null,
        "modifyDatetime": null,
        "deleted": null,
        "messageCatalogId": null,
        "messageText": "22222",
        "messageTitle": "22222",
        "active": null
      }
    }
  }
}
```
## code 的合法值
|错误码|错误信息|说明|
|----|----|----|
|U000000|success.id|正常|
|U|


:::caution

错误码需要补充完整，方便第三方调用错误查找

:::

