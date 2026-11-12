# Engine bench comparison

- baseline: `ci-results:cloud_engine-bench/39330954155-1-summary (run 39330954155)`
- candidate: `/home/runner/work/browser/browser/.local/evidence-summary/summary.json (run 43225405993)`
- threshold: max(5% of baseline, 2 × stdev, unit floor); medians over repetitions
- 521 shared metrics: **16 regressions**, 58 improvements, 347 within noise, 100 descriptive
- not compared: 420 metrics only in the baseline, 233 only in the candidate
- ⚠ `chromium+damage`: different CPU models (AMD EPYC 9V74 80-Core Processor → AMD EPYC 7763 64-Core Processor); relative threshold raised to 25%
- ⚠ `webkit`: different CPU models (AMD EPYC 7763 64-Core Processor → AMD EPYC 9V74 80-Core Processor); relative threshold raised to 25%
- ⚠ `webkit+damage`: different CPU models (AMD EPYC 7763 64-Core Processor → AMD EPYC 9V74 80-Core Processor); relative threshold raised to 25%
- ⚠ `zen-gecko-debian`: different CPU models (INTEL(R) XEON(R) PLATINUM 8573C → AMD EPYC 9V74 80-Core Processor); relative threshold raised to 25%
- ⚠ `zen-webkit`: different CPU models (INTEL(R) XEON(R) PLATINUM 8573C → AMD EPYC 9V74 80-Core Processor); relative threshold raised to 25%

| Metric | Baseline | Candidate | Δ | Δ % | Threshold | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| `presenter-chromium/1800x1300/alloc_copy_ms` | 3.875 | 4.48 | +0.605 | +15.6 % | 0.5 | **REGRESSION** |
| `presenter-chromium/1800x1300/candidate_createImageBitmap_ms` | 10.575 | 15.595 | +5.02 | +47.5 % | 0.529 | **REGRESSION** |
| `presenter-chromium/1800x1300/candidate_u32_fast_path_ms` | 2.655 | 6.035 | +3.38 | +127.3 % | 0.5 | **REGRESSION** |
| `presenter-chromium/1800x1300/candidate_webgl_damage10_ms` | 9.42 | 14.565 | +5.145 | +54.6 % | 0.5 | **REGRESSION** |
| `presenter-chromium/1800x1300/candidate_webgl_full_ms` | 10.595 | 16.115 | +5.52 | +52.1 % | 0.53 | **REGRESSION** |
| `presenter-chromium/900x650/candidate_createImageBitmap_ms` | 2.57 | 3.85 | +1.28 | +49.8 % | 0.5 | **REGRESSION** |
| `presenter-chromium/900x650/candidate_u32_fast_path_ms` | 0.665 | 1.48 | +0.815 | +122.6 % | 0.5 | **REGRESSION** |
| `presenter-chromium/900x650/candidate_webgl_damage10_ms` | 2.96 | 5.995 | +3.035 | +102.5 % | 0.5 | **REGRESSION** |
| `presenter-firefox/1800x1300/alloc_copy_ms` | 3.58 | 4.56 | +0.98 | +27.4 % | 0.5 | **REGRESSION** |
| `presenter-firefox/1800x1300/candidate_createImageBitmap_ms` | 17.7 | 24.64 | +6.94 | +39.2 % | 0.885 | **REGRESSION** |
| `presenter-firefox/1800x1300/candidate_u32_fast_path_ms` | 3.3 | 3.86 | +0.56 | +17.0 % | 0.5 | **REGRESSION** |
| `presenter-firefox/900x650/candidate_createImageBitmap_ms` | 4.52 | 5.98 | +1.46 | +32.3 % | 0.5 | **REGRESSION** |
| `zen-gecko-debian/image_scroll.window.usage.cpu_percent` | 5.9 | 31.5 | +25.6 | +433.9 % | 4.686 | **REGRESSION** (different CPU) |
| `zen-gecko/image_scroll.window.usage.cpu_percent` | 8.5 | 28.5 | +20 | +235.3 % | 3.37 | **REGRESSION** |
| `zen-webkit/image_scroll.window.usage.cpu_percent` | 45 | 104.9 | +59.9 | +133.1 % | 13.57 | **REGRESSION** (different CPU) |
| `zen-webkit/tab_switch.back_to_bench_tab_ms.median` | 22.367 | 38.932 | +16.565 | +74.1 % | 13.51 | **REGRESSION** (different CPU) |
| `presenter-chromium/900x650/presenter_bgraToRGBA_ms` | 2.95 | 1.53 | -1.42 | -48.1 % | 0.5 | better |
| `presenter-firefox/1800x1300/presenter_bgraToRGBA_ms` | 7 | 5.34 | -1.66 | -23.7 % | 0.5 | better |
| `presenter-firefox/1800x1300/presenter_draw_full_ms` | 6.86 | 6.2 | -0.66 | -9.6 % | 0.5 | better |
| `webkit+damage/scales.1x.key.latency_ms.median` | 22.805 | 7.315 | -15.49 | -67.9 % | 11.988 | better (different CPU) |
| `webkit+damage/scales.1x.key.latency_ms.p95` | 23.52 | 7.82 | -15.7 | -66.8 % | 11.036 | better (different CPU) |
| `webkit+damage/scales.1x.key.pooled_latency_ms` | 22.82 | 7.355 | -15.465 | -67.8 % | 13.934 | better (different CPU) |
| `webkit+damage/scales.1x.wheel.latency_ms.p95` | 23.54 | 8.73 | -14.81 | -62.9 % | 11.368 | better (different CPU) |
| `webkit+damage/scales.2x.dom.navigate_to_completed_ms` | 482 | 361.3 | -120.7 | -25.0 % | 120.5 | better (different CPU) |
| `webkit+damage/scales.2x.image_scroll.fps` | 33.99 | 42.59 | +8.6 | +25.3 % | 8.498 | better (different CPU) |
| `webkit+damage/scales.2x.image_scroll.long_intervals_share` | 0.538 | 0.335 | -0.203 | -37.7 % | 0.168 | better (different CPU) |
| `webkit+damage/scales.2x.image_scroll.pipe_mb_s` | 318.18 | 398.67 | +80.49 | +25.3 % | 79.545 | better (different CPU) |
| `webkit+damage/scales.2x.raf.fps` | 43.74 | 56.88 | +13.14 | +30.0 % | 10.935 | better (different CPU) |
| `webkit+damage/scales.2x.raf.interval_ms.p95` | 34.659 | 20.87 | -13.789 | -39.8 % | 8.665 | better (different CPU) |
| `webkit+damage/scales.2x.raf.interval_ms.stdev` | 5.657 | 1.857 | -3.8 | -67.2 % | 1.414 | better (different CPU) |
| `webkit+damage/scales.2x.raf.interval_p99_ms` | 37.555 | 22.754 | -14.801 | -39.4 % | 9.389 | better (different CPU) |
| `webkit+damage/scales.2x.raf.long_intervals_share` | 0.248 | 0 | -0.248 | -100.0 % | 0.15 | better (different CPU) |
| `webkit+damage/scales.2x.raf.pipe_mb_s` | 409.4 | 532.39 | +122.99 | +30.0 % | 102.35 | better (different CPU) |
| `webkit+damage/scales.2x.scroll.load.navigate_to_painted_frame_ms` | 149.9 | 111.2 | -38.7 | -25.8 % | 37.475 | better (different CPU) |
| `webkit+damage/scales.2x.scroll.long_intervals_share` | 0.388 | 0.217 | -0.171 | -44.1 % | 0.13 | better (different CPU) |
| `webkit+damage/scales.2x.wheel.latency_ms.median` | 41.805 | 30.005 | -11.8 | -28.2 % | 10.451 | better (different CPU) |
| `webkit+damage/spawn_to_ready_ms` | 46.6 | 33.5 | -13.1 | -28.1 % | 11.65 | better (different CPU) |
| `webkit/scales.1x.key.latency_ms.p95` | 23.18 | 7.87 | -15.31 | -66.0 % | 10.944 | better (different CPU) |
| `webkit/scales.1x.wheel.latency_ms.p95` | 23.14 | 8.39 | -14.75 | -63.7 % | 10.88 | better (different CPU) |
| `webkit/scales.2x.dom_scroll.fps` | 42.47 | 56.76 | +14.29 | +33.7 % | 10.617 | better (different CPU) |
| `webkit/scales.2x.dom_scroll.interval_ms.p95` | 34.553 | 23.318 | -11.235 | -32.5 % | 8.638 | better (different CPU) |
| `webkit/scales.2x.dom_scroll.interval_ms.stdev` | 5.983 | 3.193 | -2.79 | -46.6 % | 1.496 | better (different CPU) |
| `webkit/scales.2x.dom_scroll.long_intervals_share` | 0.332 | 0.032 | -0.3 | -90.4 % | 0.084 | better (different CPU) |
| `webkit/scales.2x.dom_scroll.pipe_mb_s` | 397.54 | 531.26 | +133.72 | +33.6 % | 99.385 | better (different CPU) |
| `webkit/scales.2x.dom_scroll.read_ms.median` | 18.932 | 13.294 | -5.638 | -29.8 % | 4.733 | better (different CPU) |
| `webkit/scales.2x.image_scroll.fps` | 36.47 | 46.39 | +9.92 | +27.2 % | 9.117 | better (different CPU) |
| `webkit/scales.2x.image_scroll.interval_ms.p95` | 43.611 | 31.428 | -12.183 | -27.9 % | 10.903 | better (different CPU) |
| `webkit/scales.2x.image_scroll.interval_ms.stdev` | 7.858 | 5.238 | -2.62 | -33.3 % | 1.964 | better (different CPU) |
| `webkit/scales.2x.image_scroll.long_intervals_share` | 0.494 | 0.208 | -0.286 | -57.9 % | 0.123 | better (different CPU) |
| `webkit/scales.2x.image_scroll.pipe_mb_s` | 341.4 | 434.22 | +92.82 | +27.2 % | 85.35 | better (different CPU) |
| `webkit/scales.2x.raf.interval_ms.p95` | 32.228 | 21.456 | -10.772 | -33.4 % | 8.057 | better (different CPU) |
| `webkit/scales.2x.raf.interval_ms.stdev` | 5.107 | 2.168 | -2.939 | -57.6 % | 1.277 | better (different CPU) |
| `webkit/scales.2x.raf.interval_p99_ms` | 36.294 | 23.526 | -12.768 | -35.2 % | 9.073 | better (different CPU) |
| `webkit/scales.2x.raf.long_intervals_share` | 0.209 | 0 | -0.209 | -100.0 % | 0.16 | better (different CPU) |
| `webkit/scales.2x.scroll.fps` | 41.99 | 56.77 | +14.78 | +35.2 % | 10.498 | better (different CPU) |
| `webkit/scales.2x.scroll.interval_ms.p95` | 33.946 | 22.991 | -10.955 | -32.3 % | 8.486 | better (different CPU) |
| `webkit/scales.2x.scroll.interval_ms.stdev` | 5.69 | 3.166 | -2.524 | -44.4 % | 1.423 | better (different CPU) |
| `webkit/scales.2x.scroll.long_intervals_share` | 0.383 | 0.028 | -0.355 | -92.7 % | 0.14 | better (different CPU) |
| `webkit/scales.2x.scroll.pipe_mb_s` | 393.05 | 531.42 | +138.37 | +35.2 % | 98.263 | better (different CPU) |
| `webkit/scales.2x.scroll.read_ms.median` | 19.128 | 13.697 | -5.431 | -28.4 % | 4.782 | better (different CPU) |
| `zen-webkit/image_scroll.window.fps` | 7.84 | 56.43 | +48.59 | +619.8 % | 1.96 | better (different CPU) |
| `zen-webkit/image_scroll.window.fps_whole_window` | 6.56 | 34.16 | +27.6 | +420.7 % | 2.162 | better (different CPU) |
| `zen-webkit/image_scroll.window.interval_p99_ms` | 122.476 | 37.408 | -85.068 | -69.5 % | 30.619 | better (different CPU) |
| `zen-webkit/key.keydown_to_presented_frame_ms.median` | 32.888 | 17.488 | -15.4 | -46.8 % | 8.222 | better (different CPU) |
| `zen-webkit/key.keydown_to_presented_frame_ms.p95` | 39.035 | 22.59 | -16.445 | -42.1 % | 9.759 | better (different CPU) |
| `zen-webkit/raf.window.interval_p99_ms` | 37.001 | 23.271 | -13.73 | -37.1 % | 9.25 | better (different CPU) |
| `zen-webkit/raf.window.presenter.meanDrawMilliseconds` | 1.481 | 0.013 | -1.468 | -99.1 % | 0.5 | better (different CPU) |
| `zen-webkit/raf.window.usage.cpu_percent` | 182.2 | 88.4 | -93.8 | -51.5 % | 45.55 | better (different CPU) |
| `zen-webkit/scroll.window.fps` | 10.47 | 57.15 | +46.68 | +445.8 % | 21.514 | better (different CPU) |
| `zen-webkit/scroll.window.fps_whole_window` | 9.26 | 56.03 | +46.77 | +505.1 % | 22.022 | better (different CPU) |
| `zen-webkit/scroll.window.interval_p99_ms` | 132.733 | 33.028 | -99.705 | -75.1 % | 72.2 | better (different CPU) |
| `zen-webkit/scroll.window.long_intervals_share` | 0.471 | 0.026 | -0.445 | -94.5 % | 0.118 | better (different CPU) |
| `zen-webkit/scroll.window.presenter.meanDrawMilliseconds` | 1.966 | 0.014 | -1.952 | -99.3 % | 0.5 | better (different CPU) |
| `zen-webkit/static.timing.navigate_to_title_ms` | 43.4 | 16.9 | -26.5 | -61.1 % | 17.61 | better (different CPU) |
