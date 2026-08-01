# The Complete MCU Guide

A newcomer's reference for the Marvel Cinematic Universe, covering six phases and two sagas — from *Iron Man* in 2008 through to *Secret Wars* in 2027.

> Live site: <https://ted369369.github.io/mcu-/>

---

## What it covers

**87 works**, each with a full plot breakdown, the turns that matter, and cross-links to everything related:

| Type | Count | Contents |
| --- | --- | --- |
| Films | 45 | All 40 MCU films across Phases 1–6, plus the 5 Sony Spider-Man films |
| Series | 32 | The full Disney+ run, the Netflix Defenders Saga, and the older Marvel Television shows |
| Specials | 5 | Werewolf by Night, the Holiday Special, I Am Groot, the Punisher special |
| One-Shots | 5 | The 2011–2014 shorts released with the Blu-rays |

### By saga

- **The Infinity Saga** (Phases 1–3, 23 works) — Thanos and the six Infinity Stones
- **The Multiverse Saga** (Phases 4–6, 45 works) — Doctor Doom and the collapsing multiverse
- **Marvel One-Shots** (5)
- **The Defenders Saga** (6) — now on the official Disney+ MCU timeline
- **Marvel Television** (3) — included, and clearly flagged as ambiguous canon
- **Sony's Spider-Man films** (5) — the universes *No Way Home* draws on

---

## The site

| Page | Contents |
| --- | --- |
| **Home** | The short version, key things to know, the 10-title spine, six ways in |
| **Timeline** | All 87 works, switchable between release order and in-story chronology, filterable by eight categories |
| **Phases** | Browse by Marvel's own Phase and Saga structure — 11 blocks |
| **Characters** | 116 characters, each with a personal timeline |
| **Concepts** | 22 core terms, the six Infinity Stones and their fates, 18 factions |
| **Spider-Man 4** | Full dossier on the most recent release |
| **Watch Guide** | The essential spine, release vs chronological order, which series to skip, a staged plan, and caveats |

### Three ways to follow the story

1. **By timeline** — release order (recommended for a first watch) or in-story chronology.
2. **By phase** — Marvel's own structure, which is the fastest way to see how it all fits.
3. **By character** — open anyone and see what happens to them in each work, as one continuous arc.

Works and characters are **linked in both directions**, and concepts and Stones link through to the works they appear in.

### Reader features

- **Spoiler shield** (on by default) — endings, deaths, reveals and credit scenes are blurred until you click, with a global toggle.
- **Watched tracking** — mark anything watched; stored in your browser, with a header progress bar and an unwatched-only filter.
- **Light and dark themes**, remembered between visits.
- **Previous / next** navigation between works inside the detail view.
- Keyboard support: `/` focuses search, `Esc` closes.

---

## Technical

A static site with **no dependencies and no external requests**:

```
index.html                      # single-page app shell
assets/css/style.css            # design system
assets/js/data-works-1.js       # Infinity Saga, Phases 1-3
assets/js/data-works-2.js       # Multiverse Saga, Phases 4-6
assets/js/data-works-3.js       # One-Shots / Defenders / Marvel TV / Sony
assets/js/data-details.js       # runtimes, cast, credit scenes, quotes, deaths
assets/js/data-characters.js    # characters, part 1
assets/js/data-characters-2.js  # characters, part 2
assets/js/data-extra.js         # taxonomy, concepts, Stones, phases, watch guide
assets/js/art.js                # original SVG artwork system
assets/js/app.js                # hash router and search
```

- No build step, no npm, no framework — open `index.html` and it runs
- No CDN, no external fonts, no remote images — works offline
- Responsive, and deep links are shareable: `#/e/no-way-home`, `#/c/peter-parker`, `#/k/multiverse`

### About the images

Every image is **original vector artwork drawn for this site** — the 50 hand-drawn emblems in `assets/js/art.js`, plus procedurally generated gradient posters and gems.

Film stills and promotional images are deliberately not used. They are copyrighted material, and putting them on a public site is not something to do casually. Original artwork also means the site is entirely self-contained: it works offline, loads fast, and nothing can break or expire.

---

## Running it locally

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>. Opening `index.html` directly works too.

## Editing content

All the prose lives in `assets/js/data-*.js`. Edit, save, reload — there is nothing to compile.

After changing any file, bump the `?v=10` query in `index.html` (to `?v=11`, and so on) so returning visitors get the new version instead of a cached one.

---

## Sources and reliability

The work list, release dates, directors and cast were checked against Wikipedia's MCU Phase One–Six articles and the *Avengers: Doomsday* article. Plot summaries are drawn from the works themselves.

**Please note:**

- Everything up to and including 2025 has been released and is settled.
- **2026–2027 titles** (*Spider-Man 4*, *Doomsday*, *Secret Wars* and some series) draw on trailers, official synopses and press coverage — treat the finished films as authoritative.
- **Kang is no longer the overarching villain.** Following the actor's legal case, Marvel replaced him with Doctor Doom. Any source still calling Kang the *Doomsday* villain is out of date.
- **Sadie Sink's role in *Spider-Man 4* has not been announced.** Speculation about Jean Grey, Gwen Stacy or Spider-Gwen is rumour.
- **Marvel Television's older shows** (*Agents of S.H.I.E.L.D.*, *Agent Carter* and the rest) are not on the official Disney+ timeline, and are flagged as such throughout. The Netflix Defenders Saga, by contrast, is now canon.
- Chronological ordering follows the official timeline and on-screen evidence. A few works genuinely resist a single date — *Loki* happens outside of time, *What If…?* spans universes — and those are flagged individually.

The Watch Guide page carries the full set of caveats.

**This site contains heavy spoilers.** So that someone who has seen none of it can still follow the world, every major twist and ending is stated outright. Spoiler shielding is on by default.

---

## Disclaimer

This is a non-commercial fan reference. It is not affiliated with, authorised by, or endorsed by Marvel Studios, Sony Pictures or The Walt Disney Company. All titles, character names and trademarks belong to their respective owners.
