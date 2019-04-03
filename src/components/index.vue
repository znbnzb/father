<template>
  <div class="f-nav">
    <!-- 轮播图 -->
    <van-swipe :autoplay="5000">
      <van-swipe-item v-for="image in images" :key="image">
        <img class="f-nav-img" :src="image" alt="">
      </van-swipe-item>
    </van-swipe>
    <!-- 两端对齐 -->
    <div class="nav-list">
      <van-row type="flex" justify="space-around" tag="ul">
        <van-col v-for=" navlist in navlists" :key="navlist.navtext" span="10" tag="li">
          <router-link :to='navlist.url' class="nav-link">
            <img :src="navlist.iconurl" alt="">
            <span>{{navlist.navtext}}</span>
          </router-link>
        </van-col>
      </van-row>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      images: [
        "../../static/1.jpg",
        "../../static/2.jpg",
        "../../static/3.jpg",
        "../../static/4.jpg"
      ],
      navlists: [
        {
          iconurl: "../../static/ico_1.png",
          navtext: "患者简介",
          url: { name: "patient" }
        },
        {
          iconurl: "../../static/ico_2.png",
          navtext: "病例档案",
          url: { name: "M_case" }
        },
        {
          iconurl: "../../static/ico_3.png",
          navtext: "凝血指标",
          url: { name: "cruor" }
        },
        {
          iconurl: "../../static/ico_4.png",
          navtext: "疾病简介",
          url: { name: "illness" }
        },
        {
          iconurl: "../../static/ico_5.png",
          navtext: "住院情况",
          url: { name: "hospital" }
        },
        {
          iconurl: "../../static/ico_6.png",
          navtext: "手术概况",
          url: { name: "operation" }
        }
      ]
    };
  },
  created(){
  this.fectDate();
  },
  methods:{
       fectDate() {
      // this.$http.get("/menu").then(request => {
      // this.getMenuItems = request.data.results;
      //将请求下来的数据存储到Vuex中
      this.$http
        .get("menu")
        .then(request =>{
console.log(request.data.results);
        }
        //   this.$store.commit("setMenuItems", request.data.results);
          
        );
      
    },
  }
};
</script>

<style scoped>
.f-nav .f-nav-img {
  width: 100%;
}
.nav-list {
  width: 100%;
}
.nav-list ul {
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
}
.nav-list ul li {
  border: 1px solid #39d167;
  padding: 1.4rem;
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 1.6rem;
}
.nav-list ul li .nav-link {
  display: flex;
  color: #39d167;
  align-items: center;
}
.nav-list ul li img {
  width: 2.8rem;
  height: 2.8rem;
}
.nav-list ul li span {
  font-size: 0.8rem;
  padding-left: 0.5rem;
}
</style>