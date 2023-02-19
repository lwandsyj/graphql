# 第一部分 构建技术栈

  每一次旅程都从第一步开始。我们的第一步就是来看看如何使用Node.js、React、MySQL 和 GraphQL 进行开发。

  在本章中，主要有以下章节

  + 第一单元，准备开发环境

  + 第二单元，使用Express.js 设置GraphQL

  + 第三单元，连接数据库

## 第一章  准备开发环境

   在本书里面我们要创建的项目叫做Graphbook.类似facebook 的克隆。我们允许用户注册，登录并且阅读和撰写帖子并与朋友聊天，类似于我们在普通社交网络上可以做的事情。

   我们的技术栈选型：

   + 前端：react + typescript + apollo client

   + 后端：node.js + express.js + mysql + sequelize + apollo

   ### 1.1 安装和配置node.js 

   + 使用Node Version Manager(nvm) ,使用nvm 可以管理多个版本的node.js

   + 通过node.js 安装包来安装

     node.js 下载链接：https://nodejs.org/en/download/

### 1.2 使用React创建前端项目

   这里为了方便，我们使用React 脚手架工具create-react-app 来创建我们的项目

   create-react-app 5.0 以后不在支持全局安装的形式，如果你的电脑中有全局安装过create-react-app ,可以通过以下命令删除：

        - npm uninstall -g create-react-app

        - yarn global remove create-react-app 

   使用npx 命令的方式创建我们的前端项目

        npx create-react-app graphbook --template typescript

## 第二章 设置graphql 和 Express.js

   设置server 项目：

   + 初始化package.json

        npm init -y

   + 安装express 并支持typescript

            yarn add express
            yarn add @types/express -D
            yarn add typescript -D
            yarn add @types/node

   + 创建typesscript config

           npx tsc --init
    
   + typescript 类型的文件不同通过node 执行运行，需要通过ts-node 来运行

            yarn add ts-node

   + nodemon: 在编辑器中保存内容时自动重启

        在package.json scripts 设置执行nodemon

            "dev":"nodemon --exec ts-node index.ts"
    
   ### 2.1 在express 中使用graphql

   安装核心库：

        yarn install --save apollo-server-express

        yarn install graphql

        yarn install @graphql-tools/schema

