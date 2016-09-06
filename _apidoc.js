/**
 * @apiDefine Success
 * @apiSuccess {Number} errcode errcode of res
 * @apiSuccess {String} errmsg errmsg of res
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "errcode": 0,
 *       "errmsg": "ok"
 *     }
 *
 *     返回不为0的情况
 *     {
 *       "errcode": !== 0,
 *       "errmsg": "问题描述"
 *     }
 */