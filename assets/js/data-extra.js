/* ============================================================
   MCU 完全指南 — 分類、概念、寶石、階段、觀影指南
   ============================================================ */

/* ---------- 傳奇與階段 ---------- */
window.MCU_SAGAS = [
  { id: 'infinity',   label: '無限傳奇 Infinity Saga',        sub: 'Phase 1–3・2008–2019・23 部電影', color: '#f0b429' },
  { id: 'multiverse', label: '多元宇宙傳奇 Multiverse Saga',  sub: 'Phase 4–6・2021–2027・電影與影集', color: '#a78bfa' },
  { id: 'oneshot',    label: 'Marvel One-Shots 一夜短片',      sub: '2011–2014・穿插在電影之間的短片', color: '#22d3ee' },
  { id: 'defenders',  label: '捍衛者聯盟 Defenders Saga',      sub: '2015–2019・已納入 Disney+ 官方時間軸', color: '#ef4444' },
  { id: 'marveltv',   label: 'Marvel Television 舊作',         sub: '2013–2020・正史地位模糊', color: '#64748b' },
  { id: 'sony',       label: 'Sony 舊蜘蛛人電影',              sub: '2002–2014・《無家日》引用的其他宇宙', color: '#fb923c' }
];

window.MCU_PHASES = [
  { id: 'Phase 1', label: 'Phase 1', years: '2008–2012', saga: 'infinity',
    desc: '英雄各自登場，最後集結成復仇者。核心是尼克福瑞的「復仇者計畫」與特斯拉方塊。' },
  { id: 'Phase 2', label: 'Phase 2', years: '2013–2015', saga: 'infinity',
    desc: '世界擴張到宇宙與量子領域，神盾局因九頭蛇滲透而瓦解，無限寶石逐一現形。' },
  { id: 'Phase 3', label: 'Phase 3', years: '2016–2019', saga: 'infinity',
    desc: '復仇者因索科維亞協議分裂，薩諾斯集齊六顆寶石彈指。以《終局之戰》與《離家日》收尾。' },
  { id: 'Phase 4', label: 'Phase 4', years: '2021–2022', saga: 'multiverse',
    desc: '後彈指時代。Disney+ 影集加入戰局，《洛基》按下多元宇宙的開關。' },
  { id: 'Phase 5', label: 'Phase 5', years: '2023–2025', saga: 'multiverse',
    desc: '多元宇宙擴張，X 戰警經《死侍與金鋼狼》併入 MCU，新復仇者成軍。' },
  { id: 'Phase 6', label: 'Phase 6', years: '2025–2027', saga: 'multiverse',
    desc: '驚奇 4 超人加入，末日博士登場，以《末日之戰》與《秘密戰爭》作結。' },
  { id: 'One-Shot', label: 'One-Shots', years: '2011–2014', saga: 'oneshot',
    desc: '隨藍光發行的短片，補完電影之間的空隙。' },
  { id: 'Defenders Saga', label: 'Defenders Saga', years: '2015–2019', saga: 'defenders',
    desc: 'Netflix 的街頭層級系列，已被 Disney+ 納入官方 MCU 時間軸。' },
  { id: 'Marvel TV', label: 'Marvel TV', years: '2013–2020', saga: 'marveltv',
    desc: '由已解散的 Marvel Television 製作，正史地位模糊。' },
  { id: '雷米三部曲', label: '山姆雷米三部曲', years: '2002–2007', saga: 'sony',
    desc: '托比馬奎爾主演。《無家日》中的綠惡魔、八爪博士與沙人都來自這個宇宙。' },
  { id: '驚奇再起兩部曲', label: '馬克韋布兩部曲', years: '2012–2014', saga: 'sony',
    desc: '安德魯加菲主演。《無家日》中的電光人與蜥蜴人來自這個宇宙，關史黛西之死也是他的救贖起點。' }
];

/* ---------- 分類（可複選篩選）---------- */
window.MCU_CATS = [
  { id: 'avengers',   label: '復仇者主線', color: '#f0b429' },
  { id: 'spidey',     label: '蜘蛛人',     color: '#ff4655' },
  { id: 'cosmic',     label: '宇宙／銀河', color: '#22d3ee' },
  { id: 'mystic',     label: '魔法／神秘', color: '#c084fc' },
  { id: 'street',     label: '街頭英雄',   color: '#f97316' },
  { id: 'multiverse', label: '多元宇宙',   color: '#a78bfa' },
  { id: 'series',     label: '影集',       color: '#34d399' },
  { id: 'animation',  label: '動畫',       color: '#38bdf8' }
];

/* ---------- 劇情年代分期 ---------- */
window.MCU_ERAS = [
  { id: 'ancient', label: '遠古・西元前 1260 年起', sub: '《汎達之眼》—— 官方時間軸上最早的作品' },
  { id: 'ww2',     label: '1943–1945・二戰',        sub: '超級士兵計畫與九頭蛇的起點' },
  { id: 'cold',    label: '1946–1994・神盾局草創',   sub: 'Peggy Carter 與神盾局的誕生' },
  { id: 'y1995',   label: '1995',                   sub: '尼克福瑞與宇宙的第一次接觸' },
  { id: 'rise',    label: '2010–2013・英雄崛起',     sub: '鋼鐵人到紐約大戰' },
  { id: 'shield',  label: '2014–2015・神盾局瓦解',   sub: '九頭蛇現形、異攻隊登場、量子領域開啟' },
  { id: 'civil',   label: '2016–2017・內戰與新血',   sub: '復仇者分裂、蜘蛛人與黑豹加入' },
  { id: 'snap',    label: '2018・無限之戰與彈指',     sub: '反派獲勝的結局' },
  { id: 'endgame', label: '2023・終局之戰',          sub: 'Blip 五年後的時間搶劫' },
  { id: 'after',   label: '2023–2025・終局之後',      sub: '多元宇宙開啟、咒語失控' },
  { id: 'expand',  label: '2025–2027・多元宇宙擴張',  sub: 'X 戰警回歸、新復仇者成軍' },
  { id: 'future',  label: '2027 以後',               sub: '蜘蛛人4、末日之戰與秘密戰爭' },
  { id: 'other',   label: '其他宇宙',                sub: 'Sony 蜘蛛人電影，非 MCU 主宇宙' }
];

/* ---------- TL;DR ---------- */
window.MCU_TLDR = [
  {
    h: 'MCU 是一個連續的故事，不是一堆獨立電影',
    body: '從 2008 年《鋼鐵人》開始，40 部電影與近 30 部影集共用同一個世界、同一條時間線。角色會跨作品出現，某部片的小配角可能在十七年後成為另一部片的大反派 —— 這正是它跟其他系列最大的不同。',
    glyph: 'star'
  },
  {
    h: '它分成兩大「傳奇」，共六個階段',
    body: '無限傳奇（Phase 1–3，2008–2019）講薩諾斯與六顆無限寶石，以《終局之戰》完結。多元宇宙傳奇（Phase 4–6，2021–2027）講平行宇宙的崩壞，大魔王是末日博士，將以《末日之戰》與《秘密戰爭》收尾。',
    glyph: 'portal'
  },
  {
    h: '你不需要全部看完',
    body: '真正的主線大約 20 部。影集有必看的（《洛基》《汪達幻視》），也有完全可以跳過的。本站每一部都標了「必看／建議／選看／可跳過」，並附上完整劇情，看不看得完都能懂。',
    glyph: 'list'
  }
];

/* ---------- Key Findings ---------- */
window.MCU_FINDINGS = [
  {
    h: '新手一律建議用「上映順序」',
    body: '跟著電影當年上映的順序看，能體驗漫威「逐步鋪陳、驚喜揭露」的敘事節奏 —— 例如寶石與薩諾斯的懸念是花了六年才揭曉的。按劇情年代看雖然因果清楚，但會提前破梗。',
    key: true
  },
  {
    h: '無限傳奇的主線，是六顆寶石的下落',
    body: '空間、現實、力量、心靈、時間、靈魂。它們從 2011 年就開始一顆顆出現，多數觀眾當時並不知道那是什麼。認得這六顆，等於掌握了 Phase 1–3 的整條暗線。'
  },
  {
    h: '多元宇宙傳奇的引爆點是影集《洛基》',
    body: '不是任何一部電影 —— 是《洛基》第一季結局中 Sylvie 殺死留存者的那一刻，神聖時間線爆炸性分支，多元宇宙才正式開啟。之後《無家日》的咒語失控、《奇異博士2》的宇宙旅行才有基礎。',
    key: true
  },
  {
    h: '主線大魔王已經換人了',
    body: '原本設定是「征服者康」，但演員 Jonathan Majors 於 2023 年官司定罪遭解約，漫威改由末日博士（小勞勃道尼飾）接棒。任何把康當成《末日之戰》反派的舊資料都已過時。',
    key: true
  },
  {
    h: 'Netflix 的《夜魔俠》系列已經是正史了',
    body: 'Disney+ 已把整個「捍衛者聯盟（Defenders Saga）」正式納入官方 MCU 時間軸。Charlie Cox 的夜魔俠與 Vincent D\'Onofrio 的金霸王都已在主線作品中回歸。'
  },
  {
    h: 'X 戰警與驚奇 4 超人正在併入 MCU',
    body: '《驚奇女士》首度確認變種人存在，《驚奇隊長2》彩蛋出現野獸，《死侍與金鋼狼》正式把福斯時代的角色帶進來，《驚奇4超人：第一步》則來自平行宇宙 Earth-828。這一切都指向《末日之戰》的大集結。'
  }
];

/* ---------- 核心概念 ---------- */
window.MCU_CONCEPTS = [
  { id: 'mcu', term: 'MCU', en: 'Marvel Cinematic Universe', glyph: 'star', accent: ['#dc2626', '#f0b429'],
    def: '漫威電影宇宙。指 2008 年《鋼鐵人》開始、彼此連動的系列電影與影集，目前共六個階段、兩大傳奇。',
    related: ['iron-man', 'endgame', 'doomsday'] },

  { id: 'infinity-stones', term: '無限寶石', en: 'Infinity Stones', glyph: 'gauntlet', accent: ['#7e22ce', '#f0b429'],
    def: '六顆源自宇宙大爆炸前的單一實體、在宇宙誕生時碎裂而成的寶石：空間（藍）、現實（紅）、力量（紫）、心靈（黃）、時間（綠）、靈魂（橘）。集齊六顆可為所欲為。',
    related: ['infinity-war', 'endgame'] },

  { id: 'infinity-gauntlet', term: '無限手套', en: 'Infinity Gauntlet', glyph: 'gauntlet', accent: ['#b45309', '#f0b429'],
    def: '薩諾斯委託矮人族在尼德威阿爾打造、用來鑲嵌六顆寶石的手套。普通生命體無法承受六顆同時的能量。',
    related: ['infinity-war', 'endgame', 'thor-3'] },

  { id: 'the-snap', term: '彈指 / The Snap / Blip', en: 'The Snap / The Blip', glyph: 'snap', accent: ['#7e22ce', '#111827'],
    def: '薩諾斯集齊寶石後打了一個響指，讓全宇宙半數生命隨機化為灰燼。五年後復仇者用自製手套把他們救回，這消失的五年被稱為 Blip。',
    note: '被彈指帶走的人回來時完全沒有變老 —— 這是為什麼彼得帕克的同學都跟他同年，卻有些人已經大了五歲。',
    related: ['infinity-war', 'endgame', 'far-from-home', 'falcon-winter-soldier'] },

  { id: 'multiverse', term: '多元宇宙', en: 'Multiverse', glyph: 'portal', accent: ['#7c3aed', '#0891b2'],
    def: '存在無數個平行宇宙的設定，每個宇宙有自己版本的同一批角色。這是 Phase 4–6 的主線核心。',
    related: ['loki-s1', 'no-way-home', 'multiverse-of-madness', 'deadpool-wolverine'] },

  { id: 'tva', term: 'TVA 時間變異管理局', en: 'Time Variance Authority', glyph: 'tva', accent: ['#a16207', '#166534'],
    def: '存在於時間之外的官僚組織，負責修剪偏離「神聖時間線」的分支。由留存者暗中建立，真相在《洛基》第一季揭露。',
    related: ['loki-s1', 'loki-s2', 'deadpool-wolverine'] },

  { id: 'sacred-timeline', term: '神聖時間線', en: 'The Sacred Timeline', glyph: 'tva', accent: ['#f59e0b', '#166534'],
    def: '留存者為避免多元宇宙戰爭而維持的唯一一條時間線。任何分支都會被 TVA 修剪掉。它在《洛基》第一季結局被摧毀。',
    related: ['loki-s1', 'loki-s2'] },

  { id: 'variant', term: '變體', en: 'Variant', glyph: 'question', accent: ['#7c3aed', '#f59e0b'],
    def: '同一角色在不同宇宙的不同版本。三代蜘蛛人、Sylvie 與洛基、無數個康 —— 都是彼此的變體。',
    related: ['loki-s1', 'no-way-home', 'what-if-s1'] },

  { id: 'incursion', term: '宇宙撞擊', en: 'Incursion', glyph: 'portal', accent: ['#be123c', '#111827'],
    def: '兩個平行宇宙相撞、同歸於盡的災難性事件。在《奇異博士2》中引入，普遍被認為是《秘密戰爭》的核心設定。',
    related: ['multiverse-of-madness', 'secret-wars'] },

  { id: 'earth-numbers', term: 'Earth-616 / 838 / 828', en: 'Universe designations', glyph: 'portal', accent: ['#0e7490', '#f0b429'],
    def: '漫威用編號區分不同宇宙。616 通常指 MCU 主宇宙；838 出現於《奇異博士2》；828 是《驚奇4超人：第一步》所在的復古平行宇宙。',
    related: ['multiverse-of-madness', 'fantastic-four'] },

  { id: 'quantum-realm', term: '量子領域', en: 'Quantum Realm', glyph: 'ant', accent: ['#0891b2', '#4c1d95'],
    def: '比原子更小的次原子維度，時間與空間的規則在此失效。《蟻人》證明可以往返，這正是《終局之戰》時間旅行的理論基礎。',
    note: '整部《終局之戰》能成立，全靠《蟻人與黃蜂女》片尾把 Scott 困在這裡。',
    related: ['ant-man', 'ant-man-2', 'endgame', 'quantumania'] },

  { id: 'super-soldier', term: '超級士兵血清', en: 'Super Soldier Serum', glyph: 'shield', accent: ['#1e40af', '#b91c1c'],
    def: 'Erskine 博士研發的藥劑，會把使用者的身心特質放大到極致 —— 好人變更好，壞人變更壞。史蒂夫、紅骷髏、巴奇、John Walker、Isaiah Bradley 都用過。',
    related: ['captain-america', 'winter-soldier', 'falcon-winter-soldier'] },

  { id: 'sokovia', term: '索科維亞協議', en: 'Sokovia Accords', glyph: 'badge', accent: ['#1e40af', '#64748b'],
    def: '聯合國在索科維亞災難後提出、要求超級英雄接受政府管制的法案。它直接導致復仇者在《英雄內戰》中分裂。',
    related: ['civil-war', 'age-of-ultron', 'black-widow'] },

  { id: 'shield', term: '神盾局', en: 'S.H.I.E.L.D.', glyph: 'badge', accent: ['#0f172a', '#0e7490'],
    def: '尼克福瑞領導的國際維安組織，由 Peggy Carter 與霍華史塔克共同創立，是早期串起所有英雄的樞紐。在《酷寒戰士》中因九頭蛇滲透而瓦解。',
    related: ['iron-man', 'avengers-1', 'winter-soldier', 'agent-carter-oneshot'] },

  { id: 'hydra', term: '九頭蛇', en: 'HYDRA', glyph: 'skull', accent: ['#111827', '#b91c1c'],
    def: '二戰納粹科學部門起家的邪惡組織，戰後藉「迴紋針行動」寄生在神盾局內部成長數十年。「砍掉一顆頭，會長出兩顆。」',
    related: ['captain-america', 'winter-soldier', 'agents-of-shield'] },

  { id: 'vibranium', term: '汎金屬', en: 'Vibranium', glyph: 'panther', accent: ['#4c1d95', '#0f172a'],
    def: '遠古隕石帶到汎達的超級金屬，能吸收並重新釋放動能。美國隊長的盾牌、黑豹戰衣與整個汎達文明都建立在它之上。水下王國 Talokan 也擁有它。',
    related: ['black-panther', 'wakanda-forever', 'captain-america'] },

  { id: 'adamantium', term: '精金', en: 'Adamantium', glyph: 'claw', accent: ['#e5e7eb', '#1e40af'],
    def: '比汎金屬更強、幾乎不可摧毀的合金。在《美國隊長4》中從印度洋的「天神島」開採而出 —— 這正是金鋼狼骨骼與利爪的材質，是漫威為 X 戰警鋪的路。',
    related: ['brave-new-world', 'eternals', 'deadpool-wolverine'] },

  { id: 'celestials', term: '天神族', en: 'Celestials', glyph: 'celestial', accent: ['#0d9488', '#a16207'],
    def: '宇宙中最古老、規模如行星的存在，創造生命也毀滅生命。永恆族由天神 Arishem 創造；星爵之父伊戈也是其中之一；被石化的提亞穆特成了「天神島」。',
    related: ['eternals', 'gotg-2', 'brave-new-world'] },

  { id: 'mutants', term: '變種人', en: 'Mutants', glyph: 'claw', accent: ['#f0b429', '#1e40af'],
    def: '天生基因突變而擁有能力的人類，也就是 X 戰警。《驚奇女士》首度確認他們在 MCU 存在，《死侍與金鋼狼》正式把福斯時代的角色帶入。',
    related: ['ms-marvel', 'deadpool-wolverine', 'the-marvels', 'doomsday'] },

  { id: 'darkhold', term: '黑暗神書', en: 'The Darkhold', glyph: 'hex', accent: ['#7e22ce', '#111827'],
    def: '會腐化使用者心智的黑魔法書。汪達在《汪達幻視》結尾開始研讀它，並在《奇異博士2》中被它徹底腐化，最後親手摧毀所有宇宙的副本。',
    related: ['wandavision', 'multiverse-of-madness', 'agatha'] },

  { id: 'kree-skrull', term: '克里與史克魯', en: 'Kree & Skrulls', glyph: 'starburst', accent: ['#1d4ed8', '#166534'],
    def: '兩個交戰數千年的外星種族。克里是軍事帝國；史克魯能變形，在《驚奇隊長》中被揭露其實是被滅族的難民。激進派在《祕密入侵》中反擊。',
    related: ['captain-marvel', 'secret-invasion', 'the-marvels'] },

  { id: 'ten-rings', term: '十環', en: 'The Ten Rings', glyph: 'rings', accent: ['#b45309', '#065f46'],
    def: '來源不明的十枚上古神環，賦予持有者近乎不死的生命與強大力量。文武用它建立了存續千年的十環幫。《尚氣》片尾顯示它正在向某處發送訊號。',
    related: ['shang-chi', 'iron-man', 'all-hail-the-king'] }
];

/* ---------- 六顆無限寶石 ---------- */
window.MCU_STONES = [
  { id: 'space', name: '空間寶石', en: 'Space Stone', color: '#3b82f6', vessel: '特斯拉方塊（Tesseract）',
    first: '《美國隊長》二戰段落最早出現；《雷神索爾》(2011) 片尾正式登場',
    story: '二戰時被紅骷髏與九頭蛇用作武器能源。1995 年其能量爆炸讓卡蘿丹佛斯獲得超能力。《復仇者聯盟》中被洛基用來開啟奇塔黎傳送門。《終局之戰》時間搶劫時，2012 年的洛基變體帶著它逃走 —— 直接催生出影集《洛基》。',
    related: ['thor', 'captain-america', 'avengers-1', 'captain-marvel', 'loki-s1'] },

  { id: 'reality', name: '現實寶石', en: 'Reality Stone', color: '#ef4444', vessel: '乙太（Aether）',
    first: '《雷神索爾2：黑暗世界》(2013)',
    story: '以液態的「乙太」形式存在，是六顆中唯一非結晶狀態的。黑暗精靈 Malekith 想用它讓宇宙重回黑暗。片尾阿斯嘉人把它交給收藏者保管，理由是「兩顆寶石放在一起太危險」。',
    related: ['thor-2', 'infinity-war'] },

  { id: 'power', name: '力量寶石', en: 'Power Stone', color: '#a855f7', vessel: '寶珠（Orb）',
    first: '《星際異攻隊》(2014)',
    story: '純粹的毀滅能量，一般生命體徒手觸碰會被瞬間撕裂。異攻隊五人靠手牽手分擔能量才承受住，事後交給新星軍團保管 —— 薩諾斯在《無限之戰》開場前已將其奪走。',
    related: ['gotg-1', 'infinity-war'] },

  { id: 'mind', name: '心靈寶石', en: 'Mind Stone', color: '#eab308', vessel: '洛基權杖 → 幻視的額頭',
    first: '《復仇者聯盟》(2012)（藏於洛基權杖中）',
    story: '薩諾斯交給洛基的權杖內就藏著它。九頭蛇用它改造出汪達與快銀。《奧創紀元》中復仇者用它與 JARVIS 創造出幻視，寶石鑲在他額頭上。《無限之戰》中汪達親手摧毀它，薩諾斯卻用時間寶石倒轉、當著她的面挖出來。',
    related: ['avengers-1', 'age-of-ultron', 'infinity-war', 'wandavision'] },

  { id: 'time', name: '時間寶石', en: 'Time Stone', color: '#22c55e', vessel: '阿加莫托之眼',
    first: '《奇異博士》(2016)',
    story: '由至尊法師保管於卡瑪泰姬。史傳奇用它把自己鎖進無限死亡循環來逼退 Dormammu。《無限之戰》中他看過 14,000,605 種未來後，主動交出它換取唯一的勝算。',
    related: ['doctor-strange', 'infinity-war'] },

  { id: 'soul', name: '靈魂寶石', en: 'Soul Stone', color: '#f97316', vessel: '沃米爾星',
    first: '《復仇者聯盟3：無限之戰》(2018)',
    story: '六顆中唯一從未在單人電影登場的寶石。守護者是被空間寶石傳送走的紅骷髏。取得它的代價是「犧牲你所愛之人」—— 薩諾斯推下養女葛摩菈；《終局之戰》中黑寡婦鬆手墜崖換來它。',
    highlight: true,
    related: ['infinity-war', 'endgame', 'captain-america'] }
];

window.MCU_STONES_FATE = '薩諾斯在《無限之戰》後用寶石的力量摧毀了寶石本身，讓一切無法逆轉；《終局之戰》中復仇者從「過去的其他時間點」借來寶石使用，事後由美國隊長一一歸還原位，以免製造出新的分支時間線。';

/* ---------- 組織與勢力 ---------- */
window.MCU_FACTIONS = [
  { name: '復仇者聯盟', en: 'The Avengers', desc: '尼克福瑞集結的英雄團隊，創始六人為鋼鐵人、美國隊長、雷神、浩克、黑寡婦、鷹眼。名稱源自卡蘿丹佛斯的呼號。' },
  { name: '新復仇者', en: 'The New Avengers', desc: '瓦倫提娜在《雷霆特攻隊》片尾為那群反英雄命名的隊伍 —— 片名的星號正式改寫為 The New Avengers。' },
  { name: '神盾局', en: 'S.H.I.E.L.D.', desc: '由 Peggy Carter 與霍華史塔克共同創立的國際維安組織，在《酷寒戰士》中因九頭蛇滲透而瓦解。' },
  { name: '九頭蛇', en: 'HYDRA', desc: '二戰納粹科學部門起家，戰後寄生神盾局數十年。製造出酷寒戰士，也用權杖改造出汪達與快銀。' },
  { name: 'TVA 時間變異管理局', en: 'Time Variance Authority', desc: '存在於時間之外，監管「神聖時間線」。真相在《洛基》揭露，也是《死侍與金鋼狼》的關鍵。' },
  { name: '汎達', en: 'Wakanda', desc: '藏有汎金屬的非洲國家，世代孤立，由黑豹統治。T\'Challa 決定開放後改變了全球地緣政治。' },
  { name: 'Talokan', en: 'Talokan', desc: '納摩統治的水下王國，祖先為逃離殖民者而潛入海底，同樣擁有汎金屬。' },
  { name: '永恆族與天神族', en: 'Eternals & Celestials', desc: '天神 Arishem 創造永恆族並派駐地球七千年，真正目的是孕育新天神。' },
  { name: '星際異攻隊', en: 'Guardians of the Galaxy', desc: '星爵、葛摩菈、火箭、格魯特、德克斯、涅布拉、曼帝斯組成的宇宙團隊，在《星際異攻隊3》結局解散重組。' },
  { name: '十環幫', en: 'The Ten Rings', desc: '文武用十枚神環建立、存續千年的組織。《鋼鐵人》中綁架東尼的正是它的分支。' },
  { name: '紅屋', en: 'Red Room', desc: '訓練並洗腦黑寡婦與葉蓮娜的蘇聯組織，由 Dreykov 掌控數千名寡婦。' },
  { name: '捍衛者聯盟', en: 'The Defenders', desc: '夜魔俠、潔西卡瓊斯、盧克凱奇、鐵拳俠組成的街頭英雄團隊，已納入官方時間軸。' },
  { name: '光照會', en: 'Illuminati', desc: '《奇異博士2》中 Earth-838 的多元宇宙英雄議會，成員包括 Reed Richards 與 Charles Xavier，全被汪達團滅。' },
  { name: 'X 戰警 / 變種人', en: 'X-Men / Mutants', desc: '福斯時代的角色群，經《死侍與金鋼狼》正式進入 MCU，將在《末日之戰》集結。' },
  { name: '克里帝國與史克魯人', en: 'Kree & Skrulls', desc: '交戰數千年的兩個外星種族。史克魯人其實是被滅族的難民。' },
  { name: '手合會', en: 'The Hand', desc: '《夜魔俠》與《捍衛者聯盟》中的忍者組織，掌握復活術。' },
  { name: '損害管制部門', en: 'Damage Control', desc: '史塔克與政府合資、負責清理超級英雄戰後廢墟的部門 —— 它搶走了禿鷹的生意。' },
  { name: '號角日報', en: 'The Daily Bugle', desc: 'J. Jonah Jameson 主持的媒體（TheDailyBugle.net），公開了彼得帕克的身分。' }
];

/* ---------- 《蜘蛛人4》檔案（最新上映作品）---------- */
window.MCU_SM4 = {
  title: '蜘蛛人4：Brand New Day',
  fullTitle: 'Spider-Man: Brand New Day',
  zhSub: '蜘蛛人：嶄新的一天',
  facts: [
    { k: '上映日期', v: '2026 年 7 月 31 日（北美）', note: '部分市場如印度為 7 月 30 日。原定 7 月 24 日，後延一週。' },
    { k: '片長與分級', v: '2 小時 25 分、PG-13', note: '據 Deadline 官方規格。' },
    { k: '導演', v: 'Destin Daniel Cretton', note: '《尚氣與十環傳奇》導演。' },
    { k: '編劇', v: 'Chris McKenna 與 Erik Sommers', note: '前三部曲的編劇班底。' },
    { k: '製片', v: "Kevin Feige、Amy Pascal、Rachel O'Connor" },
    { k: '拍攝', v: '2025 年 8 月於蘇格蘭格拉斯哥開拍', note: '工作代號「Blue Oasis」，市中心街道被布置成紐約。' },
    { k: '預告', v: '2026 年 3 月 18 日釋出', note: '據 Sony 說法，首波預告在 4 天內衝破 11 億次觀看。' },
    { k: 'Phase', v: 'Phase 6', note: '與《復仇者聯盟：末日之戰》同屬 Phase 6。' }
  ],
  plot: [
    { h: '起點', body: '《無家日》結局四年後。彼得已成為一個「完全獨自生活的成年人，自願把自己從所愛之人的生命與記憶中抹除」，全職打擊犯罪，眼看昔日好友 MJ、Ned 在沒有他的世界中繼續生活。' },
    { h: '衝突', body: '這份孤獨與壓力，加上蜘蛛基因進入某種「重生（rebirth）」階段開始突變、能力失控，促使他向布魯斯班納（浩克）尋求科學協助。' },
    { h: '主要威脅', body: '「一名沒有人看得見的強大反派（a powerful villain no one can even see）」。' },
    { h: '基調', body: '比前作更黑暗、更寫實，回歸「紐約街頭英雄」路線。' },
    { h: '片尾', body: '以 007 式的字卡「Spider-Man Will Return」作結。' }
  ],
  cast: [
    { actor: 'Tom Holland', role: 'Peter Parker / 蜘蛛人', note: '第七次演出此角', charId: 'peter-parker', key: true },
    { actor: 'Zendaya', role: 'MJ (Michelle Jones)', charId: 'mj' },
    { actor: 'Jacob Batalon', role: 'Ned Leeds', note: '片中打造「Spidey-tracker」App', charId: 'ned' },
    { actor: 'Mark Ruffalo', role: '布魯斯班納 / 浩克', note: '協助彼得處理失控的能力，是重量級回歸', charId: 'hulk', key: true },
    { actor: 'Jon Bernthal', role: '制裁者 (Punisher / Frank Castle)', note: '首度登上大銀幕。曾在 Netflix《夜魔俠》《制裁者》及《夜魔俠：重生》演出。預告中他開廂型車撞彼得，並說「你正在失控」。', charId: 'punisher', key: true },
    { actor: 'Sadie Sink', role: '神秘反派', note: '《怪奇物語》演員。身分未公開 —— 詳見注意事項。', charId: 'sadie-villain', key: true, unconfirmed: true },
    { actor: 'Michael Mando', role: 'Mac Gargan / 蠍子', note: '接續《返校日》彩蛋', charId: 'scorpion' },
    { actor: 'Liza Colón-Zayas', role: '警探 Jean DeWolff', note: '《大熊餐廳》演員。據 Deadline 影評，是與蜘蛛人合作的警探。', charId: 'jean-dewolff' },
    { actor: 'Marvin Jones III', role: '犯罪頭目「墓碑 (Tombstone)」', charId: 'tombstone' },
    { actor: 'Tramell Tillman', role: '角色未公開', note: '亦在卡司之列' },
    { actor: 'Marisa Tomei', role: 'May 嬸嬸', note: '在部分卡司名單中出現，但因 May 已在《無家日》死亡，可能為回憶或特殊形式（未證實）。', charId: 'may', unconfirmed: true }
  ],
  doomsday: '兩片同屬 Phase 6，《蜘蛛人4》早約五個月上映，可能為《末日之戰》的多元宇宙大集結預埋伏筆，但本身是獨立故事。'
};

/* ---------- 觀影指南 ---------- */
window.MCU_PLAN_A = {
  title: '路線 A：最低限度「主線精華」',
  meta: '10 部・約 24 小時',
  intro: '如果你只想抓住整個 MCU 的主幹，這十部就是骨架：',
  items: [
    { entry: 'iron-man', why: '一切的起點' },
    { entry: 'avengers-1', why: '六人集結、兩顆寶石同場' },
    { entry: 'winter-soldier', why: '神盾局瓦解，MCU 最大轉折之一' },
    { entry: 'gotg-1', why: '打開宇宙的一面，力量寶石' },
    { entry: 'civil-war', why: '復仇者分裂，蜘蛛人與黑豹加入' },
    { entry: 'thor-3', why: '直接接上《無限之戰》' },
    { entry: 'infinity-war', why: '薩諾斯彈指' },
    { entry: 'endgame', why: '無限傳奇完結' },
    { entry: 'loki-s1', why: '多元宇宙的引爆點（唯一必看影集）' },
    { entry: 'no-way-home', why: '多元宇宙的第一次大爆發' }
  ],
  tip: '這十部涵蓋了兩大傳奇的主幹。看完後，任何一部漫威新片你都不會看不懂 —— 剩下的都是支線與角色深化。'
};

window.MCU_PLAN_B = {
  title: '路線 B：完整體驗「觀影順序」',
  compare: [
    { h: '上映順序', badge: '推薦新手', recommended: true,
      good: '跟著電影當年上映的順序看，能體驗漫威「逐步鋪陳、驚喜揭露」的敘事節奏 —— 寶石與薩諾斯的懸念是花了六年才揭曉的。',
      bad: '缺點是時間軸偶爾跳躍，例如《美國隊長》突然回到二戰。' },
    { h: '劇情年代順序', badge: '', recommended: false,
      good: '按故事發生的年代看（《汎達之眼》遠古 →《美國隊長》二戰 →《驚奇隊長》1995 →……）。優點是因果清楚。',
      bad: '缺點是會提前破梗、失去原本精心設計的懸念，也會把彩蛋的驚喜消耗掉。' }
  ],
  conclusion: '新手一律建議用「上映順序」，體驗最佳。本站的時間線兩種順序都可以切換。'
};

window.MCU_SERIES_GUIDE = [
  { level: '必看', tone: 'must', items: [
    '《洛基》第一、二季 —— 多元宇宙的引爆點與支撐者，漫威官方指定《末日之戰》前最該補的影集',
    '《汪達幻視》—— 緋紅女巫的黑化，《奇異博士2》的直接前傳'
  ]},
  { level: '建議看', tone: 'rec', items: [
    '《獵鷹與酷寒戰士》—— 山姆成為美國隊長，《美國隊長4》前傳',
    '《夜魔俠：重生》與 Netflix《夜魔俠》《制裁者》—— 街頭層級主線，也是《蜘蛛人4》制裁者的來歷',
    '《驚奇女士》—— 首度確認 MCU 變種人存在'
  ]},
  { level: '選看', tone: 'rec', items: [
    '《What If...?》—— 動畫，把「變體」講清楚的最輕鬆入門',
    '《阿嘉莎聚眾作法》—— 汪達的兒子 Billy 真實存在於 MCU',
    '《月光騎士》《回聲》—— 風格獨特的獨立故事'
  ]},
  { level: '可跳過', tone: 'skip', items: [
    '《鷹眼》《律師女浩克》《祕密入侵》《鋼鐵心》—— 與主線關聯低',
    '《我是格魯特》《漫威殭屍》—— 純小品或平行宇宙獨立故事',
    '《異人族》《叛逃者》《鬥篷與匕首》《地獄風暴》—— 正史地位模糊，與電影毫無交集'
  ]}
];

window.MCU_STEPS = [
  { step: '第一步', when: '打地基', body: '看《鋼鐵人》→《復仇者聯盟》→《酷寒戰士》。三部就能明白 MCU 的運作方式，以及為什麼它跟一般續集電影不同。' },
  { step: '第二步', when: '走主線', body: '補《星際異攻隊》《英雄內戰》《諸神黃昏》，然後一口氣看《無限之戰》與《終局之戰》。這是無限傳奇的完整弧線。' },
  { step: '第三步', when: '進多元宇宙', body: '看《洛基》兩季與《無家日》，理解多元宇宙怎麼開的、誰在撐著它。接著是《死侍與金鋼狼》與《驚奇4超人》。' },
  { step: '第四步', when: '追新片', body: '《雷霆特攻隊》《美國隊長4》補完 2025 年的伏筆，然後就能無痛進戲院看《蜘蛛人4》與 2026 年底的《末日之戰》。' }
];

window.MCU_STEPS_NOTE = '如果你只是為了看懂某一部新片，不用照這個走 —— 每部作品的詳情頁都有「相關作品」，順著點就是最短路徑。';

/* ---------- 注意事項 ---------- */
window.MCU_CAVEATS = [
  { h: '2025–2026 年作品的細節仍可能變動',
    body: '《美國隊長4》《雷霆特攻隊》《驚奇4超人》已上映，內容為確定；但《蜘蛛人4》《末日之戰》《秘密戰爭》的部分資訊來自預告、官方大綱與媒體報導，最終請以正片為準。' },
  { h: '征服者康（Kang）的定位已改變', strong: true,
    body: '由於演員法律問題，漫威已棄用康作為主線大魔王，改由末日博士接棒。任何把康當成《末日之戰》反派的舊資料都已過時。' },
  { h: 'Sadie Sink 在《蜘蛛人4》的角色身分尚未證實', strong: true,
    body: '媒體與粉絲維基曾推測為琴葛雷（Jean Grey）、關史黛西或蜘蛛格溫等，但漫威／Sony 官方均未公布，屬未經證實的傳聞。Marisa Tomei 的回歸形式亦未明朗。' },
  { h: 'Marvel Television 舊作的正史地位模糊', strong: true,
    body: '《神盾局特工》《卡特探員》《異人族》等由已解散的 Marvel Television 製作，尚未被納入 Disney+ 官方 MCU 時間軸。相對地，Netflix 的「捍衛者聯盟」系列已正式納入。' },
  { h: '劇情年代順序是整理過的近似值',
    body: '本站「劇情年代」模式依官方時間軸與各作品內的線索排列。部分作品（如《洛基》發生在時間之外、《What If...?》橫跨多宇宙）本質上無法放進單一年份，已另行標註。' },
  { h: '譯名採台灣通用譯法',
    body: '薩諾斯、鋼鐵人、蜘蛛人、緋紅女巫等。部分角色（如 The Leader 智謀者、Sentry 哨兵、Tombstone 墓碑）台灣官方譯名可能略有差異。' },
  { h: '本站含大量劇透',
    body: '為了讓完全沒看過的人也能理解世界觀，所有作品的關鍵轉折與結局都直接寫出來了。如果你打算親自看，建議只讀「一句話劇情」就好。' }
];
