/**
 * Created by appian on 16/8/16.
 */
var apiV = require('./../../src/assets/js/dev').apiV;

module.exports = function (app) {
	/**
	 * @api {get} /user/init 用户反馈列表初始化
	 * @apiName 用户反馈列表初始化initFeedback
	 * @apiDescription 页面 : /user/feedback
	 * 一进入页面的请求,不带请求参数,返回的list按时间从最近的时间点往之前的时间点排序的顺序, 默认返回对象如下所示
	 * @apiGroup User
	 * @apiVersion 2.0.0
	 * @apiSuccessExample {json} Success-Response:
	 *    {
	 *       "errcode": 0, //0为合法状态
	 *       "current": 1, //当前页码
	 *       "total": 10, //当前列表记录的总数
	 *       "rows": 10, //一页总共有几条,写死10
	 *       "status": 0, //一级分类,消息状态 0:全部信息,1:未处理信息,2:处理中信息,3:已处理信息,4:已收藏信息
	 *       "type": 0, //二级分类,问题类型,对应category的id
	 *       "category": [{ //二级分类的下拉框渲染的数组
				id: 0,
				name: '全部问题'
			 }, {
				id: 1,
				name: '阅读相关问题'
			 }],
	 *       "list": [{
				id: 2, //学员id
				sno: '291221212221', //学员学号
				openid: 'svsdv23g22f22fwgv22g2g242', //学院openid
				term: '内测班', //学期数
				nickname: 'skyAH陈式坚', //学员昵称
				cate: '阅读相关问题', //问题反馈的类型描述,原来是传id,
				content: '我感觉你们的产品做得很美很好，但是就戳不到按钮，我也不知道为什么就是戳不到，反正就是戳不到，不信你戳戳，手机都要戳坏了。' , //最新的用户发来的反馈内容
				equipment: 'iPhone6splus', //手机设备型号
				system: 'iOS9.0.1', //手机系统
				status: 0, //反馈的status,0=>未处理, 1=>已处理,2=>处理中
				mark: 0, //0未收藏，1：已收藏
				submit_time: '2016-03-14 12:12:32', //用户提交最新的反馈内容的时间
			 }]
	 *    }
	 */
	
	// feedback页面初始化列表
	app.get(apiV('user', 'init'), function (req, res) {
		res.json({
	        errcode: 0, //0为合法状态
	        current: 1, //当前页码
	        total: 100, //当前列表记录的总数
	        rows: 10, //一页总共有几条,写死10
	        status: 0, //一级分类,消息状态 0:全部信息,1:未处理信息,2:处理中信息,3:已处理信息,4:已收藏信息
	        type: 0, //二级分类,问题类型,对应category的id
	        category: [{ //二级分类的下拉框渲染的数组
				id: 0,
				name: '全部问题'
			}, {
				id: 1,
				name: '阅读相关问题'
			}],
	        list: [{
				id: 2, //学员id
				sno: '291221212221', //学员学号
				openid: 'svsdv23g22f22fwgv22g2g242', //学院openid
				term: '内测班', //学期数
				nickname: 'skyAH陈式坚', //学员昵称
				cate: '阅读相关问题', //问题反馈的类型描述,原来是传id,
				content: '我感觉你们的产品做得很美很好，但是就戳不到按钮，我也不知道为什么就是戳不到，反正就是戳不到，不信你戳戳，手机都要戳坏了。' , //最新的用户发来的反馈内容
				equipment: 'iPhone6splus', //手机设备型号
				system: 'iOS9.0.1', //手机系统
				status: 2, //反馈的status,0=>未处理, 1=>已处理,2=>处理中
				mark: 0, //0未收藏，1：已收藏
				submit_time: '2016-03-14 12:12:32', //用户提交最新的反馈内容的时间
			}]
		});
	});
	
	
	/**
	 * @api {get} /user/switch 切换用户列表
	 * @apiName 切换用户反馈列表switchFeedback
	 * @apiDescription 页面: /user/feedback
	 * 比如切换一级状态和二级筛选,排序前端自己做
	 * @apiGroup User
	 * @apiVersion 2.0.0
	 * @apiParam  {Number} status 列表的状态,相当于一级分类>>0:全部信息,1:未处理,2:处理中,3已处理,4已收藏
	 * @apiParam  {Number} type 反馈的问题类型,相当于二级分类,暂时先定死写全部问题的id,需要后台确认id是多少>>0:全部问题,1:阅读问题,2:出勤问题...
	 * @apiParam  {Number} current 页码,当前的页码。从1开始计数
	 * @apiSuccessExample {json} Success-Response:
	 *    {
	 *       "errcode": 0, //0为合法状态
	 *       "current": 1, //当前页码
	 *       "total": 10, //当前列表记录的总数
	 *       "rows": 10, //一页总共有几条,写死10
	 *       "status": 0, //一级分类,消息状态 0:全部信息,1:未处理信息,2:处理中信息,3:已处理信息,4:已收藏信息
	 *       "type": 0, //二级分类,问题类型,对应category的id
	 *       "list": [{
				id: 2, //学员id
				sno: '291221212221', //学员学号
				openid: 'svsdv23g22f22fwgv22g2g242', //学院openid
				term: '内测班', //学期数
				nickname: 'skyAH陈式坚', //学员昵称
				cate: '阅读相关问题', //问题反馈的类型描述,原来是传id,
				content: '我感觉你们的产品做得很美很好，但是就戳不到按钮，我也不知道为什么就是戳不到，反正就是戳不到，不信你戳戳，手机都要戳坏了。' , //最新的用户发来的反馈内容
				equipment: 'iPhone6splus', //手机设备型号
				system: 'iOS9.0.1', //手机系统
				status: 2, //反馈的status,0=>未处理, 1=>已处理,2=>处理中
				mark: 1, //0未收藏，1：已收藏
				submit_time: '2016-03-14 12:12:32', //用户提交最新的反馈内容的时间
			 }]
	 *    }
	 */
	
	// feedback页面切换用户列表
	app.get(apiV('user', 'switch'), function (req, res) {
		res.json({
	        errcode: 0, //0为合法状态
	        current: 2, //当前页码
	        total: 100, //当前列表记录的总数
	        rows: 10, //一页总共有几条,写死10
	        status: 2, //一级分类,消息状态 0:全部信息,1:未处理信息,2:处理中信息,3:已处理信息,4:已收藏信息
	        type: 1, //二级分类,问题类型,对应category的id
			list: [{
				id: 2, //学员id
				sno: '291221212221', //学员学号
				openid: 'svsdv23g22f22fwgv22g2g242', //学院openid
				term: '内测班', //学期数
				nickname: 'skyAH陈式坚', //学员昵称
				cate: '阅读相关问题', //问题反馈的类型描述,原来是传id,
				content: '我感觉你们的产品做得很美很好，但是就戳不到按钮，我也不知道为什么就是戳不到，反正就是戳不到，不信你戳戳，手机都要戳坏了。' , //最新的用户发来的反馈内容
				equipment: 'iPhone6splus', //手机设备型号
				system: 'iOS9.0.1', //手机系统
				status: 2, //反馈的status,0=>未处理, 1=>已处理,2=>处理中
				mark: 1, //0未收藏，1：已收藏
				submit_time: '2016-03-14 12:12:32', //用户提交最新的反馈内容的时间
			}]
		});
	});
	
	/**
	 * @api {get} /user/detail 获取用户详情
	 * @apiName 获取用户详情getDetail
	 * @apiDescription 页面 : /user/feedback 获取用户详情
	 * @apiGroup User
	 * @apiVersion 2.0.0
	 * @apiParam  {Number} id 用户id,作为获取信息的标识
	 * @apiSuccessExample {json} Success-Response:
	 *    {
	 *       "errcode": 0, //0为合法状态
	 *       "record": [{
				role: 0, //角色,0:学员,1:管理员
				chat_content : '我感觉你们的产品做得就那样吧，设计还行，页面也还行，就是post请求太慢了，就看见进度条在哪里刷刷刷。。。我也是醉了',//聊天内容html代码
				chat_time : '2016-02-32 23:22:22',//聊天记录的时间
				chat_status : 0 //0：发送成功，1：发送不成功
				chat_img: [], //用户的截图列表,没有截图则为空数组
			 },{
				role: 1,
				chat_content : '你好，我是一个管理员，我现在想和你聊天1',
				chat_time : '2016-02-32 23:22:22',
				chat_status : 0,
				chat_img: [], //管理员没有截图,传空数组
			 }]
	 *    }
	 */
	
	// feedback页面获取用户详情
	app.get(apiV('user', 'detail'), function (req, res) {
		res.json({
	        errcode: 0, //0为合法状态
	        record: [{
				role: 0, //角色,0:学员,1:管理员
				chat_content : '我感觉你们的产品做得就那样吧，设计还行，页面也还行，就是post请求太慢了，就看见进度条在哪里刷刷刷。。。我也是醉了',//聊天内容html代码
				chat_time : '2016-02-32 23:22:22',//聊天记录的时间
				chat_status : 0, //0：发送成功，1：发送不成功
				chat_img: [], //用户的截图列表,没有截图则为空数组
			},{
				role: 1,
				chat_content : '你好，我是一个管理员，我现在想和你聊天1',
				chat_time : '2016-02-32 23:22:22',
				chat_status : 0,
				chat_img: [], //管理员没有截图,传空数组
			}]
	    });
	});
};
