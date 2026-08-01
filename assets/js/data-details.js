/* ============================================================
   作品細節層 — 片長、主要卡司、片中／片尾彩蛋、名台詞、前置知識
   以 work id 為鍵，由 app.js 合併進時間線資料
   credits: type 'mid' = 片中彩蛋、'post' = 片尾彩蛋
   ============================================================ */

window.MCU_DETAILS = {

/* ================= PHASE 1 ================= */
'iron-man': {
  runtime: '126 分鐘', rating: 'PG-13',
  prereq: '不需要任何前置知識 —— 這裡就是起點。',
  cast: [
    { a: 'Robert Downey Jr.', r: 'Tony Stark / 鋼鐵人', id: 'tony-stark' },
    { a: 'Gwyneth Paltrow', r: 'Pepper Potts', id: 'pepper' },
    { a: 'Terrence Howard', r: 'James Rhodes', id: 'rhodey' },
    { a: 'Jeff Bridges', r: 'Obadiah Stane / 鋼鐵獠牙' },
    { a: 'Jon Favreau', r: 'Happy Hogan', id: 'happy' },
    { a: 'Samuel L. Jackson', r: 'Nick Fury', id: 'nick-fury' }
  ],
  credits: [
    { type: 'post', text: '尼克福瑞在東尼家中現身：「你以為你是這世界上唯一的超級英雄嗎？我來跟你談談『復仇者計畫』。」—— MCU 的第一顆彩蛋，整個宇宙的種子。', key: true }
  ],
  quotes: ['I am Iron Man.'],
  deaths: ['Obadiah Stane', 'Ho Yinsen（殷森）']
},
'incredible-hulk': {
  runtime: '112 分鐘', rating: 'PG-13',
  prereq: '不需要前置知識。唯一要記得的是片尾那個腦袋開始變形的科學家。',
  cast: [
    { a: 'Edward Norton', r: 'Bruce Banner / 浩克', id: 'hulk' },
    { a: 'Liv Tyler', r: 'Betty Ross' },
    { a: 'Tim Roth', r: 'Emil Blonsky / 憎惡' },
    { a: 'William Hurt', r: 'Thaddeus Ross', id: 'ross' },
    { a: 'Tim Blake Nelson', r: 'Samuel Sterns / 智謀者', id: 'the-leader' }
  ],
  credits: [
    { type: 'post', text: '東尼史塔克找上正在酒吧買醉的羅斯將軍，說「我們正在組一個團隊」。（一夜短片《顧問》後來揭露這其實是神盾局的計謀。）' }
  ],
  note: 'MCU 中唯一由 Edward Norton 飾演班納的電影，之後改由 Mark Ruffalo 接演。'
},
'iron-man-2': {
  runtime: '124 分鐘', rating: 'PG-13',
  prereq: '看過《鋼鐵人》即可。',
  cast: [
    { a: 'Robert Downey Jr.', r: 'Tony Stark', id: 'tony-stark' },
    { a: 'Don Cheadle', r: 'James Rhodes / 戰爭機器', id: 'rhodey' },
    { a: 'Scarlett Johansson', r: 'Natasha Romanoff / 黑寡婦', id: 'black-widow-char' },
    { a: 'Mickey Rourke', r: 'Ivan Vanko / 鞭狼' },
    { a: 'Sam Rockwell', r: 'Justin Hammer' },
    { a: 'Gwyneth Paltrow', r: 'Pepper Potts', id: 'pepper' }
  ],
  credits: [
    { type: 'post', text: '寇森探員在新墨西哥沙漠中發現一把插在坑裡的鎚子 —— 雷神的妙爾尼爾。直接接上《雷神索爾》。', key: true }
  ]
},
'thor': {
  runtime: '115 分鐘', rating: 'PG-13',
  prereq: '不需要前置知識，但看過《鋼鐵人2》會知道那把鎚子怎麼來的。',
  cast: [
    { a: 'Chris Hemsworth', r: 'Thor', id: 'thor-char' },
    { a: 'Tom Hiddleston', r: 'Loki', id: 'loki-char' },
    { a: 'Natalie Portman', r: 'Jane Foster', id: 'jane-foster' },
    { a: 'Anthony Hopkins', r: 'Odin' },
    { a: 'Idris Elba', r: 'Heimdall' },
    { a: 'Jeremy Renner', r: 'Clint Barton / 鷹眼（客串）', id: 'hawkeye-char' }
  ],
  credits: [
    { type: 'post', text: '尼克福瑞向 Erik Selvig 展示特斯拉方塊，而躲在暗處操控 Selvig 的正是還沒死的洛基。空間寶石首度現身。', key: true }
  ],
  quotes: ['阿斯嘉不是一個地方，而是一群人。（此句實為《諸神黃昏》，本片為鋪陳）']
},
'captain-america': {
  runtime: '124 分鐘', rating: 'PG-13',
  prereq: '不需要前置知識。這是時間軸上最早的真人電影之一。',
  cast: [
    { a: 'Chris Evans', r: 'Steve Rogers / 美國隊長', id: 'steve-rogers' },
    { a: 'Hayley Atwell', r: 'Peggy Carter', id: 'peggy' },
    { a: 'Sebastian Stan', r: 'Bucky Barnes', id: 'bucky' },
    { a: 'Hugo Weaving', r: 'Johann Schmidt / 紅骷髏' },
    { a: 'Dominic Cooper', r: 'Howard Stark', id: 'howard-stark' },
    { a: 'Stanley Tucci', r: 'Abraham Erskine 博士' }
  ],
  credits: [
    { type: 'post', text: '尼克福瑞找上剛甦醒的史蒂夫：「你睡了將近七十年。」並播出《復仇者聯盟》的前導預告。' }
  ],
  quotes: ['我可以整天耗下去。（I can do this all day.）'],
  deaths: ['Abraham Erskine', 'Bucky Barnes（實為被九頭蛇擷取）', 'Red Skull（實為被空間寶石傳送）']
},
'avengers-1': {
  runtime: '143 分鐘', rating: 'PG-13',
  prereq: '看過《鋼鐵人》《雷神索爾》《美國隊長》最理想，但本片會把每個人重新介紹一次。',
  cast: [
    { a: 'Robert Downey Jr.', r: 'Tony Stark', id: 'tony-stark' },
    { a: 'Chris Evans', r: 'Steve Rogers', id: 'steve-rogers' },
    { a: 'Mark Ruffalo', r: 'Bruce Banner / 浩克', id: 'hulk' },
    { a: 'Chris Hemsworth', r: 'Thor', id: 'thor-char' },
    { a: 'Scarlett Johansson', r: 'Natasha Romanoff', id: 'black-widow-char' },
    { a: 'Jeremy Renner', r: 'Clint Barton', id: 'hawkeye-char' },
    { a: 'Tom Hiddleston', r: 'Loki', id: 'loki-char' },
    { a: 'Clark Gregg', r: 'Phil Coulson', id: 'coulson' }
  ],
  credits: [
    { type: 'mid', text: '「其他」向主人回報：挑戰人類等於求死。鏡頭轉向 —— 薩諾斯首度露出正臉並露出笑容。', key: true },
    { type: 'post', text: '六人默默地在半毀的餐廳裡吃沙威瑪，全程無台詞。' }
  ],
  quotes: ['我有一支軍隊。／我們有浩克。'],
  deaths: ['Phil Coulson（後於影集中復活）']
},

/* ================= PHASE 2 ================= */
'iron-man-3': {
  runtime: '130 分鐘', rating: 'PG-13',
  prereq: '看過《復仇者聯盟》—— 東尼的 PTSD 全來自紐約大戰。',
  cast: [
    { a: 'Robert Downey Jr.', r: 'Tony Stark', id: 'tony-stark' },
    { a: 'Gwyneth Paltrow', r: 'Pepper Potts', id: 'pepper' },
    { a: 'Don Cheadle', r: 'James Rhodes', id: 'rhodey' },
    { a: 'Guy Pearce', r: 'Aldrich Killian' },
    { a: 'Ben Kingsley', r: 'Trevor Slattery / 假滿大人', id: 'trevor' }
  ],
  credits: [
    { type: 'post', text: '整部片其實是東尼在對布魯斯班納敘述 —— 而班納全程睡著了。「我又不是那種醫生。」' }
  ]
},
'thor-2': {
  runtime: '112 分鐘', rating: 'PG-13',
  prereq: '看過《雷神索爾》與《復仇者聯盟》。',
  cast: [
    { a: 'Chris Hemsworth', r: 'Thor', id: 'thor-char' },
    { a: 'Tom Hiddleston', r: 'Loki', id: 'loki-char' },
    { a: 'Natalie Portman', r: 'Jane Foster', id: 'jane-foster' },
    { a: 'Christopher Eccleston', r: 'Malekith' },
    { a: 'Rene Russo', r: 'Frigga' }
  ],
  credits: [
    { type: 'mid', text: '阿斯嘉人把乙太交給「收藏者（Collector）」保管，並說「把兩顆無限寶石放在一起太危險」—— 正式揭露乙太就是現實寶石。', key: true },
    { type: 'post', text: '索爾回到地球與 Jane 重逢；同時約頓海姆有怪獸還在亂跑。' }
  ],
  deaths: ['Frigga（索爾之母）', 'Malekith']
},
'winter-soldier': {
  runtime: '136 分鐘', rating: 'PG-13',
  prereq: '看過《美國隊長》與《復仇者聯盟》。這部的衝擊來自你已經相信神盾局是好人。',
  cast: [
    { a: 'Chris Evans', r: 'Steve Rogers', id: 'steve-rogers' },
    { a: 'Scarlett Johansson', r: 'Natasha Romanoff', id: 'black-widow-char' },
    { a: 'Sebastian Stan', r: 'Bucky Barnes / 酷寒戰士', id: 'bucky' },
    { a: 'Anthony Mackie', r: 'Sam Wilson / 獵鷹', id: 'sam-wilson' },
    { a: 'Samuel L. Jackson', r: 'Nick Fury', id: 'nick-fury' },
    { a: 'Robert Redford', r: 'Alexander Pierce' }
  ],
  credits: [
    { type: 'mid', text: '男爵 Strucker 的九頭蛇基地中關著兩個「奇蹟」—— 快銀與緋紅女巫首度亮相，洛基的權杖也在他手上。', key: true },
    { type: 'post', text: '巴奇在史密森尼博物館看著自己的展覽，開始想起自己是誰。' }
  ],
  quotes: ['我這一輩子都在完成任務。']
},
'gotg-1': {
  runtime: '121 分鐘', rating: 'PG-13',
  prereq: '完全不需要前置知識 —— 這是 MCU 最適合單獨看的一部。',
  cast: [
    { a: 'Chris Pratt', r: 'Peter Quill / 星爵', id: 'star-lord' },
    { a: 'Zoe Saldaña', r: 'Gamora', id: 'gamora' },
    { a: 'Dave Bautista', r: 'Drax', id: 'drax' },
    { a: 'Bradley Cooper', r: 'Rocket（配音）', id: 'rocket' },
    { a: 'Vin Diesel', r: 'Groot（配音）', id: 'groot' },
    { a: 'Michael Rooker', r: 'Yondu', id: 'yondu' },
    { a: 'Karen Gillan', r: 'Nebula', id: 'nebula' },
    { a: 'Lee Pace', r: 'Ronan', id: 'ronan' }
  ],
  credits: [
    { type: 'post', text: '收藏者在毀損的收藏室裡喝酒，鴨子霍華跟他說話。' }
  ],
  quotes: ['We are Groot.'],
  deaths: ['Groot（以幼苗重生）', 'Ronan']
},
'age-of-ultron': {
  runtime: '141 分鐘', rating: 'PG-13',
  prereq: '看過《復仇者聯盟》與《酷寒戰士》。',
  cast: [
    { a: 'Robert Downey Jr.', r: 'Tony Stark', id: 'tony-stark' },
    { a: 'Chris Evans', r: 'Steve Rogers', id: 'steve-rogers' },
    { a: 'Mark Ruffalo', r: 'Bruce Banner', id: 'hulk' },
    { a: 'Elizabeth Olsen', r: 'Wanda Maximoff', id: 'wanda' },
    { a: 'Aaron Taylor-Johnson', r: 'Pietro Maximoff / 快銀', id: 'quicksilver' },
    { a: 'Paul Bettany', r: 'Vision', id: 'vision' },
    { a: 'James Spader', r: 'Ultron（配音）', id: 'ultron' }
  ],
  credits: [
    { type: 'mid', text: '薩諾斯打開保險庫、戴上無限手套：「好吧，還是我自己來。」', key: true }
  ],
  quotes: ['你沒辦法看穿我的心思，你可以看透所有人 —— 除了我。'],
  deaths: ['Pietro Maximoff（快銀）']
},
'ant-man': {
  runtime: '117 分鐘', rating: 'PG-13',
  prereq: '幾乎不需要前置知識，是很好的單獨入門。',
  cast: [
    { a: 'Paul Rudd', r: 'Scott Lang / 蟻人', id: 'scott-lang' },
    { a: 'Evangeline Lilly', r: 'Hope van Dyne', id: 'hope' },
    { a: 'Michael Douglas', r: 'Hank Pym', id: 'hank-pym' },
    { a: 'Corey Stoll', r: 'Darren Cross / 黃蜂人' },
    { a: 'Michael Peña', r: 'Luis' }
  ],
  credits: [
    { type: 'mid', text: 'Hank 向 Hope 展示初代黃蜂女戰衣：「該讓它出來了。」' },
    { type: 'post', text: '史蒂夫與獵鷹找到被困住的巴奇，決定不通報東尼 —— 直接鋪陳《英雄內戰》。', key: true }
  ]
},

/* ================= PHASE 3 ================= */
'civil-war': {
  runtime: '147 分鐘', rating: 'PG-13',
  prereq: '看過《奧創紀元》《酷寒戰士》最理想 —— 索科維亞協議與巴奇的過去是全片前提。',
  cast: [
    { a: 'Chris Evans', r: 'Steve Rogers', id: 'steve-rogers' },
    { a: 'Robert Downey Jr.', r: 'Tony Stark', id: 'tony-stark' },
    { a: 'Sebastian Stan', r: 'Bucky Barnes', id: 'bucky' },
    { a: 'Chadwick Boseman', r: "T'Challa / 黑豹", id: 'tchalla' },
    { a: 'Tom Holland', r: 'Peter Parker / 蜘蛛人', id: 'peter-parker' },
    { a: 'Daniel Brühl', r: 'Helmut Zemo', id: 'zemo' },
    { a: 'Paul Rudd', r: 'Scott Lang', id: 'scott-lang' }
  ],
  credits: [
    { type: 'mid', text: '巴奇在汎達自願重新進入冷凍，直到有辦法解除洗腦。' },
    { type: 'post', text: '彼得在房間裡研究東尼給的裝備，May 嬸嬸在門外詢問他的傷。' }
  ],
  quotes: ['他是我的朋友。／我也是。'],
  deaths: ["T'Chaka（汎達國王）"]
},
'doctor-strange': {
  runtime: '115 分鐘', rating: 'PG-13',
  prereq: '不需要前置知識，是魔法線的獨立起點。',
  cast: [
    { a: 'Benedict Cumberbatch', r: 'Stephen Strange', id: 'doctor-strange-char' },
    { a: 'Tilda Swinton', r: '古一法師', id: 'ancient-one' },
    { a: 'Benedict Wong', r: 'Wong', id: 'wong' },
    { a: 'Chiwetel Ejiofor', r: 'Karl Mordo' },
    { a: 'Mads Mikkelsen', r: 'Kaecilius' }
  ],
  credits: [
    { type: 'mid', text: '索爾造訪紐約至聖所，史傳奇答應幫他找奧丁 —— 接上《諸神黃昏》。' },
    { type: 'post', text: 'Mordo 奪走一名法師的魔力：「這世界的法師太多了。」' }
  ],
  quotes: ["Dormammu, I've come to bargain."],
  deaths: ['古一法師（The Ancient One）']
},
'gotg-2': {
  runtime: '136 分鐘', rating: 'PG-13',
  prereq: '看過《星際異攻隊》。',
  cast: [
    { a: 'Chris Pratt', r: 'Peter Quill', id: 'star-lord' },
    { a: 'Kurt Russell', r: 'Ego', id: 'ego' },
    { a: 'Pom Klementieff', r: 'Mantis', id: 'mantis' },
    { a: 'Michael Rooker', r: 'Yondu', id: 'yondu' },
    { a: 'Karen Gillan', r: 'Nebula', id: 'nebula' }
  ],
  credits: [
    { type: 'post', text: '共五顆彩蛋，其中最重要的是主權星族長 Ayesha 打造出「亞當（Adam Warlock）」—— 他在《星際異攻隊3》登場。', key: true }
  ],
  quotes: ['他也許是你父親，但他不是你爸爸。'],
  deaths: ['Yondu', 'Ego']
},
'homecoming': {
  runtime: '133 分鐘', rating: 'PG-13',
  prereq: '看過《英雄內戰》認識彼得與東尼的關係即可。',
  cast: [
    { a: 'Tom Holland', r: 'Peter Parker / 蜘蛛人', id: 'peter-parker' },
    { a: 'Michael Keaton', r: 'Adrian Toomes / 禿鷹', id: 'vulture' },
    { a: 'Jacob Batalon', r: 'Ned Leeds', id: 'ned' },
    { a: 'Zendaya', r: 'Michelle Jones (MJ)', id: 'mj' },
    { a: 'Marisa Tomei', r: 'May 嬸嬸', id: 'may' },
    { a: 'Robert Downey Jr.', r: 'Tony Stark', id: 'tony-stark' },
    { a: 'Jon Favreau', r: 'Happy Hogan', id: 'happy' },
    { a: 'Laura Harrier', r: 'Liz Toomes', id: 'liz' }
  ],
  credits: [
    { type: 'mid', text: '入獄的禿鷹遇到 Mac Gargan（漫畫中的「蠍子」）。Gargan 打探蜘蛛人的身分，禿鷹選擇不透露以報答救命之恩。', key: true },
    { type: 'post', text: '美國隊長對著鏡頭談「耐心」的教育短片 —— 一個純粹的玩笑。' }
  ],
  quotes: ['如果沒有那套戰衣你就什麼都不是，那你更不配擁有它。']
},
'thor-3': {
  runtime: '130 分鐘', rating: 'PG-13',
  prereq: '看過前兩部雷神與《奧創紀元》。',
  cast: [
    { a: 'Chris Hemsworth', r: 'Thor', id: 'thor-char' },
    { a: 'Tom Hiddleston', r: 'Loki', id: 'loki-char' },
    { a: 'Cate Blanchett', r: 'Hela', id: 'hela' },
    { a: 'Tessa Thompson', r: 'Valkyrie', id: 'valkyrie' },
    { a: 'Mark Ruffalo', r: 'Bruce Banner / 浩克', id: 'hulk' },
    { a: 'Jeff Goldblum', r: 'Grandmaster' }
  ],
  credits: [
    { type: 'mid', text: '阿斯嘉難民船前方出現一艘巨艦 —— 薩諾斯的「聖言號」。直接接上《無限之戰》開場。', key: true },
    { type: 'post', text: 'Grandmaster 面對薩卡星的革命群眾，厚著臉皮說這場革命也算他有功。' }
  ],
  quotes: ['阿斯嘉不是一個地方，而是一群人。'],
  deaths: ['Odin', 'Hela', 'Skurge']
},
'black-panther': {
  runtime: '134 分鐘', rating: 'PG-13',
  prereq: '看過《英雄內戰》認識 T\'Challa 即可。',
  cast: [
    { a: 'Chadwick Boseman', r: "T'Challa / 黑豹", id: 'tchalla' },
    { a: 'Michael B. Jordan', r: 'Erik Killmonger', id: 'killmonger' },
    { a: 'Letitia Wright', r: 'Shuri', id: 'shuri' },
    { a: 'Lupita Nyong\'o', r: 'Nakia' },
    { a: 'Danai Gurira', r: 'Okoye' },
    { a: 'Winston Duke', r: "M'Baku" }
  ],
  credits: [
    { type: 'mid', text: "T'Challa 在聯合國宣布向世界開放汎達。" },
    { type: 'post', text: '巴奇在汎達甦醒，孩子們叫他「白狼」。' }
  ],
  quotes: ['把我葬在海裡，跟那些從船上跳下去的祖先一起 —— 因為他們知道，死亡好過為奴。'],
  deaths: ['Erik Killmonger', 'Zuri']
},
'infinity-war': {
  runtime: '149 分鐘', rating: 'PG-13',
  prereq: '這部是十年的總結。至少要看過《復仇者聯盟》《奧創紀元》《英雄內戰》《諸神黃昏》《星際異攻隊》。',
  cast: [
    { a: 'Josh Brolin', r: 'Thanos', id: 'thanos' },
    { a: 'Robert Downey Jr.', r: 'Tony Stark', id: 'tony-stark' },
    { a: 'Chris Hemsworth', r: 'Thor', id: 'thor-char' },
    { a: 'Chris Evans', r: 'Steve Rogers', id: 'steve-rogers' },
    { a: 'Zoe Saldaña', r: 'Gamora', id: 'gamora' },
    { a: 'Tom Holland', r: 'Peter Parker', id: 'peter-parker' },
    { a: 'Benedict Cumberbatch', r: 'Stephen Strange', id: 'doctor-strange-char' },
    { a: 'Elizabeth Olsen', r: 'Wanda Maximoff', id: 'wanda' }
  ],
  credits: [
    { type: 'post', text: '尼克福瑞與 Maria Hill 在化為灰燼前，福瑞按下一個呼叫器 —— 螢幕上出現驚奇隊長的標誌。', key: true }
  ],
  quotes: ['我早該直接瞄準頭的。／史塔克先生，我不想走……'],
  deaths: ['Loki', 'Heimdall', 'Gamora', 'Vision', '以及彈指帶走的半數生命']
},
'ant-man-2': {
  runtime: '118 分鐘', rating: 'PG-13',
  prereq: '看過《蟻人》與《英雄內戰》。',
  cast: [
    { a: 'Paul Rudd', r: 'Scott Lang', id: 'scott-lang' },
    { a: 'Evangeline Lilly', r: 'Hope van Dyne / 黃蜂女', id: 'hope' },
    { a: 'Michael Douglas', r: 'Hank Pym', id: 'hank-pym' },
    { a: 'Michelle Pfeiffer', r: 'Janet van Dyne', id: 'janet' },
    { a: 'Hannah John-Kamen', r: 'Ava Starr / 幽靈', id: 'ghost' }
  ],
  credits: [
    { type: 'mid', text: 'Scott 進入量子領域採集能量，Hank、Janet、Hope 在外接應 —— 然後三人同時化為灰燼，Scott 被困在裡面。整部《終局之戰》就是從這裡開始的。', key: true },
    { type: 'post', text: '空無一人的房子裡，緊急廣播還在播放。' }
  ]
},
'captain-marvel': {
  runtime: '123 分鐘', rating: 'PG-13',
  prereq: '不需要前置知識。看過《無限之戰》片尾彩蛋會更有感。',
  cast: [
    { a: 'Brie Larson', r: 'Carol Danvers', id: 'captain-marvel-char' },
    { a: 'Samuel L. Jackson', r: 'Nick Fury', id: 'nick-fury' },
    { a: 'Ben Mendelsohn', r: 'Talos' },
    { a: 'Jude Law', r: 'Yon-Rogg' },
    { a: 'Lashana Lynch', r: 'Maria Rambeau' }
  ],
  credits: [
    { type: 'mid', text: '倖存的復仇者盯著福瑞的呼叫器發呆，卡蘿丹佛斯突然出現在他們面前：「福瑞呢？」', key: true },
    { type: 'post', text: '貓咪 Goose 跳上福瑞的辦公桌，吐出特斯拉方塊。' }
  ]
},
'endgame': {
  runtime: '181 分鐘', rating: 'PG-13',
  prereq: '必須看過《無限之戰》。看過《蟻人與黃蜂女》會知道 Scott 為什麼在量子領域。',
  cast: [
    { a: 'Robert Downey Jr.', r: 'Tony Stark', id: 'tony-stark' },
    { a: 'Chris Evans', r: 'Steve Rogers', id: 'steve-rogers' },
    { a: 'Mark Ruffalo', r: 'Bruce Banner', id: 'hulk' },
    { a: 'Chris Hemsworth', r: 'Thor', id: 'thor-char' },
    { a: 'Scarlett Johansson', r: 'Natasha Romanoff', id: 'black-widow-char' },
    { a: 'Jeremy Renner', r: 'Clint Barton', id: 'hawkeye-char' },
    { a: 'Karen Gillan', r: 'Nebula', id: 'nebula' },
    { a: 'Josh Brolin', r: 'Thanos', id: 'thanos' }
  ],
  credits: [
    { type: 'post', text: '沒有彩蛋 —— 只有黑畫面中傳來的敲打金屬聲，那是東尼在山洞裡打造第一套鋼鐵裝的聲音。整整十一年的致敬。', key: true }
  ],
  quotes: ['I love you 3000.', 'Avengers... assemble.', 'I am Iron Man.'],
  deaths: ['Natasha Romanoff（黑寡婦）', 'Tony Stark（鋼鐵人）', 'Thanos', '2014 年的 Gamora 除外']
},
'far-from-home': {
  runtime: '129 分鐘', rating: 'PG-13',
  prereq: '必須看過《終局之戰》—— 全片的情緒基礎是東尼之死。',
  cast: [
    { a: 'Tom Holland', r: 'Peter Parker', id: 'peter-parker' },
    { a: 'Jake Gyllenhaal', r: 'Quentin Beck / 神秘客', id: 'mysterio' },
    { a: 'Zendaya', r: 'MJ', id: 'mj' },
    { a: 'Jacob Batalon', r: 'Ned Leeds', id: 'ned' },
    { a: 'Samuel L. Jackson', r: 'Nick Fury', id: 'nick-fury' },
    { a: 'Jon Favreau', r: 'Happy Hogan', id: 'happy' }
  ],
  credits: [
    { type: 'mid', text: '神秘客預錄的假影片被《號角日報》的 J. Jonah Jameson 播出 —— 誣陷蜘蛛人是兇手，並向全世界公布彼得帕克的身分。直接引爆《無家日》。', key: true },
    { type: 'post', text: '揭露片中的「尼克福瑞」其實是史克魯人 Talos 假扮的，真正的福瑞正在太空站度假。' }
  ]
},

/* ================= PHASE 4 ================= */
'black-widow': {
  runtime: '134 分鐘', rating: 'PG-13',
  prereq: '看過《英雄內戰》。故事發生在該片之後、《無限之戰》之前。',
  cast: [
    { a: 'Scarlett Johansson', r: 'Natasha Romanoff', id: 'black-widow-char' },
    { a: 'Florence Pugh', r: 'Yelena Belova', id: 'yelena' },
    { a: 'David Harbour', r: 'Alexei / 紅衛兵', id: 'alexei' },
    { a: 'Rachel Weisz', r: 'Melina' },
    { a: 'Julia Louis-Dreyfus', r: 'Valentina', id: 'valentina' }
  ],
  credits: [
    { type: 'post', text: '葉蓮娜在娜塔莎墓前被瓦倫提娜找上，對方指著手機上克林特的照片說「這就是害死你姊姊的人」—— 接上影集《鷹眼》。', key: true }
  ]
},
'shang-chi': {
  runtime: '132 分鐘', rating: 'PG-13',
  prereq: '不需要前置知識。看過《鋼鐵人3》會懂那個「假滿大人」的笑話。',
  cast: [
    { a: 'Simu Liu', r: 'Shang-Chi', id: 'shang-chi-char' },
    { a: 'Tony Leung（梁朝偉）', r: 'Xu Wenwu / 文武', id: 'wenwu' },
    { a: 'Awkwafina', r: 'Katy' },
    { a: 'Meng\'er Zhang', r: 'Xu Xialing' },
    { a: 'Michelle Yeoh（楊紫瓊）', r: 'Ying Nan' },
    { a: 'Ben Kingsley', r: 'Trevor Slattery', id: 'trevor' }
  ],
  credits: [
    { type: 'mid', text: 'Wong 帶尚氣與 Katy 見卡蘿丹佛斯與布魯斯班納。三人都無法辨識十環的來源，並發現它「正在向某處發送訊號」。', key: true },
    { type: 'post', text: 'Xialing 接管了十環幫，並在父親的舊基地訓練女性戰士。' }
  ],
  deaths: ['Xu Wenwu（文武）', '居食者']
},
'eternals': {
  runtime: '156 分鐘', rating: 'PG-13',
  prereq: '不需要前置知識，是相當獨立的一部。',
  cast: [
    { a: 'Gemma Chan', r: 'Sersi', id: 'sersi' },
    { a: 'Richard Madden', r: 'Ikaris', id: 'ikaris' },
    { a: 'Angelina Jolie', r: 'Thena' },
    { a: 'Kumail Nanjiani', r: 'Kingo' },
    { a: 'Salma Hayek', r: 'Ajak' },
    { a: 'Brian Tyree Henry', r: 'Phastos' }
  ],
  credits: [
    { type: 'mid', text: '引入 Eros / Starfox（Harry Styles）—— 薩諾斯的兄弟，與 Pip 一同現身。' },
    { type: 'post', text: 'Dane Whitman 準備拿起「黑騎士之劍」時被一個聲音打斷 —— 那是 Blade（Mahershala Ali）的聲音。', key: true }
  ],
  deaths: ['Ajak', 'Gilgamesh', 'Ikaris']
},
'no-way-home': {
  runtime: '148 分鐘', rating: 'PG-13',
  prereq: '必須看過《離家日》。看過舊蜘蛛人電影會大幅加分，但非必要。',
  cast: [
    { a: 'Tom Holland', r: 'Peter Parker', id: 'peter-parker' },
    { a: 'Zendaya', r: 'MJ', id: 'mj' },
    { a: 'Benedict Cumberbatch', r: 'Stephen Strange', id: 'doctor-strange-char' },
    { a: 'Willem Dafoe', r: 'Norman Osborn / 綠惡魔', id: 'green-goblin' },
    { a: 'Alfred Molina', r: 'Otto Octavius / 八爪博士', id: 'doc-ock' },
    { a: 'Jamie Foxx', r: 'Max Dillon / 電光人', id: 'electro' },
    { a: 'Tobey Maguire', r: 'Peter Parker (Peter-Two)', id: 'peter-two' },
    { a: 'Andrew Garfield', r: 'Peter Parker (Peter-Three)', id: 'peter-three' },
    { a: 'Marisa Tomei', r: 'May 嬸嬸', id: 'may' },
    { a: 'Charlie Cox', r: 'Matt Murdock', id: 'daredevil-char' }
  ],
  credits: [
    { type: 'mid', text: 'Eddie Brock（猛毒）在酒吧裡聽人講述復仇者的事，正要去找蜘蛛人時就被送回原宇宙 —— 但他留下了一小塊共生體。', key: true },
    { type: 'post', text: '《奇異博士2：失控多重宇宙》的完整預告。' }
  ],
  quotes: ['能力愈強，責任愈大。（With great power there must also come great responsibility.）'],
  deaths: ['May 嬸嬸']
},
'multiverse-of-madness': {
  runtime: '126 分鐘', rating: 'PG-13',
  prereq: '必須看過《汪達幻視》與《無家日》，否則汪達的動機完全無法理解。',
  cast: [
    { a: 'Benedict Cumberbatch', r: 'Stephen Strange', id: 'doctor-strange-char' },
    { a: 'Elizabeth Olsen', r: 'Wanda Maximoff', id: 'wanda' },
    { a: 'Xochitl Gomez', r: 'America Chavez', id: 'america-chavez' },
    { a: 'Benedict Wong', r: 'Wong', id: 'wong' },
    { a: 'Patrick Stewart', r: 'Charles Xavier（Earth-838）' }
  ],
  credits: [
    { type: 'mid', text: 'Clea（Charlize Theron）開啟一道通往黑暗次元的傳送門，要史傳奇跟她去修補他造成的「宇宙撞擊」。', key: true },
    { type: 'post', text: '披薩球小販終於解除了史傳奇的咒語，對鏡頭說「結束了」。' }
  ],
  deaths: ['光照會全員（Earth-838）', 'Wanda Maximoff（疑似）']
},
'thor-4': {
  runtime: '118 分鐘', rating: 'PG-13',
  prereq: '看過《諸神黃昏》與《終局之戰》。',
  cast: [
    { a: 'Chris Hemsworth', r: 'Thor', id: 'thor-char' },
    { a: 'Natalie Portman', r: 'Jane Foster / 女雷神', id: 'jane-foster' },
    { a: 'Christian Bale', r: 'Gorr', id: 'gorr' },
    { a: 'Tessa Thompson', r: 'Valkyrie', id: 'valkyrie' },
    { a: 'Russell Crowe', r: 'Zeus' }
  ],
  credits: [
    { type: 'mid', text: '宙斯派兒子海克力斯（Brett Goldstein）去殺索爾，為神明報仇。' },
    { type: 'post', text: 'Jane Foster 抵達瓦爾哈拉，由海姆達爾迎接她。' }
  ],
  deaths: ['Jane Foster', 'Gorr']
},
'wakanda-forever': {
  runtime: '161 分鐘', rating: 'PG-13',
  prereq: '看過《黑豹》。',
  cast: [
    { a: 'Letitia Wright', r: 'Shuri', id: 'shuri' },
    { a: 'Tenoch Huerta Mejía', r: 'Namor', id: 'namor' },
    { a: 'Angela Bassett', r: 'Ramonda' },
    { a: 'Danai Gurira', r: 'Okoye' },
    { a: 'Dominique Thorne', r: 'Riri Williams', id: 'riri' }
  ],
  credits: [
    { type: 'post', text: "Nakia 向 Shuri 介紹她與 T'Challa 的兒子 —— 男孩的名字也叫 T'Challa。", key: true }
  ],
  deaths: ["T'Challa（片外病逝）", 'Ramonda']
},

/* ================= PHASE 5 ================= */
'quantumania': {
  runtime: '124 分鐘', rating: 'PG-13',
  prereq: '看過兩部《蟻人》與《終局之戰》。看過《洛基》第一季會知道康是誰。',
  cast: [
    { a: 'Paul Rudd', r: 'Scott Lang', id: 'scott-lang' },
    { a: 'Evangeline Lilly', r: 'Hope van Dyne', id: 'hope' },
    { a: 'Jonathan Majors', r: 'Kang the Conqueror', id: 'kang' },
    { a: 'Michelle Pfeiffer', r: 'Janet van Dyne', id: 'janet' },
    { a: 'Kathryn Newton', r: 'Cassie Lang', id: 'cassie' }
  ],
  credits: [
    { type: 'mid', text: '康議會集結 —— 數以千計的康變體齊聚，宣告要對多元宇宙動手。', key: true },
    { type: 'post', text: 'Loki 與 Mobius 在 1901 年的劇院看著台上的「Victor Timely」（康的另一個變體）表演。' }
  ],
  warning: '⚠ 康已被漫威棄用，這些彩蛋的後續劇情已不會照原計畫發展。'
},
'gotg-3': {
  runtime: '150 分鐘', rating: 'PG-13',
  prereq: '看過前兩部《星際異攻隊》與《無限之戰》《終局之戰》。',
  cast: [
    { a: 'Chris Pratt', r: 'Peter Quill', id: 'star-lord' },
    { a: 'Bradley Cooper', r: 'Rocket（配音）', id: 'rocket' },
    { a: 'Karen Gillan', r: 'Nebula', id: 'nebula' },
    { a: 'Pom Klementieff', r: 'Mantis', id: 'mantis' },
    { a: 'Chukwudi Iwuji', r: '至高進化', id: 'high-evolutionary' },
    { a: 'Will Poulter', r: 'Adam Warlock' }
  ],
  credits: [
    { type: 'mid', text: '新一代異攻隊在火箭的帶領下集結。' },
    { type: 'post', text: '字卡：「星爵將會回歸（The Legendary Star-Lord will return）」。' }
  ],
  deaths: ['至高進化的實驗動物們（Lylla、Teefs、Floor）']
},
'the-marvels': {
  runtime: '105 分鐘', rating: 'PG-13',
  prereq: '看過《驚奇隊長》《汪達幻視》《驚奇女士》最完整。',
  cast: [
    { a: 'Brie Larson', r: 'Carol Danvers', id: 'captain-marvel-char' },
    { a: 'Teyonah Parris', r: 'Monica Rambeau', id: 'monica' },
    { a: 'Iman Vellani', r: 'Kamala Khan', id: 'kamala' },
    { a: 'Zawe Ashton', r: 'Dar-Benn' },
    { a: 'Samuel L. Jackson', r: 'Nick Fury', id: 'nick-fury' }
  ],
  credits: [
    { type: 'post', text: '莫妮卡在平行宇宙醒來，身旁是 X 戰警的「野獸」（Kelsey Grammer）與 Charles Xavier 的變體 —— 正式確認 X 戰警宇宙的存在。', key: true }
  ]
},
'deadpool-wolverine': {
  runtime: '128 分鐘', rating: 'R（限制級）',
  prereq: '看過《洛基》第一季了解 TVA。不需要看過福斯的 X 戰警系列，但看過會多出大量笑點。',
  cast: [
    { a: 'Ryan Reynolds', r: 'Wade Wilson / 死侍', id: 'deadpool' },
    { a: 'Hugh Jackman', r: 'Logan / 金鋼狼', id: 'wolverine' },
    { a: 'Emma Corrin', r: 'Cassandra Nova', id: 'cassandra-nova' },
    { a: 'Matthew Macfadyen', r: 'Mr. Paradox' }
  ],
  credits: [
    { type: 'post', text: '死侍播放福斯時代 X 戰警的幕後花絮片段，向那個時代告別。' }
  ],
  note: 'MCU 第一部 R 級電影，暴力與髒話密度極高。'
},
'brave-new-world': {
  runtime: '118 分鐘', rating: 'PG-13',
  prereq: '看過《獵鷹與酷寒戰士》。看過 2008《無敵浩克》會懂智謀者是誰、看過《永恆族》會懂天神島。',
  cast: [
    { a: 'Anthony Mackie', r: 'Sam Wilson / 美國隊長', id: 'sam-wilson' },
    { a: 'Harrison Ford', r: 'Thaddeus Ross / 紅浩克', id: 'ross' },
    { a: 'Tim Blake Nelson', r: 'Samuel Sterns / 智謀者', id: 'the-leader' },
    { a: 'Danny Ramirez', r: 'Joaquin Torres / 獵鷹' },
    { a: 'Carl Lumbly', r: 'Isaiah Bradley', id: 'isaiah' }
  ],
  credits: [
    { type: 'post', text: '獄中的智謀者對山姆說，他已經看見無數種未來 —— 而其中有「來自其他世界的訪客」正在接近。', key: true }
  ]
},
'thunderbolts': {
  runtime: '126 分鐘', rating: 'PG-13',
  prereq: '看過《黑寡婦》《獵鷹與酷寒戰士》《蟻人與黃蜂女》認識這群人的來歷。',
  cast: [
    { a: 'Florence Pugh', r: 'Yelena Belova', id: 'yelena' },
    { a: 'Sebastian Stan', r: 'Bucky Barnes', id: 'bucky' },
    { a: 'David Harbour', r: 'Alexei / 紅衛兵', id: 'alexei' },
    { a: 'Wyatt Russell', r: 'John Walker', id: 'john-walker' },
    { a: 'Hannah John-Kamen', r: 'Ava Starr / 幽靈', id: 'ghost' },
    { a: 'Lewis Pullman', r: 'Bob / 哨兵', id: 'bob-sentry' },
    { a: 'Julia Louis-Dreyfus', r: 'Valentina', id: 'valentina' }
  ],
  credits: [
    { type: 'post', text: '十四個月後，這支被命名為「新復仇者」的隊伍面對天空裂開 —— 一艘印有「4」標誌的太空船穿越而來。接上驚奇 4 超人。', key: true }
  ],
  note: '片名的星號在片尾被正式改寫為 The New Avengers。'
},
'fantastic-four': {
  runtime: '約 115 分鐘', rating: 'PG-13',
  prereq: '不需要任何 MCU 前置知識 —— 它發生在完全獨立的平行宇宙 Earth-828。',
  cast: [
    { a: 'Pedro Pascal', r: 'Reed Richards / 神奇先生', id: 'reed-richards' },
    { a: 'Vanessa Kirby', r: 'Sue Storm / 隱形女', id: 'reed-richards' },
    { a: 'Joseph Quinn', r: 'Johnny Storm / 霹靂火', id: 'reed-richards' },
    { a: 'Ebon Moss-Bachrach', r: 'Ben Grimm / 石頭人', id: 'reed-richards' },
    { a: 'Ralph Ineson', r: 'Galactus / 吞星', id: 'galactus' },
    { a: 'Julia Garner', r: 'Shalla-Bal / 銀色衝浪手', id: 'silver-surfer' }
  ],
  credits: [
    { type: 'mid', text: '時間快轉四年後，一名手持末日博士銀色面具的神秘披風人物出現在 Sue 的兒子 Franklin 身邊 —— 末日博士首度現身，直接鋪陳《末日之戰》。', key: true }
  ]
},

/* ================= PHASE 6 ================= */
'spider-man-4': {
  runtime: '145 分鐘（2 小時 25 分）', rating: 'PG-13',
  prereq: '必須看過《無家日》—— 全片的前提是那道讓全世界忘記彼得的咒語。',
  cast: [
    { a: 'Tom Holland', r: 'Peter Parker / 蜘蛛人', id: 'peter-parker' },
    { a: 'Zendaya', r: 'MJ', id: 'mj' },
    { a: 'Jacob Batalon', r: 'Ned Leeds', id: 'ned' },
    { a: 'Mark Ruffalo', r: 'Bruce Banner / 浩克', id: 'hulk' },
    { a: 'Jon Bernthal', r: 'Frank Castle / 制裁者', id: 'punisher' },
    { a: 'Sadie Sink', r: '神秘反派（身分未公開）', id: 'sadie-villain' },
    { a: 'Michael Mando', r: 'Mac Gargan / 蠍子', id: 'scorpion' },
    { a: 'Liza Colón-Zayas', r: '警探 Jean DeWolff', id: 'jean-dewolff' },
    { a: 'Marvin Jones III', r: 'Tombstone / 墓碑', id: 'tombstone' }
  ],
  credits: [
    { type: 'post', text: '片尾以 007 式的字卡「Spider-Man Will Return」作結。' }
  ]
},
'doomsday': {
  runtime: '約 165 分鐘', rating: '未定',
  prereq: '看過《洛基》兩季、《驚奇4超人》《雷霆特攻隊》最完整。',
  cast: [
    { a: 'Robert Downey Jr.', r: 'Victor von Doom / 末日博士', id: 'doctor-doom' },
    { a: 'Chris Evans', r: 'Steve Rogers', id: 'steve-rogers' },
    { a: 'Chris Hemsworth', r: 'Thor', id: 'thor-char' },
    { a: 'Anthony Mackie', r: 'Sam Wilson', id: 'sam-wilson' },
    { a: 'Tom Hiddleston', r: 'Loki', id: 'loki-char' },
    { a: 'Simu Liu', r: 'Shang-Chi', id: 'shang-chi-char' },
    { a: 'Paul Rudd', r: 'Scott Lang', id: 'scott-lang' },
    { a: 'Florence Pugh', r: 'Yelena Belova', id: 'yelena' },
    { a: 'Pedro Pascal', r: 'Reed Richards', id: 'reed-richards' },
    { a: 'Ian McKellen', r: 'Magneto' },
    { a: 'Patrick Stewart', r: 'Professor X' },
    { a: 'Kelsey Grammer', r: 'Beast' },
    { a: 'Letitia Wright', r: 'Shuri', id: 'shuri' },
    { a: 'Tenoch Huerta Mejía', r: 'Namor', id: 'namor' },
    { a: 'Channing Tatum', r: 'Gambit' }
  ],
  note: '尚未上映，卡司依官方公布整理。'
},

/* ================= 重要影集 ================= */
'wandavision': {
  runtime: '9 集，每集 24–48 分鐘', rating: 'TV-14',
  prereq: '看過《奧創紀元》與《無限之戰》—— 你必須知道幻視已經死了。',
  cast: [
    { a: 'Elizabeth Olsen', r: 'Wanda Maximoff', id: 'wanda' },
    { a: 'Paul Bettany', r: 'Vision', id: 'vision' },
    { a: 'Kathryn Hahn', r: 'Agatha Harkness', id: 'agatha-char' },
    { a: 'Teyonah Parris', r: 'Monica Rambeau', id: 'monica' }
  ],
  credits: [
    { type: 'mid', text: '莫妮卡被告知「有人想跟你談談」—— 對方是史克魯人，代表福瑞在太空找她。' },
    { type: 'post', text: '汪達在山中小屋讀《黑暗神書》，同時聽見兩個兒子在另一個地方呼救。', key: true }
  ],
  quotes: ['What is grief, if not love persevering?']
},
'loki-s1': {
  runtime: '6 集，每集 40–55 分鐘', rating: 'TV-14',
  prereq: '看過《終局之戰》—— 這個洛基是 2012 年帶著方塊逃走的變體。',
  cast: [
    { a: 'Tom Hiddleston', r: 'Loki', id: 'loki-char' },
    { a: 'Owen Wilson', r: 'Mobius', id: 'mobius' },
    { a: 'Sophia Di Martino', r: 'Sylvie', id: 'sylvie' },
    { a: 'Jonathan Majors', r: 'He Who Remains', id: 'kang' },
    { a: 'Gugu Mbatha-Raw', r: 'Ravonna Renslayer' }
  ],
  credits: [
    { type: 'post', text: '第一季結尾直接顯示「Loki will return in season 2」的檔案戳章。' }
  ],
  note: '整個多元宇宙傳奇的起點就在第六集最後五分鐘。'
},
'loki-s2': {
  runtime: '6 集', rating: 'TV-14',
  prereq: '必須看過第一季。',
  cast: [
    { a: 'Tom Hiddleston', r: 'Loki', id: 'loki-char' },
    { a: 'Owen Wilson', r: 'Mobius', id: 'mobius' },
    { a: 'Ke Huy Quan', r: 'O.B.' },
    { a: 'Jonathan Majors', r: 'Victor Timely', id: 'kang' }
  ],
  quotes: ['我知道我想要什麼了。我想要一個好的結局。']
},
'falcon-winter-soldier': {
  runtime: '6 集', rating: 'TV-14',
  prereq: '看過《終局之戰》—— 山姆拿到盾牌是本劇的起點。',
  cast: [
    { a: 'Anthony Mackie', r: 'Sam Wilson', id: 'sam-wilson' },
    { a: 'Sebastian Stan', r: 'Bucky Barnes', id: 'bucky' },
    { a: 'Wyatt Russell', r: 'John Walker', id: 'john-walker' },
    { a: 'Daniel Brühl', r: 'Zemo', id: 'zemo' },
    { a: 'Carl Lumbly', r: 'Isaiah Bradley', id: 'isaiah' }
  ],
  credits: [
    { type: 'post', text: 'John Walker 被瓦倫提娜招募，穿上黑色戰衣成為「美國密探」。' }
  ]
},
'daredevil-born-again': {
  runtime: '9 集', rating: 'TV-MA',
  prereq: '看過 Netflix《夜魔俠》最完整，但本劇有為新觀眾重新introduce。',
  cast: [
    { a: 'Charlie Cox', r: 'Matt Murdock', id: 'daredevil-char' },
    { a: "Vincent D'Onofrio", r: 'Wilson Fisk', id: 'kingpin' },
    { a: 'Jon Bernthal', r: 'Frank Castle / 制裁者', id: 'punisher' }
  ],
  note: 'TV-MA 級。制裁者在本劇回歸，隨後首度登上大銀幕（《蜘蛛人4》）。'
},
'agatha': {
  runtime: '9 集', rating: 'TV-14',
  prereq: '必須看過《汪達幻視》。',
  cast: [
    { a: 'Kathryn Hahn', r: 'Agatha Harkness', id: 'agatha-char' },
    { a: 'Joe Locke', r: 'Billy Maximoff / Wiccan', id: 'billy' },
    { a: 'Aubrey Plaza', r: 'Rio Vidal' }
  ],
  credits: [
    { type: 'post', text: 'Billy 開始尋找他失散的雙胞胎兄弟 Tommy。', key: true }
  ]
},
'hawkeye': {
  runtime: '6 集', rating: 'TV-14',
  prereq: '看過《終局之戰》—— 克林特的罪惡感來自娜塔莎之死。',
  cast: [
    { a: 'Jeremy Renner', r: 'Clint Barton', id: 'hawkeye-char' },
    { a: 'Hailee Steinfeld', r: 'Kate Bishop', id: 'kate-bishop' },
    { a: 'Alaqua Cox', r: 'Maya Lopez / Echo', id: 'echo-char' },
    { a: 'Florence Pugh', r: 'Yelena Belova', id: 'yelena' },
    { a: "Vincent D'Onofrio", r: 'Wilson Fisk', id: 'kingpin' }
  ]
},
'ms-marvel': {
  runtime: '6 集', rating: 'TV-14',
  prereq: '不需要前置知識。',
  cast: [
    { a: 'Iman Vellani', r: 'Kamala Khan', id: 'kamala' }
  ],
  credits: [
    { type: 'post', text: '卡瑪拉的手鐲發光，她瞬間消失、卡蘿丹佛斯出現在她房間 —— 直接接上《驚奇隊長2》。', key: true }
  ]
},
'daredevil-netflix': {
  runtime: '3 季 39 集', rating: 'TV-MA',
  prereq: '不需要 MCU 前置知識，完全獨立。',
  cast: [
    { a: 'Charlie Cox', r: 'Matt Murdock', id: 'daredevil-char' },
    { a: "Vincent D'Onofrio", r: 'Wilson Fisk', id: 'kingpin' },
    { a: 'Jon Bernthal', r: 'Frank Castle（第二季）', id: 'punisher' },
    { a: 'Elden Henson', r: 'Foggy Nelson' },
    { a: 'Deborah Ann Woll', r: 'Karen Page' }
  ],
  note: 'TV-MA 級，暴力程度遠高於 MCU 電影。第一季走廊長鏡頭是影集史上的經典場面之一。'
},
'punisher-netflix': {
  runtime: '2 季 26 集', rating: 'TV-MA',
  prereq: '看過《夜魔俠》第二季認識 Frank Castle。',
  cast: [
    { a: 'Jon Bernthal', r: 'Frank Castle', id: 'punisher' }
  ],
  note: 'TV-MA 級，暴力程度極高。'
},

/* ================= Sony 舊蜘蛛人 ================= */
'raimi-1': {
  runtime: '121 分鐘', rating: 'PG-13',
  prereq: '完全獨立，不屬於 MCU。',
  cast: [
    { a: 'Tobey Maguire', r: 'Peter Parker', id: 'peter-two' },
    { a: 'Willem Dafoe', r: 'Norman Osborn / 綠惡魔', id: 'green-goblin' },
    { a: 'Kirsten Dunst', r: 'Mary Jane Watson' },
    { a: 'James Franco', r: 'Harry Osborn', id: 'harry' },
    { a: 'Cliff Robertson', r: 'Uncle Ben', id: 'uncle-ben' }
  ],
  quotes: ['能力愈強，責任愈大。'],
  deaths: ['Uncle Ben', 'Norman Osborn']
},
'raimi-2': {
  runtime: '127 分鐘', rating: 'PG-13',
  prereq: '看過第一集。',
  cast: [
    { a: 'Tobey Maguire', r: 'Peter Parker', id: 'peter-two' },
    { a: 'Alfred Molina', r: 'Otto Octavius / 八爪博士', id: 'doc-ock' },
    { a: 'Kirsten Dunst', r: 'Mary Jane Watson' }
  ],
  deaths: ['Otto Octavius']
},
'raimi-3': {
  runtime: '139 分鐘', rating: 'PG-13',
  prereq: '看過前兩集。',
  cast: [
    { a: 'Tobey Maguire', r: 'Peter Parker', id: 'peter-two' },
    { a: 'Thomas Haden Church', r: 'Flint Marko / 沙人', id: 'sandman' },
    { a: 'Topher Grace', r: 'Eddie Brock / 猛毒', id: 'venom' },
    { a: 'James Franco', r: 'Harry Osborn', id: 'harry' }
  ],
  deaths: ['Harry Osborn', 'Eddie Brock']
},
'webb-1': {
  runtime: '136 分鐘', rating: 'PG-13',
  prereq: '完全獨立的重啟版。',
  cast: [
    { a: 'Andrew Garfield', r: 'Peter Parker', id: 'peter-three' },
    { a: 'Emma Stone', r: 'Gwen Stacy', id: 'gwen' },
    { a: 'Rhys Ifans', r: 'Curt Connors / 蜥蜴人', id: 'lizard' }
  ]
},
'webb-2': {
  runtime: '142 分鐘', rating: 'PG-13',
  prereq: '看過第一集。',
  cast: [
    { a: 'Andrew Garfield', r: 'Peter Parker', id: 'peter-three' },
    { a: 'Emma Stone', r: 'Gwen Stacy', id: 'gwen' },
    { a: 'Jamie Foxx', r: 'Max Dillon / 電光人', id: 'electro' },
    { a: 'Dane DeHaan', r: 'Harry Osborn', id: 'harry' }
  ],
  deaths: ['Gwen Stacy']
}

};
