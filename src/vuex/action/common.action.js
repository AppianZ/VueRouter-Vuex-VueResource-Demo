/**
 * Created by appian on 16/9/6.
 */

import { generateCommonList } from '../../config/apis/common.api';

export const generateNewList = ({ dispatch }, controller, action, obj) => {
	generateCommonList(controller, action, obj).then(ret => {
		if (ret.errcode === 0) {
			dispatch('GENERATE_REW_LIST', ret);
		} else alert(ret.errmsg);
	});
};
