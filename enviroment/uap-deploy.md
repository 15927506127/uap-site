---
id: uap-deploy
title: UAP 部署情况介绍
slug: /
---

## 架构

* 整体架构是前后端分离，前端采用基于React 技术的Umi 框架构建，后端采用基于java 技术的sprintBoot 微服务框架；
* uap 后端有两个微服务， 分别是auth-server 服务，和auth-account服务；
* uap 前端有两个微服务， 分别是控制台（域名带admin) ，以及 管理台（域名不带admin)；
* uap 为了兼容小程序， 部署了跳板工程微服务。

:::caution
跳板工程微服务主要部署的是前端项目，由于小程序端不兼容OIDC 登录流程，做了一个中间跳板页，小程序使用webview 访问跳板工程页，获取uap 的发放令牌
:::

```
#控制台域名地址示例（前端项目）
https://portal-admin-preprod.uihcloud.cn/

# 管理台域名地址示例（前端项目）
https://portal-preprod.uihcloud.cn/

#小程序端配置地址示例
//小程序统一登录中间跳板工程微服务（前端项目）
// export const authwebUrl = 'https://miniprogram.uihcloud.cn/auth/'

// //统一登录 auth-server 微服务地址（后端项目）
// export const authServerUrl = 'https://auth.uihcloud.cn/'

// //统一登录 auth-account 微服务地址（后端项目）
// export const authAccountUrl = 'https://miniprogram.uihcloud.cn/portal-api'
```

## 控制台

> 面向平台管理员

[控制台使用指南](https://navi.united-imaging.com/UplusTestCollection/UCloud/_wiki/wikis/UCloud.wiki/788/UAP_M3_%E6%8E%A7%E5%88%B6%E5%8F%B0%E4%BD%BF%E7%94%A8)

## 管理台

> 面向租户管理员和用户

[管理台使用指南](https://navi.united-imaging.com/UplusTestCollection/UCloud/_wiki/wikis/UCloud.wiki/773/UAP_M3_%E7%AE%A1%E7%90%86%E5%8F%B0%E4%BD%BF%E7%94%A8)

[用户使用指南](https://navi.united-imaging.com/UplusTestCollection/UCloud/_wiki/wikis/UCloud.wiki/771/UAP_M3_%E7%94%A8%E6%88%B7%E4%BD%BF%E7%94%A8)