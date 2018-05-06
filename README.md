# MymusicPlayer
Vue,Vue-router,Node.js,Express,Es6
<h1>这是一款由vue和node.js搭建的简单网页播放器</h1>
<br>
<h3>客户端是基于Vue构建的，放于client文件夹中</h3>
<h3>服务端是基于express构建的，上传文件的表单依赖于formidable插件</h3>
<h1>实现的功能：</h1>
<ul>
    <li>    1.客户端页面的简单交互</li><br>
    <li>    2.客户端通过jsonp获取服务端接口传输的数据</li><br>
    <li>    3.音乐播放界面（包括进度条、滑动进度条、暂停/播放、下一曲/上一曲、进入播放页面自动播放、顺序播放和随机播放切换、重播）</li><br>
    <li>    4.主页面广告轮播图效果</li><br>
    <li>    5.服务端创立一个Music模块做简单的数据库（通过服务端做的改变在浏览器清缓存后会重置会初始状态）</li><br>
    <li>    6.服务端添加歌曲</li><br>
    <li>    7.修改歌曲信息</li><br>
    <li>    8.删除歌曲</li><br>
    <li>    9.服务端音乐库列表</li><br>
</ul>
注：为了方便pull后看到效果，我在上传的文件里放入了3个初始的音乐文件
<h1>使用步骤：</h1>
<ul>
<li>1.clone到本地文件夹</li><br>
<li>2.shift+鼠标右键 在server文件夹内打开命令行窗口</li><br>
<li>3.输入npm install 后 npm run serve 即可运行服务端</li><br>
<li>4.shift+鼠标右键 在client文件夹内打开的命令行串口</li><br>
<li>5.输入npm install 后 npm run client 即可运行客户端</li><br>
<li>6.在网址上输入127.0.0.1:8080 即可打开客户端主页面<br>
    在网址上输入127.0.0.1:3000 即可打开服务端主页面（api接口在 127.0.0.1:3000/api)</li><br>
</ul>
<h1>项目效果图</h1>
<h4>客户端主页面</h4>
<img src="./server/public/images/主页面.png" alt="photo">
<h4>歌曲列表</h4>
<img src="./server/public/images/歌曲列表.png" alt="photo">
<h4>播放界面</h4>
<img src="./server/public/images/播放界面.png" alt="photo">
<h4>服务端主页面</h4>
<img src="./server/public/images/服务端主页面.png" alt="photo">
<h4>添加界面</h4>
<img src="./server/public/images/添加界面.png" alt="photo">
End
