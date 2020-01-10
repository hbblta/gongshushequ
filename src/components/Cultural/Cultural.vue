<template>
  <div>
    <v-head :message="headData"></v-head>
    <div class="homeTitle">
<!--      <span v-for="(item,index) in allList" :class="nowIndex == index ? 'nowIndex' : ''" @click="changIndex(index)">{{item.name}}</span>-->
    </div>
    <div class="homeBody">
      <div>
        <div class="downMore left"><img @click="rightMore" src="../../assets/left.png" alt=""></div>
        <div class="aboutText">
          <div class="aboutTextData" @click="goToText(oneData)" v-if="oneData">
            <img :src="oneData.photos ? oneData.photos[0] : oneData.coverUrl ? oneData.coverUrl :   ''"  alt="">
            <p>{{oneData.title}}</p>
            <div>{{ToText(oneData.body)}}</div>
            <hr>
          </div>
          <div class="aboutTextData aboutTextDataTwo" @click="goToText(twoData)" v-if="twoData">
            <img :src="twoData.photos ? twoData.photos[0] : twoData.coverUrl ? twoData.coverUrl :    ''" alt="">
            <p>{{twoData.title}}</p>
            <div>{{ToText(twoData.body)}}</div>
            <hr>
          </div>
        </div>
        <div @click="leftMore" class="downMore right"><img src="../../assets/right.png" alt=""></div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  export default {
    name: "AboutUs",
    data(){
      return{
        headData:'文化家园',
        nowIndex : 0,
        oneData :null,
        twoData :null,
        oneIndex : 0,
        twoIndex : 1,
        allList:[],
        list:[]
      }
    },
    mounted() {
      this.ajax.get('categories/8?pattern=full').then((res) => {
        this.allList = res.data.children
        this.list  = this.allList[this.nowIndex].articles
        this.oneData = this.list[this.oneIndex]
        this.twoData = this.list[this.twoIndex]
      })
    },
    methods:{
      ToText(HTML){
        let input = HTML;
        return input.replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi,'').replace(/<[^>]+?>/g,'').replace(/\s+/g,' ').replace(/ /g,' ').replace(/>/g,' ').replace(/&nbsp;/g,'');
      },
      changIndex(index){
        this.nowIndex = index
        this.list  = this.allList[this.nowIndex].articles
        this.oneIndex = 0
        this.twoIndex = 1
        this.oneData = this.list[this.oneIndex]
        this.twoData = this.list[this.twoIndex]
      },
      leftMore(){
        if(this.oneIndex == this.list.length || this.twoIndex == this.list.length){
          return
        }
        this.oneIndex  = this.oneIndex + 2
        this.twoIndex  = this.twoIndex + 2
        this.oneData = this.list[this.oneIndex]
        this.twoData = this.list[this.twoIndex]
      },
      rightMore(){
        if(this.oneIndex == 0){
          return
        }
        this.oneIndex  = this.oneIndex - 2
        this.twoIndex  = this.twoIndex - 2
        this.oneData = this.list[this.oneIndex]
        this.twoData = this.list[this.twoIndex]
      },
      goToText(data) {
        console.log(data);
        if(data.type == 'text'){
          this.$router.push({
            path: '/textImg',
            query:{
              id: data.id,
              title:data.title
            }
          })
        }else if(data.type == 'video'){
          this.$router.push({
            path: '/videosHtml',
            query:{
              id: data.id,
              title:data.title
            }
          })
        }else{
          this.$router.push({
            path: '/htmlText',
            query:{
              id: data.id,
              title:data.title
            }
          })
        }

      }
    }
  }
</script>

<style scoped>
  .homeTitle{
    height: 20px;
    width: 100%;
    text-align: center;
    margin-top:10px;
    margin-bottom: 17px;
  }
  .homeTitle span{
    cursor:pointer;
    display: inline-block;
    margin-right: 20px;
    margin-left: 20px;
    width:130px;
    height:40px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 5px 0px rgba(0, 0, 0, 0.25);
    border-radius:6px;
    font-size:20px;
    font-family:PingFangSC,serif;
    font-weight:500;
    color:rgba(102,102,102,1);
    line-height: 40px;
    text-align: center;
  }
  .nowIndex{
    background:rgba(218,45,55,1)!important;
    color:rgba(255,255,255,1)!important;
  }
  .downMore{
    position: absolute;
    top: 50%;
  }
  .left{
    left: 13px;
  }
  .right{
    right: 13px;
  }
  .downMore img{
    width:22px;
    height:36px;
  }
  .aboutText{
    display: flex;
    height:350px;
  }
  .aboutTextData{
    width:400px;
    height:325px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 3px 0px rgba(7,0,2,0.2);
    border-radius:5px;
    margin-left: 50px;
    padding: 13px;
  }
  .aboutTextDataTwo{
    margin-left: 10px;
  }
  .aboutTextData img{
    width:400px;
    height:250px;
    border-radius:3px;
  }
  .aboutTextData p{
    font-size:18px;
    font-family:PingFangSC;
    font-weight:500;
    color:rgba(17,17,17,1);
  }
  .aboutTextData div{
    overflow: hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1;
    font-size:14px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(153,153,153,1);
    padding-top: 10px;
  }
  .aboutTextData hr{
    height:1px;
    background:rgba(170,170,170,1);
  }
</style>
