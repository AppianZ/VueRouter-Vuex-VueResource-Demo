<template>
    <div class="feedback-btn">
        <button @click="jump(0)" :class="{'selectedBtn' : status === 0 }">全部信息</button>
        <button @click="jump(1)" :class="{'selectedBtn' : status === 1 }">未处理</button>
        <button @click="jump(2)" :class="{'selectedBtn' : status === 2 }">处理中</button>
        <button @click="jump(3)" :class="{'selectedBtn' : status === 3 }">已处理</button>
        <button @click="jump(4)" :class="{'selectedBtn' : status === 4 }">已收藏</button>
    </div>
</template>

<style lang="sass">
    .feedback-btn {
        display: inline-block;
        button,a {
            padding: 3px 10px;
            margin: 12px 12px 0 0;
            border-radius: 5px;
            border: 0;
            background: #efefef;
            &:hover {
                color: #fff;
                background: #aaa;
                box-shadow: 0 0 20px rgba(255,255,256,0.4);
            }
        }
        .selectedBtn{
            color: #fff;
            background: #aaa;
            box-shadow: 0 0 20px rgba(255,255,256,0.4);
        }
    }
</style>

<script>
    import { switchFeedbackContent } from '../../../vuex/action/user.action';
    export default{
        data() {
            return {
            };
        },
        props: ['status', 'type', 'cur'],
        methods: {
            jump(num) {
                this.$set('status', num);
                this.switch('user', 'switch', {
                    status: this.status,
                    type: this.type,
                    current: this.cur,
                });
            },
        },
        vuex: {
            actions: {
                switch: switchFeedbackContent,
            },
        },
    };
</script>
