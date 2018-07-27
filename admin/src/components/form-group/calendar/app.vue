<template>
<div id="app">
    <div class="flex">
        <div>
            <span>弹出框</span>
            <input type="text" @click="openByDrop($event)" v-model="calendar3.display" readonly>
            <input type="text" @click="openMultiByDrop($event)" v-model="calendar5.display" readonly>
            <input type="text" @click="openByDialog" :value="calendar4.display" readonly>
        </div>

        <div>
            <span>单选/英文/事件</span>
            <calendar
                ref="calendar1"
                :events="calendar1.events" 
                :lunar="calendar1.lunar" 
                :value="calendar1.value" 
                :begin="calendar1.begin" 
                :end="calendar1.end" 
                :weeks="calendar1.weeks" 
                :months="calendar1.months" 
                @select="calendar1.select"
                @selectMonth="calendar1.selectMonth"
                @selectYear="calendar1.selectYear"></calendar>
            <button @click="changeEvents">异步更新Price</button>
            <button @click="calendar1.value=[2018,1,Math.floor(Math.random()*30+1)]">动态设置日期</button>
            <button @click="$refs.calendar1.setToday()">返回今天</button>
        </div>

        <div>
            <span>多选/农历</span>
            <calendar :range="calendar2.range" :lunar="calendar2.lunar" :value="calendar2.value" :begin="calendar2.begin" :end="calendar2.end" @select="calendar2.select"></calendar>
        </div>
    </div>

    <transition name="fade">
    <div class="calendar-dropdown" :style="{'left':calendar3.left+'px','top':calendar3.top+'px'}" v-if="calendar3.show">
        <calendar :zero="calendar3.zero" :lunar="calendar3.lunar" :value="calendar3.value" :begin="calendar3.begin" :end="calendar3.end" @select="calendar3.select"></calendar>
    </div>
    </transition>

    <transition name="fade">
    <div class="calendar-dropdown" :style="{'left':calendar5.left+'px','top':calendar5.top+'px'}" v-if="calendar5.show">
        <calendar :zero="calendar5.zero" :disabled="calendar5.disabled" :lunar="calendar5.lunar" :value="calendar5.value" :multi="calendar5.multi" @select="calendar5.select"></calendar>
    </div>
    </transition>

    <transition name="fade">
    <div class="calendar-dialog" v-if="calendar4.show">
        <div class="calendar-dialog-mask" @click="closeByDialog"></div>
        
        <div class="calendar-dialog-body">
            <calendar :range="calendar4.range" :zero="calendar4.zero" :lunar="calendar4.lunar" :value="calendar4.value"  @select="calendar4.select"></calendar>
        </div>
        
    </div>
    </transition>
</div>
</template>

<script>
 
import calendar from './calendar.vue'

export default {
    name: 'app',
    components: {
        calendar
    },
    data(){
        return {
            calendar1:{
                value:[2017,7,20], //默认日期
                // lunar:true, //显示农历
                weeks:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                events:{
                    '2017-7-7':'$408',
                    '2017-7-20':'$408',
                    '2017-7-21':'$460',
                    '2017-7-22':'$500',
                },
                select(value){
                    console.log(value.toString());
                },
                selectMonth(month,year){
                    console.log(year,month)
                },
                selectYear(year){
                    console.log(year)
                },
                timestamp:Date.now()
            },
            calendar2:{
                range:true,
                value:[[2017,12,1],[2019,2,16]], //默认日期
                lunar:true, //显示农历
                begin:[2017,2,16], //可选开始日期
                end:[2019,2,16], //可选结束日期
                select(begin,end){
                    // console.log(begin.toString(),end.toString());
                }
            },
            calendar3:{
                display:"2018/02/16",
                show:false,
                zero:true,
                value:[2018,2,16], //默认日期
                lunar:true, //显示农历
                select:(value)=>{
                    this.calendar3.show=false;
                    this.calendar3.value=value;
                    this.calendar3.display=value.join("/");
                }
            },
            calendar4:{
                display:"2018/02/16 ~ 2019/02/16",
                show:false,
                range:true,
                zero:true,
                value:[[2018,2,16],[2019,2,16]], //默认日期
                lunar:true, //显示农历
                select:(begin,end)=>{
                    console.log(begin,end)
                    this.calendar4.show=false;
                    this.calendar4.value=[begin,end];
                    this.calendar4.display=begin.join("/")+" ~ "+end.join("/");
                }
            },
            // 多选
            calendar5:{
                display:"2017/11/2,2017/12/2",
                multi:true,
                show:false,
                zero:true,
                value:[[2017,11,1],[2017,11,2]], //默认日期
                disabled:[[2017,12,24],[2017,12,25]], //默认日期
                lunar:true, //显示农历
                select:(value)=>{

                    let displayValue=[]
                    value.forEach(v=>{
                        displayValue.push(v[0]+"/"+(v[1])+"/"+v[2])
                    })
                    console.log(displayValue);
                    this.calendar5.display=displayValue.join(",");
                    // this.calendar5.show=false;
                    this.calendar5.value=value;
                    
                }
            },
        }
    },
    methods:{
        openByDrop(e){
            this.calendar3.show=true;
            this.calendar3.left=e.target.offsetLeft+19;
            this.calendar3.top=e.target.offsetTop+70;
           
            e.stopPropagation();
            window.setTimeout(()=>{
                document.addEventListener("click",(e)=>{
                    this.calendar3.show=false;
                    document.removeEventListener("click",()=>{},false);
                },false);
            },1000)
        },
        openByDialog(){
            this.calendar4.show=true;
        },
        closeByDialog(){
            this.calendar4.show=false;
        },
        openMultiByDrop(e){
            this.calendar5.show=true;
            this.calendar5.left=e.target.offsetLeft+19;
            this.calendar5.top=e.target.offsetTop+70;
            e.stopPropagation();
            window.setTimeout(()=>{
                document.addEventListener("click",(e)=>{
                    this.calendar5.show=false;
                    document.removeEventListener("click",()=>{},false);
                },false);
            },1000)
        },
        changeEvents(){
            this.calendar1.events={
                '2017-7-20':'$'+(Math.random()*1000>>0),
                '2017-7-21':'$'+(Math.random()*1000>>0),
                '2017-7-22':'$'+(Math.random()*1000>>0),
            }
        }
    }
}
</script>

