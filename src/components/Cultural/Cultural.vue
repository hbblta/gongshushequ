<template>
  <div>
    <v-head :message="headData"/>
    <div class="culBody"><img src="../../assets/banner.png" alt=""></div>
    <v-footer/>
  </div>
</template>

<script>
    export default {
        name: "Cultural",
      data(){
          return{
            headData:'文化家园',
          }
      }
    }
</script>

<style scoped>
.culBody{
  width:775px;
  height:371px;
  background:rgba(250,252,255,1);
  box-shadow:0px 1px 8px 0px rgba(35, 21, 24, 0.35);
  border-radius:5px;
  margin-left: 93px;
  margin-top: 19px;
}
 .culBody img{
   width:775px;
   height:371px;
  }
</style>
