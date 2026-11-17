### webkit-2x scroll (profile pass)

**parent pid 8797** — 1221 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 530 | 24.6 | Idle 284, JavaScript 130, Other 61, DOM 23 | 23 / 126 / 381 | poll_wait 345, harness_diagnostics 58, engine_stream_read 57, subprocess_pipe_io 27 |
| DOM Worker | 266 | 12.4 | JavaScript 250, Profiler 13, Other 3 | 0 / 0 / 266 | subprocess_pipe_io 266, poll_wait 224, memcpy_memset 5 |
| BackgroundThreadPool #2 | 172 | 8.0 | Idle 118, Other 48, Graphics 6 | 0 / 0 / 172 | poll_wait 119, memcpy_memset 46, image_container 6 |
| Renderer | 102 | 4.7 | Idle 61, Graphics 40, Other 0 | 0 / 0 / 102 | poll_wait 63, webrender_render 40, memcpy_memset 14 |
| SwComposite | 56 | 2.6 | Other 56 | 0 / 0 / 56 | memcpy_memset 2 |
| WRRenderBackend#0 | 34 | 1.6 | Other 34 | 0 / 0 / 34 | poll_wait 1 |
| Compositor | 25 | 1.2 | Idle 25, Other 0, Graphics 0 | 0 / 0 / 25 | poll_wait 25 |
| Timer | 17 | 0.8 | Other 17 | 0 / 0 / 17 | poll_wait 17 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 321; `[libxul.so]` 114; `[unknown]` 32; `__lll_lock_wait [libc.so.6]` 6; `mprotect [libc.so.6]` 6; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 6; `next (self-hosted:392:27)[1]` 4; `[linux-vdso.so.1]` 3

**tab pid 8955** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 0, Other 0 | 0 / 0 / 1 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1

**tab pid 9482** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0, Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0

**tab pid 8983** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0

