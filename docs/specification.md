---
id: specification
title: UAP服务端API
---

## 后端API
uap 后端有两个微服务， 分别是auth-server 服务，和auth-account服务

```jsx  title="dev环境地址示例"
小程序统一登录中间跳板路由
authwebUrl = 'https://miniprogram-dev.uihcloud.cn/auth/'
统一登录 auth-server 微服务地址
authServerUrl = 'https://auth-dev.uihcloud.cn/'

统一登录 auth-account 微服务地址
authAccountUrl = 'https://portal-dev.uihcloud.cn/portal-api'
```
## access_token

access_token 是小程序全局唯一后台接口调用凭据，调用绝大多数后台接口时都需使用， 开发者获取后进行妥善保存。