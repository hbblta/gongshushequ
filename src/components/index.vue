<template>
  <div>
    <v-head :message="headData"></v-head>
    <div class="homeBody">
      <div class="homeBodyLeft">
        <div class="allTitleImg">
          <div v-for="(item,index) in list" @click="goToUrl(item.url)" :key="index">
            <img class="titleImg" :src="item.imageUrl" alt="">
          </div>
        </div>
      </div>
      <div class="homeBodyRight">
        <div class="banner">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in bannersList" :key="index">
              　　　　<img  @click="goBanner(item.url)" :src="item.imageUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" id="pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="erweimaImg">
          <img  :src="erweiList.leftQrCodeUrl" alt="">
          <img  :src="erweiList.rightQrCodeUrl" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        headData: '墅说运河',
        list: [],
        bannersList: [],
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
        erweiList:{}
      }
    },
    created() {
      this.ajax.get('categories?pattern=index').then((res) => {
        this.list = res.data
      })
      this.ajax.get('banners?pattern=index').then((res) => {
        this.bannersList = res.data
      })
      this.ajax.get('storedobjects/indexqrcode').then((res) => {
        this.erweiList = res.data
      })
    },
    methods: {
      goToUrl(url) {
        this.$router.push({
          path: url,
          // query:{
          //   id:this.id ,
          // }
        })
      },
      goBanner(url) {
        if(url == undefined){
          return
        }
        window.location.href = url
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 31.25%;
  }

  .titleImg {
    width: 161px;
    height: 113px;
    border-radius: 10px 10px 10px 10px;
  }

  .allTitleImg {
    display: flex;
    flex-wrap: wrap;
  }

  .homeBody {
    display: flex;
    margin-top: 43px;
    padding-left: 44px;
    padding-right: 42px;
  }

  .allTitleImg div {
    padding-right: 23px;
    padding-bottom: 24px;
  }

  .homeBodyLeft {
    width: 555px;
  }

  .homeBodyRight {
    width: 313px;
    height: 209px;
    background: #ddd;
    margin-top: 11px;
  }

  .banner {
    position: relative;
  }

  .banner img {
    width: 313px;
    height: 209px;
  }

  .erweimaImg {
    margin-top: 54px;
  }

  .erweimaImg img {
    width: 101px;
    height: 101px;
    margin-left: 40px;
  }

</style>
