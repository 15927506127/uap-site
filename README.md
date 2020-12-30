# uap site 

前提条件
* 安装git
* 电脑需要安装node
* 安装Docusaurus
```
npm install --global docusaurus-init
```
  *安装yarn
  ```
  npm install -g yarn
  ```


拉取[github](https://github.com/15927506127/uap-site) master 代码到本地

```
git clone https://github.com/15927506127/uap-site.git
```

在项目根目录下执行以下命令，进行依赖安装
```
yarn install
```

## 部署uap-site

*添加git 账号名到环境变量，变量名设为GIT_USER

### 示例
```
我的github账户名是：15927506127

环境变量添加： GIT_USER 15927506127
```

* 在根目录下执行deploy命令
```
npm run deploy
```