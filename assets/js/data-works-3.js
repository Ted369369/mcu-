/* ============================================================
   周邊與相關宇宙
   ・Marvel One-Shots 一夜短片
   ・捍衛者聯盟 Defenders Saga（已納入 Disney+ 官方 MCU 時間軸）
   ・Marvel Television 舊作（正史地位模糊）
   ・Sony 舊蜘蛛人電影（《無家日》引用的其他宇宙）
   ============================================================ */

window.MCU_WORKS_3 = [

/* ================= Marvel One-Shots ================= */
{
  id: 'the-consultant', no: 100, title: '顧問', en: 'The Consultant',
  year: 2011, date: '2011', episodes: '短片 4 分鐘',
  type: 'oneshot', phase: 'One-Shot', saga: 'oneshot', cats: ['avengers'],
  era: 'rise', chrono: 2011, glyph: 'badge', accent: ['#0f172a', '#0e7490'],
  relevance: 'optional',
  tagline: '解釋為什麼憎惡沒加入復仇者',
  summary: '寇森與 Sitwell 兩位神盾局探員在餐廳裡討論如何阻止世界安全理事會把憎惡編入復仇者。',
  sections: [
    { h: '劇情', body: '安理會要求釋放 Emil Blonsky（憎惡）加入復仇者計畫。兩人不敢直接違抗，於是派出「全世界最讓人受不了的人」東尼史塔克去跟羅斯將軍談判 —— 保證談判必然破裂。' },
    { h: '意義', body: '這解釋了《無敵浩克》片尾東尼找上羅斯的那場戲，其實是神盾局的計謀。' }
  ],
  related: ['incredible-hulk', 'avengers-1']
},
{
  id: 'thors-hammer', no: 101, title: '在雷神之鎚路上發生的趣事', en: "A Funny Thing Happened on the Way to Thor's Hammer",
  year: 2011, date: '2011', episodes: '短片 4 分鐘',
  type: 'oneshot', phase: 'One-Shot', saga: 'oneshot', cats: ['avengers'],
  era: 'rise', chrono: 2011, glyph: 'hammer', accent: ['#1d4ed8', '#475569'],
  relevance: 'optional',
  tagline: '寇森的個人秀',
  summary: '寇森在前往新墨西哥的路上停靠加油站，順手制伏了兩名持槍搶匪。',
  sections: [
    { h: '劇情', body: '兩名搶匪打劫便利商店，寇森氣定神閒地用最少的動作解決他們，然後繼續上路 —— 前往雷神之鎚墜落的坑洞。' },
    { h: '意義', body: '純粹為了確立「寇森不只是個文書探員」的角色魅力。' }
  ],
  related: ['thor', 'avengers-1']
},
{
  id: 'item-47', no: 102, title: '47 號物品', en: 'Item 47',
  year: 2012, date: '2012', episodes: '短片 12 分鐘',
  type: 'oneshot', phase: 'One-Shot', saga: 'oneshot', cats: ['avengers'],
  era: 'rise', chrono: 2012, glyph: 'bolt', accent: ['#166534', '#b45309'],
  relevance: 'optional',
  tagline: '紐約大戰之後的小人物',
  summary: '一對失業情侶撿到紐約大戰後遺留的奇塔黎槍械，開始搶銀行。',
  sections: [
    { h: '劇情', body: 'Bennie 與 Claire 用外星槍搶了三家銀行。神盾局派 Sitwell 追捕，最後決定不殺他們，反而招募兩人來逆向工程奇塔黎科技。' },
    { h: '意義', body: '第一次呈現「紐約大戰的外星武器流入民間」這個主題 —— 這正是五年後《返校日》反派禿鷹整條故事線的源頭。', highlight: true }
  ],
  related: ['avengers-1', 'homecoming']
},
{
  id: 'agent-carter-oneshot', no: 103, title: '卡特探員', en: 'Agent Carter',
  year: 2013, date: '2013', episodes: '短片 15 分鐘',
  type: 'oneshot', phase: 'One-Shot', saga: 'oneshot', cats: ['avengers'],
  era: 'cold', chrono: 1946, glyph: 'badge', accent: ['#b91c1c', '#1e40af'],
  relevance: 'optional',
  tagline: '神盾局的誕生',
  summary: '二戰結束一年後，Peggy Carter 在戰略科學軍團被同事當成打雜的。她決定自己出勤。',
  sections: [
    { h: '劇情', body: 'Peggy 獨自完成一項本該由四人執行的任務，取回神秘的「零物質」。上司震怒，卻接到霍華史塔克的來電 —— 她被任命與霍華共同主持新成立的「神盾局」。', highlight: true },
    { h: '延伸', body: '這部短片直接催生了 ABC 影集《卡特探員》兩季。' }
  ],
  related: ['captain-america', 'agent-carter-tv', 'winter-soldier']
},
{
  id: 'all-hail-the-king', no: 104, title: '吾王萬歲', en: 'All Hail the King',
  year: 2014, date: '2014', episodes: '短片 14 分鐘',
  type: 'oneshot', phase: 'One-Shot', saga: 'oneshot', cats: ['avengers'],
  era: 'rise', chrono: 2013, glyph: 'rings', accent: ['#b45309', '#111827'],
  relevance: 'optional',
  tagline: '修正《鋼鐵人3》的滿大人爭議',
  summary: '獄中的演員 Trevor Slattery 接受紀錄片訪問，卻發現訪問者是真正十環幫派來的人。',
  sections: [
    { h: '劇情', body: 'Trevor 在監獄裡因扮演過「滿大人」而成為名人。一名紀錄片導演接近他，最後亮出身分 —— 他是真正的十環幫成員，因為 Trevor 冒用了他們領袖的名號，「真正的滿大人」要見他。' },
    { h: '意義', body: '這是漫威對《鋼鐵人3》反派反轉爭議的官方回應，並埋下十環幫真實存在的伏筆 —— 七年後在《尚氣與十環傳奇》完整兌現。', highlight: true }
  ],
  related: ['iron-man-3', 'shang-chi', 'wonder-man']
},

/* ================= Defenders Saga（Netflix，已納入官方時間軸）================= */
{
  id: 'daredevil-netflix', no: 110, title: '夜魔俠（Netflix）', en: 'Daredevil',
  year: 2015, date: '2015–2018', episodes: '3 季 39 集',
  type: 'series', phase: 'Defenders Saga', saga: 'defenders', cats: ['series', 'street'],
  era: 'shield', chrono: 2015, glyph: 'skull', accent: ['#7f1d1d', '#111827'],
  relevance: 'recommended',
  tagline: '街頭層級的最高標準',
  summary: '白天是律師 Matt Murdock，晚上是廚房地獄的義警。全盲，但其餘感官極度敏銳。',
  sections: [
    { h: '劇情', body: '幼時因化學藥劑失明的 Matt Murdock，以律師與蒙面義警雙重身分對抗控制紐約地下世界的 Wilson Fisk。第三季改編自漫畫名作《Born Again》。' },
    { h: '金霸王', body: 'Vincent D\'Onofrio 飾演的 Wilson Fisk 被公認是漫威影視史上最好的反派之一 —— 一個同時極度暴力又極度脆弱的人。' },
    { h: '正史地位', body: 'Disney+ 已把整個「捍衛者聯盟（Defenders Saga）」正式納入官方 MCU 時間軸。Charlie Cox 與 D\'Onofrio 已在《無家日》《鷹眼》《律師女浩克》《回聲》回歸，並主演《夜魔俠：重生》。', highlight: true },
    { h: '提醒', body: '本劇為 TV-MA 級，暴力程度遠高於 MCU 電影。' }
  ],
  related: ['daredevil-born-again', 'no-way-home', 'echo', 'defenders', 'punisher-netflix']
},
{
  id: 'jessica-jones', no: 111, title: '潔西卡瓊斯', en: 'Jessica Jones',
  year: 2015, date: '2015–2019', episodes: '3 季 39 集',
  type: 'series', phase: 'Defenders Saga', saga: 'defenders', cats: ['series', 'street'],
  era: 'shield', chrono: 2015, glyph: 'widow', accent: ['#4c1d95', '#111827'],
  relevance: 'optional',
  tagline: 'MCU 最黑暗的一部作品',
  summary: '擁有超人力量的私家偵探，一邊酗酒一邊處理 PTSD —— 因為那個能用聲音控制任何人的男人回來了。',
  sections: [
    { h: '劇情', body: 'Jessica Jones 曾被反派 Kilgrave 用精神控制能力長期奴役與性侵。第一季是一部關於創傷、同意權與加害者心態的心理驚悚劇。' },
    { h: '評價', body: 'David Tennant 飾演的 Kilgrave 被視為漫威最令人不安的反派。本劇對 PTSD 與倖存者處境的描寫獲得高度評價。' },
    { h: '提醒', body: 'TV-MA 級，主題極為沉重。與主線關聯低。' }
  ],
  related: ['defenders', 'daredevil-netflix']
},
{
  id: 'luke-cage', no: 112, title: '盧克凱奇', en: 'Luke Cage',
  year: 2016, date: '2016–2018', episodes: '2 季 26 集',
  type: 'series', phase: 'Defenders Saga', saga: 'defenders', cats: ['series', 'street'],
  era: 'civil', chrono: 2016, glyph: 'fist', accent: ['#a16207', '#111827'],
  relevance: 'optional',
  tagline: '哈林區的防彈英雄',
  summary: '刀槍不入、力大無窮的 Luke Cage 在哈林區開始不情願地當起英雄。',
  sections: [
    { h: '劇情', body: '被冤獄的 Luke Cage 在監獄實驗中獲得刀槍不入的皮膚與超人力量。他回到哈林區，對抗夜總會老闆 Cottonmouth 與議員 Mariah Dillard。' },
    { h: '特色', body: '大量融入嘻哈與黑人音樂文化，每集標題取自 Gang Starr 的歌名。' }
  ],
  related: ['defenders', 'jessica-jones', 'iron-fist']
},
{
  id: 'iron-fist', no: 113, title: '鐵拳俠', en: 'Iron Fist',
  year: 2017, date: '2017–2018', episodes: '2 季 23 集',
  type: 'series', phase: 'Defenders Saga', saga: 'defenders', cats: ['series', 'street', 'mystic'],
  era: 'civil', chrono: 2016, glyph: 'fist', accent: ['#166534', '#f0b429'],
  relevance: 'skippable',
  tagline: '系列中評價最低的一部',
  summary: '失蹤十五年的富家子 Danny Rand 回到紐約，宣稱自己是崑崙的守護者「鐵拳」。',
  sections: [
    { h: '劇情', body: 'Danny Rand 在空難後被帶到異界城市崑崙修習武術，獲得將氣凝聚於拳頭的能力。他回紐約奪回家族企業並對抗「手合會（The Hand）」。' },
    { h: '評價', body: '本劇是 Defenders Saga 中評價最低的一部，武打設計與選角均受到批評。' },
    { h: '定位', body: '可跳過，除非想看完整的《捍衛者聯盟》前置。' }
  ],
  related: ['defenders', 'luke-cage', 'shang-chi']
},
{
  id: 'defenders', no: 114, title: '捍衛者聯盟', en: 'The Defenders',
  year: 2017, date: '2017', episodes: '迷你影集 8 集',
  type: 'series', phase: 'Defenders Saga', saga: 'defenders', cats: ['series', 'street'],
  era: 'civil', chrono: 2016, glyph: 'star', accent: ['#166534', '#7c2d12'],
  relevance: 'optional',
  tagline: '街頭版的復仇者集結',
  summary: '夜魔俠、潔西卡瓊斯、盧克凱奇與鐵拳俠四人被迫聯手對抗「手合會」。',
  sections: [
    { h: '劇情', body: '四位互不對盤的街頭英雄因手合會挖掘紐約地底的計畫而集結。八集迷你影集，是整個 Netflix 系列的交會點。' },
    { h: '正史地位', body: '與其他 Defenders Saga 作品一同被納入 Disney+ 官方 MCU 時間軸。' }
  ],
  related: ['daredevil-netflix', 'jessica-jones', 'luke-cage', 'iron-fist']
},
{
  id: 'punisher-netflix', no: 115, title: '制裁者（Netflix）', en: 'The Punisher',
  year: 2017, date: '2017–2019', episodes: '2 季 26 集',
  type: 'series', phase: 'Defenders Saga', saga: 'defenders', cats: ['series', 'street'],
  era: 'civil', chrono: 2016, glyph: 'skull', accent: ['#111827', '#e5e7eb'],
  relevance: 'recommended',
  tagline: '《蜘蛛人4》制裁者的來歷',
  summary: '海軍陸戰隊退役狙擊手 Frank Castle 在妻兒被殺後，成為以極端暴力執行私刑的制裁者。',
  sections: [
    { h: '劇情', body: 'Frank Castle 首度登場於《夜魔俠》第二季，隨後獲得個人影集。故事處理他的軍中創傷、家庭之死，以及一樁牽連中情局的陰謀。' },
    { h: '演員', body: 'Jon Bernthal 飾演的制裁者被公認是這個角色最好的影視版本。他在《夜魔俠：重生》回歸，並在 2026 年的特別節目《制裁者：最後一殺》主演。', highlight: true },
    { h: '為什麼跟蜘蛛人4有關', body: '同一位演員、同一個角色，《蜘蛛人4》是他首度登上大銀幕。預告中他開廂型車撞彼得，並對他說「你正在失控（losing it）」。他與彼得「絕不殺人」的原則完全相反 —— 這條對立線是新片的看點之一。', highlight: true },
    { h: '提醒', body: 'TV-MA 級，暴力程度極高。' }
  ],
  related: ['spider-man-4', 'daredevil-netflix', 'punisher-special', 'daredevil-born-again']
},

/* ================= Marvel Television 舊作（正史地位模糊）================= */
{
  id: 'agents-of-shield', no: 120, title: '神盾局特工', en: 'Agents of S.H.I.E.L.D.',
  year: 2013, date: '2013–2020', episodes: '7 季 136 集',
  type: 'series', phase: 'Marvel TV', saga: 'marveltv', cats: ['series'],
  era: 'shield', chrono: 2013, glyph: 'badge', accent: ['#0f172a', '#b91c1c'],
  relevance: 'optional',
  tagline: '寇森復活・與電影同步連動的實驗',
  summary: 'ABC 影集。在《復仇者聯盟》中「陣亡」的寇森探員被祕密復活，率領一支小隊處理超自然事件。',
  sections: [
    { h: '劇情', body: '橫跨七季，題材從特工劇一路演變到異人族、太空歌劇與時間旅行。' },
    { h: '與電影的連動', body: '第一季中段與《酷寒戰士》同步 —— 九頭蛇滲透的真相揭露後，影集裡整個組織在一集之內崩解。這是影視連動最成功的一次示範。', highlight: true },
    { h: '正史地位', body: '播出時被視為正史，但 Marvel Television 於 2019 年併入 Marvel Studios 後，其正史地位變得模糊。目前尚未被納入 Disney+ 官方 MCU 時間軸。', unconfirmed: true }
  ],
  related: ['winter-soldier', 'avengers-1', 'agent-carter-tv']
},
{
  id: 'agent-carter-tv', no: 121, title: '卡特探員（影集）', en: 'Agent Carter',
  year: 2015, date: '2015–2016', episodes: '2 季 18 集',
  type: 'series', phase: 'Marvel TV', saga: 'marveltv', cats: ['series'],
  era: 'cold', chrono: 1946, glyph: 'badge', accent: ['#b91c1c', '#1e40af'],
  relevance: 'optional',
  tagline: '1940 年代的 Peggy Carter',
  summary: 'ABC 影集。二戰後的 Peggy 在戰略科學軍團被當成祕書，暗中替霍華史塔克洗清叛國嫌疑。',
  sections: [
    { h: '劇情', body: '1946 年的紐約與 1947 年的洛杉磯。Peggy 與霍華的管家 Jarvis 搭檔（他正是 AI「JARVIS」名字的由來）辦案，同時面對戰後職場的性別歧視。' },
    { h: '正史地位', body: '與《神盾局特工》相同，正史地位模糊，尚未納入官方時間軸。', unconfirmed: true }
  ],
  related: ['agent-carter-oneshot', 'captain-america', 'agents-of-shield']
},
{
  id: 'other-marvel-tv', no: 122, title: '其他 Marvel TV 作品', en: 'Inhumans / Runaways / Cloak & Dagger / Helstrom',
  year: 2017, date: '2017–2020', episodes: '多部',
  type: 'series', phase: 'Marvel TV', saga: 'marveltv', cats: ['series'],
  era: 'civil', chrono: 2017, glyph: 'skip', accent: ['#475569', '#1e293b'],
  relevance: 'skippable',
  tagline: '正史地位模糊，可直接跳過',
  summary: '《異人族》(ABC, 2017)、《叛逃者》(Hulu, 2017–2019)、《鬥篷與匕首》(Freeform, 2018–2019)、《地獄風暴》(Hulu, 2020)。',
  sections: [
    { h: '內容', body: '這些作品由已解散的 Marvel Television 製作，散布在不同電視台與串流平台上。《異人族》評價極差；《叛逃者》與《鬥篷與匕首》有一定口碑但收視不佳。' },
    { h: '正史地位', body: '目前均未被納入 Disney+ 官方 MCU 時間軸，且與電影主線毫無交集。', unconfirmed: true },
    { h: '定位', body: '對理解任何 MCU 主線都沒有必要，可直接跳過。' }
  ],
  related: ['agents-of-shield']
},

/* ================= Sony 舊蜘蛛人電影（其他宇宙）================= */
{
  id: 'raimi-1', no: 130, title: '蜘蛛人', en: 'Spider-Man',
  year: 2002, date: '2002', director: 'Sam Raimi',
  type: 'film', phase: '雷米三部曲', saga: 'sony', cats: ['spidey', 'multiverse'],
  era: 'other', chrono: 2002, glyph: 'web', accent: ['#b91c1c', '#1e3a8a'],
  relevance: 'optional', actor: '托比馬奎爾（Tobey Maguire）',
  tagline: '「能力愈強、責任愈大」的原點',
  summary: '第一代蜘蛛人電影。彼得被基因改造蜘蛛咬到獲得能力，班叔之死讓他學會那句貫穿所有版本的信條。',
  sections: [
    { h: '劇情', body: '彼得被基因改造蜘蛛咬到獲得能力。他一時自私放走了搶匪，那名搶匪隨後殺害了班叔（Uncle Ben）—— 這讓他學到「能力愈強、責任愈大」。' },
    { h: '反派', body: '綠惡魔 Norman Osborn 是好友哈利的父親，測試軍用血清後人格分裂、發狂，最後死於自己的滑翔翼。' },
    { h: '為什麼相關', body: '《無家日》把這個宇宙的綠惡魔（Willem Dafoe）拉了進來，他是該片最大的反派。托比版彼得也在《無家日》登場，代號 Peter-Two。', highlight: true }
  ],
  related: ['no-way-home', 'raimi-2', 'raimi-3']
},
{
  id: 'raimi-2', no: 131, title: '蜘蛛人2', en: 'Spider-Man 2',
  year: 2004, date: '2004', director: 'Sam Raimi',
  type: 'film', phase: '雷米三部曲', saga: 'sony', cats: ['spidey', 'multiverse'],
  era: 'other', chrono: 2004, glyph: 'tentacle', accent: ['#0f766e', '#78350f'],
  relevance: 'optional', actor: '托比馬奎爾（Tobey Maguire）',
  tagline: '公認系列最佳',
  summary: '八爪博士的機械臂控制其心智，最後他選擇自我犧牲贖罪。',
  sections: [
    { h: '劇情', body: 'Otto Octavius 的核融合實驗失敗，四條 AI 機械臂與其脊椎融合並反過來控制他的心智。最後他恢復理智，親手把失控的反應爐沉入河底贖罪。' },
    { h: '為什麼相關', body: '《無家日》中八爪博士（Alfred Molina 原班回歸）是第一個被拉進 MCU 宇宙的反派，也是第一個被彼得「治好」的。', highlight: true }
  ],
  related: ['no-way-home', 'raimi-1', 'raimi-3']
},
{
  id: 'raimi-3', no: 132, title: '蜘蛛人3', en: 'Spider-Man 3',
  year: 2007, date: '2007', director: 'Sam Raimi',
  type: 'film', phase: '雷米三部曲', saga: 'sony', cats: ['spidey', 'multiverse'],
  era: 'other', chrono: 2007, glyph: 'sand', accent: ['#a16207', '#111827'],
  relevance: 'optional', actor: '托比馬奎爾（Tobey Maguire）',
  tagline: '沙人、新綠惡魔與猛毒',
  summary: '三線反派齊發，並首度引入外星共生體猛毒。',
  sections: [
    { h: '劇情', body: '反派包含沙人（Flint Marko，劇情被改寫為殺害班叔的真兇）、成為新綠惡魔的哈利，以及與記者 Eddie Brock 結合的外星共生體「猛毒（Venom）」。' },
    { h: '為什麼相關', body: '《無家日》把沙人（Thomas Haden Church）拉進 MCU 宇宙，是五大反派之一。' }
  ],
  related: ['no-way-home', 'raimi-1', 'raimi-2']
},
{
  id: 'webb-1', no: 133, title: '蜘蛛人：驚奇再起', en: 'The Amazing Spider-Man',
  year: 2012, date: '2012', director: 'Marc Webb',
  type: 'film', phase: '驚奇再起兩部曲', saga: 'sony', cats: ['spidey', 'multiverse'],
  era: 'other', chrono: 2012, glyph: 'lizard', accent: ['#15803d', '#0c4a6e'],
  relevance: 'optional', actor: '安德魯加菲（Andrew Garfield）',
  tagline: '蜥蜴人與關史黛西',
  summary: '重啟版第一集。反派是注射蜥蜴 DNA 變成怪物的 Oscorp 科學家。',
  sections: [
    { h: '劇情', body: 'Oscorp 科學家 Curt Connors 為再生斷臂而注射蜥蜴 DNA，變成巨蜥。彼得與同學關史黛西（Gwen Stacy，Emma Stone 飾）相戀。' },
    { h: '為什麼相關', body: '《無家日》把蜥蜴人（Rhys Ifans）拉進 MCU 宇宙，是五大反派之一。' }
  ],
  related: ['no-way-home', 'webb-2']
},
{
  id: 'webb-2', no: 134, title: '蜘蛛人：驚奇再起2', en: 'The Amazing Spider-Man 2',
  year: 2014, date: '2014', director: 'Marc Webb',
  type: 'film', phase: '驚奇再起兩部曲', saga: 'sony', cats: ['spidey', 'multiverse'],
  era: 'other', chrono: 2014, glyph: 'bolt', accent: ['#0891b2', '#1e1b4b'],
  relevance: 'optional', actor: '安德魯加菲（Andrew Garfield）',
  tagline: '加菲版蜘蛛人最大的心理創傷',
  summary: '關史黛西之死。彼得吐絲想救她，但急停的力道扭斷了她的脖子。',
  sections: [
    { h: '劇情', body: '反派電光人（Max Dillon）與成為新綠惡魔的 Harry Osborn。' },
    { h: '關鍵悲劇', body: '關史黛西在鐘樓大戰中墜落，彼得吐絲想救她，但急停時的力道扭斷了她的脖子，她仍身亡。這是加菲版蜘蛛人最大的心理創傷。', highlight: true },
    { h: '為什麼相關', body: '這正是《無家日》中他接住墜落的 MJ、得到救贖的原因 —— 全片最動人的一刻。電光人（Jamie Foxx）也是五大反派之一。', highlight: true }
  ],
  related: ['no-way-home', 'webb-1']
}

];

/* ---------- 合併所有作品 ---------- */
window.MCU_TIMELINE = [].concat(
  window.MCU_WORKS_1 || [],
  window.MCU_WORKS_2 || [],
  window.MCU_WORKS_3 || []
);
