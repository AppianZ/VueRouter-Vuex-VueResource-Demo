/**
 * Created by appian on 16/9/6.
 */
import { ajaxGet } from './../../assets/js/tools';
import { apiV } from './../../assets/js/dev';

export function generateCommonList(controller, action, obj) {
	return ajaxGet(apiV(controller, action), obj);
}
