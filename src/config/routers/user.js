/**
 * Created by appian on 16/8/8.
 */
const USERMAP = {
	'/users/feedback': {
		name: 'feedback',
		component(resolve) {
			require(['./../../pages/user/feedback/feedback.vue'], resolve);
		},
	},
};

const USERNAV = {
	first: '用户管理',
	icon: '&#xe603;',
	index: 0,
	second: [{
		name: '用户列表',
		link: '',
	}, {
		name: '用户反馈',
		link: '/users/feedback',
	}],
};

module.exports = {
	usermap: USERMAP,
	usernav: USERNAV,
};
