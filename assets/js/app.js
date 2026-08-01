/* ============================================================
   Application logic (hash-routed single page app)
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

  /* ---------- Badge labels ---------- */
  var SAGAS = window.MCU_SAGAS;

  var REL = {
    target:      { cls: 'b-target', label: 'Latest release' },
    core:        { cls: 'b-core',   label: 'Essential' },
    recommended: { cls: 'b-rec',    label: 'Recommended' },
    optional:    { cls: 'b-opt',    label: 'Optional' },
    skippable:   { cls: 'b-skip',   label: 'Skippable' }
  };

  function relBadge(e) {
    var r = REL[e.relevance]; if (!r) return '';
    return '<span class="badge ' + r.cls + '">' + r.label + '</span>';
  }
  function typeBadges(e) {
    var h = '';
    if (e.type === 'series')  h += '<span class="badge b-series">' + (e.episodes ? esc(e.episodes) : 'Series') + '</span>';
    if (e.type === 'special') h += '<span class="badge b-series">Special</span>';
    if (e.type === 'oneshot') h += '<span class="badge b-new">One-Shot</span>';
    if (e.saga === 'sony')     h += '<span class="badge b-legacy">Other universe</span>';
    if (e.saga === 'defenders')h += '<span class="badge b-legacy">Defenders Saga</span>';
    if (e.saga === 'marveltv') h += '<span class="badge b-skip">Canon unclear</span>';
    if (e.upcoming) h += '<span class="badge b-new">Not yet released</span>';
    if (e.warning)  h += '<span class="badge b-warn">Superseded info</span>';
    return h;
  }
  function starStr(n) {
    if (!n) return '';
    return '<span class="stars" title="Importance for Spider-Man 4">' +
      new Array(n + 1).join('★') + new Array(5 - n + 1).join('☆') + '</span>';
  }
  function catLabel(id) {
    var c = window.MCU_CATS.filter(function (x) { return x.id === id; })[0];
    return c ? c.label : id;
  }

  /* Derive a sortable key from the date string ("2021 / 07 / 09", "2015-2018", "2011")
     so films and series released in the same year interleave in true order */
  function relKey(e) {
    var m = String(e.date || e.year).match(/(\d{4})\s*[\/.-]?\s*(\d{1,2})?\s*[\/.-]?\s*(\d{1,2})?/);
    if (!m) return (e.year || 0) * 10000;
    return (+m[1]) * 10000 + (m[2] ? +m[2] : 0) * 100 + (m[3] ? +m[3] : 0);
  }

  /* ---------- View state ---------- */
  var state = {
    view: 'home',
    order: 'release',      // release | story
    cats: [],              // empty = show all
    mustOnly: false,
    unwatchedOnly: false,
    chGroup: 'all',
    base: 'home'
  };

  /* ---------- User preferences (stored in the browser, never uploaded) ---------- */
  var store = {
    get: function (k, d) {
      try { var v = localStorage.getItem('mcu.' + k); return v === null ? d : JSON.parse(v); }
      catch (e) { return d; }
    },
    set: function (k, v) { try { localStorage.setItem('mcu.' + k, JSON.stringify(v)); } catch (e) {} }
  };

  var prefs = {
    spoiler: store.get('spoiler', true),   // true = spoilers hidden until revealed
    theme:   store.get('theme', 'dark'),
    watched: store.get('watched', {})
  };

  function isWatched(id) { return !!prefs.watched[id]; }
  function toggleWatched(id) {
    if (prefs.watched[id]) delete prefs.watched[id];
    else prefs.watched[id] = 1;
    store.set('watched', prefs.watched);
  }
  function watchedCount() {
    return T.filter(function (e) { return isWatched(e.id); }).length;
  }
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', prefs.theme);
  }

  /* Refresh the header theme button and progress bar */
  function syncChrome() {
    var tb = $('#themeBtn');
    if (tb) {
      tb.innerHTML = G(prefs.theme === 'dark' ? 'bulb' : 'hex');
      tb.setAttribute('title', prefs.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
    updateProgress();
  }

  function updateProgress() {
    var n = watchedCount(), total = T.length;
    var pct = total ? Math.round(n / total * 100) : 0;
    var bar = $('#progBar'), txt = $('#progTxt');
    if (bar) bar.style.width = pct + '%';
    if (txt) txt.textContent = n + ' / ' + total;
    var wrap = $('#progWrap');
    if (wrap) wrap.setAttribute('title', n + ' of ' + total + ' watched (' + pct + '%)');
  }

  /* Total runtime for Route A from real runtimes. Series are counted separately so a
     single episode length is never mistaken for a whole season. */
  function planMetaText() {
    var A_ = window.MCU_PLAN_A;
    var films = A_.items.filter(function (it) { return byId[it.entry] && byId[it.entry].type === 'film'; });
    var mins = films.reduce(function (s, it) { return s + minutesOf(it.entry); }, 0);
    var series = A_.items.length - films.length;
    return A_.items.length + ' titles' +
      (mins ? ' · about ' + humanHours(mins) + ' of film' : '') +
      (series ? ' + ' + series + ' series' : '');
  }

  /* Small watched toggle in the corner of a card */
  function watchDot(id) {
    var w = isWatched(id);
    return '<button class="watchdot' + (w ? ' on' : '') + '" data-watch="' + id + '" ' +
      'title="' + (w ? 'Watched (click to undo)' : 'Mark as watched') + '">' + G(w ? 'check' : 'eye') + '</button>';
  }

  /* Does this section give away a major beat? */
  var SPOILER_RE = new RegExp([
    'ending', 'finale', 'death', 'dies', 'dead', 'truth', 'twist', 'reveal',
    'sacrific', 'betray', 'fate', 'identity', 'credit', 'who dies', 'what happens',
    'final battle', 'realisation', 'realization', 'loose thread', 'the choice',
    'the rescue', 'the turn', 'blip', 'collecting the stones', 'line everyone',
    "'s play", 'where the five'
  ].join('|'), 'i');
  function isSpoilerSection(s) {
    return !!(s.highlight || SPOILER_RE.test(s.h || ''));
  }

  /* Wrap content in a spoiler shield */
  function shield(inner, label) {
    if (!prefs.spoiler) return inner;
    return '<div class="spoil"><div class="spoil-veil">' +
      G('eye') + '<b>' + esc(label || 'This section contains spoilers') + '</b>' +
      '<span>Click to reveal</span></div>' +
      '<div class="spoil-body">' + inner + '</div></div>';
  }

  /* Runtime string -> minutes */
  function minutesOf(id) {
    var d = window.MCU_DETAILS && window.MCU_DETAILS[id];
    if (!d || !d.runtime) return 0;
    var m = String(d.runtime).match(/(\d+)\s*min/);
    return m ? +m[1] : 0;
  }
  function humanHours(mins) {
    if (!mins) return '';
    var h = Math.floor(mins / 60), m = mins % 60;
    return (h ? h + 'h' : '') + (m ? (h ? ' ' : '') + m + 'm' : '');
  }

  /* ============================================================
     Home view
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
      { v: 'timeline',   g: 'list',     t: 'Full timeline', d: 'From ancient Wakanda to Secret Wars in 2027 — full plot detail for all ' + T.length + ' works, switchable between release order and in-story chronology.' },
      { v: 'phases',     g: 'star',     t: 'The six phases', d: "Browse by Marvel's own Phase and Saga structure — the quickest way to understand how the MCU is built." },
      { v: 'characters', g: 'spider',   t: 'Character index', d: C.length + ' characters, each with a personal timeline — follow the story through one person.' },
      { v: 'concepts',   g: 'gauntlet', t: 'Core concepts', d: 'The Snap, the multiverse, the TVA, the Quantum Realm, the six Infinity Stones — start here.' },
      { v: 'sm4',        g: 'spider',   t: 'Spider-Man 4 dossier', d: 'The most recent release: premise, full cast and everything currently known.' },
      { v: 'guide',      g: 'bulb',     t: 'Watch guide', d: 'The 10-title spine, release vs chronological order, which series to skip, and a staged plan.' }
    ].map(function (n) {
      return '<button class="kv" data-go="' + n.v + '">' +
        '<span class="ico" style="background:linear-gradient(140deg,var(--red),var(--blue))">' + G(n.g) + '</span>' +
        '<span><b>' + n.t + '</b><p>' + esc(n.d) + '</p></span></button>';
    }).join('');

    return '' +
    '<section class="hero">' + window.heroWebSVG() +
      '<div class="wrap hero-in">' +
        '<span class="kicker"><span class="dot"></span>2008–2027 &middot; Six phases &middot; Two sagas</span>' +
        '<h1>Start from zero.<br>Understand <span class="hl">the entire Marvel Cinematic Universe</span></h1>' +
        '<p class="lede">Never seen a single Marvel film? That is fine. Every one of the ' + T.length + ' works here ' +
          'has a full plot breakdown — films, series, specials, One-Shot shorts, the Defenders Saga, and the older ' +
          'Spider-Man films No Way Home draws on. Read it by timeline, by phase, or follow one character through.</p>' +
        '<div class="hero-cta">' +
          '<button class="btn btn-primary" data-go="guide">' + G('bulb') + 'New here — where do I start?</button>' +
          '<button class="btn btn-ghost" data-go="timeline">' + G('list') + 'Browse the full timeline</button>' +
        '</div>' +
        '<div class="hero-stats">' +
          '<div><b>' + T.length + '</b><span>works explained</span></div>' +
          '<div><b>' + C.length + '</b><span>characters indexed</span></div>' +
          '<div><b>6</b><span>phases, two sagas</span></div>' +
          '<div><b>6</b><span>Infinity Stones tracked</span></div>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">TL;DR</span>' +
      '<h2>The short version</h2></div>' +
      '<div class="tldr">' + tldr + '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Shortest path</span>' +
      '<h2>Short on time? These ten are the spine</h2>' +
      '<p class="sub">' + esc(planMetaText()) + '. Click any title for its full plot breakdown.</p></div>' +
      '<div class="path">' + path + '</div>' +
      '<div class="tip">' + G('bulb') + '<div>' + esc(window.MCU_PLAN_A.tip) + '</div></div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Key Findings</span>' +
      '<h2>Key things to know</h2></div>' +
      '<div class="findings">' + finds + '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Spotlight</span>' +
      '<h2>Spider-Man: Brand New Day</h2></div>' +
      '<button class="card" data-entry="spider-man-4" style="max-width:none">' +
        '<div class="card-art" style="aspect-ratio:3/1">' + P(sm4) +
          '<div class="veil"></div>' +
          '<div class="tags">' + relBadge(sm4) + '</div>' +
          '<div class="ttl"><b>' + esc(sm4.title) + '</b><i>' + esc(sm4.en) + ' ・ ' + esc(sm4.date) + '</i></div>' +
        '</div>' +
        '<div class="card-body"><span class="tagline">' + esc(sm4.tagline) + '</span>' +
        '<p class="sum">' + esc(sm4.summary) + '</p>' +
        '<div class="card-foot"><span>Phase 6 · 2h 25m · PG-13</span>' +
        '<span class="more">Open the dossier' + G('chevron') + '</span></div></div>' +
      '</button>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">How to use this site</span>' +
      '<h2>Six ways in — pick one</h2></div>' +
      '<div class="grid grid-2">' + nav + '</div>' +
    '</div></section>';
  }

  /* ============================================================
     Timeline view
     ============================================================ */
  function filtered() {
    return T.filter(function (e) {
      if (state.unwatchedOnly && isWatched(e.id)) return false;
      if (state.mustOnly && e.relevance !== 'core' && e.relevance !== 'target' && e.relevance !== 'recommended') return false;
      if (state.cats.length) {
        var hit = (e.cats || []).some(function (c) { return state.cats.indexOf(c) >= 0; });
        if (!hit) return false;
      }
      return true;
    });
  }

  function tlCard(e) {
    var d = (window.MCU_DETAILS && window.MCU_DETAILS[e.id]) || {};
    return '<div class="tl-card-wrap' + (isWatched(e.id) ? ' watched' : '') + '">' +
      watchDot(e.id) +
      '<button class="tl-card' + (e.isTarget ? ' is-target' : '') + '" data-entry="' + e.id + '">' +
      '<div class="tl-art">' + P(e, { center: true }) + '<div class="fade"></div></div>' +
      '<div class="tl-body">' +
        '<div class="tl-meta"><span class="yr">' + (e.date || e.year) + '</span>' +
          relBadge(e) + typeBadges(e) + starStr(e.stars) +
          (d.runtime ? '<span class="rt">' + G('tva') + esc(d.runtime) + '</span>' : '') + '</div>' +
        '<h3>' + esc(e.title) + '</h3>' +
        '<div class="en">' + esc(e.en) + ' ・ ' + esc(e.phase) + '</div>' +
        '<div class="tagline">' + esc(e.tagline) + '</div>' +
        '<p class="sum">' + esc(e.summary) + '</p>' +
      '</div></button></div>';
  }

  function renderTimeline() {
    var list = filtered(), html = '';

    if (!list.length) {
      html = '<div class="empty">' + G('search') + '<p>No works match these filters. Try loosening them.</p></div>';
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
      '<h2>The full timeline</h2>' +
      '<p class="sub">Open any title for its full plot, the turns that matter, and how it connects to everything else. ' +
      'Release order is the recommended first watch; chronological order arranges them by when the story happens.</p></div>' +
    '</div></section>' +

    '<div class="tl-bar"><div class="wrap tl-bar-in">' +
      '<div class="seg">' +
        '<button data-order="release"' + (state.order === 'release' ? ' class="on"' : '') + '>Release order</button>' +
        '<button data-order="story"' + (state.order === 'story' ? ' class="on"' : '') + '>Chronological</button>' +
      '</div>' +
      '<div class="chips">' + chips +
        '<button class="chip' + (state.mustOnly ? ' on' : '') + '" data-must="1">' + G('check') + 'Essential &amp; recommended</button>' +
        '<button class="chip' + (state.unwatchedOnly ? ' on' : '') + '" data-unwatched="1">' + G('eye') + 'Unwatched only</button>' +
      '</div>' +
      '<span class="tl-count">' + list.length + ' / ' + T.length
        + (watchedCount() ? ' · ' + watchedCount() + ' watched' : '') + '</span>' +
    '</div></div>' +

    '<div class="wrap"><div class="tl">' + html + '</div></div>';
  }

  /* ============================================================
     Characters view
     ============================================================ */
  function renderCharacters() {
    var groups = window.MCU_CHAR_GROUPS;
    var list = state.chGroup === 'all' ? C : C.filter(function (c) { return c.group === state.chGroup; });

    var chips = '<button class="chip' + (state.chGroup === 'all' ? ' on' : '') + '" data-chg="all">All ' + C.length + '</button>' +
      groups.map(function (g) {
        var n = C.filter(function (c) { return c.group === g.id; }).length;
        return '<button class="chip' + (state.chGroup === g.id ? ' on' : '') + '" data-chg="' + g.id + '">' +
          '<span class="swatch" style="background:' + g.color + '"></span>' + g.label + ' ' + n + '</button>';
      }).join('');

    var cards = list.map(function (c) {
      var badges = '';
      if (c.isNew) badges += '<span class="badge b-new">New in Spider-Man 4</span>';
      if (c.unconfirmed) badges += '<span class="badge b-unconf">Unconfirmed</span>';
      if (c.warning) badges += '<span class="badge b-warn">Superseded info</span>';
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
      '<h2>Character index</h2>' +
      '<p class="sub">Instead of the timeline, you can follow the story through a person. Open any character to see their ' +
      '<b>personal timeline</b> — what they do in each work, what happens to them, and where their arc ends up.</p></div>' +
      '<div class="chips" style="margin-bottom:26px">' + chips + '</div>' +
      '<div class="grid grid-4">' + cards + '</div>' +
    '</div></section>';
  }

  /* ============================================================
     Concepts view
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
      '<div class="sec-head"><span class="eyebrow">Read this first</span>' +
      '<h2>Core concepts</h2>' +
      '<p class="sub">These ' + K.length + ' terms are the minimum needed to follow the MCU. Open any one to see which works it appears in.</p></div>' +
      '<div class="grid grid-2">' + terms + '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Infinity Stones</span>' +
      '<h2>The six Infinity Stones</h2>' +
      '<p class="sub">Six gems formed as the universe was born. Together they let their bearer do anything — which is exactly what Thanos does.</p></div>' +
      '<div class="stones">' + stones + '</div>' +
      '<div class="tip" style="margin-top:22px">' + G('info') +
        '<div><b>What ultimately happens to them: </b>' + esc(window.MCU_STONES_FATE) + '</div></div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Factions</span>' +
      '<h2>Factions and organisations</h2></div>' +
      '<div class="factions">' + facs + '</div>' +
    '</div></section>';
  }

  /* ============================================================
     Phases view
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
            '<div class="card-foot"><span>' + esc(e.type === 'film' ? 'Film' : e.type === 'series' ? 'Series' : e.type === 'special' ? 'Special' : 'Short') +
            '</span><span class="more">Read more' + G('chevron') + '</span></div></div>' +
            '</button>';
        }).join('');

        return '<div class="phase-block">' +
          '<div class="phase-head">' +
            '<div><b>' + esc(p.label) + '</b><span>' + esc(p.years) + ' · ' + items.length + ' titles</span></div>' +
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
      '<div class="sec-head"><span class="eyebrow">Phases</span><h2>Six phases, two sagas</h2>' +
      '<p class="sub">Marvel groups its releases into Phases, and Phases into Sagas. ' +
      'It is the official structure, and the fastest way to see how the whole thing fits together.</p></div>' +
    '</div></section>' + html;
  }

  /* ============================================================
     Spider-Man 4 dossier
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
        '<div class="role">' + esc(c.role) + (c.unconfirmed ? ' <span class="badge b-unconf">Unconfirmed</span>' : '') + '</div>' +
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
          '<div class="sm4-date">' + G('star') + 'Released 31 July 2026</div>' +
        '</div>' +
      '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Premise</span><h2>Official synopsis and what is known</h2></div>' +
      plot +
      '<div class="tip" style="margin-top:8px">' + G('info') +
        '<div>The premise follows directly from the ending of No Way Home. <button class="arc-link" data-entry="no-way-home">' +
        'Read the full No Way Home breakdown' + G('chevron') + '</button></div></div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Production</span><h2>The facts</h2></div>' +
      '<div class="facts">' + facts + '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Cast</span><h2>Confirmed cast</h2>' +
      '<p class="sub">Linked names open that character\'s full background and personal timeline.</p></div>' +
      '<div class="cast">' + cast + '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Looking ahead</span><h2>How it connects to Doomsday</h2></div>' +
      '<p style="color:var(--text-2);max-width:70ch">' + esc(S.doomsday) + '</p>' +
      '<div class="rel" style="margin-top:20px">' +
        '<button data-entry="doomsday">' + G('doom') + 'Avengers: Doomsday (18 Dec 2026)</button>' +
        '<button data-entry="secret-wars">' + G('star') + 'Avengers: Secret Wars (2027)</button>' +
      '</div>' +
    '</div></section>';
  }

  /* ============================================================
     Watch guide view
     ============================================================ */
  function renderGuide() {
    var A_ = window.MCU_PLAN_A, B = window.MCU_PLAN_B;

    var items = A_.items.map(function (it) {
      var e = byId[it.entry];
      var mins = e.type === 'film' ? minutesOf(e.id) : 0;
      return '<li><button class="plan-item' + (isWatched(e.id) ? ' watched' : '') + '" data-entry="' + e.id + '">' +
        '<span class="n"></span><span><b>' + esc(e.title) +
        (mins ? ' <span class="pm">' + mins + ' min</span>' : '') + '</b>' +
        '<span>' + esc(it.why || e.en) + '</span></span>' +
        (isWatched(e.id) ? '<span class="pdone">' + G('check') + 'Watched</span>' : '') +
        '<span class="arw">' + G('chevron') + '</span></button></li>';
    }).join('');

    var planMeta = planMetaText();
    var planDone = A_.items.filter(function (it) { return isWatched(it.entry); }).length;

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
      '<h2>How to actually watch it</h2></div>' +

      '<div class="plan">' +
        '<div class="plan-head"><h3>' + esc(A_.title) + '</h3>' +
        '<span class="plan-meta">' + esc(planMeta) + '</span>' +
        (planDone ? '<span class="plan-done">' + G('check') + planDone + ' of ' + A_.items.length + ' done</span>' : '') +
        '</div>' +
        '<p>' + esc(A_.intro) + '</p>' +
        '<ol class="plan-list">' + items + '</ol>' +
        '<div class="tip">' + G('bulb') + '<div>' + esc(A_.tip) + '</div></div>' +
      '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Route B</span><h2>' + esc(B.title) + '</h2></div>' +
      '<div class="cmp">' + cmp + '</div>' +
      '<div class="tip" style="margin-top:20px">' + G('check') + '<div><b>Bottom line: </b>' + esc(B.conclusion) + '</div></div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">The series</span><h2>Which shows to watch and which to skip</h2></div>' +
      '<div class="tiers">' + tiers + '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Action Plan</span><h2>A staged plan</h2></div>' +
      '<div class="steps">' + steps + '</div>' +
      '<div class="tip" style="margin-top:20px">' + G('info') + '<div>' + esc(window.MCU_STEPS_NOTE) + '</div></div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="sec-head"><span class="eyebrow">Caveats</span><h2>Caveats and reliability</h2>' +
      '<p class="sub">Worth reading — a lot of Marvel information online is out of date or was never confirmed.</p></div>' +
      '<div class="steps">' + cavs + '</div>' +
    '</div></section>';
  }

  /* ============================================================
     Detail modal
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

  /* Previous / next work in the active sort order */
  function neighbors(id) {
    var list = T.slice().sort(function (a, b) {
      return state.order === 'story'
        ? (a.chrono - b.chrono) || a.no - b.no
        : (relKey(a) - relKey(b)) || a.no - b.no;
    });
    var i = list.findIndex ? list.findIndex(function (x) { return x.id === id; })
                           : (function () { for (var k = 0; k < list.length; k++) if (list[k].id === id) return k; return -1; })();
    return { prev: i > 0 ? list[i - 1] : null, next: i >= 0 && i < list.length - 1 ? list[i + 1] : null };
  }

  function entrySheet(id) {
    var e = byId[id]; if (!e) return;
    var d = (window.MCU_DETAILS && window.MCU_DETAILS[id]) || {};

    var secs = (e.sections || []).map(function (s) {
      var body = s.list
        ? '<ul>' + s.list.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'
        : '<p>' + esc(s.body) + '</p>';
      var blk = '<div class="blk' + (s.highlight ? ' hl' : '') + '"><h4>' + esc(s.h) + '</h4>' + body + '</div>';
      return isSpoilerSection(s) ? shield(blk, s.h) : blk;
    }).join('');

    /* Prerequisites */
    var prereqBlk = d.prereq
      ? '<div class="prereq">' + G('bulb') +
        '<div><b>What you need to know first</b><p>' + esc(d.prereq) + '</p></div></div>'
      : '';

    /* Spec row */
    var specs = [];
    if (d.runtime) specs.push({ k: 'Runtime', v: d.runtime });
    if (d.rating) specs.push({ k: 'Rating', v: d.rating });
    if (e.director) specs.push({ k: 'Director', v: e.director });
    if (e.episodes && !d.runtime) specs.push({ k: 'Episodes', v: e.episodes });
    var specBlk = specs.length
      ? '<div class="specs">' + specs.map(function (s) {
          return '<div><span>' + esc(s.k) + '</span><b>' + esc(s.v) + '</b></div>';
        }).join('') + '</div>'
      : '';

    /* Main cast */
    var castBlk = (d.cast && d.cast.length)
      ? '<div class="blk"><h4>Main cast</h4><div class="castlist">' +
        d.cast.map(function (c) {
          var ch = c.id && chById[c.id];
          return '<' + (ch ? 'button' : 'div') + ' class="castchip"' + (ch ? ' data-char="' + ch.id + '"' : '') + '>' +
            (ch ? A(ch) : '<span class="castdot"></span>') +
            '<span><b>' + esc(c.r) + '</b><i>' + esc(c.a) + '</i></span>' +
            '</' + (ch ? 'button' : 'div') + '>';
        }).join('') + '</div></div>'
      : '';

    /* Credit scenes */
    var creditsBlk = '';
    if (d.credits && d.credits.length) {
      var inner = '<div class="blk"><h4>Credit scenes</h4>' +
        d.credits.map(function (c) {
          return '<div class="credit' + (c.key ? ' key' : '') + '">' +
            '<span class="ctag">' + (c.type === 'mid' ? 'Mid-credits' : 'Post-credits') + '</span>' +
            '<p>' + esc(c.text) + '</p></div>';
        }).join('') +
        (d.warning ? '<div class="credit-warn">' + G('warn') + esc(d.warning) + '</div>' : '') +
        '</div>';
      creditsBlk = shield(inner, 'Credit scenes');
    }

    /* Memorable quotes */
    var quoteBlk = (d.quotes && d.quotes.length)
      ? '<div class="blk"><h4>Memorable lines</h4>' +
        d.quotes.map(function (q) { return '<blockquote class="quote">' + esc(q) + '</blockquote>'; }).join('') +
        '</div>'
      : '';

    /* Deaths */
    var deathBlk = (d.deaths && d.deaths.length)
      ? shield('<div class="blk"><h4>Who dies</h4><div class="deaths">' +
          d.deaths.map(function (x) { return '<span class="death">' + esc(x) + '</span>'; }).join('') +
          '</div></div>', 'Character deaths')
      : '';

    var noteBlk = d.note ? '<div class="tip">' + G('info') + '<div>' + esc(d.note) + '</div></div>' : '';

    var stones = '';
    if (e.stones && e.stones.length) {
      stones = '<div class="blk"><h4>Infinity Stones in this work</h4><div class="stone-pills">' +
        e.stones.map(function (sid) {
          var s = window.MCU_STONES.filter(function (x) { return x.id === sid; })[0];
          return s ? '<span class="stone-pill"><span class="dot" style="background:' + s.color + '"></span>' +
            esc(s.name) + '</span>' : '';
        }).join('') + '</div></div>';
    }

    var chars = C.filter(function (c) { return (c.appears || []).indexOf(id) >= 0; });
    var charBlk = chars.length
      ? '<div class="blk"><h4>Characters appearing (' + chars.length + ')</h4><div class="rel">' +
        chars.map(function (c) {
          return '<button data-char="' + c.id + '">' + G(c.glyph) + esc(c.name) + '</button>';
        }).join('') + '</div></div>'
      : '';

    var rel = (e.related || []).filter(function (r) { return byId[r]; });
    var relBlk = rel.length
      ? '<div class="blk"><h4>Related works</h4><div class="rel">' +
        rel.map(function (r) {
          var x = byId[r];
          return '<button data-entry="' + r + '">' + G(x.glyph) + esc(x.title) + '</button>';
        }).join('') + '</div></div>'
      : '';

    var nb = neighbors(id);
    var navBlk = '<div class="sheet-nav">' +
      (nb.prev ? '<button class="snav" data-entry="' + nb.prev.id + '">' + G('chevron') +
        '<span><i>Previous</i><b>' + esc(nb.prev.title) + '</b></span></button>' : '<span></span>') +
      (nb.next ? '<button class="snav next" data-entry="' + nb.next.id + '">' +
        '<span><i>Next</i><b>' + esc(nb.next.title) + '</b></span>' + G('chevron') + '</button>' : '<span></span>') +
      '</div>';

    var w = isWatched(id);
    var watchBtn = '<button class="watchbtn' + (w ? ' on' : '') + '" data-watch="' + id + '">' +
      G(w ? 'check' : 'eye') + (w ? 'Watched' : 'Mark as watched') + '</button>';

    openSheet('' +
      '<div class="sheet-art">' + P(e, { tall: true }) + '<div class="veil"></div>' +
        '<button class="sheet-close" aria-label="Close">' + G('close') + '</button>' +
        '<div class="sheet-hd"><div class="meta">' +
          '<span class="badge b-opt">' + (e.date || e.year) + '</span>' +
          relBadge(e) + typeBadges(e) + starStr(e.stars) +
        '</div><h2>' + esc(e.title) + '</h2>' +
        '<div class="en">' + esc(e.en) + ' ・ ' + esc(e.phase) +
        (e.actor ? ' ・ ' + esc(e.actor) : '') + '</div></div>' +
      '</div>' +
      '<div class="sheet-bd">' +
        '<div class="sheet-toolbar">' + watchBtn +
          '<button class="spoilbtn' + (prefs.spoiler ? ' on' : '') + '" data-spoiler="1">' +
          G(prefs.spoiler ? 'eye' : 'check') +
          (prefs.spoiler ? 'Spoiler shield: on' : 'Spoiler shield: off') + '</button>' +
        '</div>' +
        '<div class="sheet-tagline">' + esc(e.tagline) + '</div>' +
        specBlk + prereqBlk +
        '<div class="blk"><h4>In one line</h4><p>' + esc(e.summary) + '</p></div>' +
        secs + quoteBlk + creditsBlk + deathBlk + noteBlk +
        stones + castBlk + charBlk + relBlk + navBlk +
      '</div>');
  }

  function charSheet(id) {
    var c = chById[id]; if (!c) return;

    var facts = (c.facts && c.facts.length)
      ? '<div class="blk"><h4>Key points</h4><ul class="facts-list">' +
        c.facts.map(function (f) { return '<li>' + G('check') + '<span>' + esc(f) + '</span></li>'; }).join('') +
        '</ul></div>'
      : '';

    var arc = (c.arc && c.arc.length)
      ? '<div class="blk"><h4>' + esc(c.name.split(' /')[0]) + ' — personal timeline</h4><div class="arc">' +
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
    if (c.isNew) badges += '<span class="badge b-new">New in Spider-Man 4</span>';
    if (c.unconfirmed) badges += '<span class="badge b-unconf">Unconfirmed</span>';
    if (c.warning) badges += '<span class="badge b-warn">Superseded info</span>';

    var grp = window.MCU_CHAR_GROUPS.filter(function (g) { return g.id === c.group; })[0];
    var roleZh = { hero: 'Hero', villain: 'Villain', ally: 'Ally', antihero: 'Antihero' }[c.role] || '';

    openSheet('' +
      '<div class="sheet-art">' + P({ accent: c.accent, glyph: c.glyph }, { tall: true }) + '<div class="veil"></div>' +
        '<button class="sheet-close" aria-label="Close">' + G('close') + '</button>' +
        '<div class="sheet-hd"><div class="meta">' +
          (grp ? '<span class="badge b-opt">' + esc(grp.label) + '</span>' : '') +
          (roleZh ? '<span class="badge b-opt role-' + c.role + '">' + roleZh + '</span>' : '') +
          badges +
        '</div><h2>' + esc(c.name) + '</h2>' +
        '<div class="en">' + esc(c.en) + ' ・ ' + esc(c.actor) + '</div></div>' +
      '</div>' +
      '<div class="sheet-bd">' +
        '<div class="sheet-tagline">' + esc(c.tagline) + '</div>' +
        '<div class="blk"><h4>Background</h4><p>' + esc(c.bio) + '</p></div>' +
        facts + arc +
      '</div>');
  }

  function keySheet(id) {
    var k = kById[id]; if (!k) return;
    var rel = (k.related || []).filter(function (r) { return byId[r]; });

    openSheet('' +
      '<div class="sheet-art">' + P({ accent: k.accent, glyph: k.glyph }, { tall: true }) + '<div class="veil"></div>' +
        '<button class="sheet-close" aria-label="Close">' + G('close') + '</button>' +
        '<div class="sheet-hd"><div class="meta"><span class="badge b-opt">Core concept</span></div>' +
        '<h2>' + esc(k.term) + '</h2><div class="en">' + esc(k.en) + '</div></div>' +
      '</div>' +
      '<div class="sheet-bd">' +
        '<div class="blk"><h4>Definition</h4><p>' + esc(k.def) + '</p></div>' +
        (k.note ? '<div class="blk hl"><h4>Why it matters</h4><p>' + esc(k.note) + '</p></div>' : '') +
        (rel.length ? '<div class="blk"><h4>Appears in</h4><div class="rel">' +
          rel.map(function (r) {
            var x = byId[r];
            return '<button data-entry="' + r + '">' + G(x.glyph) + esc(x.title) + '</button>';
          }).join('') + '</div></div>' : '') +
      '</div>');
  }

  /* ============================================================
     Search
     ============================================================ */
  var searchIdx = [];
  T.forEach(function (e) {
    searchIdx.push({
      t: 'entry', id: e.id, kind: 'Works',
      name: e.title, sub: e.en + ' ・ ' + (e.date || e.year),
      glyph: e.glyph, accent: e.accent,
      hay: (e.title + ' ' + e.en + ' ' + e.tagline + ' ' + e.summary + ' ' + e.year).toLowerCase()
    });
  });
  C.forEach(function (c) {
    searchIdx.push({
      t: 'char', id: c.id, kind: 'Characters',
      name: c.name, sub: c.en + ' ・ ' + c.actor,
      glyph: c.glyph, accent: c.accent,
      hay: (c.name + ' ' + c.en + ' ' + c.actor + ' ' + c.tagline + ' ' + c.bio).toLowerCase()
    });
  });
  K.forEach(function (k) {
    searchIdx.push({
      t: 'key', id: k.id, kind: 'Concepts',
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
      box.innerHTML = '<div class="res-empty">Nothing found for &ldquo;' + esc(q) + '&rdquo;</div>';
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
     Router
     ============================================================ */
  var VIEWS = {
    home:       { render: renderHome,       title: 'Home' },
    timeline:   { render: renderTimeline,   title: 'Timeline' },
    phases:     { render: renderPhases,     title: 'Phases' },
    characters: { render: renderCharacters, title: 'Characters' },
    concepts:   { render: renderConcepts,   title: 'Concepts' },
    sm4:        { render: renderSM4,        title: 'Spider-Man 4' },
    guide:      { render: renderGuide,      title: 'Watch Guide' }
  };

  function paint(view) {
    var v = VIEWS[view] || VIEWS.home;
    $('#app').innerHTML = v.render();
    document.title = v.title + ' | The Complete MCU Guide';
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
     Event handling
     ============================================================ */
  function bind() {
    document.addEventListener('click', function (ev) {
      var t = ev.target;

      /* Close the modal */
      if (t.closest('.sheet-close')) { closeSheet(); return; }
      if (t === modal) { closeSheet(); return; }

      /* Reveal a spoiler shield */
      var veil = t.closest('.spoil-veil');
      if (veil) { veil.parentElement.classList.add('open'); return; }

      /* Toggle watched (works on cards and in the modal) */
      var wBtn = t.closest('[data-watch]');
      if (wBtn) {
        ev.preventDefault(); ev.stopPropagation();
        var wid = wBtn.getAttribute('data-watch');
        toggleWatched(wid);
        var nowOn = isWatched(wid);
        wBtn.classList.toggle('on', nowOn);
        if (wBtn.classList.contains('watchbtn')) {
          wBtn.innerHTML = G(nowOn ? 'check' : 'eye') + (nowOn ? 'Watched' : 'Mark as watched');
        } else {
          wBtn.innerHTML = G(nowOn ? 'check' : 'eye');
          wBtn.setAttribute('title', nowOn ? 'Watched (click to undo)' : 'Mark as watched');
        }
        var card = wBtn.closest('.card, .tl-card, .tl-item');
        if (card) card.classList.toggle('watched', nowOn);
        updateProgress();
        return;
      }

      /* Spoiler shield toggle */
      if (t.closest('[data-spoiler]')) {
        prefs.spoiler = !prefs.spoiler;
        store.set('spoiler', prefs.spoiler);
        syncChrome();
        var openId = (location.hash.match(/^#\/e\/(.+)$/) || [])[1];
        if (openId) entrySheet(openId); else paint(state.view);
        return;
      }

      /* Light / dark theme */
      if (t.closest('#themeBtn')) {
        prefs.theme = prefs.theme === 'dark' ? 'light' : 'dark';
        store.set('theme', prefs.theme);
        applyTheme(); syncChrome();
        return;
      }

      /* Unwatched-only filter */
      if (t.closest('[data-unwatched]')) {
        state.unwatchedOnly = !state.unwatchedOnly;
        paint('timeline'); return;
      }

      /* Open a detail view */
      var eBtn = t.closest('[data-entry]');
      if (eBtn) { state.base = state.view; location.hash = '#/e/' + eBtn.getAttribute('data-entry'); closeSearch(); return; }

      var cBtn = t.closest('[data-char]');
      if (cBtn) { state.base = state.view; location.hash = '#/c/' + cBtn.getAttribute('data-char'); closeSearch(); return; }

      var kBtn = t.closest('[data-key]');
      if (kBtn) { state.base = state.view; location.hash = '#/k/' + kBtn.getAttribute('data-key'); closeSearch(); return; }

      /* Navigation */
      var g = t.closest('[data-go]');
      if (g) { ev.preventDefault(); go(g.getAttribute('data-go')); $('#nav').classList.remove('open'); return; }

      /* Timeline controls */
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

      /* Character grouping */
      var chg = t.closest('[data-chg]');
      if (chg) { state.chGroup = chg.getAttribute('data-chg'); paint('characters'); return; }

      /* Mobile menu */
      if (t.closest('#burger')) { $('#nav').classList.toggle('open'); return; }

      /* Back to top */
      if (t.closest('#totop')) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }

      /* Click outside closes search */
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

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    modal = $('#modal'); sheet = $('#sheet');
    $('#burger').innerHTML = G('menu');
    $('#searchIcon').innerHTML = G('search');
    $('#brandGlyph').innerHTML = G('spider');
    $('#ftrGlyph').innerHTML = G('spider');
    $('#totop').innerHTML = G('chevron');
    applyTheme();
    bind();
    route();
    syncChrome();
  });

})();
