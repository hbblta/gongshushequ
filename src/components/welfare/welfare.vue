<template>
  <div>
    <v-head :message="headData"></v-head>
    <div class="homeTitle">
      <span :class="nowIndex == 0 ? 'nowIndex' : ''" @click="changIndex(0)">视频</span>
      <span :class="nowIndex == 1 ? 'nowIndex' : ''" @click="changIndex(1)">图文</span>
    </div>
    <div class="homeBody">
      <div>
        <div class="downMore left"><img @click="rightMore" src="../../assets/left.png" alt=""></div>
        <div class="aboutText">
          <div class="aboutTextData" v-if="oneData">
            <img :src="oneData.img" alt="">
            <div>{{oneData.dizhi}}</div>
            <hr>
          </div>
          <div class="aboutTextData aboutTextDataTwo" v-if="twoData">
            <img :src="twoData.img" alt="">
            <div>{{twoData.dizhi}}</div>
            <hr>
          </div>
        </div>
        <div @click="leftMore" class="downMore right"><img src="../../assets/right.png" alt=""></div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  export default {
    name: "welfare",
    data(){
      return{
        headData:'网络公益',
        nowIndex : 0,
        oneData :null,
        twoData :null,
        oneIndex : 0,
        twoIndex : 1,
        list:[
          {
            img:require('../../assets/homeMsg.png'),
            dizhi:'拱墅区发起环境保护活动为解决现实或潜在的环境问1题，协 调人类与环境的关系...'
          },
          {
            img:require('../../assets/homeMsg.png'),
            dizhi:'拱墅区发起环境保护活动为解决现实或潜在的环2境问题，协 调人类与环境的关系...'
          },
          {
            img:require('../../assets/homeMsg.png'),
            dizhi:'拱墅区发起环境保护活动为解决现实或潜在的环境问3题，协 调人类与环境的关系...'
          },
          {
            img:require('../../assets/homeMsg.png'),
            dizhi:'拱墅区发起环境保护活动为解决现实或潜在的环4境问题，协 调人类与环境的关系...'
          },
          {
            img:require('../../assets/homeMsg.png'),
            dizhi:'拱墅区发起环境保护活动为解决现实或潜在的环境问5题，协 调人类与环境的关系...'
          },
        ]
      }
    },
    mounted() {
      this.oneData = this.list[this.oneIndex]
      this.twoData = this.list[this.twoIndex]

    },
    methods:{
      changIndex(index){
        this.nowIndex = index
      },
      leftMore(){
        if(this.oneIndex == this.list.length || this.twoIndex == this.list.length){
          return
        }
        this.oneIndex  = this.oneIndex + 2
        this.twoIndex  = this.twoIndex + 2
        this.oneData = this.list[this.oneIndex]
        this.twoData = this.list[this.twoIndex]
      },
      rightMore(){
        if(this.oneIndex == 0){
          return
        }
        this.oneIndex  = this.oneIndex - 2
        this.twoIndex  = this.twoIndex - 2
        this.oneData = this.list[this.oneIndex]
        this.twoData = this.list[this.twoIndex]
      }
    }
  }
</script>

<style scoped>
  .homeTitle{
    height: 41px;
    width: 100%;
    text-align: center;
    margin-top:10px;
    margin-bottom: 17px;
  }
  .homeTitle span{
    cursor:pointer;
    display: inline-block;
    margin-right: 20px;
    margin-left: 20px;
    width:130px;
    height:40px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 5px 0px rgba(0, 0, 0, 0.25);
    border-radius:6px;
    font-size:20px;
    font-family:PingFangSC,serif;
    font-weight:500;
    color:rgba(102,102,102,1);
    line-height: 40px;
    text-align: center;
  }
  .nowIndex{
    background:rgba(218,45,55,1)!important;
    color:rgba(255,255,255,1)!important;
  }
  .downMore{
    position: absolute;
    top: 50%;
  }
  .left{
    left: 13px;
  }
  .right{
    right: 13px;
  }
  .downMore img{
    width:22px;
    height:36px;
  }
  .aboutText{
    display: flex;
    height:350px;
  }
  .aboutTextData{
    width:400px;
    height:325px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 3px 0px rgba(7,0,2,0.2);
    border-radius:5px;
    margin-left: 50px;
    padding: 13px;
  }
  .aboutTextDataTwo{
    margin-left: 10px;
  }
  .aboutTextData img{
    width:400px;
    height:250px;
    border-radius:3px;
  }
  .aboutTextData div{
    font-size:14px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(153,153,153,1);
    padding-top: 10px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;

  }
  .aboutTextData hr{
    height:1px;
    background:rgba(170,170,170,1);
  }
</style>

