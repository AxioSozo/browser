# Engine bench comparison

- baseline: `ci-results:cloud_engine-bench/39330954155-1-summary (run 39330954155)`
- candidate: `/home/runner/work/browser/browser/.local/evidence-summary/summary.json (run 44065714644)`
- threshold: max(5% of baseline, 2 × stdev, unit floor); medians over repetitions
- 929 shared metrics: **24 regressions**, 111 improvements, 617 within noise, 177 descriptive
- not compared: 12 metrics only in the baseline, 413 only in the candidate
- ⚠ `webkit`: different CPU models (AMD EPYC 7763 64-Core Processor → INTEL(R) XEON(R) PLATINUM 8573C); relative threshold raised to 25%
- ⚠ `webkit+damage`: different CPU models (AMD EPYC 7763 64-Core Processor → INTEL(R) XEON(R) PLATINUM 8573C); relative threshold raised to 25%
- ⚠ `zen-chromium`: different CPU models (INTEL(R) XEON(R) PLATINUM 8573C → Intel(R) Xeon(R) 6975P-C); relative threshold raised to 25%
- ⚠ `zen-gecko`: different CPU models (AMD EPYC 7763 64-Core Processor → Intel(R) Xeon(R) 6975P-C); relative threshold raised to 25%
- ⚠ `zen-gecko-debian`: different CPU models (INTEL(R) XEON(R) PLATINUM 8573C → AMD EPYC 9V74 80-Core Processor); relative threshold raised to 25%
- ⚠ `zen-webkit`: different CPU models (INTEL(R) XEON(R) PLATINUM 8573C → AMD EPYC 9V74 80-Core Processor); relative threshold raised to 25%

| Metric | Baseline | Candidate | Δ | Δ % | Threshold | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| `chromium+damage/scales.1x.dom.idle_fps` | 0 | 3.5 | +3.5 | — | 1 | **REGRESSION** |
| `chromium+damage/scales.1x.image.idle_fps` | 0 | 4 | +4 | — | 1 | **REGRESSION** |
| `chromium+damage/scales.2x.dom.idle_fps` | 0 | 3.5 | +3.5 | — | 1 | **REGRESSION** |
| `chromium+damage/scales.2x.dom_scroll.usage.rss_mb` | 1363.1 | 1471.6 | +108.5 | +8.0 % | 68.155 | **REGRESSION** |
| `chromium+damage/scales.2x.image.idle_fps` | 0 | 4 | +4 | — | 1 | **REGRESSION** |
| `chromium/scales.1x.dom.idle_fps` | 0 | 3.5 | +3.5 | — | 1 | **REGRESSION** |
| `chromium/scales.1x.image.idle_fps` | 0 | 4 | +4 | — | 1 | **REGRESSION** |
| `chromium/scales.2x.dom.idle_fps` | 0 | 3.5 | +3.5 | — | 1 | **REGRESSION** |
| `chromium/scales.2x.dom_scroll.usage.rss_mb` | 1368.8 | 1461.3 | +92.5 | +6.8 % | 68.44 | **REGRESSION** |
| `chromium/scales.2x.image.idle_fps` | 0 | 4 | +4 | — | 1 | **REGRESSION** |
| `chromium/scales.2x.image_scroll.usage.rss_mb` | 1315.8 | 1390.5 | +74.7 | +5.7 % | 65.79 | **REGRESSION** |
| `chromium/scales.2x.scroll.interval_ms.median` | 16.56 | 17.406 | +0.846 | +5.1 % | 0.828 | **REGRESSION** |
| `presenter-chromium/1800x1300/candidate_createImageBitmap_ms` | 10.575 | 12.385 | +1.81 | +17.1 % | 0.529 | **REGRESSION** |
| `presenter-chromium/1800x1300/candidate_u32_fast_path_ms` | 2.655 | 4.76 | +2.105 | +79.3 % | 0.5 | **REGRESSION** |
| `presenter-chromium/1800x1300/candidate_webgl_damage10_ms` | 9.42 | 10.825 | +1.405 | +14.9 % | 0.5 | **REGRESSION** |
| `presenter-chromium/1800x1300/candidate_webgl_full_ms` | 10.595 | 11.915 | +1.32 | +12.5 % | 0.53 | **REGRESSION** |
| `presenter-firefox/1800x1300/candidate_u32_fast_path_ms` | 3.3 | 4.72 | +1.42 | +43.0 % | 0.5 | **REGRESSION** |
| `presenter-firefox/900x650/candidate_u32_fast_path_ms` | 0.84 | 1.42 | +0.58 | +69.0 % | 0.5 | **REGRESSION** |
| `webkit+damage/scales.1x.image_scroll.load.navigate_to_painted_frame_ms` | 187.7 | 245.3 | +57.6 | +30.7 % | 46.925 | **REGRESSION** (different CPU) |
| `webkit+damage/scales.2x.image.navigate_to_completed_ms` | 145.3 | 197 | +51.7 | +35.6 % | 36.325 | **REGRESSION** (different CPU) |
| `webkit/scales.2x.image.navigate_to_completed_ms` | 153.8 | 199.9 | +46.1 | +30.0 % | 38.45 | **REGRESSION** (different CPU) |
| `zen-chromium/image_scroll.window.usage.cpu_percent` | 18.8 | 53.2 | +34.4 | +183.0 % | 8.424 | **REGRESSION** (different CPU) |
| `zen-webkit/image_scroll.window.usage.cpu_percent` | 45 | 93.9 | +48.9 | +108.7 % | 11.25 | **REGRESSION** (different CPU) |
| `zen-webkit/static.navigate_to_title_wall_ms` | 5.8 | 14.5 | +8.7 | +150.0 % | 8.14 | **REGRESSION** (different CPU) |
| `chromium+damage/scales.1x.dom.navigate_to_completed_ms` | 259.2 | 229.4 | -29.8 | -11.5 % | 13.012 | better |
| `chromium+damage/scales.1x.dom.navigate_to_first_frame_ms` | 264.6 | 230.7 | -33.9 | -12.8 % | 13.266 | better |
| `chromium+damage/scales.1x.image_scroll.usage.cpu_percent` | 39 | 32.3 | -6.7 | -17.2 % | 3.398 | better |
| `chromium+damage/scales.1x.raf.usage.cpu_percent` | 21.1 | 14.5 | -6.6 | -31.3 % | 3.23 | better |
| `chromium+damage/scales.1x.scroll.load.navigate_to_painted_frame_ms` | 48.7 | 43.7 | -5 | -10.3 % | 2.602 | better |
| `chromium+damage/scales.1x.scroll.usage.cpu_percent` | 24.5 | 18.9 | -5.6 | -22.9 % | 3 | better |
| `chromium+damage/scales.2x.dom.navigate_to_completed_ms` | 303.7 | 234.4 | -69.3 | -22.8 % | 51.67 | better |
| `chromium+damage/scales.2x.dom.navigate_to_first_frame_ms` | 325.1 | 251.4 | -73.7 | -22.7 % | 51.062 | better |
| `chromium+damage/scales.2x.dom_scroll.read_ms.median` | 16.113 | 12.186 | -3.927 | -24.4 % | 0.806 | better |
| `chromium+damage/scales.2x.dom_scroll.usage.client_cpu_percent` | 76.7 | 67.2 | -9.5 | -12.4 % | 3.835 | better |
| `chromium+damage/scales.2x.dom_scroll.usage.cpu_percent` | 73.7 | 55.5 | -18.2 | -24.7 % | 8.464 | better |
| `chromium+damage/scales.2x.image_scroll.read_ms.median` | 16.514 | 13.337 | -3.177 | -19.2 % | 0.826 | better |
| `chromium+damage/scales.2x.image_scroll.usage.client_cpu_percent` | 77.1 | 72.7 | -4.4 | -5.7 % | 3.855 | better |
| `chromium+damage/scales.2x.image_scroll.usage.cpu_percent` | 117.9 | 107.2 | -10.7 | -9.1 % | 8.768 | better |
| `chromium+damage/scales.2x.key.latency_ms.median` | 16.42 | 12.985 | -3.435 | -20.9 % | 1.004 | better |
| `chromium+damage/scales.2x.key.latency_ms.p95` | 19.91 | 15.78 | -4.13 | -20.7 % | 1.784 | better |
| `chromium+damage/scales.2x.raf.load.navigate_to_painted_frame_ms` | 206.7 | 139.2 | -67.5 | -32.7 % | 66.774 | better |
| `chromium+damage/scales.2x.raf.read_ms.median` | 15.598 | 11.827 | -3.771 | -24.2 % | 0.78 | better |
| `chromium+damage/scales.2x.raf.usage.client_cpu_percent` | 80.3 | 70.6 | -9.7 | -12.1 % | 4.015 | better |
| `chromium+damage/scales.2x.raf.usage.cpu_percent` | 44.2 | 30.8 | -13.4 | -30.3 % | 3 | better |
| `chromium+damage/scales.2x.scroll.interval_ms.p95` | 20.548 | 18.658 | -1.89 | -9.2 % | 1.174 | better |
| `chromium+damage/scales.2x.scroll.interval_ms.stdev` | 3.228 | 2.134 | -1.094 | -33.9 % | 0.87 | better |
| `chromium+damage/scales.2x.scroll.load.navigate_to_painted_frame_ms` | 85.5 | 71.9 | -13.6 | -15.9 % | 11.186 | better |
| `chromium+damage/scales.2x.scroll.read_ms.median` | 16.012 | 12.261 | -3.751 | -23.4 % | 0.801 | better |
| `chromium+damage/scales.2x.scroll.usage.client_cpu_percent` | 74.7 | 67.1 | -7.6 | -10.2 % | 3.735 | better |
| `chromium+damage/scales.2x.scroll.usage.cpu_percent` | 77.4 | 63 | -14.4 | -18.6 % | 5.058 | better |
| `chromium+damage/scales.2x.wheel.latency_ms.median` | 16.415 | 11.41 | -5.005 | -30.5 % | 4.478 | better |
| `chromium+damage/scales.2x.wheel.latency_ms.p95` | 23.94 | 18.4 | -5.54 | -23.1 % | 1.706 | better |
| `chromium/scales.1x.dom_scroll.usage.cpu_percent` | 23.5 | 19.1 | -4.4 | -18.7 % | 3 | better |
| `chromium/scales.1x.image.navigate_to_completed_ms` | 123.5 | 97.1 | -26.4 | -21.4 % | 21.634 | better |
| `chromium/scales.1x.image.navigate_to_first_frame_ms` | 125.6 | 99.3 | -26.3 | -20.9 % | 22.422 | better |
| `chromium/scales.1x.image.navigate_to_painted_frame_ms` | 129.5 | 120.7 | -8.8 | -6.8 % | 7.812 | better |
| `chromium/scales.1x.image_scroll.usage.cpu_percent` | 38.8 | 32.1 | -6.7 | -17.3 % | 3 | better |
| `chromium/scales.1x.raf.usage.cpu_percent` | 19.9 | 14.3 | -5.6 | -28.1 % | 3 | better |
| `chromium/scales.1x.scroll.load.navigate_to_painted_frame_ms` | 49.7 | 44.5 | -5.2 | -10.5 % | 2.858 | better |
| `chromium/scales.1x.scroll.usage.cpu_percent` | 22.9 | 18.7 | -4.2 | -18.3 % | 3 | better |
| `chromium/scales.1x.wheel.latency_ms.median` | 11.285 | 7.03 | -4.255 | -37.7 % | 2.408 | better |
| `chromium/scales.2x.dom_scroll.read_ms.median` | 16.012 | 12.047 | -3.965 | -24.8 % | 0.801 | better |
| `chromium/scales.2x.dom_scroll.usage.client_cpu_percent` | 76.3 | 67.2 | -9.1 | -11.9 % | 3.815 | better |
| `chromium/scales.2x.dom_scroll.usage.cpu_percent` | 68.3 | 54.6 | -13.7 | -20.1 % | 7.694 | better |
| `chromium/scales.2x.image_scroll.read_ms.median` | 16.428 | 12.911 | -3.517 | -21.4 % | 0.821 | better |
| `chromium/scales.2x.image_scroll.usage.client_cpu_percent` | 76.7 | 70.9 | -5.8 | -7.6 % | 3.835 | better |
| `chromium/scales.2x.image_scroll.usage.cpu_percent` | 114.4 | 102 | -12.4 | -10.8 % | 10.798 | better |
| `chromium/scales.2x.key.latency_ms.median` | 16.995 | 12.775 | -4.22 | -24.8 % | 1.134 | better |
| `chromium/scales.2x.key.latency_ms.p95` | 20.01 | 15.71 | -4.3 | -21.5 % | 1.614 | better |
| `chromium/scales.2x.raf.read_ms.median` | 15.552 | 11.732 | -3.82 | -24.6 % | 0.778 | better |
| `chromium/scales.2x.raf.usage.client_cpu_percent` | 81 | 70.7 | -10.3 | -12.7 % | 4.05 | better |
| `chromium/scales.2x.raf.usage.cpu_percent` | 43.9 | 30.2 | -13.7 | -31.2 % | 3.66 | better |
| `chromium/scales.2x.scroll.read_ms.median` | 15.924 | 11.933 | -3.991 | -25.1 % | 0.796 | better |
| `chromium/scales.2x.scroll.usage.client_cpu_percent` | 74.5 | 66.2 | -8.3 | -11.1 % | 3.725 | better |
| `chromium/scales.2x.scroll.usage.cpu_percent` | 77.1 | 61.3 | -15.8 | -20.5 % | 5.762 | better |
| `chromium/scales.2x.wheel.latency_ms.median` | 16.2 | 12.445 | -3.755 | -23.2 % | 2.282 | better |
| `chromium/scales.2x.wheel.latency_ms.p95` | 22.96 | 17.58 | -5.38 | -23.4 % | 1.914 | better |
| `presenter-chromium/1800x1300/presenter_bgraToRGBA_ms` | 5.8 | 4.75 | -1.05 | -18.1 % | 0.5 | better |
| `presenter-chromium/1800x1300/presenter_draw_full_ms` | 6.25 | 5.52 | -0.73 | -11.7 % | 0.5 | better |
| `presenter-chromium/900x650/candidate_webgl_damage10_ms` | 2.96 | 2.225 | -0.735 | -24.8 % | 0.5 | better |
| `presenter-chromium/900x650/candidate_webgl_full_ms` | 3.675 | 2.61 | -1.065 | -29.0 % | 0.5 | better |
| `presenter-chromium/900x650/presenter_bgraToRGBA_ms` | 2.95 | 1.005 | -1.945 | -65.9 % | 0.5 | better |
| `presenter-firefox/1800x1300/candidate_createImageBitmap_ms` | 17.7 | 13.44 | -4.26 | -24.1 % | 0.885 | better |
| `presenter-firefox/1800x1300/presenter_bgraToRGBA_ms` | 7 | 5.24 | -1.76 | -25.1 % | 0.5 | better |
| `presenter-firefox/1800x1300/presenter_draw_full_ms` | 6.86 | 6.2 | -0.66 | -9.6 % | 0.5 | better |
| `presenter-firefox/900x650/candidate_createImageBitmap_ms` | 4.52 | 3.32 | -1.2 | -26.6 % | 0.5 | better |
| `webkit+damage/scales.2x.image_scroll.usage.client_cpu_percent` | 50.3 | 19.2 | -31.1 | -61.8 % | 28.844 | better (different CPU) |
| `webkit+damage/scales.2x.raf.interval_ms.p95` | 34.659 | 24.033 | -10.626 | -30.7 % | 8.665 | better (different CPU) |
| `webkit+damage/scales.2x.raf.interval_ms.stdev` | 5.657 | 2.269 | -3.388 | -59.9 % | 1.414 | better (different CPU) |
| `webkit+damage/scales.2x.raf.interval_p99_ms` | 37.555 | 27.789 | -9.766 | -26.0 % | 9.389 | better (different CPU) |
| `webkit+damage/scales.2x.raf.long_intervals_share` | 0.248 | 0.036 | -0.212 | -85.5 % | 0.15 | better (different CPU) |
| `webkit+damage/scales.2x.scroll.interval_ms.stdev` | 6.204 | 4.646 | -1.558 | -25.1 % | 1.551 | better (different CPU) |
| `webkit+damage/scales.2x.scroll.long_intervals_share` | 0.388 | 0.107 | -0.281 | -72.4 % | 0.13 | better (different CPU) |
| `webkit/scales.2x.dom_scroll.interval_ms.stdev` | 5.983 | 4.1 | -1.883 | -31.5 % | 1.496 | better (different CPU) |
| `webkit/scales.2x.dom_scroll.long_intervals_share` | 0.332 | 0.095 | -0.237 | -71.4 % | 0.084 | better (different CPU) |
| `webkit/scales.2x.image_scroll.interval_ms.stdev` | 7.858 | 5.287 | -2.571 | -32.7 % | 1.964 | better (different CPU) |
| `webkit/scales.2x.raf.interval_ms.stdev` | 5.107 | 3.728 | -1.379 | -27.0 % | 1.277 | better (different CPU) |
| `webkit/scales.2x.scroll.interval_ms.stdev` | 5.69 | 3.784 | -1.906 | -33.5 % | 1.423 | better (different CPU) |
| `webkit/scales.2x.scroll.long_intervals_share` | 0.383 | 0.071 | -0.312 | -81.5 % | 0.14 | better (different CPU) |
| `zen-chromium/dom.timing.navigate_to_visible_ms` | 255.5 | 172.7 | -82.8 | -32.4 % | 63.875 | better (different CPU) |
| `zen-chromium/image.timing.navigate_to_visible_ms` | 164.4 | 100.4 | -64 | -38.9 % | 41.1 | better (different CPU) |
| `zen-chromium/image_scroll.window.fps` | 3.32 | 60.35 | +57.03 | +1717.8 % | 1 | better (different CPU) |
| `zen-chromium/image_scroll.window.fps_whole_window` | 2.58 | 36.35 | +33.77 | +1308.9 % | 1 | better (different CPU) |
| `zen-chromium/image_scroll.window.interval_p99_ms` | 11739.5 | 23.439 | -11716 | -99.8 % | 2934.87 | better (different CPU) |
| `zen-chromium/key.keydown_to_presented_frame_ms.median` | 28.472 | 9.918 | -18.554 | -65.2 % | 7.118 | better (different CPU) |
| `zen-chromium/key.keydown_to_presented_frame_ms.p95` | 30.805 | 11.372 | -19.433 | -63.1 % | 11.16 | better (different CPU) |
| `zen-chromium/raf.window.interval_p99_ms` | 35.954 | 20.882 | -15.072 | -41.9 % | 8.989 | better (different CPU) |
| `zen-chromium/raf.window.long_intervals_share` | 0.068 | 0 | -0.068 | -100.0 % | 0.026 | better (different CPU) |
| `zen-chromium/raf.window.presenter.meanDrawMilliseconds` | 1.66 | 0.008 | -1.652 | -99.5 % | 0.5 | better (different CPU) |
| `zen-chromium/raf.window.usage.cpu_percent` | 151.1 | 30.4 | -120.7 | -79.9 % | 37.775 | better (different CPU) |
| `zen-chromium/scroll.window.fps` | 5.56 | 60.15 | +54.59 | +981.8 % | 27.422 | better (different CPU) |
| `zen-chromium/scroll.window.fps_whole_window` | 4.52 | 59.49 | +54.97 | +1216.2 % | 27.812 | better (different CPU) |
| `zen-chromium/scroll.window.interval_p99_ms` | 11726.4 | 20.94 | -11705.5 | -99.8 % | 9349.93 | better (different CPU) |
| `zen-chromium/scroll.window.long_intervals_share` | 0.474 | 0.009 | -0.465 | -98.1 % | 0.118 | better (different CPU) |
| `zen-chromium/scroll.window.presenter.meanDrawMilliseconds` | 2.554 | 0.008 | -2.546 | -99.7 % | 0.638 | better (different CPU) |
| `zen-chromium/tab_switch.to_gecko_blank_tab_ms.median` | 54.077 | 20.533 | -33.544 | -62.0 % | 13.519 | better (different CPU) |
| `zen-gecko-debian/raf.window.usage.cpu_percent` | 22.2 | 16.2 | -6 | -27.0 % | 5.55 | better (different CPU) |
| `zen-gecko/dom.navigate_to_title_wall_ms` | 191.8 | 105.4 | -86.4 | -45.1 % | 47.95 | better (different CPU) |
| `zen-gecko/raf.window.usage.cpu_percent` | 30.3 | 15.9 | -14.4 | -47.5 % | 7.778 | better (different CPU) |
| `zen-gecko/scroll.window.usage.cpu_percent` | 52.1 | 21.8 | -30.3 | -58.2 % | 20.242 | better (different CPU) |
| `zen-webkit/image_scroll.window.fps` | 7.84 | 56.92 | +49.08 | +626.0 % | 1.96 | better (different CPU) |
| `zen-webkit/image_scroll.window.fps_whole_window` | 6.56 | 37.34 | +30.78 | +469.2 % | 3.474 | better (different CPU) |
| `zen-webkit/image_scroll.window.interval_p99_ms` | 122.476 | 33.814 | -88.662 | -72.4 % | 30.619 | better (different CPU) |
| `zen-webkit/key.keydown_to_presented_frame_ms.median` | 32.888 | 17.323 | -15.565 | -47.3 % | 8.222 | better (different CPU) |
| `zen-webkit/key.keydown_to_presented_frame_ms.p95` | 39.035 | 22.139 | -16.896 | -43.3 % | 9.759 | better (different CPU) |
| `zen-webkit/raf.window.interval_p99_ms` | 37.001 | 22.399 | -14.602 | -39.5 % | 9.25 | better (different CPU) |
| `zen-webkit/raf.window.presenter.meanDrawMilliseconds` | 1.481 | 0.011 | -1.47 | -99.3 % | 0.5 | better (different CPU) |
| `zen-webkit/raf.window.usage.cpu_percent` | 182.2 | 72.8 | -109.4 | -60.0 % | 45.55 | better (different CPU) |
| `zen-webkit/scroll.window.fps` | 10.47 | 57.2 | +46.73 | +446.3 % | 21.514 | better (different CPU) |
| `zen-webkit/scroll.window.fps_whole_window` | 9.26 | 56.18 | +46.92 | +506.7 % | 22.022 | better (different CPU) |
| `zen-webkit/scroll.window.interval_p99_ms` | 132.733 | 32.668 | -100.065 | -75.4 % | 72.2 | better (different CPU) |
| `zen-webkit/scroll.window.long_intervals_share` | 0.471 | 0.027 | -0.444 | -94.3 % | 0.118 | better (different CPU) |
| `zen-webkit/scroll.window.presenter.meanDrawMilliseconds` | 1.966 | 0.012 | -1.954 | -99.4 % | 0.5 | better (different CPU) |
| `zen-webkit/static.timing.navigate_to_title_ms` | 43.4 | 13.1 | -30.3 | -69.8 % | 17.61 | better (different CPU) |
| `zen-webkit/static.timing.navigate_to_visible_ms` | 76 | 49.3 | -26.7 | -35.1 % | 19 | better (different CPU) |
