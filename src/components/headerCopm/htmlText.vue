<template>
  <div>
    <v-head :message="headData"></v-head>
    <div class="textBody">
      <iframe
        class="textBodyData"
        v-bind:src="links"
      ></iframe>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  export default {
    name: "textImg",
    data(){
      return{
        headData : '',
        links : ''
      }
    },
    mounted() {
      this.ajax.get('articles/'+this.$route.query.id).then((res) => {
        this.links = res.data.links[0]
        this.headData = this.$route.query.title
      })
    }
  }
</script>

<style scoped>
  ::-webkit-scrollbar-track { background-color: white;  }
  ::-webkit-scrollbar {  width: 5px;height:8px;  background-color: #D8D8D8;border-radius: 5px;  }
  ::-webkit-scrollbar-thumb { /* */background: #D8D8D8;border-radius: 5px; }
  ::-webkit-scrollbar-corner{ background-color: #D8D8D8;}
  .textBody{
    width:800px;
    height:380px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 3px 0px rgba(7,0,2,0.2);
    border-radius:5px;
    margin-left: 50px;
    margin-top: 15px;
    padding-right: 30px;
    padding-left: 30px;
    padding-top: 20px;
    overflow: hidden;
    overflow-y: auto;
  }
  .textBody div{
    font-size:15px;
    font-family:PingFangSC,serif;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height: 26px;
  }
  .textBodyData{
    boder:none;
    width:800px;
    height:360px;
  }
</style>
