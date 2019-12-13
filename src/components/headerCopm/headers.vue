<template>
  <div id="head">
    {{message}}
  </div>
</template>

<script>
    export default {
        name: "headers",
        data (){
          return{

          }
        },
      props:["message"]
    }
</script>

<style scoped>
 #head{
   min-width:960px;
   height:50px;
   line-height: 50px;
   text-align: center;
   font-size:24px;
   font-family:PingFangSC;
   font-weight:500;
   color:rgba(255,255,255,1);
   background: #C93E3E;
 }
</style>
