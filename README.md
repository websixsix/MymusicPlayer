# MymusicPlayer
Vue,Vue-router,Node.js,Express,Es6
<h1>这是一款由vue和node.js搭建的简单网页播放器</h1>
    （也借鉴了一部分网上的例子）<br>
    客户端是基于Vue构建的，放于client文件夹中<br>
    服务端是基于express构建的，上传文件的表单依赖于formidable插件<br>
    开发工具：Webstorm / Node.js / Webpack<br>
    技术栈：vue-cli .vue-router .node.js .express .javascript .Es6 .formidable .jade<br>
<h1>实现的功能：</h1>
    1.客户端页面的简单交互<br>
    2.客户端通过jsonp获取服务端接口传输的数据<br>
    3.音乐播放界面（包括进度条、滑动进度条、暂停/播放、下一曲/上一曲、进入播放页面自动播放、顺序播放和随机播放切换、重播）<br>
    4.主页面广告轮播图效果<br>
    5.服务端创立一个Music模块做简单的数据库（通过服务端做的改变在浏览器清缓存后会重置会初始状态）<br>
    6.服务端添加歌曲<br>
    7.修改歌曲信息<br>
    8.删除歌曲<br>
    9.服务端音乐库列表<br>
注：为了方便pull后看到效果，我在上传的文件里放入了3个初始的音乐文件
<h1>使用步骤：</h1>
1.clone到本地文件夹<br>
2.shift+鼠标右键 在server文件夹内打开命令行窗口<br>
3.输入npm run serve 即可运行服务端<br>
4.shift+鼠标右键 在client文件夹内打开的命令行串口<br>
5.输入npm run client 即可运行客户端<br>
6.在网址上输入127.0.0.1:8080 即可打开客户端主页面<br>
  在网址上输入127.0.0.1:3000 即可打开服务端主页面（api接口在 127.0.0.1:3000/api)<br>

End
