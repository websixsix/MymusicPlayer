var express = require('express');
const Music = require('../public/javascripts/test');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
var router = express.Router();

/* GET home page. */
// 服务端主页模板代码
router.get('/', function(req, res, next) {
    const list = Music.find();
    res.render('index', {
            title: '音乐库',
            temp : list
    });
});

// 服务端添加歌曲模板
router.get('/add',function (req, res, next) {
    res.render('add',{
        title:'添加新音乐'
    })
});
//添加歌曲的post方法
router.post('/add',function (req, res, next) {
    //创建 处理表单数据上传文件的插件formidable
    const form = new formidable.IncomingForm();
    // 上传的文件放入指定文件夹
    form.uploadDir = path.join(__dirname,'../public/music');
    // 不改变文件拓展名
    form.keepExtensions = true;
    //field代表表单json，files代表上传的文件的json
    form.parse(req,function (err, field, files) {
        if(err) throw err;
        // 上传的三个文件的路径
        const filePath = [files.music.path,files.poster.path,files.lyric.path];
        // 改名后文件所放路径
        const targetDir = path.join(__dirname,'../public/music');
        const result = new Array(3);
        // 储存文件后缀
        const fileExt = ['.mp3','.jpg','.lrc'];
        // 逐一修改文件名并放入目标文件夹
        for(let i=0;i<filePath.length;i++) {
            const fileName = field.name + fileExt[i];
            result[i] = fileName;
            const targetFile = path.join(targetDir, fileName);
            fs.rename(filePath[i], targetFile, function (err) {
                if (err) {
                    console.info(err);
                }
            });
        }
        let id = 0;
        Music.find().forEach(function (value) {
            if(value.id > id){
                id = value.id
            }
        });
        const music = new Music(
            id+1,
            field.name,
            field.artist,
            field.duration,
            // 取文件的path的最后一个path
            result[0],
            result[1],
            result[2]
        );
        music.save();
    });
    res.render('add', { title: '歌曲已提交' });
});

//删除歌曲
router.get('/delete/:id', function(req, res, next){
    // 接收传过来的ID
    const id = parseInt(req.params.id || 0);
    if (!id) {
    // 不存在这个数据
        return res.status(404).send('没有该记录')
    }
    // 找到数组中的这个元素删除
    const temp = Music.findOne(id);
    if (!temp) {
    // 不存在这个数据
        return res.status(404).send('没有该记录')
    }
    // 数据存在，需要删除
    temp.delete();
    res.redirect('/')
});

//编辑歌曲页面
router.get('/edit/:id',function (req, res, next) {
    const id = parseInt(req.params.id || 0);
    if (!id) {
        return res.status(404).send('没有该记录')
    }
    const temp = Music.findOne(id);
    if (!temp) {
        return res.status(404).send('没有该记录')
    }
    res.render('edit',{
        title:'编辑歌曲',
        item: temp
    })
});
//编辑歌曲
router.post('/edit/:id',function (req, res, next) {
    const id = parseInt(req.params.id || 0);
    if (!id) {
        return res.status(404).send('没有该记录')
    }
    const temp = Music.findOne(id);
    if (!temp) {
        return res.status(404).send('没有该记录')
    }
    temp.name = req.body.name;
    // temp.name = req.params.name;
    temp.artist = req.body.artist;
    // temp.artist = req.params.artist;
    if (!temp.update()) {
        return res.render('edit',{
            title:'编辑歌曲失败',
            item: temp
        })
    }
    res.redirect('/')
});


// 存放总数据的api
router.get('/api',function (req, res, next) {
    const list = Music.find();
    console.log(list);
    res.jsonp(list.map(function (value) {
        const temp = {};
        Object.assign(temp,value);
        return temp;
    }))
});
// 存放某一首歌曲数据的api
router.get('/api/:id',function (req, res, next) {
    const id = parseInt(req.params.id || 0);
    if (!id) {
        // 不存在这个数据
        return res.status(404).send('没有该记录')
    }
    const list = Music.findOne(id);
    if (!list) {
        // 不存在这个数据
        return res.status(404).send('没有该记录')
    }
    const temp = {};
    Object.assign(temp, list);
   /* res.jsonp(arr.map(function (value) {
        const temp = {};
        Object.assign(temp,value);
        return temp;
    }))*/
    const url = 'http://127.0.0.1:3000';
    temp.music = url + '/music/' + temp.music;
    temp.poster = url + '/music/' + temp.poster;
    temp.lyric = url + '/music/' + temp.lyric;
    res.jsonp(temp)
});

module.exports = router;
