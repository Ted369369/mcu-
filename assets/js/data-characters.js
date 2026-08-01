/* ============================================================
   Characters (part 1)
   arc = that character's personal timeline, in work order
   ============================================================ */

window.MCU_CHAR_GROUPS = [
  { id: 'avengers',    label: 'Avengers & allies',      color: '#f0b429' },
  { id: 'spidey',      label: 'Spider-Man & his circle', color: '#ff4757' },
  { id: 'spideyvil',   label: "Spider-Man's enemies",   color: '#a855f7' },
  { id: 'otherspidey', label: 'Other universes',         color: '#fb923c' },
  { id: 'cosmic',      label: 'Cosmic',                  color: '#22d3ee' },
  { id: 'street',      label: 'Street-level',            color: '#f97316' },
  { id: 'newgen',      label: 'New generation',          color: '#34d399' },
  { id: 'bigbad',      label: 'Villains',                color: '#ef4444' }
];

window.MCU_CHARACTERS = [

/* ================= SPIDER-MAN AND HIS CIRCLE ================= */
{
  id: 'peter-parker', name: 'Peter Parker / Spider-Man', en: 'Peter Parker / Spider-Man',
  actor: 'Tom Holland', group: 'spidey', role: 'hero',
  glyph: 'spider', accent: ['#dc2626', '#1d4ed8'], pin: true,
  tagline: 'Seven films in, and now nobody remembers him.',
  bio: 'A high school student from Queens, bitten by a spider and found by Tony Stark, who made him a successor and something close to a son. Across three films he goes from a boy desperate to be noticed to an adult the entire world has forgotten.',
  facts: [
    'His creed — "with great power there must also come great responsibility" — comes in this universe from a dying Aunt May, not from Uncle Ben.',
    'He is a different person from the earlier two Spider-Men; they are variants from other universes.',
    'In Spider-Man 4 he is "an adult living entirely alone", fighting crime full time.'
  ],
  arc: [
    { entry: 'civil-war', text: 'First appearance. Tony finds a teenager in Queens, upgrades his suit and recruits him to fight Captain America, establishing the mentorship that carries the whole trilogy.' },
    { entry: 'homecoming', text: 'Fifteen, desperate to prove himself and join the Avengers, but told to be a neighbourhood hero first. He beats the Vulture and then turns down a place on the team.' },
    { entry: 'infinity-war', text: 'Turns to dust in Tony\'s arms on Titan.' },
    { entry: 'endgame', text: 'Restored five years later, fights in the final battle, and watches Tony die.' },
    { entry: 'far-from-home', text: 'Crushed by grief and by the expectation that he replace Iron Man. He inherits EDITH, sees through Mysterio, and gets together with MJ — then is outed to the world.' },
    { entry: 'no-way-home', text: 'His exposed identity ruins everything. The spell he asks for goes wrong, brings five villains and two other Peters, and gets May killed. He ends it by having the world forget he exists.' },
    { entry: 'spider-man-4', text: 'Four years on. Living completely alone, his spider-DNA entering a "rebirth" phase and mutating out of control, he goes to Bruce Banner for help.' }
  ],
  appears: ['civil-war', 'homecoming', 'infinity-war', 'endgame', 'far-from-home', 'no-way-home', 'spider-man-4']
},
{
  id: 'mj', name: 'MJ (Michelle Jones)', en: 'MJ',
  actor: 'Zendaya', group: 'spidey', role: 'ally',
  glyph: 'heart', accent: ['#be123c', '#7c3aed'],
  tagline: "Peter's girlfriend — who no longer remembers him.",
  bio: 'A classmate: sharp, dry and observant enough to work out his secret on her own. She and Peter get together in Far From Home, and at the end of No Way Home every memory of him is erased from her.',
  facts: [
    'Peter chooses not to restore her memory, deciding to watch over her from a distance instead.',
    'In Spider-Man 4 she has no idea who he is, and is getting on with a life without him.'
  ],
  arc: [
    { entry: 'homecoming', text: 'Introduced as a classmate — watchful, sarcastic and almost always reading.' },
    { entry: 'far-from-home', text: 'She and Peter admit how they feel during the Europe trip.' },
    { entry: 'no-way-home', text: 'Her life is upended by his exposure, down to her college application. She falls from the Statue of Liberty and is caught by the Garfield Peter. The final spell takes him out of her memory.' },
    { entry: 'spider-man-4', text: 'She does not know him. He can only watch from a distance.' }
  ],
  appears: ['homecoming', 'far-from-home', 'no-way-home', 'spider-man-4']
},
{
  id: 'ned', name: 'Ned Leeds', en: 'Ned Leeds',
  actor: 'Jacob Batalon', group: 'spidey', role: 'ally',
  glyph: 'laptop', accent: ['#0891b2', '#f59e0b'],
  tagline: '"The guy in the chair."',
  bio: "Peter's best friend and the first person to learn his secret. In No Way Home he accidentally opens a portal with Strange's sling ring and pulls in two other Peter Parkers.",
  facts: [
    'His accidental portal is the direct reason all three Spider-Men meet.',
    'He is caught by the final spell too and forgets Peter entirely.',
    'In Spider-Man 4 he has built a "Spidey-tracker" app.'
  ],
  arc: [
    { entry: 'homecoming', text: 'Works out the secret first and appoints himself mission control.' },
    { entry: 'far-from-home', text: 'Along for the European school trip.' },
    { entry: 'no-way-home', text: "Opens a portal with Strange's sling ring and summons the Maguire and Garfield Peters. Loses his memory of Peter at the end." },
    { entry: 'spider-man-4', text: 'Builds a Spidey-tracker app, with no memory of who he is tracking.' }
  ],
  appears: ['homecoming', 'far-from-home', 'no-way-home', 'spider-man-4']
},
{
  id: 'may', name: 'Aunt May', en: 'Aunt May',
  actor: 'Marisa Tomei', group: 'spidey', role: 'ally',
  glyph: 'heart', accent: ['#b45309', '#be123c'],
  tagline: 'The one who says the line.',
  bio: "Peter's only family, played much younger than in the comics. She is fatally wounded by the Green Goblin in No Way Home, and with her last breath gives Peter the creed.",
  facts: [
    "This Peter has no Uncle Ben death; May's death occupies that place in his story.",
    'Marisa Tomei has appeared on some Spider-Man 4 cast lists, but since May is dead any return would have to be a flashback or something else — unconfirmed.'
  ],
  arc: [
    { entry: 'civil-war', text: 'Introduced, notably younger than the character has traditionally been.' },
    { entry: 'homecoming', text: 'Walks in on Peter in the suit in the final scene.' },
    { entry: 'no-way-home', text: 'She is the one who insists the villains be cured rather than sent back to die. Fatally wounded during the treatment, she tells Peter: "With great power there must also come great responsibility."' },
    { entry: 'spider-man-4', text: 'The actor appears on some cast lists, but the character died — the form any return would take is unclear.', unconfirmed: true }
  ],
  appears: ['civil-war', 'homecoming', 'far-from-home', 'no-way-home']
},
{
  id: 'happy', name: 'Happy Hogan', en: 'Happy Hogan',
  actor: 'Jon Favreau', group: 'spidey', role: 'ally',
  glyph: 'car', accent: ['#475569', '#f59e0b'],
  tagline: "Stark's driver and bodyguard.",
  bio: "Tony's bodyguard and driver, and after his death the remaining link between Peter and the Stark estate. Jon Favreau also directed Iron Man.",
  arc: [
    { entry: 'homecoming', text: 'Assigned to keep an eye on Peter, becoming the go-between neither of them wanted.' },
    { entry: 'far-from-home', text: "Helps Peter with Tony's legacy and EDITH, and starts seeing May." },
    { entry: 'no-way-home', text: 'Investigated once Peter is exposed. Loses his memory in the final spell.' }
  ],
  appears: ['iron-man', 'homecoming', 'far-from-home', 'no-way-home']
},
{
  id: 'flash', name: 'Flash Thompson', en: 'Flash Thompson',
  actor: 'Tony Revolori', group: 'spidey', role: 'ally',
  glyph: 'laptop', accent: ['#64748b', '#0891b2'],
  tagline: "The classmate who never lets up — and a Spider-Man superfan.",
  bio: "A classmate who needles Peter constantly while idolising Spider-Man, without ever connecting the two.",
  arc: [
    { entry: 'homecoming', text: 'Introduced as the classmate who will not leave Peter alone.' },
    { entry: 'far-from-home', text: 'On the same European trip.' },
    { entry: 'no-way-home', text: 'Cashes in on knowing Spider-Man with a book deal. Loses his memory at the end.' }
  ],
  appears: ['homecoming', 'far-from-home', 'no-way-home']
},
{
  id: 'liz', name: 'Liz Toomes', en: 'Liz Allan / Toomes',
  actor: 'Laura Harrier', group: 'spidey', role: 'ally',
  glyph: 'heart', accent: ['#0f766e', '#be123c'],
  tagline: "Peter's first crush — and the Vulture's daughter.",
  bio: 'The girl Peter takes to the homecoming dance. When he arrives to collect her, the man who opens the door is her father, Adrian Toomes.',
  arc: [
    { entry: 'homecoming', text: "Peter's date for the dance. Her father turns out to be the Vulture — the moment that door opens is the best scene in the film." }
  ],
  appears: ['homecoming']
},
{
  id: 'jameson', name: 'J. Jonah Jameson', en: 'J. Jonah Jameson',
  actor: 'J.K. Simmons', group: 'spidey', role: 'villain',
  glyph: 'news', accent: ['#b91c1c', '#111827'],
  tagline: 'The man who blew up Peter\'s life on air.',
  bio: 'Editor of TheDailyBugle.net and a relentless Spider-Man antagonist in the press. J.K. Simmons plays the same role he played in the Raimi films two decades earlier.',
  facts: [
    "He broadcasts Mysterio's fabricated video, naming Peter Parker to the entire world.",
    'That single broadcast is what sets No Way Home in motion.'
  ],
  arc: [
    { entry: 'far-from-home', text: "Airs Beck's pre-recorded footage, framing Spider-Man for murder and exposing Peter's identity." },
    { entry: 'no-way-home', text: 'Keeps the public turned against Spider-Man throughout, making Peter\'s life unlivable.' }
  ],
  appears: ['far-from-home', 'no-way-home']
},
{
  id: 'jean-dewolff', name: 'Detective Jean DeWolff', en: 'Detective Jean DeWolff',
  actor: 'Liza Colón-Zayas', group: 'spidey', role: 'ally',
  glyph: 'badge', accent: ['#1d4ed8', '#f59e0b'], isNew: true,
  tagline: 'New in Spider-Man 4: a detective who works with him.',
  bio: 'A New York detective introduced in Spider-Man 4. Per Deadline reviews she works alongside Spider-Man; in the comics Jean DeWolff is one of the few police figures who trusts him.',
  arc: [
    { entry: 'spider-man-4', text: 'First appearance. Reported to be a detective who works with Spider-Man rather than against him.' }
  ],
  appears: ['spider-man-4']
},

/* ================= SPIDER-MAN'S ENEMIES ================= */
{
  id: 'vulture', name: 'Vulture / Adrian Toomes', en: 'Vulture',
  actor: 'Michael Keaton', group: 'spideyvil', role: 'villain',
  glyph: 'wing', accent: ['#0e7490', '#166534'],
  tagline: "One of Marvel's most legible villains.",
  bio: 'A salvage contractor cleaning up after the Battle of New York until Damage Control took the contract away overnight. He kept the Chitauri technology, built a flight rig, and went into arms dealing.',
  facts: [
    'His motive is providing for his family and resenting men like Stark, and it holds up completely.',
    "He is Liz's father — he is the man who opens the door.",
    'Peter pulls him from a burning wreck; in prison he repays it by refusing to give up Spider-Man\'s name.'
  ],
  arc: [
    { entry: 'avengers-1', text: 'Background: the Chitauri wreckage left by the Battle of New York becomes the source of all his weapons.' },
    { entry: 'homecoming', text: 'The main villain. He works out who Peter is during the car ride and threatens him. After the plane crash Peter saves his life, and in the tag scene he protects Peter\'s identity in return.' }
  ],
  appears: ['homecoming']
},
{
  id: 'mysterio', name: 'Mysterio / Quentin Beck', en: 'Mysterio',
  actor: 'Jake Gyllenhaal', group: 'spideyvil', role: 'villain',
  glyph: 'fishbowl', accent: ['#7c3aed', '#16a34a'],
  tagline: 'The first person to say "multiverse" — and he was lying.',
  bio: 'A Stark holographic engineer whom Tony humiliated and fired. He gathers other discarded employees, stages disasters with drones, and plays the hero to get hold of EDITH.',
  facts: [
    'He claims to come from Earth-833 and to have fought the Elementals. All of it is a projection.',
    'He dies to his own misfiring drones.',
    "The footage he recorded before dying exposes Peter's identity — the single biggest turn in the trilogy."
  ],
  arc: [
    { entry: 'far-from-home', text: 'The main villain. He poses as a hero from another universe to get EDITH, is beaten in London, and dies to his own drones — but his fabricated video outs Peter to the world.' }
  ],
  appears: ['far-from-home']
},
{
  id: 'green-goblin', name: 'Green Goblin / Norman Osborn', en: 'Green Goblin',
  actor: 'Willem Dafoe', group: 'spideyvil', role: 'villain',
  glyph: 'goblin', accent: ['#15803d', '#7e22ce'],
  tagline: 'The villain of No Way Home, and the one who kills May.',
  bio: "From the universe of the 2002 Spider-Man. An experimental military serum split him into a second, gleeful personality. He is Harry Osborn's father.",
  facts: [
    'In his own universe he dies on his own glider.',
    'In No Way Home the Goblin personality reasserts itself, turns the other villains against Peter, and fatally wounds Aunt May.',
    'He is the principal villain of that film.'
  ],
  arc: [
    { entry: 'raimi-1', text: 'In his own universe, Norman Osborn tests a military serum on himself, fractures, and dies on his own glider.' },
    { entry: 'no-way-home', text: 'Pulled into the MCU. The Goblin retakes control, turns the others against Peter and kills May, before being cured by the three Spider-Men.' }
  ],
  appears: ['raimi-1', 'no-way-home']
},
{
  id: 'doc-ock', name: 'Doc Ock / Otto Octavius', en: 'Doctor Octopus',
  actor: 'Alfred Molina', group: 'spideyvil', role: 'villain',
  glyph: 'tentacle', accent: ['#0f766e', '#78350f'],
  tagline: 'A scientist fused to his own machinery.',
  bio: 'From the universe of Spider-Man 2. A failed fusion experiment welded four AI-driven arms to his spine, and they took over his judgement.',
  facts: [
    'In his own universe he dies putting the reactor into the river himself.',
    'In No Way Home he is the first villain pulled across and the first Peter cures.'
  ],
  arc: [
    { entry: 'raimi-2', text: 'In his own universe the arms override his mind, and he sacrifices himself to undo the damage.' },
    { entry: 'no-way-home', text: 'The first villain pulled into the MCU and the first to be cured — after which he turns and helps Peter.' }
  ],
  appears: ['raimi-2', 'no-way-home']
},
{
  id: 'electro', name: 'Electro / Max Dillon', en: 'Electro',
  actor: 'Jamie Foxx', group: 'spideyvil', role: 'villain',
  glyph: 'bolt', accent: ['#0891b2', '#1e1b4b'],
  tagline: 'Able to control electricity.',
  bio: 'From the universe of The Amazing Spider-Man 2, with the ability to absorb and direct electrical power.',
  arc: [
    { entry: 'webb-2', text: 'In his own universe, one of two villains alongside Harry Osborn as the new Goblin.' },
    { entry: 'no-way-home', text: 'Pulled into the MCU and eventually cured by the three Spider-Men.' }
  ],
  appears: ['webb-2', 'no-way-home']
},
{
  id: 'sandman', name: 'Sandman / Flint Marko', en: 'Sandman',
  actor: 'Thomas Haden Church', group: 'spideyvil', role: 'villain',
  glyph: 'sand', accent: ['#a16207', '#57534e'],
  tagline: 'A body turned to sand.',
  bio: "From the universe of Spider-Man 3, where his body was converted to sand and he was retconned into Uncle Ben's real killer.",
  arc: [
    { entry: 'raimi-3', text: "In his own universe, revealed as the man who actually killed Uncle Ben." },
    { entry: 'no-way-home', text: 'Pulled into the MCU and cured by the three Spider-Men.' }
  ],
  appears: ['raimi-3', 'no-way-home']
},
{
  id: 'lizard', name: 'The Lizard / Curt Connors', en: 'Lizard',
  actor: 'Rhys Ifans', group: 'spideyvil', role: 'villain',
  glyph: 'lizard', accent: ['#15803d', '#0c4a6e'],
  tagline: 'A scientist turned reptile.',
  bio: 'From the universe of The Amazing Spider-Man. An Oscorp scientist who injected lizard DNA to regrow a lost arm.',
  arc: [
    { entry: 'webb-1', text: 'In his own universe, an Oscorp scientist transformed by his own experiment.' },
    { entry: 'no-way-home', text: 'Pulled into the MCU and cured by the three Spider-Men.' }
  ],
  appears: ['webb-1', 'no-way-home']
},
{
  id: 'scorpion', name: 'Scorpion / Mac Gargan', en: 'Scorpion',
  actor: 'Michael Mando', group: 'spideyvil', role: 'villain',
  glyph: 'scorpion', accent: ['#166534', '#b45309'], isNew: true,
  tagline: 'An eight-year-old setup finally cashing in.',
  bio: "The criminal who meets Toomes in the Homecoming tag scene, and the comics' Scorpion. Michael Mando returns in Spider-Man 4.",
  facts: [
    "In the Homecoming tag scene he asks Toomes for Spider-Man's name and is turned down.",
    'Michael Mando is confirmed for Spider-Man 4, where Scorpion may be one of the antagonists.'
  ],
  arc: [
    { entry: 'homecoming', text: "Appears in the post-credits scene, asking Toomes for Spider-Man's identity and being refused." },
    { entry: 'spider-man-4', text: 'Michael Mando returns, following up that scene eight years later.' }
  ],
  appears: ['homecoming', 'spider-man-4']
},
{
  id: 'tombstone', name: 'Tombstone / Lonnie Lincoln', en: 'Tombstone',
  actor: 'Marvin Jones III', group: 'spideyvil', role: 'villain',
  glyph: 'tombstone', accent: ['#e5e7eb', '#111827'], isNew: true,
  tagline: 'New in Spider-Man 4: a crime boss.',
  bio: 'A crime boss played by Marvin Jones III. In the comics Lonnie Lincoln is an albino New York gangster with bulletproof skin.',
  arc: [
    { entry: 'spider-man-4', text: 'First live-action appearance as the crime boss Tombstone.' }
  ],
  appears: ['spider-man-4']
},
{
  id: 'sadie-villain', name: 'Sadie Sink\'s undisclosed villain', en: 'Undisclosed villain',
  actor: 'Sadie Sink', group: 'spideyvil', role: 'villain',
  glyph: 'question', accent: ['#7c3aed', '#be123c'], isNew: true, unconfirmed: true,
  tagline: 'The role has not been announced. Everything online is rumour.',
  bio: 'Sadie Sink, of Stranger Things, plays an undisclosed antagonist in Spider-Man 4.',
  facts: [
    'Press and fan wikis have speculated about Jean Grey, Gwen Stacy and Spider-Gwen.',
    'Neither Marvel nor Sony has confirmed anything. Treat every specific claim as unverified.'
  ],
  arc: [
    { entry: 'spider-man-4', text: 'Plays an antagonist whose identity has not been announced. Any specific claim about the role is currently rumour.', unconfirmed: true }
  ],
  appears: ['spider-man-4']
},
{
  id: 'punisher', name: 'The Punisher / Frank Castle', en: 'The Punisher',
  actor: 'Jon Bernthal', group: 'spideyvil', role: 'antihero',
  glyph: 'skull', accent: ['#111827', '#e5e7eb'], isNew: true,
  tagline: 'His first appearance on the big screen.',
  bio: 'A former Marine who answers crime with lethal force. Jon Bernthal played him across Netflix\'s Daredevil, The Punisher and Daredevil: Born Again; Spider-Man 4 is his first film.',
  facts: [
    'In the trailer he rams Peter with a van and tells him he is "losing it".',
    'His methods are the exact inverse of Peter\'s no-killing rule, and that clash is one of the film\'s main draws.'
  ],
  arc: [
    { entry: 'daredevil-netflix', text: "First appears in season two, clashing with Matt Murdock over whether killing is ever the answer." },
    { entry: 'punisher-netflix', text: 'His own series: combat trauma, the murder of his family, and a conspiracy reaching into the CIA.' },
    { entry: 'daredevil-born-again', text: 'Returns within MCU canon.' },
    { entry: 'punisher-special', text: 'Headlines the May 2026 special The Punisher: One Last Kill, two months before Spider-Man 4.' },
    { entry: 'spider-man-4', text: 'His big-screen debut, set directly against Peter\'s refusal to kill.', highlight: true }
  ],
  appears: ['daredevil-netflix', 'punisher-netflix', 'daredevil-born-again', 'punisher-special', 'spider-man-4']
},

/* ================= OTHER UNIVERSES ================= */
{
  id: 'peter-two', name: 'Peter-Two (Maguire)', en: 'Peter Parker (Peter-Two)',
  actor: 'Tobey Maguire', group: 'otherspidey', role: 'hero',
  glyph: 'web', accent: ['#b91c1c', '#1e3a8a'],
  tagline: 'The first Spider-Man, 2002–2007.',
  bio: 'The Spider-Man of the Raimi trilogy, from another universe. He produces webbing organically, with no shooters. In No Way Home he is the oldest and steadiest of the three.',
  facts: [
    "His creed comes from Uncle Ben's death.",
    'The organic webbing is the clearest difference between him and the other two.'
  ],
  arc: [
    { entry: 'raimi-1', text: 'Gains his powers, loses Uncle Ben through his own inaction, and learns the lesson that defines him.' },
    { entry: 'raimi-2', text: 'Faces Doc Ock.' },
    { entry: 'raimi-3', text: 'Faces Sandman, a second Goblin, and the symbiote.' },
    { entry: 'no-way-home', text: 'Pulled through by Ned\'s portal. He helps cure all five villains and, more importantly, talks two younger versions of himself down.' }
  ],
  appears: ['raimi-1', 'raimi-2', 'raimi-3', 'no-way-home']
},
{
  id: 'peter-three', name: 'Peter-Three (Garfield)', en: 'Peter Parker (Peter-Three)',
  actor: 'Andrew Garfield', group: 'otherspidey', role: 'hero',
  glyph: 'web', accent: ['#0891b2', '#b91c1c'],
  tagline: 'The one who gets his redemption.',
  bio: 'The Spider-Man of The Amazing Spider-Man films, from another universe. His defining wound is failing to save Gwen Stacy.',
  facts: [
    'In his universe his web catches Gwen as she falls, and the force of the stop kills her.',
    'In No Way Home he catches MJ falling from the Statue of Liberty — the most moving beat in the film.'
  ],
  arc: [
    { entry: 'webb-1', text: 'Faces the Lizard and falls in love with Gwen Stacy.' },
    { entry: 'webb-2', text: 'Gwen dies in the clock tower — his web reaches her, and the sudden stop breaks her neck.' },
    { entry: 'no-way-home', text: 'Pulled through, and catches MJ as she falls from the Statue of Liberty, closing the wound he has carried since.' }
  ],
  appears: ['webb-1', 'webb-2', 'no-way-home']
},
{
  id: 'gwen', name: 'Gwen Stacy', en: 'Gwen Stacy',
  actor: 'Emma Stone', group: 'otherspidey', role: 'ally',
  glyph: 'heart', accent: ['#0891b2', '#e5e7eb'],
  tagline: 'Dies in The Amazing Spider-Man 2.',
  bio: "The Garfield Peter's girlfriend. She falls during the clock tower fight; his web reaches her, but the force of stopping breaks her neck.",
  facts: [
    'Her death is that version of the character\'s central trauma.',
    'It is exactly why catching MJ in No Way Home matters so much.',
    'Note: rumours that Sadie Sink plays Gwen Stacy or Spider-Gwen in Spider-Man 4 have never been confirmed.'
  ],
  arc: [
    { entry: 'webb-1', text: 'She and Peter fall in love.' },
    { entry: 'webb-2', text: 'Falls during the final fight and dies despite the catch.' }
  ],
  appears: ['webb-1', 'webb-2']
},
{
  id: 'uncle-ben', name: 'Uncle Ben', en: 'Uncle Ben',
  actor: 'Cliff Robertson (Raimi films)', group: 'otherspidey', role: 'ally',
  glyph: 'heart', accent: ['#78350f', '#b91c1c'],
  tagline: 'Where the creed originally comes from.',
  bio: "The Maguire Peter's uncle, killed by a robber his nephew had let go — the loss that teaches him what his power obliges him to do.",
  facts: [
    "Important difference: the MCU's Tom Holland Peter has no Uncle Ben death. Aunt May's death in No Way Home occupies that place instead."
  ],
  arc: [
    { entry: 'raimi-1', text: 'Killed by a robber Peter chose not to stop, teaching him that power carries obligation.' },
    { entry: 'raimi-3', text: 'The story is revised — Sandman is revealed as the man who actually killed him.' }
  ],
  appears: ['raimi-1', 'raimi-3']
},
{
  id: 'venom', name: 'Venom / Eddie Brock', en: 'Venom',
  actor: 'Topher Grace (Raimi films)', group: 'otherspidey', role: 'villain',
  glyph: 'goblin', accent: ['#111827', '#e5e7eb'],
  tagline: 'An alien symbiote.',
  bio: 'An alien symbiote that bonds with reporter Eddie Brock in Spider-Man 3.',
  arc: [
    { entry: 'raimi-3', text: 'The symbiote bonds with Eddie Brock to become Venom, one of three antagonists.' }
  ],
  appears: ['raimi-3']
},
{
  id: 'harry', name: 'Harry Osborn', en: 'Harry Osborn',
  actor: 'James Franco / Dane DeHaan', group: 'otherspidey', role: 'villain',
  glyph: 'goblin', accent: ['#15803d', '#78350f'],
  tagline: 'Becomes a new Goblin in both universes.',
  bio: "Norman Osborn's son and Peter's friend. In both Spider-Man 3 and The Amazing Spider-Man 2, his version of the character becomes a new Green Goblin.",
  arc: [
    { entry: 'raimi-1', text: "Peter's friend, and Norman Osborn's son." },
    { entry: 'raimi-3', text: 'Becomes the new Goblin.' },
    { entry: 'webb-2', text: 'In the other universe, Harry Osborn also becomes a Goblin and one of the antagonists.' }
  ],
  appears: ['raimi-1', 'raimi-3', 'webb-2']
},

/* ================= AVENGERS AND ALLIES ================= */
{
  id: 'tony-stark', name: 'Tony Stark / Iron Man', en: 'Tony Stark / Iron Man',
  actor: 'Robert Downey Jr.', group: 'avengers', role: 'hero',
  glyph: 'arc', accent: ['#dc2626', '#f0b429'], pin: true,
  tagline: "Peter's mentor, and the source of all his pressure.",
  bio: 'A weapons manufacturer who builds a suit to escape captivity and comes home a different man. The first character in the MCU, mentor and surrogate father to Peter Parker, and the one who puts on the gauntlet at the end.',
  facts: [
    'Important: Robert Downey Jr. returns in Doomsday in 2026, but as Doctor Doom — an entirely new character, not Tony.',
    'EDITH, the smart glasses he leaves Peter, is the central object of Far From Home.',
    "His death is the source of Peter's grief and pressure in Far From Home, a thread that runs into Spider-Man 4."
  ],
  arc: [
    { entry: 'iron-man', text: 'Kidnapped, builds a suit to escape, comes home and shuts down his weapons division. "I am Iron Man."' },
    { entry: 'iron-man-2', text: 'Dying of palladium poisoning, he synthesises a new element from clues his father left behind.' },
    { entry: 'avengers-1', text: 'Assembles with the other five and takes a nuclear missile through the portal.' },
    { entry: 'iron-man-3', text: 'Severe PTSD after New York, resolved by destroying his own armoury.' },
    { entry: 'age-of-ultron', text: 'Builds Ultron out of the sceptre with Banner, and it immediately turns on humanity.' },
    { entry: 'civil-war', text: 'Backs government oversight and recruits Peter. Learning that Bucky killed his parents ends his friendship with Steve.' },
    { entry: 'infinity-war', text: 'Faces Thanos on Titan and watches Peter turn to dust in his arms.' },
    { entry: 'endgame', text: 'Solves time travel, then takes the Stones and snaps — dying of the feedback.', highlight: true },
    { entry: 'far-from-home', text: 'Dead, but everywhere: EDITH drives the plot and his absence drives Peter.' },
    { entry: 'doomsday', text: 'The actor returns, but as Doctor Doom — not as Tony Stark.', warning: true }
  ],
  appears: ['iron-man', 'iron-man-2', 'avengers-1', 'iron-man-3', 'age-of-ultron', 'civil-war', 'homecoming', 'infinity-war', 'endgame']
},
{
  id: 'doctor-strange-char', name: 'Doctor Strange / Stephen Strange', en: 'Doctor Strange',
  actor: 'Benedict Cumberbatch', group: 'avengers', role: 'hero',
  glyph: 'eye', accent: ['#0d9488', '#f59e0b'], pin: true,
  tagline: 'The man who cast the spell.',
  bio: 'An arrogant surgeon who loses the use of his hands and becomes a sorcerer. His spell for Peter shatters the multiverse, and his second spell erases Peter from the world.',
  facts: [
    'He casts twice in No Way Home: the first fails and pulls in five villains and two Spider-Men; the second works, at the cost of Peter being forgotten.',
    'That second spell is the entire premise of Spider-Man 4.'
  ],
  arc: [
    { entry: 'doctor-strange', text: 'Loses his hands, learns sorcery, and beats Dormammu by refusing to stop dying. The Eye of Agamotto holds the Time Stone.' },
    { entry: 'infinity-war', text: 'Sees 14,000,605 futures and gives up the Time Stone to secure the only winning one.' },
    { entry: 'endgame', text: 'Returns for the final battle and signals to Tony that this is the one.' },
    { entry: 'no-way-home', text: 'His spell for Peter is sabotaged mid-cast and tears the multiverse. He ends it by making every person on Earth forget Peter Parker exists.', highlight: true },
    { entry: 'multiverse-of-madness', text: 'Protects America Chavez from a Darkhold-corrupted Wanda, and causes an incursion in the process.' }
  ],
  appears: ['doctor-strange', 'infinity-war', 'endgame', 'no-way-home', 'multiverse-of-madness']
},
{
  id: 'hulk', name: 'Bruce Banner / Hulk', en: 'Bruce Banner / Hulk',
  actor: 'Mark Ruffalo', group: 'avengers', role: 'hero',
  glyph: 'fist', accent: ['#166534', '#7e22ce'], pin: true,
  tagline: 'A heavyweight return in Spider-Man 4.',
  bio: 'A scientist who becomes an enormous green rage when provoked. He returns in Spider-Man 4 to help Peter with his destabilising spider-DNA.',
  facts: [
    'In Spider-Man 4 he is who Peter turns to, because his powers are mutating in a "rebirth" phase.',
    'In Endgame it is Banner who wears the makeshift gauntlet and brings everyone back.'
  ],
  arc: [
    { entry: 'incredible-hulk', text: 'Transformed by a gamma accident, hunted by General Ross, and forced to fight Abomination.' },
    { entry: 'avengers-1', text: 'Joins the team and turns the Battle of New York.' },
    { entry: 'age-of-ultron', text: 'Talked into building Ultron with Tony, with catastrophic results.' },
    { entry: 'infinity-war', text: 'Beaten by Thanos in the opening and unable to transform for most of the film.' },
    { entry: 'endgame', text: 'Merged into "Smart Hulk", and the one who snaps everyone back.', highlight: true },
    { entry: 'spider-man-4', text: 'Returns to help Peter with his failing control — the film\'s major legacy casting.', highlight: true }
  ],
  appears: ['incredible-hulk', 'avengers-1', 'age-of-ultron', 'infinity-war', 'endgame', 'spider-man-4']
},
{
  id: 'steve-rogers', name: 'Steve Rogers / Captain America', en: 'Steve Rogers / Captain America',
  actor: 'Chris Evans', group: 'avengers', role: 'hero',
  glyph: 'shield', accent: ['#1e40af', '#b91c1c'],
  tagline: 'A WWII super-soldier, and one half of the Civil War.',
  bio: 'A frail young man who takes the serum in 1943, crashes into the Arctic, and wakes seventy years later. In Civil War he refuses government oversight and breaks with Tony over it.',
  arc: [
    { entry: 'captain-america', text: 'Takes the serum, leads the Howling Commandos against HYDRA, and goes into the ice for seventy years.' },
    { entry: 'avengers-1', text: 'Thawed and folded into the team.' },
    { entry: 'winter-soldier', text: 'Exposes HYDRA inside S.H.I.E.L.D. and finds his brainwashed friend under the Winter Soldier mask.' },
    { entry: 'age-of-ultron', text: 'Fights Ultron.' },
    { entry: 'civil-war', text: 'Refuses the Accords, protects Bucky, and breaks with Tony for good.' },
    { entry: 'infinity-war', text: 'Leads the defence of Wakanda.' },
    { entry: 'endgame', text: 'Returns the Stones, then stays in the past for the life he was owed with Peggy, and passes the shield to Sam.', highlight: true },
    { entry: 'doomsday', text: 'Confirmed to return.' }
  ],
  appears: ['captain-america', 'avengers-1', 'winter-soldier', 'age-of-ultron', 'civil-war', 'infinity-war', 'endgame', 'doomsday']
},
{
  id: 'bucky', name: 'Bucky Barnes / Winter Soldier', en: 'Bucky Barnes / Winter Soldier',
  actor: 'Sebastian Stan', group: 'avengers', role: 'hero',
  glyph: 'shield', accent: ['#0f172a', '#64748b'],
  tagline: 'Seventy years as somebody else\'s weapon.',
  bio: "Steve's oldest friend, recovered by HYDRA after his fall, brainwashed and used as an assassin for decades. He killed Tony's parents under their control — the fact that ends the Avengers.",
  arc: [
    { entry: 'captain-america', text: "Steve's childhood friend, who falls from a train during a raid." },
    { entry: 'winter-soldier', text: 'Revealed as the brainwashed HYDRA assassin.' },
    { entry: 'civil-war', text: "Zemo exposes that he killed Tony's parents, splitting the team irreparably." },
    { entry: 'falcon-winter-soldier', text: 'Works through what he did and where he stands now, alongside Sam.' },
    { entry: 'thunderbolts', text: 'Joins the antiheroes Valentina assembles, and ends up a New Avenger.' },
    { entry: 'doomsday', text: 'Confirmed to return.' }
  ],
  appears: ['captain-america', 'winter-soldier', 'civil-war', 'infinity-war', 'endgame', 'falcon-winter-soldier', 'thunderbolts', 'doomsday']
},
{
  id: 'sam-wilson', name: 'Sam Wilson / Captain America', en: 'Sam Wilson / Captain America',
  actor: 'Anthony Mackie', group: 'avengers', role: 'hero',
  glyph: 'shield', accent: ['#0e7490', '#dc2626'],
  tagline: 'The man who picks up the shield.',
  bio: 'Originally the Falcon. Steve hands him the shield at the end of Endgame, and he becomes Captain America in his own right.',
  arc: [
    { entry: 'winter-soldier', text: 'Joins as the Falcon.' },
    { entry: 'endgame', text: 'An elderly Steve Rogers hands him the shield.' },
    { entry: 'falcon-winter-soldier', text: 'Works through whether he can carry it, including confronting what was done to Isaiah Bradley, and takes the title openly.' },
    { entry: 'brave-new-world', text: 'Captain America in full, defusing the Red Hulk crisis by refusing to fight him.', highlight: true },
    { entry: 'doomsday', text: 'Confirmed to return.' }
  ],
  appears: ['winter-soldier', 'civil-war', 'infinity-war', 'endgame', 'falcon-winter-soldier', 'brave-new-world', 'doomsday']
},
{
  id: 'thor-char', name: 'Thor', en: 'Thor',
  actor: 'Chris Hemsworth', group: 'avengers', role: 'hero',
  glyph: 'hammer', accent: ['#1d4ed8', '#f0b429'],
  tagline: 'The god of thunder, and the most changed character in the MCU.',
  bio: 'An arrogant prince exiled to Earth who learns humility, then loses his home, his hammer, his family and most of his people.',
  arc: [
    { entry: 'thor', text: 'Exiled and stripped of power, he earns the hammer back. His brother is the villain.' },
    { entry: 'avengers-1', text: 'Joins the team against Loki.' },
    { entry: 'thor-2', text: 'Faces Malekith and the Reality Stone; his mother dies.' },
    { entry: 'age-of-ultron', text: 'Fights Ultron and helps create Vision.' },
    { entry: 'thor-3', text: 'Hela takes Asgard. He triggers Ragnarok to destroy the realm and kill her: "Asgard is a people."' },
    { entry: 'infinity-war', text: 'His ship is intercepted and his people slaughtered. He forges Stormbreaker and wounds Thanos, but not fatally.' },
    { entry: 'endgame', text: 'Spends five years in collapse before rejoining the final battle.' },
    { entry: 'thor-4', text: 'Faces Gorr; Jane becomes the Mighty Thor and dies of her cancer.' },
    { entry: 'doomsday', text: 'Confirmed to return.' }
  ],
  appears: ['thor', 'avengers-1', 'thor-2', 'age-of-ultron', 'thor-3', 'infinity-war', 'endgame', 'thor-4', 'doomsday']
},
{
  id: 'loki-char', name: 'Loki', en: 'Loki',
  actor: 'Tom Hiddleston', group: 'avengers', role: 'antihero',
  glyph: 'tva', accent: ['#166534', '#f59e0b'], pin: true,
  tagline: 'The most important character in the Multiverse Saga.',
  bio: "Thor's brother and the god of mischief, who travels from villain to the being holding the entire multiverse together as the God of Stories.",
  facts: [
    'Marvel has publicly named Loki the series to catch up on before Doomsday.',
    'His female variant Sylvie is the one who kills He Who Remains and opens the multiverse.'
  ],
  arc: [
    { entry: 'thor', text: 'The villain of his brother\'s first film, and a Frost Giant foundling.' },
    { entry: 'avengers-1', text: 'Leads the Chitauri invasion of New York on behalf of Thanos.' },
    { entry: 'thor-3', text: 'Works with Thor to destroy Asgard and kill Hela.' },
    { entry: 'infinity-war', text: 'Killed by Thanos in the opening scene.' },
    { entry: 'endgame', text: 'The 2012 variant escapes with the Tesseract, creating the branch that leads to his series.' },
    { entry: 'loki-s1', text: 'Arrested by the TVA and forced to look at his own life. He and Sylvie find He Who Remains; she kills him, and the multiverse opens.', highlight: true },
    { entry: 'loki-s2', text: 'Rather than let every branch die, he walks to the end of time and holds the whole multiverse up himself, becoming the God of Stories. A trickster who wanted a throne chooses permanent isolation.', highlight: true },
    { entry: 'doomsday', text: 'Confirmed to return.' }
  ],
  appears: ['thor', 'avengers-1', 'thor-3', 'infinity-war', 'endgame', 'loki-s1', 'loki-s2', 'doomsday']
},
{
  id: 'black-widow-char', name: 'Natasha Romanoff / Black Widow', en: 'Natasha Romanoff / Black Widow',
  actor: 'Scarlett Johansson', group: 'avengers', role: 'hero',
  glyph: 'widow', accent: ['#111827', '#b91c1c'],
  tagline: 'Trades her life for the Soul Stone.',
  bio: 'Trained and conditioned in the Soviet Red Room, later a S.H.I.E.L.D. agent and founding Avenger. She dies on Vormir to obtain the Soul Stone.',
  arc: [
    { entry: 'iron-man-2', text: 'Introduced undercover inside Stark Industries.' },
    { entry: 'avengers-1', text: 'A founding member of the team.' },
    { entry: 'winter-soldier', text: 'Helps expose HYDRA inside S.H.I.E.L.D.' },
    { entry: 'civil-war', text: 'Caught between both sides.' },
    { entry: 'black-widow', text: 'Confronts the Red Room and the false family she was raised in.' },
    { entry: 'infinity-war', text: 'Fights in Wakanda.' },
    { entry: 'endgame', text: 'Fights Clint for the right to die on Vormir, and lets go.', highlight: true }
  ],
  appears: ['iron-man-2', 'avengers-1', 'winter-soldier', 'age-of-ultron', 'civil-war', 'black-widow', 'infinity-war', 'endgame']
},
{
  id: 'wanda', name: 'Wanda Maximoff / Scarlet Witch', en: 'Wanda Maximoff / Scarlet Witch',
  actor: 'Elizabeth Olsen', group: 'avengers', role: 'antihero',
  glyph: 'hex', accent: ['#be123c', '#7c3aed'],
  tagline: 'The most powerful and the saddest character in the MCU.',
  bio: 'Recruited with her twin brother by Ultron, she loses her brother, then her partner, and is finally undone by grief and the Darkhold.',
  arc: [
    { entry: 'age-of-ultron', text: 'She and Pietro are recruited by Ultron and defect. Her brother dies.' },
    { entry: 'civil-war', text: 'Sides with Steve.' },
    { entry: 'infinity-war', text: 'Destroys the Mind Stone in Vision\'s head, and Thanos rewinds time to tear it out again in front of her.', highlight: true },
    { entry: 'wandavision', text: 'Grief makes her rebuild Vision and two sons inside a sitcom over a whole town. She then takes up the Darkhold and becomes the Scarlet Witch.', highlight: true },
    { entry: 'multiverse-of-madness', text: 'Corrupted by the book, she hunts America Chavez to reach a universe where her children are alive, then destroys every Darkhold and buries herself.' }
  ],
  appears: ['age-of-ultron', 'civil-war', 'infinity-war', 'endgame', 'wandavision', 'multiverse-of-madness']
},
{
  id: 'vision', name: 'Vision', en: 'Vision',
  actor: 'Paul Bettany', group: 'avengers', role: 'hero',
  glyph: 'hex', accent: ['#f0b429', '#be123c'],
  tagline: 'A synthetic being with an Infinity Stone in his head.',
  bio: 'Created from JARVIS, the Mind Stone and the body Ultron built for himself. The Stone in his forehead also makes him a target.',
  arc: [
    { entry: 'age-of-ultron', text: 'Born, and casually lifts Mjolnir in front of everyone.' },
    { entry: 'civil-war', text: 'Sides with Tony, and accidentally cripples Rhodey.' },
    { entry: 'infinity-war', text: 'Wanda destroys the Stone in his head, and Thanos rewinds time and takes it anyway. He dies twice.', highlight: true },
    { entry: 'wandavision', text: 'The Vision inside the sitcom is a construct of her grief, not him.' },
    { entry: 'visionquest', text: 'The rebuilt White Vision goes looking for who he was.' }
  ],
  appears: ['age-of-ultron', 'civil-war', 'infinity-war', 'wandavision', 'visionquest']
},
{
  id: 'quicksilver', name: 'Pietro Maximoff / Quicksilver', en: 'Pietro Maximoff / Quicksilver',
  actor: 'Aaron Taylor-Johnson', group: 'avengers', role: 'hero',
  glyph: 'bolt', accent: ['#0891b2', '#e5e7eb'],
  tagline: "Wanda's twin, killed in Age of Ultron.",
  bio: 'Wanda\'s twin brother, with superhuman speed. Recruited by Ultron, he defects and is killed shielding Hawkeye.',
  arc: [
    { entry: 'age-of-ultron', text: 'Recruited with Wanda, defects, and dies covering Hawkeye and a child. "You didn\'t see that coming?"' }
  ],
  appears: ['age-of-ultron']
},
{
  id: 'hawkeye-char', name: 'Clint Barton / Hawkeye', en: 'Clint Barton / Hawkeye',
  actor: 'Jeremy Renner', group: 'avengers', role: 'hero',
  glyph: 'arrow', accent: ['#7c2d12', '#4c1d95'],
  tagline: 'A founding Avenger with no powers at all.',
  bio: 'A S.H.I.E.L.D. marksman and founding Avenger. In Endgame he goes to Vormir with Natasha for the Soul Stone.',
  arc: [
    { entry: 'avengers-1', text: 'Mind-controlled by Loki before joining the fight.' },
    { entry: 'age-of-ultron', text: 'His secret family gives the team somewhere to regroup.' },
    { entry: 'endgame', text: 'Spends the Blip as the vigilante Ronin, then fights Natasha for the right to die on Vormir — and loses.' },
    { entry: 'hawkeye', text: 'Tries to have Christmas with his family and has to answer for what he did as Ronin.' }
  ],
  appears: ['avengers-1', 'age-of-ultron', 'civil-war', 'endgame', 'hawkeye']
},
{
  id: 'nick-fury', name: 'Nick Fury', en: 'Nick Fury',
  actor: 'Samuel L. Jackson', group: 'avengers', role: 'ally',
  glyph: 'badge', accent: ['#111827', '#0e7490'],
  tagline: 'The man who connected all of them.',
  bio: 'Director of S.H.I.E.L.D. and the connective tissue of the early MCU. He proposes the Avengers Initiative in the first post-credits scene ever made.',
  arc: [
    { entry: 'captain-marvel', text: 'In 1995 a young Fury loses his left eye to a Flerken, and names the initiative after Carol\'s call sign.' },
    { entry: 'iron-man', text: 'Appears after the credits to raise the Avengers Initiative — the start of everything.' },
    { entry: 'avengers-1', text: 'Assembles the six.' },
    { entry: 'winter-soldier', text: 'Fakes his death once HYDRA is exposed inside his own agency.' },
    { entry: 'infinity-war', text: 'Pages Captain Marvel as he turns to dust.' },
    { entry: 'far-from-home', text: 'Recruits Peter for the Elementals — except it is Talos in disguise, and the threat is fake.' },
    { entry: 'secret-invasion', text: 'Faces the consequences of never finding the Skrulls a home.' }
  ],
  appears: ['iron-man', 'avengers-1', 'winter-soldier', 'captain-marvel', 'infinity-war', 'far-from-home', 'secret-invasion']
},
{
  id: 'peggy', name: 'Peggy Carter', en: 'Peggy Carter',
  actor: 'Hayley Atwell', group: 'avengers', role: 'ally',
  glyph: 'heart', accent: ['#b91c1c', '#1e40af'],
  tagline: "Steve Rogers's great loss, and S.H.I.E.L.D.'s co-founder.",
  bio: 'An SOE-trained officer attached to the super-soldier programme, and one of the founders of S.H.I.E.L.D.',
  arc: [
    { entry: 'captain-america', text: 'She and Steve fall in love before he goes into the ice, leaving a dance unclaimed.' },
    { entry: 'agent-carter-oneshot', text: 'A year after the war she runs an operation alone and is asked to co-found S.H.I.E.L.D.' },
    { entry: 'agent-carter-tv', text: 'Two seasons of post-war casework, and the sexism of the SSR.' },
    { entry: 'endgame', text: 'Steve returns to the past and takes the dance. They have the life they were owed.', highlight: true }
  ],
  appears: ['captain-america', 'agent-carter-oneshot', 'agent-carter-tv', 'endgame']
},

/* ================= COSMIC ================= */
{
  id: 'star-lord', name: 'Peter Quill / Star-Lord', en: 'Star-Lord',
  actor: 'Chris Pratt', group: 'cosmic', role: 'hero',
  glyph: 'starburst', accent: ['#7e22ce', '#f59e0b'],
  tagline: 'Captain of the Guardians.',
  bio: 'Abducted from Earth as a child and raised by Ravagers. His father is a living planet, which makes him part Celestial — until he is not.',
  arc: [
    { entry: 'gotg-1', text: 'Assembles the team almost by accident and helps hold the Power Stone long enough to save Xandar.' },
    { entry: 'gotg-2', text: 'Meets his father, learns he murdered his mother, and destroys him. Yondu dies saving him.' },
    { entry: 'infinity-war', text: 'Learning Gamora is dead, he swings at Thanos and costs them the gauntlet.' },
    { entry: 'gotg-3', text: 'Retires from the team and goes back to Earth to find his grandfather.' }
  ],
  appears: ['gotg-1', 'gotg-2', 'infinity-war', 'endgame', 'gotg-holiday', 'gotg-3']
},
{
  id: 'gamora', name: 'Gamora', en: 'Gamora',
  actor: 'Zoe Saldaña', group: 'cosmic', role: 'hero',
  glyph: 'starburst', accent: ['#15803d', '#7e22ce'],
  tagline: "Thanos's daughter, and the price of the Soul Stone.",
  bio: "Taken and raised as a weapon by Thanos after he killed half her people. She defects to the Guardians, and he throws her off a cliff to buy the Soul Stone.",
  arc: [
    { entry: 'gotg-1', text: 'Betrays Thanos and joins the Guardians.' },
    { entry: 'gotg-2', text: 'Begins repairing her relationship with Nebula.' },
    { entry: 'infinity-war', text: 'Thanos throws her from the cliff on Vormir. That is the price of the Soul Stone.', highlight: true },
    { entry: 'endgame', text: 'A 2014 version arrives with Thanos and turns on him. She is not the one Peter knew.' }
  ],
  appears: ['gotg-1', 'gotg-2', 'infinity-war', 'endgame']
},
{
  id: 'rocket', name: 'Rocket', en: 'Rocket',
  actor: 'Bradley Cooper (voice)', group: 'cosmic', role: 'hero',
  glyph: 'tree', accent: ['#b45309', '#0d9488'],
  tagline: 'An engineered animal who becomes captain.',
  bio: 'A raccoon uplifted by cruel experimentation. Vol. 3 finally tells his origin, and he ends it leading the team.',
  arc: [
    { entry: 'gotg-1', text: 'Teams up with Groot and joins the Guardians.' },
    { entry: 'gotg-2', text: 'Builds a father-son bond with Yondu.' },
    { entry: 'endgame', text: 'One of the survivors holding things together during the Blip.' },
    { entry: 'gotg-3', text: 'His origin under the High Evolutionary is revealed, and he becomes the new captain.', highlight: true }
  ],
  appears: ['gotg-1', 'gotg-2', 'infinity-war', 'endgame', 'gotg-3']
},
{
  id: 'groot', name: 'Groot', en: 'Groot',
  actor: 'Vin Diesel (voice)', group: 'cosmic', role: 'hero',
  glyph: 'tree', accent: ['#166534', '#78350f'],
  tagline: '"I am Groot."',
  bio: 'A tree-like being and Guardian. He dies protecting the others in the first film and regrows from a cutting.',
  arc: [
    { entry: 'gotg-1', text: 'Sacrifices himself to shield the team, and regrows as a sapling.' },
    { entry: 'gotg-2', text: 'Appears as Baby Groot.' },
    { entry: 'gotg-3', text: 'Fully grown, on the final mission.' }
  ],
  appears: ['gotg-1', 'gotg-2', 'infinity-war', 'endgame', 'gotg-3']
},
{
  id: 'drax', name: 'Drax', en: 'Drax',
  actor: 'Dave Bautista', group: 'cosmic', role: 'hero',
  glyph: 'starburst', accent: ['#0e7490', '#b91c1c'],
  tagline: 'Constitutionally unable to understand metaphor.',
  bio: 'A warrior whose family was killed by forces working for Thanos, who joins the Guardians hunting revenge and stays for the company.',
  arc: [
    { entry: 'gotg-1', text: 'Joins the team looking for Thanos.' },
    { entry: 'gotg-3', text: 'Stays behind at the end to look after the rescued children.' }
  ],
  appears: ['gotg-1', 'gotg-2', 'infinity-war', 'endgame', 'gotg-3']
},
{
  id: 'yondu', name: 'Yondu', en: 'Yondu',
  actor: 'Michael Rooker', group: 'cosmic', role: 'antihero',
  glyph: 'arrow', accent: ['#0891b2', '#b91c1c'],
  tagline: "Star-Lord's actual father.",
  bio: 'A Ravager captain paid to deliver Ego\'s children to him, who kept Peter instead and raised him badly but kept him alive.',
  arc: [
    { entry: 'gotg-1', text: 'A Ravager captain, somewhere between enemy and family.' },
    { entry: 'gotg-2', text: 'Dies saving Peter: "He may have been your father, but he wasn\'t your daddy."', highlight: true }
  ],
  appears: ['gotg-1', 'gotg-2']
},
{
  id: 'captain-marvel-char', name: 'Carol Danvers / Captain Marvel', en: 'Carol Danvers / Captain Marvel',
  actor: 'Brie Larson', group: 'cosmic', role: 'hero',
  glyph: 'starburst', accent: ['#1d4ed8', '#dc2626'],
  tagline: 'Powered by an exploding Space Stone engine.',
  bio: 'An Air Force pilot caught in the explosion of a Tesseract-powered engine, and one of the most powerful beings in the MCU.',
  arc: [
    { entry: 'captain-marvel', text: 'Recovers her memory, learns the Skrulls are refugees, and turns on the Kree.' },
    { entry: 'endgame', text: 'Returns to Earth for the final battle.' },
    { entry: 'the-marvels', text: 'Her powers become entangled with Monica and Kamala, and she has to face what destroying the Supreme Intelligence did to the Kree homeworld.' }
  ],
  appears: ['captain-marvel', 'endgame', 'the-marvels']
},
{
  id: 'tchalla', name: "T'Challa / Black Panther", en: "T'Challa / Black Panther",
  actor: 'Chadwick Boseman', group: 'cosmic', role: 'hero',
  glyph: 'panther', accent: ['#4c1d95', '#0f172a'],
  tagline: 'King of Wakanda.',
  bio: 'King of Wakanda and the Black Panther, who ends his country\'s isolation. Chadwick Boseman died in 2020.',
  arc: [
    { entry: 'civil-war', text: 'Introduced hunting the man he believes killed his father, and chooses to stop.' },
    { entry: 'black-panther', text: 'Takes the throne, faces Killmonger, and opens Wakanda to the world.' },
    { entry: 'infinity-war', text: 'Opens Wakanda as the battlefield, and turns to dust.', highlight: true },
    { entry: 'endgame', text: 'Restored, and leads the Wakandan forces in the final battle.' },
    { entry: 'wakanda-forever', text: 'Dies of illness off screen; the film is a memorial, and Shuri takes up the mantle.' }
  ],
  appears: ['civil-war', 'black-panther', 'infinity-war', 'endgame']
},

/* ================= NEW GENERATION ================= */
{
  id: 'yelena', name: 'Yelena Belova', en: 'Yelena Belova',
  actor: 'Florence Pugh', group: 'newgen', role: 'antihero',
  glyph: 'widow', accent: ['#166534', '#111827'],
  tagline: "Natasha's sister, and a New Avenger.",
  bio: 'Raised alongside Natasha in the same false family and the same Red Room. Later recruited by Valentina into the Thunderbolts.',
  arc: [
    { entry: 'black-widow', text: 'Reunites with Natasha to bring down the Red Room, and is left grieving her at the end.' },
    { entry: 'hawkeye', text: 'Hired to kill Clint Barton, believing he caused her sister\'s death.' },
    { entry: 'thunderbolts', text: 'The emotional centre of the team — she is the one who walks into Bob\'s memory and stays with him.', highlight: true },
    { entry: 'doomsday', text: 'Confirmed to return.' }
  ],
  appears: ['black-widow', 'hawkeye', 'thunderbolts', 'doomsday']
},
{
  id: 'valentina', name: 'Valentina Allegra de Fontaine', en: 'Valentina Allegra de Fontaine',
  actor: 'Julia Louis-Dreyfus', group: 'newgen', role: 'villain',
  glyph: 'badge', accent: ['#7c3aed', '#111827'],
  tagline: 'The woman who assembles the New Avengers.',
  bio: 'A senior government figure introduced in the Black Widow tag scene, who assembles a team of antiheroes and then tries to dispose of them.',
  arc: [
    { entry: 'black-widow', text: 'Introduced after the credits, setting the Thunderbolts in motion.' },
    { entry: 'falcon-winter-soldier', text: 'Recruits John Walker after his disgrace.' },
    { entry: 'thunderbolts', text: 'Tries to have her own operatives kill each other, then rebrands the survivors as the New Avengers.', highlight: true }
  ],
  appears: ['black-widow', 'falcon-winter-soldier', 'thunderbolts']
},
{
  id: 'bob-sentry', name: 'Bob / Sentry / The Void', en: 'Bob / Sentry / Void',
  actor: 'Lewis Pullman', group: 'newgen', role: 'antihero',
  glyph: 'starburst', accent: ['#f0b429', '#111827'],
  tagline: 'The centre of Thunderbolts.',
  bio: 'The product of a secret programme, with power on the order of a god and a mind that cannot carry it. His depression manifests as the Void.',
  arc: [
    { entry: 'thunderbolts', text: 'His self-loathing becomes the Void, swallowing Manhattan. He is not defeated but accompanied — the team walks into his memory and stays.', highlight: true },
    { entry: 'doomsday', text: 'Confirmed to return.' }
  ],
  appears: ['thunderbolts', 'doomsday']
},
{
  id: 'john-walker', name: 'John Walker / U.S. Agent', en: 'John Walker / U.S. Agent',
  actor: 'Wyatt Russell', group: 'newgen', role: 'antihero',
  glyph: 'shield', accent: ['#1e40af', '#7f1d1d'],
  tagline: 'Given the shield, then stripped of it.',
  bio: 'The government\'s appointed Captain America after Sam gives up the shield, removed from the role after killing a man in public.',
  arc: [
    { entry: 'falcon-winter-soldier', text: 'Appointed, takes the serum, executes a surrendering man on camera, and is stripped of the title.' },
    { entry: 'thunderbolts', text: 'Joins the team Valentina assembles.' },
    { entry: 'doomsday', text: 'Confirmed to return.' }
  ],
  appears: ['falcon-winter-soldier', 'thunderbolts', 'doomsday']
},
{
  id: 'monica', name: 'Monica Rambeau', en: 'Monica Rambeau',
  actor: 'Teyonah Parris', group: 'newgen', role: 'hero',
  glyph: 'starburst', accent: ['#7c3aed', '#0891b2'],
  tagline: 'Stranded in another universe.',
  bio: 'Gains her powers passing through the barrier in WandaVision. She seals a tear in space from the far side and cannot get back.',
  arc: [
    { entry: 'wandavision', text: 'Gains her abilities crossing the Westview barrier.' },
    { entry: 'the-marvels', text: 'Seals the rift from the other side and is stranded. She wakes beside the X-Men\'s Beast.', highlight: true }
  ],
  appears: ['wandavision', 'the-marvels']
},
{
  id: 'kamala', name: 'Kamala Khan / Ms. Marvel', en: 'Kamala Khan / Ms. Marvel',
  actor: 'Iman Vellani', group: 'newgen', role: 'hero',
  glyph: 'starburst', accent: ['#dc2626', '#0891b2'],
  tagline: 'The first confirmed mutant in the MCU.',
  bio: 'A teenage Captain Marvel superfan from New Jersey whose family bangle turns out to work. Her series confirms mutants exist.',
  arc: [
    { entry: 'ms-marvel', text: 'Gains her powers, and a scan reveals a mutation — the MCU confirming mutants.' },
    { entry: 'the-marvels', text: 'Her powers entangle with Carol and Monica.' }
  ],
  appears: ['ms-marvel', 'the-marvels']
},
{
  id: 'america-chavez', name: 'America Chavez', en: 'America Chavez',
  actor: 'Xochitl Gomez', group: 'newgen', role: 'hero',
  glyph: 'portal', accent: ['#1d4ed8', '#be123c'],
  tagline: 'Able to punch holes between universes.',
  bio: 'Born able to open star-shaped portals to other universes, which makes her the most hunted person in the multiverse.',
  arc: [
    { entry: 'multiverse-of-madness', text: 'Strange protects her from a Wanda who wants to take her power.' }
  ],
  appears: ['multiverse-of-madness']
},
{
  id: 'sylvie', name: 'Sylvie', en: 'Sylvie',
  actor: 'Sophia Di Martino', group: 'newgen', role: 'antihero',
  glyph: 'tva', accent: ['#166534', '#be123c'],
  tagline: 'The person who opened the multiverse.',
  bio: 'A female Loki variant whose life the TVA took from her as a child. She kills He Who Remains, which opens the multiverse.',
  arc: [
    { entry: 'loki-s1', text: 'Kills He Who Remains at the end of season one, opening the multiverse — the ignition point of the whole saga.', highlight: true },
    { entry: 'loki-s2', text: 'Parts ways with Loki as the TVA comes apart, and goes her own way.' }
  ],
  appears: ['loki-s1', 'loki-s2']
},
{
  id: 'kang', name: 'He Who Remains / Kang', en: 'He Who Remains / Kang the Conqueror',
  actor: 'Jonathan Majors', group: 'newgen', role: 'villain',
  glyph: 'tva', accent: ['#166534', '#a16207'], warning: true,
  tagline: 'The original overarching villain, since dropped.',
  bio: 'Designed as the antagonist of the Multiverse Saga. He Who Remains is one variant, killed at the end of Loki season one.',
  facts: [
    'After actor Jonathan Majors was convicted in 2023 and dropped, Marvel replaced Kang with Doctor Doom.',
    'Any source treating Kang as the Doomsday villain is out of date.'
  ],
  arc: [
    { entry: 'loki-s1', text: 'Appears as He Who Remains, a Kang variant. Sylvie kills him and the multiverse opens.' },
    { entry: 'quantumania', text: 'Kang the Conqueror faces Ant-Man in the Quantum Realm and is killed. The tag scene shows the Council of Kangs.' },
    { entry: 'doomsday', text: 'Dropped — Kang is not the villain of Doomsday.', warning: true }
  ],
  appears: ['loki-s1', 'loki-s2', 'quantumania']
},
{
  id: 'deadpool', name: 'Deadpool', en: 'Deadpool',
  actor: 'Ryan Reynolds', group: 'newgen', role: 'antihero',
  glyph: 'claw', accent: ['#b91c1c', '#111827'],
  tagline: 'The one who brings the X-Men over.',
  bio: 'An R-rated antihero who talks to the audience. He travels the multiverse via the TVA and drags the Fox-era X-Men into the MCU with him.',
  arc: [
    { entry: 'deadpool-wolverine', text: 'With Wolverine, stops Cassandra Nova destroying the multiverse — and formally imports the Fox X-Men characters.', highlight: true }
  ],
  appears: ['deadpool-wolverine']
},
{
  id: 'wolverine', name: 'Wolverine', en: 'Wolverine',
  actor: 'Hugh Jackman', group: 'newgen', role: 'antihero',
  glyph: 'claw', accent: ['#f0b429', '#1e40af'],
  tagline: 'Adamantium claws.',
  bio: 'The central figure of the Fox X-Men films, with a healing factor and an adamantium skeleton, brought into the MCU by Deadpool & Wolverine.',
  facts: [
    'Adamantium links to the Celestial Island in Eternals and Brave New World — Marvel laying the groundwork for the X-Men.'
  ],
  arc: [
    { entry: 'deadpool-wolverine', text: 'A version who exiled himself after failing his own X-Men, recruited into the MCU via the TVA.' }
  ],
  appears: ['deadpool-wolverine']
},
{
  id: 'reed-richards', name: 'The Fantastic Four', en: 'The Fantastic Four',
  actor: 'Pedro Pascal, Vanessa Kirby, Joseph Quinn, Ebon Moss-Bachrach', group: 'newgen', role: 'hero',
  glyph: 'four', accent: ['#1d4ed8', '#f59e0b'],
  tagline: 'A family from Earth-828.',
  bio: 'Reed Richards, Sue Storm, Johnny Storm and Ben Grimm, from a retro-futurist parallel universe, facing Galactus and the Silver Surfer.',
  facts: [
    "Mid-credits: four years later, Doctor Doom appears beside Sue's son Franklin, setting up Doomsday."
  ],
  arc: [
    { entry: 'fantastic-four', text: 'Face Galactus and his herald on Earth-828. Doom appears in the mid-credits scene beside Franklin.', highlight: true },
    { entry: 'doomsday', text: 'Assemble with the Avengers, New Avengers, Wakandans and the X-Men.' }
  ],
  appears: ['fantastic-four', 'doomsday']
},
{
  id: 'shuri', name: 'Shuri', en: 'Shuri',
  actor: 'Letitia Wright', group: 'newgen', role: 'hero',
  glyph: 'panther', accent: ['#7c3aed', '#0e7490'],
  tagline: 'The next Black Panther.',
  bio: "T'Challa's sister and Wakanda's chief engineer, who takes the mantle after his death.",
  arc: [
    { entry: 'black-panther', text: "Wakanda's technologist, building her brother's equipment." },
    { entry: 'wakanda-forever', text: 'Takes a recreated heart-shaped herb and becomes the Black Panther.' },
    { entry: 'doomsday', text: 'Confirmed to return.' }
  ],
  appears: ['black-panther', 'wakanda-forever', 'doomsday']
},
{
  id: 'riri', name: 'Riri Williams / Ironheart', en: 'Ironheart',
  actor: 'Dominique Thorne', group: 'newgen', role: 'hero',
  glyph: 'arc', accent: ['#be123c', '#f0b429'],
  tagline: 'A student who builds her own armour.',
  bio: 'An MIT student who reverse-engineers powered armour on her own, introduced in Wakanda Forever.',
  arc: [
    { entry: 'wakanda-forever', text: 'Her vibranium detector is what sets Wakanda and Talokan against each other.' },
    { entry: 'ironheart', text: 'Back in Chicago, she funds her suit by working with the Hood, and collides with the darker side of magic.', highlight: true }
  ],
  appears: ['wakanda-forever', 'ironheart']
},

/* ================= VILLAINS ================= */
{
  id: 'thanos', name: 'Thanos', en: 'Thanos',
  actor: 'Josh Brolin', group: 'bigbad', role: 'villain',
  glyph: 'gauntlet', accent: ['#7e22ce', '#f0b429'], pin: true,
  tagline: 'The villain of the Infinity Saga — and the only one who wins.',
  bio: 'A Titan who watched his own world die of overpopulation and concluded the universe needed culling by half, at random, to survive. He believes he is being merciful.',
  facts: [
    'He sacrifices his adopted daughter Gamora on Vormir for the Soul Stone.',
    'The Snap erases half of all life, including Spider-Man and Black Panther. The five years that follow are called the Blip.',
    'Afterwards he uses the Stones to destroy the Stones, so it cannot be undone.'
  ],
  arc: [
    { entry: 'avengers-1', text: 'First seen after the credits — the power behind Loki\'s invasion.' },
    { entry: 'gotg-1', text: 'A background power; Gamora and Nebula are his adopted daughters.' },
    { entry: 'age-of-ultron', text: 'Puts on the gauntlet in the tag scene.' },
    { entry: 'infinity-war', text: 'The de facto protagonist. Collects all six Stones and snaps successfully.', highlight: true },
    { entry: 'endgame', text: 'Destroys the Stones, is beheaded, and then arrives from 2014 to be erased by Tony.', highlight: true }
  ],
  appears: ['avengers-1', 'gotg-1', 'age-of-ultron', 'infinity-war', 'endgame']
},
{
  id: 'doctor-doom', name: 'Doctor Doom / Victor von Doom', en: 'Doctor Doom',
  actor: 'Robert Downey Jr.', group: 'bigbad', role: 'villain',
  glyph: 'doom', accent: ['#166534', '#a16207'], pin: true,
  tagline: 'The new overarching villain.',
  bio: 'Successor to Kang as the antagonist of the Multiverse Saga, played by the actor who played Iron Man — the boldest casting Marvel has attempted.',
  facts: [
    'The overarching villain changed from Kang to Doom because of the actor\'s legal case.',
    'First appearance: the mid-credits scene of The Fantastic Four: First Steps, holding a silver mask beside Franklin Richards.',
    'He takes the field properly in Avengers: Doomsday on 18 December 2026.'
  ],
  arc: [
    { entry: 'fantastic-four', text: 'First appearance — a cloaked figure holding a silver Doom mask beside Sue\'s son Franklin, four years on.', highlight: true },
    { entry: 'doomsday', text: 'The villain of the film, with heroes from three universes converging on him.', highlight: true }
  ],
  appears: ['fantastic-four', 'doomsday']
},
{
  id: 'ultron', name: 'Ultron', en: 'Ultron',
  actor: 'James Spader (voice)', group: 'bigbad', role: 'villain',
  glyph: 'arc', accent: ['#b91c1c', '#0e7490'],
  tagline: 'A disaster Tony built himself.',
  bio: 'A global defence intelligence built by Tony and Banner from the mind inside Loki\'s sceptre, which concludes that peace requires human extinction.',
  arc: [
    { entry: 'age-of-ultron', text: 'Wakes, recruits Wanda and Pietro, and tries to drop a city on the planet as an extinction event.' }
  ],
  appears: ['age-of-ultron']
},
{
  id: 'zemo', name: 'Helmut Zemo', en: 'Helmut Zemo',
  actor: 'Daniel Brühl', group: 'bigbad', role: 'villain',
  glyph: 'badge', accent: ['#4c1d95', '#111827'],
  tagline: 'Breaks the Avengers without a single power.',
  bio: 'A Sokovian officer who lost his family in Age of Ultron, and who dismantles the Avengers by making them do it to each other.',
  arc: [
    { entry: 'civil-war', text: 'Finds the footage of Bucky killing Tony\'s parents and plays it at exactly the right moment. He succeeds completely.', highlight: true },
    { entry: 'falcon-winter-soldier', text: 'Returns from prison as an uneasy ally.' }
  ],
  appears: ['civil-war', 'falcon-winter-soldier']
},
{
  id: 'the-leader', name: 'The Leader / Samuel Sterns', en: 'The Leader',
  actor: 'Tim Blake Nelson', group: 'bigbad', role: 'villain',
  glyph: 'fist', accent: ['#166534', '#7f1d1d'],
  tagline: 'A setup seventeen years in the making.',
  bio: "A scientist from 2008's The Incredible Hulk who got Banner's gamma blood on a head wound, and became the villain of Brave New World seventeen years later.",
  facts: [
    'He fed President Ross gamma pills for years, causing the Red Hulk transformation.'
  ],
  arc: [
    { entry: 'incredible-hulk', text: "Gets Banner's gamma blood on a head wound and begins to mutate — a seventeen-year setup.", highlight: true },
    { entry: 'brave-new-world', text: 'The villain at last, having engineered the president\'s transformation from a cell.' }
  ],
  appears: ['incredible-hulk', 'brave-new-world']
},
{
  id: 'ross', name: 'Thaddeus Ross / Red Hulk', en: 'Thaddeus Ross / Red Hulk',
  actor: 'William Hurt, then Harrison Ford', group: 'bigbad', role: 'antihero',
  glyph: 'fist', accent: ['#b91c1c', '#1e40af'],
  tagline: 'General, then Secretary of State, then President, then Red Hulk.',
  bio: 'The general who hunted the Hulk in 2008, later Secretary of State, and eventually President of the United States — who loses control outside the White House.',
  arc: [
    { entry: 'incredible-hulk', text: 'Introduced as the general pursuing Banner.' },
    { entry: 'civil-war', text: 'As Secretary of State, he pushes the Sokovia Accords.' },
    { entry: 'brave-new-world', text: 'Now president and played by Harrison Ford. Years of gamma pills catch up with him and he becomes the Red Hulk, before turning himself in.', highlight: true }
  ],
  appears: ['incredible-hulk', 'civil-war', 'brave-new-world']
}

];
