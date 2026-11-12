### webkit key (profile pass)

**parent pid 7161** — 941 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 544 | 14.9 | Idle 250, JavaScript 91, Graphics 43, Other 42 | 17 / 144 / 383 | poll_wait 295, engine_stream_read 71, paint_layout 65, harness_diagnostics 38 |
| DOM Worker | 224 | 6.1 | JavaScript 216, Other 4, Profiler 3 | 0 / 0 / 224 | subprocess_pipe_io 224, poll_wait 204, memcpy_memset 1 |
| Renderer | 55 | 1.5 | Graphics 34, Idle 21 | 0 / 0 / 55 | webrender_render 34, poll_wait 21, memcpy_memset 1 |
| Timer | 30 | 0.8 | Other 30, Profiler 0 | 0 / 0 / 30 | poll_wait 30, memcpy_memset 0 |
| SwComposite | 27 | 0.8 | Other 27 | 0 / 0 / 27 | memcpy_memset 11 |
| Compositor | 18 | 0.5 | Idle 18, Other 0 | 0 / 0 / 18 | poll_wait 18 |
| WRRenderBackend#0 | 17 | 0.5 | Other 17 | 0 / 0 / 17 | memcpy_memset 1 |
| WRSceneBuilder#0 | 10 | 0.3 | Other 9, Graphics 1 | 0 / 0 / 10 | memcpy_memset 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 262; `[libxul.so]` 195; `[unknown]` 17; `[axiosozo-dev]` 10; `getcontext [libc.so.6]` 5; `mozilla::PrintfTarget::vprint(char const*, __va_list_tag*) [axiosozo-d` 5; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 4; `__strncmp_evex [libc.so.6]` 3

**tab pid 7261** — 8 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 7 | 0.2 | Idle 6, Other 1, GC / CC 0, JavaScript 0 | 0 / 0 / 7 | poll_wait 6, gc_cc 0 |
| IPC I/O Child | 1 | 0.0 | Idle 1 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 6; `[libxul.so]` 1; `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[5]` 0; `receiveMessage (resource://gre/modules/ConduitsChild.sys.mjs:192:17)[5` 0; `[libstdc++.so.6]` 0; `pthread_getspecific@GLIBC_2.2.5 [libc.so.6]` 0

**tab pid 7336** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0

**tab pid 7716** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1

