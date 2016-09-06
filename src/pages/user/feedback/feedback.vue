<style lang="sass">
    #feedbackBox {
        display: inline-block;
        width: 100%;
        vertical-align: top;
        #feedbackTableTitle {
            h2 {
                display: inline-block;
                color: #ffffff;
                margin: 0 0 0 10px;
                font-size: 20px;
                font-weight: bolder;
                letter-spacing: 1px;
                vertical-align: bottom;
            }
            h3 {
                display: inline-block;
                color: rgba(255, 255, 255, .6);
                margin: 0 0 0 10px;
                font-size: 12px;
                font-weight: bolder;
                letter-spacing: 1px;
                vertical-align: bottom;
            }
        }
        .finished {
            color: #00D600;
            &:after {
                content: '√';
                font-size: 22px;
                font-weight: bold;
                color: #00D600;
                margin: 0 5px;
            }
        }
        .dealing {
            color: #6699FF;
                &:after {
                    content: 'doing';
                    font-size: 14px;
                    color: #6699FF;
                    margin: 0 5px;
            }
        }
        .marksno {
            color: #ff8f4b;
            &:before {
                content : '★';
                font-size: 22px;
            }
        }
        .mark {
            color: #ff8f4b;
        }
    }
</style>

<template>
    <div id="feedbackBox">
        <section>
            <div id="feedbackTableTitle">
                <h2>学员问题反馈</h2>
                <h3>点击“查看详情”查看详细反馈内容和截图。点击"完成处理"，将该记录设置为已处理。</h3><br/>
                <feedbackbtn :status="status"
                             :type="type"
                             :cur="current"></feedbackbtn>
                <feedbacksel :type="type"
                             :cate="category"
                             :status="status"
                             :cur="current"></feedbacksel>
            </div>
            <vuetable :tablehead="tablehead" :tablebody="tablebody"></vuetable>
        </section>

        <div>
            <mypage :current="current" :total="total"
                    :rows="rows"
                    :controller="controller" :action="action"
                    :obj.sync="obj"></mypage>
        </div>
    </div>
</template>

<script>
    import { initFeedbackList } from '../../../vuex/action/user.action';
    import { getDetail } from '../../../config/apis/user.api';

    import vuetable from '../../../components/vuetable.vue';
    import mypage from '../../../components/datagrid.vue';
    import feedbackbtn from './feedback-btn.vue';
    import feedbacksel from './feedback-select.vue';
    export default{
        data() {
            return {
                tablehead: ['学号', 'openid', '学期数', '昵称', '问题类型', '提交时间', '反馈内容', '设备和系统'],
                tablebody: [],
                cate: [],
                open_status: -1,
                controller: 'user',
                action: 'switch',
                obj: {
                    status: 0,
                    type: 0,
                },
            };
        },
        vuex: {
            getters: {
                list: state => state.user.list,
                current: state => state.user.current,
                total: state => state.user.total,
                rows: state => state.user.rows,
                status: state => state.user.status,
                type: state => state.user.type,
                category: state => state.user.category,
            },
            actions: {
                init: initFeedbackList,
            },
        },
        route: {
            data(transition) {
                transition.next();
                this.init();
            },
            activate(transition) {
                transition.next();
            },
            deactivate(transition) {
                transition.next();
            },
            canActivate(transition) {
                transition.next();
            },
        },
        ready() {},
        methods: {
            initbody() {
                let temparr = [];
                this.$set('tablebody', []);
                const tempList = this.list;
                for (let i = 0; i < tempList.length; i++) {
                    temparr = [];
                    temparr.push({
                        html: tempList[i].sno,
                        name: tempList[i].mark === 1 ? 'marksno' : '',
                    }, {
                        html: tempList[i].openid,
                        name: '',
                    }, {
                        html: tempList[i].term,
                        name: tempList[i].mark === 1 ? 'mark' : '',
                    }, {
                        html: tempList[i].nickname,
                        name: tempList[i].mark === 1 ? 'mark' : '',
                    }, {
                        html: tempList[i].cate,
                        name: '',
                    }, {
                        html: tempList[i].submit_time,
                        name: '',
                    }, {
                        html: `${tempList[i].content.substr(0, 20)}...`,
                        name: tempList[i].status === 1 ? 'finished' :
                                (tempList[i].status === 2 ? 'dealing' : ''),
                    }, {
                        html: `${tempList[i].equipment}<br/>${tempList[i].system}`,
                        name: '',
                    });
                    this.tablebody.push(temparr);
                }
            },
            openDetail() {
                const tempid = {
                    id: 123,
                };
                getDetail(tempid).then(ret => {
                    if (ret.errcode === 0) {
//                       console.log(ret);
                    }
                });
            },
            close() {
                this.$set('open_status', -1);
            },
        },
        events: {
            'watchlist'(list) {
                this.$set('list', list);
            },
        },
        components: {
            vuetable, mypage, feedbackbtn, feedbacksel,
        },
        computed: {
            obj() {
                return {
                    status: this.status,
                    type: this.type,
                };
            },
        },
        watch: {
            list() {
                this.initbody();
            },
        },
    };

</script>