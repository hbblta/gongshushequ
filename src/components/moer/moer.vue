<template>
  <div>
    <v-head :message="headData"/>
    <div class="moreData">
        <div class="moreImg">
        <img v-for="(item,index) in 4"  :class="index == 0 ?'' :'moerLeft'" src="../../assets/homeMsg.png" alt="">
      </div>
      <div class="moreText">
        <div class="moreTextFor" :class="index == 0 ?'' :'TextLeft'" v-for="(item,index) in list">
          <div class="moreImgs">
            <img  src="../../assets/more.png" alt="">
            <span>{{item.time}}</span>
          </div>
          <hr style="margin: 4px 0 23px 0;height: 1px;color: rgba(240,240,240,1); background:rgba(240,240,240,1);">
          <div class="moreTitle">{{item.title}}</div>
          <div class="moreTextData">{{item.text}}</div>
        </div>
      </div>
    </div>
    <v-footer/>
  </div>
</template>

<script>
    export default {
        name: "moer",
      data(){
        return{
          headData:'更多',
          list: [
            {
              time:'2019-9-28  07:30',
              title:'浙江五个千亿投资工程实施 看看主要投向 哪些领域..',
              text:'2019年省政府工作报告明确要求：“着力推进数字经济、生命健康、高端装备、文化旅游、能源环保等五个千亿投资工程，谋划实施一批产'
            },
            {
              time:'2019-9-28  07:30',
              title:'浙江五个千亿投资工程实施 看看主要投向 哪些领域..',
              text:'2019年省政府工作报告明确要求：“着力推进数字经济、生命健康、高端装备、文化旅游、能源环保等五个千亿投资工程，谋划实施一批产'
            },
          ]
        }
      },
      methods:{
      }
    }
</script>

<style scoped>
.moreImg img{
  width:161px;
  height:113px;
  border-radius:10px 10px 10px 10px;
}
.moerLeft{
  margin-left: 35px;
}
.TextLeft{
  margin-left: 55px;
}
  .moreData{
    width:762px;
    height:334px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 8px 0px rgba(35,24,21,0.2);
    border-radius:10px;
    margin: 15px auto 0;
    padding: 25px 52px 25px 46px;
  }
  .moreTextFor{
    width:329px;
    height:177px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 8px 0px rgba(35,24,21,0.2);
    border-radius:5px;
    padding:0 9px 9px 9px;
  }
  .moreImgs img{
    width: 31px;
    height: 31px;
    vertical-align: middle ;
  }
  .moreText{
    display: flex;
    margin-top: 23px;
  }
  .moreImgs span{
    font-size:14px;
    font-family:PingFangSC;
    font-weight:500;
    color:rgba(137,137,137,1);
  }
  .moreTitle{
    font-size:16px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(51,51,51,1);
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .moreTextData{
    font-size:12px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-top: 13px;
  }
</style>
