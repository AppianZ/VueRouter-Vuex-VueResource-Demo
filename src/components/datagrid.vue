<style lang="sass">
    #pageBox {
        width: 100%;
        text-align: right;
        margin: 15px 0;
    }

    #pageBox a:hover {
        border-bottom: 2px solid #fff;
        color: #fff;
    }

    .defaultpage {
        color: #ccc;
        font-size: 14px;
        font-weight: bolder;
        padding: 4px 6px;
        margin: 0 3px;
        cursor: pointer;
    }

    .disabledpage {
        color: #444;
    }

    .currentpage {
        background: #fff;
        color: #333;
    }

</style>

<template>
    <div id="pageBox">
        <a class="defaultpage" :class="{'disabledpage':current==1}" @click="pre">上一页</a>
        <a v-for="n in length" class="defaultpage"
           :class="{'currentpage':begin+n==current}"
           @click="jump(begin+n)">{{begin+n}}</a>
        <a class="defaultpage" :class="{'disabledpage':current == pages}" @click="next">下一页</a>
    </div>
</template>

<script>
    import { generateNewList } from '../vuex/action/common.action';
    export default {
        data() {
            return {
                list: this.list,
            };
        },
        props: {
            current: Number, // 当前页
            rows: Number, // 每页行数
            total: Number, // 总记录数
            controller: String,
            action: String,
            obj: Object,
        },
        vuex: {
            actions: {
                generate: generateNewList,
            },
        },
        methods: {
            next() {
                if (this.current === this.pages) return;
                this.current += 1;
//                console.log(`现在正在点击下一页按钮：${this.current}`);
                this.post();
            },
            pre() {
                if (this.current === 1) return;
                this.current -= 1;
//                console.log(`现在正在点击上一页按钮：${this.current}`);
                this.post();
            },
            jump(page) {
                if (this.current === page) return;
                this.current = page;
//                console.log(`跳到第${this.current}页`);
                this.post();
            },
            post() {
                const ajaxObj = this.obj || {};
                ajaxObj.current = this.current;
                this.generate(this.controller, this.action, ajaxObj);
            },
        },
        computed: {
            pages() {
                const pages = this.total / this.rows;
                return parseInt(pages, 10) === pages ? pages : parseInt(pages, 10) + 1;
            },
            begin() {
                if (this.pages <= 10 || this.current <= 6) return 1;
                if (this.pages - this.current <= 4) return this.pages - 9;
                return this.current - 5;
            },
            length() {
                if (this.pages <= 10) return this.pages;
                return 10;
            },
        },
        watch: {
            'list'() {
                this.$dispatch('watchlist', this.list);
            },
        },
    };
</script>
