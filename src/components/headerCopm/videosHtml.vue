<template>
  <div>
    <v-head :message="headData"/>
    <div class="arthuryBody">
      <v-videos :videoData="videoSrc"/>
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
  }
</style>
