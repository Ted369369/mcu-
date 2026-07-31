/* ============================================================
   角色資料（第二批）— 擴充至完整 MCU
   ============================================================ */

window.MCU_CHARACTERS_2 = [

/* ================= 蟻人一家 ================= */
{
  id: 'scott-lang', name: 'Scott Lang / 蟻人', en: 'Scott Lang / Ant-Man',
  actor: 'Paul Rudd', group: 'avengers', role: 'hero',
  glyph: 'ant', accent: ['#0891b2', '#b45309'],
  tagline: '救了全宇宙的前科犯。',
  bio: '因揭發公司弊案而入獄的電機工程師，出獄後穿上蟻人戰衣。他不是最強的復仇者，但《終局之戰》能成立完全靠他。',
  facts: [
    '他在《蟻人與黃蜂女》片尾被困在量子領域，因此躲過了彈指。',
    '五年後一隻老鼠意外按到開關把他放出來 —— 他帶回「量子領域時間流速不同」這個情報，整個時間搶劫計畫由此展開。'
  ],
  arc: [
    { entry: 'ant-man', text: '出獄後為贏回女兒的信任而誤入歧途，被 Hank Pym 選中成為蟻人。他突破極限縮小進入量子領域並成功返回 —— 證明了那裡可以往返。', highlight: true },
    { entry: 'civil-war', text: '被獵鷹找來加入美隊陣營，在機場一戰中首度變成巨人。' },
    { entry: 'ant-man-2', text: '因違反協議被軟禁在家。片尾進入量子領域採集能量時，外面三人同時化為灰燼，他被困在裡面。', highlight: true },
    { entry: 'endgame', text: '五年後被意外放出，帶回時間旅行的關鍵情報，並參與最終決戰。', highlight: true },
    { entry: 'quantumania', text: '全家被吸入量子領域，與征服者康正面對決。' },
    { entry: 'doomsday', text: '已確認集結。' }
  ],
  appears: ['ant-man', 'civil-war', 'ant-man-2', 'endgame', 'quantumania', 'doomsday']
},
{
  id: 'hope', name: 'Hope van Dyne / 黃蜂女', en: 'Hope van Dyne / Wasp',
  actor: 'Evangeline Lilly', group: 'avengers', role: 'hero',
  glyph: 'ant', accent: ['#f0b429', '#111827'],
  tagline: '本來就比 Scott 更適合穿那套戰衣。',
  bio: 'Hank Pym 與 Janet van Dyne 的女兒。第一集全程訓練 Scott，第二集終於拿到自己的戰衣。',
  arc: [
    { entry: 'ant-man', text: '負責訓練 Scott，並對父親不讓她親自上陣極為不滿。片尾她終於看到母親的黃蜂女戰衣。' },
    { entry: 'ant-man-2', text: '正式成為黃蜂女，與 Scott 並肩作戰尋找母親。片尾化為灰燼。' },
    { entry: 'endgame', text: '被復活，參與最終決戰。' },
    { entry: 'quantumania', text: '在量子領域對抗康。' }
  ],
  appears: ['ant-man', 'ant-man-2', 'endgame', 'quantumania']
},
{
  id: 'hank-pym', name: 'Hank Pym', en: 'Hank Pym',
  actor: 'Michael Douglas', group: 'avengers', role: 'ally',
  glyph: 'ant', accent: ['#475569', '#0891b2'],
  tagline: '初代蟻人、皮姆粒子的發明者。',
  bio: '冷戰時期的神盾局特工與科學家，發明了能改變物體大小的「皮姆粒子」。因妻子在任務中消失而封存技術數十年。',
  arc: [
    { entry: 'ant-man', text: '選中 Scott 接班，阻止門徒 Darren Cross 復刻並軍事化縮小技術。' },
    { entry: 'ant-man-2', text: '打造量子隧道尋找失蹤三十年的妻子 Janet。片尾化為灰燼。' },
    { entry: 'quantumania', text: '在量子領域重逢自己畢生研究的世界。' }
  ],
  appears: ['ant-man', 'ant-man-2', 'endgame', 'quantumania']
},
{
  id: 'janet', name: 'Janet van Dyne', en: 'Janet van Dyne',
  actor: 'Michelle Pfeiffer', group: 'avengers', role: 'ally',
  glyph: 'ant', accent: ['#be123c', '#4c1d95'],
  tagline: '在量子領域活了三十年的初代黃蜂女。',
  bio: '初代黃蜂女。1987 年為阻止洲際飛彈而無限縮小、墜入量子領域，被困三十年。',
  facts: ['她在量子領域見過康，並且知道他有多危險 —— 這是她一直不願提起的祕密。'],
  arc: [
    { entry: 'ant-man', text: '（回憶）為阻止飛彈而無限縮小，消失在量子領域。' },
    { entry: 'ant-man-2', text: '被 Scott 與家人成功救回。她警告量子領域有些東西不該被驚動。' },
    { entry: 'quantumania', text: '她隱瞞的祕密揭曉：她在量子領域曾與被放逐的康合作，也親眼見識他的殘暴。' }
  ],
  appears: ['ant-man-2', 'quantumania']
},
{
  id: 'cassie', name: 'Cassie Lang', en: 'Cassie Lang',
  actor: 'Kathryn Newton', group: 'newgen', role: 'hero',
  glyph: 'ant', accent: ['#0891b2', '#be123c'],
  tagline: 'Scott 的女兒，新一代的縮小英雄。',
  bio: 'Scott Lang 的女兒。在父親消失的五年間長大，成為關心社會議題的行動派，並自行研究出量子訊號技術。',
  arc: [
    { entry: 'ant-man', text: '年幼登場，是 Scott 想重新做人的唯一理由。' },
    { entry: 'quantumania', text: '她打造的量子訊號器把全家吸進量子領域。她獲得自己的戰衣。' },
    { entry: 'doomsday', text: '已確認集結。' }
  ],
  appears: ['ant-man', 'quantumania', 'doomsday']
},

/* ================= 魔法與神秘 ================= */
{
  id: 'wong', name: 'Wong', en: 'Wong',
  actor: 'Benedict Wong', group: 'avengers', role: 'ally',
  glyph: 'eye', accent: ['#b45309', '#0d9488'],
  tagline: '現任至尊法師 —— 而且他真的很忙。',
  bio: '卡瑪泰姬的圖書館管理員，在史傳奇因彈指消失的五年間接任至尊法師。是 MCU 中出場作品最多的「配角」之一。',
  arc: [
    { entry: 'doctor-strange', text: '掌管卡瑪泰姬的藏書，與史傳奇亦師亦友。' },
    { entry: 'infinity-war', text: '守衛紐約至聖所。' },
    { entry: 'endgame', text: '率法師團從各地開啟傳送門，帶來最終決戰的援軍。' },
    { entry: 'shang-chi', text: '透過傳送門與尚氣一行接觸，調查十環的來歷。' },
    { entry: 'no-way-home', text: '警告史傳奇不要施那道咒語，然後明智地先行離開。' },
    { entry: 'she-hulk', text: '在法庭上作證，並把 Blonsky 從農場帶走。' },
    { entry: 'multiverse-of-madness', text: '協助對抗被腐化的緋紅女巫。' }
  ],
  appears: ['doctor-strange', 'infinity-war', 'endgame', 'shang-chi', 'no-way-home', 'multiverse-of-madness', 'she-hulk']
},
{
  id: 'ancient-one', name: '古一法師', en: 'The Ancient One',
  actor: 'Tilda Swinton', group: 'avengers', role: 'ally',
  glyph: 'eye', accent: ['#f0b429', '#0d9488'],
  tagline: '教會史傳奇的人 —— 也自己犯了同樣的錯。',
  bio: '在史傳奇之前的至尊法師，活了數百年。她一邊禁止門徒使用黑暗次元的力量，一邊私下用它延長自己的生命。',
  arc: [
    { entry: 'doctor-strange', text: '收史傳奇為徒。臨終前承認自己也偷用了黑暗次元的力量：「我們都是為了更大的善而破戒。」' },
    { entry: 'endgame', text: '2012 年的她把時間寶石交給班納，並解釋移除寶石會產生分支時間線 —— 這是整個時間搶劫規則的來源。', highlight: true }
  ],
  appears: ['doctor-strange', 'endgame']
},
{
  id: 'agatha-char', name: 'Agatha Harkness', en: 'Agatha Harkness',
  actor: 'Kathryn Hahn', group: 'newgen', role: 'villain',
  glyph: 'hex', accent: ['#7e22ce', '#166534'],
  tagline: '「Agatha all along.」',
  bio: '活了數百年的女巫，靠吸取其他女巫的力量維生。她潛伏在 Westview 想奪取汪達的混沌魔法。',
  arc: [
    { entry: 'wandavision', text: '偽裝成鄰居 Agnes 潛伏在小鎮裡，最後揭露自己才是幕後推手，並說出汪達是「緋紅女巫」的真相。被汪達封印記憶。', highlight: true },
    { entry: 'agatha', text: '三年後恢復自我，組女巫團走上「女巫之路」奪回力量。' }
  ],
  appears: ['wandavision', 'agatha']
},
{
  id: 'billy', name: 'Billy Maximoff / Wiccan', en: 'Billy Maximoff / Wiccan',
  actor: 'Joe Locke', group: 'newgen', role: 'hero',
  glyph: 'hex', accent: ['#be123c', '#0891b2'],
  tagline: '汪達用魔法創造的兒子 —— 他真的存在。',
  bio: '汪達在 Westview 幻境中創造的雙胞胎之一。幻境消散後，他的靈魂附到另一個瀕死男孩身上，成為魔法師 Wiccan。',
  arc: [
    { entry: 'wandavision', text: '與雙胞胎兄弟 Tommy 一同被汪達的魔法創造出來，在幻境消散時與母親道別。' },
    { entry: 'multiverse-of-madness', text: '（另一宇宙的版本）汪達為了與他和 Tommy 團聚而發動整場災難。' },
    { entry: 'agatha', text: '身分揭曉 —— 他就是那個被封印名字的少年。他真實存在於 MCU，正在尋找自己的雙胞胎 Tommy。', highlight: true }
  ],
  appears: ['wandavision', 'agatha']
},
{
  id: 'moon-knight-char', name: 'Marc Spector / 月光騎士', en: 'Marc Spector / Moon Knight',
  actor: 'Oscar Isaac', group: 'newgen', role: 'antihero',
  glyph: 'eye', accent: ['#e5e7eb', '#1e293b'],
  tagline: '一個身體，三個人格，一位月神。',
  bio: '瀕死時與埃及月神 Khonshu 立約的傭兵，成為其人間化身。他患有解離性身分障礙，與溫吞的 Steven Grant 及第三人格 Jake Lockley 共用身體。',
  arc: [
    { entry: 'moon-knight', text: '在對抗 Ammit 信徒 Arthur Harrow 的過程中，逐步面對自己的童年創傷與人格分裂的成因。' }
  ],
  appears: ['moon-knight']
},

/* ================= 捍衛者聯盟・街頭層級 ================= */
{
  id: 'daredevil-char', name: 'Matt Murdock / 夜魔俠', en: 'Matt Murdock / Daredevil',
  actor: 'Charlie Cox', group: 'street', role: 'hero',
  glyph: 'skull', accent: ['#7f1d1d', '#111827'], pin: true,
  tagline: '「無所畏懼的人」—— 白天律師，晚上義警。',
  bio: '幼時因化學藥劑失明，其餘感官因此極度敏銳。白天是律師 Matt Murdock，晚上是廚房地獄的蒙面義警。虔誠的天主教徒，這讓他的暴力永遠伴隨罪惡感。',
  facts: [
    'Netflix 版《夜魔俠》(2015–2018) 已被 Disney+ 納入官方 MCU 時間軸。',
    '他堅持絕不殺人 —— 這與制裁者形成整個街頭層級最重要的對立。'
  ],
  arc: [
    { entry: 'daredevil-netflix', text: '三季故事：對抗 Wilson Fisk、手合會，並在第三季走過信仰崩潰與重建。' },
    { entry: 'defenders', text: '與潔西卡瓊斯、盧克凱奇、鐵拳俠聯手對抗手合會。' },
    { entry: 'no-way-home', text: '以彼得的律師身分短暫登場，接住飛進來的磚頭：「我是一個非常好的律師。」', highlight: true },
    { entry: 'she-hulk', text: '穿著黃紅戰衣登場，與 Jennifer 合作（並過了一夜）。' },
    { entry: 'echo', text: '在紐約與 Maya 有短暫交會。' },
    { entry: 'daredevil-born-again', text: '掛起戰衣專心當律師，卻遇上選上紐約市長的 Wilson Fisk。兩人在法庭與市政廳裡的角力比拳頭更緊繃。', highlight: true }
  ],
  appears: ['daredevil-netflix', 'defenders', 'no-way-home', 'she-hulk', 'echo', 'daredevil-born-again', 'dd-born-again-s2']
},
{
  id: 'kingpin', name: 'Wilson Fisk / 金霸王', en: 'Wilson Fisk / Kingpin',
  actor: "Vincent D'Onofrio", group: 'street', role: 'villain',
  glyph: 'tombstone', accent: ['#e5e7eb', '#111827'], pin: true,
  tagline: '漫威影視史上最好的反派之一。',
  bio: '控制紐約地下世界的犯罪之王。一個同時極度暴力又極度脆弱的人 —— 他真心相信自己是在拯救這座城市。',
  arc: [
    { entry: 'daredevil-netflix', text: '主要反派。從幕後金主一路成為公開的犯罪之王，與 Matt Murdock 的對決貫穿三季。' },
    { entry: 'hawkeye', text: '以 Maya Lopez 養父的身分現身，是整部影集的幕後主使。', highlight: true },
    { entry: 'echo', text: '與養女 Maya 的關係正面攤牌。' },
    { entry: 'daredevil-born-again', text: '洗白從政，當選紐約市長 —— 用合法的權力做他一直在做的事。', highlight: true }
  ],
  appears: ['daredevil-netflix', 'hawkeye', 'echo', 'daredevil-born-again', 'dd-born-again-s2']
},
{
  id: 'jessica-char', name: 'Jessica Jones', en: 'Jessica Jones',
  actor: 'Krysten Ritter', group: 'street', role: 'antihero',
  glyph: 'widow', accent: ['#4c1d95', '#111827'],
  tagline: '一個靠酒精撐著的超能力倖存者。',
  bio: '擁有超人力量的私家偵探。曾被反派 Kilgrave 用精神控制長期奴役，故事主軸是創傷後的復原而非打擊犯罪。',
  arc: [
    { entry: 'jessica-jones', text: '面對重新出現的 Kilgrave，一部關於創傷、同意權與加害者心態的心理驚悚劇。' },
    { entry: 'defenders', text: '被捲入手合會的陰謀，與其他三人聯手。' }
  ],
  appears: ['jessica-jones', 'defenders']
},
{
  id: 'luke-cage-char', name: 'Luke Cage', en: 'Luke Cage',
  actor: 'Mike Colter', group: 'street', role: 'hero',
  glyph: 'fist', accent: ['#a16207', '#111827'],
  tagline: '哈林區的防彈英雄。',
  bio: '被冤獄的男人，在監獄實驗中獲得刀槍不入的皮膚與超人力量。他不想當英雄，但哈林區需要一個。',
  arc: [
    { entry: 'luke-cage', text: '對抗夜總會老闆 Cottonmouth 與議員 Mariah Dillard，成為哈林區的守護者。' },
    { entry: 'defenders', text: '與其他三人聯手對抗手合會。' }
  ],
  appears: ['luke-cage', 'defenders']
},
{
  id: 'iron-fist-char', name: 'Danny Rand / 鐵拳俠', en: 'Danny Rand / Iron Fist',
  actor: 'Finn Jones', group: 'street', role: 'hero',
  glyph: 'fist', accent: ['#166534', '#f0b429'],
  tagline: '崑崙的守護者。',
  bio: '空難後被帶到異界城市崑崙修習武術的富家子，獲得將氣凝聚於拳頭的能力。',
  arc: [
    { entry: 'iron-fist', text: '回紐約奪回家族企業並對抗手合會。' },
    { entry: 'defenders', text: '手合會的目標正是他 —— 他是打開地底大門的鑰匙。' }
  ],
  appears: ['iron-fist', 'defenders']
},
{
  id: 'kate-bishop', name: 'Kate Bishop', en: 'Kate Bishop',
  actor: 'Hailee Steinfeld', group: 'newgen', role: 'hero',
  glyph: 'arrow', accent: ['#7c3aed', '#b45309'],
  tagline: '「全世界最厲害的神射手」—— 她自己說的。',
  bio: '22 歲的富家女，從小因目睹紐約大戰中鷹眼的表現而立志成為神射手。新一代的鷹眼。',
  arc: [
    { entry: 'hawkeye', text: '穿上「浪人」戰衣引來追殺，硬是把克林特拖進自己的麻煩裡，最後成為他認可的搭檔。' }
  ],
  appears: ['hawkeye']
},
{
  id: 'echo-char', name: 'Maya Lopez / Echo', en: 'Maya Lopez / Echo',
  actor: 'Alaqua Cox', group: 'newgen', role: 'antihero',
  glyph: 'arrow', accent: ['#b91c1c', '#78350f'],
  tagline: 'MCU 第一位失聰的原住民主角。',
  bio: '失聰的 Choctaw 族女性，能完美複製任何人的動作。由金霸王養大，並被利用來對付敵人。',
  arc: [
    { entry: 'hawkeye', text: '追殺穿著浪人戰衣的人 —— 因為浪人殺了她父親。真相是金霸王一直在騙她。' },
    { entry: 'echo', text: '回到奧克拉荷馬的故鄉，連結上祖先的力量，正面對決養父金霸王。' }
  ],
  appears: ['hawkeye', 'echo']
},
{
  id: 'she-hulk-char', name: 'Jennifer Walters / 女浩克', en: 'Jennifer Walters / She-Hulk',
  actor: 'Tatiana Maslany', group: 'newgen', role: 'hero',
  glyph: 'fist', accent: ['#15803d', '#7c3aed'],
  tagline: '會直接對著鏡頭跟你說話的律師。',
  bio: '布魯斯班納的表妹，因車禍中沾到他的血液而獲得浩克能力 —— 而且她能完全保持理智。',
  arc: [
    { entry: 'she-hulk', text: '接下「超人類法律部門」，一邊當女浩克一邊處理超人類官司。最後一集她直接闖進漫威工作室與 AI 編劇爭論結局。', highlight: true }
  ],
  appears: ['she-hulk']
},

/* ================= 十環與宇宙 ================= */
{
  id: 'shang-chi-char', name: '尚氣', en: 'Shang-Chi',
  actor: 'Simu Liu', group: 'avengers', role: 'hero',
  glyph: 'rings', accent: ['#b45309', '#065f46'],
  tagline: '從小被訓練成刺客的兒子。',
  bio: '十環幫首領文武之子，從小被訓練成刺客。母親死後他逃到舊金山當泊車小弟，直到父親找上門。',
  arc: [
    { entry: 'shang-chi', text: '回頭面對父親，繼承十環，並在大羅之戰中阻止「居食者」吞噬世界。' },
    { entry: 'doomsday', text: '已確認集結。' }
  ],
  appears: ['shang-chi', 'doomsday']
},
{
  id: 'wenwu', name: '文武', en: 'Xu Wenwu',
  actor: 'Tony Leung（梁朝偉）', group: 'bigbad', role: 'villain',
  glyph: 'rings', accent: ['#7f1d1d', '#b45309'],
  tagline: '活了千年的父親。',
  bio: '十環的持有者，靠神環的力量活了千年並建立十環幫。妻子死後他被悲痛與幻聽扭曲，深信她仍被囚禁在大羅。',
  arc: [
    { entry: 'shang-chi', text: '為了「救回」亡妻而率軍攻打大羅，實則被邪靈「居食者」利用。最後將十環傳給兒子後身亡。', highlight: true },
    { entry: 'iron-man', text: '（背景）綁架東尼史塔克的正是十環幫的一個分支。' }
  ],
  appears: ['shang-chi']
},
{
  id: 'nebula', name: '涅布拉', en: 'Nebula',
  actor: 'Karen Gillan', group: 'cosmic', role: 'hero',
  glyph: 'starburst', accent: ['#0891b2', '#4c1d95'],
  tagline: '薩諾斯每次都拿她的身體零件當懲罰。',
  bio: '薩諾斯的養女、葛摩菈的妹妹。每次輸給姊姊，薩諾斯就替換掉她身上的一個部位換成機械。',
  arc: [
    { entry: 'gotg-1', text: '替 Ronan 效力，與葛摩菈為敵。' },
    { entry: 'gotg-2', text: '與葛摩菈的關係開始和解 —— 她說出真相：「我只想要一個姊姊。」', highlight: true },
    { entry: 'infinity-war', text: '被薩諾斯拆解拷問，逼出靈魂寶石的線索。' },
    { entry: 'endgame', text: '關鍵角色。她的記憶被 2014 年的自己讀取，讓薩諾斯得知未來 —— 她也親手殺了過去的自己。', highlight: true },
    { entry: 'gotg-3', text: '成為隊伍中最可靠的人，最後留下建設知者。' }
  ],
  appears: ['gotg-1', 'gotg-2', 'infinity-war', 'endgame', 'gotg-3']
},
{
  id: 'mantis', name: '曼帝斯', en: 'Mantis',
  actor: 'Pom Klementieff', group: 'cosmic', role: 'hero',
  glyph: 'starburst', accent: ['#166534', '#be123c'],
  tagline: '星爵同父異母的妹妹。',
  bio: '擁有觸碰即可讀取與操控情緒能力的共感者，原本被伊戈用來安撫他入睡。',
  arc: [
    { entry: 'gotg-2', text: '加入異攻隊。她用能力讓伊戈入睡，是取勝的關鍵。' },
    { entry: 'infinity-war', text: '在泰坦星用共感能力壓制薩諾斯 —— 差一點就成功。' },
    { entry: 'gotg-holiday', text: '揭露自己是伊戈的女兒，也就是星爵的妹妹。', highlight: true },
    { entry: 'gotg-3', text: '最後選擇離開隊伍，去尋找自己想要的人生。' }
  ],
  appears: ['gotg-2', 'infinity-war', 'endgame', 'gotg-holiday', 'gotg-3']
},
{
  id: 'namor', name: '納摩', en: 'Namor',
  actor: 'Tenoch Huerta Mejía', group: 'bigbad', role: 'antihero',
  glyph: 'celestial', accent: ['#0e7490', '#166534'],
  tagline: '水下王國 Talokan 的統治者。',
  bio: '祖先為逃離西班牙殖民者而飲下汎金屬藥草潛入海底。他活了數百年，記得殖民帶來的一切。',
  arc: [
    { entry: 'wakanda-forever', text: '為了在列強掠奪汎金屬前先發制人而攻擊汎達。他不是為征服，是為保護自己的族人。', highlight: true },
    { entry: 'doomsday', text: '已確認集結。' }
  ],
  appears: ['wakanda-forever', 'doomsday']
},

/* ================= 復仇者周邊 ================= */
{
  id: 'rhodey', name: 'Rhodey / 戰爭機器', en: 'James Rhodes / War Machine',
  actor: 'Don Cheadle', group: 'avengers', role: 'hero',
  glyph: 'arc', accent: ['#475569', '#b91c1c'],
  tagline: '東尼唯一真正的老朋友。',
  bio: '空軍上校，東尼史塔克的摯友。穿上軍用版鋼鐵裝成為戰爭機器。',
  arc: [
    { entry: 'iron-man-2', text: '穿上 Mark II 戰甲成為戰爭機器。' },
    { entry: 'civil-war', text: '站在東尼一方。在機場一戰中被幻視誤擊墜落，導致下半身癱瘓。', highlight: true },
    { entry: 'infinity-war', text: '靠外骨骼重新行走，在汎達參戰。' },
    { entry: 'endgame', text: '參與時間搶劫與最終決戰，並在東尼的葬禮上送別。' },
    { entry: 'secret-invasion', text: '被史克魯人取代並潛伏了一段時間。' }
  ],
  appears: ['iron-man-2', 'iron-man-3', 'civil-war', 'infinity-war', 'endgame', 'secret-invasion']
},
{
  id: 'pepper', name: 'Pepper Potts', en: 'Pepper Potts',
  actor: 'Gwyneth Paltrow', group: 'avengers', role: 'ally',
  glyph: 'heart', accent: ['#be123c', '#f0b429'],
  tagline: '東尼的另一半，也是史塔克工業的執行長。',
  bio: '從東尼的助理一路成為史塔克工業執行長與他的妻子。《終局之戰》中穿上「Rescue」戰甲參戰。',
  arc: [
    { entry: 'iron-man', text: '東尼的助理，協助他換下胸口的反應爐。' },
    { entry: 'iron-man-3', text: '被注射絕境病毒，最後親手擊敗 Killian。' },
    { entry: 'endgame', text: '與東尼育有女兒 Morgan。穿上 Rescue 戰甲參與最終決戰，並在他死前對他說「你可以休息了」。', highlight: true }
  ],
  appears: ['iron-man', 'iron-man-2', 'iron-man-3', 'civil-war', 'infinity-war', 'endgame']
},
{
  id: 'jane-foster', name: 'Jane Foster', en: 'Jane Foster',
  actor: 'Natalie Portman', group: 'avengers', role: 'ally',
  glyph: 'hammer', accent: ['#db2777', '#1d4ed8'],
  tagline: '天文物理學家，後來的女雷神。',
  bio: '索爾在地球遇到的天文物理學家。多年後她因末期癌症被重鑄的妙爾尼爾選中，成為女雷神。',
  arc: [
    { entry: 'thor', text: '在新墨西哥發現墜落的索爾，兩人相戀。' },
    { entry: 'thor-2', text: '被現實寶石「乙太」侵入體內。' },
    { entry: 'thor-4', text: '罹患末期癌症，被妙爾尼爾選中成為女雷神。每次變身都在加速病情。她仍選擇最後一次舉起鎚子，在索爾懷中離世。', highlight: true }
  ],
  appears: ['thor', 'thor-2', 'thor-4']
},
{
  id: 'valkyrie', name: '女武神', en: 'Valkyrie',
  actor: 'Tessa Thompson', group: 'avengers', role: 'hero',
  glyph: 'hammer', accent: ['#1d4ed8', '#b45309'],
  tagline: '新阿斯嘉的國王。',
  bio: '阿斯嘉女武神軍團的最後倖存者。同袍全數死於海拉之手後，她逃到薩卡星酗酒度日。',
  arc: [
    { entry: 'thor-3', text: '在薩卡星把索爾賣給至尊者，最後選擇回頭面對海拉。' },
    { entry: 'endgame', text: '率阿斯嘉人參與最終決戰。索爾離開時把新阿斯嘉交給她。', highlight: true },
    { entry: 'thor-4', text: '以新阿斯嘉國王的身分治理國家並參戰。' }
  ],
  appears: ['thor-3', 'endgame', 'thor-4']
},
{
  id: 'isaiah', name: 'Isaiah Bradley', en: 'Isaiah Bradley',
  actor: 'Carl Lumbly', group: 'avengers', role: 'ally',
  glyph: 'shield', accent: ['#111827', '#b91c1c'],
  tagline: '被歷史抹除的黑人美國隊長。',
  bio: '韓戰時期被注射超級士兵血清的黑人軍人。政府事後把他關押三十年做實驗，並從所有紀錄中抹除他的存在。',
  facts: ['他的存在是《獵鷹與酷寒戰士》最沉重的部分 —— 山姆接下盾牌前必須面對這段歷史。'],
  arc: [
    { entry: 'falcon-winter-soldier', text: '山姆與巴奇找到他，得知政府對他做過的事。他起初拒絕山姆：「他們絕不會讓一個黑人當美國隊長。」最後山姆讓他的名字進了史密森尼博物館。', highlight: true },
    { entry: 'brave-new-world', text: '被陷害為刺殺總統的兇手並遭逮捕，是山姆調查的起點。' }
  ],
  appears: ['falcon-winter-soldier', 'brave-new-world']
},
{
  id: 'mobius', name: 'Mobius', en: 'Mobius M. Mobius',
  actor: 'Owen Wilson', group: 'newgen', role: 'ally',
  glyph: 'tva', accent: ['#b45309', '#166534'],
  tagline: 'TVA 探員，洛基唯一的朋友。',
  bio: '時間變異管理局的資深探員，招募洛基協助追捕變體。他也是被抹除記憶的變體之一。',
  arc: [
    { entry: 'loki-s1', text: '招募洛基，並逐漸從「相信 TVA」走到懷疑一切。' },
    { entry: 'loki-s2', text: '陪洛基走到最後。當洛基選擇獨自撐起多元宇宙時，他是唯一明白那個代價的人。', highlight: true }
  ],
  appears: ['loki-s1', 'loki-s2']
},
{
  id: 'alexei', name: '紅衛兵 Alexei', en: 'Alexei Shostakov / Red Guardian',
  actor: 'David Harbour', group: 'newgen', role: 'antihero',
  glyph: 'shield', accent: ['#b91c1c', '#166534'],
  tagline: '蘇聯版的美國隊長 —— 而且他非常想跟隊長打一場。',
  bio: '蘇聯的超級士兵，曾在假家庭任務中扮演娜塔莎與葉蓮娜的「父親」。虛榮、話多，但那份父愛是真的。',
  arc: [
    { entry: 'black-widow', text: '被兩個「女兒」從監獄救出，一路吹噓當年勇。最後真心說出他對她們的愧疚。' },
    { entry: 'thunderbolts', text: '加入瓦倫提娜召集的隊伍，是團隊中的情緒潤滑劑。' },
    { entry: 'doomsday', text: '已確認集結。' }
  ],
  appears: ['black-widow', 'thunderbolts', 'doomsday']
},
{
  id: 'ghost', name: '幽靈 Ava Starr', en: 'Ghost / Ava Starr',
  actor: 'Hannah John-Kamen', group: 'newgen', role: 'antihero',
  glyph: 'question', accent: ['#0891b2', '#e5e7eb'],
  tagline: '身體不斷相位穿透的痛苦。',
  bio: '幼時因量子實驗事故而身體不斷在相位間穿透、持續劇痛。她不是壞人，只是走投無路。',
  arc: [
    { entry: 'ant-man-2', text: '為了活下去而追奪 Janet 的量子能量，最後被治療、與眾人和解。' },
    { entry: 'thunderbolts', text: '加入反英雄隊伍，成為新復仇者的一員。' },
    { entry: 'doomsday', text: '已確認集結。' }
  ],
  appears: ['ant-man-2', 'thunderbolts', 'doomsday']
},
{
  id: 'howard-stark', name: 'Howard Stark', en: 'Howard Stark',
  actor: 'John Slattery / Dominic Cooper', group: 'avengers', role: 'ally',
  glyph: 'arc', accent: ['#b45309', '#1e40af'],
  tagline: '東尼的父親、神盾局共同創辦人。',
  bio: '天才發明家與軍火商，參與超級士兵計畫、打造美國隊長的盾牌，並與 Peggy Carter 共同創立神盾局。',
  arc: [
    { entry: 'captain-america', text: '協助超級士兵計畫，打造隊長的汎金屬盾牌。' },
    { entry: 'agent-carter-oneshot', text: '來電任命 Peggy 共同主持新成立的神盾局。' },
    { entry: 'iron-man-2', text: '（遺留影片）他把新元素的線索藏在博覽會模型裡留給東尼。' },
    { entry: 'civil-war', text: '真相揭露：1991 年他與妻子被洗腦的巴奇殺害，這成為復仇者分裂的導火線。', highlight: true },
    { entry: 'endgame', text: '東尼在 1970 年與年輕的父親有一次遲來的和解對話。', highlight: true }
  ],
  appears: ['captain-america', 'iron-man-2', 'agent-carter-oneshot', 'civil-war', 'endgame', 'agent-carter-tv']
},

/* ================= 更多反派 ================= */
{
  id: 'killmonger', name: '齊爾蒙格', en: "Erik Killmonger",
  actor: 'Michael B. Jordan', group: 'bigbad', role: 'villain',
  glyph: 'panther', accent: ['#7f1d1d', '#4c1d95'],
  tagline: '漫威最有正當性的反派之一。',
  bio: "T'Challa 的堂弟。父親被國王親手殺死後，年幼的他被遺棄在美國。他回來奪王位不是為了自己，而是為了報復整個拋棄他的國家。",
  facts: ['「把我葬在海裡，跟那些從船上跳下去的祖先一起 —— 因為他們知道，死亡好過為奴。」'],
  arc: [
    { entry: 'black-panther', text: "挑戰並打敗 T'Challa 奪得王位，計畫用汎金屬武裝全世界受壓迫的黑人。他的訴求有正當性，這正是他成為漫威最佳反派之一的原因。", highlight: true }
  ],
  appears: ['black-panther']
},
{
  id: 'hela', name: '海拉', en: 'Hela',
  actor: 'Cate Blanchett', group: 'bigbad', role: 'villain',
  glyph: 'hammer', accent: ['#166534', '#111827'],
  tagline: '奧丁被抹去的長女。',
  bio: '死亡女神，奧丁在建立仁慈形象前的行刑者與征服者。她被封印數千年，奧丁一死便回歸。',
  arc: [
    { entry: 'thor-3', text: '徒手捏碎妙爾尼爾、佔領阿斯嘉、屠殺女武神軍團。最後被索爾放出的蘇特爾連同整個阿斯嘉一同毀滅。', highlight: true }
  ],
  appears: ['thor-3']
},
{
  id: 'gorr', name: '屠神者格爾', en: 'Gorr the God Butcher',
  actor: 'Christian Bale', group: 'bigbad', role: 'villain',
  glyph: 'skull', accent: ['#111827', '#e5e7eb'],
  tagline: '他的憤怒完全合理。',
  bio: '女兒在信仰中餓死後，他向神求助卻只換來嘲笑。奪得「弒神劍」後立誓屠盡所有神明。',
  arc: [
    { entry: 'thor-4', text: '橫掃各界屠殺神明。最後他選擇用永恆之力復活女兒而非復仇，索爾承諾撫養她。', highlight: true }
  ],
  appears: ['thor-4']
},
{
  id: 'ronan', name: '羅南', en: 'Ronan the Accuser',
  actor: 'Lee Pace', group: 'bigbad', role: 'villain',
  glyph: 'starburst', accent: ['#4c1d95', '#111827'],
  tagline: '克里帝國的狂熱分子。',
  bio: '克里的復仇者，原替薩諾斯效力尋找寶珠，取得力量寶石後卻反噬主人。',
  arc: [
    { entry: 'gotg-1', text: '奪得力量寶石後打算毀滅 Xandar，最後被異攻隊五人合力承受寶石能量擊敗。' },
    { entry: 'captain-marvel', text: '（1995 年）以克里指揮官身分登場。' }
  ],
  appears: ['gotg-1', 'captain-marvel']
},
{
  id: 'ego', name: '伊戈', en: 'Ego the Living Planet',
  actor: 'Kurt Russell', group: 'bigbad', role: 'villain',
  glyph: 'celestial', accent: ['#c026d3', '#0891b2'],
  tagline: '「他也許是你父親，但他不是你爸爸。」',
  bio: '活了數百萬年的天神族，本體是一整顆行星。他在無數星球留下後代，只為找到能承接其能量的繼承人。',
  arc: [
    { entry: 'gotg-2', text: '把星爵帶回本體。真相是他殺光了所有不合格的後代，也親手在星爵母親腦中種下腫瘤。最後被異攻隊摧毀核心。', highlight: true }
  ],
  appears: ['gotg-2']
},
{
  id: 'dormammu', name: 'Dormammu', en: 'Dormammu',
  actor: '—', group: 'bigbad', role: 'villain',
  glyph: 'portal', accent: ['#7e22ce', '#be123c'],
  tagline: '「Dormammu, I\'ve come to bargain.」',
  bio: '黑暗次元的統治者，一個吞噬整個宇宙的存在。',
  arc: [
    { entry: 'doctor-strange', text: '史傳奇用時間寶石把自己鎖進無限死亡循環，用「我永遠不會停」逼他談判撤退 —— MCU 最聰明的解法之一。', highlight: true }
  ],
  appears: ['doctor-strange']
},
{
  id: 'high-evolutionary', name: '至高進化', en: 'The High Evolutionary',
  actor: 'Chukwudi Iwuji', group: 'bigbad', role: 'villain',
  glyph: 'skull', accent: ['#b45309', '#0d9488'],
  tagline: '把「創造」當成虐待的科學家。',
  bio: '執著於創造「完美物種」的科學家。把動物改造成有智慧的生物，一旦不合期待就整批銷毀。',
  arc: [
    { entry: 'gotg-3', text: '火箭浣熊的創造者，也是他一生的夢魘。他無法接受火箭比自己更聰明。', highlight: true }
  ],
  appears: ['gotg-3']
},
{
  id: 'cassandra-nova', name: 'Cassandra Nova', en: 'Cassandra Nova',
  actor: 'Emma Corrin', group: 'bigbad', role: 'villain',
  glyph: 'claw', accent: ['#e5e7eb', '#4c1d95'],
  tagline: 'Charles Xavier 的雙胞胎妹妹。',
  bio: '擁有強大心靈能力的變種人，統治著 TVA 用來丟棄時間線的「虛空」。',
  arc: [
    { entry: 'deadpool-wolverine', text: '打算用「時間撕裂器」毀滅整個多元宇宙，被死侍與金鋼狼聯手阻止。' }
  ],
  appears: ['deadpool-wolverine']
},
{
  id: 'galactus', name: '吞星', en: 'Galactus',
  actor: 'Ralph Ineson', group: 'bigbad', role: 'villain',
  glyph: 'celestial', accent: ['#4c1d95', '#a16207'],
  tagline: '以吞噬行星維生的宇宙級存在。',
  bio: '一個超越善惡的宇宙級力量，需要吞噬行星維生。他派出「先驅使者」為他尋找目標。',
  arc: [
    { entry: 'fantastic-four', text: '驚奇 4 超人在 Earth-828 面對的威脅，與銀色衝浪手一同登場。', highlight: true }
  ],
  appears: ['fantastic-four']
},
{
  id: 'trevor', name: 'Trevor Slattery', en: 'Trevor Slattery',
  actor: 'Ben Kingsley', group: 'newgen', role: 'ally',
  glyph: 'question', accent: ['#b45309', '#7c3aed'],
  tagline: 'MCU 最持久的一個笑話。',
  bio: '落魄的英國舞台劇演員，被雇來扮演恐怖分子「滿大人」—— 結果冒用了一個真實存在千年的組織的名號。',
  arc: [
    { entry: 'iron-man-3', text: '被揭露「滿大人」其實是他演的，真反派另有其人。' },
    { entry: 'all-hail-the-king', text: '在獄中接受訪問，才發現訪問者是真正的十環幫派來的 —— 因為「真正的滿大人」要見他。', highlight: true },
    { entry: 'shang-chi', text: '被文武囚禁多年，成為尚氣一行意外的助力。' },
    { entry: 'wonder-man', text: '確認回歸。' }
  ],
  appears: ['iron-man-3', 'all-hail-the-king', 'shang-chi', 'wonder-man']
},
{
  id: 'coulson', name: 'Phil Coulson', en: 'Phil Coulson',
  actor: 'Clark Gregg', group: 'avengers', role: 'ally',
  glyph: 'badge', accent: ['#0f172a', '#b91c1c'],
  tagline: '把復仇者黏在一起的那個人。',
  bio: '神盾局探員，早期串起所有英雄的聯絡人。他的死是復仇者第一次真正團結的原因。',
  arc: [
    { entry: 'iron-man', text: '首度登場，代表神盾局接觸東尼。' },
    { entry: 'thors-hammer', text: '在加油站順手制伏兩名搶匪 —— 確立他不只是文書探員。' },
    { entry: 'the-consultant', text: '與 Sitwell 設計讓東尼去破壞憎惡加入復仇者的談判。' },
    { entry: 'avengers-1', text: '被洛基刺殺。福瑞用他沾血的復仇者卡片激起六人的鬥志。', highlight: true },
    { entry: 'agents-of-shield', text: '被祕密復活，率領小隊處理超自然事件（正史地位模糊）。' }
  ],
  appears: ['iron-man', 'iron-man-2', 'thor', 'avengers-1', 'the-consultant', 'thors-hammer', 'agents-of-shield']
}

,

/* ================= 永恆族與驚奇 4 超人 ================= */
{
  id: 'sersi', name: 'Sersi', en: 'Sersi',
  actor: 'Gemma Chan', group: 'cosmic', role: 'hero',
  glyph: 'celestial', accent: ['#0d9488', '#be123c'],
  tagline: '選擇人類而背叛創造者的永恆族。',
  bio: '能改變物質結構的永恆族，在地球生活七千年。她比其他同伴都更愛人類，這讓她成為反抗天神的關鍵。',
  arc: [
    { entry: 'eternals', text: '得知永恆族的真正任務是讓人類滅絕以孕育新天神後，她帶頭反抗，並用「統合心智」的力量把提亞穆特石化。', highlight: true }
  ],
  appears: ['eternals']
},
{
  id: 'ikaris', name: 'Ikaris', en: 'Ikaris',
  actor: 'Richard Madden', group: 'cosmic', role: 'villain',
  glyph: 'celestial', accent: ['#a16207', '#1e40af'],
  tagline: '最強的永恆族 —— 也是背叛者。',
  bio: '擁有飛行與眼部光束的永恆族。他早就知道真相，並選擇忠於天神 Arishem 而非人類。',
  arc: [
    { entry: 'eternals', text: '為完成天神的任務而與同伴反目、殺死領袖 Ajak。任務失敗後，他選擇飛入太陽自盡。', highlight: true }
  ],
  appears: ['eternals']
},
{
  id: 'silver-surfer', name: '銀色衝浪手', en: 'Silver Surfer / Shalla-Bal',
  actor: 'Julia Garner', group: 'cosmic', role: 'antihero',
  glyph: 'starburst', accent: ['#e5e7eb', '#4c1d95'],
  tagline: '吞星的先驅使者。',
  bio: '為了拯救自己的母星而與吞星立約，成為替他尋找下一顆行星的先驅使者。',
  arc: [
    { entry: 'fantastic-four', text: '作為吞星的使者來到 Earth-828，與驚奇 4 超人正面交鋒。' }
  ],
  appears: ['fantastic-four']
},
{
  id: 'franklin', name: 'Franklin Richards', en: 'Franklin Richards',
  actor: '—', group: 'newgen', role: 'ally',
  glyph: 'four', accent: ['#1d4ed8', '#f0b429'],
  tagline: '末日博士現身時，站在他身邊的那個孩子。',
  bio: 'Reed Richards 與 Sue Storm 的兒子。在漫畫中他是宇宙中最強大的變種人之一。',
  arc: [
    { entry: 'fantastic-four', text: '中段彩蛋：時間快轉四年後，一名手持末日博士銀色面具的神秘披風人物出現在他身邊 —— 直接鋪陳《末日之戰》。', highlight: true }
  ],
  appears: ['fantastic-four']
}

];

/* ---------- 合併角色 ---------- */
window.MCU_CHARACTERS = [].concat(
  window.MCU_CHARACTERS || [],
  window.MCU_CHARACTERS_2 || []
);
