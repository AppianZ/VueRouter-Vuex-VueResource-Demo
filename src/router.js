import COMMON from './config/routers/common';
import USER from './config/routers/user';

const MAPARR = Object.assign({}, COMMON.commonmap, USER.usermap);

const NAVLIST = [USER.usernav];

module.exports = {
	map: MAPARR,
	list: NAVLIST,
	status: COMMON.modulesarr,
};
