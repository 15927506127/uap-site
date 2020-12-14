---
id: profile
title: 头像上传
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> 本接口在小程序端调用

## 接口来源

>auth-account的接口 ,详细说明见[服务端API](/specification.md)


## 请求地址
``` 
POST /v1/file
```
## 请求参数

|属性|类型|默认值|必填|说明|
|----|----|----|-----|----|
|file|MultipartFile |-|是|上传的头像文件|
 

## 返回值
<b>Object</b>  
返回的JSON 数据包

|属性|类型|说明|
|----|----|----|
|code|string|接口码，例如:U000000|
|msgCode|string|接口信息码|
|data|string|云存储返回的objectuid|

:::info

该data数据是云存储返回的objectuid，用于获取头像或删除头像

:::

## 返回数据示例
```
{
"code": "U000000",
"msgCode": "success.id",
"data": "fd8fd7b13ed447a48e2f8c10451b1c43"
}
```
## errcode 的合法值
|错误码|错误信息|说明|
|----|----|----|
|0|ok|正常|


:::caution

错误码需要补充完整，方便第三方调用错误查找

:::

## 请求示例
```
Taro.uploadFile({
                url: `${authAccountUrl}/v1/file/`,
                filePath: src, // 要上传文件资源的路径
                name: 'file',
                formData: {
                    file: src,
                    type: 1
                },
                header: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + Auth.getAuthToken()
                }
                })
```
