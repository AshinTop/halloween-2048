[English](README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [日本語](README.ja.md)

# Pumpkin 2048 — Halloween Number Puzzle and Lantern Trials

🎃 Slide a little pumpkin, make a bigger pumpkin, and wake the garden one lantern at a time. **Pumpkin 2048** brings the familiar 4×4 number puzzle to a moonlit Halloween garden. Play an open-ended Classic round or a short Lantern Trial where the final position matters as much as the number.

**[Play online](https://halloween-2048.crazy3d.org/)** · [Explore all 12 Halloween games](https://github.com/AshinTop/halloween-games) · [⭐ Star this repository](https://github.com/AshinTop/halloween-2048)

README translations cover five languages. The **game interface currently supports English and Simplified Chinese only**.

![Pumpkin 2048 with a four-by-four number board, illustrated pumpkins, and glowing garden milestones](docs/images/gameplay.jpg)

## What makes it special

- **Classic Garden:** familiar 2048 merging, a best-score chase, and continued play after reaching 2048.
- **Three Lantern Trials:** fixed boards, a marked destination, and a move allowance; no random tiles appear during these challenges.
- **One Moon Swap per trial:** trade two occupied, differently numbered tiles at the cost of one move. All three trials also have verified solutions without it.
- Original pumpkin SVG art, four garden milestones at 128, 512, 1024, and 2048, optional synthesized chimes, and reduced-motion support.
- Undo restores the board, score, move count, and unused spell state. Compact controls work with touch, mouse, or keyboard.

## How to play

In **Classic Garden**, slide every tile in a chosen direction. Equal numbers that meet combine: two 8s become 16. A newly merged tile cannot merge twice in the same move. Each successful move adds a 2 or 4; pressing a direction that changes nothing adds no tile. Reach 2048, then continue if you want. A full board ends the round only when no legal move remains.

In **Lantern Trials**, read the goal strip before moving. You must create the stated number on the glowing square within the allowance. The fixed starting board does not generate new tiles. To use Moon Swap, select the spell and then two occupied tiles with different values. Empty squares and equal values cannot be swapped. The spell spends one move; undoing that exchange restores it.

## Controls

| Action | Input |
| --- | --- |
| Slide | Arrow keys, swipe, or visible direction buttons |
| Undo | **U** or Undo |
| Moon Swap | Select the spell, then two differently numbered tiles |
| Clear a spell selection | **Esc** |
| Restart / help / sound | Use the in-game controls; focus the iframe for keyboard input |

## A little strategy

Keep useful equal values within reach instead of chasing every immediate merge. In a trial, study the target square before committing to a direction: a large tile in the wrong place is not a completed challenge. Moon Swap can rescue a plan, but its move cost still matters. Undo is a good way to compare two routes rather than restarting after every experiment.

## Progress and challenge links

Classic progress, preferences, and local records stay in the current browser when storage is available. Undo history lasts for the current page session and holds up to **50 moves**; it does not erase an already achieved best score. Try [Lantern Trial 1](https://halloween-2048.crazy3d.org/?trial=1), or change the number to 2 or 3. Sharing identifies the challenge and actual result; unfinished trial sharing does not claim a win. System sharing or clipboard copying falls back to visible text when unavailable.

## Screenshots and video

![Pumpkin 2048 compact iframe showing the board, score, trial controls, and direction buttons](docs/images/mobile.jpg)

Actual game screenshot from a compact browser iframe; this demonstrates the small-window layout, not a physical-phone test.

[Video player and transcript](https://halloween-2048.crazy3d.org/intro.html) · [Download the MP4](docs/media/intro.mp4)

The **24-second silent introduction** combines actual screenshots and captions. It is a visual tour, not continuous gameplay footage or an audio demonstration.

## Frequently asked questions

### Does Moon Swap work in Classic Garden?

No. It belongs to Lantern Trials. Each trial allows one swap, and the move budget includes it.

### Is every trial solvable?

Yes: the three authored boards have complete tested no-spell solutions. That does not mean every sequence of moves will succeed.

### Can I continue the same save on another device?

There is no account synchronization. Records belong to the browser and site origin; blocked storage does not prevent play.

## Run locally and embed

Serve the repository root over HTTP:

```sh
python3 -m http.server 4173
```

Open **http://localhost:4173/**. No build or dependencies are needed. Use HTTP: `file://` can block JavaScript modules.

Run the included Node checks:

```sh
npm test
```

Tests cover merge-once behavior, unchanged moves, deterministic spawning, losses, spell costs, full trial solutions, and defensive preference/link parsing. They check rules, not physical-phone performance.

```html
<iframe src="https://halloween-2048.crazy3d.org/?embed=1"
  title="Pumpkin 2048"
  style="display:block;width:100%;height:654px;border:0"
  allow="fullscreen" allowfullscreen></iframe>
```

The desktop baseline is **1160×654 CSS pixels**. Compact browser review also covered 390×650, 390×794, and 844×340 windows. The board adapts to its own iframe viewport; help and result text can scroll inside their panels.

See [EMBEDDING.md](EMBEDDING.md) for sizing, storage, input focus, and permissions. Measure available iframe height after the host toolbar.

## More little Halloween adventures

- **[Pumpkin Shift](https://halloween-pumpkin-shift.crazy3d.org/)** · [Source](https://github.com/AshinTop/halloween-pumpkin-shift) — Slide numbered tiles through 12 rooms with limited Moon Glides.
- **[Witch’s Candy Blocks](https://halloween-block-blast.crazy3d.org/)** · [Source](https://github.com/AshinTop/halloween-block-blast) — Fit candy shapes into an 8×8 board and complete potion orders.
- **[Ghost Lanterns 3D](https://halloween-3d.crazy3d.org/)** · [Source](https://github.com/AshinTop/halloween-3d) — Light a pumpkin garden with classic Lights Out logic and soul links.
- **[Trick-or-Treat TriPeaks](https://halloween-tripeaks.crazy3d.org/)** · [Source](https://github.com/AshinTop/halloween-tripeaks) — Build adjacent-rank card chains across eight rescue deals.

## Credits and support

Created for **AshinTop** and **Midnight Candy Club** with human-directed, AI-assisted design, programming, and review. Artwork and synthesized sounds are original to this project. The game needs no remote account; hosting may independently add scripts or request logs.

Enjoyed playing? **[Leave a GitHub Star](https://github.com/AshinTop/halloween-2048)**. For bug reports, include browser, iframe size, challenge link, and reproduction steps.
