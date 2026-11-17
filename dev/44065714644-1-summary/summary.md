# Engine bench summary — run 44065714644

Component benchmark over the AXCF pipe (tools/engine-bench). Median over repetitions, [p95]. Never Zen E1/E2 evidence. GitHub-hosted runners have no GPU: every engine renders in software.

- **chromium**: status PASS (5/5 reps), engine 156.0.8078.96, render_path native-osr-bgra, AMD EPYC 9V74 80-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS, GPU nodes ['card1']
- **chromium+damage**: status PASS (5/5 reps), engine 156.0.8078.96, render_path native-osr-bgra, AMD EPYC 9V74 80-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS, GPU nodes ['card1']
- **chromium+damage+payload**: status PASS (5/5 reps), engine 156.0.8078.96, render_path native-osr-bgra, AMD EPYC 9V74 80-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS, GPU nodes ['card1']
- **webkit**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, INTEL(R) XEON(R) PLATINUM 8573C × 4, 15982 MB, Debian GNU/Linux 13 (trixie), GPU nodes none
- **webkit+damage**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, INTEL(R) XEON(R) PLATINUM 8573C × 4, 15982 MB, Debian GNU/Linux 13 (trixie), GPU nodes none
- **webkit+damage+payload**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, INTEL(R) XEON(R) PLATINUM 8573C × 4, 15982 MB, Debian GNU/Linux 13 (trixie), GPU nodes none

| Metric | chromium | chromium+damage | chromium+damage+payload | webkit | webkit+damage | webkit+damage+payload |
| --- | --- | --- | --- | --- | --- | --- |
| Spawn → ready | 172 ms [1685] | 171 ms [195] | 170 ms [191] | 41 ms [45] | 39 ms [43] | 40 ms [41] |
| Create → first frame (1×) | 91 ms [5166] | 96 ms [196] | 123 ms [178] | 412 ms [423] | 417 ms [426] | 413 ms [439] |
| Create → painted frame (1×) | 113 ms [5166] | 114 ms [196] | 141 ms [180] | 412 ms [424] | 418 ms [426] | 415 ms [440] |
| Navigate → painted frame (static, 1×) | 17 ms [20] | 18 ms [22] | 17 ms | 57 ms [65] | 57 ms [58] | 56 ms |
| Idle frames/s (static page) | 0.00 [0.50] | 0.00 [0.50] | 0.00 | 0.00 | 0.00 | 0.00 |
| Processes after create | 10 | 10 | 10 | 5 | 5 | 5 |
| RSS after create (host+helpers) | 843 MB [859] | 844 MB [859] | 843 MB [846] | 406 MB [410] | 404 MB [407] | 408 MB [414] |
| PSS after create (host+helpers) | — | — | — | 270 MB [274] | 268 MB [273] | 274 MB [279] |
| Close → host exit | 86 ms [89] | 90 ms [234] | 84 ms [228] | 130 ms [132] | 179 ms [180] | 175 ms [183] |
| Close → no helper left | 90 ms [93] | 94 ms [239] | 89 ms [233] | 131 ms [132] | 179 ms [181] | 176 ms [183] |
| **1× (900×650 CSS px → 900×650 px)** | | | | | | |
| rAF fps | 60.0 [60.2] | 60.0 [60.2] | 60.0 | 58.2 [58.4] | 57.8 | 57.8 [58.2] |
| rAF frame interval median | 16.6 ms [16.7] | 16.5 ms [16.7] | 16.4 ms [16.9] | 17.1 ms [17.4] | 17.4 ms | 17.3 ms [17.4] |
| rAF frame interval p99 | 17.9 ms [20.1] | 18.1 ms [19.5] | 17.8 ms [18.6] | 18.5 ms [18.7] | 18.6 ms [18.8] | 18.6 ms [19.0] |
| rAF intervals > 25 ms | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| rAF pipe throughput | 140 MB/s [141] | 140 MB/s [141] | 33 MB/s | 136 MB/s [137] | 135 MB/s | 29 MB/s |
| rAF bytes/frame | 2340342 B | 2340369 B | 552690 B [553586] | 2340341 B | 2340368 B | 497320 B [499035] |
| rAF client read time/frame | 0.68 ms [2.73] | 0.75 ms [2.77] | 0.12 ms [0.15] | 1.23 ms [3.05] | 1.26 ms [3.06] | 0.18 ms [0.29] |
| rAF changed-row band (share of frame) | 0.423 | 0.423 | — | 0.423 | 0.423 | — |
| rAF host damage share (damage run) | — | 0.236 | 0.236 | — | 0.212 | 0.212 [0.213] |
| rAF CPU host+helpers | 14 % [17] | 14 % [18] | 13 % [16] | 67 % [69] | 71 % [72] | 67 % [69] |
| rAF RSS host+helpers | 869 MB [872] | 874 MB [877] | 875 MB [876] | 416 MB [418] | 414 MB [416] | 418 MB [423] |
| Scroll fps (wheel 60 Hz) | 60.2 | 60.2 | 60.2 | 57.8 [58.0] | 55.4 [55.8] | 55.4 [55.6] |
| Scroll frame interval p99 | 17.8 ms [17.9] | 17.5 ms [17.8] | 17.7 ms [19.3] | 19.2 ms [31.3] | 34.9 ms [35.3] | 35.0 ms [35.2] |
| Scroll pipe throughput | 141 MB/s | 141 MB/s | 141 MB/s | 135 MB/s [136] | 130 MB/s [131] | 128 MB/s [129] |
| Scroll CPU host+helpers | 19 % [21] | 19 % [21] | 18 % [21] | 66 % [70] | 69 % [72] | 70 % |
| Scroll host damage share (damage run) | — | 1.000 | 1.000 | — | 0.985 [0.992] | 0.988 [0.995] |
| Image page scroll fps | 60.2 | 60.2 | 60.2 | 57.8 | 57.2 [57.8] | 57.8 |
| DOM page scroll fps | 60.2 | 60.2 | 60.2 | 57.8 [58.0] | 54.4 [55.4] | 54.4 [55.0] |
| Key → changed frame (pooled) | 3.3 ms [5.2] | 3.4 ms [5.7] | 2.4 ms [3.0] | 7.4 ms [23.7] | 22.8 ms [23.9] | 7.0 ms [15.4] |
| Key → title event (median of reps) | 1.2 ms [1.3] | 1.2 ms [1.3] | 1.2 ms [1.3] | 1.7 ms [1.8] | 1.5 ms [1.6] | 1.5 ms |
| Wheel → changed frame (pooled) | 7.1 ms [12.7] | 9.0 ms [12.7] | 6.6 ms [11.8] | 7.2 ms [23.9] | 7.7 ms [24.2] | 7.5 ms [23.1] |
| Image page navigate → painted | 121 ms [122] | 123 ms [130] | 120 ms [141] | 401 ms [422] | 415 ms [417] | 405 ms [416] |
| DOM page navigate → painted | 286 ms [318] | 290 ms [299] | 300 ms [302] | 462 ms [480] | 470 ms [486] | 464 ms [470] |
| Resize → frame at new size | 0 ms | 0 ms | 0 ms | 0 ms | 0 ms | 0 ms |
| **2× (900×650 CSS px → 1800×1300 px)** | | | | | | |
| rAF fps | 60.0 [60.1] | 60.0 [60.1] | 60.0 [60.2] | 51.2 [52.5] | 49.6 [51.1] | 58.0 [58.2] |
| rAF frame interval median | 16.7 ms | 16.7 ms | 16.7 ms | 18.2 ms [19.3] | 19.9 ms [20.2] | 17.2 ms |
| rAF frame interval p99 | 18.4 ms [25.2] | 18.2 ms [23.0] | 17.8 ms [19.2] | 30.1 ms [33.7] | 27.8 ms [34.4] | 24.5 ms [24.7] |
| rAF intervals > 25 ms | 0.000 [0.010] | 0.000 [0.007] | 0.000 | 0.094 [0.121] | 0.036 [0.037] | 0.004 [0.007] |
| rAF pipe throughput | 562 MB/s [563] | 562 MB/s | 133 MB/s | 479 MB/s [491] | 464 MB/s [478] | 115 MB/s [116] |
| rAF bytes/frame | 9360347 B | 9360375 B | 2213155 B [2216739] | 9360346 B | 9360374 B | 1984941 B [1989675] |
| rAF client read time/frame | 11.73 ms [11.74] | 11.83 ms [11.92] | 0.65 ms [0.69] | 16.10 ms [16.57] | 16.48 ms [16.70] | 0.86 ms [1.51] |
| rAF changed-row band (share of frame) | 0.424 | 0.424 | — | 0.422 | 0.422 | — |
| rAF host damage share (damage run) | — | 0.237 | 0.236 [0.237] | — | 0.213 | 0.212 |
| rAF CPU host+helpers | 30 % [33] | 31 % [33] | 22 % [24] | 240 % [243] | 233 % [235] | 242 % [243] |
| rAF RSS host+helpers | 1281 MB [1287] | 1286 MB [1296] | 1300 MB [1304] | 581 MB [609] | 579 MB [614] | 592 MB [617] |
| Scroll fps (wheel 60 Hz) | 59.9 | 59.7 [59.9] | 60.0 [60.2] | 52.2 [52.7] | 48.4 [48.7] | 49.8 [50.8] |
| Scroll frame interval p99 | 22.2 ms [25.8] | 27.0 ms [29.0] | 23.7 ms [28.0] | 31.7 ms [34.9] | 37.5 ms [38.7] | 39.3 ms [41.3] |
| Scroll pipe throughput | 561 MB/s | 559 MB/s [561] | 562 MB/s [563] | 489 MB/s [494] | 453 MB/s [456] | 460 MB/s [473] |
| Scroll CPU host+helpers | 61 % [62] | 63 % [68] | 60 % [62] | 236 % [240] | 238 % [240] | 248 % [249] |
| Scroll host damage share (damage run) | — | 1.000 | 1.000 | — | 0.999 | 0.995 [0.999] |
| Image page scroll fps | 60.0 | 59.8 [60.0] | 60.0 | 40.8 [41.3] | 39.8 [41.4] | 39.6 [40.2] |
| DOM page scroll fps | 60.0 [60.1] | 60.0 [60.1] | 60.2 | 51.1 [52.6] | 48.8 [50.6] | 49.0 [51.7] |
| Key → changed frame (pooled) | 12.8 ms [15.7] | 13.0 ms [16.1] | 3.1 ms [3.7] | 39.6 ms [44.0] | 35.8 ms [46.1] | 22.0 ms [23.6] |
| Key → title event (median of reps) | 1.3 ms [1.4] | 1.3 ms | 1.2 ms | 1.4 ms [1.5] | 1.5 ms [1.6] | 1.5 ms |
| Wheel → changed frame (pooled) | 12.6 ms [18.3] | 11.7 ms [18.4] | 10.6 ms [11.8] | 40.2 ms [50.5] | 40.8 ms [49.3] | 31.7 ms [45.0] |
| Image page navigate → painted | 162 ms [167] | 162 ms [168] | 141 ms [144] | 287 ms [321] | 277 ms [293] | 275 ms [279] |
| DOM page navigate → painted | 342 ms [348] | 365 ms [414] | 332 ms [352] | 518 ms [612] | 517 ms [532] | 500 ms [509] |
| Resize → frame at new size | 91 ms [93] | 91 ms [96] | 77 ms [88] | 276 ms [333] | 283 ms [343] | 280 ms [333] |
| **A/B: stdout pipe enlarged to 1 MiB (2×)** | | | | | | |
| rAF fps, 1 MiB pipe | 59.2 [59.3] | — | — | 52.6 [53.2] | — | — |
| rAF client read/frame, 1 MiB pipe | 11.81 ms [11.90] | — | — | 15.23 ms [15.45] | — | — |
| Scroll fps, 1 MiB pipe | 60.1 | — | — | 50.2 [54.0] | — | — |
| Scroll CPU, 1 MiB pipe | 52 % [60] | — | — | 236 % [239] | — | — |

## Presenter pixel path — chromium Google Chrome 157.0.8103.50

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs`; WebGL renderer: ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)

| Step | 900×650 | 1800×1300 |
| --- | --- | --- |
| alloc_copy | 1.02 [1.25] | 3.67 [4.83] |
| presenter_bgraToRGBA | 1.00 [1.21] | 4.75 [5.15] |
| candidate_u32_fast_path | 0.98 [1.14] | 4.76 [5.37] |
| putImageData_full | 0.17 [0.20] | 0.65 [0.68] |
| presenter_draw_full | 1.18 [1.28] | 5.52 [6.01] |
| surface_draw_full | 1.15 [1.27] | 4.68 [5.38] |
| surface_draw_damage10 | 0.12 [0.16] | 0.59 [0.66] |
| candidate_videoframe_full | 1.34 [1.54] | 4.34 [5.29] |
| candidate_videoframe_damage10 | 0.17 [0.21] | 0.61 [1.65] |
| surface_upload_draw_full | 1.33 [1.48] | 4.53 [5.30] |
| surface_upload_draw_damage10 | 0.19 [0.23] | 0.64 [1.33] |
| candidate_damage10_fast_put | 0.18 [0.20] | 0.68 [0.99] |
| candidate_createImageBitmap | 2.66 [3.45] | 12.38 [13.32] |
| candidate_webgl_full | 2.61 [3.46] | 11.91 [13.42] |
| candidate_webgl_damage10 | 2.23 [2.83] | 10.82 [14.65] |

## Presenter pixel path — firefox Mozilla Firefox 160.0

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs`; WebGL renderer: None

| Step | 900×650 | 1800×1300 |
| --- | --- | --- |
| alloc_copy | 1.06 [1.28] | 3.68 [4.74] |
| presenter_bgraToRGBA | 1.28 [1.74] | 5.24 [6.12] |
| candidate_u32_fast_path | 1.42 [1.70] | 4.72 [5.36] |
| putImageData_full | 0.16 [0.22] | 0.64 [0.66] |
| presenter_draw_full | 1.90 [2.06] | 6.20 [6.88] |
| surface_draw_full | 2.20 [2.52] | 5.30 [5.56] |
| surface_draw_damage10 | 0.20 [0.24] | 0.58 [0.72] |
| candidate_videoframe_full | 1.32 [1.56] | 4.26 [4.98] |
| candidate_videoframe_damage10 | 0.08 [0.12] | 0.16 [0.26] |
| surface_upload_draw_full | 1.28 [1.50] | 4.30 [4.82] |
| surface_upload_draw_damage10 | 0.10 [0.12] | 0.22 [0.32] |
| candidate_damage10_fast_put | 0.28 [0.36] | 0.80 [0.88] |
| candidate_createImageBitmap | 3.32 [4.94] | 13.44 [16.72] |

## Presenter pixel path — v8 v22.23.4

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs bgraToRGBA (imported)`

| Step | 900×650 | 900×650 (10% translucent) | 1800×1300 | 1800×1300 (10% translucent) |
| --- | --- | --- | --- | --- |
| copy | 0.88 [1.65] | 0.23 [0.71] | 1.01 [3.39] | 0.96 [1.03] |
| presenter_bgraToRGBA | 1.01 [1.09] | 1.00 [1.01] | 2.49 [2.52] | 3.99 [4.02] |
| candidate_u32_opaque_fast_path | 1.08 [1.16] | 0.94 [0.97] | 2.47 [2.49] | 3.78 [3.79] |

## Integrated (Zen app) — chromium: PASS

App: fetched-artifact run 43250020015, commit 4be47fa496597675fbc512e20c04d8922eb64f39; TEST-ONLY chrome-overlay: apps/browser/chrome of 452e51fb22ba87e96efac29c8c0a7af53ea47200 (4 replaced, 0 added)
Machine: Intel(R) Xeon(R) 6975P-C × 4, 15701 MB, Ubuntu 24.04.5 LTS
Repetitions: PASS, PASS, PASS, PASS, PASS

| Metric | median [p95] |
| --- | --- |
| static.navigate_to_title_wall_ms | 7.50 [11.40] |
| image.navigate_to_title_wall_ms | 260.20 [262.80] |
| dom.navigate_to_title_wall_ms | 261.40 [262.80] |
| raf.window.fps | 60.06 [60.09] |
| raf.window.interval_ms.median | 16.57 [16.63] |
| raf.window.interval_p99_ms | 20.88 [24.36] |
| raf.window.long_intervals_share | 0.00 [0.01] |
| raf.window.usage.cpu_percent | 30.40 [31.10] |
| raf.window.usage.parent_cpu_percent | 17.20 [18.20] |
| scroll.window.usage.parent_cpu_percent | 28.80 [34.30] |
| scroll.window.fps_input | 60.15 [60.27] |
| scroll.window.interval_p99_input_ms | 20.94 [24.98] |
| image_scroll.window.fps_input | 60.35 [60.91] |
| scroll.window.fps | 60.15 [60.27] |
| scroll.window.interval_p99_ms | 20.94 [24.98] |
| scroll.window.long_intervals_share | 0.01 |
| scroll.window.usage.cpu_percent | 51.10 [56.00] |
| scroll.window.input_wall_s | 1.95 [1.96] |
| image_scroll.window.input_wall_s | 1.95 |
| scroll.window.input_pacing.send_span_s | 1.94 |
| image_scroll.window.fps | 60.35 [60.91] |
| image_scroll.window.interval_p99_ms | 23.44 [26.87] |
| image_scroll.window.usage.cpu_percent | 53.20 [58.70] |
| memory_all_processes.rss_mb | 2648.60 [2652.30] |
| memory_all_processes.processes | 22.00 |
| tab_switch.to_gecko_blank_tab_ms.median | 20.53 [21.57] |
| tab_switch.back_to_bench_tab_ms.median | 37.33 [37.84] |
| switch.gecko_to_engine_switch_ms | 273.70 [2098.00] |
| switch.engine_to_gecko_switch_ms | 125.60 [131.10] |
| static.timing.navigate_to_title_ms | 30.80 [35.40] |
| static.timing.navigate_to_visible_ms | 35.70 [39.50] |
| image.timing.navigate_to_title_ms | 15.40 [18.10] |
| image.timing.navigate_to_visible_ms | 100.40 [116.20] |
| dom.timing.navigate_to_title_ms | 16.00 [19.60] |
| dom.timing.navigate_to_visible_ms | 172.70 [205.50] |
| raf.window.fps_whole_window | 60.03 |
| scroll.window.fps_whole_window | 59.49 [59.50] |
| image_scroll.window.fps_whole_window | 36.35 [36.85] |
| raf.window.presenter.meanDrawMilliseconds | 0.01 |
| scroll.window.presenter.meanDrawMilliseconds | 0.01 |
| raf.window.presenter.supersededFrames | 0.00 |
| scroll.window.presenter.supersededFrames | 0.00 |
| raf.window.presenter.uploadedPixelShare | 0.27 |
| scroll.window.presenter.uploadedPixelShare | 0.51 |
| raf.window.multi_frame_updates | 0.00 |
| scroll.window.multi_frame_updates | 0.00 [1.00] |
| key.keydown_to_presented_frame_ms.median | 9.92 [10.64] |
| key.keydown_to_presented_frame_ms.p95 | 11.37 [12.29] |
| memory_after_switch_back.rss_mb | 1480.40 [1605.90] |
| memory_after_switch_back.processes | 12.00 |

## Integrated (Zen app) — gecko: PASS

App: fetched-artifact run 43250020015, commit 4be47fa496597675fbc512e20c04d8922eb64f39; TEST-ONLY chrome-overlay: apps/browser/chrome of 452e51fb22ba87e96efac29c8c0a7af53ea47200 (4 replaced, 0 added)
Machine: Intel(R) Xeon(R) 6975P-C × 4, 15701 MB, Ubuntu 24.04.5 LTS
Repetitions: PASS, PASS, PASS, PASS, PASS

| Metric | median [p95] |
| --- | --- |
| static.timing.firstContentfulPaint | 18.00 [54.00] |
| static.timing.loadEventEnd | 16.00 [53.00] |
| static.navigate_to_title_wall_ms | 31.90 [138.60] |
| image.timing.firstContentfulPaint | 106.00 |
| image.timing.loadEventEnd | 95.00 [105.00] |
| image.navigate_to_title_wall_ms | 104.50 [113.80] |
| dom.timing.firstContentfulPaint | 107.00 [109.00] |
| dom.timing.loadEventEnd | 98.00 [106.00] |
| dom.navigate_to_title_wall_ms | 105.40 [152.90] |
| static.idle_raf.fps | 59.00 [59.14] |
| raf.window.fps | 59.00 |
| raf.window.interval_ms.median | 17.10 |
| raf.window.interval_p99_ms | 17.22 |
| raf.window.long_intervals_share | 0.00 |
| raf.window.usage.cpu_percent | 15.90 [16.20] |
| raf.window.usage.parent_cpu_percent | 11.90 [12.30] |
| scroll.window.usage.parent_cpu_percent | 17.30 [43.10] |
| scroll.window.fps | 59.01 [59.03] |
| scroll.window.interval_p99_ms | 17.18 |
| scroll.window.long_intervals_share | 0.00 |
| scroll.window.scrolled_css_px | 13617.67 [13631.75] |
| scroll.window.usage.cpu_percent | 21.80 [46.10] |
| scroll.window.input_wall_s | 1.96 |
| image_scroll.window.input_wall_s | 1.95 |
| scroll.window.input_pacing.send_span_s | 1.94 |
| image_scroll.window.fps | 58.99 [59.00] |
| image_scroll.window.interval_p99_ms | 17.22 |
| image_scroll.window.usage.cpu_percent | 17.30 [64.60] |
| key.keydown_to_second_raf_ms.median | 8.50 [9.00] |
| key.keydown_to_second_raf_ms.p95 | 16.00 [17.00] |
| key.event_to_handler_ms.median | 0.50 [1.00] |
| memory_all_processes.rss_mb | 1417.40 [1461.10] |
| memory_all_processes.pss_mb | 653.60 [678.50] |
| memory_all_processes.processes | 12.00 |
| tab_switch.to_gecko_blank_tab_ms.median | 20.56 [20.72] |
| tab_switch.back_to_bench_tab_ms.median | 20.00 [20.13] |

## Integrated (Zen app) — gecko-debian: PASS

App: fetched-artifact run 43250020015, commit 4be47fa496597675fbc512e20c04d8922eb64f39; TEST-ONLY chrome-overlay: apps/browser/chrome of 452e51fb22ba87e96efac29c8c0a7af53ea47200 (4 replaced, 0 added)
Machine: AMD EPYC 9V74 80-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie)
Repetitions: PASS, PASS, PASS, PASS, PASS

| Metric | median [p95] |
| --- | --- |
| static.timing.firstContentfulPaint | 18.00 [123.00] |
| static.timing.loadEventEnd | 16.00 [123.00] |
| static.navigate_to_title_wall_ms | 32.70 [273.70] |
| image.timing.firstContentfulPaint | 105.00 [109.00] |
| image.timing.loadEventEnd | 97.00 [102.00] |
| image.navigate_to_title_wall_ms | 107.10 [115.70] |
| dom.timing.firstContentfulPaint | 127.50 [134.00] |
| dom.timing.loadEventEnd | 119.00 [130.00] |
| dom.navigate_to_title_wall_ms | 134.10 [142.70] |
| static.idle_raf.fps | 59.01 [59.03] |
| raf.window.fps | 59.01 [59.02] |
| raf.window.interval_ms.median | 17.10 |
| raf.window.interval_p99_ms | 17.14 [17.24] |
| raf.window.long_intervals_share | 0.00 |
| raf.window.usage.cpu_percent | 16.20 [16.80] |
| raf.window.usage.parent_cpu_percent | 11.90 [12.50] |
| scroll.window.usage.parent_cpu_percent | 19.10 [63.10] |
| scroll.window.fps | 58.99 [59.00] |
| scroll.window.interval_p99_ms | 17.12 |
| scroll.window.long_intervals_share | 0.00 |
| scroll.window.scrolled_css_px | 13655.95 [13679.00] |
| scroll.window.usage.cpu_percent | 23.10 [67.60] |
| scroll.window.input_wall_s | 1.95 [1.96] |
| image_scroll.window.input_wall_s | 1.95 [1.96] |
| scroll.window.input_pacing.send_span_s | 1.94 |
| image_scroll.window.fps | 59.00 [59.03] |
| image_scroll.window.interval_p99_ms | 17.12 |
| image_scroll.window.usage.cpu_percent | 15.60 [49.20] |
| key.keydown_to_second_raf_ms.median | 10.00 [11.00] |
| key.keydown_to_second_raf_ms.p95 | 16.00 [18.00] |
| key.event_to_handler_ms.median | 1.00 |
| memory_all_processes.rss_mb | 1560.50 [1575.60] |
| memory_all_processes.pss_mb | 711.60 [724.10] |
| memory_all_processes.processes | 12.00 |
| tab_switch.to_gecko_blank_tab_ms.median | 20.54 [20.72] |
| tab_switch.back_to_bench_tab_ms.median | 20.18 [22.46] |

## Integrated (Zen app) — webkit: PASS

App: fetched-artifact run 43250020015, commit 4be47fa496597675fbc512e20c04d8922eb64f39; TEST-ONLY chrome-overlay: apps/browser/chrome of 452e51fb22ba87e96efac29c8c0a7af53ea47200 (4 replaced, 0 added)
Machine: AMD EPYC 9V74 80-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie)
Repetitions: PASS, PASS, PASS, PASS, PASS

| Metric | median [p95] |
| --- | --- |
| static.navigate_to_title_wall_ms | 14.50 [16.00] |
| image.navigate_to_title_wall_ms | 518.70 [521.50] |
| dom.navigate_to_title_wall_ms | 515.90 [540.80] |
| raf.window.fps | 57.63 [57.74] |
| raf.window.interval_ms.median | 17.19 [17.26] |
| raf.window.interval_p99_ms | 22.40 [23.91] |
| raf.window.long_intervals_share | 0.01 |
| raf.window.usage.cpu_percent | 72.80 [74.40] |
| raf.window.usage.parent_cpu_percent | 17.90 [20.00] |
| scroll.window.usage.parent_cpu_percent | 27.80 [49.60] |
| scroll.window.fps_input | 57.20 [57.44] |
| scroll.window.interval_p99_input_ms | 32.67 [37.42] |
| image_scroll.window.fps_input | 56.92 [57.86] |
| scroll.window.fps | 57.20 [57.44] |
| scroll.window.interval_p99_ms | 32.67 [37.42] |
| scroll.window.long_intervals_share | 0.03 [0.07] |
| scroll.window.usage.cpu_percent | 89.80 [113.60] |
| scroll.window.input_wall_s | 1.97 |
| image_scroll.window.input_wall_s | 1.96 |
| scroll.window.input_pacing.send_span_s | 1.96 |
| image_scroll.window.fps | 56.92 [57.86] |
| image_scroll.window.interval_p99_ms | 33.81 [53.63] |
| image_scroll.window.usage.cpu_percent | 93.90 [97.20] |
| memory_all_processes.rss_mb | 2127.60 [2132.00] |
| memory_all_processes.pss_mb | 1095.00 [1097.80] |
| memory_all_processes.processes | 17.00 |
| tab_switch.to_gecko_blank_tab_ms.median | 20.27 [22.96] |
| tab_switch.back_to_bench_tab_ms.median | 19.83 [39.71] |
| switch.gecko_to_engine_switch_ms | 490.30 [708.30] |
| switch.engine_to_gecko_switch_ms | 212.30 [215.10] |
| static.timing.navigate_to_title_ms | 13.10 [14.50] |
| static.timing.navigate_to_visible_ms | 49.30 [60.10] |
| image.timing.navigate_to_title_ms | 276.10 [279.30] |
| image.timing.navigate_to_visible_ms | 363.10 [365.30] |
| dom.timing.navigate_to_title_ms | 401.30 [412.60] |
| dom.timing.navigate_to_visible_ms | 442.70 [455.80] |
| raf.window.fps_whole_window | 57.58 [57.75] |
| scroll.window.fps_whole_window | 56.18 [56.92] |
| image_scroll.window.fps_whole_window | 37.34 [39.29] |
| raf.window.presenter.meanDrawMilliseconds | 0.01 |
| scroll.window.presenter.meanDrawMilliseconds | 0.01 |
| raf.window.presenter.supersededFrames | 0.00 |
| scroll.window.presenter.supersededFrames | 0.00 |
| raf.window.multi_frame_updates | 0.00 |
| scroll.window.multi_frame_updates | 0.00 [1.00] |
| key.keydown_to_presented_frame_ms.median | 17.32 [18.34] |
| key.keydown_to_presented_frame_ms.p95 | 22.14 [23.13] |
| memory_after_switch_back.rss_mb | 1599.00 [1620.40] |
| memory_after_switch_back.processes | 12.00 |
