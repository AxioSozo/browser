### gecko raf (profile pass)

**parent pid 4049** — 631 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Renderer | 353 | 11.5 | Graphics 265, Idle 85, Other 2, Profiler 1 | 0 / 0 / 353 | webrender_render 267, poll_wait 86, memcpy_memset 12 |
| WRRenderBackend#0 | 73 | 2.4 | Other 73 | 0 / 0 / 73 | poll_wait 0, memcpy_memset 0 |
| GeckoMain | 61 | 2.0 | GC / CC 27, Idle 22, Other 5, JavaScript 3 | 0 / 4 / 56 | gc_cc 27, poll_wait 25, harness_diagnostics 4, paint_layout 2 |
| WRSceneBuilder#0 | 50 | 1.6 | Other 50 | 0 / 0 / 50 | memcpy_memset 0, poll_wait 0 |
| Compositor | 45 | 1.5 | Idle 44, Other 1, Profiler 0 | 0 / 0 / 45 | poll_wait 44, paint_layout 1, webrender_render 0, memcpy_memset 0 |
| SwComposite | 27 | 0.9 | Other 27 | 0 / 0 / 27 | memcpy_memset 3 |
| IPC I/O Parent | 10 | 0.3 | Idle 10, Other 0 | 0 / 0 / 10 |  |
| WRSceneBuilderLP#0 | 5 | 0.2 | Other 5 | 0 / 0 / 5 |  |

Main thread, top self: `[libxul.so]` 32; `poll [libc.so.6]` 23; `__memmove_evex_unaligned_erms [libc.so.6]` 1; `__lll_lock_wait [libc.so.6]` 1; `g_mutex_lock [libglib-2.0.so.0]` 1; `mprotect [libc.so.6]` 1; `write [libc.so.6]` 1; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1

**tab pid 4294** — 202 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 185 | 6.0 | Idle 103, Layout 25, Graphics 24, Other 15 | 0 / 9 / 175 | poll_wait 108, paint_layout 38, memcpy_memset 4, harness_diagnostics 2 |
| IPC I/O Child | 15 | 0.5 | Idle 15, Other 0 | 0 / 0 / 15 |  |
| Timer | 2 | 0.1 | Other 2 | 0 / 0 / 2 | poll_wait 2 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 104; `[libxul.so]` 58; `sendmsg [libc.so.6]` 4; `__lll_lock_wait [libc.so.6]` 3; `[]` 3; `__memset_evex_unaligned_erms [libc.so.6]` 2; `__memmove_evex_unaligned_erms [libc.so.6]` 2; `read [libc.so.6]` 2

**tab pid 4382** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 1; `__lll_lock_wait [libc.so.6]` 0

**tab pid 4380** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1, Profiler 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 1; `[libxul.so]` 0

