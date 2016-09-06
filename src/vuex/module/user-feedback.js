/**
 * Created by appian on 16/8/19.
 */
import {
	GENERATE_REW_LIST,
	GET_FEEDBACK_CHATLIST,
} from './../mutation-types';


const state = {
	list: [],
	current: 0,
	total: 0,
	rows: 0,
	status: 0,
	type: 0,
	category: [],
};

const mutations = {
	[GENERATE_REW_LIST](sta, ret) {
		console.log(ret);
		Object.assign(sta, ret);
	},
	[GET_FEEDBACK_CHATLIST]() {
		
	},
};

export default {
	state,
	mutations,
};
