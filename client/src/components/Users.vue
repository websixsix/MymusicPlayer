<template>
    <div class="Users">
      <div class="login" v-show="show">立即登录</div>
      <div class="enroll" v-show="show">立即注册</div>
      <div class="userId"><span class="headPic"></span>陈六六</div>
      <div class="writeSelf"><span></span>编辑我的资料</div>
      <div class="logout">退出登录</div>
    </div>
</template>

<script>
    export default {
        name: "Users",
      data(){
          return{
            show:false,
          }
      }
    }
</script>

<style scoped>
  .Users{
    padding-bottom: 60px;
  }
  div.userId{
    height: 100px;
    border-bottom: 10px solid lightgrey;
    text-align: left;
    font-size: 20px;
    line-height: 80px;
  }
  .userId span.headPic{
    display: block;
    width: 60px;
    height: 60px;
    float: left;
    margin: 20px 20px;
    background: black;
    border-radius: 50px;
    border-color: white;
    border-width: 0;
  }
  .writeSelf{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 10px solid lightgrey;
    text-align: left;
  }
  .writeSelf span{
    width: 40px;
    height: 100%;
    display: block;
    float: left;
    background-image: url("../assets/Playerimg.png");
    background-position: -505px -1550px;
    background-size: 600px;
    background-repeat: no-repeat;
    margin-right: 10px;
  }
  .logout{
    height:50px;
    font-size: 25px;
    line-height: 50px;
    color: red;
    border-bottom: 10px solid lightgrey;
    font-family: "Microsoft YaHei"
  }
</style>
