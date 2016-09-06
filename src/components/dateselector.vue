<style lang="sass">
    #calendar {
        display: inline-block;
        margin: 12px 20px 0 0;
        min-width: 300px;
        vertical-align: top;
        input {
            border: 1px solid #efefef;
            border-radius: 5px;
            min-width: 50px;
            padding: 5px;
            box-shadow: 0 0 30px rgba(0,0,0,.1);
            text-align: center;
        }
    }
</style>

<template>
    <article id="calendar">
        <input type="text" v-model="starttime" @click="showCalendar($event,0)" placeholder="请选择开始时间" readonly/>
        <calendar :type="type" :show.sync="showArr[0]" :value.sync="starttime" :x="x" :y="y" :begin="begin" :end="end" :range="range"></calendar>
        &nbsp;~&nbsp;
        <input type="text" v-model="endtime" @click="showCalendar($event,1)" placeholder="请选择结束时间" readonly/>
        <calendar :type="type" :show.sync="showArr[1]" :value.sync="endtime" :x="x" :y="y" :begin="begin" :end="end" :range="range"></calendar>
    </article>
</template>

<script>
    import $ from "jquery";
    export default {
        data () {
            return {
                showArr: [false,false],
                type:"date", //date datetime
                begin:"2016-1-1",
                end:"2018-12-25",
                x:1000,
                y:100,
                range:false//是否多选
            }
        },
        props : ['starttime','endtime'],
        ready (){},
        methods: {
            showCalendar (e,index){
                e.stopPropagation();
                var that=this;
                that.$set('showArr',[false,false]);
                that.$set('showArr[' + index + ']',true);
                that.x=e.target.offsetLeft;
                that.y=e.target.offsetTop+e.target.offsetHeight+8;
                var bindHide=function(e){
                    e.stopPropagation();
                    that.$set('showArr[' + index + ']',false);
                    document.removeEventListener('click',bindHide,false);
                };
                setTimeout(function(){
                    document.addEventListener('click',bindHide,false);
                },500);
            }
        },
        components : {
            calendar: require('./calendar.vue')
        }
    }
</script>
