<style lang="sass">
    #homepageBox {
        display: inline-block;
        width: 100%;
        vertical-align: top;
        #homepageTitle {
            background: rgba(0, 0, 0, 0);
            width: 100%;
            height: 50px;
            line-height: 50px;
            color: #838383;
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
        #homepage {
            background: #ffffff;
            padding: 5px 0 20px;
            ul {
                li {
                    border-bottom: 1px dashed #efefef;
                    padding: 10px 20px;
                    h2 {
                        display: inline-block;
                        margin: 0 0 5px 10px;
                        font-size: 16px;
                        font-weight: 800;
                        letter-spacing: 2px;
                        vertical-align: middle;
                        color: #333;
                        font-family: cursive;
                    }
                    h3 {
                        display: inline-block;
                        margin: 0 0 0 15px;
                        font-size: 12px;
                        font-weight: bolder;
                        letter-spacing: 1px;
                        vertical-align: middle;
                        color: #999;
                        font-style: italic;
                    }
                    div {
                        border-left: 4px solid #E2E2E2;
                        margin: 0 0 0 40px;
                        padding: 0 0 0 15px;
                        h4 {
                            font-size: 14px;
                            font-weight: 600;
                            color: #FF9800;
                        }
                        p {
                            margin: 0 0 0 30px;
                            padding: 0 0 5px 0;
                            font-weight: 500;
                        }
                        span {
                            color:red;
                            font-weight: 500;
                        }
                    }
                }
            }
        }
    }
</style>

<template>
    <div id="homepageBox">
        <div id="homepageTitle">
            <h2>使用引导</h2>
            <h3>简要介绍各个模块的业务处理，帮助你快速了解业务</h3>
        </div>
        <article id="homepage">
            <ul>
                <li v-for="el in list">
                    <h2 v-text="el.first"></h2>
                    <h3 v-text="el.sum"></h3><br/>
                    <div v-for="e in el.second">
                        <h4 v-text="e.name"></h4>
                        <p v-html="e.desc"></p>
                    </div>
                </li>
            </ul>

        </article>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                list: [{
                    first: '基本操作',
                    sum: '关于系统一些基本的操作设置',
                    second: [{
                        name: '切换学期数',
                        desc: '在由右上角有<span>下拉框</span>用于切换期数，之后<span>整个后台的数据都将切换到对应期数的所有数据</span>',
                    }, {
                        name: '返回首页',
                        desc: '点击左上角的<span>PandaTeacher的logo</span>区域能够返回首页，查看使用引导',
                    }, {
                        name: '收起导航',
                        desc: '点击logo区域右边的 ' +
                        '<i class="iconfont" style="color:#333">&#xe602;</i>' +
                        ' 能够将右侧导航收起',
                    }],
                }, {
                    first: '用户管理',
                    sum: '主要用于用户的基本信息查询管理、收集用户反馈',
                    second: [{
                        name: '用户列表',
                        desc: '【查询用户信息】、【修改用户信息】、【开除用户】、【调整用户阅读信息】',
                    }, {
                        name: '用户反馈',
                        desc: '【查看用户反馈意见】、【回复用户反馈】、【查看回复历史记录】、【手动完成处理反馈】',
                    }],
                }, {
                    first: '特殊用户',
                    sum: '主要用于管理一些身份特殊的用户，查看基本他们的基本信息',
                    second: [{
                        name: '内容审核员列表',
                        desc: '查看现有的内容审核员有谁，目前只有查看功能，具体操作尚不完善',
                    }, {
                        name: '班长列表',
                        desc: '查看所有班长的详细信息，并可以查看每个班长查看到的内容',
                    }],
                }, {
                    first: '课程管理',
                    sum: '主要用于配置日常阅读内容、课外阅读内容',
                    second: [{
                        name: '日常阅读书籍',
                        desc: '配置日常阅读 <span style="font-weight: 600">第1步</span> ' +
                        '—>【配置封面】、【配置作者】、【配置目录】、【配置阅读内容】，<br/>' +
                        '<span>只关注配置的整本书内容，关注内容样式，不关注卡片顺序！</span>',
                    }, {
                        name: '日常阅读时间',
                        desc: '配置日常阅读时间 <span style="font-weight: 600">第2步</span> ' +
                        '—>【选择一本书】、【规定该书阅读时间始末】—>【规定每天阅读时间始末】' +
                        '—>【挑选每天阅读的卡片】，<br/>' +
                        '<span>只关注配置的时间点和选择的卡片！</span><br/>',
                    }, {
                        name: '课外阅读内容',
                        desc: '配置课外阅读 <span style="font-weight: 600">第1步</span> ' +
                        '—>【配置封面】、【配置作者】、【配置目录】、【配置阅读内容】，<br/>' +
                        '<span>只关注配置的全部内容，关注内容样式，不关注卡片顺序！</span>',
                    }, {
                        name: '课外阅读时间',
                        desc: '配置课外阅读时间 <span style="font-weight: 600">第2步</span>' +
                        ' —>【选择一本书】、【规定该书阅读时间始末】—>【规定每天阅读时间始末】' +
                        '—>【配置每日鸡汤】、【挑选每天阅读的卡片】，<br/>' +
                        '<span>只关注配置的时间点和选择的卡片！</span>' +
                        '<br/> PS:如果想要在一天内阅读完，就配置开始时间和结束时间都是同一个日期即可，测试链接为 ' +
                        '<a style="color:blue;text-decoration:underline;" href="http://www.pandateacher.com/college/extend/read/d/2016-4-1">' +
                        'www.pandateacher.com/college/extend/read/d/2016-4-1</a> ' +
                        '，其中“2016-4-1”可以任意替换成你设置的时间',
                    }],
                }, {
                    first: '阅读管理',
                    sum: '主要用于精准查询学员的卡片阅读时长',
                    second: [{
                        name: '学员阅读时长',
                        desc: '【搜索学员昵称】—>【选择某个学员在阅读某本书的“详情”】—>' +
                        '【查看该学员在该本书的<span>每天</span>' +
                        '的<span>每张</span>卡片阅读时长】，' +
                        '<span>注意表头的时间单位</span>',
                    }],
                }, {
                    first: '考试系统',
                    sum: '主要用于配置每周考试的题目和时间安排',
                    second: [{
                        name: '所有题库',
                        desc: '【配置入学考试】、【配置已有考试“编辑题库”】—>【' +
                        '编辑考题】或【新增考题】进行题目的细节配置，' +
                        '<span>特别注意题型的配置</span><br/>' +
                        '<span>注意“入学考试”的配置是在表头上方的特殊按钮，不在列表内！ </span>' +
                        '<span>在这里只关注考试的内容，设置考题的详细信息！</span>',
                    }, {
                        name: '所有测试',
                        desc: '【增加考试】、【编辑考试】—>【配置考试的考试范围、推送时间、开始时间等】，<span>注意有些内容是必选的</span>',
                    }],
                }, {
                    first: '通知管理',
                    sum: '主要用于查看显示在教务处的各种通知并可以配置消息内容，做到模糊、精准发送',
                    second: [{
                        name: '通知列表',
                        desc: '【查看消息详情】、【调整消息位置】、' +
                        '【配置通知开始时间、结束时间】，' +
                        '<span>注意富文本编辑器的使用</span>',
                    }, {
                        name: '配置客服通知',
                        desc: '客服通知就是最普通的通知【配置通知内容和时间】、' +
                        '【配置发送的人群】、【配置客服名称】，<br/>' +
                        '<span>配置发送对象的条件可以多选(按Ctrl+Alt)或不选</span>',
                    }, {
                        name: '配置时间通知',
                        desc: '时间通知是指，通知的内容中还带有时间的通知【配置通知内容和时间】' +
                        '、【配置发送的人群】、【配置客服名称】，<br/>' +
                        '<span>配置发送对象的条件可以多选(按Ctrl+Alt)或不选</span>',
                    }],
                }, {
                    first: '成绩管理',
                    sum: '主要用于按照不同范围层次查看成绩分布',
                    second: [{
                        name: '学期数据查询',
                        desc: '以“学期”为查看单位【查看本学期每场考试成绩分布】',
                    }, {
                        name: '学员数据查询',
                        desc: '以“学员个人”为查看单位【选择考试+输入学员昵称的模糊搜索】' +
                        '—>【查看学员成绩详情】、【安排补考】，<br/>' +
                        '<span>修改成绩功能尚未开放</span>',
                    }, {
                        name: '班级数据查询',
                        desc: '以“班级”为查看单位【查看所有班级成绩列表】—>【查看某个班级所有考试】—>' +
                        '【查看某班某次考试的成绩分布和前三信息】，<br/>' +
                        '<span>可能出现并列前三的情况</span>',
                    }],
                }, {
                    first: '审核管理',
                    sum: '主要用于各种需要运营审核通过的申请',
                    second: [{
                        name: '内容审核员',
                        desc: '查看内容审核员的申请理由，并【查看详情】、【拒绝】、【同意】',
                    }],
                }, {
                    first: '数据统计',
                    sum: '主要用于各种自嗨的数据',
                    second: [{
                        name: '每日阅读情况',
                        desc: '',
                    }, {
                        desc: '',
                    }, {
                        name: '取关情况',
                        desc: '',
                    }],
                }],
            };
        },
    };
</script>
