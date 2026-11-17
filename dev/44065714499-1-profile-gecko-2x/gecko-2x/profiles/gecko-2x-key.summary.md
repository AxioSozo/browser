### gecko-2x key (profile pass)

**parent pid 3887** — 273 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 166 | 4.4 | Idle 38, Layout 30, GC / CC 27, Other 24 | 3 / 24 / 140 | poll_wait 52, paint_layout 38, gc_cc 27, harness_diagnostics 5 |
| Renderer | 42 | 1.1 | Idle 23, Graphics 19 | 0 / 0 / 42 | poll_wait 23, webrender_render 19, memcpy_memset 8 |
| Compositor | 16 | 0.4 | Idle 14, Other 2, Profiler 0 | 0 / 0 / 16 | poll_wait 14, memcpy_memset 1, webrender_render 0 |
| WRRenderBackend#0 | 15 | 0.4 | Other 15 | 0 / 0 / 15 | memcpy_memset 0 |
| SwComposite | 13 | 0.4 | Other 13 | 0 / 0 / 13 | memcpy_memset 4 |
| WRSceneBuilder#0 | 10 | 0.3 | Other 10 | 0 / 0 / 10 | memcpy_memset 0 |
| IPC I/O Parent | 6 | 0.2 | Idle 6, Profiler 0, Other 0 | 0 / 0 / 6 | memcpy_memset 0 |
| Timer | 2 | 0.0 | Other 2 | 0 / 0 / 2 | poll_wait 2 |

Main thread, top self: `[libxul.so]` 101; `poll [libc.so.6]` 39; `mprotect [libc.so.6]` 4; `[unknown]` 3; `[axiosozo-dev]` 3; `XkbKeysymToModifiers [libX11.so.6]` 2; `sendmsg [libc.so.6]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 2

**tab pid 4150** — 53 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 48 | 1.3 | Idle 23, Other 7, Layout 7, Graphics 4 | 0 / 3 / 45 | poll_wait 23, paint_layout 6, harness_diagnostics 2, memcpy_memset 0 |
| IPC I/O Child | 5 | 0.1 | Idle 5, Other 0 | 0 / 0 / 5 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 23; `[libxul.so]` 19; `sendmsg [libc.so.6]` 3; `[]` 2; `__lll_lock_wake [libc.so.6]` 1; `__memmove_avx512_unaligned_erms [libc.so.6]` 0; `g_main_context_default [libglib-2.0.so.0]` 0; `__memcmp_evex_movbe [libc.so.6]` 0

**tab pid 3981** — 8 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 6 | 0.2 | Idle 5, JavaScript 1, DOM 0, Profiler 0 | 0 / 0 / 6 | poll_wait 5, array_buffer_copy 0 |
| IPC I/O Child | 1 | 0.0 | Idle 1 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 5; `[libxul.so]` 1; `[unknown]` 0

**tab pid 4037** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 1; `[libxul.so]` 0

