/* ============================================================
   Per-work detail layer — runtime, cast, credit scenes,
   quotes, deaths and prerequisites.
   Keyed by work id and merged in by app.js.
   credits: type 'mid' = mid-credits, 'post' = post-credits
   ============================================================ */

window.MCU_DETAILS = {

/* ================= PHASE 1 ================= */
'iron-man': {
  runtime: '126 min', rating: 'PG-13',
  prereq: 'No prior knowledge needed — this is the starting point.',
  cast: [
    { a: 'Robert Downey Jr.', r: 'Tony Stark / Iron Man', id: 'tony-stark' },
    { a: 'Gwyneth Paltrow', r: 'Pepper Potts', id: 'pepper' },
    { a: 'Terrence Howard', r: 'James Rhodes', id: 'rhodey' },
    { a: 'Jeff Bridges', r: 'Obadiah Stane / Iron Monger' },
    { a: 'Jon Favreau', r: 'Happy Hogan', id: 'happy' },
    { a: 'Samuel L. Jackson', r: 'Nick Fury', id: 'nick-fury' }
  ],
  credits: [
    { type: 'post', text: 'Nick Fury is waiting in the house: "You think you\'re the only superhero in the world? I\'m here to talk to you about the Avenger Initiative." The first Marvel credit scene, and the seed of the entire universe.', key: true }
  ],
  quotes: ['I am Iron Man.'],
  deaths: ['Obadiah Stane', 'Ho Yinsen']
},
'incredible-hulk': {
  runtime: '112 min', rating: 'PG-13',
  prereq: 'None needed. The only thing to hold on to is the scientist whose head starts changing at the end.',
  cast: [
    { a: 'Edward Norton', r: 'Bruce Banner / Hulk', id: 'hulk' },
    { a: 'Liv Tyler', r: 'Betty Ross' },
    { a: 'Tim Roth', r: 'Emil Blonsky / Abomination' },
    { a: 'William Hurt', r: 'Thaddeus Ross', id: 'ross' },
    { a: 'Tim Blake Nelson', r: 'Samuel Sterns / The Leader', id: 'the-leader' }
  ],
  credits: [
    { type: 'post', text: 'Tony Stark finds General Ross drinking in a bar and tells him a team is being assembled. The one-shot The Consultant later reveals this was a S.H.I.E.L.D. tactic to make the talks fail.' }
  ],
  note: 'The only MCU film with Edward Norton as Banner; Mark Ruffalo takes over from The Avengers.'
},
'iron-man-2': {
  runtime: '124 min', rating: 'PG-13',
  prereq: 'Iron Man.',
  cast: [
    { a: 'Robert Downey Jr.', r: 'Tony Stark', id: 'tony-stark' },
    { a: 'Don Cheadle', r: 'James Rhodes / War Machine', id: 'rhodey' },
    { a: 'Scarlett Johansson', r: 'Natasha Romanoff / Black Widow', id: 'black-widow-char' },
    { a: 'Mickey Rourke', r: 'Ivan Vanko / Whiplash' },
    { a: 'Sam Rockwell', r: 'Justin Hammer' },
    { a: 'Gwyneth Paltrow', r: 'Pepper Potts', id: 'pepper' }
  ],
  credits: [
    { type: 'post', text: "Agent Coulson reports a hammer embedded in a crater in the New Mexico desert — Thor's Mjolnir. Leads straight into Thor.", key: true }
  ]
},
'thor': {
  runtime: '115 min', rating: 'PG-13',
  prereq: 'None, though Iron Man 2 explains where the hammer came from.',
  cast: [
    { a: 'Chris Hemsworth', r: 'Thor', id: 'thor-char' },
    { a: 'Tom Hiddleston', r: 'Loki', id: 'loki-char' },
    { a: 'Natalie Portman', r: 'Jane Foster', id: 'jane-foster' },
    { a: 'Anthony Hopkins', r: 'Odin' },
    { a: 'Idris Elba', r: 'Heimdall' },
    { a: 'Jeremy Renner', r: 'Clint Barton (cameo)', id: 'hawkeye-char' }
  ],
  credits: [
    { type: 'post', text: 'Nick Fury shows Erik Selvig the Tesseract, while a not-quite-dead Loki manipulates Selvig from the shadows. The Space Stone arrives.', key: true }
  ]
},
'captain-america': {
  runtime: '124 min', rating: 'PG-13',
  prereq: 'None. This is one of the earliest points on the timeline.',
  cast: [
    { a: 'Chris Evans', r: 'Steve Rogers / Captain America', id: 'steve-rogers' },
    { a: 'Hayley Atwell', r: 'Peggy Carter', id: 'peggy' },
    { a: 'Sebastian Stan', r: 'Bucky Barnes', id: 'bucky' },
    { a: 'Hugo Weaving', r: 'Johann Schmidt / Red Skull' },
    { a: 'Dominic Cooper', r: 'Howard Stark', id: 'howard-stark' },
    { a: 'Stanley Tucci', r: 'Dr Abraham Erskine' }
  ],
  credits: [
    { type: 'post', text: 'Nick Fury tells a newly thawed Steve he has been asleep for nearly seventy years, followed by the teaser for The Avengers.' }
  ],
  quotes: ['I can do this all day.'],
  deaths: ['Abraham Erskine', 'Bucky Barnes (in fact recovered by HYDRA)', 'Red Skull (in fact teleported by the Space Stone)']
},
'avengers-1': {
  runtime: '143 min', rating: 'PG-13',
  prereq: 'Ideally Iron Man, Thor and Captain America, though the film reintroduces everyone.',
  cast: [
    { a: 'Robert Downey Jr.', r: 'Tony Stark', id: 'tony-stark' },
    { a: 'Chris Evans', r: 'Steve Rogers', id: 'steve-rogers' },
    { a: 'Mark Ruffalo', r: 'Bruce Banner / Hulk', id: 'hulk' },
    { a: 'Chris Hemsworth', r: 'Thor', id: 'thor-char' },
    { a: 'Scarlett Johansson', r: 'Natasha Romanoff', id: 'black-widow-char' },
    { a: 'Jeremy Renner', r: 'Clint Barton', id: 'hawkeye-char' },
    { a: 'Tom Hiddleston', r: 'Loki', id: 'loki-char' },
    { a: 'Clark Gregg', r: 'Phil Coulson', id: 'coulson' }
  ],
  credits: [
    { type: 'mid', text: 'The Other reports back that challenging humans means courting death. The camera turns — and Thanos smiles for the first time.', key: true },
    { type: 'post', text: 'The six of them eat shawarma in a half-destroyed restaurant in complete silence.' }
  ],
  quotes: ['I have an army. / We have a Hulk.'],
  deaths: ['Phil Coulson (later revived in Agents of S.H.I.E.L.D.)']
},

/* ================= PHASE 2 ================= */
'iron-man-3': {
  runtime: '130 min', rating: 'PG-13',
  prereq: "The Avengers — Tony's PTSD comes entirely from the Battle of New York.",
  cast: [
    { a: 'Robert Downey Jr.', r: 'Tony Stark', id: 'tony-stark' },
    { a: 'Gwyneth Paltrow', r: 'Pepper Potts', id: 'pepper' },
    { a: 'Don Cheadle', r: 'James Rhodes', id: 'rhodey' },
    { a: 'Guy Pearce', r: 'Aldrich Killian' },
    { a: 'Ben Kingsley', r: 'Trevor Slattery / the fake Mandarin', id: 'trevor' }
  ],
  credits: [
    { type: 'post', text: 'The entire film turns out to have been Tony narrating to Bruce Banner — who fell asleep early on. "I\'m not that kind of doctor."' }
  ]
},
'thor-2': {
  runtime: '112 min', rating: 'PG-13',
  prereq: 'Thor and The Avengers.',
  cast: [
    { a: 'Chris Hemsworth', r: 'Thor', id: 'thor-char' },
    { a: 'Tom Hiddleston', r: 'Loki', id: 'loki-char' },
    { a: 'Natalie Portman', r: 'Jane Foster', id: 'jane-foster' },
    { a: 'Christopher Eccleston', r: 'Malekith' },
    { a: 'Rene Russo', r: 'Frigga' }
  ],
  credits: [
    { type: 'mid', text: 'The Asgardians hand the Aether to the Collector, noting that two Infinity Stones in one place is asking for trouble — confirming the Aether is the Reality Stone.', key: true },
    { type: 'post', text: 'Thor returns to Earth and Jane, while a Jotunheim creature is still loose on the planet.' }
  ],
  deaths: ["Frigga (Thor's mother)", 'Malekith']
},
'winter-soldier': {
  runtime: '136 min', rating: 'PG-13',
  prereq: 'Captain America and The Avengers. The impact depends on you already trusting S.H.I.E.L.D.',
  cast: [
    { a: 'Chris Evans', r: 'Steve Rogers', id: 'steve-rogers' },
    { a: 'Scarlett Johansson', r: 'Natasha Romanoff', id: 'black-widow-char' },
    { a: 'Sebastian Stan', r: 'Bucky Barnes / Winter Soldier', id: 'bucky' },
    { a: 'Anthony Mackie', r: 'Sam Wilson / Falcon', id: 'sam-wilson' },
    { a: 'Samuel L. Jackson', r: 'Nick Fury', id: 'nick-fury' },
    { a: 'Robert Redford', r: 'Alexander Pierce' }
  ],
  credits: [
    { type: 'mid', text: "Baron Strucker's HYDRA base holds two 'miracles' — the first look at Quicksilver and Scarlet Witch, with Loki's sceptre in his possession.", key: true },
    { type: 'post', text: 'Bucky stands in the Smithsonian looking at an exhibit about himself, beginning to remember.' }
  ],
  quotes: ["I've been to war. I've done the mission."]
},
'gotg-1': {
  runtime: '121 min', rating: 'PG-13',
  prereq: 'None at all — the easiest MCU film to watch cold.',
  cast: [
    { a: 'Chris Pratt', r: 'Peter Quill / Star-Lord', id: 'star-lord' },
    { a: 'Zoe Saldaña', r: 'Gamora', id: 'gamora' },
    { a: 'Dave Bautista', r: 'Drax', id: 'drax' },
    { a: 'Bradley Cooper', r: 'Rocket (voice)', id: 'rocket' },
    { a: 'Vin Diesel', r: 'Groot (voice)', id: 'groot' },
    { a: 'Michael Rooker', r: 'Yondu', id: 'yondu' },
    { a: 'Karen Gillan', r: 'Nebula', id: 'nebula' },
    { a: 'Lee Pace', r: 'Ronan', id: 'ronan' }
  ],
  credits: [
    { type: 'post', text: 'The Collector drinks among his wrecked collection while Howard the Duck talks at him.' }
  ],
  quotes: ['We are Groot.'],
  deaths: ['Groot (regrows from a cutting)', 'Ronan']
},
'age-of-ultron': {
  runtime: '141 min', rating: 'PG-13',
  prereq: 'The Avengers and The Winter Soldier.',
  cast: [
    { a: 'Robert Downey Jr.', r: 'Tony Stark', id: 'tony-stark' },
    { a: 'Chris Evans', r: 'Steve Rogers', id: 'steve-rogers' },
    { a: 'Mark Ruffalo', r: 'Bruce Banner', id: 'hulk' },
    { a: 'Elizabeth Olsen', r: 'Wanda Maximoff', id: 'wanda' },
    { a: 'Aaron Taylor-Johnson', r: 'Pietro Maximoff / Quicksilver', id: 'quicksilver' },
    { a: 'Paul Bettany', r: 'Vision', id: 'vision' },
    { a: 'James Spader', r: 'Ultron (voice)', id: 'ultron' }
  ],
  credits: [
    { type: 'mid', text: 'Thanos opens a vault, puts on the Infinity Gauntlet, and says he will do it himself.', key: true }
  ],
  deaths: ['Pietro Maximoff (Quicksilver)']
},
'ant-man': {
  runtime: '117 min', rating: 'PG-13',
  prereq: 'Almost none; a good standalone entry point.',
  cast: [
    { a: 'Paul Rudd', r: 'Scott Lang / Ant-Man', id: 'scott-lang' },
    { a: 'Evangeline Lilly', r: 'Hope van Dyne', id: 'hope' },
    { a: 'Michael Douglas', r: 'Hank Pym', id: 'hank-pym' },
    { a: 'Corey Stoll', r: 'Darren Cross / Yellowjacket' },
    { a: 'Michael Peña', r: 'Luis' }
  ],
  credits: [
    { type: 'mid', text: 'Hank shows Hope the original Wasp suit: "It\'s about damn time."' },
    { type: 'post', text: 'Steve and Sam have found Bucky and decide not to call Tony — direct setup for Civil War.', key: true }
  ]
},

/* ================= PHASE 3 ================= */
'civil-war': {
  runtime: '147 min', rating: 'PG-13',
  prereq: "Ideally Age of Ultron and The Winter Soldier — the Accords and Bucky's past are the whole premise.",
  cast: [
    { a: 'Chris Evans', r: 'Steve Rogers', id: 'steve-rogers' },
    { a: 'Robert Downey Jr.', r: 'Tony Stark', id: 'tony-stark' },
    { a: 'Sebastian Stan', r: 'Bucky Barnes', id: 'bucky' },
    { a: 'Chadwick Boseman', r: "T'Challa / Black Panther", id: 'tchalla' },
    { a: 'Tom Holland', r: 'Peter Parker / Spider-Man', id: 'peter-parker' },
    { a: 'Daniel Brühl', r: 'Helmut Zemo', id: 'zemo' },
    { a: 'Paul Rudd', r: 'Scott Lang', id: 'scott-lang' }
  ],
  credits: [
    { type: 'mid', text: 'Bucky voluntarily goes back into cryostasis in Wakanda until his conditioning can be undone.' },
    { type: 'post', text: 'Peter examines the gear Tony gave him while May asks about his injuries through the door.' }
  ],
  quotes: ["He's my friend. / So was I."],
  deaths: ["T'Chaka, King of Wakanda"]
},
'doctor-strange': {
  runtime: '115 min', rating: 'PG-13',
  prereq: 'None; a standalone entry point for the magic side.',
  cast: [
    { a: 'Benedict Cumberbatch', r: 'Stephen Strange', id: 'doctor-strange-char' },
    { a: 'Tilda Swinton', r: 'The Ancient One', id: 'ancient-one' },
    { a: 'Benedict Wong', r: 'Wong', id: 'wong' },
    { a: 'Chiwetel Ejiofor', r: 'Karl Mordo' },
    { a: 'Mads Mikkelsen', r: 'Kaecilius' }
  ],
  credits: [
    { type: 'mid', text: 'Thor visits the New York Sanctum and Strange agrees to help him find Odin — leading into Ragnarok.' },
    { type: 'post', text: 'Mordo strips a sorcerer of his power: "Too many sorcerers."' }
  ],
  quotes: ["Dormammu, I've come to bargain."],
  deaths: ['The Ancient One']
},
'gotg-2': {
  runtime: '136 min', rating: 'PG-13',
  prereq: 'Guardians of the Galaxy.',
  cast: [
    { a: 'Chris Pratt', r: 'Peter Quill', id: 'star-lord' },
    { a: 'Kurt Russell', r: 'Ego', id: 'ego' },
    { a: 'Pom Klementieff', r: 'Mantis', id: 'mantis' },
    { a: 'Michael Rooker', r: 'Yondu', id: 'yondu' },
    { a: 'Karen Gillan', r: 'Nebula', id: 'nebula' }
  ],
  credits: [
    { type: 'post', text: 'Five scenes in total; the important one has the Sovereign creating Adam Warlock, who appears in Vol. 3.', key: true }
  ],
  quotes: ["He may have been your father, but he wasn't your daddy."],
  deaths: ['Yondu', 'Ego']
},
'homecoming': {
  runtime: '133 min', rating: 'PG-13',
  prereq: "Civil War, for Peter and Tony's relationship.",
  cast: [
    { a: 'Tom Holland', r: 'Peter Parker / Spider-Man', id: 'peter-parker' },
    { a: 'Michael Keaton', r: 'Adrian Toomes / Vulture', id: 'vulture' },
    { a: 'Jacob Batalon', r: 'Ned Leeds', id: 'ned' },
    { a: 'Zendaya', r: 'Michelle Jones (MJ)', id: 'mj' },
    { a: 'Marisa Tomei', r: 'Aunt May', id: 'may' },
    { a: 'Robert Downey Jr.', r: 'Tony Stark', id: 'tony-stark' },
    { a: 'Jon Favreau', r: 'Happy Hogan', id: 'happy' },
    { a: 'Laura Harrier', r: 'Liz Toomes', id: 'liz' }
  ],
  credits: [
    { type: 'mid', text: 'In prison Toomes meets Mac Gargan — the comics\' Scorpion — who asks about Spider-Man\'s identity. Toomes says he does not know, repaying the man who saved his life.', key: true },
    { type: 'post', text: 'Captain America delivers a public service message about patience. It is purely a joke.' }
  ],
  quotes: ["If you're nothing without the suit, then you shouldn't have it."]
},
'thor-3': {
  runtime: '130 min', rating: 'PG-13',
  prereq: 'The first two Thor films and Age of Ultron.',
  cast: [
    { a: 'Chris Hemsworth', r: 'Thor', id: 'thor-char' },
    { a: 'Tom Hiddleston', r: 'Loki', id: 'loki-char' },
    { a: 'Cate Blanchett', r: 'Hela', id: 'hela' },
    { a: 'Tessa Thompson', r: 'Valkyrie', id: 'valkyrie' },
    { a: 'Mark Ruffalo', r: 'Bruce Banner / Hulk', id: 'hulk' },
    { a: 'Jeff Goldblum', r: 'The Grandmaster' }
  ],
  credits: [
    { type: 'mid', text: "An enormous warship blocks the Asgardian refugee vessel — Thanos's Sanctuary II. Infinity War opens on this exact moment.", key: true },
    { type: 'post', text: 'The Grandmaster, facing a revolution on Sakaar, tries to take credit for it.' }
  ],
  quotes: ['Asgard is not a place. It never was. This could be Asgard. Asgard is where our people stand.'],
  deaths: ['Odin', 'Hela', 'Skurge']
},
'black-panther': {
  runtime: '134 min', rating: 'PG-13',
  prereq: "Civil War, to know who T'Challa is.",
  cast: [
    { a: 'Chadwick Boseman', r: "T'Challa / Black Panther", id: 'tchalla' },
    { a: 'Michael B. Jordan', r: 'Erik Killmonger', id: 'killmonger' },
    { a: 'Letitia Wright', r: 'Shuri', id: 'shuri' },
    { a: "Lupita Nyong'o", r: 'Nakia' },
    { a: 'Danai Gurira', r: 'Okoye' },
    { a: 'Winston Duke', r: "M'Baku" }
  ],
  credits: [
    { type: 'mid', text: "T'Challa announces at the UN that Wakanda is opening itself to the world." },
    { type: 'post', text: 'Bucky wakes in Wakanda, where the children call him the White Wolf.' }
  ],
  quotes: ['Bury me in the ocean with my ancestors who jumped from ships, because they knew death was better than bondage.'],
  deaths: ['Erik Killmonger', 'Zuri']
},
'infinity-war': {
  runtime: '149 min', rating: 'PG-13',
  prereq: 'This is the payoff for a decade. At minimum: The Avengers, Age of Ultron, Civil War, Ragnarok and Guardians of the Galaxy.',
  cast: [
    { a: 'Josh Brolin', r: 'Thanos', id: 'thanos' },
    { a: 'Robert Downey Jr.', r: 'Tony Stark', id: 'tony-stark' },
    { a: 'Chris Hemsworth', r: 'Thor', id: 'thor-char' },
    { a: 'Chris Evans', r: 'Steve Rogers', id: 'steve-rogers' },
    { a: 'Zoe Saldaña', r: 'Gamora', id: 'gamora' },
    { a: 'Tom Holland', r: 'Peter Parker', id: 'peter-parker' },
    { a: 'Benedict Cumberbatch', r: 'Stephen Strange', id: 'doctor-strange-char' },
    { a: 'Elizabeth Olsen', r: 'Wanda Maximoff', id: 'wanda' }
  ],
  credits: [
    { type: 'post', text: 'As Nick Fury and Maria Hill turn to dust, Fury triggers a pager — and the Captain Marvel insignia appears on the screen.', key: true }
  ],
  quotes: ['I should have gone for the head.', "Mr Stark, I don't feel so good."],
  deaths: ['Loki', 'Heimdall', 'Gamora', 'Vision', 'and half of all life in the universe']
},
'ant-man-2': {
  runtime: '118 min', rating: 'PG-13',
  prereq: 'Ant-Man and Civil War.',
  cast: [
    { a: 'Paul Rudd', r: 'Scott Lang', id: 'scott-lang' },
    { a: 'Evangeline Lilly', r: 'Hope van Dyne / Wasp', id: 'hope' },
    { a: 'Michael Douglas', r: 'Hank Pym', id: 'hank-pym' },
    { a: 'Michelle Pfeiffer', r: 'Janet van Dyne', id: 'janet' },
    { a: 'Hannah John-Kamen', r: 'Ava Starr / Ghost', id: 'ghost' }
  ],
  credits: [
    { type: 'mid', text: 'Scott enters the Quantum Realm to harvest energy while Hank, Janet and Hope monitor from outside — and all three turn to dust, stranding him. The whole of Endgame proceeds from this scene.', key: true },
    { type: 'post', text: 'An empty house, with an emergency broadcast still playing.' }
  ]
},
'captain-marvel': {
  runtime: '123 min', rating: 'PG-13',
  prereq: 'None. It lands better if you have seen the Infinity War post-credits scene.',
  cast: [
    { a: 'Brie Larson', r: 'Carol Danvers', id: 'captain-marvel-char' },
    { a: 'Samuel L. Jackson', r: 'Nick Fury', id: 'nick-fury' },
    { a: 'Ben Mendelsohn', r: 'Talos' },
    { a: 'Jude Law', r: 'Yon-Rogg' },
    { a: 'Lashana Lynch', r: 'Maria Rambeau' }
  ],
  credits: [
    { type: 'mid', text: 'The surviving Avengers are staring at the pager when Carol Danvers appears behind them: "Where\'s Fury?"', key: true },
    { type: 'post', text: 'Goose the cat jumps onto Fury\'s desk and coughs up the Tesseract.' }
  ]
},
'endgame': {
  runtime: '181 min', rating: 'PG-13',
  prereq: 'Infinity War is required. Ant-Man and the Wasp explains why Scott is in the Quantum Realm.',
  cast: [
    { a: 'Robert Downey Jr.', r: 'Tony Stark', id: 'tony-stark' },
    { a: 'Chris Evans', r: 'Steve Rogers', id: 'steve-rogers' },
    { a: 'Mark Ruffalo', r: 'Bruce Banner', id: 'hulk' },
    { a: 'Chris Hemsworth', r: 'Thor', id: 'thor-char' },
    { a: 'Scarlett Johansson', r: 'Natasha Romanoff', id: 'black-widow-char' },
    { a: 'Jeremy Renner', r: 'Clint Barton', id: 'hawkeye-char' },
    { a: 'Karen Gillan', r: 'Nebula', id: 'nebula' },
    { a: 'Josh Brolin', r: 'Thanos', id: 'thanos' }
  ],
  credits: [
    { type: 'post', text: 'There is no credit scene — only a black screen and the sound of hammering metal, which is Tony building the first suit in a cave. Eleven years, answered with a sound effect.', key: true }
  ],
  quotes: ['I love you 3000.', 'Avengers... assemble.', 'I am Iron Man.'],
  deaths: ['Natasha Romanoff', 'Tony Stark', 'Thanos', 'the 2014 Gamora survives']
},
'far-from-home': {
  runtime: '129 min', rating: 'PG-13',
  prereq: "Endgame is required — the whole emotional premise is Tony's death.",
  cast: [
    { a: 'Tom Holland', r: 'Peter Parker', id: 'peter-parker' },
    { a: 'Jake Gyllenhaal', r: 'Quentin Beck / Mysterio', id: 'mysterio' },
    { a: 'Zendaya', r: 'MJ', id: 'mj' },
    { a: 'Jacob Batalon', r: 'Ned Leeds', id: 'ned' },
    { a: 'Samuel L. Jackson', r: 'Nick Fury', id: 'nick-fury' },
    { a: 'Jon Favreau', r: 'Happy Hogan', id: 'happy' }
  ],
  credits: [
    { type: 'mid', text: "Beck's pre-recorded fake footage is broadcast by J. Jonah Jameson of The Daily Bugle, framing Spider-Man for his death and naming Peter Parker to the world. It detonates No Way Home.", key: true },
    { type: 'post', text: 'The Nick Fury in the film was Talos in disguise; the real Fury is on a Skrull space station.' }
  ]
},

/* ================= PHASE 4 ================= */
'black-widow': {
  runtime: '134 min', rating: 'PG-13',
  prereq: 'Civil War. It is set between that film and Infinity War.',
  cast: [
    { a: 'Scarlett Johansson', r: 'Natasha Romanoff', id: 'black-widow-char' },
    { a: 'Florence Pugh', r: 'Yelena Belova', id: 'yelena' },
    { a: 'David Harbour', r: 'Alexei / Red Guardian', id: 'alexei' },
    { a: 'Rachel Weisz', r: 'Melina' },
    { a: 'Julia Louis-Dreyfus', r: 'Valentina', id: 'valentina' }
  ],
  credits: [
    { type: 'post', text: "At Natasha's grave Valentina shows Yelena a photo of Clint Barton and tells her that is the man who killed her sister — leading into Hawkeye.", key: true }
  ]
},
'shang-chi': {
  runtime: '132 min', rating: 'PG-13',
  prereq: 'None, though Iron Man 3 explains the "fake Mandarin" joke.',
  cast: [
    { a: 'Simu Liu', r: 'Shang-Chi', id: 'shang-chi-char' },
    { a: 'Tony Leung', r: 'Xu Wenwu', id: 'wenwu' },
    { a: 'Awkwafina', r: 'Katy' },
    { a: "Meng'er Zhang", r: 'Xu Xialing' },
    { a: 'Michelle Yeoh', r: 'Ying Nan' },
    { a: 'Ben Kingsley', r: 'Trevor Slattery', id: 'trevor' }
  ],
  credits: [
    { type: 'mid', text: 'Wong brings Shang-Chi and Katy to meet Carol Danvers and Bruce Banner. None of them can identify the rings, and they realise the rings are broadcasting a signal.', key: true },
    { type: 'post', text: "Xialing has taken over the Ten Rings and is training women at her father's old compound." }
  ],
  deaths: ['Xu Wenwu', 'The Dweller-in-Darkness']
},
'eternals': {
  runtime: '156 min', rating: 'PG-13',
  prereq: 'None; it is largely self-contained.',
  cast: [
    { a: 'Gemma Chan', r: 'Sersi', id: 'sersi' },
    { a: 'Richard Madden', r: 'Ikaris', id: 'ikaris' },
    { a: 'Angelina Jolie', r: 'Thena' },
    { a: 'Kumail Nanjiani', r: 'Kingo' },
    { a: 'Salma Hayek', r: 'Ajak' },
    { a: 'Brian Tyree Henry', r: 'Phastos' }
  ],
  credits: [
    { type: 'mid', text: "Introduces Eros / Starfox (Harry Styles), Thanos's brother, alongside Pip the Troll." },
    { type: 'post', text: 'Dane Whitman reaches for the Ebony Blade and is interrupted by a voice — Blade (Mahershala Ali).', key: true }
  ],
  deaths: ['Ajak', 'Gilgamesh', 'Ikaris']
},
'no-way-home': {
  runtime: '148 min', rating: 'PG-13',
  prereq: 'Far From Home is required. The older Spider-Man films add a great deal but are not necessary.',
  cast: [
    { a: 'Tom Holland', r: 'Peter Parker', id: 'peter-parker' },
    { a: 'Zendaya', r: 'MJ', id: 'mj' },
    { a: 'Benedict Cumberbatch', r: 'Stephen Strange', id: 'doctor-strange-char' },
    { a: 'Willem Dafoe', r: 'Norman Osborn / Green Goblin', id: 'green-goblin' },
    { a: 'Alfred Molina', r: 'Otto Octavius / Doc Ock', id: 'doc-ock' },
    { a: 'Jamie Foxx', r: 'Max Dillon / Electro', id: 'electro' },
    { a: 'Tobey Maguire', r: 'Peter Parker (Peter-Two)', id: 'peter-two' },
    { a: 'Andrew Garfield', r: 'Peter Parker (Peter-Three)', id: 'peter-three' },
    { a: 'Marisa Tomei', r: 'Aunt May', id: 'may' },
    { a: 'Charlie Cox', r: 'Matt Murdock', id: 'daredevil-char' }
  ],
  credits: [
    { type: 'mid', text: 'Eddie Brock hears about the Avengers in a bar and is pulled home just as he decides to find Spider-Man — leaving a fragment of the symbiote behind.', key: true },
    { type: 'post', text: 'The full trailer for Doctor Strange in the Multiverse of Madness.' }
  ],
  quotes: ['With great power there must also come great responsibility.'],
  deaths: ['Aunt May']
},
'multiverse-of-madness': {
  runtime: '126 min', rating: 'PG-13',
  prereq: "WandaVision and No Way Home are both required, or Wanda's motivation makes no sense.",
  cast: [
    { a: 'Benedict Cumberbatch', r: 'Stephen Strange', id: 'doctor-strange-char' },
    { a: 'Elizabeth Olsen', r: 'Wanda Maximoff', id: 'wanda' },
    { a: 'Xochitl Gomez', r: 'America Chavez', id: 'america-chavez' },
    { a: 'Benedict Wong', r: 'Wong', id: 'wong' },
    { a: 'Patrick Stewart', r: 'Charles Xavier (Earth-838)' }
  ],
  credits: [
    { type: 'mid', text: 'Clea (Charlize Theron) opens a portal to the Dark Dimension and tells Strange he has caused an incursion that he now has to fix.', key: true },
    { type: 'post', text: 'The pizza ball vendor is finally released from Strange\'s spell: "It\'s over."' }
  ],
  deaths: ['The entire Illuminati of Earth-838', 'Wanda Maximoff (presumed)']
},
'thor-4': {
  runtime: '118 min', rating: 'PG-13',
  prereq: 'Ragnarok and Endgame.',
  cast: [
    { a: 'Chris Hemsworth', r: 'Thor', id: 'thor-char' },
    { a: 'Natalie Portman', r: 'Jane Foster / Mighty Thor', id: 'jane-foster' },
    { a: 'Christian Bale', r: 'Gorr', id: 'gorr' },
    { a: 'Tessa Thompson', r: 'Valkyrie', id: 'valkyrie' },
    { a: 'Russell Crowe', r: 'Zeus' }
  ],
  credits: [
    { type: 'mid', text: 'Zeus sends his son Hercules (Brett Goldstein) to kill Thor in revenge for the gods.' },
    { type: 'post', text: 'Jane Foster arrives in Valhalla and is welcomed by Heimdall.' }
  ],
  deaths: ['Jane Foster', 'Gorr']
},
'wakanda-forever': {
  runtime: '161 min', rating: 'PG-13',
  prereq: 'Black Panther.',
  cast: [
    { a: 'Letitia Wright', r: 'Shuri', id: 'shuri' },
    { a: 'Tenoch Huerta Mejía', r: 'Namor', id: 'namor' },
    { a: 'Angela Bassett', r: 'Ramonda' },
    { a: 'Danai Gurira', r: 'Okoye' },
    { a: 'Dominique Thorne', r: 'Riri Williams', id: 'riri' }
  ],
  credits: [
    { type: 'post', text: "Nakia introduces Shuri to her son by T'Challa — a boy also named T'Challa.", key: true }
  ],
  deaths: ["T'Challa (died off screen)", 'Ramonda']
},

/* ================= PHASE 5 ================= */
'quantumania': {
  runtime: '124 min', rating: 'PG-13',
  prereq: 'Both Ant-Man films and Endgame. Loki season one explains who Kang is.',
  cast: [
    { a: 'Paul Rudd', r: 'Scott Lang', id: 'scott-lang' },
    { a: 'Evangeline Lilly', r: 'Hope van Dyne', id: 'hope' },
    { a: 'Jonathan Majors', r: 'Kang the Conqueror', id: 'kang' },
    { a: 'Michelle Pfeiffer', r: 'Janet van Dyne', id: 'janet' },
    { a: 'Kathryn Newton', r: 'Cassie Lang', id: 'cassie' }
  ],
  credits: [
    { type: 'mid', text: 'The Council of Kangs convenes — thousands of variants agreeing to move against the multiverse.', key: true },
    { type: 'post', text: 'Loki and Mobius watch "Victor Timely", another Kang variant, perform on stage in 1901.' }
  ],
  warning: 'Kang has since been dropped by Marvel, so these scenes no longer lead where they were meant to.'
},
'gotg-3': {
  runtime: '150 min', rating: 'PG-13',
  prereq: 'The first two Guardians films, plus Infinity War and Endgame.',
  cast: [
    { a: 'Chris Pratt', r: 'Peter Quill', id: 'star-lord' },
    { a: 'Bradley Cooper', r: 'Rocket (voice)', id: 'rocket' },
    { a: 'Karen Gillan', r: 'Nebula', id: 'nebula' },
    { a: 'Pom Klementieff', r: 'Mantis', id: 'mantis' },
    { a: 'Chukwudi Iwuji', r: 'The High Evolutionary', id: 'high-evolutionary' },
    { a: 'Will Poulter', r: 'Adam Warlock' }
  ],
  credits: [
    { type: 'mid', text: 'A new generation of Guardians assembles under Rocket.' },
    { type: 'post', text: 'A title card: "The Legendary Star-Lord will return."' }
  ],
  deaths: ["The High Evolutionary's test animals — Lylla, Teefs and Floor"]
},
'the-marvels': {
  runtime: '105 min', rating: 'PG-13',
  prereq: 'Captain Marvel, WandaVision and Ms. Marvel for the full picture.',
  cast: [
    { a: 'Brie Larson', r: 'Carol Danvers', id: 'captain-marvel-char' },
    { a: 'Teyonah Parris', r: 'Monica Rambeau', id: 'monica' },
    { a: 'Iman Vellani', r: 'Kamala Khan', id: 'kamala' },
    { a: 'Zawe Ashton', r: 'Dar-Benn' },
    { a: 'Samuel L. Jackson', r: 'Nick Fury', id: 'nick-fury' }
  ],
  credits: [
    { type: 'post', text: 'Monica wakes in a parallel universe beside Beast (Kelsey Grammer) and a variant of Charles Xavier — confirming the X-Men universe.', key: true }
  ]
},
'deadpool-wolverine': {
  runtime: '128 min', rating: 'R',
  prereq: 'Loki season one for the TVA. No knowledge of the Fox X-Men films is required, but it multiplies the jokes.',
  cast: [
    { a: 'Ryan Reynolds', r: 'Wade Wilson / Deadpool', id: 'deadpool' },
    { a: 'Hugh Jackman', r: 'Logan / Wolverine', id: 'wolverine' },
    { a: 'Emma Corrin', r: 'Cassandra Nova', id: 'cassandra-nova' },
    { a: 'Matthew Macfadyen', r: 'Mr Paradox' }
  ],
  credits: [
    { type: 'post', text: 'Deadpool plays behind-the-scenes footage from the Fox X-Men era as a send-off to that whole period.' }
  ],
  note: "The MCU's first R-rated film, with a very high density of violence and swearing."
},
'brave-new-world': {
  runtime: '118 min', rating: 'PG-13',
  prereq: 'The Falcon and the Winter Soldier. The Incredible Hulk explains The Leader, and Eternals explains the Celestial Island.',
  cast: [
    { a: 'Anthony Mackie', r: 'Sam Wilson / Captain America', id: 'sam-wilson' },
    { a: 'Harrison Ford', r: 'Thaddeus Ross / Red Hulk', id: 'ross' },
    { a: 'Tim Blake Nelson', r: 'Samuel Sterns / The Leader', id: 'the-leader' },
    { a: 'Danny Ramirez', r: 'Joaquin Torres / Falcon' },
    { a: 'Carl Lumbly', r: 'Isaiah Bradley', id: 'isaiah' }
  ],
  credits: [
    { type: 'post', text: 'From his cell, The Leader tells Sam he has seen countless futures — and that visitors from other worlds are on their way.', key: true }
  ]
},
'thunderbolts': {
  runtime: '126 min', rating: 'PG-13',
  prereq: 'Black Widow, The Falcon and the Winter Soldier and Ant-Man and the Wasp, for who these people are.',
  cast: [
    { a: 'Florence Pugh', r: 'Yelena Belova', id: 'yelena' },
    { a: 'Sebastian Stan', r: 'Bucky Barnes', id: 'bucky' },
    { a: 'David Harbour', r: 'Alexei / Red Guardian', id: 'alexei' },
    { a: 'Wyatt Russell', r: 'John Walker', id: 'john-walker' },
    { a: 'Hannah John-Kamen', r: 'Ava Starr / Ghost', id: 'ghost' },
    { a: 'Lewis Pullman', r: 'Bob / Sentry', id: 'bob-sentry' },
    { a: 'Julia Louis-Dreyfus', r: 'Valentina', id: 'valentina' }
  ],
  credits: [
    { type: 'post', text: 'Fourteen months later, the team now called the New Avengers watches the sky tear open as a ship marked "4" comes through. Straight into the Fantastic Four.', key: true }
  ],
  note: 'The asterisk in the title is formally rewritten to The New Avengers on screen.'
},
'fantastic-four': {
  runtime: '115 min', rating: 'PG-13',
  prereq: 'No MCU knowledge needed at all — it takes place in a separate universe, Earth-828.',
  cast: [
    { a: 'Pedro Pascal', r: 'Reed Richards / Mister Fantastic', id: 'reed-richards' },
    { a: 'Vanessa Kirby', r: 'Sue Storm / Invisible Woman', id: 'reed-richards' },
    { a: 'Joseph Quinn', r: 'Johnny Storm / Human Torch', id: 'reed-richards' },
    { a: 'Ebon Moss-Bachrach', r: 'Ben Grimm / The Thing', id: 'reed-richards' },
    { a: 'Ralph Ineson', r: 'Galactus', id: 'galactus' },
    { a: 'Julia Garner', r: 'Shalla-Bal / Silver Surfer', id: 'silver-surfer' }
  ],
  credits: [
    { type: 'mid', text: "Four years later, a cloaked figure holding a silver Doctor Doom mask appears beside Sue's son Franklin — Doom's entrance, and the setup for Doomsday.", key: true }
  ]
},

/* ================= PHASE 6 ================= */
'spider-man-4': {
  runtime: '145 min', rating: 'PG-13',
  prereq: 'No Way Home is required — the entire premise is the spell that erased Peter from the world.',
  cast: [
    { a: 'Tom Holland', r: 'Peter Parker / Spider-Man', id: 'peter-parker' },
    { a: 'Zendaya', r: 'MJ', id: 'mj' },
    { a: 'Jacob Batalon', r: 'Ned Leeds', id: 'ned' },
    { a: 'Mark Ruffalo', r: 'Bruce Banner / Hulk', id: 'hulk' },
    { a: 'Jon Bernthal', r: 'Frank Castle / The Punisher', id: 'punisher' },
    { a: 'Sadie Sink', r: 'Undisclosed villain', id: 'sadie-villain' },
    { a: 'Michael Mando', r: 'Mac Gargan / Scorpion', id: 'scorpion' },
    { a: 'Liza Colón-Zayas', r: 'Detective Jean DeWolff', id: 'jean-dewolff' },
    { a: 'Marvin Jones III', r: 'Tombstone', id: 'tombstone' }
  ],
  credits: [
    { type: 'post', text: 'The film closes on a Bond-style card reading "Spider-Man Will Return".' }
  ]
},
'doomsday': {
  runtime: '165 min', rating: 'TBC',
  prereq: 'Both seasons of Loki, The Fantastic Four and Thunderbolts for the full picture.',
  cast: [
    { a: 'Robert Downey Jr.', r: 'Victor von Doom / Doctor Doom', id: 'doctor-doom' },
    { a: 'Chris Evans', r: 'Steve Rogers', id: 'steve-rogers' },
    { a: 'Chris Hemsworth', r: 'Thor', id: 'thor-char' },
    { a: 'Anthony Mackie', r: 'Sam Wilson', id: 'sam-wilson' },
    { a: 'Tom Hiddleston', r: 'Loki', id: 'loki-char' },
    { a: 'Simu Liu', r: 'Shang-Chi', id: 'shang-chi-char' },
    { a: 'Paul Rudd', r: 'Scott Lang', id: 'scott-lang' },
    { a: 'Florence Pugh', r: 'Yelena Belova', id: 'yelena' },
    { a: 'Pedro Pascal', r: 'Reed Richards', id: 'reed-richards' },
    { a: 'Ian McKellen', r: 'Magneto' },
    { a: 'Patrick Stewart', r: 'Professor X' },
    { a: 'Kelsey Grammer', r: 'Beast' },
    { a: 'Letitia Wright', r: 'Shuri', id: 'shuri' },
    { a: 'Tenoch Huerta Mejía', r: 'Namor', id: 'namor' },
    { a: 'Channing Tatum', r: 'Gambit' }
  ],
  note: 'Not yet released; cast list per official announcements.'
},

/* ================= KEY SERIES ================= */
'wandavision': {
  runtime: '9 episodes, 24–48 min each', rating: 'TV-14',
  prereq: 'Age of Ultron and Infinity War — you need to know Vision is dead.',
  cast: [
    { a: 'Elizabeth Olsen', r: 'Wanda Maximoff', id: 'wanda' },
    { a: 'Paul Bettany', r: 'Vision', id: 'vision' },
    { a: 'Kathryn Hahn', r: 'Agatha Harkness', id: 'agatha-char' },
    { a: 'Teyonah Parris', r: 'Monica Rambeau', id: 'monica' }
  ],
  credits: [
    { type: 'mid', text: 'Monica is told someone wants to speak to her — a Skrull, sent by Fury from space.' },
    { type: 'post', text: 'Wanda studies the Darkhold in a mountain cabin while hearing her sons calling for her somewhere else.', key: true }
  ],
  quotes: ['What is grief, if not love persevering?']
},
'loki-s1': {
  runtime: '6 episodes, 40–55 min each', rating: 'TV-14',
  prereq: 'Endgame — this is the Loki who escaped with the Tesseract in 2012.',
  cast: [
    { a: 'Tom Hiddleston', r: 'Loki', id: 'loki-char' },
    { a: 'Owen Wilson', r: 'Mobius', id: 'mobius' },
    { a: 'Sophia Di Martino', r: 'Sylvie', id: 'sylvie' },
    { a: 'Jonathan Majors', r: 'He Who Remains', id: 'kang' },
    { a: 'Gugu Mbatha-Raw', r: 'Ravonna Renslayer' }
  ],
  credits: [
    { type: 'post', text: 'The season ends with a TVA file stamped "Loki will return in season 2".' }
  ],
  note: 'The whole Multiverse Saga begins in the last five minutes of episode six.'
},
'loki-s2': {
  runtime: '6 episodes', rating: 'TV-14',
  prereq: 'Season one is required.',
  cast: [
    { a: 'Tom Hiddleston', r: 'Loki', id: 'loki-char' },
    { a: 'Owen Wilson', r: 'Mobius', id: 'mobius' },
    { a: 'Ke Huy Quan', r: 'O.B.' },
    { a: 'Jonathan Majors', r: 'Victor Timely', id: 'kang' }
  ],
  quotes: ['I know what kind of god I need to be. For you. For all of us.']
},
'falcon-winter-soldier': {
  runtime: '6 episodes', rating: 'TV-14',
  prereq: 'Endgame — Sam receiving the shield is the starting point.',
  cast: [
    { a: 'Anthony Mackie', r: 'Sam Wilson', id: 'sam-wilson' },
    { a: 'Sebastian Stan', r: 'Bucky Barnes', id: 'bucky' },
    { a: 'Wyatt Russell', r: 'John Walker', id: 'john-walker' },
    { a: 'Daniel Brühl', r: 'Zemo', id: 'zemo' },
    { a: 'Carl Lumbly', r: 'Isaiah Bradley', id: 'isaiah' }
  ],
  credits: [
    { type: 'post', text: 'Valentina recruits John Walker and hands him a black suit — U.S. Agent.' }
  ]
},
'daredevil-born-again': {
  runtime: '9 episodes', rating: 'TV-MA',
  prereq: "Netflix's Daredevil gives the fullest picture, though the show reintroduces things for new viewers.",
  cast: [
    { a: 'Charlie Cox', r: 'Matt Murdock', id: 'daredevil-char' },
    { a: "Vincent D'Onofrio", r: 'Wilson Fisk', id: 'kingpin' },
    { a: 'Jon Bernthal', r: 'Frank Castle / The Punisher', id: 'punisher' }
  ],
  note: 'TV-MA. The Punisher returns here before his big-screen debut in Spider-Man 4.'
},
'agatha': {
  runtime: '9 episodes', rating: 'TV-14',
  prereq: 'WandaVision is required.',
  cast: [
    { a: 'Kathryn Hahn', r: 'Agatha Harkness', id: 'agatha-char' },
    { a: 'Joe Locke', r: 'Billy Maximoff / Wiccan', id: 'billy' },
    { a: 'Aubrey Plaza', r: 'Rio Vidal' }
  ],
  credits: [
    { type: 'post', text: 'Billy begins searching for his lost twin brother Tommy.', key: true }
  ]
},
'hawkeye': {
  runtime: '6 episodes', rating: 'TV-14',
  prereq: "Endgame — Clint's guilt comes from Natasha's death.",
  cast: [
    { a: 'Jeremy Renner', r: 'Clint Barton', id: 'hawkeye-char' },
    { a: 'Hailee Steinfeld', r: 'Kate Bishop', id: 'kate-bishop' },
    { a: 'Alaqua Cox', r: 'Maya Lopez / Echo', id: 'echo-char' },
    { a: 'Florence Pugh', r: 'Yelena Belova', id: 'yelena' },
    { a: "Vincent D'Onofrio", r: 'Wilson Fisk', id: 'kingpin' }
  ]
},
'ms-marvel': {
  runtime: '6 episodes', rating: 'TV-14',
  prereq: 'None.',
  cast: [
    { a: 'Iman Vellani', r: 'Kamala Khan', id: 'kamala' }
  ],
  credits: [
    { type: 'post', text: "Kamala's bangle flares and she vanishes, with Carol Danvers appearing in her bedroom — straight into The Marvels.", key: true }
  ]
},
'daredevil-netflix': {
  runtime: '3 seasons, 39 episodes', rating: 'TV-MA',
  prereq: 'None; entirely self-contained.',
  cast: [
    { a: 'Charlie Cox', r: 'Matt Murdock', id: 'daredevil-char' },
    { a: "Vincent D'Onofrio", r: 'Wilson Fisk', id: 'kingpin' },
    { a: 'Jon Bernthal', r: 'Frank Castle (season 2)', id: 'punisher' },
    { a: 'Elden Henson', r: 'Foggy Nelson' },
    { a: 'Deborah Ann Woll', r: 'Karen Page' }
  ],
  note: 'TV-MA, and much more violent than the films. The season one corridor fight is one of the most celebrated action sequences on television.'
},
'punisher-netflix': {
  runtime: '2 seasons, 26 episodes', rating: 'TV-MA',
  prereq: "Daredevil season two, where Frank Castle first appears.",
  cast: [
    { a: 'Jon Bernthal', r: 'Frank Castle', id: 'punisher' }
  ],
  note: 'TV-MA, and extremely violent.'
},

/* ================= SONY SPIDER-MAN ================= */
'raimi-1': {
  runtime: '121 min', rating: 'PG-13',
  prereq: 'Entirely standalone; not part of the MCU.',
  cast: [
    { a: 'Tobey Maguire', r: 'Peter Parker', id: 'peter-two' },
    { a: 'Willem Dafoe', r: 'Norman Osborn / Green Goblin', id: 'green-goblin' },
    { a: 'Kirsten Dunst', r: 'Mary Jane Watson' },
    { a: 'James Franco', r: 'Harry Osborn', id: 'harry' },
    { a: 'Cliff Robertson', r: 'Uncle Ben', id: 'uncle-ben' }
  ],
  quotes: ['With great power comes great responsibility.'],
  deaths: ['Uncle Ben', 'Norman Osborn']
},
'raimi-2': {
  runtime: '127 min', rating: 'PG-13',
  prereq: 'The first film.',
  cast: [
    { a: 'Tobey Maguire', r: 'Peter Parker', id: 'peter-two' },
    { a: 'Alfred Molina', r: 'Otto Octavius / Doc Ock', id: 'doc-ock' },
    { a: 'Kirsten Dunst', r: 'Mary Jane Watson' }
  ],
  deaths: ['Otto Octavius']
},
'raimi-3': {
  runtime: '139 min', rating: 'PG-13',
  prereq: 'The first two films.',
  cast: [
    { a: 'Tobey Maguire', r: 'Peter Parker', id: 'peter-two' },
    { a: 'Thomas Haden Church', r: 'Flint Marko / Sandman', id: 'sandman' },
    { a: 'Topher Grace', r: 'Eddie Brock / Venom', id: 'venom' },
    { a: 'James Franco', r: 'Harry Osborn', id: 'harry' }
  ],
  deaths: ['Harry Osborn', 'Eddie Brock']
},
'webb-1': {
  runtime: '136 min', rating: 'PG-13',
  prereq: 'A standalone reboot.',
  cast: [
    { a: 'Andrew Garfield', r: 'Peter Parker', id: 'peter-three' },
    { a: 'Emma Stone', r: 'Gwen Stacy', id: 'gwen' },
    { a: 'Rhys Ifans', r: 'Curt Connors / The Lizard', id: 'lizard' }
  ]
},
'webb-2': {
  runtime: '142 min', rating: 'PG-13',
  prereq: 'The first film.',
  cast: [
    { a: 'Andrew Garfield', r: 'Peter Parker', id: 'peter-three' },
    { a: 'Emma Stone', r: 'Gwen Stacy', id: 'gwen' },
    { a: 'Jamie Foxx', r: 'Max Dillon / Electro', id: 'electro' },
    { a: 'Dane DeHaan', r: 'Harry Osborn', id: 'harry' }
  ],
  deaths: ['Gwen Stacy']
}

};
