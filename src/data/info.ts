interface Info {
	name: string,
	avatar: string,
	popupImage: string,
	birthday: [number, number],
	bg_color?: string
}

const info: Array<Info> = [{
	name: "榎本 夏樹",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/natsuki.png",
	popupImage: "https://honeyworks.jp/wp/wp-content/uploads/2017/08/pop05.png",
	birthday: [6, 27],
	bg_color: 'hsl(20, 80%, 70%)'
},{
	name: "瀬戸口 優",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/yu.png",
	popupImage: "https://honeyworks.jp/wp/wp-content/uploads/2017/08/pop02.png",
	birthday: [7, 11],
	bg_color: 'hsl(200, 80%, 70%)'
}, {
	name: "望月 蒼太",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/souta.png",
	popupImage: "https://honeyworks.jp/wp/wp-content/uploads/2017/08/pop03.png",
	birthday: [9, 3],
	bg_color: 'hsl(220, 80%, 70%)'
}, {
	name: "早坂 あかり",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/akari.png",
	popupImage: "https://honeyworks.jp/wp/wp-content/uploads/2017/08/pop06.png",
	birthday: [12, 3],
	bg_color: 'hsl(320, 80%, 70%)'
}, {
	name: "芹沢 春輝",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/haruki.png",
	popupImage: "https://honeyworks.jp/wp/wp-content/uploads/2017/08/pop01.png",
	birthday: [4, 5],
	bg_color: 'hsl(90, 80%, 70%)'
}, {
	name: "合田 美桜",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/mio.png",
	popupImage: "https://honeyworks.jp/wp/wp-content/uploads/2017/08/pop04.png", 
	birthday: [3, 20],
	bg_color: 'hsl(40, 80%, 70%)'
}, {
	name: "瀬戸口 雛",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/hina.png",
	popupImage: "https://honeyworks.jp/wp/wp-content/uploads/2017/08/pop08.png", 
	birthday: [8, 8],
	bg_color: 'hsl(340, 80%, 70%)'
}, {
	name: "榎本 虎太朗",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/kotaro.png",
	popupImage: "https://honeyworks.jp/wp/wp-content/uploads/2017/08/pop09.png", 
	birthday: [11, 29],
	bg_color: 'hsl(30, 90%, 60%)'
}, {
	name: "明智 咲",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/akechi.png",
	popupImage: "https://honeyworks.jp/assets/img/special/pop/detail_akechi.png",
	birthday: [5, 29],
	bg_color: 'hsl(0, 0%, 70%)'
}, {
	name: "綾瀬 恋雪",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/koyuki02.png",
	popupImage: "https://honeyworks.jp/wp/wp-content/uploads/2017/08/pop07.png", 
	birthday: [8, 28],
	bg_color: 'hsl(220, 80%, 80%)'
}, {
	name: "成海 聖奈",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/sena.png",
	popupImage: "https://honeyworks.jp/wp/wp-content/uploads/2017/08/pop11.png", 
	birthday: [10, 16],
	bg_color: 'hsl(60, 80%, 70%)'
}, {
	name: "濱中 翠",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/midori.png",
	popupImage: "https://honeyworks.jp/wp/wp-content/uploads/2017/08/pop12.png", 
	birthday: [1, 23],
	bg_color: 'hsl(70, 80%, 70%)'
}, {
	name: "高見沢 アリサ",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/arisa.png",
	popupImage: "https://honeyworks.jp/wp/wp-content/uploads/2017/08/pop13.png", 
	birthday: [2, 3],
	bg_color: 'hsl(260, 80%, 80%)'
}, {
	name: "柴崎 健",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/ken.png",
	popupImage: "https://honeyworks.jp/wp/wp-content/uploads/2017/08/pop14.png", 
	birthday: [4, 1],
	bg_color: 'hsl(50, 70%, 80%)'
}, {
	name: "山本 幸大",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/kota.png",
	popupImage: "https://honeyworks.jp/wp/wp-content/uploads/2017/08/pop15.png", 
	birthday: [11, 7],
	bg_color: 'hsl(120, 80%, 80%)'
}, {
	name: "染谷 勇次郎",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/yujiro.png",
	popupImage: "https://honeyworks.jp/assets/img/special/pop/detail_LLyuziro.png", 
	birthday: [2, 22],
	bg_color: 'hsl(220, 80%, 70%)'
}, {
	name: "柴崎 愛蔵",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/aizo.png",
	popupImage: "https://honeyworks.jp/assets/img/special/pop/detail_LLaizo.png", 
	birthday: [2, 22],
	bg_color: 'hsl(50, 80%, 60%)'
}, {
	name: "涼海 ひより",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/hiyori.png",
	popupImage: "https://honeyworks.jp/assets/img/special/pop/detail_hiyori.png", 
	birthday: [3, 31],
	bg_color: 'hsl(10, 80%, 80%)'
}, {
	name: "成海 萌奈",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/mona.png",
	popupImage: "https://honeyworks.jp/assets/img/special/pop/detail_mona.png", 
	birthday: [4, 24],
	bg_color: 'hsl(330, 80%, 80%)'
}, {
	name: "南",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/minami.png",
	popupImage: "https://honeyworks.jp/assets/img/special/pop/detail_minami.png", 
	birthday: [2, 22],
	bg_color: 'hsl(0, 100%, 75%)'
}, {
	name: "扇野 りょう",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/ryou.png", 
	popupImage: "https://honeyworks.jp/wp/wp-content/uploads/2019/08/ryou_color-02.png", 
	birthday: [10, 9],
	bg_color: 'hsl(220, 80%, 60%)'
}, {
	name: "中村 千鶴",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/chizuru.png",
	popupImage: "https://honeyworks.jp/assets/img/special/pop/detail_chizuru.png", 
	birthday: [5, 13],
	bg_color: 'hsl(250, 80%, 65%)'
}, {
	name: "服部 樹里",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/juri.png",
	popupImage: "https://honeyworks.jp/assets/img/special/pop/detail_juri.png", 
	birthday: [11, 5],
	bg_color: 'hsl(30, 80%, 70%)'
}, {
	name: "FT4 IV",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/iv.png",
	popupImage: "https://honeyworks.jp/assets/img/special/pop/detail_iv.png", 
	birthday: [12, 24],
	bg_color: 'hsl(0, 0%, 95%)'
}, {
	name: "FT4 YUI",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/yui.png",
	popupImage: "https://honeyworks.jp/assets/img/special/pop/detail_yui.png", 
	birthday: [3, 4],
	bg_color: 'hsl(70, 80%, 70%)'
}, {
	name: "FT4 RIO",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/rio.png",
	popupImage: "https://honeyworks.jp/assets/img/special/pop/detail_rio.png", 
	birthday: [10, 1],
	bg_color: 'hsl(270, 90%, 70%)'
}, {
	name: "FT4 MEGU",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/megu.png",
	popupImage: "https://honeyworks.jp/assets/img/special/pop/detail_megu.png", 
	birthday: [6, 12],
	bg_color: 'hsl(30, 100%, 65%)'
}, {
	name: "FT4 DAI",
	avatar: "https://honeyworks.jp/assets/img/special/sp/character/thumb/dai.png",
	popupImage: "https://honeyworks.jp/assets/img/special/pop/detail_dai.png", 
	birthday: [7, 4],
	bg_color: 'hsl(350, 70%, 65%)'
}]

export default info
