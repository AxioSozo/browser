### gecko-2x scroll (profile pass)

**parent pid 3887** — 1272 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Renderer | 950 | 47.3 | Graphics 888, Idle 60, Other 2 | 0 / 0 / 950 | webrender_render 888, poll_wait 61, memcpy_memset 4 |
| SwComposite | 115 | 5.7 | Other 115 | 0 / 0 / 115 | memcpy_memset 11 |
| GeckoMain | 102 | 5.1 | Idle 55, GC / CC 28, Other 7, Layout 3 | 1 / 3 / 98 | poll_wait 67, gc_cc 28, paint_layout 4, harness_diagnostics 4 |
| WRRenderBackend#0 | 55 | 2.7 | Other 55 | 0 / 0 / 55 | memcpy_memset 1, poll_wait 1 |
| Compositor | 25 | 1.2 | Idle 24, Other 1, Profiler 0 | 0 / 0 / 25 | poll_wait 24, paint_layout 0 |
| WRSceneBuilder#0 | 16 | 0.8 | Other 16 | 0 / 0 / 16 | memcpy_memset 0 |
| IPC I/O Parent | 5 | 0.3 | Idle 5, Profiler 0, Other 0 | 0 / 0 / 5 |  |
| Timer | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |

Main thread, top self: `poll [libc.so.6]` 55; `[libxul.so]` 37; `g_type_check_instance_is_a [libgobject-2.0.so.0]` 1; `[axiosozo-dev]` 1; `dispatch (chrome://remote/content/marionette/server.sys.mjs:306:17)[14` 1; `[unknown]` 1; `recvmsg [libc.so.6]` 1; `[libgdk-3.so.0]` 1

**tab pid 4150** — 89 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 78 | 3.9 | Idle 55, GC / CC 6, Graphics 5, Other 5 | 0 / 4 / 74 | poll_wait 56, gc_cc 6, paint_layout 6, harness_diagnostics 3 |
| IPC I/O Child | 10 | 0.5 | Idle 10, Other 0, Profiler 0 | 0 / 0 / 10 |  |
| Timer | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 55; `[libxul.so]` 20; `[libglib-2.0.so.0]` 1; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 0; `__lll_lock_wake [libc.so.6]` 0; `read [libc.so.6]` 0; `PR_GetThreadPrivate [libnspr4.so]` 0; `__memmove_avx512_unaligned_erms [libc.so.6]` 0

**tab pid 4060** — 0 ms CPU in the window

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

**tab pid 4037** — 0 ms CPU in the window

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

