### gecko-2x idle (profile pass)

**parent pid 3887** — 56 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 38 | 1.8 | GC / CC 25, Idle 6, JavaScript 5, Other 2 | 0 / 5 / 33 | gc_cc 25, poll_wait 8, harness_diagnostics 3, subprocess_pipe_io 1 |
| DOM Worker | 14 | 0.7 | Other 12, GC / CC 1, Idle 1 | 0 / 0 / 14 | memcpy_memset 5, poll_wait 1, gc_cc 1, worker_messaging 1 |
| DOM Worker | 2 | 0.1 | GC / CC 1, Idle 1, Other 0 | 0 / 0 / 2 | gc_cc 1, worker_messaging 1, poll_wait 1 |
| DOM Worker | 1 | 0.1 | Idle 1, Other 0 | 0 / 0 / 1 | worker_messaging 1, poll_wait 1 |
| IPC I/O Parent | 1 | 0.0 | Idle 1 | 0 / 0 / 1 |  |
| Socket Thread | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 28; `poll [libc.so.6]` 6; `recvmsg [libc.so.6]` 2; `write [libc.so.6]` 1; `[axiosozo-dev]` 1; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0

**tab pid 4150** — 21 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 17 | 0.8 | Idle 13, JavaScript 3, Profiler 0, Other 0 | 0 / 3 / 14 | poll_wait 13, harness_diagnostics 3, memcpy_memset 0 |
| IPC I/O Child | 4 | 0.2 | Idle 4, Other 0 | 0 / 0 / 4 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 13; `[libxul.so]` 4; `[]` 0; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 0; `__memset_avx512_unaligned_erms [libc.so.6]` 0; `PR_Now [libnspr4.so]` 0; `write [libc.so.6]` 0; `__lll_lock_wait [libc.so.6]` 0

**tab pid 4236** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0, Other 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 0

**tab pid 4079** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 0

