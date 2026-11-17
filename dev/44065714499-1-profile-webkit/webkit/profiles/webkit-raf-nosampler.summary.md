### webkit raf-nosampler (profile pass)

**parent pid 7161** — 672 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| DOM Worker | 244 | 8.0 | JavaScript 237, Profiler 5, Other 2 | 0 / 0 / 244 | subprocess_pipe_io 244, poll_wait 222, memcpy_memset 3 |
| GeckoMain | 182 | 6.0 | Idle 108, JavaScript 46, Other 13, DOM 9 | 6 / 48 / 128 | poll_wait 116, engine_stream_read 40, subprocess_pipe_io 13, array_buffer_copy 6 |
| Renderer | 69 | 2.3 | Idle 57, Graphics 12, Other 0 | 0 / 0 / 69 | poll_wait 57, webrender_render 12, memcpy_memset 5 |
| WRRenderBackend#0 | 39 | 1.3 | Other 39 | 0 / 0 / 39 | poll_wait 0 |
| SwComposite | 36 | 1.2 | Other 36 | 0 / 0 / 36 | memcpy_memset 1 |
| Compositor | 34 | 1.1 | Idle 33, Other 0, Graphics 0 | 0 / 0 / 34 | poll_wait 33 |
| BackgroundThreadPool #3 | 31 | 1.0 | Idle 29, Other 2 | 0 / 0 / 31 | poll_wait 29, memcpy_memset 1 |
| ImageBridgeChld | 14 | 0.5 | Idle 14 | 0 / 0 / 14 | poll_wait 14 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 117; `[libxul.so]` 41; `[unknown]` 7; `[axiosozo-dev]` 2; `[linux-vdso.so.1]` 2; `getcontext [libc.so.6]` 1; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 1; `readStreamPacket (chrome://browser/content/axiosozo/EngineStreamClient` 1

**tab pid 7330** — 1 ms CPU in the window

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

**tab pid 7717** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 0, Other 0 | 0 / 0 / 1 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0; `__lll_lock_wake [libc.so.6]` 0

**tab pid 7357** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1; `__lll_lock_wait [libc.so.6]` 0

