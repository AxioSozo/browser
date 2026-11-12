### webkit-2x raf (profile pass)

**parent pid 8832** — 1279 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 418 | 13.5 | Idle 286, JavaScript 72, Other 27, DOM 20 | 11 / 76 / 331 | poll_wait 299, engine_stream_read 51, harness_diagnostics 28, native_receiver 16 |
| DOM Worker | 250 | 8.1 | JavaScript 241, Profiler 5, Other 4 | 0 / 0 / 250 | subprocess_pipe_io 250, poll_wait 214, memcpy_memset 1 |
| Renderer | 207 | 6.7 | Idle 126, Graphics 80, Other 0 | 0 / 0 / 207 | poll_wait 127, webrender_render 80, memcpy_memset 43 |
| BackgroundThreadPool #1 | 152 | 4.9 | Idle 104, Other 45, Graphics 3 | 0 / 0 / 152 | poll_wait 104, memcpy_memset 41, image_container 3 |
| SwComposite | 114 | 3.7 | Other 114 | 0 / 0 / 114 | memcpy_memset 9 |
| WRRenderBackend#0 | 52 | 1.7 | Other 52 | 0 / 0 / 52 | poll_wait 0 |
| Compositor | 37 | 1.2 | Idle 36, Other 1, Graphics 0, Profiler 0 | 0 / 0 / 37 | poll_wait 36, webrender_render 0, memcpy_memset 0 |
| Timer | 24 | 0.8 | Other 24 | 0 / 0 / 24 | poll_wait 24, memcpy_memset 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 297; `[libxul.so]` 60; `[unknown]` 12; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 7; `[axiosozo-dev]` 4; `__lll_lock_wait [libc.so.6]` 3; `next (self-hosted:392:27)[2]` 3; `__memset_evex_unaligned_erms [libc.so.6]` 3

**tab pid 8994** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0, Profiler 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0

**tab pid 8972** — 1 ms CPU in the window

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

**tab pid 9013** — 1 ms CPU in the window

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

