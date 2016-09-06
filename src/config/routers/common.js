/**
 * Created by appian on 16/8/8.
 */
const MODULESCOUNT = 10;
const MODULESARR = [];

for (let i = 0; i < MODULESCOUNT; i++) {
	MODULESARR.push(false);
}

const COMMONMAP = {
	'*': {
		name: 'error',
		component(resolve) {
			require(['./../../components/homepage.vue'], resolve);
		},
	},
	'/': {
		name: 'homepage',
		component(resolve) {
			require(['./../../components/homepage.vue'], resolve);
		},
	},
};
 
module.exports = {
	moudulescount: MODULESCOUNT,
	modulesarr: MODULESARR,
	commonmap: COMMONMAP,
};
