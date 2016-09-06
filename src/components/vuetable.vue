<template>
    <div class="appian-box">
        <table class="appian">
            <thead>
            <tr>
                <th v-for="el in tablehead" v-html="el"></th>
                <th>查看详情</th>
            </tr>
            </thead>
            <tr v-for="list in tablebody">
                <td v-for="el in list"
                    v-html="el.html"
                    class='{{el.name}}'></td>
                <td><button @click="openDetail($index)">查看详情</button></td>
            </tr>
        </table>
    </div>
</template>

<style>
    .appian-box {
        margin: 25px 0 0 0;
        background: #fff;
    }
    .appian {
        *border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
    }
    .appian td, .appian th {
        padding: 10px;
        border-bottom: 1px solid #f2f2f2;
        text-align: center;
    }
    .appian tbody tr:nth-child(even) {
        background: #f5f5f5;
        -webkit-box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;
        -moz-box-shadow:0 1px 0 rgba(255,255,255,.8) inset;
        box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;
    }
    .appian tbody tr:hover {
        background: #eee;
    }
    .appian td {
        font-weight: bolder;
    }
    .appian th {
        text-shadow: 0 1px 0 rgba(255,255,255,.5);
        border-bottom: 1px solid #ccc;
        background-color: #eee;
        background-image: -webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#eee));
        background-image: -webkit-linear-gradient(top, #f5f5f5, #eee);
        background-image:    -moz-linear-gradient(top, #f5f5f5, #eee);
        background-image:     -ms-linear-gradient(top, #f5f5f5, #eee);
        background-image:      -o-linear-gradient(top, #f5f5f5, #eee);
        background-image:         linear-gradient(top, #f5f5f5, #eee);
    }

    .appian th:nth-child(1) {
    }

    .appian a,.appian button {
        display: inline-block;
        padding: 4px 6px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        color: #FD9940;
        vertical-align: middle;
        border-radius: 4px;
        background: rgba(255,255,255,0);
        border:0 ;
    }

    .appian a:hover,.appian button:hover {
        background: #EFEFEF;
        box-shadow: 0 0 20px #aaa;
    }
</style>

<script>
    export default{
        data() {
            return {
            };
        },
        methods: {
            openDetail() {
                // 获取聊天列表
            },
        },
        props: ['tablehead', 'tablebody'],
    };
</script>
