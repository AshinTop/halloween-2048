# Pumpkin 2048 — Halloween 2048 Game with Lantern Trials

**Slide, merge, and wake the Pumpkin King.** Pumpkin 2048 brings the familiar 4×4 number puzzle into a moonlit Halloween garden, with original pumpkin artwork and three short, deterministic challenges that ask you to think about *where* a merge ends.

[**GitHub Pages deployment target**](https://ashintop.github.io/halloween-2048/) · [Watch the visual introduction](docs/media/intro.mp4) · [How to play](#how-to-play) · [Embed the game](#embed-pumpkin-2048)

**Deployment status:** GitHub Pages is not live yet. The `ashintop.github.io` links in this document are intended deployment addresses. Use the local-run instructions until the hosted game has been published and verified.

[Video player and transcript (deployment target)](https://ashintop.github.io/halloween-2048/intro.html) · [Captioned MP4 file](docs/media/intro.mp4). The 24-second silent introduction uses actual game screenshots; it is not a live gameplay recording.

[![Pumpkin 2048 gameplay: a moonlit four-by-four number board with pumpkin tiles and garden milestones](docs/images/gameplay.jpg)](docs/media/intro.mp4)

If you enjoy this Halloween puzzle or find the implementation useful, **[star this repository](https://github.com/AshinTop/halloween-2048)** to keep it in your collection. Bug reports with the game mode, browser, and steps to reproduce are welcome.

## What makes this garden different?

Pumpkin 2048 has two complementary ways to play. **Classic Garden** is an open-ended score chase using traditional 2048 merge rules. **Lantern Trials** turn the board into a positional puzzle: reach a specified number on a glowing square before your move allowance runs out.

- **Classic 4×4 2048:** combine matching values, build a high score, reach 2048, and continue beyond it.
- **Three authored Lantern Trials:** fixed starting boards, no random tile spawns, and complete solutions verified by automated tests.
- **One Moon Swap per trial:** exchange two occupied tiles with different values at the cost of one move. Every trial can also be solved without the spell.
- **A garden that lights up:** reaching 128, 512, 1024, and 2048 illuminates the illustrated lantern milestones.
- **Undo and local progress:** restore the previous board, score, move count, and spell state; keep classic progress and personal records on the same browser.
- **English and Simplified Chinese:** switch language in the game without leaving the board.
- **Self-contained presentation:** original SVG artwork, locally synthesized sound after user interaction, reduced-motion support, and no external game engine or CDN.

The game was made for [2048 Online](https://2048online.top) and the Midnight Candy Club Halloween collection. It can also run independently from any static web host.

## How to play

### Classic Garden

Move all tiles in one direction. Two equal values that meet become a single tile with their combined value: two 8s become 16, for example. A newly merged tile cannot merge again during the same move. A successful move adds a new 2 or 4; a move that leaves the board unchanged does not add a tile.

Build a 2048 tile to awaken the Pumpkin King. You can then continue growing larger tiles. A full board is not automatically a loss: the game ends only when no direction offers a legal move.

### Lantern Trials

Select **Lantern Trials**, then choose one of the three puzzles. The goal strip states the target number, marked destination, and move allowance. These boards do not spawn new tiles, so the same starting position always supports the same solution.

For a Moon Swap, select the spell, then select two numbered tiles with different values. Empty squares cannot be swapped. The exchange costs one move and uses the trial's single spell. Undo restores the spell if you undo that exchange.

## Controls

| Action | Input |
| --- | --- |
| Slide the board | Arrow keys, touch swipe, or on-screen direction buttons |
| Undo | **U** or the Undo button |
| Use Moon Swap | Select the spell, then two different numbered tiles |
| Cancel a spell selection | **Esc** |
| Restart | New Garden in classic mode; Retry in a trial |
| Help, sound, language | Header buttons |

Undo history is available during the current page session and retains up to 50 previous moves. Classic save data and the best score are stored separately from that history. Undo does not erase an already achieved personal best.

## Share a challenge

The Share button prepares a result and game link. On supported devices it opens the system share sheet; otherwise it attempts to copy the text. The three trial links are reproducible:

- [Lantern Trial 1](https://ashintop.github.io/halloween-2048/?trial=1)
- [Lantern Trial 2](https://ashintop.github.io/halloween-2048/?trial=2)
- [Lantern Trial 3](https://ashintop.github.io/halloween-2048/?trial=3)

In-progress trial sharing identifies the challenge without claiming it has been won. If sharing or clipboard access is unavailable, the game displays the result text.

## Frequently asked questions

### Does this change the classic 2048 rules?

Classic Garden keeps the traditional 4×4 merging rules. The positional goals and Moon Swap belong to Lantern Trials, so the two modes have clearly different objectives.

### Are the trials random or luck based?

No new tiles spawn in trials. Their initial positions are fixed, and all three have tested solutions that do not require Moon Swap.

### Does the game save my progress?

Classic progress, highest score, completed trials, language, and sound preference are saved locally when browser storage is available. Saves belong to the browser and origin where you played; there is no account, cloud synchronization, or online leaderboard. The game still runs when storage is blocked.

### Can I play on a phone or inside an iframe?

The interface supports touch swipes and visible direction buttons. Embedded and short windows use a compact layout, while larger standalone windows can show the garden illustration. See [EMBEDDING.md](EMBEDDING.md) for tested browser viewport sizes and integration details. Responsive browser checks are not a claim of testing every physical phone.

### Is an installation or sign-in required?

The standalone game is a static browser application. It needs no game account, API key, package download, or external media player. Serve it over HTTP or HTTPS so the browser can load its JavaScript modules.

## Run locally

From the repository directory:

```sh
python3 -m http.server 4173
```

Open [http://localhost:4173](http://localhost:4173). There is no build step or dependency installation. Opening `index.html` directly with `file://` may block ES module loading.

Run the checks with Node.js:

```sh
npm test
```

For separate per-file output:

```sh
node tests/engine.test.js
node tests/startup.test.js
```

The eight checks cover merge-once semantics, no-op behavior, deterministic spawning, loss detection, spell costs, the complete trial solutions, and defensive startup parsing. Visual and interaction results are recorded separately from engine tests.

## Compact-player walkthrough

![Pumpkin 2048 in a compact host iframe, with the board, score, trial controls and directional buttons](docs/images/mobile.jpg)

Use the four direction buttons or swipe the board to merge. The score and challenge goal stay with the board, and Undo lets you compare the previous move. The compact player gives the puzzle the space normally used by the garden illustration.

*Actual interface captured in a browser iframe sized for the host player. This is a compact-window illustration, not a physical-phone test.*

## Embed Pumpkin 2048

Publish the repository root, then use its served URL:

```html
<iframe
  src="https://ashintop.github.io/halloween-2048/?embed=1"
  title="Pumpkin 2048 — Halloween number puzzle"
  width="100%"
  height="654"
  scrolling="no"
  allow="fullscreen"
  style="display:block;border:0"
></iframe>
```

The game sizes itself against the actual iframe viewport. Allocate space for any toolbar in the parent site rather than overlaying it on the board. It does not inspect or modify the parent page. See [EMBEDDING.md](EMBEDDING.md) for the full integration notes.

## Project structure

| File | Responsibility |
| --- | --- |
| `engine.js` | Pure board, merge, spawn, trial, and spell rules |
| `startup.js` | Preference and URL parsing defenses |
| `app.js` | Controls, rendering, localization, persistence, and sound |
| `index.html`, `style.css`, `icon.svg` | Interface and original vector artwork |
| `tests/` | Engine and startup regression checks |

## More Halloween games

- **[Pumpkin Shift](https://github.com/AshinTop/halloween-pumpkin-shift)** — 12 numbered sliding puzzles with limited Moon Glides.
- **[Witch’s Candy Blocks](https://github.com/AshinTop/halloween-block-blast)** — an 8×8 block-placement puzzle with potion orders.
- **[Ghost Lanterns 3D](https://github.com/AshinTop/halloween-3d)** — spatial Lights Out puzzles with linked lanterns.
- **[Trick-or-Treat TriPeaks](https://github.com/AshinTop/halloween-tripeaks)** — Halloween card chains and eight solvable rescue deals.

## Credits

Created for **AshinTop** and **Midnight Candy Club**, with AI-assisted design, implementation, and review. The Halloween illustrations, interface, and locally synthesized sound were produced for this project. This is an independent implementation of familiar 2048 gameplay; it does not imply endorsement by another game publisher. No analytics, payment system, or remote leaderboard is included.
