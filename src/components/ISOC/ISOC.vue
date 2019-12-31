<template>
    <div>
      <v-head :message="headData"/>
        <div class="allBody">
          <div class="leftBody">
            <div v-for="(item,index) in rightBodyTextList" @click="nowIndexs(index)" :class="nowIndex == index ?  'nowIndex' : ''">{{item.title}}</div>
          </div>
          <div class="rightBody">
            <div class="rightBodyText" ref="rightBodyText">
            </div>
          </div>
        </div>
      <v-footer/>
    </div>
</template>

<script>
    export default {
        name: "ISOC",
      data(){
          return{
            headData :'互联网协会',
            nowIndex:0,
            rightBodyTextList : []
        }
      },
      mounted() {

        this.ajax.get('categories/3?pattern=full').then((res) => {
          this.rightBodyTextList = res.data.articles
          this.$refs.rightBodyText.innerHTML = this.rightBodyTextList[this.nowIndex].body
        })
      },
      methods:{
        nowIndexs(index){
          this.nowIndex = index
          this.$refs.rightBodyText.innerHTML = this.rightBodyTextList[this.nowIndex].body
        }
    }
    }
</script>

<style scoped>
  ::-webkit-scrollbar-track { background-color: white;  }
  ::-webkit-scrollbar {  width: 5px;height:8px;  background-color: #D8D8D8;border-radius: 5px;  }
  ::-webkit-scrollbar-thumb { /* */background: #D8D8D8;border-radius: 5px; }
  ::-webkit-scrollbar-corner{ background-color: #D8D8D8;}
.allBody{
  display: flex;
  margin-left: 50px;
}
.leftBody{
  margin-top: 27px;
  cursor:pointer;
}
.leftBody div{
  width:130px;
  height:40px;
  background:rgba(255,255,255,1);
  box-shadow:0px 1px 3px 0px rgba(7,0,2,0.2);
  border-radius:5px;
  font-size:20px;
  font-family:PingFangSC;
  font-weight:500;
  color:rgba(102,102,102,1);
  line-height: 40px;
  text-align: center;
  margin-top: 25px;
}
  .rightBody{
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 3px 0px rgba(7,0,2,0.2);
    border-radius:5px 5px 5px 5px;
    margin-left: 56px;
    margin-top: 42px;
  }
  .rightBodyText{
    width:543px;
    height:286px;
    background: white;
    padding: 20px;
  }
  .rightBodyText{
    font-size:17px;
    font-family:PingFangSC,serif;
    padding-top: 20px;
    overflow: hidden;
    overflow-y: auto;
    font-weight:400;
    border-radius: 5px;
    color:rgba(51,51,51,1);
    line-height: 26px;
  }
  .nowIndex{
    background:rgba(218,45,55,1)!important;
    color:rgba(255,255,255,1)!important;
  }
</style>
