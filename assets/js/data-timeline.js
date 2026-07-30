/* ============================================================
   MCU 補課指南 — 時間線資料
   內容全數依據《Spider-Man: Brand New Day 完整補課指南》整理
   relevance: core = 最低限度必看5部 / recommended = 建議補
               optional = 選看 / skippable = 對蜘蛛人4可跳過
   ============================================================ */

window.MCU_ERAS = [
  { id: 'legacy',   label: '其他宇宙・舊蜘蛛人電影', sub: '2002–2014，非 MCU 主宇宙' },
  { id: 'ww2',      label: '1943・二戰',             sub: '超級士兵計畫的起點' },
  { id: 'y1995',    label: '1995',                   sub: '尼克福瑞與宇宙的第一次接觸' },
  { id: 'rise',     label: '2010–2013・英雄崛起',     sub: '鋼鐵人到紐約大戰' },
  { id: 'shield',   label: '2014–2015・神盾局瓦解與宇宙擴張', sub: '九頭蛇現形、異攻隊登場' },
  { id: 'civil',    label: '2016–2017・內戰與新血',   sub: '復仇者分裂、蜘蛛人加入' },
  { id: 'snap',     label: '2018・無限之戰與彈指',     sub: '反派獲勝的結局' },
  { id: 'blip',     label: '2018–2023・消失的五年（Blip）', sub: '半數生命化為灰燼的五年' },
  { id: 'endgame',  label: '2023・終局之戰',          sub: '時間搶劫與無限傳奇完結' },
  { id: 'after',    label: '終局之後・多元宇宙開啟',   sub: 'TVA、咒語失控、三代同框' },
  { id: 'expand',   label: '多元宇宙擴張',            sub: 'X戰警回歸、新復仇者成軍' },
  { id: 'future',   label: '2026 及以後',             sub: '蜘蛛人4 與末日之戰' }
];

window.MCU_CATS = [
  { id: 'spidey',     label: '蜘蛛人線',   color: '#ff4757' },
  { id: 'avengers',   label: '復聯主線',   color: '#f0b429' },
  { id: 'cosmic',     label: '宇宙／銀河', color: '#22d3ee' },
  { id: 'multiverse', label: '多元宇宙',   color: '#a78bfa' },
  { id: 'series',     label: '影集',       color: '#34d399' },
  { id: 'legacy',     label: '舊蜘蛛人',   color: '#fb923c' }
];

window.MCU_TIMELINE = [

/* ============ 其他宇宙：山姆雷米三部曲（托比馬奎爾） ============ */
{
  id: 'raimi-1', no: 0, title: '蜘蛛人', en: 'Spider-Man', year: 2002,
  type: 'film', phase: '雷米三部曲', saga: 'legacy', cats: ['legacy'],
  era: 'legacy', chrono: 1, glyph: 'web', accent: ['#b91c1c', '#1e3a8a'],
  relevance: 'optional', actor: '托比馬奎爾（Tobey Maguire）',
  tagline: '「能力愈強、責任愈大」的原點',
  summary: '第一代蜘蛛人電影。彼得被基因改造蜘蛛咬到獲得能力，班叔之死讓他學會那句貫穿所有版本的信條。',
  sections: [
    { h: '劇情', body: '彼得被基因改造蜘蛛咬到獲得能力；班叔（Uncle Ben）因彼得一時自私而遭歹徒殺害，讓他學到「能力愈強、責任愈大」。' },
    { h: '反派', body: '綠惡魔（Norman Osborn）是好友哈利的父親，測試軍用血清後發狂，最後死於自己的滑翔翼。' },
    { h: '為什麼跟蜘蛛人4有關', body: '《無家日》把這個宇宙的綠惡魔拉了進來，他是《無家日》最大的反派。托比版彼得也在《無家日》登場，代號 Peter-Two。' }
  ],
  related: ['no-way-home', 'raimi-2', 'raimi-3']
},
{
  id: 'raimi-2', no: 0, title: '蜘蛛人2', en: 'Spider-Man 2', year: 2004,
  type: 'film', phase: '雷米三部曲', saga: 'legacy', cats: ['legacy'],
  era: 'legacy', chrono: 2, glyph: 'tentacle', accent: ['#0f766e', '#78350f'],
  relevance: 'optional', actor: '托比馬奎爾（Tobey Maguire）',
  tagline: '八爪博士的悲劇',
  summary: '公認系列最佳。反派八爪博士的機械臂控制其心智，最後選擇自我犧牲贖罪。',
  sections: [
    { h: '劇情', body: '反派八爪博士（Otto Octavius），核融合實驗失敗使四條機械臂與其融合並控制其心智，最後犧牲自己贖罪。' },
    { h: '為什麼跟蜘蛛人4有關', body: '《無家日》中八爪博士（Alfred Molina 原班回歸）是第一個被拉進 MCU 宇宙的反派，也是第一個被「治好」的。' }
  ],
  related: ['no-way-home', 'raimi-1', 'raimi-3']
},
{
  id: 'raimi-3', no: 0, title: '蜘蛛人3', en: 'Spider-Man 3', year: 2007,
  type: 'film', phase: '雷米三部曲', saga: 'legacy', cats: ['legacy'],
  era: 'legacy', chrono: 3, glyph: 'sand', accent: ['#a16207', '#111827'],
  relevance: 'optional', actor: '托比馬奎爾（Tobey Maguire）',
  tagline: '沙人、新綠惡魔與猛毒',
  summary: '三線反派齊發：沙人被改寫成殺害班叔的真兇，哈利成為新綠惡魔，並首度引入外星共生體猛毒。',
  sections: [
    { h: '劇情', body: '反派包含沙人（Flint Marko，被改寫為殺害班叔的真兇）、哈利（新綠惡魔）、以及外星共生體「猛毒（Venom / Eddie Brock）」。' },
    { h: '為什麼跟蜘蛛人4有關', body: '《無家日》把沙人（Thomas Haden Church）拉進 MCU 宇宙，是五大反派之一。' }
  ],
  related: ['no-way-home', 'raimi-1', 'raimi-2']
},

/* ============ 其他宇宙：馬克韋布《驚奇再起》（安德魯加菲） ============ */
{
  id: 'webb-1', no: 0, title: '蜘蛛人：驚奇再起', en: 'The Amazing Spider-Man', year: 2012,
  type: 'film', phase: '驚奇再起兩部曲', saga: 'legacy', cats: ['legacy'],
  era: 'legacy', chrono: 4, glyph: 'lizard', accent: ['#15803d', '#0c4a6e'],
  relevance: 'optional', actor: '安德魯加菲（Andrew Garfield）',
  tagline: '蜥蜴人與關史黛西',
  summary: '重啟版第一集。反派是注射蜥蜴 DNA 變成怪物的 Oscorp 科學家，彼得與女友關史黛西相戀。',
  sections: [
    { h: '劇情', body: '反派蜥蜴人（Curt Connors），Oscorp 科學家注射蜥蜴 DNA 變成怪物。彼得與女友關史黛西（Gwen Stacy，Emma Stone 飾）相戀。' },
    { h: '為什麼跟蜘蛛人4有關', body: '《無家日》把蜥蜴人（Rhys Ifans）拉進 MCU 宇宙，是五大反派之一。' }
  ],
  related: ['no-way-home', 'webb-2']
},
{
  id: 'webb-2', no: 0, title: '蜘蛛人：驚奇再起2', en: 'The Amazing Spider-Man 2', year: 2014,
  type: 'film', phase: '驚奇再起兩部曲', saga: 'legacy', cats: ['legacy'],
  era: 'legacy', chrono: 5, glyph: 'bolt', accent: ['#0891b2', '#1e1b4b'],
  relevance: 'optional', actor: '安德魯加菲（Andrew Garfield）',
  tagline: '加菲版蜘蛛人最大的心理創傷',
  summary: '關史黛西之死。彼得吐絲想救她，但急停的力道扭斷了她的脖子 —— 這個創傷在《無家日》得到救贖。',
  sections: [
    { h: '劇情', body: '反派電光人（Max Dillon）與新綠惡魔（Harry Osborn）。' },
    { h: '關鍵悲劇', body: '關史黛西在大戰中墜落，彼得吐絲想救她，但急停時的力道扭斷了她的脖子，她仍身亡。這是加菲版蜘蛛人最大的心理創傷。', highlight: true },
    { h: '為什麼跟蜘蛛人4有關', body: '這正是《無家日》中他接住墜落的 MJ、得到救贖的原因。電光人（Jamie Foxx）也是《無家日》五大反派之一。' }
  ],
  related: ['no-way-home', 'webb-1']
},

/* ============ 無限傳奇：奠基電影 ============ */
{
  id: 'iron-man', no: 1, title: '鋼鐵人', en: 'Iron Man', year: 2008,
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers'],
  era: 'rise', chrono: 10, glyph: 'arc', accent: ['#dc2626', '#f0b429'],
  relevance: 'optional',
  tagline: 'MCU 的起點',
  summary: '軍火商東尼史塔克被綁架後打造鋼鐵裝逃脫，回國後改邪歸正成為鋼鐵人。片尾尼克福瑞提出「復仇者計畫」。',
  sections: [
    { h: '劇情', body: '軍火商東尼史塔克被綁架後打造鋼鐵裝逃脫，回國後改邪歸正成為鋼鐵人，揭發合夥人 Obadiah Stane（鋼鐵獠牙）把武器賣給恐怖分子，並公開承認「我就是鋼鐵人」。' },
    { h: '關鍵片尾', body: '尼克福瑞現身提出「復仇者計畫」。這是整個 MCU 的起點。', highlight: true }
  ],
  related: ['iron-man-2', 'avengers-1', 'civil-war']
},
{
  id: 'incredible-hulk', no: 2, title: '無敵浩克', en: 'The Incredible Hulk', year: 2008,
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers'],
  era: 'rise', chrono: 11, glyph: 'fist', accent: ['#166534', '#7f1d1d'],
  relevance: 'optional',
  tagline: '埋了 16 年以上的伏筆',
  summary: '布魯斯班納因伽瑪射線變身浩克、逃避羅斯將軍追捕。片中一個小配角，在 17 年後成了《美國隊長4》的大反派。',
  sections: [
    { h: '劇情', body: '布魯斯班納（Bruce Banner）因伽瑪射線變身浩克、逃避羅斯將軍（Thaddeus Ross）追捕。反派 Emil Blonsky 變成「憎惡（Abomination）」。' },
    { h: '關鍵伏筆', body: '科學家 Samuel Sterns 頭部沾到班納的伽瑪血液、開始異變，為 2025 年《美國隊長4》的反派「智謀者（The Leader）」埋下 16 年以上的伏筆。', highlight: true },
    { h: '為什麼跟蜘蛛人4有關', body: '浩克（Mark Ruffalo）在《蜘蛛人4》中回歸，協助彼得處理失控的蜘蛛基因 —— 這是重量級回歸。' }
  ],
  related: ['brave-new-world', 'spider-man-4', 'avengers-1']
},
{
  id: 'iron-man-2', no: 3, title: '鋼鐵人2', en: 'Iron Man 2', year: 2010,
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers'],
  era: 'rise', chrono: 12, glyph: 'arc', accent: ['#b91c1c', '#475569'],
  relevance: 'optional',
  tagline: '戰爭機器登場',
  summary: '東尼因舊反應爐鈀中毒瀕死，靠父親霍華留下的線索合成新元素自救。彩蛋出現特斯拉方塊的模型。',
  sections: [
    { h: '劇情', body: '東尼因舊反應爐鈀中毒瀕死，靠父親霍華留下的線索合成新元素自救。反派 Whiplash（Ivan Vanko）與 Justin Hammer；戰爭機器（Rhodey）登場。' },
    { h: '寶石線索', body: '彩蛋中出現特斯拉方塊（Tesseract）的模型。' }
  ],
  related: ['iron-man', 'iron-man-3', 'avengers-1']
},
{
  id: 'thor', no: 4, title: '雷神索爾', en: 'Thor', year: 2011,
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers', 'cosmic'],
  era: 'rise', chrono: 13, glyph: 'hammer', accent: ['#1d4ed8', '#f0b429'],
  relevance: 'optional',
  tagline: '空間寶石首次登場',
  summary: '傲慢的索爾被逐出阿斯嘉、學會謙卑。反派是弟弟洛基。空間寶石首次以「特斯拉方塊」形式在片尾登場。',
  sections: [
    { h: '劇情', body: '傲慢的索爾被逐出阿斯嘉、學會謙卑。反派是弟弟洛基（Loki）。' },
    { h: '寶石', body: '空間寶石首次以「特斯拉方塊」形式在片尾登場。', highlight: true }
  ],
  stones: ['space'],
  related: ['thor-2', 'thor-3', 'avengers-1', 'loki']
},
{
  id: 'captain-america', no: 5, title: '美國隊長', en: 'Captain America: The First Avenger', year: 2011,
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers'],
  era: 'ww2', chrono: 1943, glyph: 'shield', accent: ['#1e40af', '#b91c1c'],
  relevance: 'optional',
  tagline: '時間軸上最早的一部',
  summary: '二戰背景。弱小的史蒂夫羅傑斯注射血清成為超級士兵，對抗紅骷髏與九頭蛇。墜機冰封 70 年後甦醒。',
  sections: [
    { h: '劇情', body: '二戰背景，弱小的史蒂夫羅傑斯（Steve Rogers）注射血清成為超級士兵。反派紅骷髏（Red Skull）與九頭蛇（HYDRA）利用特斯拉方塊（空間寶石）。隊長墜機冰封 70 年後甦醒。' },
    { h: '寶石', body: '九頭蛇利用特斯拉方塊 —— 也就是空間寶石。' }
  ],
  stones: ['space'],
  related: ['winter-soldier', 'avengers-1', 'endgame']
},
{
  id: 'avengers-1', no: 6, title: '復仇者聯盟', en: 'The Avengers', year: 2012,
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers'],
  era: 'rise', chrono: 14, glyph: 'star', accent: ['#1d4ed8', '#dc2626'],
  relevance: 'optional',
  tagline: '六人集結、紐約大戰',
  summary: '洛基率奇塔黎大軍入侵紐約（幕後是薩諾斯）。尼克福瑞集結鋼鐵人、美隊、雷神、浩克、黑寡婦、鷹眼。兩顆寶石同場。',
  sections: [
    { h: '劇情', body: '洛基持權杖、率奇塔黎大軍入侵紐約（幕後是薩諾斯）。尼克福瑞集結鋼鐵人、美隊、雷神、浩克、黑寡婦、鷹眼。' },
    { h: '兩顆寶石同場', body: '特斯拉方塊（空間）與洛基權杖（內藏心靈寶石）。', highlight: true },
    { h: '關鍵片尾', body: '片尾首度露出薩諾斯。' },
    { h: '為什麼跟蜘蛛人4有關', body: '紐約大戰留下的外星（奇塔黎）廢墟，正是《返校日》反派禿鷹的武器來源，也是他生意被搶的原因。' }
  ],
  stones: ['space', 'mind'],
  related: ['homecoming', 'age-of-ultron', 'iron-man-3', 'loki']
},
{
  id: 'iron-man-3', no: 7, title: '鋼鐵人3', en: 'Iron Man 3', year: 2013,
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['avengers'],
  era: 'rise', chrono: 15, glyph: 'arc', accent: ['#991b1b', '#ea580c'],
  relevance: 'optional',
  tagline: '東尼的 PTSD',
  summary: '紐約大戰後東尼罹患 PTSD。假恐怖分子「滿大人」其實是演員，真反派是研發「絕境病毒」的 Aldrich Killian。',
  sections: [
    { h: '劇情', body: '紐約大戰後東尼罹患 PTSD。假恐怖分子「滿大人」其實是演員，真反派是研發「絕境病毒（Extremis）」的 Aldrich Killian。' }
  ],
  related: ['iron-man-2', 'age-of-ultron', 'shang-chi']
},
{
  id: 'thor-2', no: 8, title: '雷神索爾2：黑暗世界', en: 'Thor: The Dark World', year: 2013,
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['avengers', 'cosmic'],
  era: 'rise', chrono: 16, glyph: 'hammer', accent: ['#3730a3', '#7f1d1d'],
  relevance: 'optional',
  tagline: '現實寶石現形',
  summary: '黑暗精靈 Malekith 想利用「乙太」讓宇宙陷入黑暗。片尾揭露乙太就是現實寶石。',
  sections: [
    { h: '劇情', body: '黑暗精靈 Malekith 想利用「乙太（Aether）」讓宇宙陷入黑暗。' },
    { h: '寶石', body: '片尾揭露乙太就是現實寶石，交由收藏者（Collector）保管。', highlight: true }
  ],
  stones: ['reality'],
  related: ['thor', 'thor-3', 'infinity-war']
},
{
  id: 'winter-soldier', no: 9, title: '美國隊長2：酷寒戰士', en: 'Captain America: The Winter Soldier', year: 2014,
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['avengers'],
  era: 'shield', chrono: 20, glyph: 'shield', accent: ['#0f172a', '#b91c1c'],
  relevance: 'optional',
  tagline: '重大轉折：神盾局瓦解',
  summary: '九頭蛇早已滲透神盾局數十年。刺客「酷寒戰士」被揭露是被洗腦的隊長好友巴奇。隊長揭發真相、瓦解神盾局。',
  sections: [
    { h: '重大轉折', body: '九頭蛇早已滲透神盾局數十年（Project Insight 計畫要用天空母艦演算法預先殺害數百萬潛在威脅）。', highlight: true },
    { h: '酷寒戰士', body: '刺客「酷寒戰士」被揭露是被洗腦的隊長好友巴奇（Bucky Barnes）。隊長揭發真相、瓦解神盾局。' }
  ],
  related: ['captain-america', 'civil-war', 'thunderbolts']
},
{
  id: 'gotg-1', no: 10, title: '星際異攻隊', en: 'Guardians of the Galaxy', year: 2014,
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['cosmic'],
  era: 'shield', chrono: 21, glyph: 'tree', accent: ['#7e22ce', '#f59e0b'],
  relevance: 'optional',
  tagline: '力量寶石與外太空喜劇',
  summary: '星爵、葛摩菈、火箭浣熊、格魯特、德克斯組隊。神秘寶珠內藏力量寶石。',
  sections: [
    { h: '劇情', body: '外太空喜劇。星爵（Peter Quill / Star-Lord）、葛摩菈（Gamora，薩諾斯養女）、火箭浣熊、格魯特、德克斯組隊。反派羅南（Ronan）。' },
    { h: '寶石', body: '神秘寶珠內藏力量寶石，最後交給新星軍團保管。', highlight: true }
  ],
  stones: ['power'],
  related: ['gotg-2', 'gotg-3', 'infinity-war']
},
{
  id: 'age-of-ultron', no: 11, title: '復仇者聯盟2：奧創紀元', en: 'Avengers: Age of Ultron', year: 2015,
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['avengers'],
  era: 'shield', chrono: 22, glyph: 'star', accent: ['#7f1d1d', '#0e7490'],
  relevance: 'optional', group: 'avengers4',
  tagline: '幻視誕生、雙胞胎登場',
  summary: '東尼與班納用洛基權杖中的 AI 打造維安 AI「奧創」，卻失控想滅絕人類。復仇者用心靈寶石創造出幻視。',
  sections: [
    { h: '劇情', body: '東尼與班納用洛基權杖中的 AI 打造維安 AI「奧創（Ultron）」，卻失控想滅絕人類。奧創招募汎達（Wanda / 緋紅女巫）與皮特羅（快銀）雙胞胎。' },
    { h: '幻視誕生', body: '復仇者最後用心靈寶石與 JARVIS 創造出善良的人造人「幻視（Vision）」，寶石就鑲在他額頭上。快銀犧牲。', highlight: true },
    { h: '延伸', body: '索科維亞一役的傷亡，直接導致下一部《英雄內戰》的「索科維亞協議」。' }
  ],
  stones: ['mind'],
  related: ['civil-war', 'infinity-war', 'wandavision']
},
{
  id: 'doctor-strange', no: 12, title: '奇異博士', en: 'Doctor Strange', year: 2016,
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers', 'multiverse'],
  era: 'civil', chrono: 31, glyph: 'eye', accent: ['#0d9488', '#f59e0b'],
  relevance: 'recommended',
  tagline: '時間寶石與神秘學',
  summary: '傲慢的外科醫生史蒂芬史傳奇失去雙手功能後修習神秘學，擊敗黑暗次元的 Dormammu。阿加莫托之眼內藏時間寶石。',
  sections: [
    { h: '劇情', body: '傲慢的外科醫生史蒂芬史傳奇（Stephen Strange）失去雙手功能後修習神秘學，擊敗黑暗次元的 Dormammu。' },
    { h: '寶石', body: '阿加莫托之眼內藏時間寶石。', highlight: true },
    { h: '為什麼跟蜘蛛人4有關', body: '奇異博士就是《無家日》中替彼得施法的人 —— 那道「讓全世界忘記彼得帕克」的咒語，正是《蜘蛛人4》的前提。' }
  ],
  stones: ['time'],
  related: ['no-way-home', 'multiverse-of-madness', 'infinity-war']
},
{
  id: 'gotg-2', no: 13, title: '星際異攻隊2', en: 'Guardians of the Galaxy Vol. 2', year: 2017,
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['cosmic'],
  era: 'shield', chrono: 23, glyph: 'tree', accent: ['#c026d3', '#0891b2'],
  relevance: 'optional',
  tagline: '星爵的天神族血統',
  summary: '星爵之父「伊戈」是活體行星、也是反派。確立星爵的天神族血統；勇度犧牲。',
  sections: [
    { h: '劇情', body: '星爵之父「伊戈（Ego）」是活體行星、也是反派。確立星爵的天神族（Celestial）血統；勇度犧牲。' }
  ],
  related: ['gotg-1', 'gotg-3', 'eternals']
},
{
  id: 'thor-3', no: 14, title: '雷神索爾3：諸神黃昏', en: 'Thor: Ragnarok', year: 2017,
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers', 'cosmic'],
  era: 'civil', chrono: 33, glyph: 'hammer', accent: ['#a21caf', '#f59e0b'],
  relevance: 'optional',
  tagline: '直接接上《無限之戰》',
  summary: '死亡女神海拉奪取阿斯嘉。索爾放出蘇特爾毀滅阿斯嘉以殺死海拉。片尾薩諾斯的飛船攔截索爾一行。',
  sections: [
    { h: '劇情', body: '索爾的姊姊死亡女神海拉（Hela）奪取阿斯嘉。索爾放出火焰惡魔蘇特爾（Surtur）毀滅整個阿斯嘉以殺死海拉，領悟「阿斯嘉是人民、不是土地」。' },
    { h: '關鍵片尾', body: '片尾薩諾斯的飛船攔截索爾一行，直接接上《無限之戰》。', highlight: true }
  ],
  related: ['infinity-war', 'thor-2', 'thor-4']
},
{
  id: 'black-panther', no: 15, title: '黑豹', en: 'Black Panther', year: 2018,
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers'],
  era: 'civil', chrono: 32, glyph: 'panther', accent: ['#4c1d95', '#0f172a'],
  relevance: 'optional',
  tagline: '汎達與汎金屬',
  summary: "T'Challa 成為汎達國王與黑豹。反派齊爾蒙格是他的美籍表弟。T'Challa 決定向世界開放汎達。",
  sections: [
    { h: '劇情', body: "T'Challa 成為汎達（Wakanda，藏有超級金屬「汎金屬 vibranium」的非洲國家）國王與黑豹。反派齊爾蒙格（Killmonger）是他的美籍表弟。T'Challa 決定向世界開放汎達。" }
  ],
  related: ['civil-war', 'infinity-war', 'wakanda-forever']
},
{
  id: 'captain-marvel', no: 16, title: '驚奇隊長', en: 'Captain Marvel', year: 2019,
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['cosmic'],
  era: 'y1995', chrono: 1995, glyph: 'starburst', accent: ['#1d4ed8', '#dc2626'],
  relevance: 'optional',
  tagline: '1995 年、「復仇者」名稱由來',
  summary: '卡蘿丹佛斯因特斯拉方塊能量爆炸而獲得超能力。揭露史克魯人其實是難民，真反派是克里帝國。',
  sections: [
    { h: '劇情', body: '1995 年背景。卡蘿丹佛斯（Carol Danvers）因特斯拉方塊（空間寶石）能量爆炸而獲得超能力。揭露變形種族史克魯人（Skrull）其實是難民，真反派是克里帝國。' },
    { h: '關鍵設定', body: '引入年輕的尼克福瑞（本片中失去一隻眼睛），並解釋「復仇者」名稱由來。', highlight: true }
  ],
  stones: ['space'],
  related: ['the-marvels', 'endgame', 'avengers-1']
},

/* ============ 蜘蛛人首登場 / 復仇者四部曲 ============ */
{
  id: 'civil-war', no: 17, title: '美國隊長3：英雄內戰', en: 'Captain America: Civil War', year: 2016,
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers', 'spidey'],
  era: 'civil', chrono: 30, glyph: 'shield', accent: ['#1e40af', '#dc2626'],
  relevance: 'core', stars: 4, group: 'avengers4',
  tagline: '蜘蛛人首度登場・補課起點',
  summary: '復仇者因「索科維亞協議」分裂成兩派。同時是彼得帕克的首度登場，奠定東尼＝彼得的「導師／父子」關係。',
  sections: [
    { h: '劇情主線', body: '因「索科維亞協議」，復仇者分裂為鋼鐵人陣營（贊成政府管制）與美隊陣營（反對）。幕後黑手齊莫（Zemo）揭露巴奇當年被九頭蛇操控、殺害了東尼的父母，東尼與隊長徹底決裂。本片同時引入黑豹與蜘蛛人。' },
    { h: '彼得帕克首度登場', body: '彼得帕克（Peter Parker）在此片首度登場。鋼鐵人東尼史塔克（Tony Stark）找到這位住在皇后區、被蜘蛛咬到而獲得超能力的高中生，招募他加入「鋼鐵人陣營」對抗美國隊長。', highlight: true },
    { h: '為什麼是補課起點', body: '這奠定了東尼＝彼得「導師／父子」關係，貫穿整個三部曲。此時 May 嬸嬸由 Marisa Tomei 飾演（比原著年輕許多）。' }
  ],
  related: ['homecoming', 'age-of-ultron', 'infinity-war', 'winter-soldier']
},
{
  id: 'homecoming', no: 18, title: '蜘蛛人：返校日', en: 'Spider-Man: Homecoming', year: 2017,
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['spidey'],
  era: 'civil', chrono: 34, glyph: 'wing', accent: ['#dc2626', '#0e7490'],
  relevance: 'core', stars: 3,
  tagline: '親切的鄰居蜘蛛人',
  summary: '15 歲的彼得渴望證明自己，但東尼要他先當好「親切的鄰居蜘蛛人」。反派禿鷹是漫威最有說服力的反派之一。',
  sections: [
    { h: '主線', body: '15 歲的彼得渴望證明自己、想加入復仇者，但東尼要他先當好「friendly neighborhood Spider-Man（親切的鄰居蜘蛛人）」。' },
    { h: '反派禿鷹（Vulture / Adrian Toomes，Michael Keaton 飾）', body: '原是清理紐約戰後廢墟的包商，生意被史塔克的「損害管制部門（Damage Control）」搶走，憤而利用外星（奇塔黎）科技打造飛行裝與武器，走私軍火維生。動機是「為家人生計、痛恨史塔克這種權貴」，是漫威最有說服力的反派之一。' },
    { h: '經典轉折', body: '彼得要帶心儀的女生 Liz 去返校舞會，去接她時開門的竟是 Liz 的爸爸 —— 就是禿鷹本人。禿鷹在車上識破彼得的身分，威脅他別擋自己的路。', highlight: true },
    { h: '配角', body: '好友 Ned Leeds（Jacob Batalon，胖胖的「搞笑軍師」）、同學 MJ（Michelle Jones，Zendaya 飾）、愛嗆彼得的 Flash Thompson、史塔克的保鑣兼司機 Happy Hogan（Jon Favreau）。' },
    { h: '結局', body: '彼得阻止禿鷹搶劫史塔克的貨機，並在墜機後救了禿鷹一命。東尼提議讓他正式加入復仇者，彼得婉拒，選擇繼續當高中生英雄。片尾 May 嬸嬸撞見他穿著戰衣。' },
    { h: '彩蛋（連到蜘蛛人4）', body: '入獄的禿鷹遇到 Mac Gargan（Michael Mando 飾，即漫畫中的「蠍子」），禿鷹選擇不透露蜘蛛人身分以報答救命之恩。註：Michael Mando 已確認回歸《蜘蛛人4》，蠍子可能成為反派之一。', highlight: true }
  ],
  related: ['civil-war', 'far-from-home', 'spider-man-4', 'avengers-1']
},
{
  id: 'infinity-war', no: 19, title: '復仇者聯盟3：無限之戰', en: 'Avengers: Infinity War', year: 2018,
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers', 'cosmic'],
  era: 'snap', chrono: 40, glyph: 'gauntlet', accent: ['#7e22ce', '#f0b429'],
  relevance: 'recommended', group: 'avengers4',
  tagline: '漫威史上最震撼的「反派獲勝」結局',
  summary: '薩諾斯集齊六顆寶石、彈指消滅半數生命 —— 包含蜘蛛人與黑豹。',
  sections: [
    { h: '劇情', body: '薩諾斯（Thanos）為了「解決宇宙資源不足」而要集齊六寶石、彈指消滅半數生命。' },
    { h: '靈魂寶石的代價', body: '他在沃米爾星犧牲養女葛摩菈換取靈魂寶石。' },
    { h: '心靈寶石', body: '緋紅女巫忍痛摧毀幻視額上的心靈寶石，但薩諾斯用時間寶石倒轉、硬生生挖出寶石。' },
    { h: '結局', body: '薩諾斯集齊六顆、彈指成功，半數生命（含蜘蛛人、黑豹等）化為灰燼。這是漫威史上最震撼的「反派獲勝」結局。', highlight: true },
    { h: '為什麼跟蜘蛛人4有關', body: '指南建議：若時間允許，務必在《終局之戰》前補上本片，才能完全理解「彈指」與時間旅行的來龍去脈。' }
  ],
  stones: ['space', 'reality', 'power', 'mind', 'time', 'soul'],
  related: ['endgame', 'thor-3', 'age-of-ultron', 'far-from-home']
},
{
  id: 'endgame', no: 20, title: '復仇者聯盟4：終局之戰', en: 'Avengers: Endgame', year: 2019,
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers'],
  era: 'endgame', chrono: 50, glyph: 'gauntlet', accent: ['#b45309', '#1e3a8a'],
  relevance: 'core', group: 'avengers4',
  tagline: '無限傳奇就此完結',
  summary: '五年後，倖存的復仇者透過量子領域進行時間旅行蒐集寶石。東尼史塔克戴上手套彈指、犧牲自己。',
  sections: [
    { h: '時間搶劫', body: '五年後，倖存的復仇者透過蟻人帶回的「量子領域」進行時間旅行（Time Heist / 時間搶劫），回到過去各時間點蒐集寶石。' },
    { h: '黑寡婦的犧牲', body: '黑寡婦在沃米爾星犧牲自己換取靈魂寶石。他們用自製手套彈指救回所有人。' },
    { h: '東尼史塔克之死', body: '最終決戰中，鋼鐵人東尼史塔克戴上手套彈指，消滅薩諾斯大軍，但自己也因能量反噬而犧牲。', highlight: true },
    { h: '美國隊長的結局', body: '美國隊長把返還寶石的任務完成後，選擇留在過去與摯愛佩姬（Peggy Carter）共度餘生，年老後回到現在把盾牌交給獵鷹山姆威爾森（Sam Wilson）。無限傳奇就此完結。' },
    { h: '為什麼跟蜘蛛人4有關', body: '東尼之死是彼得在《離家日》中「誰來接班鋼鐵人」壓力與哀傷的源頭 —— 這條情緒線一路延伸到《蜘蛛人4》的孤獨。' }
  ],
  stones: ['space', 'reality', 'power', 'mind', 'time', 'soul'],
  related: ['infinity-war', 'far-from-home', 'falcon-winter-soldier', 'loki']
},

/* ============ 蜘蛛人三部曲 2 & 3 ============ */
{
  id: 'far-from-home', no: 21, title: '蜘蛛人：離家日', en: 'Spider-Man: Far From Home', year: 2019,
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['spidey'],
  era: 'after', chrono: 60, glyph: 'fishbowl', accent: ['#7c3aed', '#16a34a'],
  relevance: 'core', stars: 4,
  tagline: '身分曝光的引爆點',
  summary: '東尼已死，彼得深陷接班壓力。神秘客用全像投影騙局奪取 EDITH，死前公布彼得帕克就是蜘蛛人。',
  sections: [
    { h: '時間點', body: '發生在《終局之戰》之後。東尼史塔克已死，彼得深陷「誰來接班鋼鐵人」的壓力與哀傷。' },
    { h: 'EDITH', body: '東尼留給彼得的遺物 —— 一副智慧眼鏡，能存取全球裝置並操控一整批攻擊無人機。' },
    { h: '反派神秘客（Mysterio / Quentin Beck，Jake Gyllenhaal 飾）', body: '他謊稱自己來自平行宇宙、是對抗「元素怪」的英雄。真相是他是被史塔克羞辱的前員工，用全像投影科技製造假怪獸、假扮英雄，目的是騙取 EDITH 的權限。' },
    { h: '結局', body: '彼得識破騙局，在倫敦擊敗神秘客，神秘客被自己的無人機誤射身亡。彼得把 EDITH 留給自己，並與 MJ 相戀。' },
    { h: '關鍵片尾彩蛋（極重要）', body: '神秘客死前錄好的假影片被公開 —— 影片誣陷蜘蛛人是殺害神秘客的兇手，並向全世界公布彼得帕克就是蜘蛛人。這段由《號角日報》（TheDailyBugle.net）的 J. Jonah Jameson（J.K. Simmons 飾，即當年托比版電影的同一演員）播出。這個「身分曝光」直接引爆下一集。', highlight: true }
  ],
  related: ['no-way-home', 'endgame', 'homecoming']
},
{
  id: 'no-way-home', no: 22, title: '蜘蛛人：無家日', en: 'Spider-Man: No Way Home', year: 2021,
  type: 'film', phase: 'Phase 4', saga: 'multiverse', cats: ['spidey', 'multiverse'],
  era: 'after', chrono: 70, glyph: 'portal', accent: ['#dc2626', '#7c3aed'],
  relevance: 'core', stars: 5, mustRead: true,
  tagline: '《蜘蛛人4》的直接前傳・務必看懂',
  summary: '咒語失控撕裂多元宇宙，五大反派與三代蜘蛛人同框。結局：全世界的每一個人都忘記彼得帕克 —— 這正是新片的起點。',
  sections: [
    { h: '開場', body: '承接上集，全世界都知道彼得是蜘蛛人，他和 MJ、Ned、May 的生活全被打亂，連上大學（MIT）都受影響。' },
    { h: '奇異博士的咒語', body: '彼得求助奇異博士（Doctor Strange），希望施法讓全世界忘記「彼得帕克是蜘蛛人」。但彼得在施法過程中反覆干擾（想保留讓親友記得），導致咒語失控，撕裂多元宇宙，把其他宇宙中「知道蜘蛛人身分的人」全都吸進本宇宙。', highlight: true },
    { h: '五大反派的來歷（來自舊蜘蛛人電影的其他宇宙）', list: [
      '八爪博士（Doc Ock / Otto Octavius，Alfred Molina）：來自托比版《蜘蛛人2》，機械觸手與身體融合的科學家。',
      '綠惡魔（Green Goblin / Norman Osborn，Willem Dafoe）：來自托比版《蜘蛛人1》，實驗超級士兵血清後人格分裂、發狂。本片最大反派。',
      '電光人（Electro / Max Dillon，Jamie Foxx）：來自加菲版《驚奇再起2》，能操控電力。',
      '沙人（Sandman / Flint Marko，Thomas Haden Church）：來自托比版《蜘蛛人3》，身體化為沙。',
      '蜥蜴人（Lizard / Curt Connors，Rhys Ifans）：來自加菲版《驚奇再起1》，變成巨蜥的科學家。'
    ]},
    { h: '關鍵抉擇', body: '彼得決定不把反派送回原宇宙等死（因為他們回去都會死於與蜘蛛人的對決），而要「治好」他們。' },
    { h: 'May 嬸嬸之死', body: '在治療過程中，綠惡魔人格奪回控制權、煽動其他反派背叛彼得，並重傷 May 嬸嬸。臨終前，May 對彼得說出那句蜘蛛人的核心信條：「能力愈強，責任愈大（With great power there must also come great responsibility）」—— 這是本宇宙彼得的「班叔精神」由來。', highlight: true },
    { h: '托比與加菲登場', body: 'Ned 意外用奇異博士的法器開啟傳送門，召來另外兩個宇宙的彼得帕克 —— 托比馬奎爾版（Peter-Two，用天生的有機吐絲）與安德魯加菲版（Peter-Three）。三代蜘蛛人聯手治好五名反派。加菲版蜘蛛人在自由女神像大戰中接住墜落的 MJ，療癒了他當年沒能救回女友關史黛西（Gwen Stacy）的創傷。' },
    { h: '結局（《蜘蛛人4》的直接起點）', body: '多元宇宙的破口越來越大，越來越多外來者湧入。彼得意識到唯一的辦法，是請奇異博士施展終極咒語 —— 讓「全世界的每一個人」都忘記彼得帕克這個人的存在，包括 MJ 和 Ned。咒語成功，多元宇宙的訪客都被送回各自的世界。彼得成了一個「沒有人記得」的孤兒，獨自租了間小公寓，決定暫不去恢復 MJ 與 Ned 的記憶，選擇默默守護他們、重新做人。', highlight: true },
    { h: '這對《蜘蛛人4》的意義', body: '根據 Sony 釋出的官方大綱，《蜘蛛人4》設定在《無家日》結局的四年後，彼得已是「一個完全獨自生活的成年人，自願把自己從所愛之人的生命與記憶中抹除（an adult living entirely alone, having voluntarily erased himself from the lives and memories of those he loves）」，MJ 和 Ned 對他毫無印象。' }
  ],
  related: ['spider-man-4', 'far-from-home', 'doctor-strange', 'raimi-1', 'webb-2', 'multiverse-of-madness']
},

/* ============ 多元宇宙傳奇：影集 ============ */
{
  id: 'wandavision', no: 23, title: '汪達幻視', en: 'WandaVision', year: 2021,
  type: 'series', phase: 'Phase 4', saga: 'multiverse', cats: ['series', 'multiverse'],
  era: 'after', chrono: 55, glyph: 'hex', accent: ['#be123c', '#7c3aed'],
  relevance: 'recommended', must: true,
  tagline: '緋紅女巫的黑化・建議必看',
  summary: '汪達因喪夫之痛，用魔法在小鎮創造出幻視與兩個兒子的假象。接觸黑暗神書後正式黑化成「緋紅女巫」。',
  sections: [
    { h: '劇情', body: '緋紅女巫因喪夫之痛，用魔法在小鎮創造出幻視與兩個兒子（Billy、Tommy）的假象。' },
    { h: '關鍵黑化', body: '她接觸黑暗魔法書「黑暗神書（Darkhold）」，正式黑化成「緋紅女巫」。是《奇異博士2》的前傳。建議必看。', highlight: true }
  ],
  related: ['multiverse-of-madness', 'age-of-ultron', 'the-marvels']
},
{
  id: 'loki', no: 24, title: '洛基 第一、二季', en: 'Loki (S1 & S2)', year: 2021,
  type: 'series', phase: 'Phase 4', saga: 'multiverse', cats: ['series', 'multiverse'],
  era: 'after', chrono: 56, glyph: 'tva', accent: ['#f59e0b', '#166534'],
  relevance: 'recommended', must: true,
  tagline: '多元宇宙傳奇最重要的影集',
  summary: '引入 TVA、神聖時間線與留存者。Sylvie 殺死留存者，正式開啟多元宇宙 —— 整個傳奇的引爆點。',
  sections: [
    { h: '核心設定', body: '引入「時間變異管理局（TVA）」、「神聖時間線」與幕後大魔王「留存者（He Who Remains）」—— 征服者康（Kang）的一個變體。' },
    { h: '第一季結局：引爆點', body: '洛基的女性變體 Sylvie 殺死留存者，正式開啟多元宇宙，也是整個傳奇的引爆點。', highlight: true },
    { h: '第二季', body: '洛基犧牲自己成為維繫多元宇宙的「故事之神」。' },
    { h: '官方建議', body: '漫威已公開表示《洛基》是《末日之戰》前最該補的影集。', highlight: true }
  ],
  related: ['thor', 'quantumania', 'doomsday', 'deadpool-wolverine']
},
{
  id: 'what-if', no: 25, title: 'What If...?', en: 'What If...?', year: 2021,
  type: 'series', phase: 'Phase 4', saga: 'multiverse', cats: ['series', 'multiverse'],
  era: 'after', chrono: 57, glyph: 'question', accent: ['#7c3aed', '#f59e0b'],
  relevance: 'optional',
  tagline: '動畫・確立變體概念',
  summary: '動畫影集，確立多元宇宙與各種角色變體概念。',
  sections: [
    { h: '劇情', body: '動畫影集。確立多元宇宙與各種角色變體（Variant）概念 —— 同一角色在不同宇宙的不同版本。' },
    { h: '為什麼有幫助', body: '想快速理解「為什麼會有三個彼得帕克」，這部動畫是最輕鬆的入門。' }
  ],
  related: ['loki', 'no-way-home', 'multiverse-of-madness']
},
{
  id: 'falcon-winter-soldier', no: 26, title: '獵鷹與酷寒戰士', en: 'The Falcon and the Winter Soldier', year: 2021,
  type: 'series', phase: 'Phase 4', saga: 'multiverse', cats: ['series'],
  era: 'after', chrono: 54, glyph: 'shield', accent: ['#0e7490', '#b91c1c'],
  relevance: 'recommended',
  tagline: '山姆成為美國隊長',
  summary: '《美國隊長4》的前傳 —— 山姆威爾森接下盾牌的過程。指南列為「建議看」。',
  sections: [
    { h: '劇情', body: '山姆威爾森接下美國隊長盾牌的過程，同時引入美國密探 John Walker。' },
    { h: '指南定位', body: '建議看：是《美國隊長4》的前傳。' }
  ],
  related: ['brave-new-world', 'endgame', 'thunderbolts']
},
{
  id: 'ms-marvel', no: 27, title: '驚奇女士', en: 'Ms. Marvel', year: 2022,
  type: 'series', phase: 'Phase 4', saga: 'multiverse', cats: ['series'],
  era: 'expand', chrono: 80, glyph: 'starburst', accent: ['#dc2626', '#0891b2'],
  relevance: 'optional',
  tagline: '首度確認 MCU 變種人存在',
  summary: '卡瑪拉可汗的故事。是《驚奇隊長2》的前傳，且首度確認 MCU 中變種人（mutant）的存在。',
  sections: [
    { h: '劇情', body: '少女卡瑪拉可汗（Kamala Khan）獲得能力成為驚奇女士。' },
    { h: '關鍵設定', body: '是《驚奇隊長2》前傳，且首度確認 MCU 變種人存在。', highlight: true },
    { h: '指南定位', body: '對《蜘蛛人4》主線關聯低，但若想追 X 戰警線值得一看。' }
  ],
  related: ['the-marvels', 'deadpool-wolverine']
},
{
  id: 'skippable-series', no: 28, title: '可跳過的影集群', en: 'Hawkeye / Moon Knight / Secret Invasion / She-Hulk', year: 2021,
  type: 'series', phase: 'Phase 4', saga: 'multiverse', cats: ['series'],
  era: 'expand', chrono: 81, glyph: 'skip', accent: ['#475569', '#1e293b'],
  relevance: 'skippable',
  tagline: '對蜘蛛人4可跳過',
  summary: '《鷹眼》《月光騎士》《祕密入侵》《律師女浩克》—— 與蜘蛛人主線關聯低，補課時可直接跳過。',
  sections: [
    { h: '指南定位', body: '對《蜘蛛人4》可跳過：《鷹眼》《月光騎士》《祕密入侵》《律師女浩克》等，與蜘蛛人主線關聯低。' },
    { h: '例外', body: '同一批影集中，《驚奇女士》是唯一建議留意的 —— 它是《驚奇隊長2》前傳，且首度確認 MCU 變種人存在。' }
  ],
  related: ['ms-marvel']
},

/* ============ 多元宇宙傳奇：電影主線 ============ */
{
  id: 'black-widow', no: 29, title: '黑寡婦', en: 'Black Widow', year: 2021,
  type: 'film', phase: 'Phase 4', saga: 'multiverse', cats: ['avengers'],
  era: 'civil', chrono: 35, glyph: 'widow', accent: ['#111827', '#b91c1c'],
  relevance: 'optional',
  tagline: '為《雷霆特攻隊》鋪路',
  summary: '黑寡婦的前傳，介紹妹妹葉蓮娜與「紅屋」洗腦組織。片尾引入關鍵人物瓦倫提娜。',
  sections: [
    { h: '劇情', body: '黑寡婦的前傳，介紹妹妹葉蓮娜（Yelena Belova）與「紅屋」洗腦組織。' },
    { h: '關鍵片尾', body: '片尾引入關鍵人物瓦倫提娜（Valentina / Val），為《雷霆特攻隊＊》鋪路。', highlight: true }
  ],
  related: ['thunderbolts', 'endgame']
},
{
  id: 'shang-chi', no: 30, title: '尚氣與十環傳奇', en: 'Shang-Chi and the Legend of the Ten Rings', year: 2021,
  type: 'film', phase: 'Phase 4', saga: 'multiverse', cats: ['avengers'],
  era: 'after', chrono: 65, glyph: 'rings', accent: ['#b45309', '#065f46'],
  relevance: 'recommended',
  tagline: '《蜘蛛人4》導演的前作',
  summary: '尚氣對抗持有「十環」的父親文武。導演 Destin Daniel Cretton 正是《蜘蛛人4》的導演。',
  sections: [
    { h: '劇情', body: '尚氣對抗持有「十環」的父親文武。' },
    { h: '為什麼跟蜘蛛人4有關', body: '導演 Destin Daniel Cretton 正是《蜘蛛人4》的導演 —— 想預先感受新片的敘事風格，這是最直接的參考。', highlight: true }
  ],
  related: ['spider-man-4', 'iron-man-3']
},
{
  id: 'eternals', no: 31, title: '永恆族', en: 'Eternals', year: 2021,
  type: 'film', phase: 'Phase 4', saga: 'multiverse', cats: ['cosmic'],
  era: 'after', chrono: 66, glyph: 'celestial', accent: ['#0d9488', '#a16207'],
  relevance: 'optional',
  tagline: '天神島與精金的來源',
  summary: '永恆族阻止天神族提亞穆特從地球誕生。這具石化天神成為《美國隊長4》中的「天神島」，開採後產出精金。',
  sections: [
    { h: '劇情', body: '不朽的永恆族阻止天神族「提亞穆特（Tiamut）」從地球誕生，最後把半浮出印度洋的提亞穆特石化。' },
    { h: '關鍵伏筆', body: '這具石化天神成為《美國隊長4》中的「天神島」，開採後產出比汎金屬更強的金屬「精金（Adamantium）」（與 X 戰警／金鋼狼相關）。', highlight: true }
  ],
  related: ['brave-new-world', 'gotg-2', 'deadpool-wolverine']
},
{
  id: 'multiverse-of-madness', no: 32, title: '奇異博士2：失控多重宇宙', en: 'Doctor Strange in the Multiverse of Madness', year: 2022,
  type: 'film', phase: 'Phase 4', saga: 'multiverse', cats: ['multiverse'],
  era: 'after', chrono: 72, glyph: 'eye', accent: ['#7c3aed', '#be123c'],
  relevance: 'optional',
  tagline: '光照會與緋紅女巫的終局',
  summary: '奇異博士保護能穿越多元宇宙的少女 America Chavez，對抗被黑暗神書腐化的緋紅女巫。片中出現「光照會」。',
  sections: [
    { h: '劇情', body: '奇異博士保護能穿越多元宇宙的少女 America Chavez，對抗被黑暗神書腐化、想奪取其能力去與另一宇宙孩子團聚的緋紅女巫。' },
    { h: '多元宇宙變體', body: '片中出現「光照會（Illuminati）」等多元宇宙變體。' },
    { h: '結局', body: '緋紅女巫最後摧毀所有黑暗神書、疑似犧牲。' },
    { h: '指南定位', body: '目前跡象顯示《蜘蛛人4》不會有大量多元宇宙內容，因此本片列為選看；若正式預告出現大量末日博士／多元宇宙內容，才需要優先補這部。' }
  ],
  related: ['wandavision', 'no-way-home', 'doctor-strange']
},
{
  id: 'thor-4', no: 33, title: '雷神索爾4：愛與雷霆', en: 'Thor: Love and Thunder', year: 2022,
  type: 'film', phase: 'Phase 4', saga: 'multiverse', cats: ['cosmic'],
  era: 'after', chrono: 73, glyph: 'hammer', accent: ['#db2777', '#0891b2'],
  relevance: 'optional',
  tagline: '女雷神與屠神者',
  summary: '反派屠神者格爾。雷神女友 Jane 成為「女雷神」但因癌症去世。',
  sections: [
    { h: '劇情', body: '反派屠神者格爾（Gorr）。雷神女友 Jane 成為「女雷神」但因癌症去世。' }
  ],
  related: ['thor-3', 'thor-2']
},
{
  id: 'wakanda-forever', no: 34, title: '黑豹2：汎達萬歲', en: 'Black Panther: Wakanda Forever', year: 2022,
  type: 'film', phase: 'Phase 4', saga: 'multiverse', cats: ['avengers'],
  era: 'after', chrono: 74, glyph: 'panther', accent: ['#4c1d95', '#0e7490'],
  relevance: 'optional',
  tagline: '向 Chadwick Boseman 致敬',
  summary: '反派是海底王國的納摩。妹妹 Shuri 成為新黑豹。引入鋼鐵心 Riri Williams。',
  sections: [
    { h: '劇情', body: '向已故演員 Chadwick Boseman 致敬。反派是海底王國的納摩（Namor）。妹妹 Shuri 成為新黑豹。引入鋼鐵心（Riri Williams）。' }
  ],
  related: ['black-panther']
},
{
  id: 'quantumania', no: 35, title: '蟻人與黃蜂女：量子狂潮', en: 'Ant-Man and the Wasp: Quantumania', year: 2023,
  type: 'film', phase: 'Phase 5', saga: 'multiverse', cats: ['multiverse'],
  era: 'expand', chrono: 82, glyph: 'ant', accent: ['#0891b2', '#4c1d95'],
  relevance: 'optional', warning: true,
  tagline: '康的退場・重要背景',
  summary: '於量子領域對抗征服者康。原本設定康是多元宇宙傳奇的大魔王，但因演員官司定罪，漫威棄用康、改由末日博士接棒。',
  sections: [
    { h: '劇情', body: '於量子領域對抗「征服者康（Kang）」。' },
    { h: '為什麼很重要（資訊更新）', body: '原本設定康是多元宇宙傳奇的大魔王（片尾出現「康議會」），但因演員 Jonathan Majors 於 2023 年官司定罪，漫威棄用康、改由末日博士接棒。', highlight: true },
    { h: '避免誤會', body: '不要把康當成《末日之戰》的反派 —— 任何這樣說的舊資料都已過時。', highlight: true }
  ],
  related: ['loki', 'doomsday']
},
{
  id: 'gotg-3', no: 36, title: '星際異攻隊3', en: 'Guardians of the Galaxy Vol. 3', year: 2023,
  type: 'film', phase: 'Phase 5', saga: 'multiverse', cats: ['cosmic'],
  era: 'expand', chrono: 83, glyph: 'tree', accent: ['#ea580c', '#0d9488'],
  relevance: 'optional',
  tagline: '異攻隊解散',
  summary: '對抗改造火箭浣熊的反派「至高進化」。結局異攻隊解散，火箭成為新隊長。',
  sections: [
    { h: '劇情', body: '對抗改造火箭浣熊的反派「至高進化（High Evolutionary）」。結局異攻隊解散，火箭成為新隊長。' }
  ],
  related: ['gotg-1', 'gotg-2']
},
{
  id: 'the-marvels', no: 37, title: '驚奇隊長2：奇光救援', en: 'The Marvels', year: 2023,
  type: 'film', phase: 'Phase 5', saga: 'multiverse', cats: ['cosmic', 'multiverse'],
  era: 'expand', chrono: 84, glyph: 'starburst', accent: ['#1d4ed8', '#db2777'],
  relevance: 'optional',
  tagline: '正式確認 X 戰警宇宙',
  summary: '三人能力糾纏被迫換位。莫妮卡犧牲自己封閉時空裂縫、被困在另一個宇宙 —— 片尾彩蛋出現 X 戰警的野獸。',
  sections: [
    { h: '劇情', body: '卡蘿丹佛斯、驚奇少女卡瑪拉可汗（Kamala Khan / Ms. Marvel）、莫妮卡（Monica Rambeau）三人能力糾纏、被迫換位。莫妮卡犧牲自己封閉時空裂縫、被困在另一個宇宙。' },
    { h: '片尾彩蛋', body: '莫妮卡在平行宇宙醒來，身旁出現 X 戰警的「野獸（Beast，Kelsey Grammer 飾）」，正式確認 X 戰警／變種人宇宙的存在。', highlight: true }
  ],
  related: ['captain-marvel', 'ms-marvel', 'wandavision', 'deadpool-wolverine']
},
{
  id: 'deadpool-wolverine', no: 38, title: '死侍與金鋼狼', en: 'Deadpool & Wolverine', year: 2024,
  type: 'film', phase: 'Phase 5', saga: 'multiverse', cats: ['multiverse'],
  era: 'expand', chrono: 85, glyph: 'claw', accent: ['#b91c1c', '#f59e0b'],
  relevance: 'optional',
  tagline: 'X 戰警正式加入 MCU',
  summary: 'R 級喜劇。死侍與金鋼狼透過 TVA 進入多元宇宙，對抗 Cassandra Nova。把福斯時代的 X 戰警角色正式帶入 MCU。',
  sections: [
    { h: '劇情', body: 'R 級喜劇。死侍與金鋼狼透過 TVA 進入多元宇宙，對抗想用「時間撕裂器（Time Ripper）」毀滅多元宇宙的 Cassandra Nova。' },
    { h: '為什麼重要', body: '本片把福斯時代的 X 戰警角色正式帶入 MCU，是多元宇宙融合的重要一步。', highlight: true },
    { h: '指南定位', body: '列為選看。只有在《蜘蛛人4》正式預告顯示大量多元宇宙內容時，才需要優先補這部與《奇異博士2》。' }
  ],
  related: ['loki', 'the-marvels', 'doomsday', 'eternals']
},

/* ============ 2025：與蜘蛛人4 同屬 Phase 5/6 ============ */
{
  id: 'brave-new-world', no: 39, title: '美國隊長4：勇敢新世界', en: 'Captain America: Brave New World', year: 2025,
  type: 'film', phase: 'Phase 5', saga: 'multiverse', cats: ['avengers'],
  era: 'expand', chrono: 90, glyph: 'shield', accent: ['#1e40af', '#dc2626'],
  relevance: 'optional', upcoming: true,
  tagline: '17 年伏筆回收：紅浩克',
  summary: '山姆威爾森正式成為美國隊長。羅斯總統被智謀者餵食伽瑪藥丸多年，最後在白宮前失控變身紅浩克。',
  sections: [
    { h: '劇情', body: '山姆威爾森正式成為美國隊長。哈里遜福特飾演的新任美國總統羅斯（Thaddeus Ross）被反派「智謀者（The Leader / Samuel Sterns，接續 2008《無敵浩克》伏筆）」餵食伽瑪藥丸多年，最後在白宮前失控變身紅浩克（Red Hulk）。', highlight: true },
    { h: '結局', body: '山姆最終冷靜化解、羅斯自首入獄。' },
    { h: '關鍵設定', body: '片中出現「天神島」與「精金」等連結永恆族與未來 X 戰警的設定。' }
  ],
  related: ['incredible-hulk', 'falcon-winter-soldier', 'eternals', 'thunderbolts']
},
{
  id: 'thunderbolts', no: 40, title: '雷霆特攻隊＊', en: 'Thunderbolts* / The New Avengers', year: 2025,
  type: 'film', phase: 'Phase 5', saga: 'multiverse', cats: ['avengers'],
  era: 'expand', chrono: 91, glyph: 'bolt', accent: ['#dc2626', '#111827'],
  relevance: 'optional', upcoming: true,
  tagline: '新復仇者成軍',
  summary: '瓦倫提娜召集一群反英雄。核心是擁有哨兵／虛空力量、心理脆弱的 Bob。片尾這支隊伍被命名為「新復仇者」。',
  sections: [
    { h: '劇情', body: '瓦倫提娜召集一群反英雄（葉蓮娜、紅衛兵、幽靈、美國密探 John Walker、巴奇等）。核心是擁有「哨兵（Sentry）／虛空（Void）」超強力量、心理脆弱的 Bob。' },
    { h: '片名的星號', body: '片尾這支隊伍被瓦倫提娜命名為「新復仇者（New Avengers）」，片名的星號正式改為 The New Avengers。', highlight: true },
    { h: '彩蛋', body: '彩蛋中天空裂開、出現印有「4」標誌的太空船，接上驚奇 4 超人。' }
  ],
  related: ['black-widow', 'fantastic-four', 'brave-new-world', 'doomsday']
},
{
  id: 'fantastic-four', no: 41, title: '驚奇4超人：第一步', en: 'The Fantastic Four: First Steps', year: 2025,
  type: 'film', phase: 'Phase 6', saga: 'multiverse', cats: ['multiverse', 'cosmic'],
  era: 'expand', chrono: 92, glyph: 'four', accent: ['#1d4ed8', '#f59e0b'],
  relevance: 'optional', upcoming: true,
  tagline: '末日博士首度現身',
  summary: '設定在復古風的平行宇宙 Earth-828。中段彩蛋：手持末日博士銀色面具的神秘披風人物出現，直接鋪陳《末日之戰》。',
  sections: [
    { h: '劇情', body: '設定在復古風的平行宇宙 Earth-828。驚奇 4 超人（Reed Richards、Sue Storm、Johnny Storm、Ben Grimm）對抗吞星（Galactus）與銀色衝浪手。' },
    { h: '中段彩蛋（關鍵）', body: '時間快轉四年後，一名手持末日博士銀色面具的神秘披風人物（末日博士，小勞勃道尼飾）出現在 Sue 的兒子 Franklin 身邊，直接鋪陳《末日之戰》。', highlight: true }
  ],
  related: ['doomsday', 'thunderbolts']
},

/* ============ 2026：蜘蛛人4 與末日之戰 ============ */
{
  id: 'spider-man-4', no: 42, title: '蜘蛛人4：Brand New Day', en: 'Spider-Man: Brand New Day', year: 2026,
  date: '2026 年 7 月 31 日',
  type: 'film', phase: 'Phase 6', saga: 'multiverse', cats: ['spidey'],
  era: 'future', chrono: 100, glyph: 'spider', accent: ['#dc2626', '#1d4ed8'],
  relevance: 'target', upcoming: true, isTarget: true,
  tagline: '你要看的那一部',
  summary: '《無家日》四年後。被世界遺忘、獨自作戰的彼得帕克，因蜘蛛基因突變失控而求助浩克，並與制裁者、神秘反派交手。',
  sections: [
    { h: '劇情設定（官方大綱）', body: '《無家日》結局四年後，彼得已成為一個「完全獨自生活的成年人，自願把自己從所愛之人的生命與記憶中抹除」，全職打擊犯罪，眼看昔日好友（MJ、Ned）在沒有他的世界中繼續生活。這份孤獨與壓力，加上他的蜘蛛基因進入某種「重生（rebirth）」階段開始突變、能力失控，促使他向布魯斯班納（浩克）尋求科學協助。', highlight: true },
    { h: '主要威脅', body: '「一名沒有人看得見的強大反派（a powerful villain no one can even see）」。基調比前作更黑暗、更寫實，回歸「紐約街頭英雄」路線。片尾以 007 式的字卡「Spider-Man Will Return」作結。' },
    { h: '與《末日之戰》的關係', body: '兩片同屬 Phase 6，《蜘蛛人4》先上映（早約五個月），可能為《末日之戰》的多元宇宙大集結預埋伏筆，但本身是獨立故事。' }
  ],
  related: ['no-way-home', 'doomsday', 'incredible-hulk', 'homecoming', 'shang-chi']
},
{
  id: 'doomsday', no: 43, title: '復仇者聯盟：末日之戰', en: 'Avengers: Doomsday', year: 2026,
  date: '2026 年 12 月 18 日',
  type: 'film', phase: 'Phase 6', saga: 'multiverse', cats: ['avengers', 'multiverse'],
  era: 'future', chrono: 110, glyph: 'doom', accent: ['#166534', '#a16207'],
  relevance: 'optional', upcoming: true,
  tagline: '三個宇宙的大集結',
  summary: '反派是由小勞勃道尼飾演的末日博士 —— 漫威近年最大膽的選角。集結原復仇者、新復仇者、驚奇4超人、汎達戰士與初代 X 戰警。',
  sections: [
    { h: '上映日期', body: '2026 年 12 月 18 日（在《蜘蛛人4》之後約五個月）。' },
    { h: '導演', body: '據《The Hollywood Reporter》，由 Joe Russo 與 Anthony Russo（Russo 兄弟，曾執導《無限之戰》《終局之戰》）執導。' },
    { h: '反派', body: '末日博士（Victor von Doom / Doctor Doom），由原鋼鐵人演員小勞勃道尼（Robert Downey Jr.）飾演 —— 漫威近年最大膽的選角。', highlight: true },
    { h: '官方大綱（Marvel.com 原文）', body: "「Beloved heroes from three distinct universes will be set on a deadly collision course and face an existential threat unlike anything they've ever encountered.」（來自三個不同宇宙的摯愛英雄將被推向致命的碰撞，面對他們前所未見的生存威脅。）" },
    { h: '集結陣容', body: '原復仇者、新復仇者（雷霆特攻隊）、驚奇 4 超人、汎達戰士與福斯時代的初代 X 戰警。' },
    { h: '續集', body: '《復仇者聯盟：秘密戰爭》預計 2027 年 12 月上映。' }
  ],
  related: ['spider-man-4', 'fantastic-four', 'thunderbolts', 'loki', 'quantumania', 'secret-wars']
},
{
  id: 'secret-wars', no: 44, title: '復仇者聯盟：秘密戰爭', en: 'Avengers: Secret Wars', year: 2027,
  date: '預計 2027 年 12 月',
  type: 'film', phase: 'Phase 6', saga: 'multiverse', cats: ['avengers', 'multiverse'],
  era: 'future', chrono: 120, glyph: 'star', accent: ['#4c1d95', '#b45309'],
  relevance: 'optional', upcoming: true,
  tagline: '多元宇宙傳奇的終點',
  summary: '《末日之戰》的續集，預計 2027 年 12 月上映 —— 多元宇宙傳奇的最終章。',
  sections: [
    { h: '目前已知', body: '《復仇者聯盟：秘密戰爭》是《末日之戰》的續集，預計 2027 年 12 月上映。這是多元宇宙傳奇（Multiverse Saga）規劃中的收尾之作。' },
    { h: '提醒', body: '本片尚未上映，細節請以官方後續公布為準。' }
  ],
  related: ['doomsday']
}

];
