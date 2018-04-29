<template>
  <div class="itemPlay">
    <header>
      <button class="back" v-on:click="backHistory">返回</button>
      歌曲播放
      <router-link to="/">
        <button class="toHome">主页</button>
      </router-link>
    </header>
    <div class="container" v-bind:style="{ height: nowHeight}">
      <div class="player">
        <div class="name">{{ music.name }}</div>
        <div class="artist">{{ music.artist }}</div>
        <div class="photo"><img v-bind:src="music.poster" alt=""></div>
        <div class="time">
          <div class="numTime">
            {{ usualTime(music.current) }}/{{ usualTime(music.duration) }}
          </div>
          <div class="redTime" v-bind:style="{ width:timeAuto+'%'}">
          </div>
          <div class="listened" v-bind:style="{ left:timeAuto+'%'}"
               v-on:touchstart="getSit"
               v-on:touchend="returnSit"
               v-on:touchmove="changeTime"></div>
        </div>
        <div class="useBtn">
          <span class="rePlay" v-on:click="replay">重播</span>
          <span class="prev" v-on:click="prev">上一曲</span>
          <span class="continue" v-on:click="cont">
            <i v-if="music.playing">暂停</i>
            <i v-else>播放</i>
          </span>
          <span class="next" v-on:click="next">下一曲</span>
          <span class="randomPlay" v-on:click="orderPlay">
            <b v-if="random">随机播放</b>
            <b v-else>顺序播放</b>
          </span>
        </div>
        <audio class="audioPlayer" hidden
                v-bind:src="music.music">
        </audio>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "play",
      created(){
          this.getMusic();
      },
      data(){
          return{
            music:{},
            test:'1',
            firstX:null,
            lastX:null,
            random: false
          }
      },
      computed:{
        nowHeight:function () {
          const result = document.documentElement.clientHeight - 45 + 'px';
          return result;
        },
        timeAuto:function () {
          const move = (this.music.current / this.music.duration) * 100;
          return move;
        }
      },
      methods:{
          //导入选中的歌曲的数据
        getMusic(){
          const url='http://127.0.0.1:3000/api';
          const id = parseInt(this.$route.params.id);
          // console.log(this.$route.params.id);
          this.$http.jsonp(`${url}/${id}`).then(
            function (res) {
             // console.log(res);
              if (!res.ok) return router.go({ name: 'Musiclist' });
              this.music = {
                current: 0,
                playing: true
              };
              Object.assign(this.music, res.data);
              this.Audio.audioPlay.src = this.music.music;
              this.Audio.audioPlay.autoplay = true;
              // 元数据完时
              this.Audio.audioPlay.addEventListener('loadedmetadata', () => {
                this.music.duration =  this.Audio.audioPlay.duration
              })
              // 载入音乐播放的位置
              this.Audio.audioPlay.addEventListener('timeupdate', () => {
                this.music.current = this.Audio.audioPlay.currentTime
             })
              // 控制播放/暂停
              this.Audio.audioPlay.addEventListener('play', () => {
                this.music.playing = true
             })
              this.Audio.audioPlay.addEventListener('pause', () => {
                this.music.playing = false
            })
            },function (err) {
              console.log(err);
              this.$router.push({ name: 'Musiclist' });
            }
          );
          return { music:{} }
        },
        backHistory:function () {
          this.$router.push({ name: 'Musiclist' });
          this.Audio.audioPlay.pause();
        },
        usualTime:function(duration){
          const h = Math.floor(duration / 3600);
          const m = Math.floor(duration % 3600 / 60);
          const second = Math.floor(duration % 60);
          const arr = Array(2);
          const s = (arr.join(0)+second).slice(-2);
          if(h==0){
            return `${m}:${s}`;
          }else {
            return `${h}:${m}:${s}`;
          }
        },
        cont: function () {
          if (this.music.playing) {
           this.Audio.audioPlay.pause()
          } else {
            this.Audio.audioPlay.play()
          }
          this.music.playing = !this.music.playing
        },
        next: function() {
          const url = 'http://127.0.0.1:3000/api';
          this.$http.jsonp(url)
            .then(function(res){
              const ids = res.data.map(function (value) {
                return value.id;
              });
              let targetIndex = ids.indexOf(this.music.id) + 1;
              if (targetIndex >= ids.length) {
                targetIndex = 0
              }
          this.$router.replace({ name: 'play', params: { id: ids[targetIndex] } })
        })
        },
        randomNext:function(){
          const url = 'http://127.0.0.1:3000/api';
          this.$http.jsonp(url)
            .then(function(res){
              const ids = res.data.map(function (value) {
                return value.id;
              });
              // ids.indexOf(this.music.id)
              let targetIndex = parseInt(Math.random()*ids.length);
              // console.log(targetIndex);
              if (targetIndex >= ids.length) {
                targetIndex = 0
              }
              if (targetIndex == ids.indexOf(this.music.id)) {
                this.music.current = 0;
                this.Audio.audioPlay.currentTime = 0;
                this.Audio.audioPlay.play();
              }
              this.$router.replace({ name: 'play', params: { id: ids[targetIndex] } })
            })
        },
        prev: function() {
          const url = 'http://127.0.0.1:3000/api';
          this.$http.jsonp(url)
            .then(function(res){
              const ids = res.data.map(function (value) {
                return value.id;
              });
              let targetIndex = ids.indexOf(this.music.id) - 1
              if (targetIndex < 0) {
                targetIndex = ids.length - 1
              }
              this.$router.replace({ name: 'play', params: { id: ids[targetIndex] } })
            })
        },
        replay:function () {
          this.music.current = 0;
          this.Audio.audioPlay.currentTime = 0;
        },
        getSit: function (e) {
          //放置发生默认行为
          event.preventDefault();
          this.firstX = e.touches[0].pageX;
          this.Audio.audioPlay.pause();
        },
        returnSit: function (e) {
          event.preventDefault();
          console.log('touchend');
          this.Audio.audioPlay.play();
        },
        changeTime:function (e) {
          event.preventDefault();
          this.lastX = e.touches[0].pageX;
          const allWidth = document.documentElement.clientWidth;
          let X = this.lastX-0.05*allWidth;
          if(X >= allWidth*0.9){
            X = parseInt(allWidth*0.89);
          }
          const change = X/(allWidth * 0.9);
          this.music.current =this.music.duration * change;
          this.Audio.audioPlay.currentTime = this.music.current;
        },
        orderPlay:function () {
          if(this.random){
            return this.random = false;
          }else{
            return this.random = true;
          }
        }
      },
      watch:{
        '$route'(to,from){
          this.getMusic();
        },
        'music.current'(val,Oldval) {
          if(this.random){
            if(val == this.music.duration) {
              this.randomNext();
            }
          }else{
            if(val == this.music.duration){
              this.next();
            }
          }
        }
      },
      directives:{
      }
    }
</script>

<style scoped>
  header{
    color: white;
    background: #322a2a;
    font-size: 25px;
    line-height: 40px;
  }
  header button{
    background: #322a2a;
    color: white;
  }
  header .toHome{
    display: block;
    float: right;
  }
  div.container{
    background:  #322a2a;
    height:100%;
  }
  div.player{
    position: relative;
  }
  div.name{
    padding-top: 10px;
    font-size: 25px;
    color: antiquewhite;
  }
  div.artist{
    font-size: 20px;
    color: lightgrey;
    padding-bottom: 10px;
  }
  div.photo{
    width: 100%;
    height: 400px;
  }
  div.photo img{
    width: 250px;
    height:250px;
    padding: 30px;
    border: 4px solid lightgrey;
  }
  div.time{
    width: 90%;
    margin:25px 5% 25px 5%;
    height: 10px;
    background: grey;
    position: relative;
    border-radius: 5px;
  }
  div.numTime{
    position: absolute;
    color: white;
    left: 40%;
    top: -50px;
  }
  div.redTime{
    width:0;
    height: 10px;
    float: left;
    background: red;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 5px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  div.time div.listened{
    width: 30px;
    height: 20px;
    background: white;
    position: absolute;
    left: 0;
    top: -5px;
    border-radius: 8px;
  }
  div.useBtn{
    margin: 40px auto;
    margin-bottom: 0;
    width: 90%;
    height:100px;
    border: 2px solid white;
  }
  div.useBtn span{
    display: block;
    float: left;
    width: 20%;
    height: 100px;
    line-height: 100px;
    color:white;
  }
  span.continue{
    font-size: 20px;
  }
</style>
