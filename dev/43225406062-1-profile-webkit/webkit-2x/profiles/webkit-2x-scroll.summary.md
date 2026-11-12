### webkit-2x scroll (profile pass)

**parent pid 8832** — 1224 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 493 | 23.5 | Idle 292, JavaScript 83, Other 57, DOM 28 | 5 / 103 / 385 | poll_wait 361, engine_stream_read 45, harness_diagnostics 41, paint_layout 19 |
| DOM Worker | 259 | 12.3 | JavaScript 236, Profiler 19, Other 4 | 0 / 0 / 259 | subprocess_pipe_io 259, poll_wait 204, memcpy_memset 7 |
| BackgroundThreadPool #1 | 216 | 10.3 | Idle 149, Other 63, Graphics 4 | 0 / 0 / 216 | poll_wait 148, memcpy_memset 58, image_container 4 |
| Renderer | 118 | 5.6 | Idle 75, Graphics 44 | 0 / 0 / 118 | poll_wait 77, webrender_render 44, memcpy_memset 11 |
| SwComposite | 56 | 2.7 | Other 56 | 0 / 0 / 56 | memcpy_memset 4 |
| WRRenderBackend#0 | 30 | 1.4 | Other 30 | 0 / 0 / 30 | poll_wait 0 |
| Compositor | 21 | 1.0 | Idle 21, Other 0, Graphics 0 | 0 / 0 / 21 | poll_wait 20 |
| Timer | 16 | 0.8 | Other 16 | 0 / 0 / 16 | poll_wait 16 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 321; `[libxul.so]` 96; `[unknown]` 16; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 7; `__lll_lock_wake [libc.so.6]` 7; `__lll_lock_wait [libc.so.6]` 7; `[axiosozo-dev]` 6; `mprotect [libc.so.6]` 5

**tab pid 8972** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0, Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0; `__lll_lock_wake [libc.so.6]` 0

**tab pid 9392** — 1 ms CPU in the window

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

**tab pid 9013** — 1 ms CPU in the window

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

