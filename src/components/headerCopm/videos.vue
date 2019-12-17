<template>
  <div id="videoDiv">
    <video  @click="plays" ref="videos" :src="videoData" >
    </video>
    <div @click="plays"  v-if="!playBol"  class="video-img"></div>
  </div>
</template>

<script>
    export default {
        name: "videos",
        props:["videoData"],
      data(){
          return{
            playBol:false
          }
      },
      methods:{
        plays(){
          if(this.playBol){
            this.$refs.videos.pause();
          }else{
            this.$refs.videos.play();
          }
          this.playBol = !this.playBol
        }
      }
    }
</script>

<style scoped>
video{
  width:775px;
  height:355px;
  background: #dddddd;
}
#videoDiv{
  position: relative;
}
  .video-img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 75px;
    height: 75px;
    z-index: 999;
    background: url('../../assets/open.png') no-repeat;
    background-size: 100% 100%;
    cursor:pointer
  }
</style>
