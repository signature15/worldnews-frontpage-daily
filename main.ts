import { join } from 'node:path';
/**
 * worldnews-frontpage-daily — entrypoint for make.fun's news-image
 * contest (news-image-20261117).
 *
 * What it does
 * ------------
 * Copies the repository's rendered poster, entry.png, into the output
 * directory under the same name. The poster is a hybrid layout: newsprint
 * cream page with dark navy story cards — 40 stories across 7 color-coded
 * regions, a day-in-numbers strip, two-column city list, and date-check
 * footer for Wednesday 18 November 2026. That single byte-for-byte file copy is the entire program,
 * built on the Node.js standard library alone (node:fs, node:path): no
 * dependencies, no build step, and no code path that can vary from one
 * run to the next.
 *
 * Determinism
 * -----------
 * Two runs write identical bytes — same machine or different ones,
 * invoked from any directory, at any time. This is guaranteed by
 * construction, not by care: the program generates nothing, so no
 * timestamp, random value, locale-dependent format, or re-render can
 * leak into the output. The bytes written are always exactly the
 * committed entry.png. The source is resolved from this module's own
 * location via import.meta.url rather than the process working
 * directory, so the caller's cwd cannot change the result.
 *
 * Why no network is needed
 * ------------------------
 * Every input lives in the repository already: the image is committed
 * beside this file, and the destination is a local path supplied by the
 * harness. The program fetches nothing, which keeps it runnable in an
 * offline grading container and makes the output depend solely on bytes
 * under version control.
 *
 * The output directory
 * --------------------
 * Inside the grading container the destination is /output. Everywhere
 * else, the MAKEFUN_OUTPUT_DIR environment variable names the directory
 * to write into instead — it stands in for /output wholesale, so the
 * same one-liner serves local checks:
 *
 *   MAKEFUN_OUTPUT_DIR=./out node main.ts   # writes ./out/entry.png
 */
import { copyFileSync } from 'node:fs';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
