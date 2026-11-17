### gecko key (profile pass)

**parent pid 4049** — 295 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 188 | 5.0 | Idle 45, Layout 34, GC / CC 27, JavaScript 26 | 2 / 30 / 156 | poll_wait 63, paint_layout 51, gc_cc 27, memcpy_memset 8 |
| Renderer | 40 | 1.1 | Idle 21, Graphics 18, Profiler 1, Other 0 | 0 / 0 / 40 | poll_wait 21, webrender_render 18, memcpy_memset 1 |
| WRRenderBackend#0 | 19 | 0.5 | Other 19 | 0 / 0 / 19 | poll_wait 0 |
| Compositor | 19 | 0.5 | Idle 17, Other 1 | 0 / 0 / 19 | poll_wait 17, memcpy_memset 1, paint_layout 0, webrender_render 0 |
| WRSceneBuilder#0 | 13 | 0.4 | Other 13 | 0 / 0 / 13 | poll_wait 0, memcpy_memset 0 |
| IPC I/O Parent | 8 | 0.2 | Idle 7, Other 0 | 0 / 0 / 8 | poll_wait 0 |
| SwComposite | 6 | 0.1 | Other 6 | 0 / 0 / 6 | memcpy_memset 1 |
| Timer | 2 | 0.0 | Other 2 | 0 / 0 / 2 | poll_wait 2 |

Main thread, top self: `[libxul.so]` 107; `poll [libc.so.6]` 45; `[axiosozo-dev]` 4; `__memset_evex_unaligned_erms [libc.so.6]` 3; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 3; `mprotect [libc.so.6]` 3; `__memmove_evex_unaligned_erms [libc.so.6]` 2; `[unknown]` 2

**tab pid 4294** — 59 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 53 | 1.4 | Idle 24, Other 10, Layout 6, Graphics 5 | 1 / 7 / 45 | poll_wait 25, paint_layout 9, harness_diagnostics 2, webrender_render 0 |
| IPC I/O Child | 6 | 0.2 | Idle 6, Other 0 | 0 / 0 / 6 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 25; `[libxul.so]` 19; `sendmsg [libc.so.6]` 4; `[]` 1; `handleEvent (moz-src:///toolkit/actors/FindBarChild.sys.mjs:74:14)[13]` 1; `write [libc.so.6]` 1; `[unknown]` 1; `PR_GetThreadPrivate [libnspr4.so]` 1

**tab pid 4139** — 7 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 6 | 0.2 | Idle 5, JavaScript 1, Other 0 | 0 / 0 / 5 | poll_wait 5 |
| IPC I/O Child | 1 | 0.0 | Idle 1 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 5; `[libxul.so]` 1

**tab pid 4233** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0, Profiler 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 1

