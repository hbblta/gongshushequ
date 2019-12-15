<template>
    <div>
      <v-head  :message="headData"></v-head>
      <div class="intBody">
        <div>
          <div class="banner">
            <img src="../../assets/banner.png" alt="">
          </div>
        </div>
        <div class="AllIntTitle">
          <div class="intTitle">
            <span :class="nowIndexs == 0 ? 'nowIndex' : ''" @click="nowIndex(0)">
              基本情况
            </span><span :class="nowIndexs == 1 ? 'nowIndex' : ''" @click="nowIndex(1)">
              重点党组织
            </span><span :class="nowIndexs == 2 ? 'nowIndex' : ''" @click="nowIndex(2)">
              党员风采
            </span>
          </div>
          <div class="AllIntText">
            <div class="intText" v-for="(item,index) in 5">
              <div><img src="../../assets/erweima.png" alt=""></div>
              <span>浙江丹道网络科技有限公司始建于1999年,2008年公司党支部升格为集团党委，下辖3，，下辖3个二级党委、1个总支、2个直属支部，共有党，下辖3个二级党委、1个总支、2个直属支部，共有党下辖3个二级党委、1个总支、2个直属支部，共有党直属支部，共有党，下辖3个二级党委、1个总支、2个直属支部，共有党</span>
            </div>
          </div>
        </div>
      </div>
      <v-footer></v-footer>
    </div>
</template>

<script>
    export default {
        name: "Internet",
      data(){
          return{
            headData: '互联网党建',
            nowIndexs : 0
          }
      },
      methods:{
        nowIndex(index){
          this.nowIndexs = index
        }
      }
    }
</script>

<style scoped>
.intBody{
  margin-top: 52px;
}
  .banner img{
    margin-right: 20px;
    margin-top: 20px;
    width:452px;
    height:302px;
  }
  .intBody{
    display: flex;
    margin-left: 44px;
  }
  .intTitle{
    margin-top: 10px;
  }
  .intTitle span{
    display: inline-block;
    width:110px;
    height:34px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 5px 0px rgba(0, 0, 0, 0.25);
    border-radius:6px;
    line-height: 34px;
    text-align: center;
    font-size:17px;
    font-family:PingFangSC;
    font-weight:500;
    color:rgba(102,102,102,1);
    cursor: pointer;
    margin-left: 19px;
  }
  .AllIntTitle{
    width:406px;
    height:350px;
    background:rgba(250,252,255,1);
    box-shadow:0px 1px 8px 0px rgba(35,24,21,0.2);
  }
  .AllIntText{
    height: 290px;
    overflow: hidden;
    margin-top: 5px;
    overflow-y: scroll;
  }
  .nowIndex{
    color:rgba(255,255,255,1) !important;
    background:rgba(218,45,55,1) !important;
  }
  .intText{
    display: flex;
    width:342px;
    height:97px;
    margin-top: 13px;
    align-items: center;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 5px 0px rgba(0, 0, 0, 0.25);
    margin-left: 18px;
    margin-right: 12px;
    padding-left: 14px;
    padding-right: 8px;
  }
  .intText span{
    display: inline-block;
    font-size:12px;
    font-family:PingFangSC;
    font-weight:400;
    padding-left: 11px;
    height: 48px;
    color:rgba(51,51,51,1);
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
  }
  .intText div{
    width:93px;
    height:70px;
  }
  .intText div img{
    width:93px;
    height:70px;
  }
</style>
