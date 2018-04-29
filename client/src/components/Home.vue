<template>
  <div class="home">
    <div class="top">音乐主页</div>
    <div class="banner">
      <span v-role>
        <img src="../assets/banner-1.jpg" alt="banner">
        <img src="../assets/banner-2.jpg" alt="banner">
        <img src="../assets/banner-3.jpg" alt="banner">
        <img src="../assets/banner-4.jpg" alt="banner">
      </span>
    </div>
    <div class="contain">
      <div class="contain-tit">推荐歌单 </div>
      <!-- 先放入写死的资源，创建数据库以后就动态创建 -->
      <div class="musiclist">
        <router-link to="/musiclist">
          <div class="music-pic">
            <img src="../../../server/public/music/尽头.jpg" alt="photo">
          </div>
          <div class="music-des">我喜欢的音乐</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  directives:{
    // 广告轮播图
    role:{
      inserted:function (el) {
        let left = Number(el.style.left);
        if(!el.style.left){
          el.style.left = 0 + '%';
        }
        setInterval(function () {
          left =left- 100;
          if(left < -300){
            left = 0;
          }
          //console.log(left);
          el.style.left = left + '%'
        },4000)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top{
    width: 100%;
    height: 40px;
    line-height: 38px;
    font-size: 20px;
    background: whitesmoke;
    text-align: center;
  }
  .banner{
    width: 100%;
    background: black;
    overflow: hidden;
  }
  .banner span{
    position: relative;
    display: block;
    width: 400%;
    transition: left 1.5s;
    -moz-transition: left 1.5s;	/* Firefox 4 */
    -webkit-transition: left 1.5s;	/* Safari 和 Chrome */
    -o-transition: left 1.5s;	/* Opera */
  }
  .banner span img{
    width: 25%;
    display: block;
    float: left;
  }
  .contain{
    width: 100%;
    overflow: auto;
    border-top: 1px solid lightgrey;
    margin-top: 10px;
    padding-bottom: 60px;
  }
  .contain-tit{
    text-align: left;
    line-height: 40px;
    font-size: 20px;
    padding-left: 5%;
    background-image: url("../assets/箭头下.svg");
    background-size: 22px;
    background-repeat: no-repeat;
    background-position: 100px 9px;
  }
  .contain .musiclist{
    float: left;
    width: 30%;
    margin: 0 3% 10px 0;
  }
  .contain .music-pic{
    height:100px;
  }
  .contain .music-pic img{
    height:100px;
  }
</style>
