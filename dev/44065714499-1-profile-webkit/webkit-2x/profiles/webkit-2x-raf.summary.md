### webkit-2x raf (profile pass)

**parent pid 8797** — 1184 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 453 | 14.3 | Idle 289, JavaScript 96, Other 41, DOM 19 | 13 / 97 / 343 | poll_wait 313, engine_stream_read 55, harness_diagnostics 32, subprocess_pipe_io 28 |
| DOM Worker | 238 | 7.5 | JavaScript 231, Other 4, Profiler 3 | 0 / 0 / 238 | subprocess_pipe_io 238, poll_wait 213, memcpy_memset 1 |
| Renderer | 165 | 5.2 | Idle 117, Graphics 48, Other 0 | 0 / 0 / 165 | poll_wait 117, webrender_render 48, memcpy_memset 25 |
| SwComposite | 94 | 3.0 | Other 94 | 0 / 0 / 94 | memcpy_memset 6 |
| BackgroundThreadPool #2 | 83 | 2.6 | Idle 72, Other 11 | 0 / 0 / 83 | poll_wait 72, memcpy_memset 10 |
| WRRenderBackend#0 | 52 | 1.6 | Other 52 | 0 / 0 / 52 | memcpy_memset 1, poll_wait 1 |
| Compositor | 41 | 1.3 | Idle 40, Other 1, Graphics 0, Profiler 0 | 0 / 0 / 41 | poll_wait 40, webrender_render 0 |
| Timer | 28 | 0.9 | Other 28, Profiler 0 | 0 / 0 / 28 | poll_wait 28 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 307; `[libxul.so]` 76; `[unknown]` 28; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 5; `[axiosozo-dev]` 4; `[libglib-2.0.so.0]` 3; `__lll_lock_wait [libc.so.6]` 3; `mozilla::PrintfTarget::vprint(char const*, __va_list_tag*) [axiosozo-d` 2

**tab pid 9482** — 1 ms CPU in the window

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

**tab pid 9348** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0, Profiler 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1; `[]` 0; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0

**tab pid 9488** — 1 ms CPU in the window

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

