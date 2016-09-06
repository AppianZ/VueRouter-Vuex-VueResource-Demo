/**
 * Created by appian on 16/8/15.
 */
var LOCALHOST;
if (global.location) {
	if (global.location.port === '') {
		LOCALHOST = '';
	} else {
		LOCALHOST = `http://${global.location.hostname}:1515`;
	}
}

function getUrl(module, action) {
	const pre = process.env.NODE_ENV === 'dev' ? '' : LOCALHOST;
	return `${pre}/${module}/${action}`;
}

module.exports.apiV = getUrl;
