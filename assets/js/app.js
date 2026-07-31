/* ============================================================
   MCU 補課指南 — 應用程式邏輯（hash 路由 SPA）
   ============================================================ */
(function () {
  'use strict';

  var T = window.MCU_TIMELINE, C = window.MCU_CHARACTERS, K = window.MCU_CONCEPTS;
  var G = window.glyphSVG, P = window.posterSVG, A = window.avatarSVG;

  var byId = {};   T.forEach(function (e) { byId[e.id] = e; });
  var chById = {}; C.forEach(function (c) { chById[c.id] = c; });
  var kById = {};  K.forEach(function (k) { kById[k.id] = k; });

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* ---------- 分類標籤 ---------- */
  var SAGAS = window.MCU_SAGAS;

  var REL = {
    target:      { cls: 'b-target', label: '最新上映' },
    core:        { cls: 'b-core',   label: '主線必看' },
    recommended: { cls: 'b-rec',    label: '建議補' },
    optional:    { cls: 'b-opt',    label: '選看' },
    skippable:   { cls: 'b-skip',   label: '可跳過' }
  };

  function relBadge(e) {
    var r = REL[e.relevance]; if (!r) return '';
    return '<span class="badge ' + r.cls + '">' + r.label + '</span>';
  }
  function typeBadges(e) {
    var h = '';
    if (e.type === 'series')  h += '<span class="badge b-series">影集' + (e.episodes ? ' ' + esc(e.episodes) : '') + '</span>';
    if (e.type === 'special') h += '<span class="badge b-series">特別節目</span>';
    if (e.type === 'oneshot') h += '<span class="badge b-new">One-Shot 短片</span>';
    if (e.saga === 'sony')     h += '<span class="badge b-legacy">其他宇宙</span>';
    if (e.saga === 'defenders')h += '<span class="badge b-legacy">捍衛者聯盟</span>';
    if (e.saga === 'marveltv') h += '<span class="badge b-skip">正史地位模糊</span>';
    if (e.upcoming) h += '<span class="badge b-new">尚未上映</span>';
    if (e.warning)  h += '<span class="badge b-warn">資訊已更新</span>';
    return h;
  }
  function starStr(n) {
    if (!n) return '';
    return '<span class="stars" title="對蜘蛛人4的重要性">' +
      new Array(n + 1).join('★') + new Array(5 - n + 1).join('☆') + '</span>';
  }
  function catLabel(id) {
    var c = window.MCU_CATS.filter(function (x) { return x.id === id; })[0];
    return c ? c.label : id;
  }

  /* 由 date 字串（"2021 / 07 / 09"、"2015–2018"、"2011"）推出可排序的鍵值，
     讓同一年的電影與影集能照真正的上映先後排列 */
  function relKey(e) {
    var m = String(e.date || e.year).match(/(\d{4})\s*[\/年.-]?\s*(\d{1,2})?\s*[\/月.-]?\s*(\d{1,2})?/);
    if (!m) return (e.year || 0) * 10000;
    return (+m[1]) * 10000 + (m[2] ? +m[2] : 0) * 100 + (m[3] ? +m[3] : 0);
  }

  /* ---------- 狀態 ---------- */
  var state = {
    view: 'home',
    order: 'release',      // release | story
    cats: [],              // 空 = 全部
    mustOnly: false,
    chGroup: 'all',
    base: 'home'
  };

  /* ============================================================
     首頁
     ============================================================ */
  function renderHome() {
    var tldr = window.MCU_TLDR.map(function (t, i) {
      return '<div class="tldr-card"><span class="n">' + (i + 1) + '</span>' +
        G(t.glyph) + '<h3>' + esc(t.h) + '</h3><p>' + esc(t.body) + '</p></div>';
    }).join('');

    var finds = window.MCU_FINDINGS.map(function (f) {
      return '<div class="finding' + (f.key ? ' key' : '') + '"><div class="num"></div>' +
        '<div><h4>' + esc(f.h) + '</h4><p>' + esc(f.body) + '</p></div></div>';
    }).join('');

    var path = window.MCU_PLAN_A.items.map(function (it, i) {
      var e = byId[it.entry];
      return '<button class="path-step" data-entry="' + e.id + '">' +
        '<span class="i">' + (i + 1) + '</span>' +
        '<b>' + esc(e.title) + '</b>' +
        '<span>' + esc(it.why || e.en) + '</span></button>';
    }).join('');

    var sm4 = byId['spider-man-4'];

    var nav = [
      { v: 'timeline',   g: 'list',     t: '完整時間線', d: '從遠古的汎達到 2027 年的《秘密戰爭》，' + T.length + ' 部作品的完整劇情，可切換上映順序與劇情年代順序。' },
      { v: 'phases',     g: 'star',     t: '六個階段',   d: '照漫威官方的「階段」與「傳奇」分類瀏覽 —— 理解 MCU 結構最快的角度。' },
      { v: 'characters', g: 'spider',   t: '角色圖鑑',   d: C.length + ' 位角色，每一位都有自己的個人時間線 —— 用角色來理解劇情。' },
      { v: 'concepts',   g: 'gauntlet', t: '核心概念',   d: '彈指、多元宇宙、TVA、量子領域、六顆無限寶石 —— 新手先讀這裡。' },
      { v: 'sm4',        g: 'spider',   t: '《蜘蛛人4》檔案', d: '最新上映的一部：劇情設定、完整卡司與已知的一切。' },
      { v: 'guide',      g: 'bulb',     t: '觀影指南',   d: '10 部主線精華清單、觀影順序比較、影集取捨與分階段建議。' }
    ].map(function (n) {
      return '<button class="kv" data-go="' + n.v + '">' +
        '<span class="ico" style="background:linear-gradient(140deg,var(--red),var(--blue))">' + G(n.g) + '</span>' +
        '<span><b>' + n.t + '</b><p>' + esc(n.d) + '</p></span></button>';
    }).join('');

    return '' +
    '<section class="hero">' + window.heroWebSVG() +
      '<div class="wrap hero-in">' +
        '<span class="kicker"><span class="dot"></span>2008–2027・六個階段・兩大傳奇</span>' +
        '<h1>從零開始，<br>看懂<span class="hl">整個漫威電影宇宙</span></h1>' +
        '<p class="lede">沒看過任何一部漫威作品也沒關係。這裡有全部 ' + T.length + ' 部作品的完整劇情 —— ' +
          '電影、影集、特別節目、One-Shot 短片、捍衛者聯盟，還有《無家日》引用的舊蜘蛛人電影。' +
          '你可以照時間線讀、照階段讀，也可以挑一個角色慢慢跟。</p>' +
        '<div class="hero-cta">' +
          '<button class="btn btn-primary" data-go="guide">' + G('bulb') + '我是新手，該從哪看起？</button>' +
          '<button class="btn btn-ghost" data-go="timeline">' + G('list') + '看完整時間線</button>' +
        '</div>' +
        '<div class="hero-stats">' +
          '<div><b>' + T.length + '</b><span>部作品完整解說</span></div>' +
          '<div><b>' + C.length + '</b><span>位角色可點閱</span></div>' +
          '<div><b>6</b><span>個階段兩大傳奇</span></div>' +
          '<div><b>6</b><span>顆無限寶石去向</span></div>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">TL;DR</span>' +
      '<h2>三句話回答核心問題</h2></div>' +
      '<div class="tldr">' + tldr + '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">最短路徑</span>' +
      '<h2>時間有限？這十部就是整個宇宙的骨架</h2>' +
      '<p class="sub">' + esc(window.MCU_PLAN_A.meta) + '。點任一部可以直接看該片的完整劇情。</p></div>' +
      '<div class="path">' + path + '</div>' +
      '<div class="tip">' + G('bulb') + '<div>' + esc(window.MCU_PLAN_A.tip) + '</div></div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Key Findings</span>' +
      '<h2>重點速覽</h2></div>' +
      '<div class="findings">' + finds + '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Spotlight</span>' +
      '<h2>《蜘蛛人4：Brand New Day》</h2></div>' +
      '<button class="card" data-entry="spider-man-4" style="max-width:none">' +
        '<div class="card-art" style="aspect-ratio:3/1">' + P(sm4) +
          '<div class="veil"></div>' +
          '<div class="tags">' + relBadge(sm4) + '</div>' +
          '<div class="ttl"><b>' + esc(sm4.title) + '</b><i>' + esc(sm4.en) + ' ・ ' + esc(sm4.date) + '</i></div>' +
        '</div>' +
        '<div class="card-body"><span class="tagline">' + esc(sm4.tagline) + '</span>' +
        '<p class="sum">' + esc(sm4.summary) + '</p>' +
        '<div class="card-foot"><span>Phase 6 ・ 2 小時 25 分 ・ PG-13</span>' +
        '<span class="more">看完整檔案' + G('chevron') + '</span></div></div>' +
      '</button>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">怎麼用這個網站</span>' +
      '<h2>五種入口，挑一個開始</h2></div>' +
      '<div class="grid grid-2">' + nav + '</div>' +
    '</div></section>';
  }

  /* ============================================================
     時間線
     ============================================================ */
  function filtered() {
    return T.filter(function (e) {
      if (state.mustOnly && e.relevance !== 'core' && e.relevance !== 'target' && e.relevance !== 'recommended') return false;
      if (state.cats.length) {
        var hit = (e.cats || []).some(function (c) { return state.cats.indexOf(c) >= 0; });
        if (!hit) return false;
      }
      return true;
    });
  }

  function tlCard(e) {
    return '<button class="tl-card' + (e.isTarget ? ' is-target' : '') + '" data-entry="' + e.id + '">' +
      '<div class="tl-art">' + P(e, { center: true }) + '<div class="fade"></div></div>' +
      '<div class="tl-body">' +
        '<div class="tl-meta"><span class="yr">' + (e.date || e.year) + '</span>' +
          relBadge(e) + typeBadges(e) + starStr(e.stars) + '</div>' +
        '<h3>' + esc(e.title) + '</h3>' +
        '<div class="en">' + esc(e.en) + ' ・ ' + esc(e.phase) + '</div>' +
        '<div class="tagline">' + esc(e.tagline) + '</div>' +
        '<p class="sum">' + esc(e.summary) + '</p>' +
      '</div></button>';
  }

  function renderTimeline() {
    var list = filtered(), html = '';

    if (!list.length) {
      html = '<div class="empty">' + G('search') + '<p>沒有符合篩選條件的作品，試著放寬篩選。</p></div>';
    } else if (state.order === 'release') {
      SAGAS.forEach(function (s) {
        var items = list.filter(function (e) { return e.saga === s.id; })
          .sort(function (a, b) { return relKey(a) - relKey(b) || a.no - b.no; });
        if (!items.length) return;
        html += '<div class="era-head"><b>' + esc(s.label) + '</b><span>' + esc(s.sub) + '</span></div>';
        html += items.map(function (e) {
          return '<div class="tl-item r-' + e.relevance + '">' + tlCard(e) + '</div>';
        }).join('');
      });
    } else {
      window.MCU_ERAS.forEach(function (era) {
        var items = list.filter(function (e) { return e.era === era.id; })
          .sort(function (a, b) { return a.chrono - b.chrono; });
        if (!items.length) return;
        html += '<div class="era-head"><b>' + esc(era.label) + '</b><span>' + esc(era.sub) + '</span></div>';
        html += items.map(function (e) {
          return '<div class="tl-item r-' + e.relevance + '">' + tlCard(e) + '</div>';
        }).join('');
      });
    }

    var chips = window.MCU_CATS.map(function (c) {
      return '<button class="chip' + (state.cats.indexOf(c.id) >= 0 ? ' on' : '') + '" data-cat="' + c.id + '">' +
        '<span class="swatch" style="background:' + c.color + '"></span>' + c.label + '</button>';
    }).join('');

    return '' +
    '<section class="section" style="padding-bottom:26px"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Timeline</span>' +
      '<h2>完整時間線</h2>' +
      '<p class="sub">每一部都可以點開，裡面是完整劇情、關鍵轉折與它跟《蜘蛛人4》的關聯。' +
      '「上映順序」是給新手的建議看法；「劇情年代」則按故事發生的時間排列。</p></div>' +
    '</div></section>' +

    '<div class="tl-bar"><div class="wrap tl-bar-in">' +
      '<div class="seg">' +
        '<button data-order="release"' + (state.order === 'release' ? ' class="on"' : '') + '>上映順序</button>' +
        '<button data-order="story"' + (state.order === 'story' ? ' class="on"' : '') + '>劇情年代</button>' +
      '</div>' +
      '<div class="chips">' + chips +
        '<button class="chip' + (state.mustOnly ? ' on' : '') + '" data-must="1">' + G('check') + '只看必看／建議</button>' +
      '</div>' +
      '<span class="tl-count">' + list.length + ' / ' + T.length + ' 部</span>' +
    '</div></div>' +

    '<div class="wrap"><div class="tl">' + html + '</div></div>';
  }

  /* ============================================================
     角色
     ============================================================ */
  function renderCharacters() {
    var groups = window.MCU_CHAR_GROUPS;
    var list = state.chGroup === 'all' ? C : C.filter(function (c) { return c.group === state.chGroup; });

    var chips = '<button class="chip' + (state.chGroup === 'all' ? ' on' : '') + '" data-chg="all">全部 ' + C.length + '</button>' +
      groups.map(function (g) {
        var n = C.filter(function (c) { return c.group === g.id; }).length;
        return '<button class="chip' + (state.chGroup === g.id ? ' on' : '') + '" data-chg="' + g.id + '">' +
          '<span class="swatch" style="background:' + g.color + '"></span>' + g.label + ' ' + n + '</button>';
      }).join('');

    var cards = list.map(function (c) {
      var badges = '';
      if (c.isNew) badges += '<span class="badge b-new">蜘蛛人4 新角色</span>';
      if (c.unconfirmed) badges += '<span class="badge b-unconf">未經證實</span>';
      if (c.warning) badges += '<span class="badge b-warn">資訊已更新</span>';
      return '<button class="ch-card" data-char="' + c.id + '">' +
        '<div class="ch-top">' + A(c) +
          '<div class="ch-name"><b>' + esc(c.name) + '</b><i>' + esc(c.en) + '</i></div></div>' +
        (badges ? '<div class="ch-badges">' + badges + '</div>' : '') +
        '<p class="tagline">' + esc(c.tagline) + '</p>' +
        '<div class="actor">' + esc(c.actor) + '</div>' +
        '</button>';
    }).join('');

    return '' +
    '<section class="section" style="padding-bottom:26px"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Characters</span>' +
      '<h2>角色圖鑑</h2>' +
      '<p class="sub">除了時間線，你也可以用角色來理解劇情。點任一位角色，會看到他／她的' +
      '<b>個人時間線</b> —— 在哪一部做了什麼、發生了什麼事，以及跟《蜘蛛人4》的關係。</p></div>' +
      '<div class="chips" style="margin-bottom:26px">' + chips + '</div>' +
      '<div class="grid grid-4">' + cards + '</div>' +
    '</div></section>';
  }

  /* ============================================================
     核心概念
     ============================================================ */
  function renderConcepts() {
    var terms = K.map(function (k) {
      return '<button class="kv" data-key="' + k.id + '">' +
        '<span class="ico" style="background:linear-gradient(140deg,' + k.accent[0] + ',' + k.accent[1] + ')">' + G(k.glyph) + '</span>' +
        '<span><b>' + esc(k.term) + '</b><div class="en">' + esc(k.en) + '</div>' +
        '<p>' + esc(k.def) + '</p>' +
        (k.note ? '<div class="note">' + esc(k.note) + '</div>' : '') + '</span></button>';
    }).join('');

    var stones = window.MCU_STONES.map(function (s) {
      return '<div class="stone" style="border-color:' + s.color + '40">' +
        window.stoneSVG(s) +
        '<b style="color:' + s.color + '">' + esc(s.name) + '</b>' +
        '<div class="en">' + esc(s.en) + '</div>' +
        '<span class="vessel">' + esc(s.vessel) + '</span>' +
        '<div class="first">' + esc(s.first) + '</div>' +
        '<p>' + esc(s.story) + '</p></div>';
    }).join('');

    var facs = window.MCU_FACTIONS.map(function (f) {
      return '<div class="faction"><b>' + esc(f.name) + '</b><div class="en">' + esc(f.en) + '</div>' +
        '<p>' + esc(f.desc) + '</p></div>';
    }).join('');

    return '' +
    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">新手先讀這個</span>' +
      '<h2>核心概念關鍵詞</h2>' +
      '<p class="sub">這 ' + K.length + ' 個名詞是看懂漫威的最低門檻。點任一項可以看到它出現在哪些作品裡。</p></div>' +
      '<div class="grid grid-2">' + terms + '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Infinity Stones</span>' +
      '<h2>六顆無限寶石</h2>' +
      '<p class="sub">六顆源自宇宙大爆炸的超強寶石。集齊六顆可為所欲為 —— 這就是薩諾斯做到的事。</p></div>' +
      '<div class="stones">' + stones + '</div>' +
      '<div class="tip" style="margin-top:22px">' + G('info') +
        '<div><b>六顆寶石的最終命運：</b>' + esc(window.MCU_STONES_FATE) + '</div></div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Factions</span>' +
      '<h2>組織與勢力</h2></div>' +
      '<div class="factions">' + facs + '</div>' +
    '</div></section>';
  }

  /* ============================================================
     階段瀏覽
     ============================================================ */
  function renderPhases() {
    var html = window.MCU_SAGAS.map(function (saga) {
      var phases = window.MCU_PHASES.filter(function (p) { return p.saga === saga.id; });
      if (!phases.length) return '';

      var body = phases.map(function (p) {
        var items = T.filter(function (e) { return e.phase === p.id; })
          .sort(function (a, b) { return relKey(a) - relKey(b) || a.no - b.no; });
        if (!items.length) return '';

        var cards = items.map(function (e) {
          return '<button class="card" data-entry="' + e.id + '">' +
            '<div class="card-art">' + P(e, { center: true }) + '<div class="veil"></div>' +
              '<div class="yr">' + esc(e.date || e.year) + '</div>' +
              '<div class="tags">' + relBadge(e) + '</div>' +
              '<div class="ttl"><b>' + esc(e.title) + '</b><i>' + esc(e.en) + '</i></div>' +
            '</div>' +
            '<div class="card-body"><span class="tagline">' + esc(e.tagline) + '</span>' +
            '<p class="sum">' + esc(e.summary) + '</p>' +
            '<div class="card-foot"><span>' + esc(e.type === 'film' ? '電影' : e.type === 'series' ? '影集' : e.type === 'special' ? '特別節目' : '短片') +
            '</span><span class="more">看劇情' + G('chevron') + '</span></div></div>' +
            '</button>';
        }).join('');

        return '<div class="phase-block">' +
          '<div class="phase-head">' +
            '<div><b>' + esc(p.label) + '</b><span>' + esc(p.years) + ' ・ ' + items.length + ' 部</span></div>' +
          '</div>' +
          '<p class="phase-desc">' + esc(p.desc) + '</p>' +
          '<div class="grid grid-3">' + cards + '</div>' +
        '</div>';
      }).join('');

      return '<section class="section"><div class="wrap">' +
        '<div class="sec-head">' +
          '<span class="eyebrow" style="color:' + saga.color + '">Saga</span>' +
          '<h2>' + esc(saga.label) + '</h2>' +
          '<p class="sub">' + esc(saga.sub) + '</p>' +
        '</div>' + body +
      '</div></section>';
    }).join('');

    return '<section class="section" style="padding-bottom:0"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Phases</span><h2>六個階段、兩大傳奇</h2>' +
      '<p class="sub">漫威把作品分成「階段（Phase）」，再把階段歸進「傳奇（Saga）」。' +
      '這是官方的分類方式，也是理解 MCU 結構最快的角度。</p></div>' +
    '</div></section>' + html;
  }

  /* ============================================================
     蜘蛛人4 檔案
     ============================================================ */
  function renderSM4() {
    var S = window.MCU_SM4, e = byId['spider-man-4'];

    var facts = S.facts.map(function (f) {
      return '<div class="fact"><div class="k">' + esc(f.k) + '</div>' +
        '<div class="v">' + esc(f.v) + '</div>' +
        (f.note ? '<div class="note">' + esc(f.note) + '</div>' : '') + '</div>';
    }).join('');

    var plot = S.plot.map(function (p) {
      return '<div class="blk"><h4>' + esc(p.h) + '</h4><p>' + esc(p.body) + '</p></div>';
    }).join('');

    var cast = S.cast.map(function (c) {
      var ch = c.charId && chById[c.charId];
      var av = ch ? A(ch) : A({ glyph: 'question', accent: ['#475569', '#1e293b'] });
      return '<button class="cast-row' + (c.key ? ' key' : '') + '"' +
        (ch ? ' data-char="' + ch.id + '"' : ' disabled style="cursor:default"') + '>' +
        av + '<span><div class="actor">' + esc(c.actor) + '</div>' +
        '<div class="role">' + esc(c.role) + (c.unconfirmed ? ' <span class="badge b-unconf">未證實</span>' : '') + '</div>' +
        (c.note ? '<div class="note">' + esc(c.note) + '</div>' : '') + '</span></button>';
    }).join('');

    return '' +
    '<section class="section"><div class="wrap">' +
      '<div class="sm4-hero">' + window.heroWebSVG() +
        '<div class="inner">' +
          '<div class="chips" style="margin-bottom:16px">' + relBadge(e) +
            '<span class="badge b-new">Phase 6</span></div>' +
          '<h1>' + esc(S.title) + '</h1>' +
          '<div class="en">' + esc(S.fullTitle) + '</div>' +
          '<div class="zh">' + esc(S.zhSub) + '</div>' +
          '<div class="sm4-date">' + G('star') + '2026 年 7 月 31 日北美上映</div>' +
        '</div>' +
      '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">劇情設定</span><h2>官方大綱與已知劇情</h2></div>' +
      plot +
      '<div class="tip" style="margin-top:8px">' + G('info') +
        '<div>本片的直接前提來自《無家日》的結局。<button class="arc-link" data-entry="no-way-home">' +
        '去看《無家日》完整劇情' + G('chevron') + '</button></div></div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">製作資訊</span><h2>基本資料</h2></div>' +
      '<div class="facts">' + facts + '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Cast</span><h2>確認演員與角色</h2>' +
      '<p class="sub">點有連結的角色可以看他們的完整背景與個人時間線。</p></div>' +
      '<div class="cast">' + cast + '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">往後看</span><h2>與《末日之戰》的關聯</h2></div>' +
      '<p style="color:var(--text-2);max-width:70ch">' + esc(S.doomsday) + '</p>' +
      '<div class="rel" style="margin-top:20px">' +
        '<button data-entry="doomsday">' + G('doom') + '《復仇者聯盟：末日之戰》(2026/12/18)</button>' +
        '<button data-entry="secret-wars">' + G('star') + '《秘密戰爭》(2027)</button>' +
      '</div>' +
    '</div></section>';
  }

  /* ============================================================
     觀影指南
     ============================================================ */
  function renderGuide() {
    var A_ = window.MCU_PLAN_A, B = window.MCU_PLAN_B;

    var items = A_.items.map(function (it) {
      var e = byId[it.entry];
      return '<li><button class="plan-item" data-entry="' + e.id + '">' +
        '<span class="n"></span><span><b>' + esc(e.title) + '</b>' +
        '<span>' + esc(it.why || e.en) + '</span></span>' +
        '<span class="arw">' + G('chevron') + '</span></button></li>';
    }).join('');

    var cmp = B.compare.map(function (c) {
      return '<div class="cmp-card' + (c.recommended ? ' best' : '') + '">' +
        '<h4>' + esc(c.h) + (c.badge ? ' <span class="badge b-core">' + esc(c.badge) + '</span>' : '') + '</h4>' +
        '<div class="row good">' + G('check') + '<span>' + esc(c.good) + '</span></div>' +
        '<div class="row bad">' + G('warn') + '<span>' + esc(c.bad) + '</span></div>' +
        '</div>';
    }).join('');

    var tiers = window.MCU_SERIES_GUIDE.map(function (t) {
      return '<div class="tier ' + t.tone + '"><div class="lv">' +
        G(t.tone === 'must' ? 'star' : t.tone === 'rec' ? 'check' : 'skip') + esc(t.level) + '</div>' +
        '<ul>' + t.items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul></div>';
    }).join('');

    var steps = window.MCU_STEPS.map(function (s) {
      return '<div class="step-row"><div class="badge-step">' + esc(s.step) +
        '<span>' + esc(s.when) + '</span></div><p>' + esc(s.body) + '</p></div>';
    }).join('');

    var cavs = window.MCU_CAVEATS.map(function (c) {
      return '<div class="caveat' + (c.strong ? ' strong' : '') + '">' + G(c.strong ? 'warn' : 'info') +
        '<div><h4>' + esc(c.h) + '</h4><p>' + esc(c.body) + '</p></div></div>';
    }).join('');

    return '' +
    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Recommendations</span>' +
      '<h2>給新手的實用觀影建議</h2></div>' +

      '<div class="plan">' +
        '<div class="plan-head"><h3>' + esc(A_.title) + '</h3>' +
        '<span class="plan-meta">' + esc(A_.meta) + '</span></div>' +
        '<p>' + esc(A_.intro) + '</p>' +
        '<ol class="plan-list">' + items + '</ol>' +
        '<div class="tip">' + G('bulb') + '<div>' + esc(A_.tip) + '</div></div>' +
      '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">方案 B</span><h2>' + esc(B.title) + '</h2></div>' +
      '<div class="cmp">' + cmp + '</div>' +
      '<div class="tip" style="margin-top:20px">' + G('check') + '<div><b>結論：</b>' + esc(B.conclusion) + '</div></div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">影集取捨</span><h2>哪些影集要看、哪些可以跳過</h2></div>' +
      '<div class="tiers">' + tiers + '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Action Plan</span><h2>分階段行動建議</h2></div>' +
      '<div class="steps">' + steps + '</div>' +
      '<div class="tip" style="margin-top:20px">' + G('info') + '<div>' + esc(window.MCU_STEPS_NOTE) + '</div></div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Caveats</span><h2>注意事項與資訊可信度</h2>' +
      '<p class="sub">這一節很重要 —— 網路上有很多已經過時或未經證實的漫威資訊。</p></div>' +
      '<div class="steps">' + cavs + '</div>' +
    '</div></section>';
  }

  /* ============================================================
     詳情彈窗
     ============================================================ */
  var modal, sheet;

  function openSheet(html) {
    sheet.innerHTML = html;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    sheet.scrollTop = 0;
    modal.scrollTop = 0;
  }

  function closeSheet() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    sheet.innerHTML = '';
    var h = location.hash.replace(/^#\/?/, '');
    if (/^(e|c|k)\//.test(h)) go(state.base || 'home', true);
  }

  function entrySheet(id) {
    var e = byId[id]; if (!e) return;

    var secs = (e.sections || []).map(function (s) {
      var body = s.list
        ? '<ul>' + s.list.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'
        : '<p>' + esc(s.body) + '</p>';
      return '<div class="blk' + (s.highlight ? ' hl' : '') + '"><h4>' + esc(s.h) + '</h4>' + body + '</div>';
    }).join('');

    var stones = '';
    if (e.stones && e.stones.length) {
      stones = '<div class="blk"><h4>本片出現的無限寶石</h4><div class="stone-pills">' +
        e.stones.map(function (sid) {
          var s = window.MCU_STONES.filter(function (x) { return x.id === sid; })[0];
          return s ? '<span class="stone-pill"><span class="dot" style="background:' + s.color + '"></span>' +
            esc(s.name) + '</span>' : '';
        }).join('') + '</div></div>';
    }

    var chars = C.filter(function (c) { return (c.appears || []).indexOf(id) >= 0; });
    var charBlk = chars.length
      ? '<div class="blk"><h4>本片登場角色（' + chars.length + '）</h4><div class="rel">' +
        chars.map(function (c) {
          return '<button data-char="' + c.id + '">' + G(c.glyph) + esc(c.name) + '</button>';
        }).join('') + '</div></div>'
      : '';

    var rel = (e.related || []).filter(function (r) { return byId[r]; });
    var relBlk = rel.length
      ? '<div class="blk"><h4>相關作品</h4><div class="rel">' +
        rel.map(function (r) {
          var x = byId[r];
          return '<button data-entry="' + r + '">' + G(x.glyph) + esc(x.title) + '</button>';
        }).join('') + '</div></div>'
      : '';

    openSheet('' +
      '<div class="sheet-art">' + P(e, { tall: true }) + '<div class="veil"></div>' +
        '<button class="sheet-close" aria-label="關閉">' + G('close') + '</button>' +
        '<div class="sheet-hd"><div class="meta">' +
          '<span class="badge b-opt">' + (e.date || e.year) + '</span>' +
          relBadge(e) + typeBadges(e) + starStr(e.stars) +
        '</div><h2>' + esc(e.title) + '</h2>' +
        '<div class="en">' + esc(e.en) + ' ・ ' + esc(e.phase) +
        (e.actor ? ' ・ ' + esc(e.actor) : '') + '</div></div>' +
      '</div>' +
      '<div class="sheet-bd">' +
        '<div class="sheet-tagline">' + esc(e.tagline) + '</div>' +
        '<div class="blk"><h4>一句話劇情</h4><p>' + esc(e.summary) + '</p></div>' +
        secs + stones + charBlk + relBlk +
      '</div>');
  }

  function charSheet(id) {
    var c = chById[id]; if (!c) return;

    var facts = (c.facts && c.facts.length)
      ? '<div class="blk"><h4>關鍵重點</h4><ul class="facts-list">' +
        c.facts.map(function (f) { return '<li>' + G('check') + '<span>' + esc(f) + '</span></li>'; }).join('') +
        '</ul></div>'
      : '';

    var arc = (c.arc && c.arc.length)
      ? '<div class="blk"><h4>' + esc(c.name.split(' /')[0]) + '的個人時間線</h4><div class="arc">' +
        c.arc.map(function (a) {
          var e = byId[a.entry];
          var cls = a.highlight ? ' hl' : a.warning ? ' warn' : '';
          return '<div class="arc-item' + cls + '">' +
            (e ? '<button class="arc-link" data-entry="' + e.id + '">' + esc(e.title) +
              ' <span style="color:var(--text-3);font-weight:700">' + (e.date || e.year) + '</span>' +
              G('chevron') + '</button>' : '<b>' + esc(a.entry) + '</b>') +
            '<p>' + esc(a.text) + '</p></div>';
        }).join('') + '</div></div>'
      : '';

    var badges = '';
    if (c.isNew) badges += '<span class="badge b-new">蜘蛛人4 新角色</span>';
    if (c.unconfirmed) badges += '<span class="badge b-unconf">未經證實</span>';
    if (c.warning) badges += '<span class="badge b-warn">資訊已更新</span>';

    var grp = window.MCU_CHAR_GROUPS.filter(function (g) { return g.id === c.group; })[0];
    var roleZh = { hero: '英雄', villain: '反派', ally: '盟友／配角', antihero: '反英雄' }[c.role] || '';

    openSheet('' +
      '<div class="sheet-art">' + P({ accent: c.accent, glyph: c.glyph }, { tall: true }) + '<div class="veil"></div>' +
        '<button class="sheet-close" aria-label="關閉">' + G('close') + '</button>' +
        '<div class="sheet-hd"><div class="meta">' +
          (grp ? '<span class="badge b-opt">' + esc(grp.label) + '</span>' : '') +
          (roleZh ? '<span class="badge b-opt role-' + c.role + '">' + roleZh + '</span>' : '') +
          badges +
        '</div><h2>' + esc(c.name) + '</h2>' +
        '<div class="en">' + esc(c.en) + ' ・ ' + esc(c.actor) + '</div></div>' +
      '</div>' +
      '<div class="sheet-bd">' +
        '<div class="sheet-tagline">' + esc(c.tagline) + '</div>' +
        '<div class="blk"><h4>角色背景</h4><p>' + esc(c.bio) + '</p></div>' +
        facts + arc +
      '</div>');
  }

  function keySheet(id) {
    var k = kById[id]; if (!k) return;
    var rel = (k.related || []).filter(function (r) { return byId[r]; });

    openSheet('' +
      '<div class="sheet-art">' + P({ accent: k.accent, glyph: k.glyph }, { tall: true }) + '<div class="veil"></div>' +
        '<button class="sheet-close" aria-label="關閉">' + G('close') + '</button>' +
        '<div class="sheet-hd"><div class="meta"><span class="badge b-opt">核心概念</span></div>' +
        '<h2>' + esc(k.term) + '</h2><div class="en">' + esc(k.en) + '</div></div>' +
      '</div>' +
      '<div class="sheet-bd">' +
        '<div class="blk"><h4>解釋</h4><p>' + esc(k.def) + '</p></div>' +
        (k.note ? '<div class="blk hl"><h4>為什麼重要</h4><p>' + esc(k.note) + '</p></div>' : '') +
        (rel.length ? '<div class="blk"><h4>出現在這些作品</h4><div class="rel">' +
          rel.map(function (r) {
            var x = byId[r];
            return '<button data-entry="' + r + '">' + G(x.glyph) + esc(x.title) + '</button>';
          }).join('') + '</div></div>' : '') +
      '</div>');
  }

  /* ============================================================
     搜尋
     ============================================================ */
  var searchIdx = [];
  T.forEach(function (e) {
    searchIdx.push({
      t: 'entry', id: e.id, kind: '作品',
      name: e.title, sub: e.en + ' ・ ' + (e.date || e.year),
      glyph: e.glyph, accent: e.accent,
      hay: (e.title + ' ' + e.en + ' ' + e.tagline + ' ' + e.summary + ' ' + e.year).toLowerCase()
    });
  });
  C.forEach(function (c) {
    searchIdx.push({
      t: 'char', id: c.id, kind: '角色',
      name: c.name, sub: c.en + ' ・ ' + c.actor,
      glyph: c.glyph, accent: c.accent,
      hay: (c.name + ' ' + c.en + ' ' + c.actor + ' ' + c.tagline + ' ' + c.bio).toLowerCase()
    });
  });
  K.forEach(function (k) {
    searchIdx.push({
      t: 'key', id: k.id, kind: '概念',
      name: k.term, sub: k.en,
      glyph: k.glyph, accent: k.accent,
      hay: (k.term + ' ' + k.en + ' ' + k.def).toLowerCase()
    });
  });

  function runSearch(q) {
    var box = $('#results');
    q = (q || '').trim().toLowerCase();
    if (q.length < 1) { box.classList.remove('open'); box.innerHTML = ''; return; }

    var hits = searchIdx.filter(function (x) { return x.hay.indexOf(q) >= 0; }).slice(0, 24);
    if (!hits.length) {
      box.innerHTML = '<div class="res-empty">找不到「' + esc(q) + '」相關內容</div>';
      box.classList.add('open'); return;
    }

    var out = '', last = '';
    hits.forEach(function (x) {
      if (x.kind !== last) { out += '<div class="res-group">' + x.kind + '</div>'; last = x.kind; }
      out += '<button class="res" data-' + (x.t === 'entry' ? 'entry' : x.t === 'char' ? 'char' : 'key') + '="' + x.id + '">' +
        '<span class="ico" style="background:linear-gradient(140deg,' + x.accent[0] + ',' + x.accent[1] + ')">' +
        G(x.glyph) + '</span><span><b>' + esc(x.name) + '</b><span>' + esc(x.sub) + '</span></span></button>';
    });
    box.innerHTML = out;
    box.classList.add('open');
  }

  /* ============================================================
     路由
     ============================================================ */
  var VIEWS = {
    home:       { render: renderHome,       title: '首頁' },
    timeline:   { render: renderTimeline,   title: '完整時間線' },
    phases:     { render: renderPhases,     title: '六個階段' },
    characters: { render: renderCharacters, title: '角色圖鑑' },
    concepts:   { render: renderConcepts,   title: '核心概念' },
    sm4:        { render: renderSM4,        title: '蜘蛛人4 檔案' },
    guide:      { render: renderGuide,      title: '觀影指南' }
  };

  function paint(view) {
    var v = VIEWS[view] || VIEWS.home;
    $('#app').innerHTML = v.render();
    document.title = v.title + ' ｜ MCU 完全指南';
    $$('.nav a').forEach(function (a) {
      a.classList.toggle('on', a.getAttribute('data-go') === view);
    });
  }

  function go(view, replace) {
    var h = '#/' + view;
    if (replace) location.replace(h); else location.hash = h;
  }

  function route() {
    var h = location.hash.replace(/^#\/?/, '');
    var p = h.split('/');

    if (p[0] === 'e' && p[1]) {
      if (state.view !== 'timeline' && state.view !== state.base) { state.base = 'timeline'; }
      if (!$('#app').innerHTML) { state.view = state.base = 'timeline'; paint('timeline'); }
      entrySheet(p[1]); return;
    }
    if (p[0] === 'c' && p[1]) {
      if (!$('#app').innerHTML) { state.view = state.base = 'characters'; paint('characters'); }
      charSheet(p[1]); return;
    }
    if (p[0] === 'k' && p[1]) {
      if (!$('#app').innerHTML) { state.view = state.base = 'concepts'; paint('concepts'); }
      keySheet(p[1]); return;
    }

    var view = VIEWS[p[0]] ? p[0] : 'home';
    if (modal.classList.contains('open')) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      sheet.innerHTML = '';
    }
    state.view = state.base = view;
    paint(view);
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  /* ============================================================
     事件
     ============================================================ */
  function bind() {
    document.addEventListener('click', function (ev) {
      var t = ev.target;

      /* 關閉彈窗 */
      if (t.closest('.sheet-close')) { closeSheet(); return; }
      if (t === modal) { closeSheet(); return; }

      /* 開啟詳情 */
      var eBtn = t.closest('[data-entry]');
      if (eBtn) { state.base = state.view; location.hash = '#/e/' + eBtn.getAttribute('data-entry'); closeSearch(); return; }

      var cBtn = t.closest('[data-char]');
      if (cBtn) { state.base = state.view; location.hash = '#/c/' + cBtn.getAttribute('data-char'); closeSearch(); return; }

      var kBtn = t.closest('[data-key]');
      if (kBtn) { state.base = state.view; location.hash = '#/k/' + kBtn.getAttribute('data-key'); closeSearch(); return; }

      /* 導覽 */
      var g = t.closest('[data-go]');
      if (g) { ev.preventDefault(); go(g.getAttribute('data-go')); $('#nav').classList.remove('open'); return; }

      /* 時間線控制 */
      var o = t.closest('[data-order]');
      if (o) { state.order = o.getAttribute('data-order'); paint('timeline'); return; }

      var cat = t.closest('[data-cat]');
      if (cat) {
        var id = cat.getAttribute('data-cat');
        var i = state.cats.indexOf(id);
        if (i >= 0) state.cats.splice(i, 1); else state.cats.push(id);
        paint('timeline'); return;
      }

      if (t.closest('[data-must]')) { state.mustOnly = !state.mustOnly; paint('timeline'); return; }

      /* 角色分組 */
      var chg = t.closest('[data-chg]');
      if (chg) { state.chGroup = chg.getAttribute('data-chg'); paint('characters'); return; }

      /* 漢堡選單 */
      if (t.closest('#burger')) { $('#nav').classList.toggle('open'); return; }

      /* 回到頂端 */
      if (t.closest('#totop')) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }

      /* 點外面關搜尋 */
      if (!t.closest('.hdr-search') && !t.closest('#results')) closeSearch();
    });

    function closeSearch() { $('#results').classList.remove('open'); }

    var si = $('#q');
    si.addEventListener('input', function () { runSearch(si.value); });
    si.addEventListener('focus', function () { if (si.value) runSearch(si.value); });

    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') {
        if (modal.classList.contains('open')) closeSheet();
        else closeSearch();
      }
      if (ev.key === '/' && document.activeElement !== si) { ev.preventDefault(); si.focus(); }
    });

    window.addEventListener('hashchange', route);

    var top = $('#totop');
    window.addEventListener('scroll', function () {
      top.classList.toggle('show', window.scrollY > 700);
    }, { passive: true });
  }

  /* ---------- 啟動 ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    modal = $('#modal'); sheet = $('#sheet');
    $('#burger').innerHTML = G('menu');
    $('#searchIcon').innerHTML = G('search');
    $('#brandGlyph').innerHTML = G('spider');
    $('#ftrGlyph').innerHTML = G('spider');
    $('#totop').innerHTML = G('chevron');
    bind();
    route();
  });

})();
