# VueRouter-Vuex-VueResource-Demo

> **前端框架使用Vue**
> **Vue全家桶VueRouter-Vuex-VueResource**
> **使用apidoc生成文档,使用eslint进行代码质量检测**

```
├── index.html html入口
├── sever
│   ├── controller 所有模块的业务(命名规则:×××.controller.js)
│   │	└── ×××.controller.js
│   ├── model 数据层(目录结构:/controller/view)
│	│   ├── user
│	│   │	├── feedback.js 用户反馈列表
│	│   │	└──
│	│   ├── app.js
│	│   └── service.config.js
│   └── route
└── src
	├── asset
	│   ├── css
	│   ├── js
	│   │	├── dev.js 项目控制
	│   │	└── tools.js 封装的ajax
	│   └── scss
	├── component 公共组件库(目录结构:/controller/component, 命名规则:view-component)
	│   ├── 404.vue 错误组件
	│   ├── calendar.vue 日历组件
	│   ├── datagrid.vue 分页组件
	│   ├── dateselector.vue 日期范围选择组件
	│   ├── homepage.vue 首页组件
	│   └── vuetable.vue 表格组件
	├── config
	│   ├── apis 各个模块的api(命名规则:controller.api.js)
    │   │	└── user.api.js
	│  	└── routers 各个路由配置
	│   	├── common.js 导航json
	│   	└── user.js
	├── pages 页面(目录结构:/controller/view)
	│   └── user 用户管理
   	│		└── feedback 带分类的用户反馈列表
   	│   	 	├── feedback.vue 带分类的用户反馈列表
	│   		└── feedback-chat.vue 用户反馈的聊天列表
	├── scss
	└── vuex
	 	├── action 为避免action过大,(命名规则:controller.action.js)
	 	│	├── common.action.js 公共组件action
	 	│	└── user.action.js
		├── module(命名规则:controller-view.js)
		│	└── user-feedback.js
		├── actions.js 引入所有action
		├── modules.js
		├── mutation-types.js
		└── store.js
	router.js 路由map文件
	main.js 是入口文件index.html 入口页面

```