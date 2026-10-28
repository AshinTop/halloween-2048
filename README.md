# Pumpkin 2048 · 南瓜灯觉醒

For a fixed-height host game window, see [EMBEDDING.md](./EMBEDDING.md). Embedded pages automatically use a compact board-and-controls layout.

A complete, buildless browser game for the Halloween collection at **2048online.top**. The original artwork and interface belong to the **Midnight Candy Club** series.

## Play

Serve this directory with any static HTTP server:

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173`. No build, package download, external game player, API key or CDN is needed. JavaScript modules require HTTP rather than opening `index.html` directly as a local file.

## Two ways to play

- **Classic garden:** standard 4×4 2048. Equal numbers merge once per slide; only a successful move spawns a new tile. The garden lights up at 128, 512, 1024 and 2048. Continue beyond 2048.
- **Lantern trials:** three handcrafted, deterministic puzzles. No new tiles appear. Bring the target value to the marked square within the move allowance. One optional **Moon swap** exchanges two tiles with different values and consumes one move. All three trials have been verified as solvable without the spell.

Keyboard arrows, on-screen arrow buttons and touch swipes are supported. Undo restores the full previous board, score, move count and spell state. Undo history lasts for the current page session. Classic progress, highest score, completed trials, language and sound preference are saved locally when browser storage is available.

English and Simplified Chinese are available. Sound is synthesized locally after a user action. Reduced-motion preferences are respected. Sharing uses the device's share sheet when available, otherwise copies a text result and game link; if clipboard access is unavailable, the result is displayed on screen. `?trial=1`, `?trial=2` or `?trial=3` opens the corresponding trial.

## Files

- `engine.js`: pure merge, spawn, trial and spell rules.
- `app.js`: interface, input, localization, local persistence and synthesized sound.
- `index.html`, `style.css`, `icon.svg`: original vector artwork and responsive presentation.
- `tests/engine.test.js`: game-rule and solvability checks.

## Verify

```sh
npm test
```

Tests cover single-merge semantics, no-op behavior, seeded reproducibility, game-over detection, spell charges and move costs, and breadth-first validation of all three positional puzzles. Browser-level visual and interaction review is tracked separately by the release owner.

## Deployment and integration

Publish the repository root as static files, or embed its served `index.html` into the existing 2048 site. No live production site configuration is included or modified. Stored results are device-local; there is no online leaderboard or cross-site progress sync.

## 制作说明

本作保留经典合并规则，以原创南瓜园和阶段点灯反馈形成万圣节场景。新增的灯笼试炼把“合出目标数字”扩展为“在有限步数内送到指定位置”，一次月光交换提供额外的策略选择。所有试炼均已用搜索验证，不依赖随机运气或法术才能完成。
