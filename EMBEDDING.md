# Embedding Pumpkin 2048

The repository root is a complete static game. Serve its files over HTTP(S), then embed `index.html` or the directory URL. The game has no third-party iframe, CDN, login or server dependency.

## Automatic viewport layout

Compact layout activates when the page is in an iframe, when the top-level viewport is at most 700 px tall, or when `?embed=1` is present. It uses the actual iframe viewport, including changes during fullscreen, resizing and device rotation.

The large introduction and decorative garden give their space to the game. Help, sound, language, mode, score, restart, undo, directional controls and applicable trial controls remain available. JavaScript calculates the square board size from the space remaining after those controls. At a width of at least 620 px and a height of at most 500 px, controls sit beside the board to support a short landscape window.

The game document does not need page scrolling in this layout. Help dialogs and result panels may scroll internally if their text needs more room. Classic rules and trial rules are identical in standalone and embedded views.

## Suggested host configuration

For the existing host's game metadata, use:

```js
{
  mobile: false,
  auto_mobile: false
}
```

These flags are an integration recommendation: the game already adapts to portrait and landscape sizes, so it should receive the full game area without another portrait wrapper or automatic scaling layer. This repository does not edit the host application.

For a fixed desktop area:

```html
<div style="position:relative;width:100%;height:654px;overflow:hidden">
  <iframe
    src="https://halloween-2048.crazy3d.org/?embed=1"
    title="Pumpkin 2048"
    style="position:absolute;inset:0;width:100%;height:100%;border:0"
    scrolling="no"
    allow="fullscreen; clipboard-write; web-share"
    allowfullscreen
  ></iframe>
</div>
```

The integration owner verified that the current host has a 654 px desktop game area, a mobile `100dvh` game area, and a separate 50 px game toolbar. A child page cannot reclaim space used by that parent toolbar. If both must fit in one mobile screen, the host should give the game area the remaining flex height, or use `height: calc(100dvh - 50px)` after accounting for any other visible host navigation. In fullscreen, use `100dvh` only when host controls are hidden or overlaid. The iframe should remain 100% of the resulting game area.

## Validation and limits

Implementation targets are 1152 × 654, 960 × 600, 390 × 650, 390 × 844 and 844 × 390 CSS pixels. The release owner verified compact layout in the real browser at 1160 × 654, 390 × 794, 390 × 650 and 844 × 340, with no document overflow or clipped controls, including a four-move trial win and undo. This does not claim that every possible iframe size or browser has been tested.

Below these sizes, controls and text still require physical space; use host fullscreen rather than scaling the game into a miniature frame. Browser zoom and large system text can increase space requirements. Arrow keys require focus within the game iframe; clicking the board or its buttons provides it. Swipe and on-screen arrows provide alternatives.

`?trial=1` through `?trial=3` opens a deterministic Lantern Trial. For a top-level compact preview, combine parameters, for example `?embed=1&trial=1`. The three verified no-spell solutions are documented in the tests. Local best scores and settings belong to the game origin/browser; iframe storage restrictions may disable persistence without preventing play. Clipboard and native sharing depend on browser permission and secure-context support; visible result text remains the fallback.
