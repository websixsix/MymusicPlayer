class Music {
    constructor(id, name, artist, duration, music, poster, lyric) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.duration = duration;
        this.music = music;
        this.poster = poster;
        this.lyric = lyric;
    }
    static find(){
        return storage
    }
    static findOne(id) {
        return storage.find(s => s.id === id)
    }
    delete() {
        return storage.splice(storage.indexOf(this), 1)
    }

    save() {
        storage.indexOf(this) === -1 && storage.push(this);
        return true
    }
    update() {
        return true
    }
    //调整
    static adjust(){
        for(let i=0;i<storage.length;i++) {
            storage[i].id = i+1;
        }
    }
}

const storage = [
    new Music(1,    '尽头',             '赵方婧',     256,    '赵方婧 - 尽头.mp3',     '尽头.jpg',           '尽头.lrc'     ),
    new Music(2,    '起风了',                  '买辣椒也用券',   323,    '买辣椒也用券 - 起风了.mp3',        '起风了.jpg',         '买辣椒也用券 - 起风了.lrc'        ),
    new Music(3, '一腔诗意喂了狗', '花粥' , 303 , '花粥 - 一腔诗意喂了狗.mp3', '一腔诗意喂了狗.jpg' , '一腔诗意喂了狗.lrc'),
];

module.exports = Music;