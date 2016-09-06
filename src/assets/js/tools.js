/**
 * 全局调用ajax,默认阻止多次提交问题
 * 以后可以不判断按钮重复提交
 * 支持restful
 * TODO 缺陷! 没有验证data是否相等
 * @param options
 * @example
 * ajax({
        url: apiV('test','submit'),
        type : "post",
        data : {
            post :1
        },
        success(res){
            console.log(res,'----post-----');
        }
    })
 */

const cacheXhr = {};
export function ajax(config) {
    const defaults = {
        url: '',
        type: 'get',
        data: '',
        cb: config.success || function () {
        },
    };
    const options = Object.assign({}, defaults, config);

    const getCacheXhr = cacheXhr[`${options.url}, ${options.type}`] || '';
    const [url = '', type = ''] = [getCacheXhr.split(',')[0], getCacheXhr.split(',')[1]];
     
    if (options.url === url && options.type === type) return;
    // return new Promise((resolve,reject) => {
    $.ajax({
        url: options.url,
        type: options.type,
        data: options.data,
        beforeSend() {
            const key = `${options.url}, ${options.type}`;
            cacheXhr[key] = key;
        },
        success(res) {
			// resolve && resolve(res)
			if (options.cb) options.cb(res);
        },
        complete(xhr) {
            delete cacheXhr[`${options.url}, ${options.type}`];
            if (xhr.status === 401) window.location = '/v1/apply/auth';
			if (xhr.status === 403) {
				alert('非法进入该系统');
				window.location = '/';
			}
		},
        error() {
            // if(err === 'Unauthorized') return;
            // if(errType === 'abort') return;
 
            // alert('网络异常请重试' + errType + err);

        },
    });
}

export function query(name) {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

export function ajaxGet(getUrl, getData) {
	return new Promise((resolve) => {
		ajax({
			url: getUrl,
			data: getData,
			success(ret) {
				resolve(ret);
			},
		});
	});
}

export function ajaxPost(postUrl, postData) {
	return new Promise((resolve) => {
		ajax({
			url: postUrl,
			type: 'post',
			data: postData,
			success(ret) {
				resolve(ret);
			},
		});
	});
}
