# Pixel-path A/B in one job: chromium tabs in Zen

CPU: AMD EPYC 9V45 96-Core Processor. base = cloud/integration chrome JS + host, cand = this branch (its defaults); other variants = this branch with TEST-ONLY prefs (pipe/memfd: axiosozo.engines.linux.memfd_frames off/on; worker/native: see docs/perf/pixel-path.md); rounds alternate. Medians over repetitions; Δ = variant/base − 1.

## 1×

| Metric | base r1 |  | base r2 |  |
| --- | --- | --- |
| rAF page: presented fps | 59.995 | — |
| rAF page: frame interval p99 (ms) | 22.914 | — |
| rAF page: intervals > 25 ms (share) | 0.003 | — |
| rAF page: CPU, whole browser (%) | 38.75 | — |
| rAF page: CPU, Zen parent process (%) | 18.15 | — |
| presenter draw per frame (ms) | 0.016 | — |
| presenter uploaded pixel share | 0.276 | — |
| wheel scroll: fps while input is delivered (XTest-paced) | 59.985 | — |
| wheel scroll: frame interval p99 while input (ms) | 21.655 | — |
| wheel scroll: fps, first to last frame of the window | 59.985 | — |
| wheel scroll: CPU (%) | 65.95 | — |
| wheel scroll: CPU, Zen parent (%) | 29.75 | — |
| wheel scroll: input span (s, 120 events @16 ms = 1.9) | 1.946 | — |
| key -> presented frame (ms) | 11.588 | — |
| key -> presented frame p95 (ms) | 13.608 | — |
| Gecko -> engine switch (ms) | 741.4 | — |
| static page: navigate -> visible (ms) | 30.3 | — |
| RSS, whole browser (MB) | 2646.5 | — |

Status: base-r1 PASS, base-r2 FAIL

## 2×

| Metric | base r1 |  | base r2 |  |
| --- | --- | --- |
| rAF page: presented fps | 59.98 | — |
| rAF page: frame interval p99 (ms) | 23.085 | — |
| rAF page: intervals > 25 ms (share) | 0.005 | — |
| rAF page: CPU, whole browser (%) | 53.55 | — |
| rAF page: CPU, Zen parent process (%) | 22.65 | — |
| presenter draw per frame (ms) | 0.013 | — |
| presenter uploaded pixel share | 0.286 | — |
| wheel scroll: fps while input is delivered (XTest-paced) | 59.685 | — |
| wheel scroll: frame interval p99 while input (ms) | 26.4 | — |
| wheel scroll: fps, first to last frame of the window | 59.685 | — |
| wheel scroll: CPU (%) | 119.95 | — |
| wheel scroll: CPU, Zen parent (%) | 49.1 | — |
| wheel scroll: input span (s, 120 events @16 ms = 1.9) | 1.948 | — |
| key -> presented frame (ms) | 11.514 | — |
| key -> presented frame p95 (ms) | 15.774 | — |
| Gecko -> engine switch (ms) | 473.6 | — |
| static page: navigate -> visible (ms) | 53.3 | — |
| RSS, whole browser (MB) | 2876.6 | — |

Status: base-r1 PASS, base-r2 FAIL

