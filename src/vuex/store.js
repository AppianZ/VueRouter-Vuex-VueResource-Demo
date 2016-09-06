/**
 * Created by appian on 16/8/19.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import action from './actions';
import user from './module/user-feedback';

Vue.use(Vuex);

export default new Vuex.Store({
	// 组合各个模块
	modules: {
		user,
	},
});
