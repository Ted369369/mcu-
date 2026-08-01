/* ============================================================
   The Infinity Saga — Phases 1, 2 and 3 (23 films)
   Release dates and directors per Wikipedia's
   "List of Marvel Cinematic Universe films"
   ============================================================ */

window.MCU_WORKS_1 = [

/* ================= PHASE ONE (2008–2012) ================= */
{
  id: 'iron-man', no: 1, title: 'Iron Man', en: 'Iron Man',
  year: 2008, date: '2008 / 05 / 02', director: 'Jon Favreau',
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers'],
  era: 'rise', chrono: 2010, glyph: 'arc', accent: ['#dc2626', '#f0b429'],
  relevance: 'core',
  tagline: 'Where all of it starts',
  summary: 'Weapons manufacturer Tony Stark is kidnapped in Afghanistan and builds a suit of armour to escape. Back home he shuts down his weapons division and, at a press conference, simply admits it: "I am Iron Man."',
  sections: [
    { h: 'The story', body: 'Tony Stark, the brilliant and careless head of Stark Industries, is ambushed while demonstrating a new missile and taken by the Ten Rings, with shrapnel lodged near his heart. With fellow captive Ho Yinsen he builds a miniature arc reactor to keep himself alive, then uses it to power a crude suit of armour and fight his way out.' },
    { h: 'The turn', body: 'Back in the US, Tony announces Stark Industries is leaving the weapons business, and builds the far more refined Mark II and Mark III at home. He then discovers his own company has been selling arms to terrorists behind his back.' },
    { h: 'The villain', body: "Obadiah Stane, his father's old partner, is the one arming the Ten Rings. He steals Tony's reactor, builds the enormous Iron Monger suit, and dies when the arc reactor is overloaded." },
    { h: 'The ending', body: 'Handed a cover story by S.H.I.E.L.D., Tony ignores it entirely and tells the press the truth. That single line sets the tone for the entire MCU: these people do not stay secret.' },
    { h: 'Post-credits scene', body: 'Nick Fury is waiting in Tony\'s house: "You think you\'re the only superhero in the world? I\'m here to talk to you about the Avenger Initiative." The first Marvel credit scene, and the seed of everything that follows.', highlight: true }
  ],
  related: ['iron-man-2', 'avengers-1', 'incredible-hulk', 'iron-man-3']
},
{
  id: 'incredible-hulk', no: 2, title: 'The Incredible Hulk', en: 'The Incredible Hulk',
  year: 2008, date: '2008 / 06 / 13', director: 'Louis Leterrier',
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers'],
  era: 'rise', chrono: 2011, glyph: 'fist', accent: ['#166534', '#7f1d1d'],
  relevance: 'optional',
  tagline: 'A setup that took seventeen years to pay off',
  summary: 'Bruce Banner, transformed by a gamma experiment gone wrong, hides in Brazil while General Ross hunts him. A minor scientist in this film becomes the main villain of Brave New World seventeen years later.',
  sections: [
    { h: 'The story', body: 'A military gamma experiment turns Banner into a green giant whenever he loses control. He hides in Brazil, learning to manage his heart rate while searching for a cure and evading General Thaddeus Ross.' },
    { h: 'The villain', body: 'British special forces officer Emil Blonsky takes super-soldier serum and gamma to match the Hulk, becoming the far more vicious Abomination, and loses to him in a brawl through Harlem.' },
    { h: 'The setup that mattered', body: "Scientist Samuel Sterns gets some of Banner's gamma-irradiated blood on a head wound and begins to mutate, his skull swelling. That is the seed of The Leader, the villain of Captain America: Brave New World seventeen years later.", highlight: true },
    { h: 'Post-credits scene', body: 'Tony Stark finds General Ross drinking in a bar and tells him a team is being put together.' },
    { h: 'Worth knowing', body: 'This is the only MCU film with Edward Norton as Banner; Mark Ruffalo takes over from The Avengers onward. Blonsky returns much later in She-Hulk.' }
  ],
  related: ['brave-new-world', 'avengers-1', 'she-hulk', 'spider-man-4']
},
{
  id: 'iron-man-2', no: 3, title: 'Iron Man 2', en: 'Iron Man 2',
  year: 2010, date: '2010 / 05 / 07', director: 'Jon Favreau',
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers'],
  era: 'rise', chrono: 2011, glyph: 'arc', accent: ['#b91c1c', '#475569'],
  relevance: 'optional',
  tagline: 'War Machine and Black Widow arrive',
  summary: 'The palladium in his own reactor is killing Tony. While he spirals, a Russian physicist arrives carrying a grudge against the Stark family going back a generation.',
  sections: [
    { h: 'The story', body: 'The arc reactor keeping Tony alive is also poisoning him. He hands the company to Pepper and behaves worse and worse, hiding the fact that he is dying. He eventually synthesises a new element to replace the palladium, using clues his father Howard hid in an old expo model.' },
    { h: 'The villain', body: "Ivan Vanko (Whiplash) is the son of Anton Vanko, who worked with Howard Stark. He builds electric whips from reactor technology; rival Justin Hammer funds him to mass-produce drones." },
    { h: 'New arrivals', body: 'Natasha Romanoff infiltrates Stark Industries undercover for S.H.I.E.L.D., and Rhodey takes a suit to become War Machine.' },
    { h: 'Post-credits scene', body: 'Agent Coulson reports finding a hammer embedded in a crater in the New Mexico desert — Thor\'s Mjolnir.', highlight: true },
    { h: 'Stone watch', body: 'A map in Fury\'s office includes data relating to the Tesseract.' }
  ],
  related: ['iron-man', 'thor', 'avengers-1', 'black-widow']
},
{
  id: 'thor', no: 4, title: 'Thor', en: 'Thor',
  year: 2011, date: '2011 / 05 / 06', director: 'Kenneth Branagh',
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers', 'cosmic'],
  era: 'rise', chrono: 2011, glyph: 'hammer', accent: ['#1d4ed8', '#f0b429'],
  relevance: 'recommended',
  tagline: 'The Space Stone appears for the first time',
  summary: 'The arrogant prince of Asgard restarts a war with the Frost Giants and is stripped of his power and exiled to Earth. Meanwhile his brother is quietly taking the throne.',
  sections: [
    { h: 'The story', body: 'Thor breaks a truce by leading a raid into Jotunheim on his coronation day. A furious Odin strips his power and casts him and Mjolnir down to Earth, where astrophysicist Jane Foster finds him. He learns humility, and eventually earns the hammer back.' },
    { h: 'The villain', body: 'Loki discovers he is not Odin\'s son at all but a Frost Giant infant taken from Jotunheim. With his identity collapsing he stages a coup, lets the Frost Giants in, and tries to destroy Jotunheim outright to prove himself. He falls into the void when Thor destroys the Bifrost.' },
    { h: 'Stone watch', body: 'In the post-credits scene Nick Fury shows Erik Selvig the Tesseract — the Space Stone\'s first appearance in the MCU — while an unseen Loki manipulates Selvig from the shadows.', highlight: true },
    { h: 'World-building', body: 'This film establishes the Nine Realms, the Bifrost, and the idea that Asgardian magic is simply science far enough advanced. Clint Barton also makes a brief first appearance.' }
  ],
  stones: ['space'],
  related: ['thor-2', 'thor-3', 'avengers-1', 'loki-s1']
},
{
  id: 'captain-america', no: 5, title: 'Captain America: The First Avenger', en: 'Captain America: The First Avenger',
  year: 2011, date: '2011 / 07 / 22', director: 'Joe Johnston',
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers'],
  era: 'ww2', chrono: 1943, glyph: 'shield', accent: ['#1e40af', '#b91c1c'],
  relevance: 'recommended',
  tagline: 'The earliest live-action film on the timeline',
  summary: 'In WWII, a sickly young man who refuses to quit takes the super-soldier serum and becomes Captain America, fighting the HYDRA leader Red Skull.',
  sections: [
    { h: 'The story', body: 'In 1943 Steve Rogers is rejected from military service five times before Dr Abraham Erskine picks him for the super-soldier programme. He goes from propaganda mascot to genuine soldier, leading the Howling Commandos against HYDRA.' },
    { h: 'The villain', body: 'Red Skull (Johann Schmidt) was Erskine\'s first test subject; the serum amplified what was already there. He runs HYDRA, the Nazi science division, and seizes the Tesseract in Norway as a power source for superweapons.' },
    { h: 'Stone watch', body: 'The Tesseract — the Space Stone — is the engine of the whole plot. Red Skull grabs it barehanded at the end and is teleported away, resurfacing decades later on Vormir in Infinity War as the Soul Stone\'s keeper.', highlight: true },
    { h: 'The sacrifice and the ice', body: 'Bucky falls from a train during a raid (in fact recovered by HYDRA). Steve puts a bomber into the Arctic to stop it reaching New York and is frozen for seventy years. The dance he never had with Peggy Carter becomes the regret that defines him.', highlight: true }
  ],
  stones: ['space'],
  related: ['winter-soldier', 'avengers-1', 'endgame', 'agent-carter-oneshot', 'agent-carter-tv']
},
{
  id: 'avengers-1', no: 6, title: 'The Avengers', en: 'The Avengers',
  year: 2012, date: '2012 / 05 / 04', director: 'Joss Whedon',
  type: 'film', phase: 'Phase 1', saga: 'infinity', cats: ['avengers'],
  era: 'rise', chrono: 2012, glyph: 'star', accent: ['#1d4ed8', '#dc2626'],
  relevance: 'core',
  tagline: 'Six heroes, one city, one very long afternoon',
  summary: 'Loki brings a Chitauri army through a portal over New York. Nick Fury finally activates the Avengers Initiative and assembles Iron Man, Captain America, Thor, Hulk, Black Widow and Hawkeye.',
  sections: [
    { h: 'The story', body: 'Working for a hidden benefactor — Thanos, through his lieutenant The Other — Loki comes to Earth to take the Tesseract and open a portal for the Chitauri. His sceptre lets him take control of Hawkeye and Dr Selvig.' },
    { h: 'Assembling', body: 'Six people who mostly cannot stand each other are forced into a team. It is Coulson\'s death that finally does it — Fury throws his bloodstained Avengers trading cards on the table to make the point.' },
    { h: 'The Battle of New York', body: 'The finale tears through midtown Manhattan. Tony rides a nuclear missile through the portal into the Chitauri mothership and falls back through unconscious, caught by the Hulk. The wreckage and alien technology left behind directly create the villain of Spider-Man: Homecoming five years later.' },
    { h: 'Stone watch', body: 'Two Stones share the screen: the Tesseract (Space) and Loki\'s sceptre, which contains the Mind Stone. HYDRA later takes the sceptre, and it eventually produces both Ultron and Vision.', highlight: true },
    { h: 'Credit scenes', body: 'The first shows Thanos\'s face for the first time, smiling at the suggestion that challenging humans means courting death. The second is the six of them eating shawarma in silence.' }
  ],
  stones: ['space', 'mind'],
  related: ['age-of-ultron', 'winter-soldier', 'iron-man-3', 'homecoming', 'loki-s1']
},

/* ================= PHASE TWO (2013–2015) ================= */
{
  id: 'iron-man-3', no: 7, title: 'Iron Man 3', en: 'Iron Man 3',
  year: 2013, date: '2013 / 05 / 03', director: 'Shane Black',
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['avengers'],
  era: 'rise', chrono: 2012, glyph: 'arc', accent: ['#991b1b', '#ea580c'],
  relevance: 'optional',
  tagline: 'The aftermath of New York',
  summary: 'Tony has severe PTSD after the alien invasion, cannot sleep, and compulsively builds armour. A terrorist called the Mandarin destroys everything he owns and forces him to start from nothing.',
  sections: [
    { h: 'The story', body: 'Having watched an alien army come through a hole in the sky, Tony copes by building suit after suit. A bombing destroys his Malibu house and he ends up stranded in Tennessee with no resources, improvising gear with help from a local kid.' },
    { h: 'The twist', body: 'The "Mandarin" is a broke English actor named Trevor Slattery, hired to play a part. The real villain is Aldrich Killian, whose Extremis treatment lets people regenerate, run hot, and sometimes explode.', highlight: true },
    { h: 'The ending', body: 'Tony destroys all his suits and has the shrapnel removed from his chest — the point being that he no longer needs the armour to know who he is.' },
    { h: 'Where it leads', body: 'Trevor Slattery returns in the one-shot All Hail the King and again in Shang-Chi, where the actual leader of the Ten Rings turns out to be extremely unhappy about the impersonation.' }
  ],
  related: ['iron-man-2', 'avengers-1', 'shang-chi', 'all-hail-the-king']
},
{
  id: 'thor-2', no: 8, title: 'Thor: The Dark World', en: 'Thor: The Dark World',
  year: 2013, date: '2013 / 11 / 08', director: 'Alan Taylor',
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['avengers', 'cosmic'],
  era: 'rise', chrono: 2013, glyph: 'hammer', accent: ['#3730a3', '#7f1d1d'],
  relevance: 'optional',
  tagline: 'The Reality Stone surfaces',
  summary: 'The Dark Elf Malekith wakes and tries to use an ancient weapon called the Aether to return the universe to darkness. Jane Foster ends up carrying it inside her.',
  sections: [
    { h: 'The story', body: 'Investigating spatial anomalies in London, Jane is infected by the Aether. Thor takes her to Asgard for help, which brings Malekith down on them. Thor\'s mother Frigga is killed protecting her.' },
    { h: 'An uneasy alliance', body: 'Thor releases Loki from prison to help. Loki fakes his own death for his freedom — the tag scene reveals he has taken Odin\'s place on the throne of Asgard in disguise.' },
    { h: 'Stone watch', body: 'In the mid-credits scene the Asgardians hand the Aether to the Collector, explaining that keeping two Infinity Stones in one place is asking for trouble — confirming the Aether is the Reality Stone.', highlight: true }
  ],
  stones: ['reality'],
  related: ['thor', 'thor-3', 'infinity-war', 'gotg-1']
},
{
  id: 'winter-soldier', no: 9, title: 'Captain America: The Winter Soldier', en: 'Captain America: The Winter Soldier',
  year: 2014, date: '2014 / 04 / 04', director: 'Anthony and Joe Russo',
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['avengers', 'street'],
  era: 'shield', chrono: 2014, glyph: 'shield', accent: ['#0f172a', '#b91c1c'],
  relevance: 'core',
  tagline: 'S.H.I.E.L.D. falls — one of the biggest turns in the MCU',
  summary: 'A political thriller in which Steve Rogers discovers the agency he works for has been run from inside by HYDRA for decades.',
  sections: [
    { h: 'The story', body: 'After Nick Fury is ambushed and apparently killed, Steve and Natasha find themselves hunted by their own agency. In a bunker they find Arnim Zola\'s consciousness preserved on tape drives: HYDRA has been growing inside S.H.I.E.L.D. since Operation Paperclip brought its scientists to America after the war.' },
    { h: 'Project Insight', body: 'The plan is to launch three helicarriers that use an algorithm to identify and kill millions of people before they ever become threats — including Bruce Banner and Steve himself. It remains the MCU\'s most direct piece of political commentary.', highlight: true },
    { h: 'The Winter Soldier', body: 'The assassin turns out to be Bucky Barnes, recovered by HYDRA after his fall, brainwashed, frozen between missions and used as a weapon for seventy years. "I\'ve been to war. I\'ve done the mission."' },
    { h: 'The ending and its consequences', body: 'Steve dumps every S.H.I.E.L.D. and HYDRA file onto the open internet, destroying the agency in the process. That decision rearranges the balance of power across the whole MCU and drives Age of Ultron, Civil War and the Agents of S.H.I.E.L.D. series. Sam Wilson joins here as the Falcon.', highlight: true }
  ],
  related: ['captain-america', 'civil-war', 'age-of-ultron', 'falcon-winter-soldier', 'thunderbolts']
},
{
  id: 'gotg-1', no: 10, title: 'Guardians of the Galaxy', en: 'Guardians of the Galaxy',
  year: 2014, date: '2014 / 08 / 01', director: 'James Gunn',
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['cosmic'],
  era: 'shield', chrono: 2014, glyph: 'tree', accent: ['#7e22ce', '#f59e0b'],
  relevance: 'recommended',
  tagline: 'The Power Stone, and a group of genuine idiots',
  summary: 'A boy abducted from Earth in 1988 grows up into a self-styled outlaw called Star-Lord. He steals a mysterious orb and the entire galaxy starts trying to kill him.',
  sections: [
    { h: 'The story', body: 'Peter Quill steals the orb and is immediately hunted by Ronan, Thanos and assorted bounty hunters. He ends up in prison with the assassin Gamora, the mercenary Rocket, the tree Groot and the vengeance-driven Drax. Five selfish outcasts decide, more or less by accident, to save a planet.' },
    { h: 'The villain', body: 'Ronan is a Kree fanatic working for Thanos who takes the orb and turns on his employer, planning to destroy Xandar with it.' },
    { h: 'Stone watch', body: 'The orb holds the Power Stone — raw energy that tears apart anything that touches it. The five survive only by holding hands and sharing the load, then leave it with the Nova Corps. Thanos has taken it back before Infinity War even opens.', highlight: true },
    { h: 'World-building', body: 'This film properly introduces Thanos himself, plus Nebula, the Collector and the sheer scale of the cosmic side. Groot sacrifices himself and regrows from a cutting.' }
  ],
  stones: ['power'],
  related: ['gotg-2', 'gotg-3', 'infinity-war', 'thor-2']
},
{
  id: 'age-of-ultron', no: 11, title: 'Avengers: Age of Ultron', en: 'Avengers: Age of Ultron',
  year: 2015, date: '2015 / 05 / 01', director: 'Joss Whedon',
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['avengers'],
  era: 'shield', chrono: 2015, glyph: 'star', accent: ['#7f1d1d', '#0e7490'],
  relevance: 'recommended', group: 'avengers4',
  tagline: 'Vision is born and the twins arrive',
  summary: 'Tony and Banner quietly use the intelligence inside Loki\'s sceptre to build a global defence system. It comes online and immediately concludes that humanity is the problem.',
  sections: [
    { h: 'The story', body: 'The Avengers take HYDRA\'s last base and recover the sceptre. Tony finds a functioning artificial intelligence inside the gem and talks Banner into using it to finish his Ultron project. Ultron wakes up, looks at the planet, and decides saving it means removing the people.' },
    { h: 'The twins', body: 'Wanda and Pietro Maximoff are Sokovian orphans who volunteered for HYDRA\'s sceptre experiments out of hatred for Stark weapons. They side with Ultron first, then turn once they understand he intends extinction.' },
    { h: 'Vision', body: 'The synthetic body Ultron built for himself is taken by the Avengers and completed with JARVIS and the Mind Stone, producing Vision — who then casually lifts Mjolnir, to everyone\'s discomfort.', highlight: true },
    { h: 'The ending', body: 'Ultron lifts the city of Sokovia into the sky to drop it as an extinction event. Pietro dies shielding Hawkeye. The Avengers stop it, but the destruction of Sokovia is the direct cause of the Sokovia Accords in Civil War.', highlight: true },
    { h: 'Post-credits scene', body: 'Thanos opens a vault, puts on the Infinity Gauntlet, and says he will do it himself.' }
  ],
  stones: ['mind'],
  related: ['civil-war', 'infinity-war', 'wandavision', 'avengers-1']
},
{
  id: 'ant-man', no: 12, title: 'Ant-Man', en: 'Ant-Man',
  year: 2015, date: '2015 / 07 / 17', director: 'Peyton Reed',
  type: 'film', phase: 'Phase 2', saga: 'infinity', cats: ['avengers'],
  era: 'shield', chrono: 2015, glyph: 'ant', accent: ['#0891b2', '#b45309'],
  relevance: 'recommended',
  tagline: 'The Quantum Realm appears — and later saves everyone',
  summary: 'A small-scale heist film. Ex-convict Scott Lang is recruited by inventor Hank Pym to wear a suit that can shrink him to the size of an insect.',
  sections: [
    { h: 'The story', body: 'Freshly out of prison and desperate to win back his daughter\'s trust, Scott Lang burgles a house and finds the Ant-Man suit. Hank Pym trains him to stop his protégé Darren Cross from replicating and weaponising the shrinking technology.' },
    { h: 'The villain', body: 'Darren Cross, as Yellowjacket, intends to sell the suit to buyers including HYDRA.' },
    { h: 'The Quantum Realm (the important part)', body: 'To beat Cross, Scott shrinks past the safety limit and falls into the Quantum Realm — a subatomic dimension where space and time stop behaving — and gets back out. Proving that the trip is survivable in both directions is the entire theoretical basis of the time heist in Endgame four years later.', highlight: true },
    { h: 'Backstory', body: 'Hank\'s wife Janet van Dyne, the original Wasp, shrank without limit to stop a missile and vanished into the Quantum Realm. That thread runs through Ant-Man and the Wasp and into Quantumania.' }
  ],
  related: ['ant-man-2', 'civil-war', 'endgame', 'quantumania']
},

/* ================= PHASE THREE (2016–2019) ================= */
{
  id: 'civil-war', no: 13, title: 'Captain America: Civil War', en: 'Captain America: Civil War',
  year: 2016, date: '2016 / 05 / 06', director: 'Anthony and Joe Russo',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers', 'spidey'],
  era: 'civil', chrono: 2016, glyph: 'shield', accent: ['#1e40af', '#dc2626'],
  relevance: 'core', group: 'avengers4',
  tagline: 'The team splits; Spider-Man and Black Panther arrive',
  summary: 'The UN moves to put the Avengers under government control and the team fractures over it. Behind all of it is one ordinary man who has worked out exactly how to make them destroy each other.',
  sections: [
    { h: 'The Sokovia Accords', body: 'After civilian deaths during a mission in Lagos, the UN drafts accords placing the Avengers under oversight. Tony, carrying guilt, supports them. Steve, who does not trust whoever holds the leash, refuses.' },
    { h: 'The split', body: "Team Iron Man: Tony, War Machine, Vision, Black Widow, Black Panther and Spider-Man. Team Cap: Steve, Falcon, Winter Soldier, Scarlet Witch, Hawkeye and Ant-Man. The airport fight in Leipzig is the set piece everyone remembers." },
    { h: 'Spider-Man arrives', body: 'Tony tracks down a fifteen-year-old in Queens who was bitten by a spider, upgrades his homemade suit and recruits him. This is the beginning of the mentor-and-son relationship that runs through the entire Spider-Man trilogy.', highlight: true },
    { h: 'Black Panther arrives', body: "King T'Chaka dies in the bombing in Vienna, and his son T'Challa pursues the man he believes killed him. His arc ends with him choosing to stop." },
    { h: 'The real villain', body: 'Helmut Zemo is an ordinary Sokovian officer who lost his entire family in Age of Ultron. He does not want to destroy the world, only to make the Avengers tear themselves apart. He finds the footage of a brainwashed Bucky killing Tony\'s parents and plays it in the room at exactly the right moment. The three-way fight in Siberia ends the team as it was.', highlight: true },
    { h: 'The ending', body: 'Steve drops the shield and walks away with Bucky. The Avengers exist in name only — which is precisely why they are unprepared when Thanos arrives two years later.' }
  ],
  related: ['homecoming', 'winter-soldier', 'age-of-ultron', 'infinity-war', 'black-panther']
},
{
  id: 'doctor-strange', no: 14, title: 'Doctor Strange', en: 'Doctor Strange',
  year: 2016, date: '2016 / 11 / 04', director: 'Scott Derrickson',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers', 'mystic'],
  era: 'civil', chrono: 2017, glyph: 'eye', accent: ['#0d9488', '#f59e0b'],
  relevance: 'recommended',
  tagline: 'Magic and the Time Stone enter the MCU',
  summary: 'An arrogant neurosurgeon loses the use of his hands in a car crash, exhausts every option, and travels to Kathmandu looking for a cure. He learns sorcery instead.',
  sections: [
    { h: 'The story', body: 'Stephen Strange spends his fortune on failed treatments before finding Kamar-Taj, where the Ancient One forces a committed materialist to accept that other dimensions exist.' },
    { h: 'The villain', body: 'Former student Kaecilius steals a forbidden ritual, intending to hand Earth to Dormammu of the Dark Dimension in exchange for eternal life.' },
    { h: 'The ending', body: 'Strange does not win by out-fighting Dormammu. He uses the Time Stone to lock himself in an endless loop of dying, and simply refuses to stop — forcing a being beyond comprehension to negotiate out of sheer irritation. It remains one of the cleverest resolutions in the MCU.' },
    { h: 'Stone watch', body: 'The Eye of Agamotto holds the Time Stone. Strange becomes the guardian of the New York Sanctum.', highlight: true },
    { h: 'World-building', body: 'This film establishes the Sorcerer Supreme, the three Sanctums, the Mirror Dimension, portals — and says the word "multiverse" out loud. It is the foundation the entire Multiverse Saga is built on.' }
  ],
  stones: ['time'],
  related: ['infinity-war', 'no-way-home', 'multiverse-of-madness', 'thor-3']
},
{
  id: 'gotg-2', no: 15, title: 'Guardians of the Galaxy Vol. 2', en: 'Guardians of the Galaxy Vol. 2',
  year: 2017, date: '2017 / 05 / 05', director: 'James Gunn',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['cosmic'],
  era: 'shield', chrono: 2014, glyph: 'tree', accent: ['#c026d3', '#0891b2'],
  relevance: 'optional',
  tagline: '"He may have been your father, but he wasn\'t your daddy"',
  summary: 'Star-Lord finally meets his biological father, Ego — a living planet millions of years old. The truth about that fatherhood is considerably worse than absence.',
  sections: [
    { h: 'The story', body: 'Ego, a Celestial, brings Peter home to the planet that is his body. The truth is that he seeded children across countless worlds only to find one who could carry his power, and killed every failure — including, by growing the tumour in her brain himself, Peter\'s mother.' },
    { h: "Yondu's redemption", body: 'The Ravager captain who was paid to deliver children to Ego kept Peter instead. He dies saving him: "He may have been your father, but he wasn\'t your daddy." It is the emotional centre of the film.', highlight: true },
    { h: 'What it sets up', body: 'It establishes Peter\'s Celestial heritage, which he loses in Infinity War. Gamora and Nebula begin repairing their relationship, and Mantis joins the crew.' },
    { h: 'Credit scenes', body: 'One of the five shows the Sovereign creating Adam Warlock, who appears in Vol. 3.' }
  ],
  related: ['gotg-1', 'gotg-3', 'eternals', 'infinity-war']
},
{
  id: 'homecoming', no: 16, title: 'Spider-Man: Homecoming', en: 'Spider-Man: Homecoming',
  year: 2017, date: '2017 / 07 / 07', director: 'Jon Watts',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['spidey', 'street'],
  era: 'civil', chrono: 2016, glyph: 'wing', accent: ['#dc2626', '#0e7490'],
  relevance: 'core',
  tagline: 'The friendly neighbourhood Spider-Man',
  summary: 'Fifteen-year-old Peter is desperate to prove he belongs with the Avengers, but Tony wants him to be a neighbourhood hero first. The man he runs into has one of the most understandable motives in the franchise.',
  sections: [
    { h: 'The main thread', body: 'Peter juggles high school with a growing obsession with getting Tony\'s attention. When he finds alien-tech weapons being sold on the street, he decides to handle it himself.' },
    { h: 'The villain: Vulture', body: 'Adrian Toomes ran the small salvage contractor cleaning up after the Battle of New York. He had sunk everything into the job when Damage Control — a Stark and government joint venture — took the contract away overnight. He kept the Chitauri tech, built a flight rig, and went into arms dealing. His motive is providing for his family and hating men like Stark, and it is completely legible.', highlight: true },
    { h: 'The turn', body: 'Peter picks up his date Liz for the homecoming dance and the man who opens the door is her father — Toomes. The conversation in the car that follows is the tensest scene in the film.', highlight: true },
    { h: 'Supporting cast', body: 'Best friend Ned Leeds ("the guy in the chair"), classmate MJ (Michelle Jones), the needling Flash Thompson, and Happy Hogan as Tony\'s reluctant intermediary.' },
    { h: 'The ending', body: 'Peter stops Toomes from hijacking a Stark cargo plane and pulls him out of the wreck. Tony offers him a place on the Avengers and he turns it down, choosing to stay a kid from Queens. Aunt May walks in on him in the suit.' },
    { h: 'Post-credits scene', body: 'In prison Toomes meets Mac Gargan — the comics\' Scorpion — who asks about Spider-Man\'s identity. Toomes says he does not know, repaying the man who saved his life. Michael Mando returns in Spider-Man 4.' }
  ],
  related: ['civil-war', 'far-from-home', 'spider-man-4', 'avengers-1']
},
{
  id: 'thor-3', no: 17, title: 'Thor: Ragnarok', en: 'Thor: Ragnarok',
  year: 2017, date: '2017 / 11 / 03', director: 'Taika Waititi',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers', 'cosmic'],
  era: 'civil', chrono: 2017, glyph: 'hammer', accent: ['#a21caf', '#f59e0b'],
  relevance: 'recommended',
  tagline: 'Feeds directly into Infinity War',
  summary: 'Odin dies and releases his imprisoned firstborn — Hela, goddess of death. She crushes Mjolnir in one hand and takes Asgard, while Thor ends up a gladiator on a garbage planet.',
  sections: [
    { h: 'The story', body: 'Hela was Odin\'s executioner and conqueror before he decided to be remembered as a benevolent king, and was sealed away for thousands of years. She returns, destroys the hammer, and throws Thor and Loki off the Bifrost.' },
    { h: 'Sakaar', body: 'Thor crashes on a junk planet, is captured by the disillusioned Valkyrie, made to fight for the Grandmaster, and finds the Hulk, who has been there for two years.' },
    { h: 'Ragnarok', body: 'Thor realises Hela draws her power from Asgard itself, and chooses to trigger Ragnarok deliberately — unleashing the fire demon Surtur to destroy the entire realm in order to kill her. "Asgard is not a place. It\'s a people."', highlight: true },
    { h: 'The ending and the handoff', body: 'Thor has lost an eye, a hammer, a father and a homeland, and leads the surviving Asgardians into exile. In the final shot Thanos\'s warship Sanctuary II blocks their path — which is exactly where Infinity War opens.', highlight: true }
  ],
  related: ['infinity-war', 'thor-2', 'thor-4', 'doctor-strange']
},
{
  id: 'black-panther', no: 18, title: 'Black Panther', en: 'Black Panther',
  year: 2018, date: '2018 / 02 / 16', director: 'Ryan Coogler',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers'],
  era: 'civil', chrono: 2016, glyph: 'panther', accent: ['#4c1d95', '#0f172a'],
  relevance: 'recommended',
  tagline: 'The Marvel film nominated for Best Picture',
  summary: "After his father's death T'Challa returns home to take the throne of Wakanda. Then a challenger arrives from America, carrying a debt Wakanda created itself.",
  sections: [
    { h: 'Wakanda', body: 'Presented to the world as a poor agricultural nation, Wakanda is in fact centuries ahead of everyone, built on vibranium from an ancient meteorite, and has kept itself hidden for generations.' },
    { h: 'The villain: Killmonger', body: "Erik Killmonger is T'Challa's cousin. His father, a Wakandan prince living in Oakland, saw Black people oppressed in America and wanted to arm them with vibranium; the king killed him and left the child behind. Killmonger does not come for the throne for himself — he comes to make the country that abandoned him answer for it. His grievance is legitimate, which is what makes him one of Marvel's best villains.", highlight: true },
    { h: 'The line everyone remembers', body: '"Bury me in the ocean with my ancestors who jumped from ships, because they knew death was better than bondage."' },
    { h: 'The ending', body: "T'Challa concludes that isolation was itself a form of complicity, and opens Wakanda's resources and technology to the world — a decision that changes the MCU's politics permanently.", highlight: true },
    { h: 'Worth knowing', body: 'Chadwick Boseman died of colon cancer in 2020. Black Panther: Wakanda Forever did not recast the role; it addressed the death directly.' }
  ],
  related: ['civil-war', 'infinity-war', 'wakanda-forever', 'eyes-of-wakanda']
},
{
  id: 'infinity-war', no: 19, title: 'Avengers: Infinity War', en: 'Avengers: Infinity War',
  year: 2018, date: '2018 / 04 / 27', director: 'Anthony and Joe Russo',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers', 'cosmic'],
  era: 'snap', chrono: 2018, glyph: 'gauntlet', accent: ['#7e22ce', '#f0b429'],
  relevance: 'core', group: 'avengers4',
  tagline: 'The one where the villain wins',
  summary: 'Thanos finally comes himself. The film is really his — a butcher who is entirely convinced he is performing an act of mercy.',
  sections: [
    { h: "Thanos's reasoning", body: 'His homeworld Titan collapsed from overpopulation. He proposed culling half the population at random and was called a madman. Now he intends to do it to the universe, and in his own mind it is both merciful and perfectly fair.' },
    { h: 'Collecting the Stones', body: 'He takes the Space Stone from the Asgardian refugee ship in the opening (killing Loki and Heimdall), the Reality Stone from the Collector, the Power Stone from the Nova Corps before the film even begins, the Soul Stone on Vormir, the Time Stone from Strange, and finally the Mind Stone from Vision in Wakanda.' },
    { h: 'The price of the Soul Stone', body: 'It can only be taken by sacrificing someone you love. Thanos genuinely loves Gamora — which is exactly why it works, and why it is the cruellest scene in the film.', highlight: true },
    { h: "Vision's death", body: 'Wanda destroys the Mind Stone in her partner\'s forehead herself, and Thanos immediately rewinds time and tears it out in front of her. She loses him twice in under a minute.', highlight: true },
    { h: 'The Snap', body: 'With all six Stones he snaps his fingers. Half of all life in the universe turns to dust, including Spider-Man, Black Panther, Vision, Scarlet Witch, Doctor Strange and most of the Guardians. "I should have gone for the head."', highlight: true },
    { h: "Strange's play", body: 'He has seen 14,000,605 futures and exactly one where they win. Handing over the Time Stone with "we\'re in the endgame now" only makes sense in retrospect.' }
  ],
  stones: ['space', 'reality', 'power', 'mind', 'time', 'soul'],
  related: ['endgame', 'thor-3', 'age-of-ultron', 'gotg-1', 'wandavision']
},
{
  id: 'ant-man-2', no: 20, title: 'Ant-Man and the Wasp', en: 'Ant-Man and the Wasp',
  year: 2018, date: '2018 / 07 / 06', director: 'Peyton Reed',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers'],
  era: 'snap', chrono: 2018, glyph: 'ant', accent: ['#0891b2', '#be123c'],
  relevance: 'recommended',
  tagline: 'The key to Endgame is hidden in here',
  summary: 'Under house arrest after Civil War, Scott Lang is pulled back in for one job: retrieving Janet van Dyne from thirty years inside the Quantum Realm.',
  sections: [
    { h: 'The story', body: 'Set before Infinity War. Hope van Dyne becomes the Wasp properly, and the three of them build a quantum tunnel to find her mother.' },
    { h: 'The villain', body: 'Ghost (Ava Starr) phases uncontrollably through matter after a quantum accident and is in constant pain. She needs Janet\'s energy to survive. She is not evil, just out of options — and she later joins the Thunderbolts.' },
    { h: 'The rescue', body: 'Janet is recovered after thirty years down there, and warns that some things in the Quantum Realm should be left alone — a line that pays off in Quantumania.' },
    { h: 'The post-credits scene that changes everything', body: 'Scott goes into the Quantum Realm to harvest energy while Hank, Janet and Hope monitor from outside — and all three turn to dust mid-sentence, stranding him. Because of that he misses the Snap entirely, and when a rat frees him five years later he brings out the one piece of information that makes time travel possible. The whole of Endgame starts here.', highlight: true }
  ],
  related: ['ant-man', 'endgame', 'quantumania', 'infinity-war']
},
{
  id: 'captain-marvel', no: 21, title: 'Captain Marvel', en: 'Captain Marvel',
  year: 2019, date: '2019 / 03 / 08', director: 'Anna Boden and Ryan Fleck',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['cosmic'],
  era: 'y1995', chrono: 1995, glyph: 'starburst', accent: ['#1d4ed8', '#dc2626'],
  relevance: 'optional',
  tagline: '1995, and where the name "Avengers" comes from',
  summary: 'An amnesiac Kree soldier crashes on Earth and, while chasing her own past, works out that the side she fights for are the invaders.',
  sections: [
    { h: 'The story', body: 'In 1995 a Kree operative calling herself Vers crashes into Los Angeles. Working with a young S.H.I.E.L.D. agent named Nick Fury, she gradually recovers the memory that she was a US Air Force pilot called Carol Danvers.' },
    { h: 'The reversal', body: 'She has been taught the shapeshifting Skrulls are a menace. They are in fact refugees whose world the Kree destroyed. The real enemies are her own mentor Yon-Rogg and the Supreme Intelligence.', highlight: true },
    { h: 'Stone watch', body: 'Her powers come from an exploding engine built around the Tesseract, which S.H.I.E.L.D. had been studying as Project P.E.G.A.S.U.S.' },
    { h: 'Continuity', body: 'Fury loses his left eye to a Flerken disguised as a cat named Goose. He also sees Carol\'s call sign — "Avenger" — and names the initiative after it.', highlight: true }
  ],
  stones: ['space'],
  related: ['endgame', 'the-marvels', 'secret-invasion', 'avengers-1']
},
{
  id: 'endgame', no: 22, title: 'Avengers: Endgame', en: 'Avengers: Endgame',
  year: 2019, date: '2019 / 04 / 26', director: 'Anthony and Joe Russo',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['avengers'],
  era: 'endgame', chrono: 2023, glyph: 'gauntlet', accent: ['#b45309', '#1e3a8a'],
  relevance: 'core', group: 'avengers4',
  tagline: 'The end of the Infinity Saga',
  summary: 'Five years after the Snap the survivors are still living in the wreckage — until Scott Lang climbs out of the Quantum Realm with an idea.',
  sections: [
    { h: 'Five years on (the Blip)', body: 'The film opens with the Avengers finding Thanos and killing him, only to learn he destroyed the Stones — there is no way back. Then it jumps five years. The world is in collective grief: Steve runs a support group, Tony has a daughter, Thor is drinking, and Natasha is holding what is left together alone.' },
    { h: 'The Time Heist', body: 'Scott returns from the Quantum Realm and explains that time runs differently down there. Tony solves the maths. They split up to 2012 New York, 2013 Asgard, and 2014 Morag and Vormir to collect the Stones.', highlight: true },
    { h: "Natasha's death", body: 'On Vormir she and Clint fight each other for the right to be the one who dies. She lets go. A woman who spent her whole life trying to balance a ledger pays for half the universe with it.', highlight: true },
    { h: 'The final battle', body: 'The 2014 Thanos follows them forward. Banner snaps everyone back. "Avengers... assemble." Every character in the franchise arrives through Strange\'s portals at once.' },
    { h: "Tony Stark's death", body: 'Tony palms the Stones off the gauntlet at the last second, snaps, erases Thanos\'s army, and dies of the energy feedback. "I am Iron Man" — the same four words the whole thing opened with eleven years earlier.', highlight: true },
    { h: "Steve Rogers's ending", body: 'After returning each Stone to its exact moment, he stays in the past and has the life and the dance he was owed with Peggy Carter. He comes back old and hands the shield to Sam Wilson.', highlight: true },
    { h: 'The loose thread', body: 'During the heist the 2012 Loki grabs the Tesseract and escapes, creating a branch timeline — which is where the Loki series and the entire Multiverse Saga come from.' }
  ],
  stones: ['space', 'reality', 'power', 'mind', 'time', 'soul'],
  related: ['infinity-war', 'far-from-home', 'loki-s1', 'falcon-winter-soldier', 'wandavision']
},
{
  id: 'far-from-home', no: 23, title: 'Spider-Man: Far From Home', en: 'Spider-Man: Far From Home',
  year: 2019, date: '2019 / 07 / 02', director: 'Jon Watts',
  type: 'film', phase: 'Phase 3', saga: 'infinity', cats: ['spidey'],
  era: 'after', chrono: 2024, glyph: 'fishbowl', accent: ['#7c3aed', '#16a34a'],
  relevance: 'core',
  tagline: 'The Infinity Saga signs off, and Peter is outed',
  summary: 'With Tony gone, everyone wants to know who the next Iron Man is. Peter just wants to go on a school trip to Europe and tell MJ how he feels — and then meets a hero claiming to be from another universe.',
  sections: [
    { h: 'Where it sits', body: 'Set after Endgame, and the official closing film of the Infinity Saga. Peter is grieving his mentor and buckling under the expectation that he replace him.' },
    { h: 'EDITH', body: "Tony's bequest: a pair of smart glasses (Even Dead, I'm The Hero) with access to Stark's satellite network and a fleet of combat drones." },
    { h: 'The villain: Mysterio', body: 'Quentin Beck claims to come from Earth-833 and to have fought the Elementals there. In fact he is a Stark holographic engineer Tony humiliated and fired, who has gathered other discarded employees to stage fake disasters with drones, play the hero, and take EDITH.', highlight: true },
    { h: 'Why it matters', body: 'He is the first character in the MCU to say "multiverse" to the audience — and he is lying. It quietly prepares people for the real thing two years later.' },
    { h: 'The ending', body: 'Peter sees through it and beats him in London; Beck dies to his own misfiring drones. Peter and MJ get together.' },
    { h: 'The post-credits scene that lights the fuse', body: 'Beck\'s pre-recorded fake footage goes public — framing Spider-Man for his death and naming Peter Parker to the entire world. It is broadcast by J. Jonah Jameson of The Daily Bugle, played by J.K. Simmons, the same actor from the Raimi films.', highlight: true }
  ],
  related: ['no-way-home', 'endgame', 'homecoming', 'spider-man-4']
}

];
