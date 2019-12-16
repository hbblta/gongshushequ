<template>
<div>
  <v-head :message="headData"/>
  <div class="arthuryBody">
    <v-videos :videoData="videoSrc" :imgSrc="imgSrc"/>
  </div>
  <v-footer/>
</div>
</template>

<script>
    export default {
        name: "InternetText",
      data(){
        return{
          headData:'网络正能量',
          videoSrc : require('../../assets/437D2592787911E8862FD89EF30F789D.mp4'),
          imgSrc : "https://img02.sogoucdn.com/app/a/200692/42345752787911E8BB8FD89EF30F789D?m-wh=605*277"
        }
      }
    }
</script>

<style scoped>
  arthuryBody{
    width:776px;
    height:364px;;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 5px 0px rgba(0, 0, 0, 0.25);
    margin: 15px auto 0;
    padding: 18px;
  }
</style>
