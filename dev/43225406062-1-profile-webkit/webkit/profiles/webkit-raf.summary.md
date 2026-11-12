### webkit raf (profile pass)

**parent pid 7161** — 1032 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 448 | 14.6 | Idle 292, JavaScript 78, Other 34, DOM 23 | 14 / 84 / 351 | poll_wait 308, engine_stream_read 46, harness_diagnostics 41, subprocess_pipe_io 15 |
| DOM Worker | 255 | 8.3 | JavaScript 246, Profiler 5, Other 4 | 0 / 0 / 255 | subprocess_pipe_io 255, poll_wait 225, memcpy_memset 2 |
| Renderer | 95 | 3.1 | Idle 67, Graphics 26, Profiler 1, Other 1 | 0 / 0 / 95 | poll_wait 69, webrender_render 27, memcpy_memset 12 |
| SwComposite | 51 | 1.7 | Other 51 | 0 / 0 / 51 | memcpy_memset 2 |
| WRRenderBackend#0 | 47 | 1.5 | Other 47 | 0 / 0 / 47 | poll_wait 1 |
| BackgroundThreadPool #2 | 42 | 1.4 | Idle 40, Other 2, Profiler 0 | 0 / 0 / 42 | poll_wait 40, memcpy_memset 1 |
| Compositor | 39 | 1.3 | Idle 38, Other 1, Profiler 0, Graphics 0 | 0 / 0 / 39 | poll_wait 38, webrender_render 0, memcpy_memset 0 |
| Timer | 27 | 0.9 | Other 27, Profiler 0 | 0 / 0 / 27 | poll_wait 27, memcpy_memset 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 303; `[libxul.so]` 86; `[unknown]` 15; `[axiosozo-dev]` 5; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 5; `emit (resource://gre/modules/EventEmitter.sys.mjs:131:7)[29]` 3; `mprotect [libc.so.6]` 2; `__memset_evex_unaligned_erms [libc.so.6]` 2

**tab pid 7314** — 1 ms CPU in the window

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
| IPC I/O Child | 0 | 0.0 | Idle 0, Profiler 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1

**tab pid 7336** — 1 ms CPU in the window

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

