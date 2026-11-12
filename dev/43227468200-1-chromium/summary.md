# Engine bench summary — run 43227468200

Component benchmark over the AXCF pipe (tools/engine-bench). Median over repetitions, [p95]. Never Zen E1/E2 evidence. GitHub-hosted runners have no GPU: every engine renders in software.

- **chromium**: status PASS (5/5 reps), engine 156.0.8078.17, render_path native-osr-bgra, AMD EPYC 7763 64-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS, GPU nodes ['card1']
- **chromium+damage**: status PASS (5/5 reps), engine 156.0.8078.17, render_path native-osr-bgra, AMD EPYC 7763 64-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS, GPU nodes ['card1']
- **chromium+damage+payload**: status PASS (5/5 reps), engine 156.0.8078.17, render_path native-osr-bgra, AMD EPYC 7763 64-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS, GPU nodes ['card1']

| Metric | chromium | chromium+damage | chromium+damage+payload |
| --- | --- | --- | --- |
| Spawn → ready | 211 ms [2736] | 211 ms [217] | 213 ms [216] |
| Create → first frame (1×) | 131 ms [9161] | 131 ms [177] | 128 ms [150] |
| Create → painted frame (1×) | 145 ms [9162] | 150 ms [204] | 141 ms [156] |
| Navigate → painted frame (static, 1×) | 23 ms [26] | 21 ms [25] | 21 ms [23] |
| Idle frames/s (static page) | 0.00 [0.50] | 0.00 [0.50] | 0.00 [0.50] |
| Processes after create | 10 | 10 | 10 |
| RSS after create (host+helpers) | 849 MB [856] | 850 MB [854] | 848 MB [854] |
| PSS after create (host+helpers) | — | — | — |
| Close → host exit | 138 ms [146] | 135 ms [136] | 84 ms [134] |
| Close → no helper left | 144 ms [152] | 141 ms [143] | 93 ms [141] |
| **1× (900×650 CSS px → 900×650 px)** | | | |
| rAF fps | 60.2 | 60.2 | 60.2 |
| rAF frame interval median | 16.6 ms [16.7] | 16.6 ms | 16.6 ms |
| rAF frame interval p99 | 17.9 ms [18.0] | 18.2 ms [18.3] | 17.8 ms [18.0] |
| rAF intervals > 25 ms | 0.000 | 0.000 | 0.000 |
| rAF pipe throughput | 141 MB/s | 141 MB/s | 33 MB/s |
| rAF bytes/frame | 2340342 B | 2340369 B | 553408 B |
| rAF client read time/frame | 1.14 ms [3.32] | 1.13 ms [3.40] | 0.21 ms [0.22] |
| rAF changed-row band (share of frame) | 0.423 | 0.423 | — |
| rAF host damage share (damage run) | — | 0.236 | 0.236 |
| rAF CPU host+helpers | 22 % [24] | 22 % [24] | 20 % [22] |
| rAF RSS host+helpers | 871 MB [873] | 875 MB [879] | 873 MB [875] |
| Scroll fps (wheel 60 Hz) | 60.2 | 60.2 | 60.2 |
| Scroll frame interval p99 | 17.8 ms [17.9] | 17.8 ms [18.5] | 17.9 ms [19.0] |
| Scroll pipe throughput | 141 MB/s | 141 MB/s | 141 MB/s |
| Scroll CPU host+helpers | 27 % | 27 % | 28 % [29] |
| Scroll host damage share (damage run) | — | 1.000 | 1.000 |
| Image page scroll fps | 60.2 | 60.0 [60.2] | 60.2 |
| DOM page scroll fps | 60.2 | 60.2 | 60.2 |
| Key → changed frame (pooled) | 4.4 ms [6.9] | 4.3 ms [6.7] | 3.1 ms [3.8] |
| Key → title event (median of reps) | 1.6 ms [1.7] | 1.6 ms [1.7] | 1.5 ms [1.6] |
| Wheel → changed frame (pooled) | 11.2 ms [13.6] | 11.2 ms [13.4] | 10.9 ms [11.7] |
| Image page navigate → painted | 160 ms [166] | 156 ms [160] | 160 ms [163] |
| DOM page navigate → painted | 370 ms [385] | 390 ms [409] | 348 ms [397] |
| Resize → frame at new size | 0 ms | 0 ms | 0 ms |
| **2× (900×650 CSS px → 1800×1300 px)** | | | |
| rAF fps | 60.1 | 60.0 [60.1] | 60.2 |
| rAF frame interval median | 16.6 ms | 16.6 ms [16.9] | 16.6 ms [16.7] |
| rAF frame interval p99 | 19.4 ms [19.6] | 19.2 ms [19.9] | 18.4 ms [20.2] |
| rAF intervals > 25 ms | 0.000 [0.003] | 0.000 | 0.000 [0.003] |
| rAF pipe throughput | 562 MB/s | 562 MB/s | 133 MB/s |
| rAF bytes/frame | 9360347 B | 9360375 B | 2216193 B [2216282] |
| rAF client read time/frame | 13.51 ms [13.68] | 14.08 ms [15.68] | 0.90 ms [0.96] |
| rAF changed-row band (share of frame) | 0.424 | 0.424 | — |
| rAF host damage share (damage run) | — | 0.237 | 0.237 |
| rAF CPU host+helpers | 46 % | 47 % [54] | 33 % [37] |
| rAF RSS host+helpers | 1260 MB [1290] | 1263 MB [1276] | 1257 MB [1266] |
| Scroll fps (wheel 60 Hz) | 59.3 [59.8] | 59.5 [60.1] | 60.0 [60.1] |
| Scroll frame interval p99 | 27.3 ms [29.2] | 25.8 ms [30.7] | 25.2 ms [26.6] |
| Scroll pipe throughput | 555 MB/s [560] | 557 MB/s [562] | 562 MB/s [563] |
| Scroll CPU host+helpers | 84 % [85] | 83 % [93] | 76 % [77] |
| Scroll host damage share (damage run) | — | 1.000 | 1.000 |
| Image page scroll fps | 58.8 [59.9] | 58.6 [59.5] | 60.0 [60.2] |
| DOM page scroll fps | 59.9 [60.1] | 59.9 [60.1] | 60.0 [60.2] |
| Key → changed frame (pooled) | 17.2 ms [19.3] | 17.3 ms [20.9] | 4.1 ms [4.7] |
| Key → title event (median of reps) | 1.6 ms | 1.6 ms | 1.5 ms [1.6] |
| Wheel → changed frame (pooled) | 12.3 ms [22.6] | 13.7 ms [24.2] | 10.5 ms [11.8] |
| Image page navigate → painted | 208 ms [227] | 211 ms [217] | 180 ms [196] |
| DOM page navigate → painted | 434 ms [468] | 457 ms [513] | 430 ms [477] |
| Resize → frame at new size | 95 ms [112] | 100 ms [108] | 87 ms [95] |
| **A/B: stdout pipe enlarged to 1 MiB (2×)** | | | |
| rAF fps, 1 MiB pipe | 58.9 | — | — |
| rAF client read/frame, 1 MiB pipe | 13.65 ms [13.92] | — | — |
| Scroll fps, 1 MiB pipe | 60.0 [60.1] | — | — |
| Scroll CPU, 1 MiB pipe | 73 % | — | — |
