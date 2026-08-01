/* ============================================================
   Taxonomy, concepts, Infinity Stones, phases and watch guide
   ============================================================ */

/* ---------- Sagas and phases ---------- */
window.MCU_SAGAS = [
  { id: 'infinity',   label: 'The Infinity Saga',        sub: 'Phases 1–3 · 2008–2019 · 23 films', color: '#f0b429' },
  { id: 'multiverse', label: 'The Multiverse Saga',      sub: 'Phases 4–6 · 2021–2027 · films and series', color: '#a78bfa' },
  { id: 'oneshot',    label: 'Marvel One-Shots',         sub: '2011–2014 · shorts that fill the gaps between films', color: '#22d3ee' },
  { id: 'defenders',  label: 'The Defenders Saga',       sub: '2015–2019 · now folded into the official Disney+ timeline', color: '#ef4444' },
  { id: 'marveltv',   label: 'Marvel Television',        sub: '2013–2020 · ambiguous canon status', color: '#64748b' },
  { id: 'sony',       label: "Sony's Spider-Man Films",  sub: '2002–2014 · the other universes No Way Home draws on', color: '#fb923c' }
];

window.MCU_PHASES = [
  { id: 'Phase 1', label: 'Phase 1', years: '2008–2012', saga: 'infinity',
    desc: 'Heroes are introduced one by one, then assembled. Built around Nick Fury\'s Avengers Initiative and the Tesseract.' },
  { id: 'Phase 2', label: 'Phase 2', years: '2013–2015', saga: 'infinity',
    desc: 'The world widens into space and the Quantum Realm, S.H.I.E.L.D. collapses from within, and the Infinity Stones surface one at a time.' },
  { id: 'Phase 3', label: 'Phase 3', years: '2016–2019', saga: 'infinity',
    desc: 'The Avengers fracture over the Sokovia Accords, Thanos collects all six Stones and snaps. Closes with Endgame and Far From Home.' },
  { id: 'Phase 4', label: 'Phase 4', years: '2021–2022', saga: 'multiverse',
    desc: 'The post-Snap era. Disney+ series join the main narrative, and Loki flips the switch on the multiverse.' },
  { id: 'Phase 5', label: 'Phase 5', years: '2023–2025', saga: 'multiverse',
    desc: 'The multiverse expands, the X-Men arrive via Deadpool & Wolverine, and a new Avengers team is formed.' },
  { id: 'Phase 6', label: 'Phase 6', years: '2025–2027', saga: 'multiverse',
    desc: 'The Fantastic Four arrive, Doctor Doom steps forward, and the saga closes with Doomsday and Secret Wars.' },
  { id: 'One-Shot', label: 'One-Shots', years: '2011–2014', saga: 'oneshot',
    desc: 'Short films released with the Blu-rays, filling in the space between features.' },
  { id: 'Defenders Saga', label: 'Defenders Saga', years: '2015–2019', saga: 'defenders',
    desc: "Netflix's street-level series, now part of the official MCU timeline on Disney+." },
  { id: 'Marvel TV', label: 'Marvel TV', years: '2013–2020', saga: 'marveltv',
    desc: 'Made by the now-dissolved Marvel Television division; canon status remains unclear.' },
  { id: 'Raimi Trilogy', label: 'The Raimi Trilogy', years: '2002–2007', saga: 'sony',
    desc: 'Starring Tobey Maguire. Green Goblin, Doc Ock and Sandman all come from this universe.' },
  { id: 'Webb Duology', label: 'The Webb Duology', years: '2012–2014', saga: 'sony',
    desc: "Starring Andrew Garfield. Electro and the Lizard come from here, and Gwen Stacy's death is the wound No Way Home heals." }
];

/* ---------- Filter categories ---------- */
window.MCU_CATS = [
  { id: 'avengers',   label: 'Avengers',    color: '#f0b429' },
  { id: 'spidey',     label: 'Spider-Man',  color: '#ff4655' },
  { id: 'cosmic',     label: 'Cosmic',      color: '#22d3ee' },
  { id: 'mystic',     label: 'Mystic',      color: '#c084fc' },
  { id: 'street',     label: 'Street-level',color: '#f97316' },
  { id: 'multiverse', label: 'Multiverse',  color: '#a78bfa' },
  { id: 'series',     label: 'Series',      color: '#34d399' },
  { id: 'animation',  label: 'Animation',   color: '#38bdf8' }
];

/* ---------- In-story eras ---------- */
window.MCU_ERAS = [
  { id: 'ancient', label: 'Antiquity · from 1260 BC', sub: 'Eyes of Wakanda — the earliest point on the official timeline' },
  { id: 'ww2',     label: '1943–1945 · World War II', sub: 'Where the super-soldier programme and HYDRA begin' },
  { id: 'cold',    label: "1946–1994 · S.H.I.E.L.D.'s founding", sub: 'Peggy Carter and the birth of the agency' },
  { id: 'y1995',   label: '1995',                     sub: "Nick Fury's first contact with the wider universe" },
  { id: 'rise',    label: '2010–2013 · Heroes emerge', sub: 'Iron Man through the Battle of New York' },
  { id: 'shield',  label: '2014–2015 · S.H.I.E.L.D. falls', sub: 'HYDRA revealed, the Guardians arrive, the Quantum Realm opens' },
  { id: 'civil',   label: '2016–2017 · Civil war and new blood', sub: 'The Avengers split; Spider-Man and Black Panther join' },
  { id: 'snap',    label: '2018 · Infinity War and the Snap', sub: 'The ending where the villain wins' },
  { id: 'endgame', label: '2023 · Endgame',           sub: 'The Time Heist, five years after the Blip' },
  { id: 'after',   label: '2023–2025 · After Endgame', sub: 'The multiverse opens and a spell goes wrong' },
  { id: 'expand',  label: '2025–2027 · The multiverse widens', sub: 'The X-Men return and a new Avengers team forms' },
  { id: 'future',  label: '2027 onward',              sub: 'Spider-Man 4, Doomsday and Secret Wars' },
  { id: 'other',   label: 'Other universes',          sub: "Sony's Spider-Man films, outside the MCU's main universe" }
];

/* ---------- TL;DR ---------- */
window.MCU_TLDR = [
  {
    h: 'The MCU is one continuous story, not a pile of separate films',
    body: 'Since Iron Man in 2008, 40 films and nearly 30 series have shared a single world and a single timeline. Characters cross between them, and a throwaway supporting role can become the main villain seventeen years later. That connective tissue is what makes it different from any other franchise.',
    glyph: 'star'
  },
  {
    h: 'It splits into two "sagas" across six phases',
    body: 'The Infinity Saga (Phases 1–3, 2008–2019) is about Thanos and the six Infinity Stones, and ends with Endgame. The Multiverse Saga (Phases 4–6, 2021–2027) is about parallel universes collapsing into each other, with Doctor Doom as the endgame villain, closing with Doomsday and Secret Wars.',
    glyph: 'portal'
  },
  {
    h: 'You do not have to watch all of it',
    body: 'The actual spine is about 20 titles. Some series are essential (Loki, WandaVision) and others are entirely skippable. Every work here is marked essential / recommended / optional / skippable, and carries a full plot summary — so you can follow the story whether or not you watch it.',
    glyph: 'list'
  }
];

/* ---------- Key findings ---------- */
window.MCU_FINDINGS = [
  {
    h: 'Newcomers should watch in release order',
    body: 'Following the order the films came out lets you experience Marvel\'s slow-build reveals the way they were designed — the Stones and Thanos were a six-year mystery. Chronological order makes cause and effect clearer but spoils those reveals in advance.',
    key: true
  },
  {
    h: 'The Infinity Saga\'s spine is the hunt for six Stones',
    body: 'Space, Reality, Power, Mind, Time and Soul. They started appearing in 2011 and most viewers had no idea what they were at the time. Recognising the six is essentially the whole hidden thread of Phases 1–3.'
  },
  {
    h: 'The multiverse was opened by a TV series, not a film',
    body: 'It was the final five minutes of Loki season one — Sylvie kills He Who Remains and the Sacred Timeline branches uncontrollably. No Way Home\'s broken spell and Multiverse of Madness\'s universe-hopping both rest on that moment.',
    key: true
  },
  {
    h: 'The main villain has been recast and rewritten',
    body: 'The plan was Kang the Conqueror, but after actor Jonathan Majors was convicted in 2023 and dropped, Marvel replaced him with Doctor Doom, played by former Iron Man actor Robert Downey Jr. Any older source calling Kang the Doomsday villain is out of date.',
    key: true
  },
  {
    h: "Netflix's Daredevil is canon now",
    body: 'Disney+ has folded the entire Defenders Saga into the official MCU timeline. Charlie Cox\'s Daredevil and Vincent D\'Onofrio\'s Kingpin have both returned in mainline projects.'
  },
  {
    h: 'The X-Men and Fantastic Four are being absorbed',
    body: 'Ms. Marvel confirmed mutants exist, The Marvels\' tag scene showed Beast, Deadpool & Wolverine formally imported the Fox-era cast, and First Steps comes from parallel universe Earth-828. All of it points at the Doomsday crossover.'
  }
];

/* ---------- Core concepts ---------- */
window.MCU_CONCEPTS = [
  { id: 'mcu', term: 'MCU', en: 'Marvel Cinematic Universe', glyph: 'star', accent: ['#dc2626', '#f0b429'],
    def: 'The shared continuity of interconnected films and series that began with Iron Man in 2008. Currently six phases across two sagas.',
    related: ['iron-man', 'endgame', 'doomsday'] },

  { id: 'infinity-stones', term: 'Infinity Stones', en: 'Infinity Stones', glyph: 'gauntlet', accent: ['#7e22ce', '#f0b429'],
    def: 'Six gems formed when a single pre-Big-Bang entity shattered as the universe was born: Space (blue), Reality (red), Power (purple), Mind (yellow), Time (green) and Soul (orange). Together they allow their bearer to do essentially anything.',
    related: ['infinity-war', 'endgame'] },

  { id: 'infinity-gauntlet', term: 'Infinity Gauntlet', en: 'Infinity Gauntlet', glyph: 'gauntlet', accent: ['#b45309', '#f0b429'],
    def: 'The glove Thanos commissioned from the dwarves of Nidavellir to hold all six Stones. No ordinary being can survive channelling all six at once.',
    related: ['infinity-war', 'endgame', 'thor-3'] },

  { id: 'the-snap', term: 'The Snap / The Blip', en: 'The Snap / The Blip', glyph: 'snap', accent: ['#7e22ce', '#111827'],
    def: 'Thanos gathers all six Stones and snaps his fingers, turning half of all life in the universe to dust at random. Five years later the Avengers bring them back; that missing half-decade is called the Blip.',
    note: 'Everyone taken by the Snap returns without having aged a day — which is why some of Peter Parker\'s classmates are suddenly five years older than he is.',
    related: ['infinity-war', 'endgame', 'far-from-home', 'falcon-winter-soldier'] },

  { id: 'multiverse', term: 'The Multiverse', en: 'Multiverse', glyph: 'portal', accent: ['#7c3aed', '#0891b2'],
    def: 'The premise that countless parallel universes exist, each with its own version of the same characters. This is the spine of Phases 4–6.',
    related: ['loki-s1', 'no-way-home', 'multiverse-of-madness', 'deadpool-wolverine'] },

  { id: 'tva', term: 'TVA', en: 'Time Variance Authority', glyph: 'tva', accent: ['#a16207', '#166534'],
    def: 'A bureaucracy existing outside of time that prunes any timeline branching away from the "Sacred Timeline". Secretly founded by He Who Remains; the truth comes out in Loki season one.',
    related: ['loki-s1', 'loki-s2', 'deadpool-wolverine'] },

  { id: 'sacred-timeline', term: 'The Sacred Timeline', en: 'The Sacred Timeline', glyph: 'tva', accent: ['#f59e0b', '#166534'],
    def: 'The single permitted timeline He Who Remains maintained to prevent another multiversal war. Every deviation was pruned by the TVA. It was destroyed at the end of Loki season one.',
    related: ['loki-s1', 'loki-s2'] },

  { id: 'variant', term: 'Variant', en: 'Variant', glyph: 'question', accent: ['#7c3aed', '#f59e0b'],
    def: 'A version of the same person from a different universe. The three Spider-Men, Sylvie and Loki, and the countless Kangs are all variants of one another.',
    related: ['loki-s1', 'no-way-home', 'what-if-s1'] },

  { id: 'incursion', term: 'Incursion', en: 'Incursion', glyph: 'portal', accent: ['#be123c', '#111827'],
    def: 'A catastrophe in which two parallel universes collide and annihilate each other. Introduced in Multiverse of Madness and widely expected to be the core premise of Secret Wars.',
    related: ['multiverse-of-madness', 'secret-wars'] },

  { id: 'earth-numbers', term: 'Earth-616 / 838 / 828', en: 'Universe designations', glyph: 'portal', accent: ['#0e7490', '#f0b429'],
    def: 'Marvel numbers its universes. 616 generally denotes the main MCU; 838 appears in Multiverse of Madness; 828 is the retro-futurist world of The Fantastic Four: First Steps.',
    related: ['multiverse-of-madness', 'fantastic-four'] },

  { id: 'quantum-realm', term: 'The Quantum Realm', en: 'Quantum Realm', glyph: 'ant', accent: ['#0891b2', '#4c1d95'],
    def: 'A subatomic dimension smaller than atoms, where the rules of space and time break down. Ant-Man proved you can go in and come back — which is the entire theoretical basis for the time travel in Endgame.',
    note: 'Endgame only works because the Ant-Man and the Wasp tag scene strands Scott Lang down here.',
    related: ['ant-man', 'ant-man-2', 'endgame', 'quantumania'] },

  { id: 'super-soldier', term: 'Super-Soldier Serum', en: 'Super Soldier Serum', glyph: 'shield', accent: ['#1e40af', '#b91c1c'],
    def: "Dr Erskine's formula, which amplifies whatever the subject already is — good becomes great, bad becomes worse. Steve Rogers, Red Skull, Bucky, John Walker and Isaiah Bradley have all taken versions of it.",
    related: ['captain-america', 'winter-soldier', 'falcon-winter-soldier'] },

  { id: 'sokovia', term: 'Sokovia Accords', en: 'Sokovia Accords', glyph: 'badge', accent: ['#1e40af', '#64748b'],
    def: 'UN legislation drafted after the Sokovia disaster to place the Avengers under government oversight. It is what splits the team in Civil War.',
    related: ['civil-war', 'age-of-ultron', 'black-widow'] },

  { id: 'shield', term: 'S.H.I.E.L.D.', en: 'S.H.I.E.L.D.', glyph: 'badge', accent: ['#0f172a', '#0e7490'],
    def: 'The international security agency co-founded by Peggy Carter and Howard Stark, and the connective tissue between the early heroes. It collapses in The Winter Soldier once HYDRA is exposed inside it.',
    related: ['iron-man', 'avengers-1', 'winter-soldier', 'agent-carter-oneshot'] },

  { id: 'hydra', term: 'HYDRA', en: 'HYDRA', glyph: 'skull', accent: ['#111827', '#b91c1c'],
    def: 'Originally the Nazi science division; after the war it grew inside S.H.I.E.L.D. for decades via Operation Paperclip. "Cut off one head, two more shall take its place."',
    related: ['captain-america', 'winter-soldier', 'agents-of-shield'] },

  { id: 'vibranium', term: 'Vibranium', en: 'Vibranium', glyph: 'panther', accent: ['#4c1d95', '#0f172a'],
    def: "A metal from an ancient meteorite that absorbs and redirects kinetic energy. Captain America's shield, the Black Panther suit and all of Wakandan civilisation are built on it. The undersea kingdom of Talokan has it too.",
    related: ['black-panther', 'wakanda-forever', 'captain-america'] },

  { id: 'adamantium', term: 'Adamantium', en: 'Adamantium', glyph: 'claw', accent: ['#e5e7eb', '#1e40af'],
    def: "An alloy stronger than vibranium and effectively indestructible, mined from the Celestial Island in the Indian Ocean in Brave New World. It is what Wolverine's skeleton and claws are made of — Marvel laying track for the X-Men.",
    related: ['brave-new-world', 'eternals', 'deadpool-wolverine'] },

  { id: 'celestials', term: 'Celestials', en: 'Celestials', glyph: 'celestial', accent: ['#0d9488', '#a16207'],
    def: 'The oldest beings in the universe, planet-sized, who create life and destroy it. The Eternals were made by the Celestial Arishem; Star-Lord\'s father Ego was one; and the petrified Tiamut became the Celestial Island.',
    related: ['eternals', 'gotg-2', 'brave-new-world'] },

  { id: 'mutants', term: 'Mutants', en: 'Mutants', glyph: 'claw', accent: ['#f0b429', '#1e40af'],
    def: 'Humans born with powers from a genetic mutation — the X-Men. Ms. Marvel confirmed they exist in the MCU, and Deadpool & Wolverine formally brought the Fox-era characters across.',
    related: ['ms-marvel', 'deadpool-wolverine', 'the-marvels', 'doomsday'] },

  { id: 'darkhold', term: 'The Darkhold', en: 'The Darkhold', glyph: 'hex', accent: ['#7e22ce', '#111827'],
    def: 'A book of dark magic that corrupts whoever reads it. Wanda begins studying it at the end of WandaVision, is fully consumed by it in Multiverse of Madness, and finally destroys every copy across every universe.',
    related: ['wandavision', 'multiverse-of-madness', 'agatha'] },

  { id: 'kree-skrull', term: 'Kree and Skrulls', en: 'Kree & Skrulls', glyph: 'starburst', accent: ['#1d4ed8', '#166534'],
    def: 'Two alien species locked in a millennia-long war. The Kree are a military empire; the shapeshifting Skrulls turn out in Captain Marvel to be refugees driven from their homeworld. A radicalised faction strikes back in Secret Invasion.',
    related: ['captain-marvel', 'secret-invasion', 'the-marvels'] },

  { id: 'ten-rings', term: 'The Ten Rings', en: 'The Ten Rings', glyph: 'rings', accent: ['#b45309', '#065f46'],
    def: 'Ten ancient rings of unknown origin that grant near-immortality and immense power. Wenwu used them to build an organisation that lasted a thousand years. The Shang-Chi tag scene shows them broadcasting a signal to something.',
    related: ['shang-chi', 'iron-man', 'all-hail-the-king'] }
];

/* ---------- The six Infinity Stones ---------- */
window.MCU_STONES = [
  { id: 'space', name: 'Space Stone', en: 'Space Stone', color: '#3b82f6', vessel: 'The Tesseract',
    first: 'Seen in the WWII scenes of Captain America; formally introduced in the Thor (2011) tag scene',
    story: 'Used as a weapons power source by Red Skull and HYDRA in the war. Its energy exploding in 1995 gives Carol Danvers her powers. Loki uses it to open the Chitauri portal in The Avengers. During the Time Heist a 2012 Loki variant escapes with it — which is what spawns the Loki series.',
    related: ['thor', 'captain-america', 'avengers-1', 'captain-marvel', 'loki-s1'] },

  { id: 'reality', name: 'Reality Stone', en: 'Reality Stone', color: '#ef4444', vessel: 'The Aether',
    first: 'Thor: The Dark World (2013)',
    story: 'The only Stone not in crystalline form, existing as the liquid Aether. Malekith wants to use it to return the universe to darkness. In the tag scene the Asgardians hand it to the Collector, reasoning that keeping two Stones together is too dangerous.',
    related: ['thor-2', 'infinity-war'] },

  { id: 'power', name: 'Power Stone', en: 'Power Stone', color: '#a855f7', vessel: 'The Orb',
    first: 'Guardians of the Galaxy (2014)',
    story: 'Pure destructive energy that tears apart anyone who touches it barehanded. The Guardians survive only by joining hands and sharing the load, then leave it with the Nova Corps — from whom Thanos takes it before Infinity War opens.',
    related: ['gotg-1', 'infinity-war'] },

  { id: 'mind', name: 'Mind Stone', en: 'Mind Stone', color: '#eab308', vessel: "Loki's sceptre → Vision's forehead",
    first: 'The Avengers (2012), hidden inside the sceptre',
    story: "The sceptre Thanos gave Loki contained it all along. HYDRA used it to create Wanda and Pietro. In Age of Ultron the Avengers combine it with JARVIS to create Vision, leaving the Stone set in his forehead. In Infinity War Wanda destroys it herself, and Thanos rewinds time to tear it back out in front of her.",
    related: ['avengers-1', 'age-of-ultron', 'infinity-war', 'wandavision'] },

  { id: 'time', name: 'Time Stone', en: 'Time Stone', color: '#22c55e', vessel: 'The Eye of Agamotto',
    first: 'Doctor Strange (2016)',
    story: 'Kept at Kamar-Taj by the Sorcerer Supreme. Strange uses it to trap himself in an infinite death loop to force Dormammu into negotiating. In Infinity War, having seen 14,000,605 futures, he hands it over willingly to secure the only winning one.',
    related: ['doctor-strange', 'infinity-war'] },

  { id: 'soul', name: 'Soul Stone', en: 'Soul Stone', color: '#f97316', vessel: 'Vormir',
    first: 'Avengers: Infinity War (2018)',
    story: 'The only Stone never to appear in a solo film. Its keeper is Red Skull, teleported away by the Space Stone decades earlier. The price of taking it is sacrificing someone you love — Thanos throws his adopted daughter Gamora from the cliff, and in Endgame Natasha lets go so Clint does not have to.',
    highlight: true,
    related: ['infinity-war', 'endgame', 'captain-america'] }
];

window.MCU_STONES_FATE = 'After the Snap, Thanos used the Stones to destroy the Stones themselves, making it irreversible. In Endgame the Avengers borrow them from other points in the past, and Captain America returns each one to its exact moment afterwards to avoid creating new branch timelines.';

/* ---------- Factions ---------- */
window.MCU_FACTIONS = [
  { name: 'The Avengers', en: 'The Avengers', desc: "Nick Fury's assembled team. The founding six are Iron Man, Captain America, Thor, Hulk, Black Widow and Hawkeye. The name comes from Carol Danvers' call sign." },
  { name: 'The New Avengers', en: 'The New Avengers', desc: 'What Valentina names the group of antiheroes at the end of Thunderbolts — the film\'s asterisk is formally rewritten on screen.' },
  { name: 'S.H.I.E.L.D.', en: 'S.H.I.E.L.D.', desc: 'The international security agency co-founded by Peggy Carter and Howard Stark, dismantled in The Winter Soldier after HYDRA is exposed inside it.' },
  { name: 'HYDRA', en: 'HYDRA', desc: 'Born as the Nazi science division, it spent decades growing inside S.H.I.E.L.D. It produced the Winter Soldier and, via the sceptre, Wanda and Pietro.' },
  { name: 'The TVA', en: 'Time Variance Authority', desc: 'Polices the Sacred Timeline from outside of time. Central to Loki and to Deadpool & Wolverine.' },
  { name: 'Wakanda', en: 'Wakanda', desc: "The vibranium-rich African nation ruled by the Black Panther. T'Challa's decision to open it up reshaped the MCU's geopolitics." },
  { name: 'Talokan', en: 'Talokan', desc: "Namor's undersea kingdom, founded by people who fled Spanish colonisers by taking to the ocean. It has vibranium too." },
  { name: 'Eternals and Celestials', en: 'Eternals & Celestials', desc: 'The Celestial Arishem created the Eternals and stationed them on Earth for seven thousand years — their real assignment was incubating a new Celestial.' },
  { name: 'Guardians of the Galaxy', en: 'Guardians of the Galaxy', desc: 'Star-Lord, Gamora, Rocket, Groot, Drax, Nebula and Mantis. The team disbands and reforms at the end of Vol. 3.' },
  { name: 'The Ten Rings', en: 'The Ten Rings', desc: 'The thousand-year-old organisation Wenwu built around the rings. The faction that kidnapped Tony Stark in Iron Man was a splinter cell of it.' },
  { name: 'The Red Room', en: 'Red Room', desc: 'The Soviet programme that trained and brainwashed Natasha and Yelena, run by Dreykov and controlling thousands of Widows.' },
  { name: 'The Defenders', en: 'The Defenders', desc: 'Daredevil, Jessica Jones, Luke Cage and Iron Fist — the street-level team, now part of the official timeline.' },
  { name: 'The Illuminati', en: 'Illuminati', desc: 'The council of heroes on Earth-838 in Multiverse of Madness, including Reed Richards and Charles Xavier. Wanda kills all of them.' },
  { name: 'X-Men / Mutants', en: 'X-Men / Mutants', desc: 'The Fox-era characters, formally imported by Deadpool & Wolverine and assembling in Doomsday.' },
  { name: 'Kree and Skrulls', en: 'Kree & Skrulls', desc: 'Two alien species at war for millennia. The Skrulls are refugees, not the villains the Kree claimed.' },
  { name: 'The Hand', en: 'The Hand', desc: 'The ninja organisation in Daredevil and The Defenders, in possession of resurrection techniques.' },
  { name: 'Damage Control', en: 'Damage Control', desc: 'The Stark–government joint venture that cleans up after superhero battles — and that put Adrian Toomes out of business.' },
  { name: 'The Daily Bugle', en: 'The Daily Bugle', desc: "J. Jonah Jameson's outlet (TheDailyBugle.net), which broadcast Peter Parker's identity to the world." }
];

/* ---------- Spider-Man 4 dossier (most recent release) ---------- */
window.MCU_SM4 = {
  title: 'Spider-Man: Brand New Day',
  fullTitle: 'Spider-Man: Brand New Day',
  zhSub: 'The most recent MCU release',
  facts: [
    { k: 'Release date', v: '31 July 2026 (North America)', note: 'Some markets, such as India, opened on 30 July. Originally dated 24 July, then pushed back a week.' },
    { k: 'Runtime & rating', v: '2h 25m · PG-13', note: 'Per the official specifications reported by Deadline.' },
    { k: 'Director', v: 'Destin Daniel Cretton', note: 'Director of Shang-Chi and the Legend of the Ten Rings.' },
    { k: 'Writers', v: 'Chris McKenna and Erik Sommers', note: 'The writing team from the previous trilogy.' },
    { k: 'Producers', v: "Kevin Feige, Amy Pascal, Rachel O'Connor" },
    { k: 'Production', v: 'Began shooting in Glasgow, Scotland in August 2025', note: 'Working title "Blue Oasis"; the city centre was dressed as New York.' },
    { k: 'Trailer', v: 'Released 18 March 2026', note: 'Per Sony, the first trailer passed 1.1 billion views in four days.' },
    { k: 'Phase', v: 'Phase 6', note: 'Same phase as Avengers: Doomsday.' }
  ],
  plot: [
    { h: 'Starting point', body: 'Four years after the end of No Way Home. Peter is, per the official synopsis, "an adult living entirely alone, having voluntarily erased himself from the lives and memories of those he loves" — fighting crime full time while watching MJ and Ned get on with lives that no longer contain him.' },
    { h: 'The conflict', body: 'That isolation, plus his spider-DNA entering some kind of "rebirth" stage and mutating out of his control, pushes him to seek scientific help from Bruce Banner.' },
    { h: 'The threat', body: '"A powerful villain no one can even see."' },
    { h: 'Tone', body: 'Darker and more grounded than the previous films, returning to a street-level New York story.' },
    { h: 'Ending', body: 'Closes on a Bond-style card reading "Spider-Man Will Return".' }
  ],
  cast: [
    { actor: 'Tom Holland', role: 'Peter Parker / Spider-Man', note: 'His seventh outing in the role', charId: 'peter-parker', key: true },
    { actor: 'Zendaya', role: 'MJ (Michelle Jones)', charId: 'mj' },
    { actor: 'Jacob Batalon', role: 'Ned Leeds', note: 'Builds a "Spidey-tracker" app in the film', charId: 'ned' },
    { actor: 'Mark Ruffalo', role: 'Bruce Banner / Hulk', note: 'Helps Peter with his destabilising powers — a heavyweight return', charId: 'hulk', key: true },
    { actor: 'Jon Bernthal', role: 'Frank Castle / The Punisher', note: 'His first appearance on the big screen, after Netflix\'s Daredevil, The Punisher and Daredevil: Born Again. In the trailer he rams Peter with a van and tells him he is "losing it".', charId: 'punisher', key: true },
    { actor: 'Sadie Sink', role: 'Undisclosed villain', note: 'The Stranger Things actor. Her role has not been announced — see the caveats.', charId: 'sadie-villain', key: true, unconfirmed: true },
    { actor: 'Michael Mando', role: 'Mac Gargan / Scorpion', note: 'Following up the Homecoming tag scene', charId: 'scorpion' },
    { actor: 'Liza Colón-Zayas', role: 'Detective Jean DeWolff', note: 'The Bear actor. Per Deadline reviews, a detective who works with Spider-Man.', charId: 'jean-dewolff' },
    { actor: 'Marvin Jones III', role: 'Tombstone', note: 'Crime boss Lonnie Lincoln', charId: 'tombstone' },
    { actor: 'Tramell Tillman', role: 'Undisclosed', note: 'Also credited in the cast' },
    { actor: 'Marisa Tomei', role: 'Aunt May', note: 'Appears on some cast lists, but since May died in No Way Home this may be a flashback or some other form — unconfirmed.', charId: 'may', unconfirmed: true }
  ],
  doomsday: 'Both are Phase 6 films. Spider-Man 4 arrives about five months earlier and may plant setup for the Doomsday crossover, but it stands on its own as a self-contained story.'
};

/* ---------- Watch guide ---------- */
window.MCU_PLAN_A = {
  title: 'Route A — the essential spine',
  meta: '10 titles',
  intro: 'If you only want the load-bearing structure of the whole universe, these ten are it:',
  items: [
    { entry: 'iron-man', why: 'Where everything starts' },
    { entry: 'avengers-1', why: 'The team forms; two Stones on screen at once' },
    { entry: 'winter-soldier', why: 'S.H.I.E.L.D. falls — one of the biggest turns in the MCU' },
    { entry: 'gotg-1', why: 'Opens up the cosmic side; the Power Stone' },
    { entry: 'civil-war', why: 'The Avengers split; Spider-Man and Black Panther arrive' },
    { entry: 'thor-3', why: 'Feeds directly into Infinity War' },
    { entry: 'infinity-war', why: 'Thanos snaps' },
    { entry: 'endgame', why: 'The Infinity Saga ends' },
    { entry: 'loki-s1', why: 'Opens the multiverse — the one essential series' },
    { entry: 'no-way-home', why: 'The multiverse\'s first full-scale collision' }
  ],
  tip: 'These ten cover the backbone of both sagas. After them, no new Marvel release will lose you — everything else is side story and character depth.'
};

window.MCU_PLAN_B = {
  title: 'Route B — the full experience, and what order to use',
  compare: [
    { h: 'Release order', badge: 'Best for newcomers', recommended: true,
      good: 'Watching in the order the films came out preserves Marvel\'s slow-build reveals — the Stones and Thanos were a six-year mystery, and that payoff only lands if you did not see it coming.',
      bad: 'The downside is the occasional jump backwards, such as Captain America suddenly dropping you into WWII.' },
    { h: 'Chronological order', badge: '', recommended: false,
      good: 'Watching by in-story date (Eyes of Wakanda in antiquity → Captain America in WWII → Captain Marvel in 1995 → …). Cause and effect are much clearer.',
      bad: 'It spoils reveals in advance and spends the surprises that the release order was built around.' }
  ],
  conclusion: 'For a first watch, use release order. This site\'s timeline can switch between both.'
};

window.MCU_SERIES_GUIDE = [
  { level: 'Essential', tone: 'must', items: [
    'Loki, seasons 1 and 2 — opens the multiverse and then holds it together. Marvel has publicly named it the one series to catch up on before Doomsday.',
    "WandaVision — Wanda's turn, and the direct prequel to Multiverse of Madness"
  ]},
  { level: 'Recommended', tone: 'rec', items: [
    'The Falcon and the Winter Soldier — Sam becomes Captain America; prequel to Brave New World',
    "Daredevil: Born Again, plus Netflix's Daredevil and The Punisher — the street-level thread, and where Spider-Man 4's Punisher comes from",
    'Ms. Marvel — first confirmation that mutants exist in the MCU'
  ]},
  { level: 'Optional', tone: 'rec', items: [
    'What If…? — animated, and the easiest way to understand what a "variant" is',
    "Agatha All Along — establishes that Wanda's son Billy really exists in the MCU",
    'Moon Knight, Echo — strong self-contained stories with distinctive styles'
  ]},
  { level: 'Skippable', tone: 'skip', items: [
    'Hawkeye, She-Hulk, Secret Invasion, Ironheart — little connection to the main thread',
    'I Am Groot, Marvel Zombies — shorts and parallel-universe one-offs',
    'Inhumans, Runaways, Cloak & Dagger, Helstrom — ambiguous canon and no overlap with the films'
  ]}
];

window.MCU_STEPS = [
  { step: 'Step 1', when: 'Foundations', body: 'Iron Man → The Avengers → The Winter Soldier. Three films is enough to see how the MCU actually works and why it is not just a sequel chain.' },
  { step: 'Step 2', when: 'The main line', body: 'Add Guardians of the Galaxy, Civil War and Ragnarok, then watch Infinity War and Endgame back to back. That is the complete Infinity Saga arc.' },
  { step: 'Step 3', when: 'Into the multiverse', body: 'Both seasons of Loki and No Way Home, so you understand how the multiverse opened and who is holding it up. Then Deadpool & Wolverine and The Fantastic Four.' },
  { step: 'Step 4', when: 'Catching up', body: 'Thunderbolts and Brave New World close out the 2025 setup, which puts you fully current for Spider-Man 4 and Doomsday.' }
];

window.MCU_STEPS_NOTE = 'If you are only trying to understand one specific new release, you do not need to follow this at all — every work\'s detail page lists its related titles, and following those links is the shortest path.';

/* ---------- Caveats ---------- */
window.MCU_CAVEATS = [
  { h: 'Details for 2026–2027 titles may still change',
    body: 'Everything through 2025 has been released and is settled. Spider-Man 4, Doomsday, Secret Wars and some upcoming series draw on trailers, official synopses and press reporting — treat the final films as authoritative.' },
  { h: 'Kang is no longer the overarching villain', strong: true,
    body: 'Following the actor\'s legal case, Marvel dropped Kang and handed the role to Doctor Doom. Any older source treating Kang as the Doomsday villain is out of date.' },
  { h: "Sadie Sink's role in Spider-Man 4 is unconfirmed", strong: true,
    body: 'Press and fan wikis have speculated about Jean Grey, Gwen Stacy and Spider-Gwen, but neither Marvel nor Sony has announced anything. Treat all of it as rumour. Marisa Tomei\'s form of return is likewise unclear.' },
  { h: "Marvel Television's older shows sit in a grey area", strong: true,
    body: 'Agents of S.H.I.E.L.D., Agent Carter and the rest were made by the now-dissolved Marvel Television division and have not been added to the official Disney+ timeline. The Netflix Defenders Saga, by contrast, has been.' },
  { h: 'Chronological order here is a considered approximation',
    body: 'The in-story ordering follows the official timeline and on-screen evidence. A few works genuinely resist a single date — Loki happens outside of time, What If…? spans universes — and those are flagged individually.' },
  { h: 'This site contains heavy spoilers',
    body: 'So that someone who has seen none of it can still follow the world, every major twist and ending is stated outright. Spoiler shielding is on by default and can be toggled per page; if you plan to watch, stick to the one-line summaries.' }
];
