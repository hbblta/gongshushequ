<template>
  <div>
    <v-head :message="headData"/>
    <div class="moreData">
        <div class="moreImg">
        <img @click="changeIndex(index)" v-for="(item,index) in allList"  :class="index == 0 ?'' :'moerLeft'" :src="item.imageUrl" alt="">
      </div>
      <div class="moreText">
        <div class="moreTextFor" @click="goToText(item.type,item.id,item.title)" :class="index == 0 ?'' :'TextLeft'" v-for="(item,index) in list">
          <div class="moreImgs">
            <img  src="../../assets/more.png" alt="">
            <span>{{item.createTime}}</span>
          </div>
          <hr style="margin: 4px 0 23px 0;height: 1px;color: rgba(240,240,240,1); background:rgba(240,240,240,1);">
          <div class="moreTitle">{{item.title}}</div>
          <div class="moreTextData">{{ToText(item.body)}}</div>
        </div>
      </div>
    </div>
    <v-footer/>
  </div>
</template>

<script>
    export default {
        name: "moer",
      data(){
        return{
          headData:'更多',
          list: [],
          allList:[],
        }
      },
      mounted() {
        this.ajax.get('categories/9?pattern=full').then((res) => {
          this.allList = res.data.children
          this.changeIndex(0)
        })

      },
      methods:{
        ToText(HTML){
          let input = HTML;
          return input.replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi,'').replace(/<[^>]+?>/g,'').replace(/\s+/g,' ').replace(/ /g,' ').replace(/>/g,' ').replace(/&nbsp;/g,'');
        },
        changeIndex(index){
          this.list = this.allList[index].articles
        },
        goToText(type,id,title) {
          if(type == 'text'){
            this.$router.push({
              path: '/textImg',
              query:{
                id: id,
                title:title
              }
            })
          }else{
            this.$router.push({
              path: '/videosHtml',
              query:{
                id: id,
                title:title
              }
            })
          }

        }
      }
    }
</script>

<style scoped>
.moreImg img{
  width:161px;
  height:113px;
  border-radius:10px 10px 10px 10px;
}
.moerLeft{
  margin-left: 35px;
}
.TextLeft{
  margin-left: 55px;
}
  .moreData{
    width:762px;
    height:334px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 8px 0px rgba(35,24,21,0.2);
    border-radius:10px;
    margin: 15px auto 0;
    padding: 25px 52px 25px 46px;
  }
  .moreTextFor{
    width:329px;
    height:177px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 8px 0px rgba(35,24,21,0.2);
    border-radius:5px;
    padding:0 9px 9px 9px;
  }
  .moreImgs img{
    width: 31px;
    height: 31px;
    vertical-align: middle ;
  }
  .moreText{
    display: flex;
    margin-top: 23px;
  }
  .moreImgs span{
    font-size:14px;
    font-family:PingFangSC;
    font-weight:500;
    color:rgba(137,137,137,1);
  }
  .moreTitle{
    font-size:16px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(51,51,51,1);
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .moreTextData{
    font-size:12px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-top: 13px;
    overflow: hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:5;
  }
</style>
