# Pixel-path A/B in one job: webkit tabs in Zen

CPU: INTEL(R) XEON(R) PLATINUM 8573C. base = cloud/integration chrome JS + host, cand = this branch (its defaults); other variants = this branch with TEST-ONLY prefs (pipe/memfd: axiosozo.engines.linux.memfd_frames off/on; worker/native: see docs/perf/pixel-path.md); rounds alternate. Medians over repetitions; Δ = variant/base − 1.

## 1×

| Metric | base r1 | cand r1 | Δcand r1 | base r2 | cand r2 | Δcand r2 |
| --- | --- | --- | --- | --- | --- | --- |
| rAF page: presented fps | 58.02 | 57.96 | -0.1% | 58.11 | 57.98 | -0.2% |
| rAF page: frame interval p99 (ms) | 22.603 | 23.163 | +2.5% | 23.629 | 24.901 | +5.4% ⚠️ |
| rAF page: intervals > 25 ms (share) | 0.003 | 0.006 | +100.0% ⚠️ | 0.006 | 0.006 | +0.0% |
| rAF page: CPU, whole browser (%) | 90.25 | 88.9 | -1.5% | 95.35 | 90.0 | -5.6% ✅ |
| rAF page: CPU, Zen parent process (%) | 22.3 | 22.45 | +0.7% | 23.9 | 22.5 | -5.9% ✅ |
| presenter draw per frame (ms) | 0.014 | 0.013 | -7.1% ✅ | 0.015 | 0.014 | -6.7% ✅ |
| wheel scroll: fps while input is delivered (XTest-paced) | 56.685 | 56.68 | -0.0% | 56.07 | 56.365 | +0.5% |
| wheel scroll: frame interval p99 while input (ms) | 34.504 | 33.66 | -2.4% | 34.761 | 30.787 | -11.4% ✅ |
| wheel scroll: fps, first to last frame of the window | 56.685 | 56.68 | -0.0% | 56.07 | 56.365 | +0.5% |
| wheel scroll: CPU (%) | 123.25 | 120.65 | -2.1% | 127.05 | 123.9 | -2.5% |
| wheel scroll: CPU, Zen parent (%) | 48.7 | 47.8 | -1.8% | 50.1 | 49.3 | -1.6% |
| wheel scroll: input span (s, 120 events @16 ms = 1.9) | 1.954 | 1.958 | +0.2% | 1.962 | 1.955 | -0.4% |
| key -> presented frame (ms) | 18.07 | 17.282 | -4.4% | 19.297 | 17.742 | -8.1% ✅ |
| key -> presented frame p95 (ms) | 24.649 | 22.956 | -6.9% ✅ | 23.332 | 22.43 | -3.9% |
| Gecko -> engine switch (ms) | 600.95 | 603.5 | +0.4% | 627.05 | 667.1 | +6.4% ⚠️ |
| static page: navigate -> visible (ms) | 59.95 | 58.8 | -1.9% | 59.1 | 59.0 | -0.2% |
| RSS, whole browser (MB) | 2183.95 | 2167.15 | -0.8% | 2167.4 | 2157.8 | -0.4% |

Status: base-r1 PASS, base-r2 PASS, cand-r1 PASS, cand-r2 PASS

## 2×

| Metric | base r1 | cand r1 | Δcand r1 | base r2 | cand r2 | Δcand r2 |
| --- | --- | --- | --- | --- | --- | --- |
| rAF page: presented fps | 57.895 | 57.95 | +0.1% | 57.935 | 57.925 | -0.0% |
| rAF page: frame interval p99 (ms) | 27.15 | 26.696 | -1.7% | 27.371 | 26.647 | -2.6% |
| rAF page: intervals > 25 ms (share) | 0.014 | 0.028 | +100.0% ⚠️ | 0.017 | 0.017 | +0.0% |
| rAF page: CPU, whole browser (%) | 241.0 | 243.65 | +1.1% | 248.35 | 238.25 | -4.1% |
| rAF page: CPU, Zen parent process (%) | 35.55 | 35.55 | +0.0% | 36.2 | 34.55 | -4.6% |
| presenter draw per frame (ms) | 0.027 | 0.019 | -29.6% ✅ | 0.018 | 0.037 | +105.6% ⚠️ |
| wheel scroll: fps while input is delivered (XTest-paced) | 51.64 | 52.75 | +2.1% | 52.02 | 52.375 | +0.7% |
| wheel scroll: frame interval p99 while input (ms) | 65.744 | 41.451 | -37.0% ✅ | 46.211 | 35.969 | -22.2% ✅ |
| wheel scroll: fps, first to last frame of the window | 51.64 | 52.75 | +2.1% | 52.02 | 52.375 | +0.7% |
| wheel scroll: CPU (%) | 274.95 | 280.65 | +2.1% | 284.8 | 277.6 | -2.5% |
| wheel scroll: CPU, Zen parent (%) | 63.8 | 65.6 | +2.8% | 68.15 | 65.8 | -3.4% |
| wheel scroll: input span (s, 120 events @16 ms = 1.9) | 1.978 | 1.984 | +0.3% | 1.99 | 1.994 | +0.2% |
| key -> presented frame (ms) | 26.898 | 27.697 | +3.0% | 27.823 | 28.512 | +2.5% |
| key -> presented frame p95 (ms) | 34.024 | 33.6 | -1.2% | 33.348 | 35.48 | +6.4% ⚠️ |
| Gecko -> engine switch (ms) | 660.0 | 684.9 | +3.8% | 673.0 | 744.95 | +10.7% ⚠️ |
| static page: navigate -> visible (ms) | 66.7 | 64.3 | -3.6% | 64.3 | 78.35 | +21.9% ⚠️ |
| RSS, whole browser (MB) | 2359.55 | 2368.9 | +0.4% | 2341.9 | 2368.75 | +1.1% |

Status: base-r1 PASS, base-r2 PASS, cand-r1 PASS, cand-r2 PASS

