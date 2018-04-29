<template>
  <div id="musicList">
    <div class="listHead">我喜欢的音乐</div>
    <div class="list">
      <ul>
        <li v-for="(list,index) in lists">
          <router-link v-bind:to="{ name:'play',params:{ id:list.id }}">
            <div class="contain">
              <span class="num">{{ index+1 }}</span>
              <div class="info">
                <h3 class="title">{{ list.name }}</h3>
                <span class="artist">{{ list.artist }}</span>
              </div>
              <div class="photo">
                <img v-bind:src="list.poster" alt="photos">
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Musiclist",
      created(){
          this.getdata();
      },
      data(){
          return{
            lists:null
          }
      },
      methods:{
        getdata(){
          const url='http://127.0.0.1:3000/api';
          this.$http.jsonp(url).then(
            function(res){
              if (!res.ok) {
                return alert('no music')
              }
              const n = res.data.length;
              this.lists = new Array(n);
              Object.assign(this.lists, res.data);
              const url = 'http://127.0.0.1:3000';
              for (let i=0; i<this.lists.length;i++) {
                this.lists[i].music = url + '/music/' + this.lists[i].music;
                this.lists[i].poster = url + '/music/' + this.lists[i].poster;
              }
          },function (err) {
            console.log(err);
          });
          return { lists: [] }
       }
     }
    }
</script>

<style scoped>
  div.list{
    padding-bottom: 60px;
  }
  ul{
    list-style: none;
  }
  ul li{
    display: block;
    height:60px;
    border-bottom: 1px solid gray;
    position: relative;
    list-style: none;
  }
  li div.contain{
    width: 100%;
    height: 100%;
  }
  span.num{
    display: block;
    width:40px;
    float: left;
    line-height: 42px;
    text-align: center;
    margin: 9px 0;
  }
  div.info{
    float:left;
    text-align: left;
    font-size: 14px;
    margin: 9px 0;
  }
  div.photo{
    float:right;
    width: 60px;
    height:60px;
  }
  div.photo img{
    width: 55px;
    height:55px;
    position: relative;
    bottom: -4px;
  }
</style>
