/* ============================================================
   MCU 補課指南 — 角色資料
   arc = 該角色的個人時間線（依作品順序），讓你「用角色理解劇情」
   ============================================================ */

window.MCU_CHAR_GROUPS = [
  { id: 'spidey',    label: '蜘蛛人與身邊的人', color: '#ff4757' },
  { id: 'spideyvil', label: '蜘蛛人的敵人',     color: '#a855f7' },
  { id: 'otherspidey', label: '其他宇宙的蜘蛛人', color: '#fb923c' },
  { id: 'avengers',  label: '復仇者核心',       color: '#f0b429' },
  { id: 'cosmic',    label: '宇宙與銀河',       color: '#22d3ee' },
  { id: 'newgen',    label: '新世代與多元宇宙', color: '#34d399' },
  { id: 'bigbad',    label: '兩大魔王',         color: '#ef4444' }
];

window.MCU_CHARACTERS = [

/* ================= 蜘蛛人與身邊的人 ================= */
{
  id: 'peter-parker', name: '彼得帕克 / 蜘蛛人', en: 'Peter Parker / Spider-Man',
  actor: 'Tom Holland（湯姆霍蘭德）', group: 'spidey', role: 'hero',
  glyph: 'spider', accent: ['#dc2626', '#1d4ed8'], pin: true,
  tagline: '本片主角。第七次由湯姆霍蘭德演出此角。',
  bio: '住在紐約皇后區的高中生，被蜘蛛咬到而獲得超能力。被鋼鐵人東尼史塔克發掘、成為他的接班人與「兒子」。三部曲一路從渴望被認可的少年，走到失去一切、被全世界遺忘的成年人。',
  facts: [
    '信條：「能力愈強，責任愈大」—— 本宇宙的他是從臨終的 May 嬸嬸口中聽到這句話，而非漫畫中的班叔。',
    '與早期兩代蜘蛛人（托比馬奎爾、安德魯加菲）是不同宇宙的角色。',
    '《蜘蛛人4》中他已是「一個完全獨自生活的成年人」，全職打擊犯罪。'
  ],
  arc: [
    { entry: 'civil-war', text: '首度登場。東尼史塔克找上這位皇后區高中生，招募他加入「鋼鐵人陣營」對抗美國隊長，奠定兩人的導師／父子關係。' },
    { entry: 'homecoming', text: '15 歲，渴望證明自己、想加入復仇者，但東尼要他先當好「親切的鄰居蜘蛛人」。擊敗禿鷹後婉拒正式加入復仇者。' },
    { entry: 'infinity-war', text: '在薩諾斯彈指中化為灰燼。' },
    { entry: 'endgame', text: '五年後（Blip）被復活，參與最終決戰，並目送東尼史塔克死去。' },
    { entry: 'far-from-home', text: '深陷「誰來接班鋼鐵人」的壓力與哀傷。繼承東尼的遺物 EDITH，識破神秘客的騙局，並與 MJ 相戀。片尾身分被公開。' },
    { entry: 'no-way-home', text: '身分曝光後生活全毀，求助奇異博士。咒語失控引來五大反派與另外兩代蜘蛛人。May 嬸嬸死去。最後請奇異博士讓全世界忘記他，成為一個「沒有人記得」的人。' },
    { entry: 'spider-man-4', text: '四年後。獨自生活、蜘蛛基因進入「重生」階段開始突變、能力失控，因此向浩克尋求科學協助。' }
  ],
  appears: ['civil-war', 'homecoming', 'infinity-war', 'endgame', 'far-from-home', 'no-way-home', 'spider-man-4']
},
{
  id: 'mj', name: 'MJ（Michelle Jones）', en: 'MJ',
  actor: 'Zendaya', group: 'spidey', role: 'ally',
  glyph: 'heart', accent: ['#be123c', '#7c3aed'],
  tagline: '彼得的女友 —— 但她已經不記得他了。',
  bio: '彼得的高中同學，聰明、冷淡、觀察力極強，很早就自己推理出彼得的祕密。在《離家日》與彼得相戀，卻在《無家日》結局被咒語抹除了關於他的一切記憶。',
  facts: [
    '《無家日》結局中，彼得選擇「暫不去恢復」她的記憶，默默守護她。',
    '《蜘蛛人4》中她對彼得毫無印象，在沒有他的世界裡繼續生活。'
  ],
  arc: [
    { entry: 'homecoming', text: '以同學身分登場（Michelle Jones，Zendaya 飾）。' },
    { entry: 'far-from-home', text: '歐洲旅行中與彼得互相坦白心意，成為情侶。' },
    { entry: 'no-way-home', text: '生活被身分曝光波及，連上大學都受影響。在自由女神像大戰中墜落，被加菲版蜘蛛人接住。結局被咒語抹除記憶。' },
    { entry: 'spider-man-4', text: '對彼得毫無印象。彼得只能遠遠看著她繼續生活。' }
  ],
  appears: ['homecoming', 'far-from-home', 'no-way-home', 'spider-man-4']
},
{
  id: 'ned', name: 'Ned Leeds', en: 'Ned Leeds',
  actor: 'Jacob Batalon', group: 'spidey', role: 'ally',
  glyph: 'laptop', accent: ['#0891b2', '#f59e0b'],
  tagline: '彼得的好友、胖胖的「搞笑軍師」。',
  bio: '彼得最好的朋友，是最早知道他祕密的人，自稱「the guy in the chair（坐在椅子上的那個人）」。在《無家日》意外用奇異博士的法器開啟傳送門，召來另外兩個宇宙的彼得帕克。',
  facts: [
    '《無家日》中他無意間發現自己能開傳送門 —— 這是三代蜘蛛人同框的直接原因。',
    '結局同樣被咒語抹除記憶。',
    '《蜘蛛人4》中他打造了一個「Spidey-tracker」App。'
  ],
  arc: [
    { entry: 'homecoming', text: '最早發現彼得祕密的人，成為他的「搞笑軍師」。' },
    { entry: 'far-from-home', text: '一同前往歐洲旅行。' },
    { entry: 'no-way-home', text: '意外用奇異博士的法器開啟傳送門，召來托比版與加菲版的彼得帕克。結局被咒語抹除記憶。' },
    { entry: 'spider-man-4', text: '片中打造「Spidey-tracker」App。對彼得毫無印象。' }
  ],
  appears: ['homecoming', 'far-from-home', 'no-way-home', 'spider-man-4']
},
{
  id: 'may', name: 'May 嬸嬸', en: 'Aunt May',
  actor: 'Marisa Tomei', group: 'spidey', role: 'ally',
  glyph: 'heart', accent: ['#b45309', '#be123c'],
  tagline: '說出「能力愈強，責任愈大」的人。',
  bio: '彼得唯一的家人。此版本由 Marisa Tomei 飾演，比原著年輕許多。在《無家日》中被綠惡魔重傷致死 —— 臨終前對彼得說出那句蜘蛛人的核心信條。',
  facts: [
    '本宇宙的彼得沒有「班叔之死」的橋段，May 之死取代了那個位置，成為他的「班叔精神」由來。',
    '《蜘蛛人4》卡司名單中曾出現 Marisa Tomei，但因 May 已死亡，可能為回憶或特殊形式 —— 未經證實。'
  ],
  arc: [
    { entry: 'civil-war', text: '首度登場（Marisa Tomei 飾），比原著年輕許多。' },
    { entry: 'homecoming', text: '片尾撞見彼得穿著戰衣。' },
    { entry: 'no-way-home', text: '主張「要治好反派、不能送他們回去死」。在治療過程中被綠惡魔重傷，臨終前說出：「能力愈強，責任愈大（With great power there must also come great responsibility）」。' },
    { entry: 'spider-man-4', text: '演員出現在部分卡司名單中，但因角色已死亡，回歸形式未明朗（未經證實）。', unconfirmed: true }
  ],
  appears: ['civil-war', 'homecoming', 'far-from-home', 'no-way-home']
},
{
  id: 'happy', name: 'Happy Hogan', en: 'Happy Hogan',
  actor: 'Jon Favreau', group: 'spidey', role: 'ally',
  glyph: 'car', accent: ['#475569', '#f59e0b'],
  tagline: '史塔克的保鑣兼司機。',
  bio: '東尼史塔克的保鑣兼司機，在東尼死後成為彼得與史塔克家族之間的連結。演員 Jon Favreau 同時也是《鋼鐵人》(2008) 的導演。',
  arc: [
    { entry: 'homecoming', text: '被東尼指派「盯著」彼得，成為兩人之間的傳話人。' },
    { entry: 'far-from-home', text: '協助彼得處理東尼的遺產與 EDITH，並與 May 嬸嬸發展出感情。' },
    { entry: 'no-way-home', text: '在彼得身分曝光後被牽連調查。結局被咒語抹除記憶。' }
  ],
  appears: ['iron-man', 'homecoming', 'far-from-home', 'no-way-home']
},
{
  id: 'flash', name: 'Flash Thompson', en: 'Flash Thompson',
  actor: 'Tony Revolori', group: 'spidey', role: 'ally',
  glyph: 'laptop', accent: ['#64748b', '#0891b2'],
  tagline: '愛嗆彼得的同學。',
  bio: '彼得的高中同學，總愛在言語上挑釁他 —— 卻同時是蜘蛛人的狂熱粉絲。',
  arc: [
    { entry: 'homecoming', text: '作為愛嗆彼得的同學登場。' },
    { entry: 'far-from-home', text: '同行歐洲旅行。' },
    { entry: 'no-way-home', text: '身分曝光後靠著「我認識蜘蛛人」出書炒作。結局被咒語抹除記憶。' }
  ],
  appears: ['homecoming', 'far-from-home', 'no-way-home']
},
{
  id: 'liz', name: 'Liz Toomes', en: 'Liz Allan / Toomes',
  actor: 'Laura Harrier', group: 'spidey', role: 'ally',
  glyph: 'heart', accent: ['#0f766e', '#be123c'],
  tagline: '彼得的初戀 —— 也是禿鷹的女兒。',
  bio: '彼得在《返校日》心儀的女生。他要帶她去返校舞會，去接她時開門的竟是她的爸爸 —— 就是禿鷹本人。這是全片最經典的轉折。',
  arc: [
    { entry: 'homecoming', text: '彼得的舞會對象。她的父親 Adrian Toomes 正是反派禿鷹 —— 開門那一刻是全片最經典的轉折。' }
  ],
  appears: ['homecoming']
},
{
  id: 'jameson', name: 'J. Jonah Jameson', en: 'J. Jonah Jameson',
  actor: 'J.K. Simmons', group: 'spidey', role: 'villain',
  glyph: 'news', accent: ['#b91c1c', '#111827'],
  tagline: '《號角日報》主編 —— 把彼得的人生炸掉的人。',
  bio: '《號角日報》（TheDailyBugle.net）的主編，長期抹黑蜘蛛人。由 J.K. Simmons 飾演 —— 他正是當年托比版電影中同一角色的同一位演員。',
  facts: [
    '《離家日》片尾由他播出神秘客的假影片，向全世界公布彼得帕克就是蜘蛛人。',
    '這個「身分曝光」直接引爆《無家日》。'
  ],
  arc: [
    { entry: 'far-from-home', text: '片尾彩蛋中播出神秘客死前錄好的假影片 —— 誣陷蜘蛛人是兇手，並公布彼得帕克的身分。' },
    { entry: 'no-way-home', text: '持續在網路上帶動反蜘蛛人的輿論，讓彼得的生活徹底崩壞。' }
  ],
  appears: ['far-from-home', 'no-way-home']
},
{
  id: 'jean-dewolff', name: 'Jean DeWolff 警探', en: 'Detective Jean DeWolff',
  actor: 'Liza Colón-Zayas（《大熊餐廳》）', group: 'spidey', role: 'ally',
  glyph: 'badge', accent: ['#1d4ed8', '#f59e0b'], isNew: true,
  tagline: '《蜘蛛人4》新角色：與蜘蛛人合作的警探。',
  bio: '《蜘蛛人4》新登場的紐約警探。據 Deadline 影評，她是與蜘蛛人合作的警探 —— 在漫畫中 Jean DeWolff 是少數信任蜘蛛人的警方人物。',
  arc: [
    { entry: 'spider-man-4', text: '首度登場。據 Deadline 影評，是與蜘蛛人合作的警探。' }
  ],
  appears: ['spider-man-4']
},

/* ================= 蜘蛛人的敵人 ================= */
{
  id: 'vulture', name: '禿鷹 / Adrian Toomes', en: 'Vulture',
  actor: 'Michael Keaton', group: 'spideyvil', role: 'villain',
  glyph: 'wing', accent: ['#0e7490', '#166534'],
  tagline: '漫威最有說服力的反派之一。',
  bio: '原是清理紐約戰後廢墟的包商，生意被史塔克的「損害管制部門（Damage Control）」搶走，憤而利用外星（奇塔黎）科技打造飛行裝與武器，走私軍火維生。',
  facts: [
    '動機是「為家人生計、痛恨史塔克這種權貴」—— 這讓他成為漫威最有說服力的反派之一。',
    '他是 Liz 的爸爸。彼得去接 Liz 上舞會時開門的就是他。',
    '彼得在墜機後救了他一命；入獄後他選擇不透露蜘蛛人身分以報答救命之恩。'
  ],
  arc: [
    { entry: 'avengers-1', text: '（背景）紐約大戰留下的奇塔黎廢墟，是他日後武器的來源。' },
    { entry: 'homecoming', text: '主要反派。在車上識破彼得的身分並威脅他。最後搶劫史塔克貨機失敗、被彼得從墜機中救出。彩蛋中入獄後遇到 Mac Gargan，選擇不出賣彼得。' }
  ],
  appears: ['homecoming']
},
{
  id: 'mysterio', name: '神秘客 / Quentin Beck', en: 'Mysterio',
  actor: 'Jake Gyllenhaal', group: 'spideyvil', role: 'villain',
  glyph: 'fishbowl', accent: ['#7c3aed', '#16a34a'],
  tagline: '第一個對彼得說「多元宇宙」的人 —— 而那是謊言。',
  bio: '被史塔克羞辱的前員工，用全像投影科技製造假怪獸、假扮來自平行宇宙的英雄，目的是騙取 EDITH 的權限。',
  facts: [
    '他謊稱自己來自平行宇宙、是對抗「元素怪」的英雄 —— 但真相是全像投影騙局。',
    '死於自己的無人機誤射。',
    '死前錄好的假影片公開了彼得帕克的身分 —— 這是整個三部曲最關鍵的轉折。'
  ],
  arc: [
    { entry: 'far-from-home', text: '主要反派。假扮平行宇宙英雄接近彼得、騙取 EDITH。在倫敦被彼得擊敗，死於自己的無人機誤射。片尾其假影片公開彼得的身分。' }
  ],
  appears: ['far-from-home']
},
{
  id: 'green-goblin', name: '綠惡魔 / Norman Osborn', en: 'Green Goblin',
  actor: 'Willem Dafoe', group: 'spideyvil', role: 'villain',
  glyph: 'goblin', accent: ['#15803d', '#7e22ce'],
  tagline: '《無家日》最大反派 —— 殺死 May 嬸嬸的人。',
  bio: '來自托比版《蜘蛛人1》的宇宙。實驗超級士兵血清後人格分裂、發狂。是好友哈利的父親。',
  facts: [
    '在原宇宙最後死於自己的滑翔翼。',
    '《無家日》中他的惡魔人格奪回控制權、煽動其他反派背叛彼得，並重傷 May 嬸嬸致死。',
    '本片最大反派。'
  ],
  arc: [
    { entry: 'raimi-1', text: '（原宇宙）Norman Osborn 測試軍用血清後發狂，最後死於自己的滑翔翼。' },
    { entry: 'no-way-home', text: '被咒語吸進 MCU 宇宙。惡魔人格奪回控制權、煽動其他反派背叛彼得，並重傷 May 嬸嬸致死。最後被三代蜘蛛人聯手治好。' }
  ],
  appears: ['raimi-1', 'no-way-home']
},
{
  id: 'doc-ock', name: '八爪博士 / Otto Octavius', en: 'Doctor Octopus',
  actor: 'Alfred Molina', group: 'spideyvil', role: 'villain',
  glyph: 'tentacle', accent: ['#0f766e', '#78350f'],
  tagline: '機械觸手與身體融合的科學家。',
  bio: '來自托比版《蜘蛛人2》的宇宙。核融合實驗失敗使四條機械臂與其融合並控制其心智。',
  facts: [
    '在原宇宙最後犧牲自己贖罪。',
    '《無家日》中他是第一個被拉進來、也是第一個被「治好」的反派。'
  ],
  arc: [
    { entry: 'raimi-2', text: '（原宇宙）核融合實驗失敗使四條機械臂控制其心智，最後犧牲自己贖罪。' },
    { entry: 'no-way-home', text: '被咒語吸進 MCU 宇宙，是第一個被彼得治好的反派 —— 恢復理智後反過來幫助彼得。' }
  ],
  appears: ['raimi-2', 'no-way-home']
},
{
  id: 'electro', name: '電光人 / Max Dillon', en: 'Electro',
  actor: 'Jamie Foxx', group: 'spideyvil', role: 'villain',
  glyph: 'bolt', accent: ['#0891b2', '#1e1b4b'],
  tagline: '能操控電力。',
  bio: '來自加菲版《驚奇再起2》的宇宙，能操控電力。',
  arc: [
    { entry: 'webb-2', text: '（原宇宙）與新綠惡魔 Harry Osborn 同為反派。' },
    { entry: 'no-way-home', text: '被咒語吸進 MCU 宇宙，最後被三代蜘蛛人聯手治好。' }
  ],
  appears: ['webb-2', 'no-way-home']
},
{
  id: 'sandman', name: '沙人 / Flint Marko', en: 'Sandman',
  actor: 'Thomas Haden Church', group: 'spideyvil', role: 'villain',
  glyph: 'sand', accent: ['#a16207', '#57534e'],
  tagline: '身體化為沙。',
  bio: '來自托比版《蜘蛛人3》的宇宙，身體化為沙。在原宇宙的劇情中被改寫為殺害班叔的真兇。',
  arc: [
    { entry: 'raimi-3', text: '（原宇宙）被改寫為殺害班叔的真兇。' },
    { entry: 'no-way-home', text: '被咒語吸進 MCU 宇宙，最後被三代蜘蛛人聯手治好。' }
  ],
  appears: ['raimi-3', 'no-way-home']
},
{
  id: 'lizard', name: '蜥蜴人 / Curt Connors', en: 'Lizard',
  actor: 'Rhys Ifans', group: 'spideyvil', role: 'villain',
  glyph: 'lizard', accent: ['#15803d', '#0c4a6e'],
  tagline: '變成巨蜥的科學家。',
  bio: '來自加菲版《驚奇再起1》的宇宙。Oscorp 科學家注射蜥蜴 DNA 變成怪物。',
  arc: [
    { entry: 'webb-1', text: '（原宇宙）Oscorp 科學家注射蜥蜴 DNA 變成怪物。' },
    { entry: 'no-way-home', text: '被咒語吸進 MCU 宇宙，最後被三代蜘蛛人聯手治好。' }
  ],
  appears: ['webb-1', 'no-way-home']
},
{
  id: 'scorpion', name: '蠍子 / Mac Gargan', en: 'Scorpion',
  actor: 'Michael Mando', group: 'spideyvil', role: 'villain',
  glyph: 'scorpion', accent: ['#166534', '#b45309'], isNew: true,
  tagline: '八年前的彩蛋，可能在《蜘蛛人4》兌現。',
  bio: '《返校日》彩蛋中在監獄遇到禿鷹的罪犯，即漫畫中的「蠍子」。演員 Michael Mando 已確認回歸《蜘蛛人4》。',
  facts: [
    '《返校日》彩蛋：他向禿鷹打探蜘蛛人的身分，禿鷹選擇不透露以報答救命之恩。',
    'Michael Mando 已確認回歸《蜘蛛人4》，蠍子可能成為反派之一。'
  ],
  arc: [
    { entry: 'homecoming', text: '片尾彩蛋中登場，向禿鷹打探蜘蛛人身分被拒。' },
    { entry: 'spider-man-4', text: '演員 Michael Mando 已確認回歸，接續《返校日》彩蛋，可能成為反派之一。' }
  ],
  appears: ['homecoming', 'spider-man-4']
},
{
  id: 'tombstone', name: '墓碑 / Lonnie Lincoln', en: 'Tombstone',
  actor: 'Marvin Jones III', group: 'spideyvil', role: 'villain',
  glyph: 'tombstone', accent: ['#e5e7eb', '#111827'], isNew: true,
  tagline: '《蜘蛛人4》新反派：犯罪頭目。',
  bio: '《蜘蛛人4》中由 Marvin Jones III 飾演的犯罪頭目「墓碑」。漫畫中他是一名白化症的紐約黑幫首腦，皮膚防彈。',
  facts: [
    '註：台灣官方譯名可能與「墓碑」略有差異。'
  ],
  arc: [
    { entry: 'spider-man-4', text: '首度登場，犯罪頭目「墓碑（Tombstone / Lonnie Lincoln）」。' }
  ],
  appears: ['spider-man-4']
},
{
  id: 'sadie-villain', name: 'Sadie Sink 飾演的神秘反派', en: 'Undisclosed villain',
  actor: 'Sadie Sink（《怪奇物語》）', group: 'spideyvil', role: 'villain',
  glyph: 'question', accent: ['#7c3aed', '#be123c'], isNew: true, unconfirmed: true,
  tagline: '身分未公開 —— 網路上的說法全是傳聞。',
  bio: '《蜘蛛人4》中 Sadie Sink 飾演一名神秘反派，官方尚未公布其身分。',
  facts: [
    '媒體與粉絲維基曾推測為琴葛雷（Jean Grey）、關史黛西或蜘蛛格溫等。',
    '但漫威／Sony 官方均未公布，屬未經證實的傳聞，請勿當定論。'
  ],
  arc: [
    { entry: 'spider-man-4', text: '飾演神秘反派，身分未公開。任何具體說法目前都屬未經證實的傳聞。', unconfirmed: true }
  ],
  appears: ['spider-man-4']
},
{
  id: 'punisher', name: '制裁者 / Frank Castle', en: 'The Punisher',
  actor: 'Jon Bernthal', group: 'spideyvil', role: 'antihero',
  glyph: 'skull', accent: ['#111827', '#e5e7eb'], isNew: true,
  tagline: '首度登上大銀幕。',
  bio: '以極端暴力手段執行私刑的反英雄。Jon Bernthal 曾在 Netflix《夜魔俠》《制裁者》及《夜魔俠：重生》演出此角，《蜘蛛人4》是他首度登上大銀幕。',
  facts: [
    '預告中制裁者開廂型車撞彼得，並對他說「你正在失控（losing it）」。',
    '他與彼得的道德觀完全相反 —— 這條對立線是新片的看點之一。'
  ],
  arc: [
    { entry: 'spider-man-4', text: '首度登上大銀幕。預告中開廂型車撞彼得，並對他說「你正在失控（losing it）」。' }
  ],
  appears: ['spider-man-4']
},

/* ================= 其他宇宙的蜘蛛人 ================= */
{
  id: 'peter-two', name: '托比版彼得（Peter-Two）', en: 'Peter Parker (Peter-Two)',
  actor: 'Tobey Maguire（托比馬奎爾）', group: 'otherspidey', role: 'hero',
  glyph: 'web', accent: ['#b91c1c', '#1e3a8a'],
  tagline: '2002–2007 的第一代蜘蛛人。',
  bio: '山姆雷米三部曲的蜘蛛人，來自另一個宇宙。用天生的有機吐絲（不需要發射器）。在《無家日》中是三代裡最年長、最沉穩的一位。',
  facts: [
    '他的信條來自班叔（Uncle Ben）之死。',
    '用天生的有機吐絲，這是與另外兩代最明顯的差別。'
  ],
  arc: [
    { entry: 'raimi-1', text: '被基因改造蜘蛛咬到獲得能力；班叔因他一時自私而遭殺害，學到「能力愈強、責任愈大」。' },
    { entry: 'raimi-2', text: '對抗八爪博士。' },
    { entry: 'raimi-3', text: '對抗沙人、新綠惡魔哈利與共生體猛毒。' },
    { entry: 'no-way-home', text: '被 Ned 開啟的傳送門召來，與另外兩代聯手治好五名反派，並在過程中安撫兩位年輕的自己。' }
  ],
  appears: ['raimi-1', 'raimi-2', 'raimi-3', 'no-way-home']
},
{
  id: 'peter-three', name: '加菲版彼得（Peter-Three）', en: 'Peter Parker (Peter-Three)',
  actor: 'Andrew Garfield（安德魯加菲）', group: 'otherspidey', role: 'hero',
  glyph: 'web', accent: ['#0891b2', '#b91c1c'],
  tagline: '在《無家日》得到救贖的那一位。',
  bio: '《驚奇再起》兩部曲的蜘蛛人，來自另一個宇宙。最大的創傷是沒能救回墜落的女友關史黛西。',
  facts: [
    '在原宇宙，他吐絲想救墜落的關史黛西，但急停的力道扭斷了她的脖子。',
    '《無家日》中他在自由女神像大戰接住墜落的 MJ —— 這療癒了他當年的創傷，是全片最動人的一刻。'
  ],
  arc: [
    { entry: 'webb-1', text: '對抗蜥蜴人 Curt Connors，與關史黛西相戀。' },
    { entry: 'webb-2', text: '關史黛西在大戰中墜落身亡 —— 他吐絲想救她，但急停的力道扭斷了她的脖子。這是他最大的心理創傷。' },
    { entry: 'no-way-home', text: '被傳送門召來。在自由女神像大戰中接住墜落的 MJ，療癒了當年沒能救回關史黛西的創傷。' }
  ],
  appears: ['webb-1', 'webb-2', 'no-way-home']
},
{
  id: 'gwen', name: '關史黛西', en: 'Gwen Stacy',
  actor: 'Emma Stone', group: 'otherspidey', role: 'ally',
  glyph: 'heart', accent: ['#0891b2', '#e5e7eb'],
  tagline: '加菲版彼得的女友，死於《驚奇再起2》。',
  bio: '加菲版彼得的女友。在《驚奇再起2》的大戰中墜落，彼得吐絲想救她，但急停時的力道扭斷了她的脖子，她仍身亡。',
  facts: [
    '她的死是加菲版蜘蛛人最大的心理創傷。',
    '也是《無家日》中他救回 MJ 得到救贖的原因。',
    '註：曾有傳聞猜測 Sadie Sink 在《蜘蛛人4》飾演關史黛西或蜘蛛格溫，但官方從未證實。'
  ],
  arc: [
    { entry: 'webb-1', text: '與彼得相戀。' },
    { entry: 'webb-2', text: '在大戰中墜落身亡 —— 彼得的吐絲急停扭斷了她的脖子。' }
  ],
  appears: ['webb-1', 'webb-2']
},
{
  id: 'uncle-ben', name: '班叔', en: 'Uncle Ben',
  actor: 'Cliff Robertson（雷米版）', group: 'otherspidey', role: 'ally',
  glyph: 'heart', accent: ['#78350f', '#b91c1c'],
  tagline: '「能力愈強、責任愈大」的原始出處。',
  bio: '托比版彼得的叔叔，因彼得一時自私而遭歹徒殺害，讓他學到那句貫穿所有蜘蛛人版本的信條。',
  facts: [
    '重要差異：MCU 的湯姆霍蘭德版沒有班叔之死的橋段 —— 那個位置由《無家日》中 May 嬸嬸之死取代。'
  ],
  arc: [
    { entry: 'raimi-1', text: '因彼得一時自私而遭歹徒殺害，讓彼得學到「能力愈強、責任愈大」。' },
    { entry: 'raimi-3', text: '劇情被改寫 —— 沙人 Flint Marko 被揭露為殺害他的真兇。' }
  ],
  appears: ['raimi-1', 'raimi-3']
},
{
  id: 'venom', name: '猛毒 / Eddie Brock', en: 'Venom',
  actor: 'Topher Grace（雷米版）', group: 'otherspidey', role: 'villain',
  glyph: 'goblin', accent: ['#111827', '#e5e7eb'],
  tagline: '外星共生體。',
  bio: '外星共生體，在托比版《蜘蛛人3》中與記者 Eddie Brock 結合成為猛毒。',
  arc: [
    { entry: 'raimi-3', text: '外星共生體「猛毒（Venom / Eddie Brock）」登場，是三名反派之一。' }
  ],
  appears: ['raimi-3']
},
{
  id: 'harry', name: '哈利奧斯朋', en: 'Harry Osborn',
  actor: 'James Franco（雷米版）/ Dane DeHaan（韋布版）', group: 'otherspidey', role: 'villain',
  glyph: 'goblin', accent: ['#15803d', '#78350f'],
  tagline: '兩個宇宙都成了新綠惡魔。',
  bio: '綠惡魔 Norman Osborn 的兒子、彼得的好友。在雷米版《蜘蛛人3》與韋布版《驚奇再起2》中，兩個宇宙的他都成為了新一代綠惡魔。',
  arc: [
    { entry: 'raimi-1', text: '（雷米版）彼得的好友，父親是綠惡魔 Norman Osborn。' },
    { entry: 'raimi-3', text: '（雷米版）成為新綠惡魔。' },
    { entry: 'webb-2', text: '（韋布版）Harry Osborn 成為新綠惡魔，是反派之一。' }
  ],
  appears: ['raimi-1', 'raimi-3', 'webb-2']
},

/* ================= 復仇者核心 ================= */
{
  id: 'tony-stark', name: '東尼史塔克 / 鋼鐵人', en: 'Tony Stark / Iron Man',
  actor: 'Robert Downey Jr.（小勞勃道尼）', group: 'avengers', role: 'hero',
  glyph: 'arc', accent: ['#dc2626', '#f0b429'], pin: true,
  tagline: '彼得的導師 —— 也是彼得所有壓力的源頭。',
  bio: '軍火商出身，被綁架後打造鋼鐵裝逃脫，回國改邪歸正成為鋼鐵人。MCU 的起點人物。是彼得帕克的導師與「父親」，在《終局之戰》戴上手套彈指、犧牲自己。',
  facts: [
    '⚠ 重要：同一位演員小勞勃道尼將在 2026 年的《末日之戰》回歸，但飾演的是全新角色「末日博士」，不是鋼鐵人。',
    '他留給彼得的遺物 EDITH（智慧眼鏡），是《離家日》的核心道具。',
    '他的死是彼得在《離家日》壓力與哀傷的源頭，這條情緒線一路延伸到《蜘蛛人4》。'
  ],
  arc: [
    { entry: 'iron-man', text: '被綁架後打造鋼鐵裝逃脫，回國改邪歸正，公開承認「我就是鋼鐵人」。' },
    { entry: 'iron-man-2', text: '因舊反應爐鈀中毒瀕死，靠父親霍華留下的線索合成新元素自救。' },
    { entry: 'avengers-1', text: '與其他五人集結成復仇者，擊退洛基的奇塔黎大軍。' },
    { entry: 'iron-man-3', text: '紐約大戰後罹患 PTSD。' },
    { entry: 'age-of-ultron', text: '與班納用洛基權杖中的 AI 打造維安 AI 奧創，卻失控想滅絕人類。' },
    { entry: 'civil-war', text: '站在贊成政府管制的一方，並招募彼得帕克加入。得知巴奇殺害自己父母後與隊長徹底決裂。' },
    { entry: 'infinity-war', text: '在泰坦星與薩諾斯正面交手，目睹彼得在自己懷中化為灰燼。' },
    { entry: 'endgame', text: '想出時間旅行的方案。最終決戰中戴上手套彈指，消滅薩諾斯大軍，但因能量反噬而犧牲。' },
    { entry: 'far-from-home', text: '（已逝）留給彼得的遺物 EDITH 成為全片核心，他的死也是彼得壓力的源頭。' },
    { entry: 'doomsday', text: '⚠ 演員回歸，但飾演全新角色末日博士 —— 不是鋼鐵人。', warning: true }
  ],
  appears: ['iron-man', 'iron-man-2', 'avengers-1', 'iron-man-3', 'age-of-ultron', 'civil-war', 'homecoming', 'infinity-war', 'endgame']
},
{
  id: 'doctor-strange-char', name: '奇異博士 / Stephen Strange', en: 'Doctor Strange',
  actor: 'Benedict Cumberbatch', group: 'avengers', role: 'hero',
  glyph: 'eye', accent: ['#0d9488', '#f59e0b'], pin: true,
  tagline: '施下那道咒語的人。',
  bio: '傲慢的外科醫生，失去雙手功能後修習神秘學，成為至尊法師。他為彼得施的咒語失控撕裂多元宇宙，最後又替彼得施展終極咒語 —— 讓全世界忘記他。',
  facts: [
    '《無家日》中他兩度施法：第一次失控引來五大反派與兩代蜘蛛人；第二次成功，代價是彼得被全世界遺忘。',
    '這第二道咒語就是《蜘蛛人4》整部片的前提。'
  ],
  arc: [
    { entry: 'doctor-strange', text: '失去雙手功能後修習神秘學，擊敗黑暗次元的 Dormammu。阿加莫托之眼內藏時間寶石。' },
    { entry: 'infinity-war', text: '看過 1400 多萬種未來，選擇交出時間寶石以換取唯一的勝算。' },
    { entry: 'endgame', text: '復活後參與最終決戰，向東尼示意「這是唯一的路」。' },
    { entry: 'no-way-home', text: '為彼得施法讓世界忘記他是蜘蛛人，但彼得干擾導致咒語失控。結局施展終極咒語 —— 讓全世界的每一個人都忘記彼得帕克。', highlight: true },
    { entry: 'multiverse-of-madness', text: '保護能穿越多元宇宙的少女 America Chavez，對抗被黑暗神書腐化的緋紅女巫。' }
  ],
  appears: ['doctor-strange', 'infinity-war', 'endgame', 'no-way-home', 'multiverse-of-madness']
},
{
  id: 'hulk', name: '布魯斯班納 / 浩克', en: 'Bruce Banner / Hulk',
  actor: 'Mark Ruffalo', group: 'avengers', role: 'hero',
  glyph: 'fist', accent: ['#166534', '#7e22ce'], pin: true,
  tagline: '《蜘蛛人4》的重量級回歸。',
  bio: '因伽瑪射線意外而會變身為浩克的科學家。在《蜘蛛人4》中回歸，協助彼得處理失控突變的蜘蛛基因。',
  facts: [
    '《蜘蛛人4》中他是彼得求助的對象 —— 因為彼得的蜘蛛基因進入「重生（rebirth）」階段開始突變、能力失控。',
    '《終局之戰》中由他戴上自製手套彈指，救回所有被薩諾斯消滅的生命。'
  ],
  arc: [
    { entry: 'incredible-hulk', text: '因伽瑪射線變身浩克、逃避羅斯將軍追捕。反派 Emil Blonsky 變成憎惡。' },
    { entry: 'avengers-1', text: '加入復仇者，在紐約大戰中發揮關鍵作用。' },
    { entry: 'age-of-ultron', text: '與東尼一起打造奧創，間接造成災難。' },
    { entry: 'infinity-war', text: '被薩諾斯打敗後一度無法變身。' },
    { entry: 'endgame', text: '融合成「聰明浩克」。由他戴上自製手套彈指，救回所有人。', highlight: true },
    { entry: 'spider-man-4', text: '回歸協助彼得處理失控的蜘蛛基因 —— 這是重量級回歸。', highlight: true }
  ],
  appears: ['incredible-hulk', 'avengers-1', 'age-of-ultron', 'infinity-war', 'endgame', 'spider-man-4']
},
{
  id: 'steve-rogers', name: '史蒂夫羅傑斯 / 美國隊長', en: 'Steve Rogers / Captain America',
  actor: 'Chris Evans', group: 'avengers', role: 'hero',
  glyph: 'shield', accent: ['#1e40af', '#b91c1c'],
  tagline: '二戰的超級士兵，內戰的另一方。',
  bio: '二戰時期弱小的青年注射血清成為超級士兵，墜機冰封 70 年後甦醒。在《英雄內戰》中站在反對政府管制的一方，與東尼徹底決裂。',
  arc: [
    { entry: 'captain-america', text: '二戰背景，注射血清成為超級士兵，對抗紅骷髏與九頭蛇。墜機冰封 70 年。' },
    { entry: 'avengers-1', text: '甦醒後加入復仇者。' },
    { entry: 'winter-soldier', text: '揭發九頭蛇早已滲透神盾局數十年，並發現酷寒戰士是被洗腦的好友巴奇。' },
    { entry: 'age-of-ultron', text: '對抗奧創。' },
    { entry: 'civil-war', text: '反對索科維亞協議、保護巴奇，與東尼徹底決裂。' },
    { entry: 'infinity-war', text: '在汎達參與抵抗薩諾斯大軍。' },
    { entry: 'endgame', text: '完成返還寶石的任務後，選擇留在過去與佩姬共度餘生，年老後把盾牌交給山姆威爾森。', highlight: true }
  ],
  appears: ['captain-america', 'avengers-1', 'winter-soldier', 'age-of-ultron', 'civil-war', 'infinity-war', 'endgame']
},
{
  id: 'bucky', name: '巴奇 / 酷寒戰士', en: 'Bucky Barnes / Winter Soldier',
  actor: 'Sebastian Stan', group: 'avengers', role: 'hero',
  glyph: 'shield', accent: ['#0f172a', '#64748b'],
  tagline: '被九頭蛇洗腦的隊長好友。',
  bio: '美國隊長的兒時好友，二戰中墜落後被九頭蛇擷取、洗腦成殺手「酷寒戰士」。他當年被操控殺害了東尼的父母 —— 這是《英雄內戰》決裂的導火線。',
  arc: [
    { entry: 'captain-america', text: '隊長的兒時好友，二戰中墜落。' },
    { entry: 'winter-soldier', text: '被揭露是被九頭蛇洗腦的刺客「酷寒戰士」。' },
    { entry: 'civil-war', text: '齊莫揭露他當年被操控殺害了東尼的父母，導致東尼與隊長徹底決裂。' },
    { entry: 'falcon-winter-soldier', text: '與山姆威爾森一起面對隊長退場後的世界。' },
    { entry: 'thunderbolts', text: '加入瓦倫提娜召集的反英雄隊伍，最後成為「新復仇者」。' }
  ],
  appears: ['captain-america', 'winter-soldier', 'civil-war', 'infinity-war', 'endgame', 'falcon-winter-soldier', 'thunderbolts']
},
{
  id: 'sam-wilson', name: '山姆威爾森 / 獵鷹→美國隊長', en: 'Sam Wilson / Captain America',
  actor: 'Anthony Mackie', group: 'avengers', role: 'hero',
  glyph: 'shield', accent: ['#0e7490', '#dc2626'],
  tagline: '接下盾牌的人。',
  bio: '原為獵鷹，在《終局之戰》結尾接下史蒂夫羅傑斯的盾牌，並於《美國隊長4》正式成為美國隊長。',
  arc: [
    { entry: 'endgame', text: '年老的史蒂夫羅傑斯把盾牌交給他。' },
    { entry: 'falcon-winter-soldier', text: '走過接下盾牌的心理過程，正式承擔美國隊長的身分。' },
    { entry: 'brave-new-world', text: '正式成為美國隊長。化解羅斯總統變身紅浩克的危機。', highlight: true }
  ],
  appears: ['winter-soldier', 'civil-war', 'infinity-war', 'endgame', 'falcon-winter-soldier', 'brave-new-world']
},
{
  id: 'thor-char', name: '索爾', en: 'Thor',
  actor: 'Chris Hemsworth', group: 'avengers', role: 'hero',
  glyph: 'hammer', accent: ['#1d4ed8', '#f0b429'],
  tagline: '阿斯嘉的雷神。',
  bio: '傲慢的阿斯嘉王子，被逐出家鄉後學會謙卑。經歷阿斯嘉毀滅、家人接連死去，是 MCU 中變化最大的角色之一。',
  arc: [
    { entry: 'thor', text: '被逐出阿斯嘉、學會謙卑。反派是弟弟洛基。' },
    { entry: 'avengers-1', text: '加入復仇者對抗洛基。' },
    { entry: 'thor-2', text: '對抗黑暗精靈 Malekith 與現實寶石「乙太」。' },
    { entry: 'age-of-ultron', text: '對抗奧創。' },
    { entry: 'thor-3', text: '姊姊海拉奪取阿斯嘉。他放出蘇特爾毀滅阿斯嘉以殺死海拉，領悟「阿斯嘉是人民、不是土地」。' },
    { entry: 'infinity-war', text: '飛船被薩諾斯攔截，全族遭屠殺。打造風暴戰斧重傷薩諾斯，但未能阻止彈指。' },
    { entry: 'endgame', text: '五年間陷入低潮，最後參與最終決戰。' },
    { entry: 'thor-4', text: '對抗屠神者格爾。女友 Jane 成為女雷神但因癌症去世。' }
  ],
  appears: ['thor', 'avengers-1', 'thor-2', 'age-of-ultron', 'thor-3', 'infinity-war', 'endgame', 'thor-4']
},
{
  id: 'loki-char', name: '洛基', en: 'Loki',
  actor: 'Tom Hiddleston', group: 'avengers', role: 'antihero',
  glyph: 'tva', accent: ['#166534', '#f59e0b'], pin: true,
  tagline: '多元宇宙傳奇最關鍵的角色。',
  bio: '索爾的弟弟、詭計之神。從反派一路走到自我犧牲 —— 在影集《洛基》第二季成為維繫整個多元宇宙的「故事之神」。',
  facts: [
    '漫威已公開表示《洛基》是《末日之戰》前最該補的影集。',
    '他的女性變體 Sylvie 殺死留存者，正式開啟多元宇宙 —— 這是整個傳奇的引爆點。'
  ],
  arc: [
    { entry: 'thor', text: '作為反派登場。' },
    { entry: 'avengers-1', text: '持權杖率奇塔黎大軍入侵紐約（幕後是薩諾斯）。' },
    { entry: 'thor-3', text: '與索爾合作毀滅阿斯嘉以殺死海拉。' },
    { entry: 'infinity-war', text: '開場即被薩諾斯殺死。' },
    { entry: 'endgame', text: '時間搶劫中，2012 年的洛基變體帶著特斯拉方塊逃走 —— 這個分支直接導向影集《洛基》。' },
    { entry: 'loki', text: '被 TVA 逮捕，捲入神聖時間線的真相。第一季結局 Sylvie 殺死留存者，開啟多元宇宙。第二季他犧牲自己成為「故事之神」。', highlight: true }
  ],
  appears: ['thor', 'avengers-1', 'thor-3', 'infinity-war', 'endgame', 'loki']
},
{
  id: 'black-widow-char', name: '娜塔莎 / 黑寡婦', en: 'Natasha Romanoff / Black Widow',
  actor: 'Scarlett Johansson', group: 'avengers', role: 'hero',
  glyph: 'widow', accent: ['#111827', '#b91c1c'],
  tagline: '在沃米爾星犧牲自己換取靈魂寶石。',
  bio: '前蘇聯「紅屋」訓練出的殺手，後成為神盾局特工與復仇者創始成員。在《終局之戰》為取得靈魂寶石而犧牲自己。',
  arc: [
    { entry: 'avengers-1', text: '復仇者創始成員之一。' },
    { entry: 'winter-soldier', text: '與隊長一起揭發九頭蛇滲透神盾局。' },
    { entry: 'civil-war', text: '在兩派之間搖擺。' },
    { entry: 'black-widow', text: '前傳故事：面對妹妹葉蓮娜與「紅屋」洗腦組織的過去。' },
    { entry: 'infinity-war', text: '在汎達參與抵抗。' },
    { entry: 'endgame', text: '在沃米爾星犧牲自己換取靈魂寶石。', highlight: true }
  ],
  appears: ['avengers-1', 'winter-soldier', 'age-of-ultron', 'civil-war', 'black-widow', 'infinity-war', 'endgame']
},
{
  id: 'wanda', name: '汪達 / 緋紅女巫', en: 'Wanda Maximoff / Scarlet Witch',
  actor: 'Elizabeth Olsen', group: 'avengers', role: 'antihero',
  glyph: 'hex', accent: ['#be123c', '#7c3aed'],
  tagline: 'MCU 中最強也最悲傷的角色之一。',
  bio: '與雙胞胎哥哥快銀一同被奧創招募。歷經失去哥哥、失去愛人幻視，最後因喪夫之痛與黑暗神書的腐化而徹底黑化。',
  arc: [
    { entry: 'age-of-ultron', text: '與哥哥皮特羅（快銀）被奧創招募，後倒向復仇者。哥哥犧牲。' },
    { entry: 'civil-war', text: '站在隊長一方。' },
    { entry: 'infinity-war', text: '忍痛摧毀幻視額上的心靈寶石，但薩諾斯用時間寶石倒轉、硬生生挖出寶石。', highlight: true },
    { entry: 'wandavision', text: '因喪夫之痛用魔法在小鎮創造出幻視與兩個兒子（Billy、Tommy）的假象。接觸黑暗神書，正式黑化成「緋紅女巫」。', highlight: true },
    { entry: 'multiverse-of-madness', text: '被黑暗神書腐化，想奪取 America Chavez 的能力去與另一宇宙的孩子團聚。最後摧毀所有黑暗神書、疑似犧牲。' }
  ],
  appears: ['age-of-ultron', 'civil-war', 'infinity-war', 'endgame', 'wandavision', 'multiverse-of-madness']
},
{
  id: 'vision', name: '幻視', en: 'Vision',
  actor: 'Paul Bettany', group: 'avengers', role: 'hero',
  glyph: 'hex', accent: ['#f0b429', '#be123c'],
  tagline: '額上鑲著心靈寶石的人造人。',
  bio: '由東尼、班納與索爾用心靈寶石加上 JARVIS 創造出的善良人造人。心靈寶石就鑲在他額頭上 —— 這也讓他成為薩諾斯的目標。',
  arc: [
    { entry: 'age-of-ultron', text: '誕生。復仇者用心靈寶石與 JARVIS 創造出他，寶石鑲在額頭上。' },
    { entry: 'civil-war', text: '站在東尼一方。' },
    { entry: 'infinity-war', text: '汪達忍痛摧毀他額上的心靈寶石，但薩諾斯用時間寶石倒轉、硬生生挖出寶石 —— 他死了兩次。', highlight: true },
    { entry: 'wandavision', text: '汪達用魔法創造出的「幻視」只是假象。' }
  ],
  appears: ['age-of-ultron', 'civil-war', 'infinity-war', 'wandavision']
},
{
  id: 'quicksilver', name: '皮特羅 / 快銀', en: 'Pietro Maximoff / Quicksilver',
  actor: 'Aaron Taylor-Johnson', group: 'avengers', role: 'hero',
  glyph: 'bolt', accent: ['#0891b2', '#e5e7eb'],
  tagline: '汪達的雙胞胎哥哥，死於《奧創紀元》。',
  bio: '汪達的雙胞胎哥哥，擁有超高速能力。與妹妹一同被奧創招募，後倒向復仇者，並在索科維亞一役中犧牲。',
  arc: [
    { entry: 'age-of-ultron', text: '與妹妹汪達被奧創招募，後倒向復仇者。在索科維亞一役中犧牲。' }
  ],
  appears: ['age-of-ultron']
},
{
  id: 'hawkeye-char', name: '克林特 / 鷹眼', en: 'Clint Barton / Hawkeye',
  actor: 'Jeremy Renner', group: 'avengers', role: 'hero',
  glyph: 'arrow', accent: ['#7c2d12', '#4c1d95'],
  tagline: '復仇者創始成員。',
  bio: '神盾局的神射手，復仇者創始成員。在《終局之戰》中與黑寡婦一同前往沃米爾星取得靈魂寶石。',
  facts: [
    '他的個人影集《鷹眼》被指南列為「對蜘蛛人4可跳過」。'
  ],
  arc: [
    { entry: 'avengers-1', text: '復仇者創始成員之一。' },
    { entry: 'age-of-ultron', text: '對抗奧創。' },
    { entry: 'endgame', text: '與黑寡婦一同前往沃米爾星取得靈魂寶石 —— 最後是她犧牲。' }
  ],
  appears: ['avengers-1', 'age-of-ultron', 'civil-war', 'endgame']
},
{
  id: 'nick-fury', name: '尼克福瑞', en: 'Nick Fury',
  actor: 'Samuel L. Jackson', group: 'avengers', role: 'ally',
  glyph: 'badge', accent: ['#111827', '#0e7490'],
  tagline: '把所有英雄串起來的那個人。',
  bio: '神盾局局長，是早期串起所有英雄的樞紐。在《鋼鐵人》片尾提出「復仇者計畫」。',
  arc: [
    { entry: 'captain-marvel', text: '1995 年，年輕的福瑞在本片中失去一隻眼睛，並解釋了「復仇者」名稱由來。' },
    { entry: 'iron-man', text: '片尾現身提出「復仇者計畫」—— MCU 的起點。' },
    { entry: 'avengers-1', text: '集結鋼鐵人、美隊、雷神、浩克、黑寡婦、鷹眼。' },
    { entry: 'winter-soldier', text: '神盾局被九頭蛇滲透後假死潛伏。' },
    { entry: 'far-from-home', text: '找上彼得處理「元素怪」事件 —— 但真相是神秘客的騙局。' }
  ],
  appears: ['iron-man', 'avengers-1', 'winter-soldier', 'captain-marvel', 'far-from-home']
},
{
  id: 'peggy', name: '佩姬卡特', en: 'Peggy Carter',
  actor: 'Hayley Atwell', group: 'avengers', role: 'ally',
  glyph: 'heart', accent: ['#b91c1c', '#1e40af'],
  tagline: '美國隊長的摯愛。',
  bio: '二戰時期的特工，史蒂夫羅傑斯的摯愛。《終局之戰》結尾，隊長選擇留在過去與她共度餘生。',
  arc: [
    { entry: 'captain-america', text: '二戰時期與史蒂夫羅傑斯相戀，但他隨即墜機冰封。' },
    { entry: 'endgame', text: '隊長完成返還寶石的任務後，選擇留在過去與她共度餘生。', highlight: true }
  ],
  appears: ['captain-america', 'endgame']
},

/* ================= 宇宙與銀河 ================= */
{
  id: 'star-lord', name: '星爵 / Peter Quill', en: 'Star-Lord',
  actor: 'Chris Pratt', group: 'cosmic', role: 'hero',
  glyph: 'starburst', accent: ['#7e22ce', '#f59e0b'],
  tagline: '星際異攻隊的隊長。',
  bio: '在地球長大後被外星人帶走的地球人，星際異攻隊的隊長。父親「伊戈」是活體行星，因此他擁有天神族（Celestial）血統。',
  arc: [
    { entry: 'gotg-1', text: '與葛摩菈、火箭浣熊、格魯特、德克斯組隊，對抗羅南、爭奪內藏力量寶石的寶珠。' },
    { entry: 'gotg-2', text: '得知父親「伊戈」是活體行星、也是反派。確立天神族血統；勇度為救他而犧牲。' },
    { entry: 'infinity-war', text: '得知葛摩菈之死後失控出手，間接導致奪取手套失敗。' },
    { entry: 'gotg-3', text: '對抗至高進化。結局異攻隊解散。' }
  ],
  appears: ['gotg-1', 'gotg-2', 'infinity-war', 'endgame', 'gotg-3']
},
{
  id: 'gamora', name: '葛摩菈', en: 'Gamora',
  actor: 'Zoe Saldaña', group: 'cosmic', role: 'hero',
  glyph: 'starburst', accent: ['#15803d', '#7e22ce'],
  tagline: '薩諾斯的養女 —— 也是靈魂寶石的代價。',
  bio: '薩諾斯的養女，後加入星際異攻隊。在《無限之戰》中被薩諾斯推下沃米爾星的懸崖，作為取得靈魂寶石的代價。',
  arc: [
    { entry: 'gotg-1', text: '背叛薩諾斯、加入星際異攻隊。' },
    { entry: 'gotg-2', text: '與妹妹涅布拉的關係逐漸和解。' },
    { entry: 'infinity-war', text: '被薩諾斯推下沃米爾星的懸崖 —— 這是取得靈魂寶石的代價。', highlight: true },
    { entry: 'endgame', text: '2014 年的葛摩菈變體隨薩諾斯來到現在，最後倒向復仇者。' }
  ],
  appears: ['gotg-1', 'gotg-2', 'infinity-war', 'endgame']
},
{
  id: 'rocket', name: '火箭浣熊', en: 'Rocket',
  actor: 'Bradley Cooper（配音）', group: 'cosmic', role: 'hero',
  glyph: 'tree', accent: ['#b45309', '#0d9488'],
  tagline: '被改造的浣熊，最後成為新隊長。',
  bio: '被基因改造的浣熊，星際異攻隊成員。《星際異攻隊3》揭露他被「至高進化」改造的過去，結局成為新隊長。',
  arc: [
    { entry: 'gotg-1', text: '與格魯特搭檔加入異攻隊。' },
    { entry: 'gotg-2', text: '與勇度建立起父子般的連結。' },
    { entry: 'gotg-3', text: '揭露他被至高進化改造的過去。結局異攻隊解散，他成為新隊長。', highlight: true }
  ],
  appears: ['gotg-1', 'gotg-2', 'infinity-war', 'endgame', 'gotg-3']
},
{
  id: 'groot', name: '格魯特', en: 'Groot',
  actor: 'Vin Diesel（配音）', group: 'cosmic', role: 'hero',
  glyph: 'tree', accent: ['#166534', '#78350f'],
  tagline: '「I am Groot.」',
  bio: '樹人，星際異攻隊成員。在第一集為保護同伴而犧牲，之後以幼苗形態重生。',
  arc: [
    { entry: 'gotg-1', text: '為保護同伴而犧牲，之後以幼苗形態重生。' },
    { entry: 'gotg-2', text: '以幼年形態登場。' },
    { entry: 'gotg-3', text: '成年形態，隨異攻隊經歷最終冒險。' }
  ],
  appears: ['gotg-1', 'gotg-2', 'infinity-war', 'endgame', 'gotg-3']
},
{
  id: 'drax', name: '德克斯', en: 'Drax',
  actor: 'Dave Bautista', group: 'cosmic', role: 'hero',
  glyph: 'starburst', accent: ['#0e7490', '#b91c1c'],
  tagline: '完全聽不懂比喻的戰士。',
  bio: '家人被薩諾斯勢力殺害的戰士，加入星際異攻隊追尋復仇。以完全無法理解比喻的直白個性著名。',
  arc: [
    { entry: 'gotg-1', text: '加入異攻隊，目標是向薩諾斯復仇。' },
    { entry: 'gotg-3', text: '隨異攻隊經歷最終冒險。' }
  ],
  appears: ['gotg-1', 'gotg-2', 'infinity-war', 'endgame', 'gotg-3']
},
{
  id: 'yondu', name: '勇度', en: 'Yondu',
  actor: 'Michael Rooker', group: 'cosmic', role: 'antihero',
  glyph: 'arrow', accent: ['#0891b2', '#b91c1c'],
  tagline: '星爵真正的父親。',
  bio: '掠奪者首領，把星爵從地球帶走並養大。在《星際異攻隊2》為救星爵而犧牲 —— 「他也許是你父親，但他不是你爸爸。」',
  arc: [
    { entry: 'gotg-1', text: '掠奪者首領，與異攻隊亦敵亦友。' },
    { entry: 'gotg-2', text: '為救星爵而犧牲。', highlight: true }
  ],
  appears: ['gotg-1', 'gotg-2']
},
{
  id: 'captain-marvel-char', name: '卡蘿丹佛斯 / 驚奇隊長', en: 'Carol Danvers / Captain Marvel',
  actor: 'Brie Larson', group: 'cosmic', role: 'hero',
  glyph: 'starburst', accent: ['#1d4ed8', '#dc2626'],
  tagline: '因空間寶石能量而獲得力量。',
  bio: '空軍飛行員，因特斯拉方塊（空間寶石）能量爆炸而獲得超能力。MCU 中戰力最高的角色之一。',
  arc: [
    { entry: 'captain-marvel', text: '1995 年，因特斯拉方塊能量爆炸獲得超能力。揭露史克魯人其實是難民，真反派是克里帝國。' },
    { entry: 'endgame', text: '回到地球參與最終決戰。' },
    { entry: 'the-marvels', text: '與卡瑪拉可汗、莫妮卡三人能力糾纏、被迫換位。' }
  ],
  appears: ['captain-marvel', 'endgame', 'the-marvels']
},
{
  id: 'tchalla', name: "T'Challa / 黑豹", en: "T'Challa / Black Panther",
  actor: 'Chadwick Boseman', group: 'cosmic', role: 'hero',
  glyph: 'panther', accent: ['#4c1d95', '#0f172a'],
  tagline: '汎達國王。',
  bio: '汎達（藏有汎金屬 vibranium 的非洲國家）國王與黑豹。決定向世界開放汎達。演員 Chadwick Boseman 已於 2020 年逝世。',
  arc: [
    { entry: 'civil-war', text: '首度登場，追查殺害父親的兇手。' },
    { entry: 'black-panther', text: '成為汎達國王與黑豹。對抗美籍表弟齊爾蒙格。最後決定向世界開放汎達。' },
    { entry: 'infinity-war', text: '開放汎達作為抵抗薩諾斯的戰場。在彈指中化為灰燼。', highlight: true },
    { entry: 'endgame', text: '被復活，率汎達軍隊參與最終決戰。' },
    { entry: 'wakanda-forever', text: '《黑豹2》向已故演員 Chadwick Boseman 致敬，妹妹 Shuri 成為新黑豹。' }
  ],
  appears: ['civil-war', 'black-panther', 'infinity-war', 'endgame']
},

/* ================= 新世代與多元宇宙 ================= */
{
  id: 'yelena', name: '葉蓮娜貝洛娃', en: 'Yelena Belova',
  actor: 'Florence Pugh', group: 'newgen', role: 'antihero',
  glyph: 'widow', accent: ['#166534', '#111827'],
  tagline: '黑寡婦的妹妹，新復仇者成員。',
  bio: '娜塔莎的妹妹，同樣出自「紅屋」。後被瓦倫提娜招募，成為《雷霆特攻隊》／新復仇者的一員。',
  arc: [
    { entry: 'black-widow', text: '登場。與姊姊娜塔莎一同對抗「紅屋」洗腦組織。' },
    { entry: 'thunderbolts', text: '被瓦倫提娜召集，成為反英雄隊伍的一員，最後成為「新復仇者」。' }
  ],
  appears: ['black-widow', 'thunderbolts']
},
{
  id: 'valentina', name: '瓦倫提娜（Val）', en: 'Valentina Allegra de Fontaine',
  actor: 'Julia Louis-Dreyfus', group: 'newgen', role: 'villain',
  glyph: 'badge', accent: ['#7c3aed', '#111827'],
  tagline: '召集新復仇者的人。',
  bio: '神秘的政府高層人物，在《黑寡婦》片尾首度引入。她召集了一群反英雄組成《雷霆特攻隊》，並在片尾把他們命名為「新復仇者」。',
  arc: [
    { entry: 'black-widow', text: '片尾引入 —— 為《雷霆特攻隊》鋪路。' },
    { entry: 'thunderbolts', text: '召集反英雄隊伍，並在片尾把他們命名為「新復仇者（New Avengers）」。', highlight: true }
  ],
  appears: ['black-widow', 'thunderbolts']
},
{
  id: 'bob-sentry', name: 'Bob / 哨兵・虛空', en: 'Bob / Sentry / Void',
  actor: 'Lewis Pullman', group: 'newgen', role: 'antihero',
  glyph: 'starburst', accent: ['#f0b429', '#111827'],
  tagline: '《雷霆特攻隊》的核心。',
  bio: '擁有「哨兵（Sentry）／虛空（Void）」超強力量、但心理極為脆弱的人物。是《雷霆特攻隊》的故事核心。',
  facts: ['註：Sentry 的台灣官方譯名可能與「哨兵」略有差異。'],
  arc: [
    { entry: 'thunderbolts', text: '擁有哨兵／虛空的超強力量、心理脆弱，是全片的核心。' }
  ],
  appears: ['thunderbolts']
},
{
  id: 'john-walker', name: 'John Walker / 美國密探', en: 'John Walker / U.S. Agent',
  actor: 'Wyatt Russell', group: 'newgen', role: 'antihero',
  glyph: 'shield', accent: ['#1e40af', '#7f1d1d'],
  tagline: '被扶上位、又被拉下來的「美國隊長」。',
  bio: '政府在山姆交出盾牌後指派的新任美國隊長，後失格成為「美國密探」。加入《雷霆特攻隊》。',
  arc: [
    { entry: 'falcon-winter-soldier', text: '被政府指派為新任美國隊長，後因失控行為被撤職。' },
    { entry: 'thunderbolts', text: '加入瓦倫提娜召集的反英雄隊伍。' }
  ],
  appears: ['falcon-winter-soldier', 'thunderbolts']
},
{
  id: 'monica', name: '莫妮卡蘭博', en: 'Monica Rambeau',
  actor: 'Teyonah Parris', group: 'newgen', role: 'hero',
  glyph: 'starburst', accent: ['#7c3aed', '#0891b2'],
  tagline: '被困在另一個宇宙的人。',
  bio: '在《汪達幻視》中獲得能力。《驚奇隊長2》結尾她犧牲自己封閉時空裂縫，被困在另一個宇宙 —— 那裡有 X 戰警。',
  arc: [
    { entry: 'wandavision', text: '在汪達的魔法小鎮事件中獲得能力。' },
    { entry: 'the-marvels', text: '與卡蘿、卡瑪拉能力糾纏。最後犧牲自己封閉時空裂縫、被困在另一個宇宙。片尾彩蛋中她在平行宇宙醒來，身旁是 X 戰警的野獸。', highlight: true }
  ],
  appears: ['wandavision', 'the-marvels']
},
{
  id: 'kamala', name: '卡瑪拉可汗 / 驚奇少女', en: 'Kamala Khan / Ms. Marvel',
  actor: 'Iman Vellani', group: 'newgen', role: 'hero',
  glyph: 'starburst', accent: ['#dc2626', '#0891b2'],
  tagline: '首度確認 MCU 變種人存在的角色。',
  bio: '崇拜驚奇隊長的少女英雄。她的影集首度確認 MCU 中變種人（mutant）的存在。',
  arc: [
    { entry: 'ms-marvel', text: '獲得能力成為驚奇女士。本作首度確認 MCU 變種人存在。' },
    { entry: 'the-marvels', text: '與卡蘿、莫妮卡三人能力糾纏、被迫換位。' }
  ],
  appears: ['ms-marvel', 'the-marvels']
},
{
  id: 'america-chavez', name: 'America Chavez', en: 'America Chavez',
  actor: 'Xochitl Gomez', group: 'newgen', role: 'hero',
  glyph: 'portal', accent: ['#1d4ed8', '#be123c'],
  tagline: '能穿越多元宇宙的少女。',
  bio: '天生就能打開通往其他宇宙的星形傳送門。《奇異博士2》中緋紅女巫想奪取她的能力。',
  arc: [
    { entry: 'multiverse-of-madness', text: '奇異博士保護她對抗想奪取其能力的緋紅女巫。' }
  ],
  appears: ['multiverse-of-madness']
},
{
  id: 'sylvie', name: 'Sylvie', en: 'Sylvie',
  actor: 'Sophia Di Martino', group: 'newgen', role: 'antihero',
  glyph: 'tva', accent: ['#166534', '#be123c'],
  tagline: '按下多元宇宙開關的人。',
  bio: '洛基的女性變體。在影集《洛基》第一季結局殺死留存者 —— 這正式開啟了多元宇宙，是整個傳奇的引爆點。',
  arc: [
    { entry: 'loki', text: '第一季結局中殺死留存者，正式開啟多元宇宙 —— 整個多元宇宙傳奇的引爆點。', highlight: true }
  ],
  appears: ['loki']
},
{
  id: 'kang', name: '留存者 / 征服者康', en: 'He Who Remains / Kang',
  actor: 'Jonathan Majors', group: 'newgen', role: 'villain',
  glyph: 'tva', accent: ['#166534', '#a16207'], warning: true,
  tagline: '⚠ 已被漫威棄用的原大魔王。',
  bio: '原本設定為多元宇宙傳奇的大魔王。「留存者」是康的一個變體，在《洛基》第一季結局被 Sylvie 殺死。',
  facts: [
    '⚠ 因演員 Jonathan Majors 於 2023 年官司定罪，漫威棄用康、改由末日博士接棒。',
    '任何把康當成《末日之戰》反派的舊資料都已過時。'
  ],
  arc: [
    { entry: 'loki', text: '以「留存者（He Who Remains）」身分登場，是康的一個變體。被 Sylvie 殺死後多元宇宙正式開啟。' },
    { entry: 'quantumania', text: '在量子領域作為「征服者康」與蟻人對決。片尾出現「康議會」。' },
    { entry: 'doomsday', text: '⚠ 已被棄用 —— 不要把康當成《末日之戰》的反派。', warning: true }
  ],
  appears: ['loki', 'quantumania']
},
{
  id: 'deadpool', name: '死侍', en: 'Deadpool',
  actor: 'Ryan Reynolds', group: 'newgen', role: 'antihero',
  glyph: 'claw', accent: ['#b91c1c', '#111827'],
  tagline: '把 X 戰警帶進 MCU 的人。',
  bio: '會打破第四面牆的 R 級反英雄。透過 TVA 進入多元宇宙，把福斯時代的 X 戰警角色正式帶入 MCU。',
  arc: [
    { entry: 'deadpool-wolverine', text: '與金鋼狼透過 TVA 進入多元宇宙，對抗想用「時間撕裂器」毀滅多元宇宙的 Cassandra Nova。', highlight: true }
  ],
  appears: ['deadpool-wolverine']
},
{
  id: 'wolverine', name: '金鋼狼', en: 'Wolverine',
  actor: 'Hugh Jackman', group: 'newgen', role: 'antihero',
  glyph: 'claw', accent: ['#f0b429', '#1e40af'],
  tagline: '精金爪的變種人。',
  bio: '福斯時代 X 戰警系列的核心角色，擁有自我復原能力與精金爪。透過《死侍與金鋼狼》正式進入 MCU。',
  facts: [
    '「精金（Adamantium）」與《永恆族》的天神島、《美國隊長4》的設定相連 —— 這是漫威為 X 戰警鋪的路。'
  ],
  arc: [
    { entry: 'deadpool-wolverine', text: '與死侍透過 TVA 進入多元宇宙，正式把福斯時代 X 戰警帶入 MCU。' }
  ],
  appears: ['deadpool-wolverine']
},
{
  id: 'reed-richards', name: '驚奇4超人', en: 'The Fantastic Four',
  actor: 'Pedro Pascal、Vanessa Kirby、Joseph Quinn、Ebon Moss-Bachrach', group: 'newgen', role: 'hero',
  glyph: 'four', accent: ['#1d4ed8', '#f59e0b'],
  tagline: '來自 Earth-828 的一家人。',
  bio: 'Reed Richards、Sue Storm、Johnny Storm、Ben Grimm。設定在復古風的平行宇宙 Earth-828，對抗吞星與銀色衝浪手。',
  facts: [
    '中段彩蛋：時間快轉四年後，末日博士出現在 Sue 的兒子 Franklin 身邊 —— 直接鋪陳《末日之戰》。'
  ],
  arc: [
    { entry: 'fantastic-four', text: '設定在 Earth-828，對抗吞星（Galactus）與銀色衝浪手。中段彩蛋末日博士現身於 Sue 的兒子 Franklin 身邊。', highlight: true },
    { entry: 'doomsday', text: '與原復仇者、新復仇者、汎達戰士、初代 X 戰警一同集結。' }
  ],
  appears: ['fantastic-four', 'doomsday']
},
{
  id: 'shuri', name: 'Shuri', en: 'Shuri',
  actor: 'Letitia Wright', group: 'newgen', role: 'hero',
  glyph: 'panther', accent: ['#7c3aed', '#0e7490'],
  tagline: '新一代黑豹。',
  bio: "T'Challa 的妹妹、汎達的天才科學家。在《黑豹2》中成為新一代黑豹。",
  arc: [
    { entry: 'black-panther', text: '汎達的天才科學家，替哥哥打造裝備。' },
    { entry: 'wakanda-forever', text: '成為新黑豹。' }
  ],
  appears: ['black-panther', 'wakanda-forever']
},
{
  id: 'riri', name: '鋼鐵心 / Riri Williams', en: 'Ironheart',
  actor: 'Dominique Thorne', group: 'newgen', role: 'hero',
  glyph: 'arc', accent: ['#be123c', '#f0b429'],
  tagline: '在《黑豹2》引入的天才少女。',
  bio: '麻省理工的天才學生，自行打造出鋼鐵裝。在《黑豹2：汎達萬歲》中引入。',
  arc: [
    { entry: 'wakanda-forever', text: '引入 —— 自行打造鋼鐵裝的天才少女。' }
  ],
  appears: ['wakanda-forever']
},

/* ================= 兩大魔王 ================= */
{
  id: 'thanos', name: '薩諾斯', en: 'Thanos',
  actor: 'Josh Brolin', group: 'bigbad', role: 'villain',
  glyph: 'gauntlet', accent: ['#7e22ce', '#f0b429'], pin: true,
  tagline: '無限傳奇的大魔王 —— 唯一真正贏過的反派。',
  bio: '為了「解決宇宙資源不足」而要集齊六顆無限寶石、彈指消滅半數生命的泰坦人。他成功了 —— 這是漫威史上最震撼的結局。',
  facts: [
    '他在沃米爾星犧牲養女葛摩菈換取靈魂寶石。',
    '彈指讓全宇宙半數生命化為灰燼，包含蜘蛛人與黑豹。這五年被稱為 Blip。',
    '彈指後他用寶石摧毀了寶石本身。'
  ],
  arc: [
    { entry: 'avengers-1', text: '片尾首度露出 —— 洛基入侵紐約的幕後主使。' },
    { entry: 'gotg-1', text: '作為背景勢力出現，葛摩菈與涅布拉是他的養女。' },
    { entry: 'age-of-ultron', text: '彩蛋中取出無限手套。' },
    { entry: 'infinity-war', text: '主角級反派。集齊六寶石、彈指成功，半數生命化為灰燼。', highlight: true },
    { entry: 'endgame', text: '彈指後用寶石摧毀寶石本身。2014 年的變體隨時間旅行來到現在，最後被東尼彈指消滅。', highlight: true }
  ],
  appears: ['avengers-1', 'gotg-1', 'age-of-ultron', 'infinity-war', 'endgame']
},
{
  id: 'doctor-doom', name: '末日博士 / Victor von Doom', en: 'Doctor Doom',
  actor: 'Robert Downey Jr.（小勞勃道尼）', group: 'bigbad', role: 'villain',
  glyph: 'doom', accent: ['#166534', '#a16207'], pin: true,
  tagline: '多元宇宙傳奇的新大魔王。',
  bio: '接棒征服者康、成為多元宇宙傳奇主線大魔王。由原鋼鐵人演員小勞勃道尼飾演 —— 漫威近年最大膽的選角。',
  facts: [
    '⚠ 主線大魔王已從「征服者康」改為「末日博士」—— 因為康的演員法律問題。',
    '首度現身：《驚奇4超人：第一步》中段彩蛋，手持銀色面具出現在 Franklin 身邊。',
    '將在 2026 年 12 月 18 日的《復仇者聯盟：末日之戰》正式登場。'
  ],
  arc: [
    { entry: 'fantastic-four', text: '中段彩蛋首度現身 —— 時間快轉四年後，一名手持末日博士銀色面具的神秘披風人物出現在 Sue 的兒子 Franklin 身邊。', highlight: true },
    { entry: 'doomsday', text: '正式登場，作為《末日之戰》的反派。集結來自三個不同宇宙的英雄面對他。', highlight: true }
  ],
  appears: ['fantastic-four', 'doomsday']
},
{
  id: 'ultron', name: '奧創', en: 'Ultron',
  actor: 'James Spader（配音）', group: 'bigbad', role: 'villain',
  glyph: 'arc', accent: ['#b91c1c', '#0e7490'],
  tagline: '東尼親手造出的災難。',
  bio: '東尼與班納用洛基權杖中的 AI 打造的維安 AI，卻失控想滅絕人類。',
  arc: [
    { entry: 'age-of-ultron', text: '被東尼與班納創造出來後失控，招募汪達與皮特羅雙胞胎，計畫滅絕人類。' }
  ],
  appears: ['age-of-ultron']
},
{
  id: 'zemo', name: '齊莫', en: 'Helmut Zemo',
  actor: 'Daniel Brühl', group: 'bigbad', role: 'villain',
  glyph: 'badge', accent: ['#4c1d95', '#111827'],
  tagline: '不用超能力就拆散復仇者的人。',
  bio: '《英雄內戰》的幕後黑手。他揭露巴奇當年被九頭蛇操控、殺害了東尼的父母，讓東尼與隊長徹底決裂。',
  arc: [
    { entry: 'civil-war', text: '幕後黑手。揭露巴奇殺害東尼父母的真相，成功從內部拆散復仇者。', highlight: true },
    { entry: 'falcon-winter-soldier', text: '在影集中再度登場。' }
  ],
  appears: ['civil-war', 'falcon-winter-soldier']
},
{
  id: 'the-leader', name: '智謀者 / Samuel Sterns', en: 'The Leader',
  actor: 'Tim Blake Nelson', group: 'bigbad', role: 'villain',
  glyph: 'fist', accent: ['#166534', '#7f1d1d'],
  tagline: '埋了 16 年以上的伏筆。',
  bio: '2008 年《無敵浩克》中的科學家，頭部沾到班納的伽瑪血液後開始異變。17 年後成為《美國隊長4》的反派。',
  facts: [
    '他餵食羅斯總統伽瑪藥丸多年，導致他變身紅浩克。',
    '註：The Leader 的台灣官方譯名可能與「智謀者」略有差異。'
  ],
  arc: [
    { entry: 'incredible-hulk', text: '科學家 Samuel Sterns 頭部沾到班納的伽瑪血液、開始異變 —— 埋下 16 年以上的伏筆。', highlight: true },
    { entry: 'brave-new-world', text: '正式成為反派。餵食羅斯總統伽瑪藥丸多年，導致他在白宮前失控變身紅浩克。' }
  ],
  appears: ['incredible-hulk', 'brave-new-world']
},
{
  id: 'ross', name: '羅斯 / 紅浩克', en: 'Thaddeus Ross / Red Hulk',
  actor: 'Harrison Ford（哈里遜福特，2025）', group: 'bigbad', role: 'antihero',
  glyph: 'fist', accent: ['#b91c1c', '#1e40af'],
  tagline: '從追捕浩克的將軍，變成總統，最後變成紅浩克。',
  bio: '2008 年追捕浩克的羅斯將軍，後成為美國國務卿，並在《美國隊長4》中成為美國總統 —— 最後在白宮前失控變身紅浩克。',
  arc: [
    { entry: 'incredible-hulk', text: '作為追捕班納的羅斯將軍登場。' },
    { entry: 'civil-war', text: '以國務卿身分推動索科維亞協議。' },
    { entry: 'brave-new-world', text: '成為美國總統（哈里遜福特飾）。被智謀者餵食伽瑪藥丸多年，最後在白宮前失控變身紅浩克。山姆化解危機後他自首入獄。', highlight: true }
  ],
  appears: ['incredible-hulk', 'civil-war', 'brave-new-world']
}

];
