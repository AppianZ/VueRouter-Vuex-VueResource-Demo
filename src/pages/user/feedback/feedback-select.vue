<template>
    <div class="feedback-select">
        <select v-model="type">
            <option v-for="ca in cate" :value="ca.id" v-text="ca.name"></option>
        </select>
    </div>
</template>

<style lang="sass">
    .feedback-select {
        display: inline-block;
        select {
            display: inline-block;
            color: #13161D;
            width: 120px;
            padding: 3px 10px;
            margin: 0 30px 0 40px;
            border-radius: 5px;
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
        props: ['type', 'cate', 'status', 'cur'],
        watch: {
            type() {
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
