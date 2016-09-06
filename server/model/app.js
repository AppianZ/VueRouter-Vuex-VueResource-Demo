/**
 * Created by appian on 16/8/17.
 */
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

require('./service.config').cors(app,express);



/* // 配置假签名
app.post(apiV('wechat','signature'), function (req, res) {
	res.json({
	app
});*/

 
// require('./../controller/user.controller')(app);
var files = fs.readdirSync('./server/controller');
// 避免手动require controller文件
files.forEach(function (file) {
	if (file.indexOf('.controller') < 0) return;
	require('./../controller/' + file)(app);
});



app.listen(1515);
console.log('service is running in localhost:1515');