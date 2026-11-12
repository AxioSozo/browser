# Engine bench summary — run 43225405993

Component benchmark over the AXCF pipe (tools/engine-bench). Median over repetitions, [p95]. Never Zen E1/E2 evidence. GitHub-hosted runners have no GPU: every engine renders in software.

- **chromium+damage**: status BLOCKED_ENV (None/5 reps), engine ?, render_path None, AMD EPYC 7763 64-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS, GPU nodes ['card1'] — error: RuntimeError: BLOCKED_ENV: native CEF rebuild required; run probe.py setup
- **chromium+damage+payload**: status BLOCKED_ENV (None/5 reps), engine ?, render_path None, AMD EPYC 7763 64-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS, GPU nodes ['card1'] — error: RuntimeError: BLOCKED_ENV: native CEF rebuild required; run probe.py setup
- **webkit**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, AMD EPYC 9V74 80-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie), GPU nodes none
- **webkit+damage**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, AMD EPYC 9V74 80-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie), GPU nodes none
- **webkit+damage+payload**: status PASS (5/5 reps), engine 2.48.3, render_path wpe-fdo-shm-bgra, AMD EPYC 9V74 80-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie), GPU nodes none

| Metric | chromium+damage | chromium+damage+payload | webkit | webkit+damage | webkit+damage+payload |
| --- | --- | --- | --- | --- | --- |
| Spawn → ready | — | — | 32 ms [41] | 34 ms [38] | 33 ms [39] |
| Create → first frame (1×) | — | — | 392 ms [397] | 374 ms [398] | 390 ms [402] |
| Create → painted frame (1×) | — | — | 392 ms [398] | 374 ms [398] | 390 ms [402] |
| Navigate → painted frame (static, 1×) | — | — | 55 ms [56] | 55 ms [56] | 54 ms |
| Idle frames/s (static page) | — | — | 0.00 | 0.00 | 0.00 |
| Processes after create | — | — | 5 | 5 | 5 |
| RSS after create (host+helpers) | — | — | 405 MB [406] | 407 MB [414] | 407 MB [409] |
| PSS after create (host+helpers) | — | — | 270 MB [272] | 270 MB [276] | 272 MB [275] |
| Close → host exit | — | — | 128 ms [129] | 179 ms [182] | 168 ms [178] |
| Close → no helper left | — | — | 128 ms [129] | 179 ms [182] | 168 ms [178] |
| **1× (900×650 CSS px → 900×650 px)** | | | | | |
| rAF fps | — | — | 58.0 [58.2] | 57.8 [58.2] | 58.0 [58.2] |
| rAF frame interval median | — | — | 17.2 ms [17.6] | 17.3 ms [17.4] | 17.2 ms [17.4] |
| rAF frame interval p99 | — | — | 18.6 ms [18.8] | 18.5 ms [19.4] | 18.8 ms [19.0] |
| rAF intervals > 25 ms | — | — | 0.000 | 0.000 [0.007] | 0.000 |
| rAF pipe throughput | — | — | 136 MB/s | 135 MB/s [136] | 29 MB/s |
| rAF bytes/frame | — | — | 2340341 B | 2340368 B | 498467 B [499035] |
| rAF client read time/frame | — | — | 0.73 ms [2.71] | 0.74 ms [2.62] | 0.13 ms [0.22] |
| rAF changed-row band (share of frame) | — | — | 0.423 | 0.423 | — |
| rAF host damage share (damage run) | — | — | — | 0.213 | 0.213 |
| rAF CPU host+helpers | — | — | 55 % [58] | 58 % | 52 % [57] |
| rAF RSS host+helpers | — | — | 415 MB [416] | 417 MB [422] | 416 MB [418] |
| Scroll fps (wheel 60 Hz) | — | — | 57.8 [58.2] | 55.4 [55.8] | 55.0 [55.4] |
| Scroll frame interval p99 | — | — | 19.0 ms [32.9] | 34.8 ms [35.3] | 34.8 ms [35.3] |
| Scroll pipe throughput | — | — | 135 MB/s [136] | 130 MB/s [131] | 128 MB/s [129] |
| Scroll CPU host+helpers | — | — | 58 % [61] | 55 % [56] | 56 % [61] |
| Scroll host damage share (damage run) | — | — | — | 0.988 [0.999] | 0.988 [0.992] |
| Image page scroll fps | — | — | 57.8 [58.0] | 57.4 [58.0] | 57.4 |
| DOM page scroll fps | — | — | 58.0 [58.2] | 55.0 [55.4] | 54.8 [55.6] |
| Key → changed frame (pooled) | — | — | 7.3 ms [21.4] | 7.4 ms [21.3] | 7.2 ms [7.7] |
| Key → title event (median of reps) | — | — | 1.2 ms [1.3] | 1.2 ms | 1.2 ms [1.3] |
| Wheel → changed frame (pooled) | — | — | 7.4 ms [21.8] | 7.4 ms [22.0] | 7.2 ms [20.2] |
| Image page navigate → painted | — | — | 320 ms [336] | 320 ms | 319 ms [320] |
| DOM page navigate → painted | — | — | 420 ms [436] | 426 ms [443] | 428 ms [440] |
| Resize → frame at new size | — | — | 0 ms | 0 ms | 0 ms |
| **2× (900×650 CSS px → 1800×1300 px)** | | | | | |
| rAF fps | — | — | 57.2 [57.7] | 56.9 [57.5] | 58.0 [58.2] |
| rAF frame interval median | — | — | 17.3 ms [17.4] | 17.3 ms [17.4] | 17.2 ms [17.3] |
| rAF frame interval p99 | — | — | 23.5 ms [24.6] | 22.8 ms [32.6] | 19.4 ms [20.0] |
| rAF intervals > 25 ms | — | — | 0.000 [0.004] | 0.000 [0.025] | 0.000 [0.004] |
| rAF pipe throughput | — | — | 535 MB/s [540] | 532 MB/s [538] | 115 MB/s [116] |
| rAF bytes/frame | — | — | 9360346 B | 9360374 B | 1984941 B [1989675] |
| rAF client read time/frame | — | — | 14.31 ms [14.46] | 14.51 ms [14.57] | 0.56 ms [1.17] |
| rAF changed-row band (share of frame) | — | — | 0.422 | 0.422 | — |
| rAF host damage share (damage run) | — | — | — | 0.211 | 0.212 |
| rAF CPU host+helpers | — | — | 216 % [219] | 220 % [224] | 204 % [207] |
| rAF RSS host+helpers | — | — | 574 MB [582] | 581 MB [588] | 585 MB [586] |
| Scroll fps (wheel 60 Hz) | — | — | 56.8 [57.3] | 48.2 [49.4] | 53.6 [55.4] |
| Scroll frame interval p99 | — | — | 29.9 ms [33.5] | 37.9 ms [39.4] | 34.6 ms [38.4] |
| Scroll pipe throughput | — | — | 531 MB/s [536] | 451 MB/s [462] | 499 MB/s [510] |
| Scroll CPU host+helpers | — | — | 217 % [221] | 216 % [221] | 214 % [217] |
| Scroll host damage share (damage run) | — | — | — | 0.987 [0.995] | 0.995 [0.999] |
| Image page scroll fps | — | — | 46.4 [46.9] | 42.6 [47.3] | 45.4 [45.9] |
| DOM page scroll fps | — | — | 56.8 [57.0] | 49.6 [52.8] | 53.6 [54.8] |
| Key → changed frame (pooled) | — | — | 30.2 ms [38.4] | 30.9 ms [40.4] | 22.8 ms [24.1] |
| Key → title event (median of reps) | — | — | 1.2 ms | 1.2 ms | 1.2 ms [1.3] |
| Wheel → changed frame (pooled) | — | — | 36.5 ms [44.3] | 30.8 ms [44.0] | 26.3 ms [37.7] |
| Image page navigate → painted | — | — | 201 ms [205] | 192 ms [202] | 188 ms [190] |
| DOM page navigate → painted | — | — | 467 ms [475] | 458 ms [472] | 448 ms [461] |
| Resize → frame at new size | — | — | 254 ms [264] | 256 ms [273] | 251 ms [257] |
| **A/B: stdout pipe enlarged to 1 MiB (2×)** | | | | | |
| rAF fps, 1 MiB pipe | — | — | 57.3 [57.7] | — | — |
| rAF client read/frame, 1 MiB pipe | — | — | 13.22 ms [14.19] | — | — |
| Scroll fps, 1 MiB pipe | — | — | 56.6 [56.9] | — | — |
| Scroll CPU, 1 MiB pipe | — | — | 222 % [226] | — | — |

## Presenter pixel path — chromium Google Chrome 156.0.8078.79

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs`; WebGL renderer: ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)

| Step | 900×650 | 1800×1300 |
| --- | --- | --- |
| alloc_copy | 1.22 [2.37] | 4.48 [5.29] |
| presenter_bgraToRGBA | 1.53 [2.63] | 5.31 [5.71] |
| candidate_u32_fast_path | 1.48 [3.02] | 6.04 [6.29] |
| putImageData_full | 0.10 [0.12] | 0.34 [0.45] |
| presenter_draw_full | 1.59 [1.99] | 5.96 [13.12] |
| surface_draw_full | 1.62 [1.97] | 6.82 [7.67] |
| surface_draw_damage10 | 0.18 [0.28] | 0.69 [1.25] |
| candidate_videoframe_full | 1.30 [1.79] | 7.16 [10.04] |
| candidate_videoframe_damage10 | 0.25 [0.41] | 1.08 [5.07] |
| surface_upload_draw_full | 1.51 [1.73] | 7.86 [16.17] |
| surface_upload_draw_damage10 | 0.27 [0.48] | 0.85 [12.09] |
| candidate_damage10_fast_put | 0.28 [0.42] | 0.86 [1.26] |
| candidate_createImageBitmap | 3.85 [9.29] | 15.60 [24.46] |
| candidate_webgl_full | 3.19 [5.82] | 16.11 [16.93] |
| candidate_webgl_damage10 | 6.00 [11.01] | 14.56 [19.77] |

## Presenter pixel path — firefox Mozilla Firefox 159.0

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs`; WebGL renderer: None

| Step | 900×650 | 1800×1300 |
| --- | --- | --- |
| alloc_copy | 1.08 [1.58] | 4.56 [8.10] |
| presenter_bgraToRGBA | 1.32 [2.54] | 5.34 [5.92] |
| candidate_u32_fast_path | 1.14 [1.64] | 3.86 [4.28] |
| putImageData_full | 0.14 [0.18] | 0.44 [0.50] |
| presenter_draw_full | 1.70 [2.42] | 6.20 [7.46] |
| surface_draw_full | 2.18 [2.70] | 6.04 [7.36] |
| surface_draw_damage10 | 0.24 [0.32] | 0.60 [1.08] |
| candidate_videoframe_full | 1.86 [4.08] | 5.62 [5.94] |
| candidate_videoframe_damage10 | 0.08 [0.10] | 0.12 [0.40] |
| surface_upload_draw_full | 1.52 [4.46] | 6.54 [8.14] |
| surface_upload_draw_damage10 | 0.08 [0.14] | 0.24 [0.40] |
| candidate_damage10_fast_put | 0.36 [0.48] | 1.14 [1.58] |
| candidate_createImageBitmap | 5.98 [8.34] | 24.64 [29.22] |

## Presenter pixel path — v8 v22.23.4

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs bgraToRGBA (imported)`

| Step | 900×650 | 900×650 (10% translucent) | 1800×1300 | 1800×1300 (10% translucent) |
| --- | --- | --- | --- | --- |
| copy | 0.25 [1.12] | 0.22 [1.04] | 1.39 [4.57] | 1.27 [4.59] |
| presenter_bgraToRGBA | 1.39 [1.46] | 1.40 [1.44] | 3.67 [3.74] | 5.71 [5.82] |
| candidate_u32_opaque_fast_path | 1.29 [1.32] | 1.27 [1.35] | 3.67 [3.83] | 5.20 [5.30] |

## Integrated (Zen app) — gecko: PASS

App: fetched-artifact run 39663428275, commit 99076576ca156b4d24da84c1e8f91a097262641e; TEST-ONLY chrome-overlay: apps/browser/chrome of 54e90435e59daa35aa2ba00b06e8e4b0d8ecaa45 (4 replaced, 0 added)
Machine: AMD EPYC 7763 64-Core Processor × 4, 15983 MB, Ubuntu 24.04.5 LTS
Repetitions: PASS, PASS, PASS, PASS, PASS

| Metric | median [p95] |
| --- | --- |
| static.timing.firstContentfulPaint | 19.00 [84.00] |
| static.timing.loadEventEnd | 18.00 [73.00] |
| static.navigate_to_title_wall_ms | 45.80 [168.60] |
| image.timing.firstContentfulPaint | 122.00 [132.00] |
| image.timing.loadEventEnd | 120.00 [129.00] |
| image.navigate_to_title_wall_ms | 132.40 [143.80] |
| dom.timing.firstContentfulPaint | 166.00 [180.00] |
| dom.timing.loadEventEnd | 152.00 [175.00] |
| dom.navigate_to_title_wall_ms | 170.30 [201.00] |
| static.idle_raf.fps | 58.99 [59.47] |
| raf.window.fps | 59.00 [59.01] |
| raf.window.interval_ms.median | 17.10 |
| raf.window.interval_p99_ms | 17.14 |
| raf.window.long_intervals_share | 0.00 |
| raf.window.usage.cpu_percent | 25.00 [38.40] |
| raf.window.usage.parent_cpu_percent | 19.70 [32.90] |
| scroll.window.usage.parent_cpu_percent | 43.40 [140.60] |
| scroll.window.fps | 58.99 [59.02] |
| scroll.window.interval_p99_ms | 17.12 [17.24] |
| scroll.window.long_intervals_share | 0.00 |
| scroll.window.scrolled_css_px | 13637.00 [13680.00] |
| scroll.window.usage.cpu_percent | 47.80 [147.50] |
| scroll.window.input_wall_s | 1.96 [1.97] |
| image_scroll.window.input_wall_s | 1.96 |
| scroll.window.input_pacing.send_span_s | 1.95 |
| image_scroll.window.fps | 59.00 [59.02] |
| image_scroll.window.interval_p99_ms | 17.12 |
| image_scroll.window.usage.cpu_percent | 28.50 [30.50] |
| key.keydown_to_second_raf_ms.median | 10.00 [10.50] |
| key.keydown_to_second_raf_ms.p95 | 17.00 |
| key.event_to_handler_ms.median | 1.00 |
| memory_all_processes.rss_mb | 1440.10 [1452.90] |
| memory_all_processes.pss_mb | 664.30 [674.00] |
| memory_all_processes.processes | 12.00 |
| tab_switch.to_gecko_blank_tab_ms.median | 22.92 [23.04] |
| tab_switch.back_to_bench_tab_ms.median | 22.49 [23.02] |

## Integrated (Zen app) — gecko-debian: PASS

App: fetched-artifact run 39663428275, commit 99076576ca156b4d24da84c1e8f91a097262641e; TEST-ONLY chrome-overlay: apps/browser/chrome of 54e90435e59daa35aa2ba00b06e8e4b0d8ecaa45 (4 replaced, 0 added)
Machine: AMD EPYC 9V74 80-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie)
Repetitions: PASS, PASS, PASS, PASS, PASS

| Metric | median [p95] |
| --- | --- |
| static.timing.firstContentfulPaint | 35.00 [83.00] |
| static.timing.loadEventEnd | 19.00 [70.00] |
| static.navigate_to_title_wall_ms | 43.30 [168.70] |
| image.timing.firstContentfulPaint | 124.00 |
| image.timing.loadEventEnd | 119.00 [125.00] |
| image.navigate_to_title_wall_ms | 133.20 [136.20] |
| dom.timing.firstContentfulPaint | 152.00 [154.00] |
| dom.timing.loadEventEnd | 147.00 [166.00] |
| dom.navigate_to_title_wall_ms | 159.90 [175.30] |
| static.idle_raf.fps | 59.00 [59.57] |
| raf.window.fps | 59.00 [59.01] |
| raf.window.interval_ms.median | 17.10 |
| raf.window.interval_p99_ms | 17.16 [17.18] |
| raf.window.long_intervals_share | 0.00 |
| raf.window.usage.cpu_percent | 27.60 [28.30] |
| raf.window.usage.parent_cpu_percent | 20.70 [23.00] |
| scroll.window.usage.parent_cpu_percent | 46.80 [161.50] |
| scroll.window.fps | 59.00 [59.01] |
| scroll.window.interval_p99_ms | 17.12 [17.14] |
| scroll.window.long_intervals_share | 0.00 |
| scroll.window.scrolled_css_px | 13673.00 [13680.00] |
| scroll.window.usage.cpu_percent | 51.30 [167.00] |
| scroll.window.input_wall_s | 1.96 [1.97] |
| image_scroll.window.input_wall_s | 1.95 [1.96] |
| scroll.window.input_pacing.send_span_s | 1.95 |
| image_scroll.window.fps | 59.01 |
| image_scroll.window.interval_p99_ms | 17.12 [17.18] |
| image_scroll.window.usage.cpu_percent | 31.50 [31.60] |
| key.keydown_to_second_raf_ms.median | 9.50 |
| key.keydown_to_second_raf_ms.p95 | 16.00 [17.00] |
| key.event_to_handler_ms.median | 1.00 |
| memory_all_processes.rss_mb | 1642.10 [1652.80] |
| memory_all_processes.pss_mb | 696.00 [703.50] |
| memory_all_processes.processes | 13.00 |
| tab_switch.to_gecko_blank_tab_ms.median | 22.67 [23.26] |
| tab_switch.back_to_bench_tab_ms.median | 22.67 [23.81] |

## Integrated (Zen app) — webkit: PASS

App: fetched-artifact run 39663428275, commit 99076576ca156b4d24da84c1e8f91a097262641e; TEST-ONLY chrome-overlay: apps/browser/chrome of 54e90435e59daa35aa2ba00b06e8e4b0d8ecaa45 (4 replaced, 0 added)
Machine: AMD EPYC 9V74 80-Core Processor × 4, 15983 MB, Debian GNU/Linux 13 (trixie)
Repetitions: PASS, PASS, PASS, PASS, PASS

| Metric | median [p95] |
| --- | --- |
| static.navigate_to_title_wall_ms | 12.80 [18.40] |
| image.navigate_to_title_wall_ms | 515.90 [537.90] |
| dom.navigate_to_title_wall_ms | 522.70 [532.50] |
| raf.window.fps | 58.17 [58.29] |
| raf.window.interval_ms.median | 17.05 [17.10] |
| raf.window.interval_p99_ms | 23.27 [26.92] |
| raf.window.long_intervals_share | 0.01 |
| raf.window.usage.cpu_percent | 88.40 [92.40] |
| raf.window.usage.parent_cpu_percent | 21.50 [24.80] |
| scroll.window.usage.parent_cpu_percent | 33.00 [57.10] |
| scroll.window.fps_input | 57.15 [57.71] |
| scroll.window.interval_p99_input_ms | 33.03 [34.73] |
| image_scroll.window.fps_input | 56.43 [57.23] |
| scroll.window.fps | 57.15 [57.71] |
| scroll.window.interval_p99_ms | 33.03 [34.73] |
| scroll.window.long_intervals_share | 0.03 [0.06] |
| scroll.window.usage.cpu_percent | 105.40 [130.50] |
| scroll.window.input_wall_s | 1.97 |
| image_scroll.window.input_wall_s | 1.96 |
| scroll.window.input_pacing.send_span_s | 1.95 [1.96] |
| image_scroll.window.fps | 56.43 [57.23] |
| image_scroll.window.interval_p99_ms | 37.41 [45.18] |
| image_scroll.window.usage.cpu_percent | 104.90 [118.50] |
| memory_all_processes.rss_mb | 2234.20 [2238.30] |
| memory_all_processes.pss_mb | 1096.80 [1101.30] |
| memory_all_processes.processes | 18.00 |
| tab_switch.to_gecko_blank_tab_ms.median | 21.40 [38.54] |
| tab_switch.back_to_bench_tab_ms.median | 38.93 [39.07] |
| switch.gecko_to_engine_switch_ms | 596.90 [701.50] |
| switch.engine_to_gecko_switch_ms | 213.80 [214.10] |
| static.timing.navigate_to_title_ms | 16.90 [21.80] |
| static.timing.navigate_to_visible_ms | 59.30 [62.20] |
| image.timing.navigate_to_title_ms | 347.60 [353.70] |
| image.timing.navigate_to_visible_ms | 459.60 [462.50] |
| dom.timing.navigate_to_title_ms | 499.10 [529.00] |
| dom.timing.navigate_to_visible_ms | 537.00 [565.80] |
| raf.window.fps_whole_window | 58.04 [58.46] |
| scroll.window.fps_whole_window | 56.03 [56.58] |
| image_scroll.window.fps_whole_window | 34.16 [36.09] |
| raf.window.presenter.meanDrawMilliseconds | 0.01 |
| scroll.window.presenter.meanDrawMilliseconds | 0.01 [0.02] |
| raf.window.presenter.supersededFrames | 0.00 |
| scroll.window.presenter.supersededFrames | 0.00 |
| raf.window.multi_frame_updates | 0.00 |
| scroll.window.multi_frame_updates | 0.00 [1.00] |
| key.keydown_to_presented_frame_ms.median | 17.49 [18.59] |
| key.keydown_to_presented_frame_ms.p95 | 22.59 [24.63] |
| memory_after_switch_back.rss_mb | 1722.30 [1754.60] |
| memory_after_switch_back.processes | 13.00 |
