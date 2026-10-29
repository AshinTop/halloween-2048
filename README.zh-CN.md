[English](README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [日本語](README.ja.md)

# Pumpkin 2048｜万圣节南瓜数字合成与灯笼试炼

🎃 推一推小南瓜，把月光花园里的灯一盏盏点亮。**Pumpkin 2048** 保留熟悉的 4×4 数字合成玩法，再加入三道需要考虑“数字最后落在哪里”的灯笼试炼。想轻松刷分，就逛经典花园；想认真想几步，就打开一份短小的谜题。

**[立即试玩](https://halloween-2048.crazy3d.org/)** · [浏览全部 12 款万圣节游戏](https://github.com/AshinTop/halloween-games) · [⭐ 在 GitHub 点亮 Star](https://github.com/AshinTop/halloween-2048)

README 提供五种语言版本。**游戏界面目前仅支持英语和简体中文**；文档翻译不代表新增了对应界面语言。

![Pumpkin 2048 的四乘四数字棋盘、南瓜插画与花园灯笼里程碑](docs/images/gameplay.jpg)

## 这款游戏有什么特别

- **经典花园**：按传统 2048 规则合成数字，挑战本地最高分；达到 2048 后仍可继续。
- **三道灯笼试炼**：固定起盘、指定目标位置和有限步数，过程中不生成随机新块。
- **每关一次月光交换**：交换两个已占用且数值不同的格子，消耗一步。三关均有无需交换也能完成的已验证解法。
- 原创南瓜 SVG 插画；达到 128、512、1024、2048 时点亮花园里程碑；可选合成音效与减少动态效果支持。
- 撤销会恢复棋盘、分数、步数和法术状态；滑动、方向按钮与键盘都可操作。

## 怎么玩

**经典花园**里，一次操作会把全部数字推向同一方向。相同数字相遇时相加，例如两个 8 变成 16；刚合成的块不会在同一步中再次合成。有效移动后生成一个 2 或 4；棋盘没有变化时，不会凭空新增方块。合出 2048 即达成目标，也可以继续挑战更大的数字。棋盘满了不一定结束，只有所有方向都无法继续时才算失败。

**灯笼试炼**先看目标栏：必须在规定步数内，让指定数字落在发光格子上。这里不会随机添块，适合反复推演。使用月光交换时，先点法术，再选两个数值不同的已有方块；空格和相同数值不能交换。交换算一步，撤销这次交换会同时返还法术。

## 操作方式

| 操作 | 输入方式 |
| --- | --- |
| 移动数字 | 方向键、触摸滑动或屏幕方向按钮 |
| 撤销 | **U** 或撤销按钮 |
| 月光交换 | 先选法术，再选两个数值不同的方块 |
| 取消法术选择 | **Esc** |
| 重来、帮助、音效 | 使用游戏按钮；键盘操作需要焦点位于游戏内 |

## 一点小策略

不要只看眼前能合出多大的数字，也要给下一组相同数字留出接近的路线。试炼尤其需要先观察目标格：数字正确、位置不对，仍然不算完成。月光交换能调整顺序，却也占用宝贵的一步。遇到分岔时，可以用撤销比较两条路线，而不必每次都从头开始。

## 存档与挑战链接

允许本地存储时，经典局面、偏好和本地记录会保留在当前浏览器。撤销历史只在本次页面会话中存在，最多保留 **50 步**，不会抹掉已经获得的最高分。可直接打开[灯笼试炼 1](https://halloween-2048.crazy3d.org/?trial=1)，把参数改成 2 或 3 即可进入对应关卡。分享内容包含实际结果与挑战链接；尚未通关时不会伪装成胜利。系统分享和剪贴板不可用时会显示可手动复制的文字。

## 实机界面截图与视频介绍

![Pumpkin 2048 在紧凑 iframe 中保留棋盘、分数、试炼功能和方向按钮](docs/images/mobile.jpg)

实际游戏在紧凑浏览器 iframe 中的截图，用于展示小窗口布局，不代表实体手机测试。

[打开视频播放器与文字介绍](https://halloween-2048.crazy3d.org/intro.html) · [下载 MP4](docs/media/intro.mp4)

**24 秒无声介绍视频**由真实游戏截图与字幕编排而成，用于介绍画面与玩法，并非连续操作录像或音效演示。

## 常见问题

### 经典模式也能用月光交换吗？

不能。月光交换只属于灯笼试炼，每关一次，且需要消耗一步。

### 三道试炼一定有解吗？

有。每道固定试炼都通过了完整的无道具解法验证；但随意选择的移动顺序仍可能把局面走坏。

### 能在另一台设备接着玩吗？

没有账号同步。存档属于浏览器和站点来源；存储被禁用时仍可正常游玩。

## 本地运行与嵌入

在仓库根目录启动 HTTP 服务：

```sh
python3 -m http.server 4173
```

打开 **http://localhost:4173/**。无需构建或安装依赖；直接使用 `file://` 可能阻止 JavaScript 模块加载。

使用 Node 运行内置检查：

```sh
npm test
```

内置检查覆盖单步只合并一次、无变化移动、确定性生成、失败判断、法术成本、三关完整解法，以及损坏存档和链接参数的安全解析。它们不等同于真实手机性能测试。

```html
<iframe src="https://halloween-2048.crazy3d.org/?embed=1"
  title="Pumpkin 2048"
  style="display:block;width:100%;height:654px;border:0"
  allow="fullscreen" allowfullscreen></iframe>
```

桌面基线为 **1160×654 CSS 像素**，还检查过 390×650、390×794 和 844×340 的浏览器窗口。棋盘按 iframe 实际空间缩放，帮助和结果面板可以在内部滚动。

尺寸、存储、焦点和权限说明见[嵌入文档](EMBEDDING.md)。请按扣除主站工具栏后的实际剩余高度设置 iframe。

## 继续逛逛万圣节小游戏集

- **[Pumpkin Shift](https://halloween-pumpkin-shift.crazy3d.org/)** · [源码](https://github.com/AshinTop/halloween-pumpkin-shift) — 滑动数字方块，利用有限的月光滑移通过 12 个房间。
- **[Witch’s Candy Blocks](https://halloween-block-blast.crazy3d.org/)** · [源码](https://github.com/AshinTop/halloween-block-blast) — 在 8×8 棋盘摆放糖果方块，完成魔药订单。
- **[Ghost Lanterns 3D](https://halloween-3d.crazy3d.org/)** · [源码](https://github.com/AshinTop/halloween-3d) — 用翻灯规则与灵魂连线点亮南瓜花园。
- **[Trick-or-Treat TriPeaks](https://halloween-tripeaks.crazy3d.org/)** · [源码](https://github.com/AshinTop/halloween-tripeaks) — 串连相邻点数纸牌，挑战八个营救牌局。

## 创作说明与支持

为 **AshinTop** 与 **Midnight Candy Club** 制作，由人主导、AI 辅助设计、编程和审查。插画与合成音效为本项目创作。游戏无需远程账号；托管服务可以独立加入脚本或请求日志。

喜欢的话，欢迎**[点亮 GitHub Star](https://github.com/AshinTop/halloween-2048)**。反馈问题时，请附浏览器、iframe 尺寸、挑战链接与复现步骤。
