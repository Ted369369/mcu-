/* ============================================================
   Characters (part 2) — the rest of the MCU roster
   ============================================================ */

window.MCU_CHARACTERS_2 = [

/* ================= THE ANT-MAN FAMILY ================= */
{
  id: 'scott-lang', name: 'Scott Lang / Ant-Man', en: 'Scott Lang / Ant-Man',
  actor: 'Paul Rudd', group: 'avengers', role: 'hero',
  glyph: 'ant', accent: ['#0891b2', '#b45309'],
  tagline: 'The ex-convict who saves the universe.',
  bio: 'An electrical engineer jailed for whistleblowing who ends up wearing the Ant-Man suit. He is not the strongest Avenger, but Endgame does not happen without him.',
  facts: [
    'The Ant-Man and the Wasp tag scene strands him in the Quantum Realm, so he misses the Snap entirely.',
    'Five years later a rat frees him by accident, and he brings out the one fact that makes time travel possible.'
  ],
  arc: [
    { entry: 'ant-man', text: 'Recruited by Hank Pym, he shrinks past the limit into the Quantum Realm and gets back — proving the trip is survivable.', highlight: true },
    { entry: 'civil-war', text: 'Brought in by Falcon for the airport fight, where he becomes a giant for the first time.' },
    { entry: 'ant-man-2', text: 'Under house arrest, then stranded in the Quantum Realm when the other three turn to dust.', highlight: true },
    { entry: 'endgame', text: 'Released five years later, and hands the Avengers the theory that wins.', highlight: true },
    { entry: 'quantumania', text: 'The whole family is pulled back into the Quantum Realm to face Kang.' },
    { entry: 'doomsday', text: 'Confirmed to return.' }
  ],
  appears: ['ant-man', 'civil-war', 'ant-man-2', 'endgame', 'quantumania', 'doomsday']
},
{
  id: 'hope', name: 'Hope van Dyne / Wasp', en: 'Hope van Dyne / Wasp',
  actor: 'Evangeline Lilly', group: 'avengers', role: 'hero',
  glyph: 'ant', accent: ['#f0b429', '#111827'],
  tagline: 'Always the better candidate for the suit.',
  bio: "Hank Pym and Janet van Dyne's daughter. She trains Scott through the first film and finally gets her own suit in the second.",
  arc: [
    { entry: 'ant-man', text: 'Trains Scott while making clear she should be the one wearing it.' },
    { entry: 'ant-man-2', text: 'Becomes the Wasp and searches for her mother. Turns to dust in the tag scene.' },
    { entry: 'endgame', text: 'Restored, and fights in the final battle.' },
    { entry: 'quantumania', text: 'Faces Kang in the Quantum Realm.' }
  ],
  appears: ['ant-man', 'ant-man-2', 'endgame', 'quantumania']
},
{
  id: 'hank-pym', name: 'Hank Pym', en: 'Hank Pym',
  actor: 'Michael Douglas', group: 'avengers', role: 'ally',
  glyph: 'ant', accent: ['#475569', '#0891b2'],
  tagline: 'The original Ant-Man and inventor of the Pym Particle.',
  bio: 'A Cold War S.H.I.E.L.D. scientist who invented the particles that change an object\'s size, and locked the technology away for decades after losing his wife.',
  arc: [
    { entry: 'ant-man', text: 'Picks Scott as a successor to stop his protégé weaponising the technology.' },
    { entry: 'ant-man-2', text: 'Builds a quantum tunnel to find Janet after thirty years. Turns to dust in the tag scene.' },
    { entry: 'quantumania', text: 'Finally sees the realm he spent his life theorising about.' }
  ],
  appears: ['ant-man', 'ant-man-2', 'endgame', 'quantumania']
},
{
  id: 'janet', name: 'Janet van Dyne', en: 'Janet van Dyne',
  actor: 'Michelle Pfeiffer', group: 'avengers', role: 'ally',
  glyph: 'ant', accent: ['#be123c', '#4c1d95'],
  tagline: 'Thirty years in the Quantum Realm.',
  bio: 'The original Wasp, who shrank without limit in 1987 to stop a missile and was lost in the Quantum Realm for three decades.',
  facts: ['She met Kang down there, knows exactly how dangerous he is, and spent years refusing to talk about it.'],
  arc: [
    { entry: 'ant-man', text: 'In flashback: she goes subatomic to stop a missile and disappears.' },
    { entry: 'ant-man-2', text: 'Recovered at last, and warns that some things in the Quantum Realm should be left alone.' },
    { entry: 'quantumania', text: 'Her secret comes out — she worked with the exiled Kang down there and saw what he is.' }
  ],
  appears: ['ant-man-2', 'quantumania']
},
{
  id: 'cassie', name: 'Cassie Lang', en: 'Cassie Lang',
  actor: 'Kathryn Newton', group: 'newgen', role: 'hero',
  glyph: 'ant', accent: ['#0891b2', '#be123c'],
  tagline: "Scott's daughter, and the next size-changer.",
  bio: "Scott Lang's daughter, who grew up during the five years he was gone and became an activist and engineer in her own right.",
  arc: [
    { entry: 'ant-man', text: 'Introduced as a child — the reason Scott wants to go straight.' },
    { entry: 'quantumania', text: 'Her quantum signalling device pulls the family in, and she gets a suit of her own.' },
    { entry: 'doomsday', text: 'Confirmed to return.' }
  ],
  appears: ['ant-man', 'quantumania', 'doomsday']
},

/* ================= MAGIC AND THE MYSTIC ================= */
{
  id: 'wong', name: 'Wong', en: 'Wong',
  actor: 'Benedict Wong', group: 'avengers', role: 'ally',
  glyph: 'eye', accent: ['#b45309', '#0d9488'],
  tagline: 'The current Sorcerer Supreme, and a very busy man.',
  bio: 'Librarian of Kamar-Taj, who became Sorcerer Supreme while Strange was dusted for five years. One of the most-travelled supporting characters in the MCU.',
  arc: [
    { entry: 'doctor-strange', text: 'Keeper of the library, and eventually a friend rather than a minder.' },
    { entry: 'infinity-war', text: 'Defends the New York Sanctum.' },
    { entry: 'endgame', text: 'Brings the sorcerers and the portals that turn the final battle.' },
    { entry: 'shang-chi', text: 'Investigates the origin of the Ten Rings.' },
    { entry: 'no-way-home', text: 'Warns Strange not to cast the spell, then sensibly leaves.' },
    { entry: 'she-hulk', text: 'Testifies in court and quietly removes Blonsky from his retreat.' },
    { entry: 'multiverse-of-madness', text: 'Fights alongside Strange against a corrupted Wanda.' }
  ],
  appears: ['doctor-strange', 'infinity-war', 'endgame', 'shang-chi', 'no-way-home', 'multiverse-of-madness', 'she-hulk']
},
{
  id: 'ancient-one', name: 'The Ancient One', en: 'The Ancient One',
  actor: 'Tilda Swinton', group: 'avengers', role: 'ally',
  glyph: 'eye', accent: ['#f0b429', '#0d9488'],
  tagline: 'Teaches Strange — and breaks her own rules.',
  bio: 'The Sorcerer Supreme before Strange, centuries old, who forbade drawing on the Dark Dimension while quietly using it to extend her own life.',
  arc: [
    { entry: 'doctor-strange', text: 'Takes Strange as a student and admits, dying, that she broke the same rule: "We never lose our demons. We only learn to live above them."' },
    { entry: 'endgame', text: 'Her 2012 self hands Banner the Time Stone and explains that removing a Stone creates a branch — which is the rule the whole Time Heist runs on.', highlight: true }
  ],
  appears: ['doctor-strange', 'endgame']
},
{
  id: 'agatha-char', name: 'Agatha Harkness', en: 'Agatha Harkness',
  actor: 'Kathryn Hahn', group: 'newgen', role: 'villain',
  glyph: 'hex', accent: ['#7e22ce', '#166534'],
  tagline: '"Agatha all along."',
  bio: 'A witch several centuries old who survives by draining other witches, and who hid among the residents of Westview to get at Wanda\'s chaos magic.',
  arc: [
    { entry: 'wandavision', text: 'Poses as neighbour Agnes, reveals herself as the one pulling threads, and names Wanda as the Scarlet Witch. Wanda seals her mind.', highlight: true },
    { entry: 'agatha', text: 'Three years on she comes back to herself and walks the Witches\' Road to reclaim her power.' }
  ],
  appears: ['wandavision', 'agatha']
},
{
  id: 'billy', name: 'Billy Maximoff / Wiccan', en: 'Billy Maximoff / Wiccan',
  actor: 'Joe Locke', group: 'newgen', role: 'hero',
  glyph: 'hex', accent: ['#be123c', '#0891b2'],
  tagline: "Wanda's conjured son — who turns out to be real.",
  bio: 'One of the twins Wanda created inside the Westview illusion. When it collapsed his soul found another dying boy, and he grew up as the sorcerer Wiccan.',
  arc: [
    { entry: 'wandavision', text: 'Created by Wanda\'s magic alongside his twin Tommy, and says goodbye to her as the illusion falls.' },
    { entry: 'multiverse-of-madness', text: 'The version of him in another universe is what Wanda tears the multiverse apart to reach.' },
    { entry: 'agatha', text: 'Revealed as the boy with the sealed name — he genuinely exists in the MCU, and is now looking for Tommy.', highlight: true }
  ],
  appears: ['wandavision', 'agatha']
},
{
  id: 'moon-knight-char', name: 'Marc Spector / Moon Knight', en: 'Marc Spector / Moon Knight',
  actor: 'Oscar Isaac', group: 'newgen', role: 'antihero',
  glyph: 'eye', accent: ['#e5e7eb', '#1e293b'],
  tagline: 'One body, three identities, one moon god.',
  bio: 'A mercenary who made a pact with the Egyptian god Khonshu while dying and became his avatar. He has dissociative identity disorder, sharing his body with Steven Grant and Jake Lockley.',
  arc: [
    { entry: 'moon-knight', text: 'Fighting the Ammit cult forces him to face his childhood and the origin of his condition.' }
  ],
  appears: ['moon-knight']
},

/* ================= STREET LEVEL ================= */
{
  id: 'daredevil-char', name: 'Matt Murdock / Daredevil', en: 'Matt Murdock / Daredevil',
  actor: 'Charlie Cox', group: 'street', role: 'hero',
  glyph: 'skull', accent: ['#7f1d1d', '#111827'], pin: true,
  tagline: 'The Man Without Fear — lawyer by day, vigilante by night.',
  bio: 'Blinded by a chemical spill as a boy, with every other sense heightened past human limits. A devout Catholic, which means his violence always comes with guilt attached.',
  facts: [
    "Netflix's Daredevil (2015–2018) is now on the official MCU timeline.",
    'He will not kill — the line that puts him permanently at odds with the Punisher.'
  ],
  arc: [
    { entry: 'daredevil-netflix', text: 'Three seasons against Wilson Fisk and the Hand, ending with his faith broken and rebuilt.' },
    { entry: 'defenders', text: 'Teams with Jessica Jones, Luke Cage and Iron Fist against the Hand.' },
    { entry: 'no-way-home', text: 'Appears briefly as Peter\'s lawyer, catching a thrown brick: "I\'m a really good lawyer."', highlight: true },
    { entry: 'she-hulk', text: 'Turns up in the yellow-and-red suit and leaves the next morning.' },
    { entry: 'echo', text: 'Crosses paths with Maya in New York.' },
    { entry: 'daredevil-born-again', text: 'Hangs up the suit for the law, and finds Fisk running for mayor. Their manoeuvring is tenser than any fight.', highlight: true }
  ],
  appears: ['daredevil-netflix', 'defenders', 'no-way-home', 'she-hulk', 'echo', 'daredevil-born-again', 'dd-born-again-s2']
},
{
  id: 'kingpin', name: 'Wilson Fisk / Kingpin', en: 'Wilson Fisk / Kingpin',
  actor: "Vincent D'Onofrio", group: 'street', role: 'villain',
  glyph: 'tombstone', accent: ['#e5e7eb', '#111827'], pin: true,
  tagline: 'One of the best villains Marvel has put on screen.',
  bio: 'The crime lord of New York — enormously violent and painfully fragile at once, and entirely convinced he is saving the city.',
  arc: [
    { entry: 'daredevil-netflix', text: 'The main antagonist, moving from silent financier to open crime lord across three seasons.' },
    { entry: 'hawkeye', text: "Revealed as Maya Lopez's adoptive father and the power behind the series.", highlight: true },
    { entry: 'echo', text: 'His relationship with Maya comes to a head.' },
    { entry: 'daredevil-born-again', text: 'Launders himself into politics and is elected mayor — doing what he always did, with the law behind him.', highlight: true }
  ],
  appears: ['daredevil-netflix', 'hawkeye', 'echo', 'daredevil-born-again', 'dd-born-again-s2']
},
{
  id: 'jessica-char', name: 'Jessica Jones', en: 'Jessica Jones',
  actor: 'Krysten Ritter', group: 'street', role: 'antihero',
  glyph: 'widow', accent: ['#4c1d95', '#111827'],
  tagline: 'A survivor holding herself together with whisky.',
  bio: 'A private investigator with superhuman strength who was held and abused under the mind control of a man called Kilgrave. Her story is about recovery, not crime-fighting.',
  arc: [
    { entry: 'jessica-jones', text: 'Kilgrave resurfaces, and the season becomes a study of trauma, consent and the psychology of an abuser.' },
    { entry: 'defenders', text: 'Dragged into the Hand conspiracy with the other three.' }
  ],
  appears: ['jessica-jones', 'defenders']
},
{
  id: 'luke-cage-char', name: 'Luke Cage', en: 'Luke Cage',
  actor: 'Mike Colter', group: 'street', role: 'hero',
  glyph: 'fist', accent: ['#a16207', '#111827'],
  tagline: 'The bulletproof man of Harlem.',
  bio: 'Wrongly imprisoned and given unbreakable skin by a prison experiment. He does not want to be a hero; Harlem needs one anyway.',
  arc: [
    { entry: 'luke-cage', text: 'Takes on Cottonmouth and Mariah Dillard and becomes the neighbourhood\'s protector.' },
    { entry: 'defenders', text: 'Joins the other three against the Hand.' }
  ],
  appears: ['luke-cage', 'defenders']
},
{
  id: 'iron-fist-char', name: 'Danny Rand / Iron Fist', en: 'Danny Rand / Iron Fist',
  actor: 'Finn Jones', group: 'street', role: 'hero',
  glyph: 'fist', accent: ['#166534', '#f0b429'],
  tagline: "The Immortal Iron Fist of K'un-Lun.",
  bio: "A billionaire's son raised in a mystical city after a plane crash, able to focus his chi into his fist.",
  arc: [
    { entry: 'iron-fist', text: 'Returns to New York to reclaim his company and fight the Hand.' },
    { entry: 'defenders', text: 'He is what the Hand actually wants — the key to the door beneath the city.' }
  ],
  appears: ['iron-fist', 'defenders']
},
{
  id: 'kate-bishop', name: 'Kate Bishop', en: 'Kate Bishop',
  actor: 'Hailee Steinfeld', group: 'newgen', role: 'hero',
  glyph: 'arrow', accent: ['#7c3aed', '#b45309'],
  tagline: '"The world\'s greatest archer" — her words.',
  bio: 'A wealthy 22-year-old who watched Hawkeye fight during the Battle of New York as a child and has been training ever since.',
  arc: [
    { entry: 'hawkeye', text: 'Puts on the Ronin suit, drags Clint into her mess, and earns his respect as a partner.' }
  ],
  appears: ['hawkeye']
},
{
  id: 'echo-char', name: 'Maya Lopez / Echo', en: 'Maya Lopez / Echo',
  actor: 'Alaqua Cox', group: 'newgen', role: 'antihero',
  glyph: 'arrow', accent: ['#b91c1c', '#78350f'],
  tagline: "The MCU's first deaf Indigenous lead.",
  bio: 'A deaf Choctaw woman who can perfectly replicate any movement she sees, raised and used by Kingpin.',
  arc: [
    { entry: 'hawkeye', text: 'Hunts the man in the Ronin suit for killing her father, not knowing Kingpin has been lying to her.' },
    { entry: 'echo', text: 'Returns to Oklahoma, connects to her ancestors\' power, and confronts her adoptive father.' }
  ],
  appears: ['hawkeye', 'echo']
},
{
  id: 'she-hulk-char', name: 'Jennifer Walters / She-Hulk', en: 'Jennifer Walters / She-Hulk',
  actor: 'Tatiana Maslany', group: 'newgen', role: 'hero',
  glyph: 'fist', accent: ['#15803d', '#7c3aed'],
  tagline: 'A lawyer who talks directly to you.',
  bio: "Bruce Banner's cousin, given Hulk powers by his blood in a car accident — and able to keep her mind entirely.",
  arc: [
    { entry: 'she-hulk', text: 'Runs the superhuman law division, and in the finale walks out of the streaming menu to argue with the studio about her own ending.', highlight: true }
  ],
  appears: ['she-hulk']
},

/* ================= TEN RINGS AND COSMIC ================= */
{
  id: 'shang-chi-char', name: 'Shang-Chi', en: 'Shang-Chi',
  actor: 'Simu Liu', group: 'avengers', role: 'hero',
  glyph: 'rings', accent: ['#b45309', '#065f46'],
  tagline: 'A son raised to be an assassin.',
  bio: "Xu Wenwu's son, trained from childhood as a killer. After his mother's death he fled to San Francisco and parked cars until his father came for him.",
  arc: [
    { entry: 'shang-chi', text: 'Confronts his father, inherits the ten rings, and stops the Dweller-in-Darkness at Ta Lo.' },
    { entry: 'doomsday', text: 'Confirmed to return.' }
  ],
  appears: ['shang-chi', 'doomsday']
},
{
  id: 'wenwu', name: 'Xu Wenwu', en: 'Xu Wenwu',
  actor: 'Tony Leung', group: 'bigbad', role: 'villain',
  glyph: 'rings', accent: ['#7f1d1d', '#b45309'],
  tagline: 'A father who has lived a thousand years.',
  bio: 'The bearer of the ten rings, kept alive for a millennium by them, and warped by grief into believing his dead wife is imprisoned in Ta Lo.',
  arc: [
    { entry: 'shang-chi', text: 'Leads an army against Ta Lo to "rescue" his wife, manipulated by the Dweller-in-Darkness, and dies passing the rings to his son.', highlight: true }
  ],
  appears: ['shang-chi']
},
{
  id: 'nebula', name: 'Nebula', en: 'Nebula',
  actor: 'Karen Gillan', group: 'cosmic', role: 'hero',
  glyph: 'starburst', accent: ['#0891b2', '#4c1d95'],
  tagline: 'Rebuilt piece by piece as punishment.',
  bio: "Thanos's adopted daughter and Gamora's sister. Every time she lost to Gamora, Thanos replaced another part of her with machinery.",
  arc: [
    { entry: 'gotg-1', text: 'Serves Ronan, and fights her sister.' },
    { entry: 'gotg-2', text: 'Tells Gamora the truth: "I just wanted a sister."', highlight: true },
    { entry: 'infinity-war', text: 'Taken apart and interrogated, which gives Thanos the Soul Stone.' },
    { entry: 'endgame', text: 'Central to the plot: her memories are read by her 2014 self, tipping Thanos off — and she ends up killing her own past self.', highlight: true },
    { entry: 'gotg-3', text: 'The most dependable member of the team, staying behind to build Knowhere.' }
  ],
  appears: ['gotg-1', 'gotg-2', 'infinity-war', 'endgame', 'gotg-3']
},
{
  id: 'mantis', name: 'Mantis', en: 'Mantis',
  actor: 'Pom Klementieff', group: 'cosmic', role: 'hero',
  glyph: 'starburst', accent: ['#166534', '#be123c'],
  tagline: "Star-Lord's half-sister.",
  bio: 'An empath who can read and alter emotions by touch, originally kept by Ego to help him sleep.',
  arc: [
    { entry: 'gotg-2', text: 'Joins the team, and putting Ego to sleep is what makes the win possible.' },
    { entry: 'infinity-war', text: 'Holds Thanos under on Titan — it very nearly works.' },
    { entry: 'gotg-holiday', text: 'Reveals she is Ego\'s daughter, and therefore Peter\'s sister.', highlight: true },
    { entry: 'gotg-3', text: 'Leaves the team to go and find out what she actually wants.' }
  ],
  appears: ['gotg-2', 'infinity-war', 'endgame', 'gotg-holiday', 'gotg-3']
},
{
  id: 'namor', name: 'Namor', en: 'Namor',
  actor: 'Tenoch Huerta Mejía', group: 'bigbad', role: 'antihero',
  glyph: 'celestial', accent: ['#0e7490', '#166534'],
  tagline: 'Ruler of Talokan.',
  bio: 'Centuries old, ruling an undersea kingdom founded by people who fled Spanish colonisers. He remembers exactly what colonisation cost.',
  arc: [
    { entry: 'wakanda-forever', text: 'Strikes at Wakanda pre-emptively rather than wait for the surface powers to come for his vibranium. He is protecting his people, not conquering.', highlight: true },
    { entry: 'doomsday', text: 'Confirmed to return.' }
  ],
  appears: ['wakanda-forever', 'doomsday']
},

/* ================= AVENGERS SUPPORTING CAST ================= */
{
  id: 'rhodey', name: 'James Rhodes / War Machine', en: 'James Rhodes / War Machine',
  actor: 'Don Cheadle', group: 'avengers', role: 'hero',
  glyph: 'arc', accent: ['#475569', '#b91c1c'],
  tagline: "Tony's only real old friend.",
  bio: 'An Air Force colonel and Tony Stark\'s closest friend, who takes a militarised suit and becomes War Machine.',
  arc: [
    { entry: 'iron-man-2', text: 'Takes the Mark II and becomes War Machine.' },
    { entry: 'civil-war', text: 'Sides with Tony, and is accidentally shot down by Vision — leaving him paralysed from the waist down.', highlight: true },
    { entry: 'infinity-war', text: 'Walking again with an exoskeleton, he fights in Wakanda.' },
    { entry: 'endgame', text: 'Joins the Time Heist and the final battle, and stands at Tony\'s funeral.' },
    { entry: 'secret-invasion', text: 'Revealed to have been replaced by a Skrull for some time.' }
  ],
  appears: ['iron-man-2', 'iron-man-3', 'civil-war', 'infinity-war', 'endgame', 'secret-invasion']
},
{
  id: 'pepper', name: 'Pepper Potts', en: 'Pepper Potts',
  actor: 'Gwyneth Paltrow', group: 'avengers', role: 'ally',
  glyph: 'heart', accent: ['#be123c', '#f0b429'],
  tagline: "Tony's partner, and CEO of Stark Industries.",
  bio: 'From personal assistant to chief executive to Tony\'s wife. In Endgame she puts on the Rescue armour and fights.',
  arc: [
    { entry: 'iron-man', text: 'His assistant, and the person who changes the reactor in his chest.' },
    { entry: 'iron-man-3', text: 'Injected with Extremis, and the one who finally kills Killian.' },
    { entry: 'endgame', text: 'She and Tony have a daughter, Morgan. She suits up for the final battle and tells him, at the end, that he can rest.', highlight: true }
  ],
  appears: ['iron-man', 'iron-man-2', 'iron-man-3', 'civil-war', 'infinity-war', 'endgame']
},
{
  id: 'jane-foster', name: 'Jane Foster', en: 'Jane Foster',
  actor: 'Natalie Portman', group: 'avengers', role: 'ally',
  glyph: 'hammer', accent: ['#db2777', '#1d4ed8'],
  tagline: 'An astrophysicist who becomes the Mighty Thor.',
  bio: 'The scientist Thor meets on Earth. Years later, dying of cancer, she is chosen by a reforged Mjolnir.',
  arc: [
    { entry: 'thor', text: 'Finds Thor in the New Mexico desert.' },
    { entry: 'thor-2', text: 'The Aether infects her, making her the target of the Dark Elves.' },
    { entry: 'thor-4', text: 'Terminally ill, she is chosen by Mjolnir. Every transformation accelerates the cancer; she lifts it one last time anyway and dies in his arms.', highlight: true }
  ],
  appears: ['thor', 'thor-2', 'thor-4']
},
{
  id: 'valkyrie', name: 'Valkyrie', en: 'Valkyrie',
  actor: 'Tessa Thompson', group: 'avengers', role: 'hero',
  glyph: 'hammer', accent: ['#1d4ed8', '#b45309'],
  tagline: 'King of New Asgard.',
  bio: 'The last of the Valkyrior, whose entire order was destroyed by Hela. She drank her way through the centuries on Sakaar until Thor arrived.',
  arc: [
    { entry: 'thor-3', text: 'Sells Thor to the Grandmaster, then turns around and goes back to face Hela.' },
    { entry: 'endgame', text: 'Leads the Asgardians into the final battle. Thor leaves New Asgard to her.', highlight: true },
    { entry: 'thor-4', text: 'Rules New Asgard and fights Gorr.' }
  ],
  appears: ['thor-3', 'endgame', 'thor-4']
},
{
  id: 'isaiah', name: 'Isaiah Bradley', en: 'Isaiah Bradley',
  actor: 'Carl Lumbly', group: 'avengers', role: 'ally',
  glyph: 'shield', accent: ['#111827', '#b91c1c'],
  tagline: 'The Black Captain America erased from the record.',
  bio: 'A Korean War soldier given the super-soldier serum, then imprisoned and experimented on for thirty years and removed from every official history.',
  facts: ['He is the heaviest thing in The Falcon and the Winter Soldier — Sam cannot take the shield without answering for him.'],
  arc: [
    { entry: 'falcon-winter-soldier', text: 'Tells Sam what was done to him and refuses the shield outright: they will never let a Black man be Captain America. Sam eventually has him recognised in the Smithsonian.', highlight: true },
    { entry: 'brave-new-world', text: 'Framed for an assassination attempt and arrested, which starts Sam\'s investigation.' }
  ],
  appears: ['falcon-winter-soldier', 'brave-new-world']
},
{
  id: 'mobius', name: 'Mobius M. Mobius', en: 'Mobius M. Mobius',
  actor: 'Owen Wilson', group: 'newgen', role: 'ally',
  glyph: 'tva', accent: ['#b45309', '#166534'],
  tagline: "A TVA analyst, and Loki's only friend.",
  bio: 'The agent who recruits Loki, and himself a variant with his memory wiped like everyone else at the TVA.',
  arc: [
    { entry: 'loki-s1', text: 'Recruits Loki, and moves from believing in the TVA to doubting all of it.' },
    { entry: 'loki-s2', text: 'Stays with him to the end, and is the only person who understands what Loki gives up.', highlight: true }
  ],
  appears: ['loki-s1', 'loki-s2']
},
{
  id: 'alexei', name: 'Alexei Shostakov / Red Guardian', en: 'Alexei Shostakov / Red Guardian',
  actor: 'David Harbour', group: 'newgen', role: 'antihero',
  glyph: 'shield', accent: ['#b91c1c', '#166534'],
  tagline: "The Soviet Captain America, who badly wants a rematch.",
  bio: 'A Soviet super-soldier who played father to Natasha and Yelena during an undercover posting. Vain and impossible, but the affection was real.',
  arc: [
    { entry: 'black-widow', text: 'Broken out of prison by his two "daughters", boasting the whole way, until he admits what he owes them.' },
    { entry: 'thunderbolts', text: 'The comic relief and emotional glue of the team.' },
    { entry: 'doomsday', text: 'Confirmed to return.' }
  ],
  appears: ['black-widow', 'thunderbolts', 'doomsday']
},
{
  id: 'ghost', name: 'Ava Starr / Ghost', en: 'Ghost / Ava Starr',
  actor: 'Hannah John-Kamen', group: 'newgen', role: 'antihero',
  glyph: 'question', accent: ['#0891b2', '#e5e7eb'],
  tagline: 'In constant pain from phasing.',
  bio: 'A quantum accident in childhood left her body phasing uncontrollably through matter, in permanent agony. Not evil — out of options.',
  arc: [
    { entry: 'ant-man-2', text: 'Chases Janet\'s quantum energy to stay alive, and is treated rather than killed.' },
    { entry: 'thunderbolts', text: 'Joins the antihero team and becomes a New Avenger.' },
    { entry: 'doomsday', text: 'Confirmed to return.' }
  ],
  appears: ['ant-man-2', 'thunderbolts', 'doomsday']
},
{
  id: 'howard-stark', name: 'Howard Stark', en: 'Howard Stark',
  actor: 'John Slattery / Dominic Cooper', group: 'avengers', role: 'ally',
  glyph: 'arc', accent: ['#b45309', '#1e40af'],
  tagline: "Tony's father and a founder of S.H.I.E.L.D.",
  bio: 'An inventor and industrialist who worked on the super-soldier programme, built the shield, and co-founded S.H.I.E.L.D. with Peggy Carter.',
  arc: [
    { entry: 'captain-america', text: 'Works on the serum project and builds the vibranium shield.' },
    { entry: 'agent-carter-oneshot', text: 'Calls to tell Peggy they are founding S.H.I.E.L.D. together.' },
    { entry: 'iron-man-2', text: 'In an old recording, he leaves Tony the clue to a new element.' },
    { entry: 'civil-war', text: 'The reveal that he and his wife were murdered in 1991 by a brainwashed Bucky is what ends the Avengers.', highlight: true },
    { entry: 'endgame', text: 'Tony meets his father in 1970 and gets the conversation he never had.', highlight: true }
  ],
  appears: ['captain-america', 'iron-man-2', 'agent-carter-oneshot', 'civil-war', 'endgame', 'agent-carter-tv']
},
{
  id: 'coulson', name: 'Phil Coulson', en: 'Phil Coulson',
  actor: 'Clark Gregg', group: 'avengers', role: 'ally',
  glyph: 'badge', accent: ['#0f172a', '#b91c1c'],
  tagline: 'The man who held the early team together.',
  bio: 'The S.H.I.E.L.D. agent who links the early films, and whose death is what finally makes the Avengers work as a team.',
  arc: [
    { entry: 'iron-man', text: 'First appearance, as S.H.I.E.L.D.\'s contact with Tony.' },
    { entry: 'thors-hammer', text: 'Disarms two robbers at a petrol station without breaking stride.' },
    { entry: 'the-consultant', text: 'Plans, with Sitwell, to send Tony to sabotage the Abomination negotiation.' },
    { entry: 'avengers-1', text: 'Killed by Loki. Fury uses his bloodstained trading cards to force the team together.', highlight: true },
    { entry: 'agents-of-shield', text: 'Secretly revived to run a small team handling strange cases (canon status unclear).' }
  ],
  appears: ['iron-man', 'iron-man-2', 'thor', 'avengers-1', 'the-consultant', 'thors-hammer', 'agents-of-shield']
},

/* ================= MORE VILLAINS ================= */
{
  id: 'killmonger', name: 'Erik Killmonger', en: 'Erik Killmonger',
  actor: 'Michael B. Jordan', group: 'bigbad', role: 'villain',
  glyph: 'panther', accent: ['#7f1d1d', '#4c1d95'],
  tagline: 'One of the most justified villains Marvel has written.',
  bio: "T'Challa's cousin, abandoned in Oakland as a child after the king killed his father. He does not want the throne for himself — he wants the country that left him to answer for it.",
  facts: ['"Bury me in the ocean with my ancestors who jumped from ships, because they knew death was better than bondage."'],
  arc: [
    { entry: 'black-panther', text: "Beats T'Challa for the throne and moves to arm oppressed people worldwide with vibranium. The legitimacy of his grievance is what makes him work.", highlight: true }
  ],
  appears: ['black-panther']
},
{
  id: 'hela', name: 'Hela', en: 'Hela',
  actor: 'Cate Blanchett', group: 'bigbad', role: 'villain',
  glyph: 'hammer', accent: ['#166534', '#111827'],
  tagline: "Odin's erased firstborn.",
  bio: "The goddess of death, and Odin's executioner during the conquests he later wrote out of Asgard's history. Sealed away for millennia.",
  arc: [
    { entry: 'thor-3', text: 'Crushes Mjolnir barehanded, takes Asgard and destroys the Valkyrior — and is killed only by Thor destroying the realm itself.', highlight: true }
  ],
  appears: ['thor-3']
},
{
  id: 'gorr', name: 'Gorr the God Butcher', en: 'Gorr the God Butcher',
  actor: 'Christian Bale', group: 'bigbad', role: 'villain',
  glyph: 'skull', accent: ['#111827', '#e5e7eb'],
  tagline: 'His anger is entirely justified.',
  bio: 'His daughter starved while he prayed, and the god he prayed to laughed. With the Necrosword he swore to kill every god there is.',
  arc: [
    { entry: 'thor-4', text: 'Cuts through the pantheons. Given a final wish, he resurrects his daughter instead of taking revenge, and Thor raises her.', highlight: true }
  ],
  appears: ['thor-4']
},
{
  id: 'ronan', name: 'Ronan the Accuser', en: 'Ronan the Accuser',
  actor: 'Lee Pace', group: 'bigbad', role: 'villain',
  glyph: 'starburst', accent: ['#4c1d95', '#111827'],
  tagline: 'A Kree fanatic.',
  bio: 'A Kree Accuser working for Thanos to find the orb, who takes the Power Stone and immediately turns on his employer.',
  arc: [
    { entry: 'gotg-1', text: 'Plans to destroy Xandar with the Power Stone, and is beaten when five people share the load of holding it.' },
    { entry: 'captain-marvel', text: 'Appears in 1995 as a Kree commander.' }
  ],
  appears: ['gotg-1', 'captain-marvel']
},
{
  id: 'ego', name: 'Ego', en: 'Ego the Living Planet',
  actor: 'Kurt Russell', group: 'bigbad', role: 'villain',
  glyph: 'celestial', accent: ['#c026d3', '#0891b2'],
  tagline: '"He may have been your father, but he wasn\'t your daddy."',
  bio: 'A Celestial millions of years old whose body is an entire planet, who seeded children across the galaxy looking for one who could carry his power.',
  arc: [
    { entry: 'gotg-2', text: "Brings Peter home, then reveals he killed every failed child and grew the tumour in Peter's mother himself. The Guardians destroy his core.", highlight: true }
  ],
  appears: ['gotg-2']
},
{
  id: 'dormammu', name: 'Dormammu', en: 'Dormammu',
  actor: '—', group: 'bigbad', role: 'villain',
  glyph: 'portal', accent: ['#7e22ce', '#be123c'],
  tagline: '"Dormammu, I\'ve come to bargain."',
  bio: 'The ruler of the Dark Dimension, a being that consumes entire universes.',
  arc: [
    { entry: 'doctor-strange', text: 'Strange traps himself in an endless death loop and simply refuses to stop, forcing a cosmic entity to negotiate out of irritation.', highlight: true }
  ],
  appears: ['doctor-strange']
},
{
  id: 'high-evolutionary', name: 'The High Evolutionary', en: 'The High Evolutionary',
  actor: 'Chukwudi Iwuji', group: 'bigbad', role: 'villain',
  glyph: 'skull', accent: ['#b45309', '#0d9488'],
  tagline: 'Treats creation as licence to torture.',
  bio: 'A scientist obsessed with engineering a perfect species, who uplifts animals into intelligence and destroys entire batches that disappoint him.',
  arc: [
    { entry: 'gotg-3', text: "Rocket's creator and lifelong nightmare — and unable to accept that his creation is cleverer than he is.", highlight: true }
  ],
  appears: ['gotg-3']
},
{
  id: 'cassandra-nova', name: 'Cassandra Nova', en: 'Cassandra Nova',
  actor: 'Emma Corrin', group: 'bigbad', role: 'villain',
  glyph: 'claw', accent: ['#e5e7eb', '#4c1d95'],
  tagline: "Charles Xavier's twin sister.",
  bio: 'An immensely powerful telepathic mutant who rules the Void, where the TVA dumps the timelines it prunes.',
  arc: [
    { entry: 'deadpool-wolverine', text: 'Attempts to destroy the multiverse with a Time Ripper and is stopped by Deadpool and Wolverine.' }
  ],
  appears: ['deadpool-wolverine']
},
{
  id: 'galactus', name: 'Galactus', en: 'Galactus',
  actor: 'Ralph Ineson', group: 'bigbad', role: 'villain',
  glyph: 'celestial', accent: ['#4c1d95', '#a16207'],
  tagline: 'Consumes planets to survive.',
  bio: 'A cosmic force beyond good and evil that must devour worlds to live, sending heralds ahead to find them.',
  arc: [
    { entry: 'fantastic-four', text: 'The threat the Fantastic Four face on Earth-828, arriving with the Silver Surfer.', highlight: true }
  ],
  appears: ['fantastic-four']
},
{
  id: 'trevor', name: 'Trevor Slattery', en: 'Trevor Slattery',
  actor: 'Ben Kingsley', group: 'newgen', role: 'ally',
  glyph: 'question', accent: ['#b45309', '#7c3aed'],
  tagline: 'The longest-running joke in the MCU.',
  bio: 'A washed-up English stage actor hired to play a terrorist called the Mandarin, who unwittingly impersonated the leader of a real thousand-year-old organisation.',
  arc: [
    { entry: 'iron-man-3', text: 'Revealed as an actor playing the Mandarin, with the real villain elsewhere.' },
    { entry: 'all-hail-the-king', text: 'Gives a prison interview and discovers his interviewer works for the actual Ten Rings, whose leader would like a word.', highlight: true },
    { entry: 'shang-chi', text: 'Held prisoner by Wenwu for years, and becomes an unlikely help to Shang-Chi.' },
    { entry: 'wonder-man', text: 'Confirmed to return.' }
  ],
  appears: ['iron-man-3', 'all-hail-the-king', 'shang-chi', 'wonder-man']
},

/* ================= ETERNALS AND FANTASTIC FOUR ================= */
{
  id: 'sersi', name: 'Sersi', en: 'Sersi',
  actor: 'Gemma Chan', group: 'cosmic', role: 'hero',
  glyph: 'celestial', accent: ['#0d9488', '#be123c'],
  tagline: 'The Eternal who chooses humanity over her maker.',
  bio: 'An Eternal able to transmute matter, who has lived among people for seven thousand years and loves them more than her own kind does.',
  arc: [
    { entry: 'eternals', text: 'On learning their real assignment was to let humanity die so a Celestial could be born, she leads the revolt and petrifies Tiamut.', highlight: true }
  ],
  appears: ['eternals']
},
{
  id: 'ikaris', name: 'Ikaris', en: 'Ikaris',
  actor: 'Richard Madden', group: 'cosmic', role: 'villain',
  glyph: 'celestial', accent: ['#a16207', '#1e40af'],
  tagline: 'The strongest Eternal — and the traitor.',
  bio: 'An Eternal who can fly and project beams from his eyes. He knew the truth all along and sided with Arishem over humanity.',
  arc: [
    { entry: 'eternals', text: 'Turns on the others and kills their leader Ajak to complete the Celestial\'s plan. When it fails, he flies into the sun.', highlight: true }
  ],
  appears: ['eternals']
},
{
  id: 'silver-surfer', name: 'Silver Surfer / Shalla-Bal', en: 'Silver Surfer / Shalla-Bal',
  actor: 'Julia Garner', group: 'cosmic', role: 'antihero',
  glyph: 'starburst', accent: ['#e5e7eb', '#4c1d95'],
  tagline: "Galactus's herald.",
  bio: 'She made a bargain with Galactus to save her own world, and now finds him the next one.',
  arc: [
    { entry: 'fantastic-four', text: 'Arrives on Earth-828 as the herald, and comes into direct conflict with the four.' }
  ],
  appears: ['fantastic-four']
},
{
  id: 'franklin', name: 'Franklin Richards', en: 'Franklin Richards',
  actor: '—', group: 'newgen', role: 'ally',
  glyph: 'four', accent: ['#1d4ed8', '#f0b429'],
  tagline: 'The child standing beside Doom.',
  bio: "Reed Richards and Sue Storm's son. In the comics he is among the most powerful mutants ever written.",
  arc: [
    { entry: 'fantastic-four', text: 'In the mid-credits scene, four years on, a cloaked figure holding a silver Doom mask appears at his side — the setup for Doomsday.', highlight: true }
  ],
  appears: ['fantastic-four']
}

];

/* ---------- Merge the roster ---------- */
window.MCU_CHARACTERS = [].concat(
  window.MCU_CHARACTERS || [],
  window.MCU_CHARACTERS_2 || []
);
