/**
 * make.fun image contest entrypoint.
 *
 * Deterministic: the whole program is one step — a byte-for-byte copy
 * of the repository's entry.png into the output directory — so every
 * run, on any machine and from any working directory, yields identical
 * bytes. Nothing environment-dependent (timestamps, randomness, cwd)
 * reaches the output; the source is resolved from this module's own
 * location via import.meta.url, not the process cwd.
 *
 * Needs no network: the only input is entry.png, committed alongside
 * this file, and the only work is one local filesystem copy. Nothing
 * is fetched or contacted.
 *
 * The grader supplies /output as the destination directory; anywhere
 * else, MAKEFUN_OUTPUT_DIR stands in for it.
 */
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
