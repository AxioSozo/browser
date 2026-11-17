# Pixel-path A/B in one job: webkit tabs in Zen

CPU: Intel(R) Xeon(R) 6975P-C. base = cloud/integration chrome JS + host, cand = this branch (its defaults); other variants = this branch with TEST-ONLY prefs (pipe/memfd: axiosozo.engines.linux.memfd_frames off/on; worker/native: see docs/perf/pixel-path.md); rounds alternate. Medians over repetitions; Δ = variant/base − 1.

## 1×

| Metric | base r1 | cand r1 | Δcand r1 | base r2 | cand r2 | Δcand r2 |
| --- | --- | --- | --- | --- | --- | --- |
| rAF page: presented fps | 58.46 | 58.385 | -0.1% | 58.26 | 58.125 | -0.2% |
| rAF page: frame interval p99 (ms) | 20.729 | 21.083 | +1.7% | 20.723 | 23.256 | +12.2% ⚠️ |
| rAF page: intervals > 25 ms (share) | 0.003 | 0.003 | +0.0% | 0.0 | 0.006 | — |
| rAF page: CPU, whole browser (%) | 62.25 | 62.05 | -0.3% | 64.35 | 64.85 | +0.8% |
| rAF page: CPU, Zen parent process (%) | 16.4 | 16.55 | +0.9% | 17.35 | 17.4 | +0.3% |
| presenter draw per frame (ms) | 0.008 | 0.008 | +0.0% | 0.009 | 0.008 | -11.1% ✅ |
| wheel scroll: fps while input is delivered (XTest-paced) | 56.445 | 57.885 | +2.6% | 57.34 | 57.28 | -0.1% |
| wheel scroll: frame interval p99 while input (ms) | 36.674 | 30.882 | -15.8% ✅ | 33.147 | 33.884 | +2.2% |
| wheel scroll: fps, first to last frame of the window | 56.445 | 57.885 | +2.6% | 57.34 | 57.28 | -0.1% |
| wheel scroll: CPU (%) | 88.05 | 88.25 | +0.2% | 90.3 | 89.75 | -0.6% |
| wheel scroll: CPU, Zen parent (%) | 35.85 | 36.3 | +1.3% | 37.6 | 36.55 | -2.8% |
| wheel scroll: input span (s, 120 events @16 ms = 1.9) | 1.948 | 1.95 | +0.1% | 1.95 | 1.952 | +0.1% |
| key -> presented frame (ms) | 16.54 | 16.992 | +2.7% | 16.038 | 16.622 | +3.6% |
| key -> presented frame p95 (ms) | 22.739 | 23.297 | +2.5% | 23.337 | 23.188 | -0.6% |
| Gecko -> engine switch (ms) | 495.25 | 459.0 | -7.3% ✅ | 446.7 | 483.25 | +8.2% ⚠️ |
| static page: navigate -> visible (ms) | 51.05 | 51.65 | +1.2% | 67.0 | 54.75 | -18.3% ✅ |
| RSS, whole browser (MB) | 2191.85 | 2204.1 | +0.6% | 2206.75 | 2191.3 | -0.7% |

Status: base-r1 PASS, base-r2 PASS, cand-r1 PASS, cand-r2 PASS

## 2×

| Metric | base r1 | cand r1 | Δcand r1 | base r2 | cand r2 | Δcand r2 |
| --- | --- | --- | --- | --- | --- | --- |
| rAF page: presented fps | 57.985 | 58.015 | +0.1% | 57.975 | 58.015 | +0.1% |
| rAF page: frame interval p99 (ms) | 23.23 | 22.22 | -4.3% | 23.962 | 23.253 | -3.0% |
| rAF page: intervals > 25 ms (share) | 0.006 | 0.003 | -50.0% ✅ | 0.006 | 0.003 | -50.0% ✅ |
| rAF page: CPU, whole browser (%) | 153.8 | 154.7 | +0.6% | 176.2 | 154.35 | -12.4% ✅ |
| rAF page: CPU, Zen parent process (%) | 23.45 | 23.6 | +0.6% | 27.7 | 23.8 | -14.1% ✅ |
| presenter draw per frame (ms) | 0.01 | 0.008 | -20.0% ✅ | 0.011 | 0.008 | -27.3% ✅ |
| wheel scroll: fps while input is delivered (XTest-paced) | 55.2 | 54.97 | -0.4% | 54.84 | 55.615 | +1.4% |
| wheel scroll: frame interval p99 while input (ms) | 37.092 | 39.977 | +7.8% ⚠️ | 38.112 | 36.247 | -4.9% |
| wheel scroll: fps, first to last frame of the window | 55.2 | 54.97 | -0.4% | 54.84 | 55.615 | +1.4% |
| wheel scroll: CPU (%) | 197.75 | 201.6 | +1.9% | 213.65 | 193.6 | -9.4% ✅ |
| wheel scroll: CPU, Zen parent (%) | 49.25 | 50.05 | +1.6% | 53.7 | 47.0 | -12.5% ✅ |
| wheel scroll: input span (s, 120 events @16 ms = 1.9) | 1.968 | 1.966 | -0.1% | 1.974 | 1.966 | -0.4% |
| key -> presented frame (ms) | 22.256 | 22.428 | +0.8% | 23.245 | 21.812 | -6.2% ✅ |
| key -> presented frame p95 (ms) | 29.204 | 29.53 | +1.1% | 29.36 | 27.523 | -6.3% ✅ |
| Gecko -> engine switch (ms) | 552.95 | 563.2 | +1.9% | 595.0 | 572.15 | -3.8% |
| static page: navigate -> visible (ms) | 57.25 | 64.35 | +12.4% ⚠️ | 58.55 | 49.0 | -16.3% ✅ |
| RSS, whole browser (MB) | 2361.85 | 2264.05 | -4.1% | 2367.5 | 2355.35 | -0.5% |

Status: base-r1 PASS, base-r2 PASS, cand-r1 PASS, cand-r2 PASS

