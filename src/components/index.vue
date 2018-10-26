<template>
    <div class="f-nav">
        <!-- 轮播图 -->
            <van-swipe :autoplay="5000">
                <van-swipe-item  v-for="image in images" :key="image">
                    <img class="f-nav-img" :src="image" alt="">
                </van-swipe-item>
            </van-swipe>
             <!-- 两端对齐 -->
             <div class="nav-list">
                <van-row type="flex" justify="space-around"  tag="ul">
                    <van-col v-for=" navlist in navlists" :key="navlist.navtext"  span="10" tag="li">
                        <router-link :to='navlist.url' class="nav-link">
                            <img  :src="navlist.iconurl" alt="">   
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
          iconurl: "../../static/ico_1.jpg",
          navtext: "患者简介",
          url: { name: "Login" }
        },
        {
          iconurl: "../../static/ico_2.jpg",
          navtext: "病例档案",
          url: { name: "Login" }
        },
        {
          iconurl: "../../static/ico_3.jpg",
          navtext: "凝血指标",
          url: { name: "Login" }
        },
        {
          iconurl: "../../static/ico_4.jpg",
          navtext: "疾病简介",
          url: { name: "Login" }
        },
        {
          iconurl: "../../static/ico_5.jpg",
          navtext: "住院情况",
          url: { name: "Login" }
        },
        {
          iconurl: "../../static/ico_6.jpg",
          navtext: "手术概况",
          url: { name: "Login" }
        }
      ]
    };
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
  padding: 25px;
  border-radius: 10px;
  background-color: #ffffff;

  margin-top: 25px;
}
.nav-list ul li .nav-link {
  display: flex;
  color: #39d167;
  align-items: center;
}
.nav-list ul li img {
  width: 45px;
  height: 45px;
}
.nav-list ul li span {
  font-size: 15px;
  padding-left: 8px;
}
</style>