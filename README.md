[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/signature15/worldnews-frontpage-daily/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/signature15/worldnews-frontpage-daily/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

# worldnews-frontpage-daily

The world's news of **Tuesday 17 November 2026**, laid out like a printed
front page and shipped as a single poster image. This repository is an
entry for make.fun's [`news-image-20261117`](https://make.fun/bounty/news-image-20261117) contest.

## What it does

Running this repository produces exactly one artifact: `entry.png`, the
finished poster committed alongside the code, copied byte-for-byte into
the output directory. The program that does it — `main.ts` — is a
handful of lines on the Node.js standard library: no dependencies, no
build step, no network, no rendering at run time.

## The image

The poster borrows the grammar of a newspaper front page so one day of
world news can be taken in at a glance:

- a **masthead** carrying the edition's name and the day's date,
  setting the tone the way a real paper's does;
- a **six-continent map band** running across the page, anchoring every
  story to the place it happened;
- **three columns of 30 regional headline cards**, grouped so a reader
  can sweep a column and leave knowing what happened where.

Stories were chosen for breadth — every inhabited continent represented,
and a spread of topics within each — rather than for any single angle on
the day.

## How to run

```sh
node main.ts
```

writes `/output/entry.png` — the grading container's convention. Outside
that container, point `MAKEFUN_OUTPUT_DIR` at any directory you want the
image in:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

Requires Node 22 or later. Nothing to install first — the program uses
only the standard library.

## Determinism

The program never generates anything: it copies the committed
`entry.png` verbatim, and resolves the source from its own location on
disk rather than the caller's working directory. Two runs therefore
write identical bytes — same machine or different ones, seconds apart or
days apart, invoked from any directory. Reproducibility here is not a
property of the environment; it is the absence of anything that could
vary.

## License

[MIT](./LICENSE) — see the [LICENSE](./LICENSE) file in this repository.
