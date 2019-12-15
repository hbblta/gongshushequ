<template>
    <div>
      <v-head :message="headData"></v-head>
      <div class="homeBody">
        <div class="homeBodyLeft">
          <div class="allTitleImg">
            <div v-for="(item,index) in list" @click="goToUrl(item.url)" :key="index">
              <img class="titleImg" :src="item.img" alt="">
            </div>
          </div>
        </div>
        <div class="homeBodyRight">
          <div class="banner"><img src="../assets/banner.png" alt=""></div>
          <div class="erweimaImg">
            <img src="../assets/erweima.png" alt="">
            <img src="../assets/erweima.png" alt="">
          </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
            headData: '拱宸网络家园',
            list:[
              {
                img:require('../assets/homeMsg.png'),
                name:'家园介绍',
                url:'/homestea'
              },
              {
                img:require('../assets/homeMsg.png'),
                name:'家园介绍',
                url:'/Internet'
              },
              {
                img:require('../assets/homeMsg.png'),
                name:'家园介绍',
                url:'/ISOC'
              },
              {
                img:require('../assets/homeMsg.png'),
                name:'家园介绍'
              },
              {
                img:require('../assets/homeMsg.png'),
                name:'家园介绍'
              },
              {
                img:require('../assets/homeMsg.png'),
                name:'家园介绍'
              },
              {
                img:require('../assets/homeMsg.png'),
                name:'家园介绍'
              },
              {
                img:require('../assets/homeMsg.png'),
                name:'家园介绍'
              },
              {
                img:require('../assets/homeMsg.png'),
                name:'家园介绍'
              },
            ]
          }
        },
        created(){
        },
      methods:{
        goToUrl(url){
          this.$router.push({
            path:url,
            // query:{
            //   id:this.id ,
            // }
          })
        }
      }
    }
</script>

<style scoped>
  .titleImg{
    width:161px;
    height:113px;
    border-radius:10px 10px 10px 10px;
  }
  .allTitleImg{
    display: flex;
    flex-wrap: wrap;
  }
  .homeBody{
    display: flex;
    margin-top: 43px;
    padding-left: 44px;
    padding-right: 42px;
  }
  .allTitleImg div{
    padding-right: 23px;
    padding-bottom: 24px;
  }
  .homeBodyLeft{
    width: 555px;
  }
  .homeBodyRight{
    width:313px;
    height:209px;
    background: #ddd;
    margin-top: 11px;
  }
  .banner img{
    width:313px;
    height:209px;
  }
  .erweimaImg{
    margin-top: 54px;
  }
  .erweimaImg img{
    width:101px;
    height:101px;
    margin-left: 40px;
  }
</style>
