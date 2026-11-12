# Engine bench summary — run 43227468200

Component benchmark over the AXCF pipe (tools/engine-bench). Median over repetitions, [p95]. Never Zen E1/E2 evidence. GitHub-hosted runners have no GPU: every engine renders in software.

- **webkit**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, AMD EPYC 7763 64-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie), GPU nodes none
- **webkit+damage**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, AMD EPYC 7763 64-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie), GPU nodes none
- **webkit+damage+payload**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, AMD EPYC 7763 64-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie), GPU nodes none

| Metric | webkit | webkit+damage | webkit+damage+payload |
| --- | --- | --- | --- |
| Spawn → ready | 42 ms [46] | 44 ms [50] | 41 ms [44] |
| Create → first frame (1×) | 487 ms [506] | 485 ms [516] | 478 ms [486] |
| Create → painted frame (1×) | 488 ms [507] | 486 ms [517] | 479 ms [488] |
| Navigate → painted frame (static, 1×) | 58 ms | 58 ms [60] | 56 ms [57] |
| Idle frames/s (static page) | 0.00 | 0.00 | 0.00 |
| Processes after create | 5 | 5 | 5 |
| RSS after create (host+helpers) | 405 MB | 406 MB [409] | 407 MB [408] |
| PSS after create (host+helpers) | 268 MB [271] | 269 MB [271] | 269 MB [274] |
| Close → host exit | 134 ms [182] | 181 ms [184] | 171 ms [179] |
| Close → no helper left | 134 ms [183] | 181 ms [184] | 172 ms [179] |
| **1× (900×650 CSS px → 900×650 px)** | | | |
| rAF fps | 58.0 [58.2] | 58.2 [58.4] | 58.0 |
| rAF frame interval median | 17.2 ms [17.4] | 17.2 ms | 17.3 ms [17.4] |
| rAF frame interval p99 | 18.8 ms [19.2] | 18.8 ms [19.2] | 18.4 ms [18.6] |
| rAF intervals > 25 ms | 0.000 | 0.000 | 0.000 |
| rAF pipe throughput | 136 MB/s | 136 MB/s [137] | 29 MB/s |
| rAF bytes/frame | 2340341 B | 2340368 B | 497849 B [497918] |
| rAF client read time/frame | 1.08 ms [3.23] | 1.06 ms [3.19] | 0.17 ms [0.27] |
| rAF changed-row band (share of frame) | 0.423 | 0.423 | — |
| rAF host damage share (damage run) | — | 0.213 | 0.213 |
| rAF CPU host+helpers | 68 % [72] | 71 % [72] | 64 % [66] |
| rAF RSS host+helpers | 414 MB | 416 MB [420] | 416 MB [417] |
| Scroll fps (wheel 60 Hz) | 57.6 [58.0] | 54.6 [55.0] | 54.2 [54.8] |
| Scroll frame interval p99 | 19.4 ms [30.4] | 34.9 ms [35.8] | 35.2 ms [35.3] |
| Scroll pipe throughput | 135 MB/s [136] | 128 MB/s [129] | 126 MB/s |
| Scroll CPU host+helpers | 69 % [74] | 72 % [73] | 71 % [75] |
| Scroll host damage share (damage run) | — | 0.988 [0.995] | 0.985 [0.995] |
| Image page scroll fps | 57.8 | 57.4 [57.6] | 57.6 [57.8] |
| DOM page scroll fps | 57.8 [58.0] | 54.6 [55.4] | 54.0 [55.0] |
| Key → changed frame (pooled) | 7.3 ms [23.8] | 7.4 ms [23.9] | 7.2 ms [8.0] |
| Key → title event (median of reps) | 1.5 ms [1.6] | 1.5 ms [1.6] | 1.4 ms [1.5] |
| Wheel → changed frame (pooled) | 7.5 ms [23.8] | 7.5 ms [23.7] | 7.2 ms [22.4] |
| Image page navigate → painted | 390 ms [402] | 386 ms [400] | 388 ms [399] |
| DOM page navigate → painted | 567 ms [585] | 563 ms [582] | 565 ms [567] |
| Resize → frame at new size | 0 ms | 0 ms | 0 ms |
| **2× (900×650 CSS px → 1800×1300 px)** | | | |
| rAF fps | 49.5 [50.4] | 49.8 [50.7] | 58.0 |
| rAF frame interval median | 18.8 ms [20.4] | 19.4 ms [20.5] | 17.2 ms [17.3] |
| rAF frame interval p99 | 32.5 ms [33.7] | 29.1 ms [31.7] | 22.5 ms [25.2] |
| rAF intervals > 25 ms | 0.097 [0.174] | 0.071 [0.115] | 0.004 [0.014] |
| rAF pipe throughput | 463 MB/s [471] | 466 MB/s [475] | 115 MB/s |
| rAF bytes/frame | 9360346 B | 9360374 B | 1985220 B [1987410] |
| rAF client read time/frame | 16.50 ms [17.12] | 16.55 ms [17.21] | 1.45 ms [1.50] |
| rAF changed-row band (share of frame) | 0.422 | 0.422 | — |
| rAF host damage share (damage run) | — | 0.210 [0.212] | 0.212 |
| rAF CPU host+helpers | 239 % [242] | 233 % [235] | 234 % [238] |
| rAF RSS host+helpers | 580 MB [584] | 587 MB [590] | 585 MB [586] |
| Scroll fps (wheel 60 Hz) | 49.1 [52.4] | 47.4 [48.9] | 50.3 [51.6] |
| Scroll frame interval p99 | 35.4 ms [36.9] | 37.7 ms [43.3] | 37.2 ms [39.3] |
| Scroll pipe throughput | 459 MB/s [490] | 444 MB/s [457] | 463 MB/s [481] |
| Scroll CPU host+helpers | 237 % [238] | 236 % [238] | 244 % [247] |
| Scroll host damage share (damage run) | — | 0.995 [0.999] | 0.987 [0.995] |
| Image page scroll fps | 39.4 [39.7] | 42.4 [42.9] | 39.4 [41.7] |
| DOM page scroll fps | 50.5 [51.3] | 48.4 [50.8] | 50.4 [52.0] |
| Key → changed frame (pooled) | 33.5 ms [43.5] | 35.5 ms [42.9] | 22.4 ms [25.1] |
| Key → title event (median of reps) | 1.4 ms [1.6] | 1.4 ms [1.5] | 1.5 ms |
| Wheel → changed frame (pooled) | 38.2 ms [48.3] | 38.6 ms [50.2] | 29.9 ms [41.0] |
| Image page navigate → painted | 248 ms [255] | 229 ms [248] | 226 ms [236] |
| DOM page navigate → painted | 629 ms [642] | 600 ms [629] | 584 ms [592] |
| Resize → frame at new size | 333 ms [343] | 335 ms [342] | 328 ms [331] |
| **A/B: stdout pipe enlarged to 1 MiB (2×)** | | | |
| rAF fps, 1 MiB pipe | 50.0 [51.6] | — | — |
| rAF client read/frame, 1 MiB pipe | 16.40 ms [16.91] | — | — |
| Scroll fps, 1 MiB pipe | 51.5 [51.8] | — | — |
| Scroll CPU, 1 MiB pipe | 236 % [238] | — | — |
