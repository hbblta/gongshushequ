<template>
    <div>
      <v-head :message="headData"/>
      <div class="homeTitle">
        <span :class="nowIndex == 0 ? 'nowIndex' : ''" @click="changIndex(0)">指导思想</span>
        <span :class="nowIndex == 1 ? 'nowIndex' : ''" @click="changIndex(1)">基本原则</span>
        <span :class="nowIndex == 2 ? 'nowIndex' : ''" @click="changIndex(2)">功能区块</span>
        <span :class="nowIndex == 3 ? 'nowIndex' : ''" @click="changIndex(3)">参与方式</span>
      </div>
      <div class="homeBody">
        <div ref="homeBody"></div>
      </div>
      <v-footer/>
    </div>
</template>

<script>
    export default {
        name: "homestea",
        data(){
            return{
              headData:'家园介绍',
              nowIndex : 0,
              msg:''
            }
        },
      mounted() {
        this.changIndex(0)
      },
      methods:{
            changIndex(index){
              this.nowIndex = index
              let url = 'articles/'+(index+1)
              this.ajax.get(url).then((res) => {
                this.$refs.homeBody.innerHTML =  res.data.body
              })
            },
        }
    }
</script>

<style scoped>
  ::-webkit-scrollbar-track { background-color: white; border-top-right-radius:5px;border-bottom-right-radius:5px;}
  ::-webkit-scrollbar {  width: 5px;height:8px;  background-color: #D8D8D8;border-top-right-radius:5px;border-bottom-right-radius:5px;}
  ::-webkit-scrollbar-thumb { /* */background: #D8D8D8;border-radius: 5px; }
  ::-webkit-scrollbar-corner{ background-color: #D8D8D8;}
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
    margin-left: 22px;
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
  .homeBody{
    width:775px;
    height:343px;
    background:rgba(250,252,255,1);
    box-shadow:0px 1px 8px 0px rgba(35, 21, 24, 0.35);
    /*border-radius:10px;*/
    border-radius: 10px 3px 3px 10px;
    margin: 0 auto;
    overflow: hidden;
    overflow-y:auto;
  }
  .homeBody div{
    font-size:15px;
    font-family:PingFangSC,serif;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height: 26px;
    text-indent:2em;
    padding: 21px 46px 27px 46px;
  }
</style>
