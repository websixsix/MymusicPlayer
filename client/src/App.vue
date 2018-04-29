<template>
  <div id="app">
    <header class="search" v-show="search">
      <button></button>
      <input type="text" placeholder="搜索想听的歌">
    </header>
    <header class="mymusic" v-show="mymusic">
      我的音乐
    </header>
    <header class="user" v-show="user">
      账号
    </header>
    <header class="musiclist" v-show="showlist">
      <button class="back" v-on:click="backHistory"></button>
      <b>歌单</b>
    </header>
    <router-view/>
    <footer v-bind:style="{ width:activeWidth}" v-show="user||mymusic||search">
      <router-link class="foot-btn1" to="/">
        <span></span>
        home
      </router-link>
      <router-link class="foot-btn2" to="/mymusic">
        <span></span>
        music
      </router-link>
      <router-link class="foot-btn3" to="/user">
        <span></span>
        user
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  },
  computed:{
    search: function () {
      if (this.$route.path == '/') {
        return true;
      }else{
        return false;
      }
    },
    mymusic:function () {
      if (this.$route.path == '/mymusic') {
        return true;
      } else {
        return false;
      }
    },
    user:function () {
      if (this.$route.path == '/user') {
        return true;
      } else {
        return false;
      }
    },
    showlist:function(){
      if (this.$route.path == '/musiclist') {
        return true;
      } else {
        return false;
      }
    },
    isPC:function(){
      //平台、设备和操作系统
      let system ={
        win : false,
        mac : false,
        xll : false
      };
      //检测平台
      let p = navigator.platform;
      system.win = p.indexOf("Win") == 0;
      system.mac = p.indexOf("Mac") == 0;
      system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
      //跳转语句，如果是手机访问就自动跳转到wap.baidu.com页面
      if(system.win||system.mac||system.xll){
        return true;
      }
    },
    activeWidth: function () {
      if(this.isPC){
        return 414+'px';
      }
    }
  },
  methods:{
    backHistory:function () {
      this.$router.push({ name: 'Mymusic' });
      this.Audio.audioPlay.pause();
    }
  }
}
</script>

<style>
#app {
  font-family: "Microsoft YaHei",'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  header{
    width: 100%;
    height: 45px;
    background: red;
  }
  header.mymusic{
    text-align: center;
    font-size: 25px;
    line-height: 40px;
    color: white;
  }
  header.user,header.musiclist{
    text-align: center;
    font-size: 25px;
    line-height: 40px;
    color: white;
  }
  header.musiclist b{
    width: 200px;
    display: block;
    position: absolute;
    right: 25%;
    font-weight: normal;
  }
  header button{
    display: block;
    float: left;
    width: 50px;
    height: 90%;
    border:0;
    background-color: red;
    background-image: url("./assets/Playerimg.png");
    background-size: 700px;
    background-position: 585px 0;
  }
  header button:focus{
    outline: 0;
  }
  header input{
    width: 80%;
    line-height: 30px;
    font-size: 100%;
    border-radius: 10px;
    margin: 5px 0;
  }
  header button.back{
    display: block;
    float: left;
    width: 50px;
    height: 90%;
    background-image: url("./assets/PlayerimgWhite.png");
    background-size: 700px;
    background-position: -50px -55px;
  }
  footer{
    width: 100%;
    height: 60px;
    background: #2e2e2e;
    position: fixed;
    left: 0;
    bottom: 0;
    color: #f5f5f5
  }
  footer a{
    display: block;
    float: left;
    width: 33%;
    height: 100%;
    text-decoration: none;
    text-align: center;
  }
  footer .foot-btn1 span{
    margin: 0 auto;
    display: block;
    width: 50px;
    height: 40px;
    background-image: url("./assets/PlayerimgWhite.png");
    background-position: 3px 0;
  }
footer .foot-btn2 span{
  margin: 0 auto;
  display: block;
  width: 50px;
  height: 40px;
  background-image: url("./assets/PlayerimgWhite.png");
  background-position: 762px 930px;
}
footer .foot-btn3 span{
  margin: 0 auto;
  display: block;
  width: 50px;
  height: 40px;
  background-image: url("./assets/PlayerimgWhite.png");
  background-position: 198px 935px;
}
</style>
