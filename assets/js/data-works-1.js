/* ============================================================
   無限傳奇 The Infinity Saga — Phase 1 / 2 / 3（23 部電影）
   上映日期與導演依 Wikipedia「List of Marvel Cinematic Universe films」
   ============================================================ */

window.MCU_WORKS_1 = [

/* ================= PHASE ONE (2008–2012) ================= */
{
  id: 'iron-man', no: 1, title: '鋼鐵人', en: 'Iron Man',
  year: 2008, date: '2008 / 05 / 02', director: 'Jon Favreau',
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers'],
  era: 'rise', chrono: 2010, glyph: 'arc', accent: ['#dc2626', '#f0b429'],
  relevance: 'core',
  tagline: '一切的起點',
  summary: '軍火商東尼史塔克在阿富汗被綁架，在山洞裡打造第一套鋼鐵裝逃脫。回國後他關閉武器部門、改邪歸正，並在記者會上公開承認「我就是鋼鐵人」。',
  sections: [
    { h: '劇情', body: '史塔克工業的天才軍火商東尼史塔克在阿富汗示範新型飛彈時遭恐怖組織「十環幫」綁架，胸口嵌入彈片。他與同囚的科學家殷森打造出微型方舟反應爐維生，並用它驅動一套簡陋鋼鐵裝逃出生天。' },
    { h: '轉變', body: '回國後東尼宣布停產武器，並在家中打造更精良的 Mark II、Mark III 戰甲。他發現公司軍火其實被合夥人偷賣給恐怖分子。' },
    { h: '反派', body: 'Obadiah Stane（鋼鐵獠牙）是父親的老搭檔，也是把武器賣給十環幫的內鬼。他奪走東尼的反應爐、打造巨型戰甲「鐵霸王」，最後死於方舟反應爐爆炸。' },
    { h: '結局', body: '東尼無視神盾局準備好的掩飾說詞，在記者會上直接說出「我就是鋼鐵人」—— 這句話奠定了整個 MCU 不隱藏身分的基調。' },
    { h: '片尾彩蛋（極重要）', body: '尼克福瑞在東尼家中現身：「你以為你是這世界上唯一的超級英雄嗎？我來跟你談談『復仇者計畫』。」這是 MCU 的第一顆彩蛋，也是整個宇宙的種子。', highlight: true }
  ],
  related: ['iron-man-2', 'avengers-1', 'incredible-hulk', 'iron-man-3']
},
{
  id: 'incredible-hulk', no: 2, title: '無敵浩克', en: 'The Incredible Hulk',
  year: 2008, date: '2008 / 06 / 13', director: 'Louis Leterrier',
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers'],
  era: 'rise', chrono: 2011, glyph: 'fist', accent: ['#166534', '#7f1d1d'],
  relevance: 'optional',
  tagline: '埋了 17 年才回收的伏筆',
  summary: '布魯斯班納因伽瑪射線實驗事故變身浩克，逃亡巴西躲避羅斯將軍追捕。片中一個不起眼的科學家配角，17 年後成了《美國隊長4》的大反派。',
  sections: [
    { h: '劇情', body: '班納在為軍方進行的伽瑪射線實驗中出事，變成一失控就會化身綠色巨人的浩克。他逃到巴西隱居、學習控制心跳，同時尋找解藥，並持續躲避羅斯將軍（Thaddeus Ross）的追捕。' },
    { h: '反派', body: '英國特種部隊軍官 Emil Blonsky 為了對抗浩克而注射超級士兵血清與伽瑪，變成更暴虐的「憎惡（Abomination）」，最後在哈林區與浩克大戰落敗。' },
    { h: '關鍵伏筆', body: '科學家 Samuel Sterns 在研究班納血液時，頭部沾到伽瑪血液並開始異變、腦部腫脹 —— 這為 2025 年《美國隊長4》的反派「智謀者（The Leader）」埋下 17 年的伏筆。', highlight: true },
    { h: '片尾彩蛋', body: '東尼史塔克找上正在酒吧買醉的羅斯將軍，說「我們正在組一個團隊」。' },
    { h: '冷知識', body: '這是 MCU 中唯一一部由 Edward Norton 飾演班納的電影；自《復仇者聯盟》起改由 Mark Ruffalo 接演。Blonsky 後來在《律師女浩克》中回歸。' }
  ],
  related: ['brave-new-world', 'avengers-1', 'she-hulk', 'spider-man-4']
},
{
  id: 'iron-man-2', no: 3, title: '鋼鐵人2', en: 'Iron Man 2',
  year: 2010, date: '2010 / 05 / 07', director: 'Jon Favreau',
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers'],
  era: 'rise', chrono: 2011, glyph: 'arc', accent: ['#b91c1c', '#475569'],
  relevance: 'optional',
  tagline: '戰爭機器與黑寡婦登場',
  summary: '東尼因反應爐的鈀中毒而瀕死，一邊放縱自我一邊尋找解方。俄羅斯物理學家 Ivan Vanko 帶著對史塔克家族的世仇復仇而來。',
  sections: [
    { h: '劇情', body: '方舟反應爐的鈀正在毒殺東尼。他把公司交給小辣椒、行為日益荒唐，實則在隱瞞死期將近。最後他靠父親霍華留在舊博覽會模型中的線索，合成出一種全新元素取代鈀，自救成功。' },
    { h: '反派', body: 'Ivan Vanko（鞭狼 Whiplash）是霍華當年合作者 Anton Vanko 之子，用電鞭與反應爐科技復仇。競爭對手 Justin Hammer 出資讓他量產無人機。' },
    { h: '新角色', body: '娜塔莎羅曼諾夫（黑寡婦）以神盾局臥底身分潛入史塔克工業；Rhodey 穿上戰甲成為「戰爭機器」。' },
    { h: '片尾彩蛋', body: '寇森探員在新墨西哥沙漠中發現一把插在坑裡的鎚子 —— 雷神的妙爾尼爾。' },
    { h: '寶石線索', body: '尼克福瑞辦公室的背景地圖上出現特斯拉方塊的相關資料模型。' }
  ],
  related: ['iron-man', 'thor', 'avengers-1', 'black-widow']
},
{
  id: 'thor', no: 4, title: '雷神索爾', en: 'Thor',
  year: 2011, date: '2011 / 05 / 06', director: 'Kenneth Branagh',
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers', 'cosmic'],
  era: 'rise', chrono: 2011, glyph: 'hammer', accent: ['#1d4ed8', '#f0b429'],
  relevance: 'recommended',
  tagline: '空間寶石首度登場',
  summary: '傲慢的阿斯嘉王子索爾擅自挑起與霜巨人的戰爭，被父親奧丁剝奪神力逐出阿斯嘉。他在地球學會謙卑，而弟弟洛基正在王座上策劃篡位。',
  sections: [
    { h: '劇情', body: '索爾在加冕日率眾闖入約頓海姆挑釁霜巨人，奧丁震怒，剝奪其神力並將他與妙爾尼爾一同放逐地球。他遇上天文物理學家 Jane Foster，逐漸學會謙卑，最終重新舉起鎚子。' },
    { h: '反派', body: '洛基發現自己其實是奧丁從約頓海姆帶回的霜巨人棄嬰，身世崩塌後策動政變、放霜巨人入宮、企圖用彩虹橋毀滅約頓海姆以證明自己。最後在索爾摧毀彩虹橋後墜入虛空。' },
    { h: '寶石', body: '片尾彩蛋中，尼克福瑞向 Erik Selvig 展示特斯拉方塊 —— 這是空間寶石首次在 MCU 現身。而躲在暗處操控 Selvig 的正是洛基。', highlight: true },
    { h: '關鍵設定', body: '本片建立了「九界」「彩虹橋」「阿斯嘉的科技即魔法」等宇宙觀，也讓鷹眼（Clint Barton）首度短暫登場。' }
  ],
  stones: ['space'],
  related: ['thor-2', 'thor-3', 'avengers-1', 'loki-s1']
},
{
  id: 'captain-america', no: 5, title: '美國隊長', en: 'Captain America: The First Avenger',
  year: 2011, date: '2011 / 07 / 22', director: 'Joe Johnston',
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers'],
  era: 'ww2', chrono: 1943, glyph: 'shield', accent: ['#1e40af', '#b91c1c'],
  relevance: 'recommended',
  tagline: '時間軸上最早的真人電影',
  summary: '二戰期間，體弱多病卻永不放棄的史蒂夫羅傑斯接受超級士兵血清實驗，成為美國隊長，對抗九頭蛇首領紅骷髏。',
  sections: [
    { h: '劇情', body: '1943 年，布魯克林青年史蒂夫羅傑斯五度報名從軍被拒，最後獲 Abraham Erskine 博士選中接受超級士兵計畫。他從宣傳吉祥物一路成為真正的戰場英雄，率領「咆哮突擊隊」摧毀九頭蛇據點。' },
    { h: '反派', body: '紅骷髏（Johann Schmidt）是 Erskine 的第一個實驗體，血清放大了他的惡。他掌管納粹科學部門九頭蛇，並在挪威奪得特斯拉方塊作為超級武器的能源。' },
    { h: '寶石', body: '特斯拉方塊（空間寶石）是本片的核心武器來源。紅骷髏最後徒手觸碰它而被傳送走 —— 他日後出現在《無限之戰》的沃米爾星，成為靈魂寶石的守護者。', highlight: true },
    { h: '犧牲與冰封', body: '好友巴奇在火車行動中墜落山谷（實則被九頭蛇擷取）。史蒂夫為阻止轟炸而駕機墜入北極，冰封 70 年後在現代甦醒。他與 Peggy Carter 的那支未赴的舞約，成為貫穿整個角色的遺憾。', highlight: true }
  ],
  stones: ['space'],
  related: ['winter-soldier', 'avengers-1', 'endgame', 'agent-carter-oneshot', 'agent-carter-tv']
},
{
  id: 'avengers-1', no: 6, title: '復仇者聯盟', en: 'The Avengers',
  year: 2012, date: '2012 / 05 / 04', director: 'Joss Whedon',
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers'],
  era: 'rise', chrono: 2012, glyph: 'star', accent: ['#1d4ed8', '#dc2626'],
  relevance: 'core',
  tagline: '六人首度集結・紐約大戰',
  summary: '洛基持權杖率奇塔黎大軍入侵紐約。尼克福瑞啟動「復仇者計畫」，集結鋼鐵人、美國隊長、雷神、浩克、黑寡婦、鷹眼六人。',
  sections: [
    { h: '劇情', body: '洛基受幕後勢力（薩諾斯與其中人 The Other）指使，來到地球奪取特斯拉方塊、開啟通往奇塔黎大軍的傳送門。他用權杖控制了鷹眼與 Selvig 博士。' },
    { h: '集結', body: '六名性格衝突的英雄從互相敵視到並肩作戰。寇森探員之死成為凝聚他們的關鍵 —— 福瑞用沾血的復仇者卡片激起他們的鬥志。' },
    { h: '紐約大戰', body: '最終決戰橫跨曼哈頓中城。東尼把核彈帶進傳送門送往奇塔黎母艦，自己自由落體墜回、被浩克接住。這場戰役的廢墟與外星科技，日後直接造就了《返校日》的反派禿鷹。' },
    { h: '兩顆寶石同場', body: '特斯拉方塊（空間寶石）與洛基的權杖（內藏心靈寶石）。權杖日後被九頭蛇取得，最終催生出奧創與幻視。', highlight: true },
    { h: '片尾彩蛋', body: '第一顆彩蛋首度露出薩諾斯的面容 —— 他聽到「挑戰人類等於求死」時露出笑容。第二顆是六人默默吃沙威瑪。' }
  ],
  stones: ['space', 'mind'],
  related: ['age-of-ultron', 'winter-soldier', 'iron-man-3', 'homecoming', 'loki-s1']
},

/* ================= PHASE TWO (2013–2015) ================= */
{
  id: 'iron-man-3', no: 7, title: '鋼鐵人3', en: 'Iron Man 3',
  year: 2013, date: '2013 / 05 / 03', director: 'Shane Black',
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['avengers'],
  era: 'rise', chrono: 2012, glyph: 'arc', accent: ['#991b1b', '#ea580c'],
  relevance: 'optional',
  tagline: '紐約大戰後的創傷',
  summary: '東尼在紐約大戰後罹患嚴重 PTSD、失眠並強迫性打造戰甲。神秘恐怖分子「滿大人」的攻擊摧毀他的一切，逼他從零開始。',
  sections: [
    { h: '劇情', body: '東尼因目睹外星入侵而崩潰，靠不斷造戰甲來緩解焦慮。滿大人的爆炸案炸毀他的馬里布豪宅，他失去一切、流落田納西，靠一個小男孩與自製土砲裝備反擊。' },
    { h: '真相反轉', body: '「滿大人」其實是被雇來演戲的落魄英國演員 Trevor Slattery。真正的反派是 Aldrich Killian —— 他研發「絕境病毒（Extremis）」，一種能讓人再生、發熱甚至爆炸的基因改造技術。', highlight: true },
    { h: '結局', body: '東尼引爆所有戰甲、動手術取出胸口彈片，象徵他不再需要盔甲來定義自己。' },
    { h: '延伸', body: 'Trevor Slattery 在一夜短片《All Hail the King》與《尚氣與十環傳奇》中回歸 —— 真正的十環幫首領文武對他冒用名號極為不滿。' }
  ],
  related: ['iron-man-2', 'avengers-1', 'shang-chi', 'all-hail-the-king']
},
{
  id: 'thor-2', no: 8, title: '雷神索爾2：黑暗世界', en: 'Thor: The Dark World',
  year: 2013, date: '2013 / 11 / 08', director: 'Alan Taylor',
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['avengers', 'cosmic'],
  era: 'rise', chrono: 2013, glyph: 'hammer', accent: ['#3730a3', '#7f1d1d'],
  relevance: 'optional',
  tagline: '現實寶石現形',
  summary: '黑暗精靈 Malekith 甦醒，想利用遠古武器「乙太」在九界匯聚之時讓宇宙重回黑暗。Jane Foster 意外被乙太附身。',
  sections: [
    { h: '劇情', body: 'Jane 在倫敦調查空間異常時被遠古物質「乙太」侵入體內。索爾帶她回阿斯嘉求助，卻引來 Malekith 的攻擊。索爾之母 Frigga 為保護 Jane 而死。' },
    { h: '合作', body: '索爾被迫釋放獄中的洛基合作復仇。洛基假死換取自由 —— 片尾揭露他偽裝成奧丁竊據了阿斯嘉王座。' },
    { h: '寶石', body: '片尾中景彩蛋：阿斯嘉人把乙太交給「收藏者（Collector）」保管，並說明「把兩顆無限寶石放在一起太危險」—— 正式揭露乙太就是現實寶石。', highlight: true }
  ],
  stones: ['reality'],
  related: ['thor', 'thor-3', 'infinity-war', 'gotg-1']
},
{
  id: 'winter-soldier', no: 9, title: '美國隊長2：酷寒戰士', en: 'Captain America: The Winter Soldier',
  year: 2014, date: '2014 / 04 / 04', director: 'Anthony and Joe Russo',
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['avengers', 'street'],
  era: 'shield', chrono: 2014, glyph: 'shield', accent: ['#0f172a', '#b91c1c'],
  relevance: 'core',
  tagline: '神盾局瓦解・MCU 最大轉折之一',
  summary: '一部政治驚悚片。史蒂夫發現他效力的神盾局，數十年來早已被九頭蛇從內部徹底滲透。',
  sections: [
    { h: '劇情', body: '尼克福瑞遭伏擊「身亡」後，史蒂夫與娜塔莎被神盾局全面通緝。他們發現 Arnim Zola 的意識被保存在地下電腦中 —— 九頭蛇自二戰後就藉「迴紋針行動」寄生在神盾局內部成長。' },
    { h: 'Project Insight', body: '九頭蛇的計畫是發射三艘天空母艦，用演算法預先鎖定並殺害數百萬名「未來的潛在威脅」—— 包括布魯斯班納與史蒂夫本人。這是對監控國家最直白的批判。', highlight: true },
    { h: '酷寒戰士', body: '神秘刺客被揭露是史蒂夫以為已死的好友巴奇 —— 他被九頭蛇擷取、洗腦、冷凍保存，當了七十年的殺人武器。「我這一輩子都在完成任務。」' },
    { h: '結局與影響', body: '史蒂夫把所有機密洩漏給全世界，神盾局就此瓦解。這個決定改變了整個 MCU 的權力結構，也直接引發《奧創紀元》《英雄內戰》以及影集《神盾局特工》的走向。獵鷹山姆威爾森在本片加入。', highlight: true }
  ],
  related: ['captain-america', 'civil-war', 'age-of-ultron', 'falcon-winter-soldier', 'thunderbolts']
},
{
  id: 'gotg-1', no: 10, title: '星際異攻隊', en: 'Guardians of the Galaxy',
  year: 2014, date: '2014 / 08 / 01', director: 'James Gunn',
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['cosmic'],
  era: 'shield', chrono: 2014, glyph: 'tree', accent: ['#7e22ce', '#f59e0b'],
  relevance: 'recommended',
  tagline: '力量寶石與一群混蛋',
  summary: '1988 年被外星人擄走的地球男孩彼得奎爾，長大後成了自稱「星爵」的賞金獵人。他偷到一顆神秘寶珠，招來整個銀河的追殺。',
  sections: [
    { h: '劇情', body: '星爵偷走寶珠後被 Ronan、薩諾斯與各路賞金獵人追殺。他與刺客葛摩菈、火箭浣熊、樹人格魯特、復仇者德克斯在監獄裡結盟，一群自私的邊緣人最終選擇為銀河而戰。' },
    { h: '反派', body: '克里帝國的狂熱分子 Ronan 原本替薩諾斯效力，取得寶珠後卻反噬主人，打算用它毀滅星域。' },
    { h: '寶石', body: '寶珠內藏力量寶石 —— 純粹的能量，觸碰者會被瞬間撕裂。五人靠手牽手分擔能量才承受住，最後交由新星軍團保管。（《無限之戰》開場薩諾斯已從新星軍團手中奪走。）', highlight: true },
    { h: '關鍵設定', body: '本片首度正式介紹薩諾斯本人（Josh Brolin）、涅布拉、收藏者與宇宙的規模。格魯特為保護同伴而犧牲、以幼苗重生。' }
  ],
  stones: ['power'],
  related: ['gotg-2', 'gotg-3', 'infinity-war', 'thor-2']
},
{
  id: 'age-of-ultron', no: 11, title: '復仇者聯盟2：奧創紀元', en: 'Avengers: Age of Ultron',
  year: 2015, date: '2015 / 05 / 01', director: 'Joss Whedon',
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['avengers'],
  era: 'shield', chrono: 2015, glyph: 'star', accent: ['#7f1d1d', '#0e7490'],
  relevance: 'recommended', group: 'avengers4',
  tagline: '幻視誕生・雙胞胎登場',
  summary: '東尼與班納偷偷用洛基權杖裡的 AI 打造全球維安系統「奧創」，它一上線就判定人類本身才是地球的威脅。',
  sections: [
    { h: '劇情', body: '復仇者攻下九頭蛇最後據點、奪回洛基權杖。東尼在權杖寶石中發現一個現成的人工智慧，說服班納祕密用它完成「奧創」計畫。奧創覺醒後立刻決定：要拯救地球就得消滅人類。' },
    { h: '雙胞胎', body: '汪達（緋紅女巫）與皮特羅（快銀）是索科維亞的孤兒，因憎恨史塔克軍火而自願接受九頭蛇的權杖實驗。他們先助奧創，看清其滅世意圖後倒戈。' },
    { h: '幻視誕生', body: '奧創為自己打造的完美合成人軀體，被復仇者搶下並注入 JARVIS 與心靈寶石，誕生出善良的「幻視」。他能舉起妙爾尼爾 —— 全場最漂亮的一幕。', highlight: true },
    { h: '結局', body: '奧創把索科維亞整座城市升空當隕石砸向地球。快銀為救鷹眼中彈犧牲。復仇者成功阻止，但索科維亞的毀滅成為《英雄內戰》中「索科維亞協議」的直接由來。', highlight: true },
    { h: '片尾彩蛋', body: '薩諾斯戴上無限手套：「好吧，還是我自己來。」' }
  ],
  stones: ['mind'],
  related: ['civil-war', 'infinity-war', 'wandavision', 'avengers-1']
},
{
  id: 'ant-man', no: 12, title: '蟻人', en: 'Ant-Man',
  year: 2015, date: '2015 / 07 / 17', director: 'Peyton Reed',
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['avengers'],
  era: 'shield', chrono: 2015, glyph: 'ant', accent: ['#0891b2', '#b45309'],
  relevance: 'recommended',
  tagline: '量子領域首度出現 —— 日後救了全宇宙',
  summary: '一場小規模的竊盜片。前科犯 Scott Lang 被發明家 Hank Pym 選中，穿上能自由縮放的蟻人戰衣。',
  sections: [
    { h: '劇情', body: '剛出獄、想重新贏得女兒 Cassie 信任的 Scott Lang 誤打誤撞偷到蟻人戰衣。Hank Pym 訓練他去阻止門徒 Darren Cross 復刻並軍事化縮小技術。' },
    { h: '反派', body: 'Darren Cross（黃蜂人 Yellowjacket）打算把縮小戰衣賣給包括九頭蛇在內的買家。' },
    { h: '量子領域（極關鍵）', body: 'Scott 為擊敗 Cross 而突破極限縮小、墜入「量子領域」—— 一個時間空間規則失效的次原子維度，並成功返回。這證明了量子領域可以往返，正是四年後《終局之戰》「時間搶劫」的整套理論基礎。', highlight: true },
    { h: '前史', body: 'Hank 之妻 Janet van Dyne（初代黃蜂女）當年為阻止飛彈而無限縮小、消失在量子領域 —— 這條線一路延伸到《蟻人2》與《量子狂潮》。' }
  ],
  related: ['ant-man-2', 'civil-war', 'endgame', 'quantumania']
},

/* ================= PHASE THREE (2016–2019) ================= */
{
  id: 'civil-war', no: 13, title: '美國隊長3：英雄內戰', en: 'Captain America: Civil War',
  year: 2016, date: '2016 / 05 / 06', director: 'Anthony and Joe Russo',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers', 'spidey'],
  era: 'civil', chrono: 2016, glyph: 'shield', accent: ['#1e40af', '#dc2626'],
  relevance: 'core', group: 'avengers4',
  tagline: '復仇者分裂・蜘蛛人與黑豹登場',
  summary: '聯合國要求超級英雄接受政府管制，復仇者為此分裂成兩派。而幕後有一個失去一切的普通人，正用最精準的方式讓他們自相殘殺。',
  sections: [
    { h: '索科維亞協議', body: '在拉哥斯任務造成平民傷亡後，聯合國提出《索科維亞協議》要求復仇者受政府節制。東尼因愧疚而贊成；史蒂夫因不信任政治議程而反對。' },
    { h: '分裂', body: '鋼鐵人陣營：東尼、戰爭機器、幻視、黑寡婦、黑豹、蜘蛛人。美隊陣營：史蒂夫、獵鷹、酷寒戰士、緋紅女巫、鷹眼、蟻人。德國機場一戰是全片高潮。' },
    { h: '蜘蛛人首度登場', body: '東尼找上住在皇后區、被蜘蛛咬到而獲得能力的高中生彼得帕克，替他升級戰衣並招募他參戰。這奠定了東尼與彼得「導師／父子」的關係，貫穿整個蜘蛛人三部曲。', highlight: true },
    { h: '黑豹登場', body: "汎達國王 T'Chaka 死於維也納爆炸案，王子 T'Challa 以黑豹身分追殺他以為的兇手巴奇，最後選擇放下復仇。" },
    { h: '真正的反派', body: '齊莫（Zemo）是索科維亞之戰中失去全家的普通軍官。他不求毀滅世界，只要復仇者從內部瓦解 —— 他找出巴奇被洗腦時殺害東尼父母的錄影帶，在最後一刻播給東尼看。三人在西伯利亞的死鬥讓聯盟徹底破碎。', highlight: true },
    { h: '結局', body: '史蒂夫放下盾牌帶巴奇離開，復仇者名存實亡。這個分裂狀態直接導致兩年後面對薩諾斯時毫無準備。' }
  ],
  related: ['homecoming', 'winter-soldier', 'age-of-ultron', 'infinity-war', 'black-panther']
},
{
  id: 'doctor-strange', no: 14, title: '奇異博士', en: 'Doctor Strange',
  year: 2016, date: '2016 / 11 / 04', director: 'Scott Derrickson',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers', 'mystic'],
  era: 'civil', chrono: 2017, glyph: 'eye', accent: ['#0d9488', '#f59e0b'],
  relevance: 'recommended',
  tagline: '魔法與時間寶石進入 MCU',
  summary: '傲慢的頂尖神經外科醫生史蒂芬史傳奇在車禍中失去雙手功能，走投無路下前往加德滿都尋求治療，卻學會了魔法。',
  sections: [
    { h: '劇情', body: '史傳奇散盡家財求醫無果，在卡瑪泰姬遇見古一法師（The Ancient One），從一個徹底的唯物論者被迫接受多重維度的存在。' },
    { h: '反派', body: '前門徒 Kaecilius 竊取禁忌咒語，想把地球獻給黑暗次元的 Dormammu 以換取永生。' },
    { h: '結局', body: '史傳奇沒有靠打贏 Dormammu 取勝，而是用時間寶石把自己鎖進無限死亡循環，用「我永遠不會停」逼對方談判 —— MCU 中最聰明的解法之一。' },
    { h: '寶石', body: '阿加莫托之眼內藏時間寶石。史傳奇成為紐約至聖所的守護者。', highlight: true },
    { h: '關鍵設定', body: '本片建立了至尊法師、三大聖所、鏡像空間、傳送門與「多重宇宙」的概念 —— 這是多元宇宙傳奇的地基。' }
  ],
  stones: ['time'],
  related: ['infinity-war', 'no-way-home', 'multiverse-of-madness', 'thor-3']
},
{
  id: 'gotg-2', no: 15, title: '星際異攻隊2', en: 'Guardians of the Galaxy Vol. 2',
  year: 2017, date: '2017 / 05 / 05', director: 'James Gunn',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['cosmic'],
  era: 'shield', chrono: 2014, glyph: 'tree', accent: ['#c026d3', '#0891b2'],
  relevance: 'optional',
  tagline: '「他也許是你父親，但他不是你爸爸」',
  summary: '星爵終於見到生父伊戈 —— 一個活了數百萬年的活體行星。但父愛的真相遠比他想像的殘酷。',
  sections: [
    { h: '劇情', body: '伊戈（Ego）自稱天神族（Celestial），把星爵帶回自己的行星本體。真相是：他在無數星球留下後代只為找到能承接其能量的繼承人，並殺光了所有失敗品 —— 包括星爵的母親，是他親手種下腫瘤。' },
    { h: '勇度的救贖', body: '掠奪者首領勇度當年受雇送小孩給伊戈，卻獨獨留下了彼得。他在最後犧牲自己救彼得：「他也許是你父親，但他不是你爸爸。」這是全片的情感核心。', highlight: true },
    { h: '設定影響', body: '確立星爵的天神族血統（《無限之戰》後失效）。涅布拉與葛摩菈的姊妹關係開始和解。曼帝斯加入隊伍。' },
    { h: '彩蛋', body: '五顆彩蛋之一介紹了亞當術士（Adam Warlock）的誕生，他在《星際異攻隊3》登場。' }
  ],
  related: ['gotg-1', 'gotg-3', 'eternals', 'infinity-war']
},
{
  id: 'homecoming', no: 16, title: '蜘蛛人：返校日', en: 'Spider-Man: Homecoming',
  year: 2017, date: '2017 / 07 / 07', director: 'Jon Watts',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['spidey', 'street'],
  era: 'civil', chrono: 2016, glyph: 'wing', accent: ['#dc2626', '#0e7490'],
  relevance: 'core',
  tagline: '親切的鄰居蜘蛛人',
  summary: '15 歲的彼得急著證明自己夠格當復仇者，但東尼要他先當好「親切的鄰居蜘蛛人」。而他撞上的第一個對手，動機無比真實。',
  sections: [
    { h: '主線', body: '彼得一邊應付高中生活，一邊拚命想引起東尼注意。他發現有人在紐約街頭販售外星科技武器，決心自己解決。' },
    { h: '反派禿鷹（Michael Keaton 飾）', body: 'Adrian Toomes 原是承包紐約大戰廢墟清理的小包商，投入大量資金後生意卻被史塔克與政府合資的「損害管制部門」一夕搶走。他憤而私藏奇塔黎科技、打造飛行裝走私軍火。動機是「為家人生計、痛恨史塔克這種權貴」—— 公認漫威最有說服力的反派之一。', highlight: true },
    { h: '經典轉折', body: '彼得要帶心儀的女生 Liz 去返校舞會，去接她時開門的竟是 Liz 的爸爸 —— 就是禿鷹本人。接下來那段車內對話，是全片最令人窒息的戲。', highlight: true },
    { h: '配角', body: '好友 Ned Leeds（「坐在椅子上的那個人」）、同學 MJ（Michelle Jones）、愛嗆人的 Flash Thompson、史塔克的保鑣兼司機 Happy Hogan。' },
    { h: '結局', body: '彼得阻止禿鷹搶劫史塔克貨機，並在墜機後救了他一命。東尼提議讓他正式加入復仇者，彼得婉拒 —— 他選擇繼續當高中生英雄。片尾 May 嬸嬸撞見他穿著戰衣。' },
    { h: '彩蛋', body: '入獄的禿鷹遇到 Mac Gargan（漫畫中的「蠍子」），選擇不透露蜘蛛人身分以報答救命之恩。Michael Mando 已確認回歸《蜘蛛人4》。' }
  ],
  related: ['civil-war', 'far-from-home', 'spider-man-4', 'avengers-1']
},
{
  id: 'thor-3', no: 17, title: '雷神索爾3：諸神黃昏', en: 'Thor: Ragnarok',
  year: 2017, date: '2017 / 11 / 03', director: 'Taika Waititi',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers', 'cosmic'],
  era: 'civil', chrono: 2017, glyph: 'hammer', accent: ['#a21caf', '#f59e0b'],
  relevance: 'recommended',
  tagline: '直接接上《無限之戰》',
  summary: '奧丁之死釋放出被封印的長女海拉 —— 死亡女神。她一手捏碎妙爾尼爾、佔領阿斯嘉，索爾則流落垃圾星淪為角鬥士。',
  sections: [
    { h: '劇情', body: '海拉（Hela）是奧丁在建立仁慈形象前的行刑者與征服者，被封印數千年。她回歸後徒手捏碎雷神之鎚，把索爾與洛基丟出彩虹橋。' },
    { h: '垃圾星', body: '索爾墜落薩卡星，被女武神 Valkyrie 抓去給「至尊者（Grandmaster）」當角鬥士，並與失蹤兩年的浩克重逢。' },
    { h: '諸神黃昏', body: '索爾領悟到海拉的力量來自阿斯嘉這片土地，於是選擇主動引發「諸神黃昏」—— 放出火焰惡魔蘇特爾（Surtur）毀滅整個阿斯嘉來殺死海拉。「阿斯嘉不是一個地方，而是一群人。」', highlight: true },
    { h: '結局與銜接', body: '索爾失去一隻眼睛、失去鎚子、失去家園，率倖存的阿斯嘉人乘船流亡。片尾薩諾斯的巨艦「聖言號」擋在他們面前 —— 直接接上《無限之戰》開場。', highlight: true }
  ],
  related: ['infinity-war', 'thor-2', 'thor-4', 'doctor-strange']
},
{
  id: 'black-panther', no: 18, title: '黑豹', en: 'Black Panther',
  year: 2018, date: '2018 / 02 / 16', director: 'Ryan Coogler',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers'],
  era: 'civil', chrono: 2016, glyph: 'panther', accent: ['#4c1d95', '#0f172a'],
  relevance: 'recommended',
  tagline: '奧斯卡最佳影片提名的漫威電影',
  summary: "父親死後，T'Challa 回國繼位成為汎達國王。但一個從美國來的挑戰者，帶著汎達自己造下的罪回來討債。",
  sections: [
    { h: '汎達', body: '表面上是貧窮農業國，實則因遠古隕石帶來的「汎金屬（vibranium）」而擁有遙遙領先世界的科技。世代奉行孤立主義。' },
    { h: '反派齊爾蒙格', body: "Erik Killmonger 是 T'Challa 的堂弟 —— 他的父親（王叔）當年在美國目睹黑人受壓迫，想用汎金屬武裝他們，被國王親手殺死並棄下年幼的兒子。Killmonger 回來奪王位不是為了自己，是為了報復整個拋棄他的國家。他的訴求有正當性，這是他成為漫威最佳反派之一的原因。", highlight: true },
    { h: '名台詞', body: '「把我葬在海裡，跟那些從船上跳下去的祖先一起 —— 因為他們知道，死亡好過為奴。」' },
    { h: '結局', body: "T'Challa 認知到孤立主義本身就是共犯，決定向世界開放汎達的資源與科技。這個決定改變了 MCU 的地緣政治。", highlight: true },
    { h: '演員', body: 'Chadwick Boseman 於 2020 年因大腸癌逝世，《黑豹2》未重新選角，而是直接處理角色的死亡。' }
  ],
  related: ['civil-war', 'infinity-war', 'wakanda-forever', 'eyes-of-wakanda']
},
{
  id: 'infinity-war', no: 19, title: '復仇者聯盟3：無限之戰', en: 'Avengers: Infinity War',
  year: 2018, date: '2018 / 04 / 27', director: 'Anthony and Joe Russo',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers', 'cosmic'],
  era: 'snap', chrono: 2018, glyph: 'gauntlet', accent: ['#7e22ce', '#f0b429'],
  relevance: 'core', group: 'avengers4',
  tagline: '反派獲勝的結局',
  summary: '薩諾斯終於親自出手。這部電影的主角其實是他 —— 一個堅信自己在做慈悲之事的屠夫。',
  sections: [
    { h: '薩諾斯的動機', body: '他的母星泰坦因人口過剩而毀滅，當年他提出隨機消滅半數人口的方案被斥為瘋子。如今他要用無限手套對全宇宙執行這個方案 —— 在他看來這是「仁慈」且絕對公平的。' },
    { h: '六顆寶石的爭奪', body: '開場即從索爾的難民船奪走空間寶石（並殺死洛基與海姆達爾）；從收藏者處取得現實寶石；力量寶石早已從新星軍團奪得；為靈魂寶石在沃米爾星推下養女葛摩菈；奇異博士交出時間寶石；最後在汎達奪取幻視的心靈寶石。' },
    { h: '靈魂寶石的代價', body: '取得靈魂寶石必須「犧牲你所愛之人」。薩諾斯真心愛葛摩菈 —— 這正是他能取得它的原因，也是全片最殘酷的一幕。', highlight: true },
    { h: '幻視之死', body: '汪達忍痛親手摧毀愛人額上的心靈寶石，薩諾斯卻用時間寶石把時間倒轉、當著她的面硬生生挖出寶石。她等於失去幻視兩次。', highlight: true },
    { h: '彈指', body: '薩諾斯集齊六顆、打了響指。全宇宙半數生命化為灰燼 —— 包含蜘蛛人、黑豹、幻視、緋紅女巫、奇異博士與大半異攻隊。「我早該直接瞄準頭的。」', highlight: true },
    { h: '奇異博士的伏筆', body: '他看過 14,000,605 種未來，只有一種能贏。他交出時間寶石時對東尼說「這是唯一的路」—— 答案要到《終局之戰》才揭曉。' }
  ],
  stones: ['space', 'reality', 'power', 'mind', 'time', 'soul'],
  related: ['endgame', 'thor-3', 'age-of-ultron', 'gotg-1', 'wandavision']
},
{
  id: 'ant-man-2', no: 20, title: '蟻人與黃蜂女', en: 'Ant-Man and the Wasp',
  year: 2018, date: '2018 / 07 / 06', director: 'Peyton Reed',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers'],
  era: 'snap', chrono: 2018, glyph: 'ant', accent: ['#0891b2', '#be123c'],
  relevance: 'recommended',
  tagline: '《終局之戰》的鑰匙藏在這裡',
  summary: '在《英雄內戰》後被軟禁在家的 Scott Lang，被 Hank 與 Hope 拉去執行一項任務：把困在量子領域三十年的 Janet 帶回來。',
  sections: [
    { h: '劇情', body: '故事發生在《無限之戰》之前。Hope van Dyne 正式成為黃蜂女。三人打造量子隧道，準備進入量子領域尋找失蹤三十年的 Janet van Dyne。' },
    { h: '反派', body: '幽靈（Ghost / Ava Starr）因量子事故而身體不斷相位穿透、痛苦不堪，急需 Janet 的量子能量續命。她不是壞人，只是走投無路 —— 她日後加入《雷霆特攻隊》。' },
    { h: '成功', body: 'Janet 被成功救回。她在量子領域待了三十年，並警告那裡有些東西不該被驚動（呼應日後的康）。' },
    { h: '片尾彩蛋（決定性）', body: 'Scott 進入量子領域採集能量，Hank、Janet、Hope 在外接應 —— 然後他們三人同時化為灰燼。Scott 被困在量子領域裡。正因如此他躲過了彈指，並在五年後被老鼠意外放出來，帶回「量子領域的時間流速不同」這個關鍵情報。整部《終局之戰》就是從這裡開始的。', highlight: true }
  ],
  related: ['ant-man', 'endgame', 'quantumania', 'infinity-war']
},
{
  id: 'captain-marvel', no: 21, title: '驚奇隊長', en: 'Captain Marvel',
  year: 2019, date: '2019 / 03 / 08', director: 'Anna Boden & Ryan Fleck',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['cosmic'],
  era: 'y1995', chrono: 1995, glyph: 'starburst', accent: ['#1d4ed8', '#dc2626'],
  relevance: 'optional',
  tagline: '1995 年・「復仇者」名稱的由來',
  summary: '一個失憶的克里帝國戰士墜落地球，在追查自己身世的過程中發現，她效忠的一方才是侵略者。',
  sections: [
    { h: '劇情', body: '1995 年，自稱 Vers 的克里星際戰士墜落洛杉磯。她與年輕的神盾局探員尼克福瑞聯手，逐步想起自己其實是地球空軍飛行員卡蘿丹佛斯。' },
    { h: '反轉', body: '她一直被教導史克魯人（Skrull）是邪惡的變形侵略者 —— 真相是他們是被克里帝國滅族、四散逃亡的難民。真正的反派是她的導師 Yon-Rogg 與克里的最高智慧。', highlight: true },
    { h: '寶石', body: '她的超能力來自特斯拉方塊（空間寶石）能量的爆炸。方塊當年被神盾局以「Project P.E.G.A.S.U.S.」研究。' },
    { h: '設定', body: '尼克福瑞在本片中因一隻叫 Goose 的「貓」（實為異形芙勒肯）而失去左眼。他看到卡蘿的呼號「Avenger」，因而把計畫命名為「復仇者計畫」。', highlight: true }
  ],
  stones: ['space'],
  related: ['endgame', 'the-marvels', 'secret-invasion', 'avengers-1']
},
{
  id: 'endgame', no: 22, title: '復仇者聯盟4：終局之戰', en: 'Avengers: Endgame',
  year: 2019, date: '2019 / 04 / 26', director: 'Anthony and Joe Russo',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers'],
  era: 'endgame', chrono: 2023, glyph: 'gauntlet', accent: ['#b45309', '#1e3a8a'],
  relevance: 'core', group: 'avengers4',
  tagline: '無限傳奇的終點',
  summary: '彈指五年後，倖存者仍活在廢墟裡。直到 Scott Lang 從量子領域爬出來，帶著一個瘋狂的想法。',
  sections: [
    { h: '五年之後（Blip）', body: '開場復仇者找到薩諾斯並殺了他，卻發現寶石已被他銷毀 —— 沒有回頭路。時間跳過五年：世界處於集體創傷中，史蒂夫在帶互助團體，東尼有了女兒，索爾酗酒發胖，娜塔莎獨自撐著聯盟。' },
    { h: '時間搶劫（Time Heist）', body: 'Scott 從量子領域回來，指出裡面的時間流速不同。東尼解出時間旅行的數學式。他們分頭回到 2012 紐約、2013 阿斯嘉、2014 莫拉格與沃米爾星蒐集寶石。', highlight: true },
    { h: '黑寡婦之死', body: '娜塔莎與鷹眼在沃米爾星爭著犧牲自己 —— 最後是她鬆手墜崖，換來靈魂寶石。她一生都在贖罪，最後用命換回半個宇宙。', highlight: true },
    { h: '最終決戰', body: '2014 年的薩諾斯循線來到現代。班納用自製手套彈指救回所有人。「Avengers... assemble.」全員集結對抗薩諾斯大軍。' },
    { h: '東尼史塔克之死', body: '東尼在最後一刻從薩諾斯手上偷走六顆寶石，戴上手套彈指消滅其大軍，但承受不住能量反噬而死。「I am Iron Man.」—— 與第一部的最後一句話首尾呼應。', highlight: true },
    { h: '美國隊長的結局', body: '他完成歸還寶石的任務後選擇留在過去，與 Peggy Carter 補上那支欠了七十年的舞、共度餘生。年老後回到現在，把盾牌交給山姆威爾森。', highlight: true },
    { h: '留下的裂縫', body: '2012 年的洛基變體趁亂帶走特斯拉方塊逃走 —— 這個分支時間線直接催生出影集《洛基》與整個多元宇宙傳奇。' }
  ],
  stones: ['space', 'reality', 'power', 'mind', 'time', 'soul'],
  related: ['infinity-war', 'far-from-home', 'loki-s1', 'falcon-winter-soldier', 'wandavision']
},
{
  id: 'far-from-home', no: 23, title: '蜘蛛人：離家日', en: 'Spider-Man: Far From Home',
  year: 2019, date: '2019 / 07 / 02', director: 'Jon Watts',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['spidey'],
  era: 'after', chrono: 2024, glyph: 'fishbowl', accent: ['#7c3aed', '#16a34a'],
  relevance: 'core',
  tagline: '無限傳奇的收尾・身分曝光',
  summary: '東尼死後，全世界都在問「誰來接班鋼鐵人」。彼得只想去歐洲畢旅跟 MJ 告白，卻遇上一個自稱來自平行宇宙的英雄。',
  sections: [
    { h: '時間點', body: '發生在《終局之戰》之後，是無限傳奇的正式收尾作。彼得深陷失去導師的哀傷，以及被期待接班的巨大壓力。' },
    { h: 'EDITH', body: '東尼留給彼得的遺物 —— 一副智慧眼鏡，代號取自「Even Dead, I\'m The Hero」，可存取史塔克全球衛星網路並操控一整批攻擊無人機。' },
    { h: '反派神秘客（Jake Gyllenhaal 飾）', body: 'Quentin Beck 謊稱自己來自 Earth-833、是對抗「元素怪」的英雄。真相是他是被東尼羞辱、開除的前史塔克全像投影工程師，糾集一群同樣被東尼虧待的員工，用無人機投影自導自演假災難、假扮英雄，目標是騙取 EDITH 的權限。', highlight: true },
    { h: '為什麼很重要', body: '他是 MCU 中第一個明確對觀眾說出「多元宇宙」的角色 —— 儘管那是謊言。這反而為兩年後真正的多元宇宙做了心理鋪墊。' },
    { h: '結局', body: '彼得在倫敦識破並擊敗神秘客，對方死於自己失控的無人機。彼得與 MJ 相戀。' },
    { h: '關鍵片尾彩蛋（引爆下一集）', body: '神秘客死前預錄的假影片被公開 —— 誣陷蜘蛛人是殺害他的兇手，並向全世界公布「彼得帕克就是蜘蛛人」。播出者是《號角日報》的 J. Jonah Jameson，由 J.K. Simmons 飾演 —— 正是當年托比版電影的同一位演員。', highlight: true }
  ],
  related: ['no-way-home', 'endgame', 'homecoming', 'spider-man-4']
}

];
