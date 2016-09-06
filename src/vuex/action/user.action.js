/**
 * Created by appian on 16/8/30.
 */
import { initFeedback } from '../../config/apis/user.api';
import { generateCommonList } from '../../config/apis/common.api';


export const initFeedbackList = ({ dispatch }) => {
	initFeedback().then(ret => {
		if (ret.errcode === 0) {
			dispatch('GENERATE_REW_LIST', ret);
		} else alert(ret.errmsg);
	});
};

export const switchFeedbackContent = ({ dispatch }, controller, action, obj) => {
	generateCommonList(controller, action, obj).then(ret => {
		if (ret.errcode === 0) {
			dispatch('GENERATE_REW_LIST', ret);
		} else alert(ret.errmsg);
	});
};
