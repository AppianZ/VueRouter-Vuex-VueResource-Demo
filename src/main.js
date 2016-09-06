import './assets/scss/_reset.scss';
import './main.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import $ from 'jquery';
import ROUTER from './router';
import store from './vuex/store';


if (process.env.NODE_ENV !== 'production') {
	// console.log('There isnt production');
}

Vue.use(VueRouter);
Vue.use(Vuex);
const router = new VueRouter({
    hashbang: false,
});

router.map(ROUTER.map);

const app = Vue.extend({
    el() {
        return 'html';
    },
    data() {
        return {
            navlist: ROUTER.list,
            status: ROUTER.status,
            optionArr: [],
            termSelect: 1,
        };
    },
    route: {
        data(transition) {
            // Todo 判断登录的请求
           /* $.ajax({
                url: '/forchange/login/check',
                type: 'get',
                success(ret) {
                    if (ret.errcode === -2) {
                        router.go({ name: 'login' });
                    } else {
                        alert('登录成功');
                    }
                },
            });*/
            transition.next();
        },
    },
    ready() {
        // Todo 渲染select的期数选择
        this.optionArr.length = 0;
        const self = this;
        $.ajax({
            url: '/forchange/index/term',
            data: {},
            type: 'get',
            success(ret) {
                if (ret.errcode === 0) {
                    for (let i = 0; i < ret.errmsg.length; i++) {
                        self.optionArr.push({
                            id: ret.errmsg[i].id,
                            name: ret.errmsg[i].name,
                        });
                    }
                    self.$set('termSelect', ret.current_term);
                } else {
                    // alert(ret.errmsg);
                }
            },
        });
    },
    methods: {
        homepage() {
            router.go({ name: 'homepage' });
        },
        hide() {
            const $nav = $('#nav');
            const $content = $('#content');
            $nav.toggleClass('hidenav');
            $('#seaInput').toggleClass('hideinput');
            if ($nav.attr('class')) {
                const tempWidth1 = $content.width() + 200;
                $content.css('width', `${tempWidth1}px`);
            } else {
                const tempWidth2 = $content.width() - 200;
                $content.css('width', `${tempWidth2}px`);
            }
        },
        click(num) {
            this.$set(`status[${num}]`, !this.status[num]);
        },
        signout() {
            $.ajax({
                url: '/forchange/login/out',
                type: 'get',
                success(ret) {
                    if (ret.errcode === 0) {
                        router.go({ name: 'login' });
                    } else {
                        alert(ret.errmsg);
                    }
                },
            });
        },
        change() {
            const self = this;
            $.ajax({
                url: '/forchange/term/choice',
                type: 'get',
                data: {
                    id: self.termSelect,
                },
                success(ret) {
                    if (ret.errcode === 0) {
                        window.location.reload();
                        router.go({ name: 'homepage' });
                    } else alert('系统错误，请联系嘉炜');
                },
            });
        },
    },
    store,
});

router.start(app, '#app');
window.router = router;
