# Pixel-path A/B in one job: chromium tabs in Zen

CPU: Intel(R) Xeon(R) 6975P-C. base = cloud/integration chrome JS + host, cand = this branch (its defaults); other variants = this branch with TEST-ONLY prefs (pipe/memfd: axiosozo.engines.linux.memfd_frames off/on; worker/native: see docs/perf/pixel-path.md); rounds alternate. Medians over repetitions; Δ = variant/base − 1.

## 1×

| Metric | base r1 | cand r1 | Δcand r1 | base r2 | cand r2 | Δcand r2 |
| --- | --- | --- | --- | --- | --- | --- |
| rAF page: presented fps | 60.01 | 60.0 | -0.0% | 59.97 | 60.01 | +0.1% |
| rAF page: frame interval p99 (ms) | 20.86 | 20.915 | +0.3% | 20.931 | 21.137 | +1.0% |
| rAF page: intervals > 25 ms (share) | 0.003 | 0.0 | -100.0% ✅ | 0.003 | 0.003 | +0.0% |
| rAF page: CPU, whole browser (%) | 28.95 | 28.1 | -2.9% | 29.9 | 30.1 | +0.7% |
| rAF page: CPU, Zen parent process (%) | 15.2 | 14.9 | -2.0% | 15.55 | 15.7 | +1.0% |
| presenter draw per frame (ms) | 0.009 | 0.009 | +0.0% | 0.011 | 0.008 | -27.3% ✅ |
| presenter uploaded pixel share | 0.278 | 0.271 | -2.5% | 0.277 | 0.27 | -2.5% |
| wheel scroll: fps while input is delivered (XTest-paced) | 59.81 | 59.81 | +0.0% | 60.085 | 60.255 | +0.3% |
| wheel scroll: frame interval p99 while input (ms) | 24.125 | 23.186 | -3.9% | 24.141 | 21.461 | -11.1% ✅ |
| wheel scroll: fps, first to last frame of the window | 59.81 | 59.81 | +0.0% | 60.085 | 60.255 | +0.3% |
| wheel scroll: CPU (%) | 59.4 | 56.65 | -4.6% | 59.9 | 61.6 | +2.8% |
| wheel scroll: CPU, Zen parent (%) | 29.1 | 28.85 | -0.9% | 31.35 | 29.8 | -4.9% |
| wheel scroll: input span (s, 120 events @16 ms = 1.9) | 1.942 | 1.942 | +0.0% | 1.942 | 1.942 | +0.0% |
| key -> presented frame (ms) | 10.883 | 11.001 | +1.1% | 11.195 | 11.253 | +0.5% |
| key -> presented frame p95 (ms) | 12.352 | 12.408 | +0.5% | 13.296 | 13.375 | +0.6% |
| Gecko -> engine switch (ms) | 1607.6 | 302.45 | -81.2% ✅ | 387.8 | 333.9 | -13.9% ✅ |
| static page: navigate -> visible (ms) | 21.5 | 32.0 | +48.8% ⚠️ | 30.4 | 32.75 | +7.7% ⚠️ |
| RSS, whole browser (MB) | 2673.7 | 2715.45 | +1.6% | 2708.95 | 2704.7 | -0.2% |

Status: base-r1 PASS, base-r2 PASS, cand-r1 PASS, cand-r2 PASS

## 2×

| Metric | base r1 | cand r1 | Δcand r1 | base r2 | cand r2 | Δcand r2 |
| --- | --- | --- | --- | --- | --- | --- |
| rAF page: presented fps | 60.015 | 60.005 | -0.0% | 60.055 | 60.0 | -0.1% |
| rAF page: frame interval p99 (ms) | 20.748 | 22.901 | +10.4% ⚠️ | 20.905 | 21.572 | +3.2% |
| rAF page: intervals > 25 ms (share) | 0.0 | 0.005 | — | 0.003 | 0.003 | +0.0% |
| rAF page: CPU, whole browser (%) | 46.75 | 46.45 | -0.6% | 51.05 | 50.05 | -2.0% |
| rAF page: CPU, Zen parent process (%) | 22.0 | 21.95 | -0.2% | 24.65 | 23.8 | -3.4% |
| presenter draw per frame (ms) | 0.008 | 0.009 | +12.5% ⚠️ | 0.009 | 0.009 | +0.0% |
| presenter uploaded pixel share | 0.287 | 0.283 | -1.4% | 0.288 | 0.284 | -1.4% |
| wheel scroll: fps while input is delivered (XTest-paced) | 60.0 | 60.135 | +0.2% | 60.155 | 60.085 | -0.1% |
| wheel scroll: frame interval p99 while input (ms) | 21.048 | 24.439 | +16.1% ⚠️ | 24.393 | 21.298 | -12.7% ✅ |
| wheel scroll: fps, first to last frame of the window | 60.0 | 60.135 | +0.2% | 60.155 | 60.085 | -0.1% |
| wheel scroll: CPU (%) | 98.4 | 107.7 | +9.5% ⚠️ | 111.2 | 107.7 | -3.1% |
| wheel scroll: CPU, Zen parent (%) | 36.6 | 40.5 | +10.7% ⚠️ | 44.15 | 39.0 | -11.7% ✅ |
| wheel scroll: input span (s, 120 events @16 ms = 1.9) | 1.944 | 1.944 | +0.0% | 1.944 | 1.944 | +0.0% |
| key -> presented frame (ms) | 11.094 | 10.895 | -1.8% | 11.329 | 11.411 | +0.7% |
| key -> presented frame p95 (ms) | 12.778 | 14.197 | +11.1% ⚠️ | 12.523 | 12.816 | +2.3% |
| Gecko -> engine switch (ms) | 362.15 | 340.25 | -6.0% ✅ | 380.6 | 356.6 | -6.3% ✅ |
| static page: navigate -> visible (ms) | 33.05 | 34.45 | +4.2% | 31.6 | 34.4 | +8.9% ⚠️ |
| RSS, whole browser (MB) | 2897.15 | 2890.7 | -0.2% | 2873.75 | 2900.45 | +0.9% |

Status: base-r1 PASS, base-r2 PASS, cand-r1 PASS, cand-r2 PASS

