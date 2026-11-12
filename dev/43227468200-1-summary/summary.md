# Engine bench summary — run 43227468200

Component benchmark over the AXCF pipe (tools/engine-bench). Median over repetitions, [p95]. Never Zen E1/E2 evidence. GitHub-hosted runners have no GPU: every engine renders in software.

- **chromium**: status PASS (5/5 reps), engine 156.0.8078.17, render_path native-osr-bgra, AMD EPYC 7763 64-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS, GPU nodes ['card1']
- **chromium+damage**: status PASS (5/5 reps), engine 156.0.8078.17, render_path native-osr-bgra, AMD EPYC 7763 64-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS, GPU nodes ['card1']
- **chromium+damage+payload**: status PASS (5/5 reps), engine 156.0.8078.17, render_path native-osr-bgra, AMD EPYC 7763 64-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS, GPU nodes ['card1']
- **webkit**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, AMD EPYC 7763 64-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie), GPU nodes none
- **webkit+damage**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, AMD EPYC 7763 64-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie), GPU nodes none
- **webkit+damage+payload**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, AMD EPYC 7763 64-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie), GPU nodes none

| Metric | chromium | chromium+damage | chromium+damage+payload | webkit | webkit+damage | webkit+damage+payload |
| --- | --- | --- | --- | --- | --- | --- |
| Spawn → ready | 211 ms [2736] | 211 ms [217] | 213 ms [216] | 42 ms [46] | 44 ms [50] | 41 ms [44] |
| Create → first frame (1×) | 131 ms [9161] | 131 ms [177] | 128 ms [150] | 487 ms [506] | 485 ms [516] | 478 ms [486] |
| Create → painted frame (1×) | 145 ms [9162] | 150 ms [204] | 141 ms [156] | 488 ms [507] | 486 ms [517] | 479 ms [488] |
| Navigate → painted frame (static, 1×) | 23 ms [26] | 21 ms [25] | 21 ms [23] | 58 ms | 58 ms [60] | 56 ms [57] |
| Idle frames/s (static page) | 0.00 [0.50] | 0.00 [0.50] | 0.00 [0.50] | 0.00 | 0.00 | 0.00 |
| Processes after create | 10 | 10 | 10 | 5 | 5 | 5 |
| RSS after create (host+helpers) | 849 MB [856] | 850 MB [854] | 848 MB [854] | 405 MB | 406 MB [409] | 407 MB [408] |
| PSS after create (host+helpers) | — | — | — | 268 MB [271] | 269 MB [271] | 269 MB [274] |
| Close → host exit | 138 ms [146] | 135 ms [136] | 84 ms [134] | 134 ms [182] | 181 ms [184] | 171 ms [179] |
| Close → no helper left | 144 ms [152] | 141 ms [143] | 93 ms [141] | 134 ms [183] | 181 ms [184] | 172 ms [179] |
| **1× (900×650 CSS px → 900×650 px)** | | | | | | |
| rAF fps | 60.2 | 60.2 | 60.2 | 58.0 [58.2] | 58.2 [58.4] | 58.0 |
| rAF frame interval median | 16.6 ms [16.7] | 16.6 ms | 16.6 ms | 17.2 ms [17.4] | 17.2 ms | 17.3 ms [17.4] |
| rAF frame interval p99 | 17.9 ms [18.0] | 18.2 ms [18.3] | 17.8 ms [18.0] | 18.8 ms [19.2] | 18.8 ms [19.2] | 18.4 ms [18.6] |
| rAF intervals > 25 ms | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| rAF pipe throughput | 141 MB/s | 141 MB/s | 33 MB/s | 136 MB/s | 136 MB/s [137] | 29 MB/s |
| rAF bytes/frame | 2340342 B | 2340369 B | 553408 B | 2340341 B | 2340368 B | 497849 B [497918] |
| rAF client read time/frame | 1.14 ms [3.32] | 1.13 ms [3.40] | 0.21 ms [0.22] | 1.08 ms [3.23] | 1.06 ms [3.19] | 0.17 ms [0.27] |
| rAF changed-row band (share of frame) | 0.423 | 0.423 | — | 0.423 | 0.423 | — |
| rAF host damage share (damage run) | — | 0.236 | 0.236 | — | 0.213 | 0.213 |
| rAF CPU host+helpers | 22 % [24] | 22 % [24] | 20 % [22] | 68 % [72] | 71 % [72] | 64 % [66] |
| rAF RSS host+helpers | 871 MB [873] | 875 MB [879] | 873 MB [875] | 414 MB | 416 MB [420] | 416 MB [417] |
| Scroll fps (wheel 60 Hz) | 60.2 | 60.2 | 60.2 | 57.6 [58.0] | 54.6 [55.0] | 54.2 [54.8] |
| Scroll frame interval p99 | 17.8 ms [17.9] | 17.8 ms [18.5] | 17.9 ms [19.0] | 19.4 ms [30.4] | 34.9 ms [35.8] | 35.2 ms [35.3] |
| Scroll pipe throughput | 141 MB/s | 141 MB/s | 141 MB/s | 135 MB/s [136] | 128 MB/s [129] | 126 MB/s |
| Scroll CPU host+helpers | 27 % | 27 % | 28 % [29] | 69 % [74] | 72 % [73] | 71 % [75] |
| Scroll host damage share (damage run) | — | 1.000 | 1.000 | — | 0.988 [0.995] | 0.985 [0.995] |
| Image page scroll fps | 60.2 | 60.0 [60.2] | 60.2 | 57.8 | 57.4 [57.6] | 57.6 [57.8] |
| DOM page scroll fps | 60.2 | 60.2 | 60.2 | 57.8 [58.0] | 54.6 [55.4] | 54.0 [55.0] |
| Key → changed frame (pooled) | 4.4 ms [6.9] | 4.3 ms [6.7] | 3.1 ms [3.8] | 7.3 ms [23.8] | 7.4 ms [23.9] | 7.2 ms [8.0] |
| Key → title event (median of reps) | 1.6 ms [1.7] | 1.6 ms [1.7] | 1.5 ms [1.6] | 1.5 ms [1.6] | 1.5 ms [1.6] | 1.4 ms [1.5] |
| Wheel → changed frame (pooled) | 11.2 ms [13.6] | 11.2 ms [13.4] | 10.9 ms [11.7] | 7.5 ms [23.8] | 7.5 ms [23.7] | 7.2 ms [22.4] |
| Image page navigate → painted | 160 ms [166] | 156 ms [160] | 160 ms [163] | 390 ms [402] | 386 ms [400] | 388 ms [399] |
| DOM page navigate → painted | 370 ms [385] | 390 ms [409] | 348 ms [397] | 567 ms [585] | 563 ms [582] | 565 ms [567] |
| Resize → frame at new size | 0 ms | 0 ms | 0 ms | 0 ms | 0 ms | 0 ms |
| **2× (900×650 CSS px → 1800×1300 px)** | | | | | | |
| rAF fps | 60.1 | 60.0 [60.1] | 60.2 | 49.5 [50.4] | 49.8 [50.7] | 58.0 |
| rAF frame interval median | 16.6 ms | 16.6 ms [16.9] | 16.6 ms [16.7] | 18.8 ms [20.4] | 19.4 ms [20.5] | 17.2 ms [17.3] |
| rAF frame interval p99 | 19.4 ms [19.6] | 19.2 ms [19.9] | 18.4 ms [20.2] | 32.5 ms [33.7] | 29.1 ms [31.7] | 22.5 ms [25.2] |
| rAF intervals > 25 ms | 0.000 [0.003] | 0.000 | 0.000 [0.003] | 0.097 [0.174] | 0.071 [0.115] | 0.004 [0.014] |
| rAF pipe throughput | 562 MB/s | 562 MB/s | 133 MB/s | 463 MB/s [471] | 466 MB/s [475] | 115 MB/s |
| rAF bytes/frame | 9360347 B | 9360375 B | 2216193 B [2216282] | 9360346 B | 9360374 B | 1985220 B [1987410] |
| rAF client read time/frame | 13.51 ms [13.68] | 14.08 ms [15.68] | 0.90 ms [0.96] | 16.50 ms [17.12] | 16.55 ms [17.21] | 1.45 ms [1.50] |
| rAF changed-row band (share of frame) | 0.424 | 0.424 | — | 0.422 | 0.422 | — |
| rAF host damage share (damage run) | — | 0.237 | 0.237 | — | 0.210 [0.212] | 0.212 |
| rAF CPU host+helpers | 46 % | 47 % [54] | 33 % [37] | 239 % [242] | 233 % [235] | 234 % [238] |
| rAF RSS host+helpers | 1260 MB [1290] | 1263 MB [1276] | 1257 MB [1266] | 580 MB [584] | 587 MB [590] | 585 MB [586] |
| Scroll fps (wheel 60 Hz) | 59.3 [59.8] | 59.5 [60.1] | 60.0 [60.1] | 49.1 [52.4] | 47.4 [48.9] | 50.3 [51.6] |
| Scroll frame interval p99 | 27.3 ms [29.2] | 25.8 ms [30.7] | 25.2 ms [26.6] | 35.4 ms [36.9] | 37.7 ms [43.3] | 37.2 ms [39.3] |
| Scroll pipe throughput | 555 MB/s [560] | 557 MB/s [562] | 562 MB/s [563] | 459 MB/s [490] | 444 MB/s [457] | 463 MB/s [481] |
| Scroll CPU host+helpers | 84 % [85] | 83 % [93] | 76 % [77] | 237 % [238] | 236 % [238] | 244 % [247] |
| Scroll host damage share (damage run) | — | 1.000 | 1.000 | — | 0.995 [0.999] | 0.987 [0.995] |
| Image page scroll fps | 58.8 [59.9] | 58.6 [59.5] | 60.0 [60.2] | 39.4 [39.7] | 42.4 [42.9] | 39.4 [41.7] |
| DOM page scroll fps | 59.9 [60.1] | 59.9 [60.1] | 60.0 [60.2] | 50.5 [51.3] | 48.4 [50.8] | 50.4 [52.0] |
| Key → changed frame (pooled) | 17.2 ms [19.3] | 17.3 ms [20.9] | 4.1 ms [4.7] | 33.5 ms [43.5] | 35.5 ms [42.9] | 22.4 ms [25.1] |
| Key → title event (median of reps) | 1.6 ms | 1.6 ms | 1.5 ms [1.6] | 1.4 ms [1.6] | 1.4 ms [1.5] | 1.5 ms |
| Wheel → changed frame (pooled) | 12.3 ms [22.6] | 13.7 ms [24.2] | 10.5 ms [11.8] | 38.2 ms [48.3] | 38.6 ms [50.2] | 29.9 ms [41.0] |
| Image page navigate → painted | 208 ms [227] | 211 ms [217] | 180 ms [196] | 248 ms [255] | 229 ms [248] | 226 ms [236] |
| DOM page navigate → painted | 434 ms [468] | 457 ms [513] | 430 ms [477] | 629 ms [642] | 600 ms [629] | 584 ms [592] |
| Resize → frame at new size | 95 ms [112] | 100 ms [108] | 87 ms [95] | 333 ms [343] | 335 ms [342] | 328 ms [331] |
| **A/B: stdout pipe enlarged to 1 MiB (2×)** | | | | | | |
| rAF fps, 1 MiB pipe | 58.9 | — | — | 50.0 [51.6] | — | — |
| rAF client read/frame, 1 MiB pipe | 13.65 ms [13.92] | — | — | 16.40 ms [16.91] | — | — |
| Scroll fps, 1 MiB pipe | 60.0 [60.1] | — | — | 51.5 [51.8] | — | — |
| Scroll CPU, 1 MiB pipe | 73 % | — | — | 236 % [238] | — | — |

## Presenter pixel path — chromium Google Chrome 156.0.8078.79

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs`; WebGL renderer: ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)

| Step | 900×650 | 1800×1300 |
| --- | --- | --- |
| alloc_copy | 1.68 [6.73] | 4.52 [8.37] |
| presenter_bgraToRGBA | 1.51 [2.83] | 5.19 [5.34] |
| candidate_u32_fast_path | 1.50 [3.06] | 5.95 [6.24] |
| putImageData_full | 0.09 [0.12] | 0.47 [0.55] |
| presenter_draw_full | 1.60 [2.02] | 5.96 [12.61] |
| surface_draw_full | 1.63 [1.86] | 6.76 [7.01] |
| surface_draw_damage10 | 0.18 [0.32] | 0.71 [0.86] |
| candidate_videoframe_full | 1.57 [1.80] | 5.48 [8.12] |
| candidate_videoframe_damage10 | 0.25 [0.40] | 0.90 [3.45] |
| surface_upload_draw_full | 1.60 [1.84] | 6.20 [8.09] |
| surface_upload_draw_damage10 | 0.28 [0.54] | 1.02 [12.52] |
| candidate_damage10_fast_put | 0.28 [0.46] | 1.08 [1.32] |
| candidate_createImageBitmap | 3.92 [5.45] | 16.84 [31.69] |
| candidate_webgl_full | 3.23 [5.36] | 16.63 [23.53] |
| candidate_webgl_damage10 | 2.98 [7.03] | 14.78 [18.68] |

## Presenter pixel path — firefox Mozilla Firefox 159.0

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs`; WebGL renderer: None

| Step | 900×650 | 1800×1300 |
| --- | --- | --- |
| alloc_copy | 1.30 [1.94] | 4.60 [11.98] |
| presenter_bgraToRGBA | 1.54 [2.48] | 5.18 [8.40] |
| candidate_u32_fast_path | 1.24 [1.84] | 3.90 [4.64] |
| putImageData_full | 0.14 [0.18] | 0.44 [0.58] |
| presenter_draw_full | 2.48 [3.12] | 6.02 [6.36] |
| surface_draw_full | 2.12 [2.92] | 6.10 [7.24] |
| surface_draw_damage10 | 0.32 [0.52] | 0.64 [0.80] |
| candidate_videoframe_full | 1.58 [2.10] | 6.00 [6.88] |
| candidate_videoframe_damage10 | 0.10 [0.24] | 0.18 [0.40] |
| surface_upload_draw_full | 1.66 [2.12] | 5.92 [6.36] |
| surface_upload_draw_damage10 | 0.10 [0.18] | 0.20 [0.42] |
| candidate_damage10_fast_put | 0.38 [0.48] | 1.08 [1.24] |
| candidate_createImageBitmap | 6.56 [10.30] | 21.50 [28.42] |

## Presenter pixel path — v8 v22.23.4

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs bgraToRGBA (imported)`

| Step | 900×650 | 900×650 (10% translucent) | 1800×1300 | 1800×1300 (10% translucent) |
| --- | --- | --- | --- | --- |
| copy | 1.02 [3.88] | 0.22 [1.09] | 1.01 [4.52] | 1.19 [4.29] |
| presenter_bgraToRGBA | 1.38 [1.42] | 1.40 [1.44] | 3.70 [3.78] | 5.69 [5.81] |
| candidate_u32_opaque_fast_path | 1.28 [1.31] | 1.27 [1.33] | 3.66 [4.22] | 5.21 [5.70] |

## Integrated (Zen app) — chromium: PASS

App: fetched-artifact run 39663428275, commit 99076576ca156b4d24da84c1e8f91a097262641e; TEST-ONLY chrome-overlay: apps/browser/chrome of 3b0eddea6460882bd7fe0a547a2d5786d8582b68 (4 replaced, 0 added)
Machine: AMD EPYC 9V45 96-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS
Repetitions: PASS, PASS, PASS, PASS, PASS

| Metric | median [p95] |
| --- | --- |
| static.navigate_to_title_wall_ms | 9.50 [17.70] |
| image.navigate_to_title_wall_ms | 258.50 [261.90] |
| dom.navigate_to_title_wall_ms | 257.60 [259.00] |
| raf.window.fps | 59.98 [60.00] |
| raf.window.interval_ms.median | 16.30 [16.31] |
| raf.window.interval_p99_ms | 20.67 [21.09] |
| raf.window.long_intervals_share | 0.00 [0.01] |
| raf.window.usage.cpu_percent | 31.80 [34.30] |
| raf.window.usage.parent_cpu_percent | 14.70 [15.40] |
| scroll.window.usage.parent_cpu_percent | 26.90 [36.30] |
| scroll.window.fps_input | 59.99 [60.10] |
| scroll.window.interval_p99_input_ms | 20.84 [29.66] |
| image_scroll.window.fps_input | 60.48 [60.54] |
| scroll.window.fps | 59.99 [60.10] |
| scroll.window.interval_p99_ms | 20.84 [29.66] |
| scroll.window.long_intervals_share | 0.00 [0.03] |
| scroll.window.usage.cpu_percent | 56.80 [68.60] |
| scroll.window.input_wall_s | 1.95 [1.96] |
| image_scroll.window.input_wall_s | 1.95 [1.96] |
| scroll.window.input_pacing.send_span_s | 1.94 [1.95] |
| image_scroll.window.fps | 60.48 [60.54] |
| image_scroll.window.interval_p99_ms | 21.03 [26.57] |
| image_scroll.window.usage.cpu_percent | 46.20 [58.70] |
| memory_all_processes.rss_mb | 2719.90 [2746.90] |
| memory_all_processes.processes | 23.00 |
| tab_switch.to_gecko_blank_tab_ms.median | 25.37 [25.90] |
| tab_switch.back_to_bench_tab_ms.median | 42.13 [43.93] |
| switch.gecko_to_engine_switch_ms | 329.40 [577.50] |
| switch.engine_to_gecko_switch_ms | 15020.80 [15137.90] |
| static.timing.navigate_to_title_ms | 29.20 [33.80] |
| static.timing.navigate_to_visible_ms | 33.90 [45.00] |
| image.timing.navigate_to_title_ms | 16.10 [17.40] |
| image.timing.navigate_to_visible_ms | 97.70 [104.90] |
| dom.timing.navigate_to_title_ms | 15.60 [17.40] |
| dom.timing.navigate_to_visible_ms | 175.70 [233.50] |
| raf.window.fps_whole_window | 59.81 [59.84] |
| scroll.window.fps_whole_window | 59.55 [59.69] |
| image_scroll.window.fps_whole_window | 35.79 [35.86] |
| raf.window.presenter.meanDrawMilliseconds | 0.01 |
| scroll.window.presenter.meanDrawMilliseconds | 0.01 |
| raf.window.presenter.supersededFrames | 0.00 |
| scroll.window.presenter.supersededFrames | 0.00 |
| raf.window.presenter.uploadedPixelShare | 0.27 |
| scroll.window.presenter.uploadedPixelShare | 0.51 [0.52] |
| raf.window.multi_frame_updates | 0.00 |
| scroll.window.multi_frame_updates | 0.00 |
| key.keydown_to_presented_frame_ms.median | 10.76 [11.05] |
| key.keydown_to_presented_frame_ms.p95 | 13.24 [13.72] |
| memory_after_switch_back.rss_mb | 1539.00 [1603.40] |
| memory_after_switch_back.processes | 13.00 |

## Integrated (Zen app) — gecko: PASS

App: fetched-artifact run 39663428275, commit 99076576ca156b4d24da84c1e8f91a097262641e; TEST-ONLY chrome-overlay: apps/browser/chrome of 3b0eddea6460882bd7fe0a547a2d5786d8582b68 (4 replaced, 0 added)
Machine: AMD EPYC 7763 64-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS
Repetitions: PASS, PASS, PASS, PASS, PASS

| Metric | median [p95] |
| --- | --- |
| static.timing.firstContentfulPaint | 20.00 [82.00] |
| static.timing.loadEventEnd | 19.00 [81.00] |
| static.navigate_to_title_wall_ms | 45.70 [158.40] |
| image.timing.firstContentfulPaint | 123.00 [126.00] |
| image.timing.loadEventEnd | 122.00 [123.00] |
| image.navigate_to_title_wall_ms | 133.00 [142.30] |
| dom.timing.firstContentfulPaint | 169.00 [188.00] |
| dom.timing.loadEventEnd | 163.00 [177.00] |
| dom.navigate_to_title_wall_ms | 178.10 [187.60] |
| static.idle_raf.fps | 59.00 [59.01] |
| raf.window.fps | 59.00 [59.01] |
| raf.window.interval_ms.median | 17.10 |
| raf.window.interval_p99_ms | 17.14 [17.16] |
| raf.window.long_intervals_share | 0.00 |
| raf.window.usage.cpu_percent | 26.60 [39.90] |
| raf.window.usage.parent_cpu_percent | 20.70 [33.40] |
| scroll.window.usage.parent_cpu_percent | 45.30 [151.60] |
| scroll.window.fps | 59.00 [59.02] |
| scroll.window.interval_p99_ms | 17.12 [17.22] |
| scroll.window.long_intervals_share | 0.00 |
| scroll.window.scrolled_css_px | 13659.00 [13679.00] |
| scroll.window.usage.cpu_percent | 49.70 [157.50] |
| scroll.window.input_wall_s | 1.97 |
| image_scroll.window.input_wall_s | 1.96 |
| scroll.window.input_pacing.send_span_s | 1.95 [1.96] |
| image_scroll.window.fps | 59.00 [59.01] |
| image_scroll.window.interval_p99_ms | 17.14 [17.16] |
| image_scroll.window.usage.cpu_percent | 29.90 [32.40] |
| key.keydown_to_second_raf_ms.median | 9.50 [10.50] |
| key.keydown_to_second_raf_ms.p95 | 17.00 |
| key.event_to_handler_ms.median | 1.00 |
| memory_all_processes.rss_mb | 1541.50 [1557.00] |
| memory_all_processes.pss_mb | 674.20 [686.00] |
| memory_all_processes.processes | 13.00 |
| tab_switch.to_gecko_blank_tab_ms.median | 23.38 [23.40] |
| tab_switch.back_to_bench_tab_ms.median | 23.09 [28.69] |

## Integrated (Zen app) — gecko-debian: PASS

App: fetched-artifact run 39663428275, commit 99076576ca156b4d24da84c1e8f91a097262641e; TEST-ONLY chrome-overlay: apps/browser/chrome of 3b0eddea6460882bd7fe0a547a2d5786d8582b68 (4 replaced, 0 added)
Machine: AMD EPYC 9V45 96-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie)
Repetitions: PASS, PASS, PASS, PASS, PASS

| Metric | median [p95] |
| --- | --- |
| static.timing.firstContentfulPaint | 18.00 [47.00] |
| static.timing.loadEventEnd | 14.00 [41.00] |
| static.navigate_to_title_wall_ms | 28.90 [120.40] |
| image.timing.firstContentfulPaint | 92.00 [93.00] |
| image.timing.loadEventEnd | 84.00 [88.00] |
| image.navigate_to_title_wall_ms | 91.40 [98.80] |
| dom.timing.firstContentfulPaint | 99.00 [113.00] |
| dom.timing.loadEventEnd | 91.00 [107.00] |
| dom.navigate_to_title_wall_ms | 97.30 [117.80] |
| static.idle_raf.fps | 59.00 [59.01] |
| raf.window.fps | 59.00 [59.01] |
| raf.window.interval_ms.median | 17.08 |
| raf.window.interval_p99_ms | 17.12 [17.22] |
| raf.window.long_intervals_share | 0.00 |
| raf.window.usage.cpu_percent | 15.50 [19.10] |
| raf.window.usage.parent_cpu_percent | 11.90 [14.80] |
| scroll.window.usage.parent_cpu_percent | 27.70 [59.70] |
| scroll.window.fps | 59.01 [59.02] |
| scroll.window.interval_p99_ms | 17.10 [17.14] |
| scroll.window.long_intervals_share | 0.00 |
| scroll.window.scrolled_css_px | 13662.00 [13672.00] |
| scroll.window.usage.cpu_percent | 33.70 [63.70] |
| scroll.window.input_wall_s | 1.95 |
| image_scroll.window.input_wall_s | 1.95 [1.96] |
| scroll.window.input_pacing.send_span_s | 1.94 |
| image_scroll.window.fps | 59.00 |
| image_scroll.window.interval_p99_ms | 17.10 |
| image_scroll.window.usage.cpu_percent | 17.10 [52.70] |
| key.keydown_to_second_raf_ms.median | 9.50 [10.00] |
| key.keydown_to_second_raf_ms.p95 | 17.00 |
| key.event_to_handler_ms.median | 1.00 |
| memory_all_processes.rss_mb | 1632.60 [1681.50] |
| memory_all_processes.pss_mb | 678.10 [705.00] |
| memory_all_processes.processes | 13.00 |
| tab_switch.to_gecko_blank_tab_ms.median | 20.93 [21.05] |
| tab_switch.back_to_bench_tab_ms.median | 20.65 [20.93] |

## Integrated (Zen app) — webkit: PASS

App: fetched-artifact run 39663428275, commit 99076576ca156b4d24da84c1e8f91a097262641e; TEST-ONLY chrome-overlay: apps/browser/chrome of 3b0eddea6460882bd7fe0a547a2d5786d8582b68 (4 replaced, 0 added)
Machine: AMD EPYC 9V45 96-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie)
Repetitions: PASS, PASS, PASS, PASS, PASS

| Metric | median [p95] |
| --- | --- |
| static.navigate_to_title_wall_ms | 8.50 [266.10] |
| image.navigate_to_title_wall_ms | 259.90 [512.40] |
| dom.navigate_to_title_wall_ms | 510.60 [524.90] |
| raf.window.fps | 57.98 [58.26] |
| raf.window.interval_ms.median | 17.10 [17.16] |
| raf.window.interval_p99_ms | 21.56 [23.65] |
| raf.window.long_intervals_share | 0.00 [0.01] |
| raf.window.usage.cpu_percent | 77.90 [86.00] |
| raf.window.usage.parent_cpu_percent | 17.30 [20.90] |
| scroll.window.usage.parent_cpu_percent | 29.70 [47.60] |
| scroll.window.fps_input | 57.10 [58.05] |
| scroll.window.interval_p99_input_ms | 32.39 [46.46] |
| image_scroll.window.fps_input | 56.57 [57.23] |
| scroll.window.fps | 57.10 [58.05] |
| scroll.window.interval_p99_ms | 32.39 [46.46] |
| scroll.window.long_intervals_share | 0.04 [0.07] |
| scroll.window.usage.cpu_percent | 91.10 [106.60] |
| scroll.window.input_wall_s | 1.96 [1.97] |
| image_scroll.window.input_wall_s | 1.96 |
| scroll.window.input_pacing.send_span_s | 1.95 [1.96] |
| image_scroll.window.fps | 56.57 [57.23] |
| image_scroll.window.interval_p99_ms | 34.25 [47.43] |
| image_scroll.window.usage.cpu_percent | 84.30 [92.50] |
| memory_all_processes.rss_mb | 2231.10 [2249.90] |
| memory_all_processes.pss_mb | 1108.90 [1124.60] |
| memory_all_processes.processes | 18.00 |
| tab_switch.to_gecko_blank_tab_ms.median | 20.24 [42.45] |
| tab_switch.back_to_bench_tab_ms.median | 19.98 [20.07] |
| switch.gecko_to_engine_switch_ms | 418.00 [674.90] |
| switch.engine_to_gecko_switch_ms | 212.20 [212.70] |
| static.timing.navigate_to_title_ms | 15.60 [18.10] |
| static.timing.navigate_to_visible_ms | 48.00 [52.20] |
| image.timing.navigate_to_title_ms | 235.40 [299.10] |
| image.timing.navigate_to_visible_ms | 315.00 [378.10] |
| dom.timing.navigate_to_title_ms | 332.70 [337.60] |
| dom.timing.navigate_to_visible_ms | 362.30 [374.90] |
| raf.window.fps_whole_window | 57.84 [58.49] |
| scroll.window.fps_whole_window | 56.36 [57.08] |
| image_scroll.window.fps_whole_window | 35.87 [36.77] |
| raf.window.presenter.meanDrawMilliseconds | 0.01 |
| scroll.window.presenter.meanDrawMilliseconds | 0.01 |
| raf.window.presenter.supersededFrames | 0.00 |
| scroll.window.presenter.supersededFrames | 0.00 |
| raf.window.multi_frame_updates | 0.00 |
| scroll.window.multi_frame_updates | 0.00 [1.00] |
| key.keydown_to_presented_frame_ms.median | 17.21 [17.31] |
| key.keydown_to_presented_frame_ms.p95 | 22.55 [23.29] |
| memory_after_switch_back.rss_mb | 1734.40 [1746.80] |
| memory_after_switch_back.processes | 13.00 |
