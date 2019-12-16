<template>
    <div>
      <v-head :message="headData"/>
      <div class="homeTitle">
        <span :class="nowIndex == 0 ? 'nowIndex' : ''" @click="changIndex(0)">指导思想</span>
        <span :class="nowIndex == 1 ? 'nowIndex' : ''" @click="changIndex(1)">基本原则</span>
        <span :class="nowIndex == 2 ? 'nowIndex' : ''" @click="changIndex(2)">功能区块</span>
        <span :class="nowIndex == 3 ? 'nowIndex' : ''" @click="changIndex(3)">参与方式</span>
      </div>
      <div class="homeBody">
        <div>{{msg}}</div>
      </div>
      <v-footer/>
    </div>
</template>

<script>
    export default {
        name: "homestea",
        data(){
            return{
              headData:'家园介绍',
              nowIndex : 0,
              msg:'作为人类20世展伟大的基础性科技发明之一改变了人类的生产生活方式和文化的创作传播模式,催生和培育了丰富多彩的网络文化。作为一种全新的文化形态,网络文化集新闻传播、社会交往、娱乐休闲、教化传承、民意表达、社会动员等功能于一身,对人们生产生活产生了重大而深远的影响。然而,网络文化本身也存在诸多负面作用,需要通过网络文化治理来引导和规制,净化网络文化环境,促进网络文化健康有序发展。因此,完善网络文化治理,对于保障公民网络文化权利、满足人民日益增长的网络文化需求,对于推动文化大发展大繁荣、建设社会主义文化强国,对于推进依法治国、建设社会主义法治国家,都具有重要的意义。 第一章“网络文化及其新发展”,主要界定了网络文化的内涵、特征、功能及其存在的主要问题,同时以微博为案例,分析了网络文化发展的新形态、新趋势、新挑战。认为网络文化是指运用网络信息技术,借助互联网、手机等网络传播平台,以图文、音视频、动漫、游戏等多种形式,进行的思想传播、文化传承、沟通交流、道德教化、休闲娱乐、审美愉悦等精神文化活动,以及由此衍生的网络新闻出版、广播影视、文学艺术等文化产品和服务。'
            }
        },
        methods:{
            changIndex(index){
              this.nowIndex = index
              let url = 'articles/'+(index+1)
              this.ajax.get(url).then((res) => {
                this.msg = res.data.body
              })
            },
        }
    }
</script>

<style scoped>
  ::-webkit-scrollbar-track { background-color: white; border-top-right-radius:5px;border-bottom-right-radius:5px;}
  ::-webkit-scrollbar {  width: 5px;height:8px;  background-color: #D8D8D8;border-top-right-radius:5px;border-bottom-right-radius:5px;}
  ::-webkit-scrollbar-thumb { /* */background: #D8D8D8;border-radius: 5px; }
  ::-webkit-scrollbar-corner{ background-color: #D8D8D8;}
  .homeTitle{
    height: 41px;
    width: 100%;
    text-align: center;
    margin-top:10px;
    margin-bottom: 17px;
   }
  .homeTitle span{
    cursor:pointer;
    display: inline-block;
    margin-left: 22px;
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
  .homeBody{
    width:775px;
    height:343px;
    background:rgba(250,252,255,1);
    box-shadow:0px 1px 8px 0px rgba(35, 21, 24, 0.35);
    /*border-radius:10px;*/
    border-radius: 10px 3px 3px 10px;
    margin: 0 auto;
    overflow: hidden;
    overflow-y:auto;
  }
  .homeBody div{
    font-size:15px;
    font-family:PingFangSC,serif;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height: 26px;
    text-indent:2em;
    padding: 21px 46px 27px 46px;
  }
</style>
