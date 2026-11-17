# Engine bench summary — run 44065714644

Component benchmark over the AXCF pipe (tools/engine-bench). Median over repetitions, [p95]. Never Zen E1/E2 evidence. GitHub-hosted runners have no GPU: every engine renders in software.

- **chromium**: status PASS (5/5 reps), engine 156.0.8078.96, render_path native-osr-bgra, AMD EPYC 9V74 80-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS, GPU nodes ['card1']
- **chromium+damage**: status PASS (5/5 reps), engine 156.0.8078.96, render_path native-osr-bgra, AMD EPYC 9V74 80-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS, GPU nodes ['card1']
- **chromium+damage+payload**: status PASS (5/5 reps), engine 156.0.8078.96, render_path native-osr-bgra, AMD EPYC 9V74 80-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS, GPU nodes ['card1']

| Metric | chromium | chromium+damage | chromium+damage+payload |
| --- | --- | --- | --- |
| Spawn → ready | 172 ms [1685] | 171 ms [195] | 170 ms [191] |
| Create → first frame (1×) | 91 ms [5166] | 96 ms [196] | 123 ms [178] |
| Create → painted frame (1×) | 113 ms [5166] | 114 ms [196] | 141 ms [180] |
| Navigate → painted frame (static, 1×) | 17 ms [20] | 18 ms [22] | 17 ms |
| Idle frames/s (static page) | 0.00 [0.50] | 0.00 [0.50] | 0.00 |
| Processes after create | 10 | 10 | 10 |
| RSS after create (host+helpers) | 843 MB [859] | 844 MB [859] | 843 MB [846] |
| PSS after create (host+helpers) | — | — | — |
| Close → host exit | 86 ms [89] | 90 ms [234] | 84 ms [228] |
| Close → no helper left | 90 ms [93] | 94 ms [239] | 89 ms [233] |
| **1× (900×650 CSS px → 900×650 px)** | | | |
| rAF fps | 60.0 [60.2] | 60.0 [60.2] | 60.0 |
| rAF frame interval median | 16.6 ms [16.7] | 16.5 ms [16.7] | 16.4 ms [16.9] |
| rAF frame interval p99 | 17.9 ms [20.1] | 18.1 ms [19.5] | 17.8 ms [18.6] |
| rAF intervals > 25 ms | 0.000 | 0.000 | 0.000 |
| rAF pipe throughput | 140 MB/s [141] | 140 MB/s [141] | 33 MB/s |
| rAF bytes/frame | 2340342 B | 2340369 B | 552690 B [553586] |
| rAF client read time/frame | 0.68 ms [2.73] | 0.75 ms [2.77] | 0.12 ms [0.15] |
| rAF changed-row band (share of frame) | 0.423 | 0.423 | — |
| rAF host damage share (damage run) | — | 0.236 | 0.236 |
| rAF CPU host+helpers | 14 % [17] | 14 % [18] | 13 % [16] |
| rAF RSS host+helpers | 869 MB [872] | 874 MB [877] | 875 MB [876] |
| Scroll fps (wheel 60 Hz) | 60.2 | 60.2 | 60.2 |
| Scroll frame interval p99 | 17.8 ms [17.9] | 17.5 ms [17.8] | 17.7 ms [19.3] |
| Scroll pipe throughput | 141 MB/s | 141 MB/s | 141 MB/s |
| Scroll CPU host+helpers | 19 % [21] | 19 % [21] | 18 % [21] |
| Scroll host damage share (damage run) | — | 1.000 | 1.000 |
| Image page scroll fps | 60.2 | 60.2 | 60.2 |
| DOM page scroll fps | 60.2 | 60.2 | 60.2 |
| Key → changed frame (pooled) | 3.3 ms [5.2] | 3.4 ms [5.7] | 2.4 ms [3.0] |
| Key → title event (median of reps) | 1.2 ms [1.3] | 1.2 ms [1.3] | 1.2 ms [1.3] |
| Wheel → changed frame (pooled) | 7.1 ms [12.7] | 9.0 ms [12.7] | 6.6 ms [11.8] |
| Image page navigate → painted | 121 ms [122] | 123 ms [130] | 120 ms [141] |
| DOM page navigate → painted | 286 ms [318] | 290 ms [299] | 300 ms [302] |
| Resize → frame at new size | 0 ms | 0 ms | 0 ms |
| **2× (900×650 CSS px → 1800×1300 px)** | | | |
| rAF fps | 60.0 [60.1] | 60.0 [60.1] | 60.0 [60.2] |
| rAF frame interval median | 16.7 ms | 16.7 ms | 16.7 ms |
| rAF frame interval p99 | 18.4 ms [25.2] | 18.2 ms [23.0] | 17.8 ms [19.2] |
| rAF intervals > 25 ms | 0.000 [0.010] | 0.000 [0.007] | 0.000 |
| rAF pipe throughput | 562 MB/s [563] | 562 MB/s | 133 MB/s |
| rAF bytes/frame | 9360347 B | 9360375 B | 2213155 B [2216739] |
| rAF client read time/frame | 11.73 ms [11.74] | 11.83 ms [11.92] | 0.65 ms [0.69] |
| rAF changed-row band (share of frame) | 0.424 | 0.424 | — |
| rAF host damage share (damage run) | — | 0.237 | 0.236 [0.237] |
| rAF CPU host+helpers | 30 % [33] | 31 % [33] | 22 % [24] |
| rAF RSS host+helpers | 1281 MB [1287] | 1286 MB [1296] | 1300 MB [1304] |
| Scroll fps (wheel 60 Hz) | 59.9 | 59.7 [59.9] | 60.0 [60.2] |
| Scroll frame interval p99 | 22.2 ms [25.8] | 27.0 ms [29.0] | 23.7 ms [28.0] |
| Scroll pipe throughput | 561 MB/s | 559 MB/s [561] | 562 MB/s [563] |
| Scroll CPU host+helpers | 61 % [62] | 63 % [68] | 60 % [62] |
| Scroll host damage share (damage run) | — | 1.000 | 1.000 |
| Image page scroll fps | 60.0 | 59.8 [60.0] | 60.0 |
| DOM page scroll fps | 60.0 [60.1] | 60.0 [60.1] | 60.2 |
| Key → changed frame (pooled) | 12.8 ms [15.7] | 13.0 ms [16.1] | 3.1 ms [3.7] |
| Key → title event (median of reps) | 1.3 ms [1.4] | 1.3 ms | 1.2 ms |
| Wheel → changed frame (pooled) | 12.6 ms [18.3] | 11.7 ms [18.4] | 10.6 ms [11.8] |
| Image page navigate → painted | 162 ms [167] | 162 ms [168] | 141 ms [144] |
| DOM page navigate → painted | 342 ms [348] | 365 ms [414] | 332 ms [352] |
| Resize → frame at new size | 91 ms [93] | 91 ms [96] | 77 ms [88] |
| **A/B: stdout pipe enlarged to 1 MiB (2×)** | | | |
| rAF fps, 1 MiB pipe | 59.2 [59.3] | — | — |
| rAF client read/frame, 1 MiB pipe | 11.81 ms [11.90] | — | — |
| Scroll fps, 1 MiB pipe | 60.1 | — | — |
| Scroll CPU, 1 MiB pipe | 52 % [60] | — | — |
