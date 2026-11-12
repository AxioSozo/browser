# Engine bench summary — run 43225405993

Component benchmark over the AXCF pipe (tools/engine-bench). Median over repetitions, [p95]. Never Zen E1/E2 evidence. GitHub-hosted runners have no GPU: every engine renders in software.

- **webkit**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, AMD EPYC 9V74 80-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie), GPU nodes none
- **webkit+damage**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, AMD EPYC 9V74 80-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie), GPU nodes none
- **webkit+damage+payload**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, AMD EPYC 9V74 80-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie), GPU nodes none

| Metric | webkit | webkit+damage | webkit+damage+payload |
| --- | --- | --- | --- |
| Spawn → ready | 32 ms [41] | 34 ms [38] | 33 ms [39] |
| Create → first frame (1×) | 392 ms [397] | 374 ms [398] | 390 ms [402] |
| Create → painted frame (1×) | 392 ms [398] | 374 ms [398] | 390 ms [402] |
| Navigate → painted frame (static, 1×) | 55 ms [56] | 55 ms [56] | 54 ms |
| Idle frames/s (static page) | 0.00 | 0.00 | 0.00 |
| Processes after create | 5 | 5 | 5 |
| RSS after create (host+helpers) | 405 MB [406] | 407 MB [414] | 407 MB [409] |
| PSS after create (host+helpers) | 270 MB [272] | 270 MB [276] | 272 MB [275] |
| Close → host exit | 128 ms [129] | 179 ms [182] | 168 ms [178] |
| Close → no helper left | 128 ms [129] | 179 ms [182] | 168 ms [178] |
| **1× (900×650 CSS px → 900×650 px)** | | | |
| rAF fps | 58.0 [58.2] | 57.8 [58.2] | 58.0 [58.2] |
| rAF frame interval median | 17.2 ms [17.6] | 17.3 ms [17.4] | 17.2 ms [17.4] |
| rAF frame interval p99 | 18.6 ms [18.8] | 18.5 ms [19.4] | 18.8 ms [19.0] |
| rAF intervals > 25 ms | 0.000 | 0.000 [0.007] | 0.000 |
| rAF pipe throughput | 136 MB/s | 135 MB/s [136] | 29 MB/s |
| rAF bytes/frame | 2340341 B | 2340368 B | 498467 B [499035] |
| rAF client read time/frame | 0.73 ms [2.71] | 0.74 ms [2.62] | 0.13 ms [0.22] |
| rAF changed-row band (share of frame) | 0.423 | 0.423 | — |
| rAF host damage share (damage run) | — | 0.213 | 0.213 |
| rAF CPU host+helpers | 55 % [58] | 58 % | 52 % [57] |
| rAF RSS host+helpers | 415 MB [416] | 417 MB [422] | 416 MB [418] |
| Scroll fps (wheel 60 Hz) | 57.8 [58.2] | 55.4 [55.8] | 55.0 [55.4] |
| Scroll frame interval p99 | 19.0 ms [32.9] | 34.8 ms [35.3] | 34.8 ms [35.3] |
| Scroll pipe throughput | 135 MB/s [136] | 130 MB/s [131] | 128 MB/s [129] |
| Scroll CPU host+helpers | 58 % [61] | 55 % [56] | 56 % [61] |
| Scroll host damage share (damage run) | — | 0.988 [0.999] | 0.988 [0.992] |
| Image page scroll fps | 57.8 [58.0] | 57.4 [58.0] | 57.4 |
| DOM page scroll fps | 58.0 [58.2] | 55.0 [55.4] | 54.8 [55.6] |
| Key → changed frame (pooled) | 7.3 ms [21.4] | 7.4 ms [21.3] | 7.2 ms [7.7] |
| Key → title event (median of reps) | 1.2 ms [1.3] | 1.2 ms | 1.2 ms [1.3] |
| Wheel → changed frame (pooled) | 7.4 ms [21.8] | 7.4 ms [22.0] | 7.2 ms [20.2] |
| Image page navigate → painted | 320 ms [336] | 320 ms | 319 ms [320] |
| DOM page navigate → painted | 420 ms [436] | 426 ms [443] | 428 ms [440] |
| Resize → frame at new size | 0 ms | 0 ms | 0 ms |
| **2× (900×650 CSS px → 1800×1300 px)** | | | |
| rAF fps | 57.2 [57.7] | 56.9 [57.5] | 58.0 [58.2] |
| rAF frame interval median | 17.3 ms [17.4] | 17.3 ms [17.4] | 17.2 ms [17.3] |
| rAF frame interval p99 | 23.5 ms [24.6] | 22.8 ms [32.6] | 19.4 ms [20.0] |
| rAF intervals > 25 ms | 0.000 [0.004] | 0.000 [0.025] | 0.000 [0.004] |
| rAF pipe throughput | 535 MB/s [540] | 532 MB/s [538] | 115 MB/s [116] |
| rAF bytes/frame | 9360346 B | 9360374 B | 1984941 B [1989675] |
| rAF client read time/frame | 14.31 ms [14.46] | 14.51 ms [14.57] | 0.56 ms [1.17] |
| rAF changed-row band (share of frame) | 0.422 | 0.422 | — |
| rAF host damage share (damage run) | — | 0.211 | 0.212 |
| rAF CPU host+helpers | 216 % [219] | 220 % [224] | 204 % [207] |
| rAF RSS host+helpers | 574 MB [582] | 581 MB [588] | 585 MB [586] |
| Scroll fps (wheel 60 Hz) | 56.8 [57.3] | 48.2 [49.4] | 53.6 [55.4] |
| Scroll frame interval p99 | 29.9 ms [33.5] | 37.9 ms [39.4] | 34.6 ms [38.4] |
| Scroll pipe throughput | 531 MB/s [536] | 451 MB/s [462] | 499 MB/s [510] |
| Scroll CPU host+helpers | 217 % [221] | 216 % [221] | 214 % [217] |
| Scroll host damage share (damage run) | — | 0.987 [0.995] | 0.995 [0.999] |
| Image page scroll fps | 46.4 [46.9] | 42.6 [47.3] | 45.4 [45.9] |
| DOM page scroll fps | 56.8 [57.0] | 49.6 [52.8] | 53.6 [54.8] |
| Key → changed frame (pooled) | 30.2 ms [38.4] | 30.9 ms [40.4] | 22.8 ms [24.1] |
| Key → title event (median of reps) | 1.2 ms | 1.2 ms | 1.2 ms [1.3] |
| Wheel → changed frame (pooled) | 36.5 ms [44.3] | 30.8 ms [44.0] | 26.3 ms [37.7] |
| Image page navigate → painted | 201 ms [205] | 192 ms [202] | 188 ms [190] |
| DOM page navigate → painted | 467 ms [475] | 458 ms [472] | 448 ms [461] |
| Resize → frame at new size | 254 ms [264] | 256 ms [273] | 251 ms [257] |
| **A/B: stdout pipe enlarged to 1 MiB (2×)** | | | |
| rAF fps, 1 MiB pipe | 57.3 [57.7] | — | — |
| rAF client read/frame, 1 MiB pipe | 13.22 ms [14.19] | — | — |
| Scroll fps, 1 MiB pipe | 56.6 [56.9] | — | — |
| Scroll CPU, 1 MiB pipe | 222 % [226] | — | — |
