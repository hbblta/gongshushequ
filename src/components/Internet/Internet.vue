<template>
    <div>
      <v-head :message="headData"/>
      <div class="intBody">

        <swiper :options="swiperOption">
          <swiper-slide class="banner" v-for="(item,index) in bannersList" :key="index">
            　　　　<img  @click="goBanner(item.url)" :src="'https://img.zjdandaotech.com/'+item.imageUrl" alt="">
          </swiper-slide>
          <div  class="swiper-pagination" id="pagination" slot="pagination"></div>
        </swiper>
        <div class="AllIntTitle">
          <div class="intTitle">
            <span :class="nowIndexs == 0 ? 'nowIndex' : ''" @click="nowIndex(0)">
              基本情况
            </span><span :class="nowIndexs == 1 ? 'nowIndex' : ''" @click="nowIndex(1)">
              重点党组织
            </span><span :class="nowIndexs == 2 ? 'nowIndex' : ''" @click="nowIndex(2)">
              党员风采
            </span>
          </div>
          <div class="AllIntText">
            <div class="intText" @click="goToText(item.type,item.id,item.title)" v-for="(item,index) in list">
              <div><img  :src="item.type == 'text' ? item.photos[0] : item.coverUrl" alt=""></div>
              <span>{{ToText(item.body)}}</span>
            </div>
            <div class="moreList" @click="moreData()">加载更多</div>
          </div>
        </div>
      </div>
      <v-footer/>
    </div>
</template>

<script>
    export default {
        name: "Internet",
      data(){
          return{
            headData: '互联网党建',
            nowIndexs : 0,
            list: [],
            swiperOption: {
              autoplay: {
                delay: 2500,
                disableOnInteraction: false
              },
              pagination: {
                el: '.swiper-pagination'
              },
              paginationClickable: true,
              autoplayDisableOnInteraction: false,
              loop: true,
              coverflow: {
                rotate: 30,
                stretch: 10,
                depth: 60,
                modifier: 2,
                slideShadows: true,
              }
            },
            bannersList:[],
            moreNum : 0,
          }
      },
      created() {
        this.ajax.get('banners?scene=internet').then((res) => {
          this.bannersList = res.data
        })
       this.nowIndex(0)
      },
      mounted() {
      },
      methods:{
        ToText(HTML){
          let input = HTML;
          return input.replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi,'').replace(/<[^>]+?>/g,'').replace(/\s+/g,' ').replace(/ /g,' ').replace(/>/g,' ').replace(/&nbsp;/g,'');
        },
        moreData(){
          if(this.nowIndexs == 0 ){
            this.ajax.get('articles?categoryId=10&from=0&size=9999').then((res) => {
              this.list = res.data.items
            })
          }
          if(this.nowIndexs == 1 ){
            this.ajax.get('articles?categoryId=11&from=0&size=9999').then((res) => {
              this.list = res.data.items
            })
          }
          if(this.nowIndexs == 2 ){
            this.ajax.get('articles?categoryId=12&from=0&size=9999').then((res) => {
              this.list = res.data.items
            })
          }
        },
        goBanner(url) {
          if(url == undefined){
            return
          }
          window.location.href = url
        },
        goToText(type,id,title) {
          if(type == 'text'){
            this.$router.push({
              path: '/textImg',
              query:{
                id: id,
                title : title
              }
            })
          }else{
            this.$router.push({
              path: '/videosHtml',
              query:{
                id: id,
                title : title
              }
            })
          }

        },
        nowIndex(index){
          this.nowIndexs = index
          if(this.nowIndexs == 0 ){
            this.ajax.get('articles?categoryId=10&from=0&size=8').then((res) => {
              this.list = res.data.items
            })
          }
          if(this.nowIndexs == 1 ){
            this.ajax.get('articles?categoryId=11&from=0&size=5').then((res) => {
              this.list = res.data.items
            })
          }
          if(this.nowIndexs == 2 ){
            this.ajax.get('articles?categoryId=12&from=0&size=5').then((res) => {
              this.list = res.data.items
            })
          }
        }
      }
    }
</script>

<style scoped>
  ::-webkit-scrollbar-track { background-color: white;}
  ::-webkit-scrollbar {  width: 5px;height:8px;  background-color: #D8D8D8;}
  ::-webkit-scrollbar-thumb { /* */background: #D8D8D8;}
  ::-webkit-scrollbar-corner{ background-color: #D8D8D8;}
.intBody{
  margin-top: 52px;
}
  .banner{
    /*margin-right: 20px;*/
    margin-top: 20px;
    width:452px;
    height:302px;
  }
  .banner img{
    width:452px;
    height:302px;
  }
  .intBody{
    display: flex;
    margin-left: 44px;
  }
  .intTitle{
    margin-top: 10px;
  }
  .intTitle span{
    display: inline-block;
    width:110px;
    height:34px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 5px 0px rgba(0, 0, 0, 0.25);
    border-radius:6px;
    line-height: 34px;
    text-align: center;
    font-size:17px;
    font-family:PingFangSC;
    font-weight:500;
    color:rgba(102,102,102,1);
    cursor: pointer;
    margin-left: 19px;
  }
  .AllIntTitle{
    width:406px;
    height:350px;
    margin-right: 35px;
    background:rgba(250,252,255,1);
    box-shadow:0px 1px 8px 0px rgba(35,24,21,0.2);
  }
  .AllIntText{
    height: 290px;
    width: 400px;
    overflow: hidden;
    margin-top: 5px;
    overflow-y: scroll;
  }
  .nowIndex{
    color:rgba(255,255,255,1) !important;
    background:rgba(218,45,55,1) !important;
  }
  .intText{
    display: flex;
    width:342px;
    height:97px;
    margin-top: 13px;
    align-items: center;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 5px 0px rgba(0, 0, 0, 0.25);
    margin-left: 18px;
    margin-right: 12px;
    padding-left: 14px;
    padding-right: 8px;
  }
  .intText span{
    display: inline-block;
    font-size:12px;
    font-family:PingFangSC;
    font-weight:400;
    padding-left: 11px;
    height: 48px;
    color:rgba(51,51,51,1);
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
  }
  .intText div{
    width:93px;
    height:70px;
  }
  .intText div img{
    width:93px;
    height:70px;
  }
  .moreList{
    font-size:12px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(51,51,51,1);
    text-align: center;
    height: 35px;
    line-height: 35px;
    cursor:pointer;
  }
</style>
