### gecko-2x raf (profile pass)

**parent pid 3887** — 472 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Renderer | 238 | 7.8 | Graphics 151, Idle 84, Other 2, Profiler 1 | 0 / 0 / 238 | webrender_render 152, poll_wait 84, memcpy_memset 8 |
| SwComposite | 58 | 1.9 | Other 58 | 0 / 0 / 58 | memcpy_memset 5 |
| GeckoMain | 50 | 1.6 | GC / CC 24, Idle 18, JavaScript 5, Layout 1 | 0 / 3 / 47 | gc_cc 24, poll_wait 19, paint_layout 2, harness_diagnostics 1 |
| WRRenderBackend#0 | 45 | 1.5 | Other 45, Profiler 0 | 0 / 0 / 45 | memcpy_memset 0 |
| WRSceneBuilder#0 | 34 | 1.1 | Other 34, Profiler 0 | 0 / 0 / 34 | memcpy_memset 1 |
| Compositor | 33 | 1.1 | Idle 32, Other 1, Profiler 0 | 0 / 0 / 33 | poll_wait 32, webrender_render 0, memcpy_memset 0 |
| IPC I/O Parent | 8 | 0.3 | Idle 8, Other 0 | 0 / 0 / 8 |  |
| WRSceneBuilderLP#0 | 4 | 0.1 | Other 4 | 0 / 0 / 4 |  |

Main thread, top self: `[libxul.so]` 29; `poll [libc.so.6]` 18; `[axiosozo-dev]` 1; `[unknown]` 1; `write [libc.so.6]` 1; `__memmove_avx512_unaligned_erms [libc.so.6]` 0; `recvmsg [libc.so.6]` 0; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0

**tab pid 4150** — 140 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 129 | 4.2 | Idle 87, Layout 10, Graphics 10, Other 9 | 0 / 6 / 122 | poll_wait 87, paint_layout 18, gc_cc 5, harness_diagnostics 3 |
| IPC I/O Child | 10 | 0.3 | Idle 10, Other 0 | 0 / 0 / 10 |  |
| Timer | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 87; `[libxul.so]` 31; `[]` 2; `sendmsg [libc.so.6]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `__memset_avx512_unaligned_erms [libc.so.6]` 1; `[linux-vdso.so.1]` 1; `__memmove_avx512_unaligned_erms [libc.so.6]` 1

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

**tab pid 4037** — 1 ms CPU in the window

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

