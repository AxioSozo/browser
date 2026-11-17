# Engine bench summary — run 44065714644

Component benchmark over the AXCF pipe (tools/engine-bench). Median over repetitions, [p95]. Never Zen E1/E2 evidence. GitHub-hosted runners have no GPU: every engine renders in software.

- **webkit**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, INTEL(R) XEON(R) PLATINUM 8573C × 4, 15982 MB, Debian GNU/Linux 13 (trixie), GPU nodes none
- **webkit+damage**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, INTEL(R) XEON(R) PLATINUM 8573C × 4, 15982 MB, Debian GNU/Linux 13 (trixie), GPU nodes none
- **webkit+damage+payload**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, INTEL(R) XEON(R) PLATINUM 8573C × 4, 15982 MB, Debian GNU/Linux 13 (trixie), GPU nodes none

| Metric | webkit | webkit+damage | webkit+damage+payload |
| --- | --- | --- | --- |
| Spawn → ready | 41 ms [45] | 39 ms [43] | 40 ms [41] |
| Create → first frame (1×) | 412 ms [423] | 417 ms [426] | 413 ms [439] |
| Create → painted frame (1×) | 412 ms [424] | 418 ms [426] | 415 ms [440] |
| Navigate → painted frame (static, 1×) | 57 ms [65] | 57 ms [58] | 56 ms |
| Idle frames/s (static page) | 0.00 | 0.00 | 0.00 |
| Processes after create | 5 | 5 | 5 |
| RSS after create (host+helpers) | 406 MB [410] | 404 MB [407] | 408 MB [414] |
| PSS after create (host+helpers) | 270 MB [274] | 268 MB [273] | 274 MB [279] |
| Close → host exit | 130 ms [132] | 179 ms [180] | 175 ms [183] |
| Close → no helper left | 131 ms [132] | 179 ms [181] | 176 ms [183] |
| **1× (900×650 CSS px → 900×650 px)** | | | |
| rAF fps | 58.2 [58.4] | 57.8 | 57.8 [58.2] |
| rAF frame interval median | 17.1 ms [17.4] | 17.4 ms | 17.3 ms [17.4] |
| rAF frame interval p99 | 18.5 ms [18.7] | 18.6 ms [18.8] | 18.6 ms [19.0] |
| rAF intervals > 25 ms | 0.000 | 0.000 | 0.000 |
| rAF pipe throughput | 136 MB/s [137] | 135 MB/s | 29 MB/s |
| rAF bytes/frame | 2340341 B | 2340368 B | 497320 B [499035] |
| rAF client read time/frame | 1.23 ms [3.05] | 1.26 ms [3.06] | 0.18 ms [0.29] |
| rAF changed-row band (share of frame) | 0.423 | 0.423 | — |
| rAF host damage share (damage run) | — | 0.212 | 0.212 [0.213] |
| rAF CPU host+helpers | 67 % [69] | 71 % [72] | 67 % [69] |
| rAF RSS host+helpers | 416 MB [418] | 414 MB [416] | 418 MB [423] |
| Scroll fps (wheel 60 Hz) | 57.8 [58.0] | 55.4 [55.8] | 55.4 [55.6] |
| Scroll frame interval p99 | 19.2 ms [31.3] | 34.9 ms [35.3] | 35.0 ms [35.2] |
| Scroll pipe throughput | 135 MB/s [136] | 130 MB/s [131] | 128 MB/s [129] |
| Scroll CPU host+helpers | 66 % [70] | 69 % [72] | 70 % |
| Scroll host damage share (damage run) | — | 0.985 [0.992] | 0.988 [0.995] |
| Image page scroll fps | 57.8 | 57.2 [57.8] | 57.8 |
| DOM page scroll fps | 57.8 [58.0] | 54.4 [55.4] | 54.4 [55.0] |
| Key → changed frame (pooled) | 7.4 ms [23.7] | 22.8 ms [23.9] | 7.0 ms [15.4] |
| Key → title event (median of reps) | 1.7 ms [1.8] | 1.5 ms [1.6] | 1.5 ms |
| Wheel → changed frame (pooled) | 7.2 ms [23.9] | 7.7 ms [24.2] | 7.5 ms [23.1] |
| Image page navigate → painted | 401 ms [422] | 415 ms [417] | 405 ms [416] |
| DOM page navigate → painted | 462 ms [480] | 470 ms [486] | 464 ms [470] |
| Resize → frame at new size | 0 ms | 0 ms | 0 ms |
| **2× (900×650 CSS px → 1800×1300 px)** | | | |
| rAF fps | 51.2 [52.5] | 49.6 [51.1] | 58.0 [58.2] |
| rAF frame interval median | 18.2 ms [19.3] | 19.9 ms [20.2] | 17.2 ms |
| rAF frame interval p99 | 30.1 ms [33.7] | 27.8 ms [34.4] | 24.5 ms [24.7] |
| rAF intervals > 25 ms | 0.094 [0.121] | 0.036 [0.037] | 0.004 [0.007] |
| rAF pipe throughput | 479 MB/s [491] | 464 MB/s [478] | 115 MB/s [116] |
| rAF bytes/frame | 9360346 B | 9360374 B | 1984941 B [1989675] |
| rAF client read time/frame | 16.10 ms [16.57] | 16.48 ms [16.70] | 0.86 ms [1.51] |
| rAF changed-row band (share of frame) | 0.422 | 0.422 | — |
| rAF host damage share (damage run) | — | 0.213 | 0.212 |
| rAF CPU host+helpers | 240 % [243] | 233 % [235] | 242 % [243] |
| rAF RSS host+helpers | 581 MB [609] | 579 MB [614] | 592 MB [617] |
| Scroll fps (wheel 60 Hz) | 52.2 [52.7] | 48.4 [48.7] | 49.8 [50.8] |
| Scroll frame interval p99 | 31.7 ms [34.9] | 37.5 ms [38.7] | 39.3 ms [41.3] |
| Scroll pipe throughput | 489 MB/s [494] | 453 MB/s [456] | 460 MB/s [473] |
| Scroll CPU host+helpers | 236 % [240] | 238 % [240] | 248 % [249] |
| Scroll host damage share (damage run) | — | 0.999 | 0.995 [0.999] |
| Image page scroll fps | 40.8 [41.3] | 39.8 [41.4] | 39.6 [40.2] |
| DOM page scroll fps | 51.1 [52.6] | 48.8 [50.6] | 49.0 [51.7] |
| Key → changed frame (pooled) | 39.6 ms [44.0] | 35.8 ms [46.1] | 22.0 ms [23.6] |
| Key → title event (median of reps) | 1.4 ms [1.5] | 1.5 ms [1.6] | 1.5 ms |
| Wheel → changed frame (pooled) | 40.2 ms [50.5] | 40.8 ms [49.3] | 31.7 ms [45.0] |
| Image page navigate → painted | 287 ms [321] | 277 ms [293] | 275 ms [279] |
| DOM page navigate → painted | 518 ms [612] | 517 ms [532] | 500 ms [509] |
| Resize → frame at new size | 276 ms [333] | 283 ms [343] | 280 ms [333] |
| **A/B: stdout pipe enlarged to 1 MiB (2×)** | | | |
| rAF fps, 1 MiB pipe | 52.6 [53.2] | — | — |
| rAF client read/frame, 1 MiB pipe | 15.23 ms [15.45] | — | — |
| Scroll fps, 1 MiB pipe | 50.2 [54.0] | — | — |
| Scroll CPU, 1 MiB pipe | 236 % [239] | — | — |
