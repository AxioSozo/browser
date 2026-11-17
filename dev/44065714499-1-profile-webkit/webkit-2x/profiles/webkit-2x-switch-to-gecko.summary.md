### webkit-2x switch-to-gecko (profile pass)

**parent pid 8797** — 179 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 74 | 24.4 | JavaScript 35, Other 12, Layout 10, Graphics 5 | 2 / 43 / 28 | harness_diagnostics 12, poll_wait 12, paint_layout 9, engine_stream_read 4 |
| Renderer | 56 | 18.7 | Graphics 53, Idle 3 | 0 / 0 / 56 | webrender_render 53, poll_wait 3, memcpy_memset 0 |
| DOM Worker | 17 | 5.6 | JavaScript 16, Other 1, Idle 0 | 0 / 0 / 17 | subprocess_pipe_io 17, poll_wait 14, worker_messaging 0 |
| BgIOThreadPool #2 | 15 | 4.9 | Other 13, Idle 2 | 0 / 0 / 15 | poll_wait 2 |
| SwComposite | 4 | 1.2 | Other 4 | 0 / 0 / 4 | memcpy_memset 0 |
| WRRenderBackend#0 | 4 | 1.2 | Other 4 | 0 / 0 / 4 |  |
| Compositor | 3 | 0.9 | Idle 2, Other 1, Profiler 0 | 0 / 0 / 3 | poll_wait 2, paint_layout 0, memcpy_memset 0 |
| IPC I/O Parent | 3 | 0.9 | Idle 3, Other 0 | 0 / 0 / 3 |  |

Main thread, top self: `[libxul.so]` 42; `__syscall_cancel_arch [libc.so.6]` 14; `[unknown]` 10; `__pthread_mutex_unlock_usercnt [libc.so.6]` 2; `engineAvailability (chrome://browser/content/axiosozo/EngineRegistry.s` 1; `[libglib-2.0.so.0]` 1; `getCurrentDocument (chrome://browser/content/axiosozo/ConsoleErrorsNat` 1; `__lll_lock_wait [libc.so.6]` 1

**tab pid 9344** — 28 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 26 | 8.4 | Other 9, JavaScript 6, Idle 3, Profiler 2 | 0 / 9 / 17 | poll_wait 3, gc_cc 1, paint_layout 1, harness_diagnostics 0 |
| IPC I/O Child | 1 | 0.5 | Idle 1, Other 0 | 0 / 0 / 1 |  |
| Socket Thread | 0 | 0.1 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.1 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 19; `__syscall_cancel_arch [libc.so.6]` 6

**tab pid 8882** — 5 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 4 | 1.5 | Idle 3, JavaScript 1, DOM 0 | 0 / 2 / 3 | poll_wait 3, array_buffer_copy 0 |
| IPC I/O Child | 0 | 0.2 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 3; `[libxul.so]` 2

**tab pid 9488** — 0 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0

