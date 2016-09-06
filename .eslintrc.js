module.exports = {
	"extends": "airbnb-base",
	"parser": "babel-eslint",
	"globals" : {
		"window":true,
		"document":true,
		"$":true,
		"process": true
	},
	"plugins": [
		'html'
	],
	"rules" : {
		"global-require": 0,
		"no-alert": 0,
		"no-nested-ternary": 0,
		"indent": [0, "tab"], // 去掉tab约定,IDE会有问题
		"no-trailing-spaces": [0, { "skipBlankLines": true }],// 去掉行未得空格
		/*"eslint no-unused-expressions": ["error", { "allowShortCircuit": true }]*/
	}
};

