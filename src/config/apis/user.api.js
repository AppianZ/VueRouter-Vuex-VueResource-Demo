/**
 * Created by appian on 16/8/15.
 */
import { ajaxGet } from './../../assets/js/tools';
import { apiV } from './../../assets/js/dev';
	
/**
 * @api {get} /user/init 用户反馈列表初始化
 * @apiName 用户反馈列表初始化initFeedback
 * @apiDescription 页面 : /user/feedback
 */

export function initFeedback() {
	return ajaxGet(apiV('user', 'init'));
}


/**
 * @api {get} /user/detail 获取用户详情
 * @apiName 获取用户详情getDetail
 * @apiDescription 页面 : /user/feedback 获取用户详情
 */

export function getDetail(obj) {
	return ajaxGet(apiV('user', 'detail'), {
		id: obj.id,
	});
}
