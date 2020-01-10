<template>
  <div class="goBack" @click="goBack">
    <img src="../../assets/goBack.png" alt="">
    返回
  </div>
</template>

<script>
    export default {
        name: "foots",
      methods:{
        goBack(){
          this.$router.go(-1)
          // this.$router.push({
          //   path:'/',
          // })
        }
      }
    }
</script>

<style scoped>
  .goBack{
    cursor:pointer;
    width:130px;
    height:40px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 3px 0px rgba(7,0,2,0.1);
    border-radius:5px;
    margin: 20px auto 0;
    font-size:20px;
    font-family:PingFangSC,serif;
    font-weight:500;
    color:rgba(153,153,153,1);
    text-align: center;
    line-height: 40px;
  }
  .goBack img{
    position: relative;
    top: 5px;
    width: 22px;
    height: 22px;
  }
</style>
