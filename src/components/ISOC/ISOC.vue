<template>
    <div>
      <v-head :message="headData"></v-head>
        <div class="allBody">
          <div class="leftBody">
            <div>协会简介</div>
            <div>协会章程</div>
            <div>会员单位</div>
            <div>协会风采</div>
            <div>入会申请</div>
          </div>
          <div class="rightBody">
            <div class="rightBodyText">
              <p>入 会 须 知</p>
              <p>1、拥护本协会的章程；   </p>
              <p>2、有加入本协会的意愿；</p>
              <p>3、在本团体的业务（行业、学科）领域内具有一定影响；</p>
              <p>4、支持并参加本行业的</p>
              <p>5、单位会员应当依法登记并履行社会责任</p>
            </div>
          </div>
        </div>
      <v-footer></v-footer>
    </div>
</template>

<script>
    export default {
        name: "ISOC",
      data(){
          return{
            headData :'互联网协会'
        }
      }
    }
</script>

<style scoped>
.allBody{
  display: flex;
  margin-left: 50px;
}
.leftBody{
  margin-top: 27px;
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
    background: #dddddd;
    padding: 20px;
  }
  .rightBodyText p{
    font-size:16px;
    font-family:PingFangSC;
    font-weight:500;
    color:rgba(255,255,255,1);
    padding-left: 35px;
    padding-top: 20px;
  }
  .rightBodyText p:nth-child(1){
    font-size:23px;
    font-family:PingFangSC;
    font-weight:700;
    color:rgba(255,255,255,1);
    text-align: center;
    padding-top: 0px;
  }
</style>
