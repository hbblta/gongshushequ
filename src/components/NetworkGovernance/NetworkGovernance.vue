<template>
  <div>
    <v-head :message="headData"/>
    <div class="homeTitle">
      <span :class="nowIndex == 0 ? 'nowIndex' : ''" @click="changIndex(0)">文化交融</span>
      <span :class="nowIndex == 1 ? 'nowIndex' : ''" @click="changIndex(1)">制度规范</span>
      <span :class="nowIndex == 2 ? 'nowIndex' : ''" @click="changIndex(2)">党建引领</span>
    </div>
    <div class="homeBody">
        <div class="homeBodyData" @click="goToText(item.type,item.id,item.title)" v-for="(item,index) in list">
          <div class="homeBodyImg"><img :src="item.photos ? item.photos[0] : item.coverUrl ? item.coverUrl : ''" alt=""></div>
          <div class="homeBodyText">
            <p>{{item.title}}</p>
            <div>{{item.createTime}}</div>
          </div>
        </div>
    </div>
    <v-footer/>
  </div>
</template>

<script>
    export default {
        name: "NetworkGovernance",
        data(){
            return{
              headData:'网络治理',
              nowIndex : 0,
              list:[]
            }
        },
      mounted() {
        this.ajax.get('categories/5?pattern=full').then((res) => {
          this.allList  = res.data.children
          this.list = this.allList[this.nowIndex].articles
        })
      },
      methods:{
        changIndex(index){
          this.nowIndex = index
          this.list = this.allList[this.nowIndex].articles
        },
        goToText(type,id,title) {
          if(type == 'text'){
            this.$router.push({
              path: '/textImg',
              query:{
                id: id,
                title : title
              }
            })
          }else{
            this.$router.push({
              path: '/videosHtml',
              query:{
                id: id,
                title : title
              }
            })
          }
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
    width:730px;
    height:331px;
    background:rgba(250,252,255,1);
    margin-left: 116px;
    margin-top: 19px;
    overflow: hidden;
    overflow-y: scroll;
  }
  .homeBodyData{
    width:607px;
    height:70px;
    display: flex;
    box-shadow:0px 1px 6px 0px rgba(0, 0, 0, 0.25);
    margin-top: 17px;
    margin-left: 36px;
    padding: 7px 15px 7px 15px;
  }
  .homeBodyImg img{
    width:93px;
    height:70px;
  }
  .homeBodyText{
    margin-left: 11px;
  }
  .homeBodyText p{
    font-size:16px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(51,51,51,1);
    margin-top: 5px;
  }
  .homeBodyText div{
    font-size:12px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(142,142,147,1);
    margin-top: 20px;
  }
</style>
