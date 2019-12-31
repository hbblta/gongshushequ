<template>
  <div>
    <v-head :message="headData"/>
    <div class="arthuryBody">
      <v-videos :videoData="videoSrc"/>
      <div ref="text" class="textBodyData"></div>
    </div>

    <v-footer/>
  </div>
</template>

<script>
  export default {
    name: "videosHtml",
    data(){
      return{
        headData:'',
        videoSrc : ''
      }
    },
    mounted() {
      this.ajax.get('articles/'+this.$route.query.id).then((res) => {
        this.videoSrc = res.data.videos[0]
        this.$refs.text.innerHTML = res.data.body
        this.headData = this.$route.query.title
      })
    },
  }
</script>

<style scoped>
  .arthuryBody{
    width:776px;
    height:364px;;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 5px 0px rgba(0, 0, 0, 0.25);
    margin: 15px auto 0;
    padding: 18px;
    overflow: hidden;
    overflow-y: scroll;
  }
  /*::-webkit-scrollbar-track { background-color: white;  }*/
  /*::-webkit-scrollbar {  width: 5px;height:8px;  background-color: #D8D8D8;border-radius: 5px;  }*/
  /*::-webkit-scrollbar-thumb { !* *!background: #D8D8D8;border-radius: 5px; }*/
  /*::-webkit-scrollbar-corner{ background-color: #D8D8D8;}*/
  .textBody div{
    font-size:15px;
    font-family:PingFangSC,serif;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height: 26px;
  }
  .textBodyData{
    font-size:15px;
    font-family:PingFangSC,serif;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height: 26px;
    width:780px;
    word-wrap:break-word;
  }
</style>
