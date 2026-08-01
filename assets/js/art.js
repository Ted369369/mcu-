/* ============================================================
   Original SVG artwork system
   Every image is vector artwork drawn for this site. No film stills are used,
   so the site is fully self-contained: it works offline, makes no external requests,
   and raises no rights questions.
   ============================================================ */

/* Line-drawn emblems on a 0 0 100 100 viewBox, stroked rather than filled */
window.MCU_GLYPHS = {

  spider: '<circle cx="50" cy="50" r="11"/><ellipse cx="50" cy="34" rx="7" ry="8"/><path d="M39 44 18 28 8 34M39 50 14 50 4 58M40 57 17 70 10 82M43 63 32 82 26 94M61 44 82 28 92 34M61 50 86 50 96 58M60 57 83 70 90 82M57 63 68 82 74 94"/>',

  web: '<path d="M50 6v88M6 50h88M14 14l72 72M86 14 14 86"/><circle cx="50" cy="50" r="14"/><circle cx="50" cy="50" r="28"/><circle cx="50" cy="50" r="42"/>',

  arc: '<circle cx="50" cy="50" r="16"/><circle cx="50" cy="50" r="30"/><path d="M50 20V8M50 92V80M20 50H8M92 50H80M29 29 20 20M71 71l9 9M71 29l9-9M29 71l-9 9"/>',

  shield: '<path d="M50 8 84 20v30c0 22-14 34-34 42C30 84 16 72 16 50V20z"/><path d="M50 8v84M16 44h68"/>',

  hammer: '<path d="M26 18h48v22H26z"/><path d="M50 40v46"/><path d="M40 86h20"/><path d="M26 24H14M86 24H74"/>',

  star: '<path d="M50 10 62 38l30 3-22 21 6 30-26-15-26 15 6-30-22-21 30-3z"/>',

  starburst: '<path d="M50 6v26M50 68v26M6 50h26M68 50h26M22 22l18 18M60 60l18 18M78 22 60 40M40 60 22 78"/><circle cx="50" cy="50" r="14"/>',

  gauntlet: '<path d="M30 88V44c0-14 8-22 20-22s20 8 20 22v44z"/><path d="M30 58h40"/><circle cx="40" cy="34" r="4"/><circle cx="52" cy="30" r="4"/><circle cx="64" cy="36" r="4"/><circle cx="38" cy="48" r="4"/><circle cx="50" cy="46" r="4"/><circle cx="62" cy="50" r="4"/>',

  snap: '<path d="M34 84c-8-10-6-24 4-32l14-12"/><path d="M52 40c6-8 18-10 26-4"/><path d="M78 36 62 52"/><circle cx="80" cy="20" r="3"/><circle cx="90" cy="32" r="2"/><circle cx="68" cy="14" r="2"/><circle cx="88" cy="12" r="2"/>',

  eye: '<path d="M8 50c14-20 28-30 42-30s28 10 42 30c-14 20-28 30-42 30S22 70 8 50z"/><circle cx="50" cy="50" r="13"/><path d="M50 20V8M50 92V80"/>',

  portal: '<ellipse cx="50" cy="50" rx="40" ry="40"/><ellipse cx="50" cy="50" rx="26" ry="40"/><ellipse cx="50" cy="50" rx="12" ry="40"/><path d="M10 50h80"/>',

  hex: '<path d="M50 8 84 28v44L50 92 16 72V28z"/><path d="M50 30 68 40v20L50 70 32 60V40z"/>',

  tva: '<circle cx="50" cy="50" r="38"/><path d="M50 22v28l20 12"/><path d="M50 12v10M50 78v10M12 50h10M78 50h10"/>',

  fist: '<path d="M22 52c0-8 6-14 14-14h34c8 0 12 6 12 14v20c0 8-6 14-14 14H36c-8 0-14-6-14-14z"/><path d="M36 38V26c0-6 4-10 10-10s10 4 10 10v12M56 38V22c0-6 4-10 10-10"/><path d="M22 62h60"/>',

  wing: '<path d="M50 30 20 14c-8 22 2 40 14 48M50 30l30-16c8 22-2 40-14 48"/><path d="M50 30v56"/><path d="M38 86h24"/>',

  fishbowl: '<circle cx="50" cy="44" r="30"/><path d="M26 70c6 12 14 18 24 18s18-6 24-18"/><path d="M34 34c4-8 10-12 16-12"/>',

  tentacle: '<circle cx="50" cy="50" r="12"/><path d="M40 42C28 32 26 20 34 10M60 42c12-10 14-22 6-32M40 58C28 68 26 80 34 90M60 58c12 10 14 22 6 32"/><circle cx="34" cy="8" r="4"/><circle cx="66" cy="8" r="4"/><circle cx="34" cy="92" r="4"/><circle cx="66" cy="92" r="4"/>',

  bolt: '<path d="M56 6 26 54h20l-6 40 34-52H54z"/>',

  sand: '<path d="M14 78c10-6 18 0 26-4s14-10 24-6 14 10 22 6"/><path d="M14 60c10-6 18 0 26-4s14-10 24-6 14 10 22 6"/><path d="M14 42c10-6 18 0 26-4s14-10 24-6 14 10 22 6"/><path d="M20 24c8-4 14 0 20-2"/>',

  lizard: '<path d="M18 62c0-12 10-20 22-20h14c14 0 24 8 24 18 0 8-6 14-14 14"/><path d="M18 62c-6 8-4 18 4 22"/><circle cx="70" cy="52" r="3"/><path d="M40 42V30M54 42V28"/><path d="M64 74c-8 6-20 6-28 0"/>',

  goblin: '<path d="M50 12c18 0 30 14 30 32 0 20-14 36-30 44C34 80 20 64 20 44c0-18 12-32 30-32z"/><path d="M36 40l10 6M64 40l-10 6"/><path d="M38 64c8 6 16 6 24 0"/>',

  claw: '<path d="M26 88 34 12M46 88 50 8M66 88 66 12"/><path d="M18 88h56"/>',

  skull: '<path d="M50 12c18 0 28 12 28 30 0 10-4 16-4 24v10H26V66c0-8-4-14-4-24 0-18 10-30 28-30z"/><circle cx="38" cy="46" r="6"/><circle cx="62" cy="46" r="6"/><path d="M46 62h8"/><path d="M34 76v10M50 76v12M66 76v10"/>',

  doom: '<path d="M50 8 82 24v34c0 20-14 30-32 34-18-4-32-14-32-34V24z"/><path d="M34 40h10M56 40h10"/><path d="M36 62h28"/><path d="M40 62l-2 12M60 62l2 12M50 62v14"/>',

  four: '<path d="M62 88V12L18 62h56"/><circle cx="50" cy="50" r="42"/>',

  tree: '<path d="M50 88V44"/><path d="M50 44 30 26M50 56 26 44M50 44l20-18M50 56l24-12"/><circle cx="50" cy="20" r="10"/><path d="M38 88h24"/>',

  panther: '<path d="M22 74c-4-14 0-30 8-40 6-8 12-12 20-12s14 4 20 12c8 10 12 26 8 40"/><path d="M30 34 22 16l16 8M70 34l8-18-16 8"/><circle cx="40" cy="52" r="3"/><circle cx="60" cy="52" r="3"/><path d="M44 66h12"/>',

  widow: '<path d="M50 22c14 0 22 10 22 24s-8 42-22 42S28 60 28 46s8-24 22-24z"/><path d="M50 22V6"/><path d="M36 40 18 30M64 40l18-10M36 56 18 62M64 56l18 6"/>',

  rings: '<circle cx="50" cy="50" r="12"/><circle cx="50" cy="50" r="24"/><circle cx="50" cy="50" r="36"/><path d="M50 14v72"/>',

  celestial: '<circle cx="50" cy="50" r="20"/><path d="M50 4v22M50 74v22M4 50h22M74 50h22M18 18l16 16M66 66l16 16M82 18 66 34M34 66 18 82"/>',

  ant: '<circle cx="50" cy="26" r="10"/><ellipse cx="50" cy="52" rx="10" ry="12"/><ellipse cx="50" cy="76" rx="12" ry="14"/><path d="M42 44 22 34M42 56 20 56M58 44l20-10M58 56l22 0"/><path d="M44 18 36 6M56 18l8-12"/>',

  arrow: '<path d="M14 86 86 14"/><path d="M86 14H62M86 14v24"/><path d="M22 62l16 16"/>',

  heart: '<path d="M50 84C30 68 14 56 14 40c0-12 9-20 19-20 7 0 13 4 17 10 4-6 10-10 17-10 10 0 19 8 19 20 0 16-16 28-36 44z"/>',

  laptop: '<path d="M24 26h52v38H24z"/><path d="M14 72h72l-6-8H20z"/><path d="M40 72h20"/>',

  car: '<path d="M16 62h68v14H16z"/><path d="M24 62l8-20h36l8 20"/><circle cx="32" cy="80" r="7"/><circle cx="68" cy="80" r="7"/>',

  news: '<path d="M16 22h56v56H16z"/><path d="M72 34h12v38a6 6 0 0 1-12 0"/><path d="M26 36h36M26 48h36M26 60h20"/>',

  badge: '<path d="M50 10 78 22v28c0 20-12 32-28 40-16-8-28-20-28-40V22z"/><path d="M38 50l9 10 17-20"/>',

  scorpion: '<ellipse cx="46" cy="60" rx="14" ry="18"/><path d="M46 42c0-12 8-20 18-20s16 8 14 18l-4 16"/><path d="M74 56c6 4 6 12 0 14"/><path d="M34 48 18 36M34 60H14M34 72l-16 10"/><path d="M58 48l12-14"/>',

  tombstone: '<path d="M26 88V38c0-14 10-24 24-24s24 10 24 24v50z"/><path d="M38 42h24M50 34v34"/><path d="M18 88h64"/>',

  question: '<path d="M34 36c0-10 7-16 16-16s16 6 16 16c0 8-5 12-11 16-4 3-5 6-5 10"/><circle cx="50" cy="80" r="5"/>',

  list: '<path d="M20 28h6M20 50h6M20 72h6"/><path d="M40 28h40M40 50h40M40 72h28"/>',

  skip: '<path d="M22 24 52 50 22 76z"/><path d="M56 24 86 50 56 76z"/><path d="M14 24v52"/>',

  /* --- Interface icons --- */
  search:  '<circle cx="44" cy="44" r="26"/><path d="M64 64l24 24"/>',
  close:   '<path d="M26 26 74 74M74 26 26 74"/>',
  menu:    '<path d="M16 30h68M16 50h68M16 70h68"/>',
  check:   '<path d="M20 52l20 20 40-44"/>',
  cross:   '<path d="M28 28 72 72M72 28 28 72"/>',
  warn:    '<path d="M50 14 90 82H10z"/><path d="M50 40v22"/><circle cx="50" cy="72" r="3.5"/>',
  info:    '<circle cx="50" cy="50" r="38"/><path d="M50 44v26"/><circle cx="50" cy="32" r="3.5"/>',
  chevron: '<path d="M36 20 66 50 36 80"/>',
  bulb:    '<path d="M50 12c14 0 24 10 24 24 0 12-8 18-8 26H34c0-8-8-14-8-26 0-14 10-24 24-24z"/><path d="M40 74h20M42 86h16"/>',
  github:  '<path d="M50 8a42 42 0 0 0-13 82c-2-1-2-6-2-8-9 2-12-4-13-7-1-2-3-5-5-6-2-1 0-2 2-2 4 0 7 5 8 7 3 4 8 3 11 2 0-3 2-6 3-7-9-1-15-6-15-15 0-4 1-8 4-11-1-2-1-6 0-9 0 0 4 0 8 4a24 24 0 0 1 12 0c4-4 8-4 8-4 1 3 1 7 0 9 3 3 4 7 4 11 0 9-6 14-15 15 2 2 3 5 3 8v12"/>'
};

/* ---------- Emblem SVG ---------- */
window.glyphSVG = function (name, cls) {
  var g = window.MCU_GLYPHS[name] || window.MCU_GLYPHS.star;
  return '<svg class="glyph ' + (cls || '') + '" viewBox="0 0 100 100" aria-hidden="true" ' +
    'fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">' +
    g + '</svg>';
};

/* ---------- Generated poster banner ---------- */
var _artId = 0;

window.posterSVG = function (entry, opts) {
  opts = opts || {};
  var id = 'a' + (++_artId);
  var a = (entry.accent && entry.accent[0]) || '#dc2626';
  var b = (entry.accent && entry.accent[1]) || '#1d4ed8';
  var glyph = window.MCU_GLYPHS[entry.glyph] || window.MCU_GLYPHS.star;
  var w = 400, h = opts.tall ? 300 : 200;

  return '' +
  '<svg class="poster" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
    '<defs>' +
      '<linearGradient id="g' + id + '" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="' + a + '"/>' +
        '<stop offset="1" stop-color="' + b + '"/>' +
      '</linearGradient>' +
      '<radialGradient id="v' + id + '" cx="0.7" cy="0.25" r="0.9">' +
        '<stop offset="0" stop-color="#fff" stop-opacity="0.28"/>' +
        '<stop offset="1" stop-color="#000" stop-opacity="0.5"/>' +
      '</radialGradient>' +
      '<pattern id="p' + id + '" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(20)">' +
        '<path d="M0 13h26M13 0v26" stroke="#fff" stroke-opacity="0.07" stroke-width="1"/>' +
      '</pattern>' +
    '</defs>' +
    '<rect width="' + w + '" height="' + h + '" fill="url(#g' + id + ')"/>' +
    '<rect width="' + w + '" height="' + h + '" fill="url(#p' + id + ')"/>' +
    '<rect width="' + w + '" height="' + h + '" fill="url(#v' + id + ')"/>' +
    /* Large emblem; centre mode is used for narrow thumbnails so it is not cropped */
    '<g transform="translate(' + (opts.center ? (w / 2 - 60) : (w - 150)) + ' ' + (h / 2 - 60) + ') scale(1.2)" ' +
      'fill="none" stroke="#fff" stroke-opacity="0.5" stroke-width="3.2" ' +
      'stroke-linecap="round" stroke-linejoin="round">' + glyph + '</g>' +
    /* Decorative rules, lower left */
    '<g stroke="#fff" stroke-opacity="0.22" stroke-width="1.5">' +
      '<path d="M0 ' + (h - 40) + 'h120M0 ' + (h - 28) + 'h70M0 ' + (h - 16) + 'h180"/>' +
    '</g>' +
  '</svg>';
};

/* ---------- Character avatar ---------- */
window.avatarSVG = function (ch) {
  var id = 'c' + (++_artId);
  var a = (ch.accent && ch.accent[0]) || '#dc2626';
  var b = (ch.accent && ch.accent[1]) || '#1d4ed8';
  var glyph = window.MCU_GLYPHS[ch.glyph] || window.MCU_GLYPHS.star;

  return '' +
  '<svg class="avatar" viewBox="0 0 120 120" aria-hidden="true">' +
    '<defs>' +
      '<linearGradient id="ag' + id + '" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="' + a + '"/>' +
        '<stop offset="1" stop-color="' + b + '"/>' +
      '</linearGradient>' +
    '</defs>' +
    '<rect x="2" y="2" width="116" height="116" rx="26" fill="url(#ag' + id + ')"/>' +
    '<rect x="2" y="2" width="116" height="116" rx="26" fill="#000" fill-opacity="0.18"/>' +
    '<g transform="translate(22 22) scale(0.76)" fill="none" stroke="#fff" stroke-opacity="0.92" ' +
      'stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">' + glyph + '</g>' +
  '</svg>';
};

/* ---------- Infinity Stone rendering ---------- */
window.stoneSVG = function (stone) {
  var id = 's' + (++_artId);
  return '' +
  '<svg class="stone-art" viewBox="0 0 100 100" aria-hidden="true">' +
    '<defs>' +
      '<radialGradient id="sg' + id + '" cx="0.35" cy="0.3" r="0.8">' +
        '<stop offset="0" stop-color="#fff" stop-opacity="0.9"/>' +
        '<stop offset="0.45" stop-color="' + stone.color + '"/>' +
        '<stop offset="1" stop-color="#000" stop-opacity="0.75"/>' +
      '</radialGradient>' +
    '</defs>' +
    '<circle cx="50" cy="50" r="34" fill="url(#sg' + id + ')"/>' +
    '<circle cx="50" cy="50" r="34" fill="none" stroke="' + stone.color + '" stroke-opacity="0.55" stroke-width="2"/>' +
    '<circle cx="50" cy="50" r="44" fill="none" stroke="' + stone.color + '" stroke-opacity="0.25" stroke-width="1"/>' +
    '<ellipse cx="40" cy="36" rx="10" ry="6" fill="#fff" fill-opacity="0.45" transform="rotate(-25 40 36)"/>' +
  '</svg>';
};

/* ---------- Hero web backdrop ---------- */
window.heroWebSVG = function () {
  var rings = '', spokes = '', i, r, ang, x, y;
  for (i = 1; i <= 7; i++) {
    r = i * 90;
    rings += '<circle cx="500" cy="0" r="' + r + '"/>';
  }
  for (i = 0; i < 13; i++) {
    ang = (Math.PI / 12) * i;
    x = 500 - Math.cos(ang) * 700;
    y = Math.sin(ang) * 700;
    spokes += '<path d="M500 0 L' + x.toFixed(1) + ' ' + y.toFixed(1) + '"/>';
  }
  return '<svg class="hero-web" viewBox="0 0 1000 460" preserveAspectRatio="xMidYMin slice" aria-hidden="true" ' +
    'fill="none" stroke="currentColor" stroke-width="1">' + rings + spokes + '</svg>';
};
