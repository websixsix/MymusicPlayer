<template>
  <div class="Mymusic">
    <div class="locMusic"><span class="icon"></span>本地音乐</div>
    <div class="smallTitle">我创建的歌单({{ meNumber }})</div>
    <ul class="meBuilt">
      <li>
        <router-link to="/musiclist">
          <div>
            <span>
              <img src="../../../server/public/music/尽头.jpg" alt="photos">
            </span>
            我喜欢的音乐
          </div>
        </router-link>
      </li>
    </ul>
    <div class="smallTitle">我收藏的歌单({{ otherNumber }})</div>
    <ul class="otherBuilt">
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Mymusic",
      data(){
          return {
            meNumber: 1,
            otherNumber: 0
          }
      }
    }
</script>

<style scoped>
  .Mymusic{
    padding-bottom: 60px;
  }
  div.locMusic{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    text-align: left;
    border-bottom: 1px solid darkgrey;
  }
  div.locMusic .icon{
    width: 65px;
    height: 100%;
    display: block;
    float: left;
    background: lightgrey;
  }
  div.smallTitle{
    background: lightgrey;
    line-height: 30px;
    font-size: 15px;
    text-align: left;
    padding-left: 20px;
    background-image: url("../assets/箭头下.svg");
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 2px 8px;
  }
  ul.meBuilt li,ul.otherBuilt li{
    display: block;
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    text-align: left;
    border-bottom: 1px solid darkgrey;
  }
  ul li div{
    height: 100%;
  }
  ul.meBuilt li span,ul.otherBuilt li span{
    width: 55px;
    height: 100%;
    display: block;
    float: left;
    margin-right:10px;
  }
  span img{
    width: 55px;
    margin: 3px;
  }
</style>
