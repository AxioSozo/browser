# Pixel-path A/B in one job: webkit tabs in Zen

CPU: AMD EPYC 7763 64-Core Processor. base = cloud/integration chrome JS + host, cand = this branch (its defaults); other variants = this branch with TEST-ONLY prefs (pipe/memfd: axiosozo.engines.linux.memfd_frames off/on; worker/native: see docs/perf/pixel-path.md); rounds alternate. Medians over repetitions; Δ = variant/base − 1.

## 1×

| Metric | base r1 | cand r1 | Δcand r1 | base r2 | cand r2 | Δcand r2 |
| --- | --- | --- | --- | --- | --- | --- |
| rAF page: presented fps | 58.08 | 58.1 | +0.0% | 58.175 | 58.29 | +0.2% |
| rAF page: frame interval p99 (ms) | 21.787 | 24.27 | +11.4% ⚠️ | 24.274 | 25.343 | +4.4% |
| rAF page: intervals > 25 ms (share) | 0.003 | 0.006 | +100.0% ⚠️ | 0.006 | 0.011 | +83.3% ⚠️ |
| rAF page: CPU, whole browser (%) | 89.1 | 87.5 | -1.8% | 87.2 | 85.75 | -1.7% |
| rAF page: CPU, Zen parent process (%) | 22.1 | 21.6 | -2.3% | 21.7 | 21.2 | -2.3% |
| presenter draw per frame (ms) | 0.015 | 0.015 | +0.0% | 0.015 | 0.015 | +0.0% |
| wheel scroll: fps while input is delivered (XTest-paced) | 55.765 | 55.43 | -0.6% | 55.885 | 56.775 | +1.6% |
| wheel scroll: frame interval p99 while input (ms) | 37.37 | 36.253 | -3.0% | 33.991 | 34.992 | +2.9% |
| wheel scroll: fps, first to last frame of the window | 55.765 | 55.43 | -0.6% | 55.885 | 56.775 | +1.6% |
| wheel scroll: CPU (%) | 121.35 | 121.15 | -0.2% | 121.35 | 120.7 | -0.5% |
| wheel scroll: CPU, Zen parent (%) | 49.05 | 48.6 | -0.9% | 48.3 | 48.55 | +0.5% |
| wheel scroll: input span (s, 120 events @16 ms = 1.9) | 1.962 | 1.963 | +0.1% | 1.964 | 1.977 | +0.7% |
| key -> presented frame (ms) | 16.448 | 17.078 | +3.8% | 17.717 | 17.161 | -3.1% |
| key -> presented frame p95 (ms) | 23.245 | 23.169 | -0.3% | 23.057 | 23.951 | +3.9% |
| Gecko -> engine switch (ms) | 783.15 | 837.65 | +7.0% ⚠️ | 771.35 | 772.35 | +0.1% |
| static page: navigate -> visible (ms) | 57.85 | 56.4 | -2.5% | 60.0 | 57.2 | -4.7% |
| RSS, whole browser (MB) | 2154.8 | 2166.8 | +0.6% | 2176.85 | 2169.7 | -0.3% |

Status: base-r1 PASS, base-r2 PASS, cand-r1 PASS, cand-r2 PASS

## 2×

| Metric | base r1 | cand r1 | Δcand r1 | base r2 | cand r2 | Δcand r2 |
| --- | --- | --- | --- | --- | --- | --- |
| rAF page: presented fps | 57.76 | 57.825 | +0.1% | 57.83 | 58.01 | +0.3% |
| rAF page: frame interval p99 (ms) | 28.155 | 27.689 | -1.7% | 25.684 | 26.168 | +1.9% |
| rAF page: intervals > 25 ms (share) | 0.02 | 0.031 | +55.0% ⚠️ | 0.008 | 0.022 | +175.0% ⚠️ |
| rAF page: CPU, whole browser (%) | 227.8 | 227.9 | +0.0% | 227.45 | 227.9 | +0.2% |
| rAF page: CPU, Zen parent process (%) | 32.05 | 32.05 | +0.0% | 31.5 | 31.85 | +1.1% |
| presenter draw per frame (ms) | 0.019 | 0.019 | +0.0% | 0.024 | 0.023 | -4.2% |
| wheel scroll: fps while input is delivered (XTest-paced) | 52.285 | 52.605 | +0.6% | 53.44 | 52.77 | -1.3% |
| wheel scroll: frame interval p99 while input (ms) | 45.938 | 38.349 | -16.5% ✅ | 40.08 | 33.666 | -16.0% ✅ |
| wheel scroll: fps, first to last frame of the window | 52.285 | 52.605 | +0.6% | 53.44 | 52.77 | -1.3% |
| wheel scroll: CPU (%) | 258.9 | 256.25 | -1.0% | 257.85 | 257.45 | -0.2% |
| wheel scroll: CPU, Zen parent (%) | 59.4 | 59.75 | +0.6% | 60.15 | 60.55 | +0.7% |
| wheel scroll: input span (s, 120 events @16 ms = 1.9) | 1.991 | 1.998 | +0.4% | 2.0 | 1.992 | -0.4% |
| key -> presented frame (ms) | 24.544 | 25.755 | +4.9% | 27.185 | 26.694 | -1.8% |
| key -> presented frame p95 (ms) | 30.166 | 31.389 | +4.1% | 32.746 | 31.44 | -4.0% |
| Gecko -> engine switch (ms) | 763.6 | 827.2 | +8.3% ⚠️ | 839.75 | 799.05 | -4.8% |
| static page: navigate -> visible (ms) | 61.5 | 70.7 | +15.0% ⚠️ | 64.0 | 67.8 | +5.9% ⚠️ |
| RSS, whole browser (MB) | 2342.8 | 2356.65 | +0.6% | 2232.35 | 2347.25 | +5.1% ⚠️ |

Status: base-r1 PASS, base-r2 PASS, cand-r1 PASS, cand-r2 PASS

