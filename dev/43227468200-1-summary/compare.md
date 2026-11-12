# Engine bench comparison

- baseline: `ci-results:cloud_engine-bench/39330954155-1-summary (run 39330954155)`
- candidate: `/home/runner/work/browser/browser/.local/evidence-summary/summary.json (run 43227468200)`
- threshold: max(5% of baseline, 2 × stdev, unit floor); medians over repetitions
- 929 shared metrics: **55 regressions**, 79 improvements, 618 within noise, 177 descriptive
- not compared: 12 metrics only in the baseline, 413 only in the candidate
- ⚠ `chromium`: different CPU models (AMD EPYC 9V74 80-Core Processor → AMD EPYC 7763 64-Core Processor); relative threshold raised to 25%
- ⚠ `chromium+damage`: different CPU models (AMD EPYC 9V74 80-Core Processor → AMD EPYC 7763 64-Core Processor); relative threshold raised to 25%
- ⚠ `zen-chromium`: different CPU models (INTEL(R) XEON(R) PLATINUM 8573C → AMD EPYC 9V45 96-Core Processor); relative threshold raised to 25%
- ⚠ `zen-gecko-debian`: different CPU models (INTEL(R) XEON(R) PLATINUM 8573C → AMD EPYC 9V45 96-Core Processor); relative threshold raised to 25%
- ⚠ `zen-webkit`: different CPU models (INTEL(R) XEON(R) PLATINUM 8573C → AMD EPYC 9V45 96-Core Processor); relative threshold raised to 25%

| Metric | Baseline | Candidate | Δ | Δ % | Threshold | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| `chromium+damage/scales.1x.dom.idle_fps` | 0 | 3.5 | +3.5 | — | 1 | **REGRESSION** (different CPU) |
| `chromium+damage/scales.1x.dom_scroll.load.navigate_to_painted_frame_ms` | 248.1 | 316.9 | +68.8 | +27.7 % | 62.025 | **REGRESSION** (different CPU) |
| `chromium+damage/scales.1x.image.idle_fps` | 0 | 4 | +4 | — | 1 | **REGRESSION** (different CPU) |
| `chromium+damage/scales.2x.dom.idle_fps` | 0 | 3.5 | +3.5 | — | 1 | **REGRESSION** (different CPU) |
| `chromium+damage/scales.2x.image.idle_fps` | 0 | 4 | +4 | — | 1 | **REGRESSION** (different CPU) |
| `chromium+damage/scales.2x.image.navigate_to_completed_ms` | 110.7 | 172.2 | +61.5 | +55.6 % | 41.054 | **REGRESSION** (different CPU) |
| `chromium+damage/scales.2x.image.navigate_to_first_frame_ms` | 142.4 | 190.6 | +48.2 | +33.9 % | 35.6 | **REGRESSION** (different CPU) |
| `chromium/navigation.navigate_to_completed_ms` | 11.8 | 16.1 | +4.3 | +36.4 % | 2.95 | **REGRESSION** (different CPU) |
| `chromium/navigation.navigate_to_first_frame_ms` | 14.4 | 19 | +4.6 | +31.9 % | 3.6 | **REGRESSION** (different CPU) |
| `chromium/pipe_1mib.raf.usage.cpu_percent` | 37.7 | 50.8 | +13.1 | +34.8 % | 9.425 | **REGRESSION** (different CPU) |
| `chromium/pipe_1mib.scroll.usage.cpu_percent` | 56.2 | 72.6 | +16.4 | +29.2 % | 14.05 | **REGRESSION** (different CPU) |
| `chromium/scales.1x.dom.idle_fps` | 0 | 3.5 | +3.5 | — | 1 | **REGRESSION** (different CPU) |
| `chromium/scales.1x.dom.navigate_to_completed_ms` | 222.5 | 282.3 | +59.8 | +26.9 % | 55.625 | **REGRESSION** (different CPU) |
| `chromium/scales.1x.dom.navigate_to_first_frame_ms` | 224.9 | 283.9 | +59 | +26.2 % | 56.225 | **REGRESSION** (different CPU) |
| `chromium/scales.1x.dom.navigate_to_painted_frame_ms` | 286.8 | 370.1 | +83.3 | +29.0 % | 71.7 | **REGRESSION** (different CPU) |
| `chromium/scales.1x.image.idle_fps` | 0 | 4 | +4 | — | 1 | **REGRESSION** (different CPU) |
| `chromium/scales.1x.image.navigate_to_completed_ms` | 123.5 | 155.5 | +32 | +25.9 % | 30.875 | **REGRESSION** (different CPU) |
| `chromium/scales.1x.image.navigate_to_first_frame_ms` | 125.6 | 158 | +32.4 | +25.8 % | 31.4 | **REGRESSION** (different CPU) |
| `chromium/scales.1x.image_scroll.load.navigate_to_painted_frame_ms` | 121.5 | 152.7 | +31.2 | +25.7 % | 30.375 | **REGRESSION** (different CPU) |
| `chromium/scales.2x.dom.idle_fps` | 0 | 3.5 | +3.5 | — | 1 | **REGRESSION** (different CPU) |
| `chromium/scales.2x.image.idle_fps` | 0 | 4.5 | +4.5 | — | 1 | **REGRESSION** (different CPU) |
| `chromium/scales.2x.image.navigate_to_completed_ms` | 108.8 | 183.9 | +75.1 | +69.0 % | 55.63 | **REGRESSION** (different CPU) |
| `chromium/scales.2x.image.navigate_to_first_frame_ms` | 128.1 | 203.7 | +75.6 | +59.0 % | 40.63 | **REGRESSION** (different CPU) |
| `presenter-chromium/1800x1300/alloc_copy_ms` | 3.875 | 4.52 | +0.645 | +16.7 % | 0.5 | **REGRESSION** |
| `presenter-chromium/1800x1300/candidate_createImageBitmap_ms` | 10.575 | 16.835 | +6.26 | +59.2 % | 0.529 | **REGRESSION** |
| `presenter-chromium/1800x1300/candidate_u32_fast_path_ms` | 2.655 | 5.945 | +3.29 | +123.9 % | 0.5 | **REGRESSION** |
| `presenter-chromium/1800x1300/candidate_webgl_damage10_ms` | 9.42 | 14.78 | +5.36 | +56.9 % | 0.5 | **REGRESSION** |
| `presenter-chromium/1800x1300/candidate_webgl_full_ms` | 10.595 | 16.63 | +6.035 | +57.0 % | 0.53 | **REGRESSION** |
| `presenter-chromium/900x650/alloc_copy_ms` | 0.93 | 1.675 | +0.745 | +80.1 % | 0.5 | **REGRESSION** |
| `presenter-chromium/900x650/candidate_createImageBitmap_ms` | 2.57 | 3.915 | +1.345 | +52.3 % | 0.5 | **REGRESSION** |
| `presenter-chromium/900x650/candidate_u32_fast_path_ms` | 0.665 | 1.495 | +0.83 | +124.8 % | 0.5 | **REGRESSION** |
| `presenter-firefox/1800x1300/alloc_copy_ms` | 3.58 | 4.6 | +1.02 | +28.5 % | 0.5 | **REGRESSION** |
| `presenter-firefox/1800x1300/candidate_createImageBitmap_ms` | 17.7 | 21.5 | +3.8 | +21.5 % | 0.885 | **REGRESSION** |
| `presenter-firefox/1800x1300/candidate_u32_fast_path_ms` | 3.3 | 3.9 | +0.6 | +18.2 % | 0.5 | **REGRESSION** |
| `presenter-firefox/900x650/candidate_createImageBitmap_ms` | 4.52 | 6.56 | +2.04 | +45.1 % | 0.5 | **REGRESSION** |
| `presenter-firefox/900x650/presenter_draw_full_ms` | 1.72 | 2.48 | +0.76 | +44.2 % | 0.5 | **REGRESSION** |
| `webkit+damage/create.create_to_first_frame_ms` | 447.5 | 485 | +37.5 | +8.4 % | 31.992 | **REGRESSION** |
| `webkit+damage/create.create_to_painted_frame_ms` | 448.2 | 486 | +37.8 | +8.4 % | 32.036 | **REGRESSION** |
| `webkit+damage/scales.2x.dom_scroll.usage.cpu_percent` | 229.8 | 246.4 | +16.6 | +7.2 % | 14.61 | **REGRESSION** |
| `webkit+damage/scales.2x.image_scroll.usage.cpu_percent` | 257.5 | 287.4 | +29.9 | +11.6 % | 27.57 | **REGRESSION** |
| `webkit+damage/scales.2x.raf.usage.client_cpu_percent` | 72.1 | 78.2 | +6.1 | +8.5 % | 5.03 | **REGRESSION** |
| `webkit+damage/scales.2x.scroll.usage.client_cpu_percent` | 61.4 | 70.2 | +8.8 | +14.3 % | 3.07 | **REGRESSION** |
| `webkit/create.create_to_first_frame_ms` | 435.1 | 486.8 | +51.7 | +11.9 % | 28.574 | **REGRESSION** |
| `webkit/create.create_to_painted_frame_ms` | 435.8 | 487.6 | +51.8 | +11.9 % | 28.574 | **REGRESSION** |
| `webkit/scales.2x.dom.idle_fps` | 11 | 13.5 | +2.5 | +22.7 % | 2.04 | **REGRESSION** |
| `webkit/scales.2x.dom.navigate_to_completed_ms` | 473.5 | 505.1 | +31.6 | +6.7 % | 25.582 | **REGRESSION** |
| `webkit/scales.2x.dom_scroll.usage.client_cpu_percent` | 63.6 | 71.7 | +8.1 | +12.7 % | 3.39 | **REGRESSION** |
| `webkit/scales.2x.image_scroll.usage.client_cpu_percent` | 54.6 | 57.9 | +3.3 | +6.0 % | 3 | **REGRESSION** |
| `webkit/scales.2x.resize_to_frame_ms` | 313.2 | 333.1 | +19.9 | +6.3 % | 17.068 | **REGRESSION** |
| `webkit/scales.2x.scroll.usage.client_cpu_percent` | 62.3 | 70.8 | +8.5 | +13.6 % | 4.39 | **REGRESSION** |
| `zen-chromium/image_scroll.window.usage.cpu_percent` | 18.8 | 46.2 | +27.4 | +145.7 % | 10.136 | **REGRESSION** (different CPU) |
| `zen-chromium/switch.engine_to_gecko_switch_ms` | 129.3 | 15020.8 | +14891.5 | +11517.0 % | 11936.3 | **REGRESSION** (different CPU) |
| `zen-chromium/tab_switch.back_to_bench_tab_ms.median` | 29.899 | 42.133 | +12.234 | +40.9 % | 7.475 | **REGRESSION** (different CPU) |
| `zen-gecko/image_scroll.window.usage.cpu_percent` | 8.5 | 29.9 | +21.4 | +251.8 % | 3.2 | **REGRESSION** |
| `zen-webkit/image_scroll.window.usage.cpu_percent` | 45 | 84.3 | +39.3 | +87.3 % | 11.25 | **REGRESSION** (different CPU) |
| `presenter-chromium/1800x1300/presenter_bgraToRGBA_ms` | 5.8 | 5.19 | -0.61 | -10.5 % | 0.5 | better |
| `presenter-chromium/900x650/presenter_bgraToRGBA_ms` | 2.95 | 1.51 | -1.44 | -48.8 % | 0.5 | better |
| `presenter-firefox/1800x1300/presenter_bgraToRGBA_ms` | 7 | 5.18 | -1.82 | -26.0 % | 0.5 | better |
| `presenter-firefox/1800x1300/presenter_draw_full_ms` | 6.86 | 6.02 | -0.84 | -12.2 % | 0.5 | better |
| `webkit+damage/scales.1x.key.latency_ms.median` | 22.805 | 7.28 | -15.525 | -68.1 % | 11.988 | better |
| `webkit+damage/scales.1x.key.pooled_latency_ms` | 22.82 | 7.385 | -15.435 | -67.6 % | 13.934 | better |
| `webkit+damage/scales.2x.image_scroll.fps` | 33.99 | 42.39 | +8.4 | +24.7 % | 6.702 | better |
| `webkit+damage/scales.2x.image_scroll.interval_ms.median` | 26.479 | 22.057 | -4.422 | -16.7 % | 4.212 | better |
| `webkit+damage/scales.2x.image_scroll.pipe_mb_s` | 318.18 | 396.79 | +78.61 | +24.7 % | 62.718 | better |
| `webkit+damage/scales.2x.raf.fps` | 43.74 | 49.75 | +6.01 | +13.7 % | 4.532 | better |
| `webkit+damage/scales.2x.raf.interval_ms.p95` | 34.659 | 25.574 | -9.085 | -26.2 % | 2.316 | better |
| `webkit+damage/scales.2x.raf.interval_ms.stdev` | 5.657 | 2.899 | -2.758 | -48.8 % | 0.69 | better |
| `webkit+damage/scales.2x.raf.interval_p99_ms` | 37.555 | 29.137 | -8.418 | -22.4 % | 2.764 | better |
| `webkit+damage/scales.2x.raf.long_intervals_share` | 0.248 | 0.071 | -0.177 | -71.4 % | 0.15 | better |
| `webkit+damage/scales.2x.raf.pipe_mb_s` | 409.4 | 465.7 | +56.3 | +13.8 % | 42.364 | better |
| `webkit+damage/scales.2x.scroll.fps` | 41.33 | 47.4 | +6.07 | +14.7 % | 2.85 | better |
| `webkit+damage/scales.2x.scroll.interval_ms.p95` | 35.633 | 32.523 | -3.11 | -8.7 % | 3.046 | better |
| `webkit+damage/scales.2x.scroll.interval_ms.stdev` | 6.204 | 4.892 | -1.312 | -21.1 % | 0.5 | better |
| `webkit+damage/scales.2x.scroll.long_intervals_share` | 0.388 | 0.15 | -0.238 | -61.3 % | 0.13 | better |
| `webkit+damage/scales.2x.scroll.pipe_mb_s` | 386.83 | 443.66 | +56.83 | +14.7 % | 26.674 | better |
| `webkit+damage/scales.2x.scroll.read_ms.median` | 18.603 | 16.493 | -2.11 | -11.3 % | 1.532 | better |
| `webkit/scales.2x.dom_scroll.fps` | 42.47 | 50.45 | +7.98 | +18.8 % | 3.254 | better |
| `webkit/scales.2x.dom_scroll.interval_ms.median` | 20.94 | 18.122 | -2.818 | -13.5 % | 1.946 | better |
| `webkit/scales.2x.dom_scroll.interval_ms.p95` | 34.553 | 28.5 | -6.053 | -17.5 % | 2.352 | better |
| `webkit/scales.2x.dom_scroll.interval_ms.stdev` | 5.983 | 3.946 | -2.037 | -34.1 % | 0.706 | better |
| `webkit/scales.2x.dom_scroll.long_intervals_share` | 0.332 | 0.107 | -0.225 | -67.8 % | 0.084 | better |
| `webkit/scales.2x.dom_scroll.pipe_mb_s` | 397.54 | 472.19 | +74.65 | +18.8 % | 30.472 | better |
| `webkit/scales.2x.dom_scroll.read_ms.median` | 18.932 | 16.506 | -2.426 | -12.8 % | 0.947 | better |
| `webkit/scales.2x.image_scroll.fps` | 36.47 | 39.37 | +2.9 | +8.0 % | 1.872 | better |
| `webkit/scales.2x.image_scroll.interval_ms.p95` | 43.611 | 34.532 | -9.079 | -20.8 % | 3.646 | better |
| `webkit/scales.2x.image_scroll.interval_ms.stdev` | 7.858 | 5.174 | -2.684 | -34.2 % | 1.082 | better |
| `webkit/scales.2x.image_scroll.interval_p99_ms` | 49.954 | 40.389 | -9.565 | -19.1 % | 5.102 | better |
| `webkit/scales.2x.image_scroll.pipe_mb_s` | 341.4 | 368.54 | +27.14 | +8.0 % | 17.548 | better |
| `webkit/scales.2x.raf.interval_ms.p95` | 32.228 | 28.116 | -4.112 | -12.8 % | 3.128 | better |
| `webkit/scales.2x.raf.interval_ms.stdev` | 5.107 | 3.675 | -1.432 | -28.0 % | 1.194 | better |
| `webkit/scales.2x.scroll.fps` | 41.99 | 49.06 | +7.07 | +16.8 % | 3.912 | better |
| `webkit/scales.2x.scroll.interval_ms.median` | 22.736 | 19.096 | -3.64 | -16.0 % | 3.408 | better |
| `webkit/scales.2x.scroll.interval_ms.stdev` | 5.69 | 4.443 | -1.247 | -21.9 % | 1.162 | better |
| `webkit/scales.2x.scroll.long_intervals_share` | 0.383 | 0.134 | -0.249 | -65.0 % | 0.14 | better |
| `webkit/scales.2x.scroll.pipe_mb_s` | 393.05 | 459.23 | +66.18 | +16.8 % | 36.628 | better |
| `webkit/scales.2x.scroll.read_ms.median` | 19.128 | 16.577 | -2.551 | -13.3 % | 1.498 | better |
| `webkit/scales.2x.wheel.latency_ms.median` | 40.41 | 37.79 | -2.62 | -6.5 % | 2.516 | better |
| `zen-chromium/dom.timing.navigate_to_visible_ms` | 255.5 | 175.7 | -79.8 | -31.2 % | 63.875 | better (different CPU) |
| `zen-chromium/image.timing.navigate_to_visible_ms` | 164.4 | 97.7 | -66.7 | -40.6 % | 41.1 | better (different CPU) |
| `zen-chromium/image_scroll.window.fps` | 3.32 | 60.48 | +57.16 | +1721.7 % | 1 | better (different CPU) |
| `zen-chromium/image_scroll.window.fps_whole_window` | 2.58 | 35.79 | +33.21 | +1287.2 % | 1 | better (different CPU) |
| `zen-chromium/image_scroll.window.interval_p99_ms` | 11739.5 | 21.028 | -11718.4 | -99.8 % | 2934.87 | better (different CPU) |
| `zen-chromium/key.keydown_to_presented_frame_ms.median` | 28.472 | 10.761 | -17.711 | -62.2 % | 7.118 | better (different CPU) |
| `zen-chromium/key.keydown_to_presented_frame_ms.p95` | 30.805 | 13.242 | -17.563 | -57.0 % | 11.16 | better (different CPU) |
| `zen-chromium/raf.window.interval_p99_ms` | 35.954 | 20.673 | -15.281 | -42.5 % | 8.989 | better (different CPU) |
| `zen-chromium/raf.window.long_intervals_share` | 0.068 | 0 | -0.068 | -100.0 % | 0.026 | better (different CPU) |
| `zen-chromium/raf.window.presenter.meanDrawMilliseconds` | 1.66 | 0.01 | -1.65 | -99.4 % | 0.5 | better (different CPU) |
| `zen-chromium/raf.window.usage.cpu_percent` | 151.1 | 31.8 | -119.3 | -79.0 % | 37.775 | better (different CPU) |
| `zen-chromium/scroll.window.fps` | 5.56 | 59.99 | +54.43 | +979.0 % | 27.422 | better (different CPU) |
| `zen-chromium/scroll.window.fps_whole_window` | 4.52 | 59.55 | +55.03 | +1217.5 % | 27.812 | better (different CPU) |
| `zen-chromium/scroll.window.interval_p99_ms` | 11726.4 | 20.842 | -11705.6 | -99.8 % | 9349.93 | better (different CPU) |
| `zen-chromium/scroll.window.long_intervals_share` | 0.474 | 0 | -0.474 | -100.0 % | 0.118 | better (different CPU) |
| `zen-chromium/scroll.window.presenter.meanDrawMilliseconds` | 2.554 | 0.01 | -2.544 | -99.6 % | 0.638 | better (different CPU) |
| `zen-chromium/tab_switch.to_gecko_blank_tab_ms.median` | 54.077 | 25.367 | -28.71 | -53.1 % | 13.519 | better (different CPU) |
| `zen-gecko-debian/dom.navigate_to_title_wall_ms` | 134.5 | 97.3 | -37.2 | -27.7 % | 33.625 | better (different CPU) |
| `zen-gecko-debian/raf.window.usage.cpu_percent` | 22.2 | 15.5 | -6.7 | -30.2 % | 5.55 | better (different CPU) |
| `zen-webkit/image.navigate_to_title_wall_ms` | 518.1 | 259.9 | -258.2 | -49.8 % | 201.576 | better (different CPU) |
| `zen-webkit/image.timing.navigate_to_title_ms` | 326.8 | 235.4 | -91.4 | -28.0 % | 81.7 | better (different CPU) |
| `zen-webkit/image.timing.navigate_to_visible_ms` | 431.8 | 315 | -116.8 | -27.1 % | 107.95 | better (different CPU) |
| `zen-webkit/image_scroll.window.fps` | 7.84 | 56.57 | +48.73 | +621.6 % | 1.96 | better (different CPU) |
| `zen-webkit/image_scroll.window.fps_whole_window` | 6.56 | 35.87 | +29.31 | +446.8 % | 2.064 | better (different CPU) |
| `zen-webkit/image_scroll.window.interval_p99_ms` | 122.476 | 34.252 | -88.224 | -72.0 % | 30.619 | better (different CPU) |
| `zen-webkit/key.keydown_to_presented_frame_ms.median` | 32.888 | 17.206 | -15.682 | -47.7 % | 8.222 | better (different CPU) |
| `zen-webkit/key.keydown_to_presented_frame_ms.p95` | 39.035 | 22.547 | -16.488 | -42.2 % | 9.759 | better (different CPU) |
| `zen-webkit/raf.window.interval_p99_ms` | 37.001 | 21.562 | -15.439 | -41.7 % | 9.25 | better (different CPU) |
| `zen-webkit/raf.window.presenter.meanDrawMilliseconds` | 1.481 | 0.012 | -1.469 | -99.2 % | 0.5 | better (different CPU) |
| `zen-webkit/raf.window.usage.cpu_percent` | 182.2 | 77.9 | -104.3 | -57.2 % | 45.55 | better (different CPU) |
| `zen-webkit/scroll.window.fps` | 10.47 | 57.1 | +46.63 | +445.4 % | 21.514 | better (different CPU) |
| `zen-webkit/scroll.window.fps_whole_window` | 9.26 | 56.36 | +47.1 | +508.6 % | 22.022 | better (different CPU) |
| `zen-webkit/scroll.window.interval_p99_ms` | 132.733 | 32.387 | -100.346 | -75.6 % | 72.2 | better (different CPU) |
| `zen-webkit/scroll.window.long_intervals_share` | 0.471 | 0.035 | -0.436 | -92.6 % | 0.118 | better (different CPU) |
| `zen-webkit/scroll.window.presenter.meanDrawMilliseconds` | 1.966 | 0.012 | -1.954 | -99.4 % | 0.5 | better (different CPU) |
| `zen-webkit/static.timing.navigate_to_title_ms` | 43.4 | 15.6 | -27.8 | -64.1 % | 17.61 | better (different CPU) |
| `zen-webkit/static.timing.navigate_to_visible_ms` | 76 | 48 | -28 | -36.8 % | 19 | better (different CPU) |
