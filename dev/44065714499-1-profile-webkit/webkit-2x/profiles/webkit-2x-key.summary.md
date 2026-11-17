### webkit-2x key (profile pass)

**parent pid 8797** — 1391 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 504 | 13.6 | Idle 248, JavaScript 88, Other 50, Graphics 35 | 11 / 140 / 352 | poll_wait 294, engine_stream_read 65, paint_layout 55, harness_diagnostics 30 |
| BgIOThreadPool #2 | 373 | 10.1 | Other 372, Idle 1 | 0 / 0 / 373 | poll_wait 1 |
| DOM Worker | 260 | 7.0 | JavaScript 253, Profiler 4, Other 3 | 0 / 0 / 260 | subprocess_pipe_io 260, poll_wait 240, memcpy_memset 0 |
| Renderer | 109 | 3.0 | Graphics 89, Idle 21 | 0 / 0 / 109 | webrender_render 89, poll_wait 21, memcpy_memset 4 |
| SwComposite | 48 | 1.3 | Other 48 | 0 / 0 / 48 | memcpy_memset 12 |
| Timer | 35 | 1.0 | Other 35, Profiler 0 | 0 / 0 / 35 | poll_wait 35, memcpy_memset 0 |
| WRRenderBackend#0 | 17 | 0.5 | Other 17 | 0 / 0 / 17 | memcpy_memset 0 |
| Compositor | 15 | 0.4 | Idle 15, Other 0 | 0 / 0 / 15 | poll_wait 15, paint_layout 0, memcpy_memset 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 274; `[libxul.so]` 158; `[unknown]` 12; `[axiosozo-dev]` 8; `mprotect [libc.so.6]` 5; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 5; `__pthread_mutex_unlock_usercnt [libc.so.6]` 4; `getcontext [libc.so.6]` 3

**tab pid 8882** — 8 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 6 | 0.2 | Idle 6, DOM 0, JavaScript 0, Other 0 | 0 / 0 / 6 | poll_wait 6 |
| IPC I/O Child | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 6; `[libxul.so]` 0; `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[4]` 0

**tab pid 8983** — 6 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 5 | 0.1 | Idle 2, Other 1, DOM 1, JavaScript 1 | 0 / 2 / 3 | poll_wait 3 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 3; `[libxul.so]` 2; `__tls_get_addr [ld-linux-x86-64.so.2]` 0

**tab pid 9482** — 1 ms CPU in the window

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

