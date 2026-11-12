# Pixel-path A/B in one job: chromium tabs in Zen

CPU: AMD EPYC 9V74 80-Core Processor. base = cloud/integration chrome JS + host, cand = this branch (its defaults); other variants = this branch with TEST-ONLY prefs (pipe/memfd: axiosozo.engines.linux.memfd_frames off/on; worker/native: see docs/perf/pixel-path.md); rounds alternate. Medians over repetitions; Δ = variant/base − 1.

## 1×

| Metric | base r1 | cand r1 | Δcand r1 | base r2 | cand r2 | Δcand r2 |
| --- | --- | --- | --- | --- | --- | --- |
| rAF page: presented fps | 59.98 | 59.975 | -0.0% | 59.94 | 59.98 | +0.1% |
| rAF page: frame interval p99 (ms) | 21.553 | 21.122 | -2.0% | 21.437 | 20.676 | -3.5% |
| rAF page: intervals > 25 ms (share) | 0.0 | 0.003 | — | 0.003 | 0.0 | -100.0% ✅ |
| rAF page: CPU, whole browser (%) | 32.9 | 35.85 | +9.0% ⚠️ | 33.55 | 34.35 | +2.4% |
| rAF page: CPU, Zen parent process (%) | 16.55 | 17.65 | +6.6% ⚠️ | 16.35 | 16.5 | +0.9% |
| presenter draw per frame (ms) | 0.014 | 0.017 | +21.4% ⚠️ | 0.011 | 0.017 | +54.5% ⚠️ |
| presenter uploaded pixel share | 0.276 | 0.269 | -2.5% | 0.276 | 0.267 | -3.3% |
| wheel scroll: fps while input is delivered (XTest-paced) | 59.96 | 59.77 | -0.3% | 59.72 | 60.03 | +0.5% |
| wheel scroll: frame interval p99 while input (ms) | 21.232 | 24.547 | +15.6% ⚠️ | 26.83 | 22.985 | -14.3% ✅ |
| wheel scroll: fps, first to last frame of the window | 59.96 | 59.77 | -0.3% | 59.72 | 60.03 | +0.5% |
| wheel scroll: CPU (%) | 61.95 | 68.1 | +9.9% ⚠️ | 66.35 | 63.85 | -3.8% |
| wheel scroll: CPU, Zen parent (%) | 29.1 | 33.8 | +16.2% ⚠️ | 33.55 | 29.8 | -11.2% ✅ |
| wheel scroll: input span (s, 120 events @16 ms = 1.9) | 1.944 | 1.944 | +0.0% | 1.944 | 1.947 | +0.2% |
| key -> presented frame (ms) | 11.54 | 11.328 | -1.8% | 11.13 | 11.198 | +0.6% |
| key -> presented frame p95 (ms) | 13.622 | 14.404 | +5.7% ⚠️ | 14.403 | 13.556 | -5.9% ✅ |
| Gecko -> engine switch (ms) | 889.1 | 438.65 | -50.7% ✅ | 449.7 | 442.4 | -1.6% |
| static page: navigate -> visible (ms) | 32.55 | 36.75 | +12.9% ⚠️ | 30.3 | 44.35 | +46.4% ⚠️ |
| RSS, whole browser (MB) | 2688.0 | 2704.75 | +0.6% | 2681.85 | 2689.2 | +0.3% |

Status: base-r1 PASS, base-r2 PASS, cand-r1 PASS, cand-r2 PASS

## 2×

| Metric | base r1 | cand r1 | Δcand r1 | base r2 | cand r2 | Δcand r2 |
| --- | --- | --- | --- | --- | --- | --- |
| rAF page: presented fps | 59.98 | 59.985 | +0.0% | 60.0 | 59.985 | -0.0% |
| rAF page: frame interval p99 (ms) | 22.076 | 22.809 | +3.3% | 22.777 | 22.211 | -2.5% |
| rAF page: intervals > 25 ms (share) | 0.005 | 0.005 | +0.0% | 0.003 | 0.003 | +0.0% |
| rAF page: CPU, whole browser (%) | 59.7 | 57.7 | -3.4% | 54.35 | 60.8 | +11.9% ⚠️ |
| rAF page: CPU, Zen parent process (%) | 26.2 | 25.5 | -2.7% | 23.05 | 27.6 | +19.7% ⚠️ |
| presenter draw per frame (ms) | 0.013 | 0.014 | +7.7% ⚠️ | 0.011 | 0.013 | +18.2% ⚠️ |
| presenter uploaded pixel share | 0.285 | 0.277 | -2.8% | 0.287 | 0.277 | -3.5% |
| wheel scroll: fps while input is delivered (XTest-paced) | 58.96 | 59.595 | +1.1% | 59.925 | 58.99 | -1.6% |
| wheel scroll: frame interval p99 while input (ms) | 33.676 | 24.286 | -27.9% ✅ | 22.404 | 29.824 | +33.1% ⚠️ |
| wheel scroll: fps, first to last frame of the window | 58.96 | 59.595 | +1.1% | 59.925 | 58.99 | -1.6% |
| wheel scroll: CPU (%) | 125.05 | 121.45 | -2.9% | 110.6 | 127.5 | +15.3% ⚠️ |
| wheel scroll: CPU, Zen parent (%) | 48.35 | 47.4 | -2.0% | 38.5 | 51.0 | +32.5% ⚠️ |
| wheel scroll: input span (s, 120 events @16 ms = 1.9) | 1.949 | 1.946 | -0.2% | 1.95 | 1.948 | -0.1% |
| key -> presented frame (ms) | 12.061 | 11.694 | -3.0% | 11.422 | 11.758 | +2.9% |
| key -> presented frame p95 (ms) | 13.784 | 13.761 | -0.2% | 13.622 | 14.863 | +9.1% ⚠️ |
| Gecko -> engine switch (ms) | 456.3 | 459.45 | +0.7% | 504.75 | 457.45 | -9.4% ✅ |
| static page: navigate -> visible (ms) | 73.95 | 38.25 | -48.3% ✅ | 34.9 | 44.4 | +27.2% ⚠️ |
| RSS, whole browser (MB) | 2861.95 | 2878.25 | +0.6% | 2873.9 | 2864.85 | -0.3% |

Status: base-r1 PASS, base-r2 PASS, cand-r1 PASS, cand-r2 PASS

