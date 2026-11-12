### webkit raf-nosampler (profile pass)

**parent pid 7161** — 765 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| DOM Worker | 243 | 8.0 | JavaScript 237, Profiler 4, Other 1 | 0 / 0 / 243 | subprocess_pipe_io 243, poll_wait 220, memcpy_memset 2 |
| GeckoMain | 207 | 6.9 | Idle 107, JavaScript 60, Other 26, DOM 12 | 8 / 64 / 135 | poll_wait 120, engine_stream_read 51, subprocess_pipe_io 16, native_receiver 10 |
| Renderer | 96 | 3.2 | Idle 66, Graphics 30, Other 0 | 0 / 0 / 96 | poll_wait 68, webrender_render 30, memcpy_memset 15 |
| SwComposite | 52 | 1.7 | Other 52 | 0 / 0 / 52 | memcpy_memset 1 |
| BackgroundThreadPool #2 | 51 | 1.7 | Idle 47, Other 3, Graphics 0 | 0 / 0 / 51 | poll_wait 47, memcpy_memset 3, image_container 0 |
| WRRenderBackend#0 | 48 | 1.6 | Other 48 | 0 / 0 / 48 | memcpy_memset 0, poll_wait 0 |
| Compositor | 40 | 1.3 | Idle 38, Other 2, Profiler 0, Graphics 0 | 0 / 0 / 40 | poll_wait 38, webrender_render 0, memcpy_memset 0 |
| ImageBridgeChld | 16 | 0.5 | Idle 16, Other 0 | 0 / 0 / 16 | poll_wait 16 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 119; `[libxul.so]` 54; `[unknown]` 15; `[axiosozo-dev]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 2; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 1; `mprotect [libc.so.6]` 1; `values (self-hosted:440:22)[5]` 1

**tab pid 7716** — 6 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 5 | 0.2 | Idle 3, GC / CC 2, Other 0 | 0 / 0 / 5 | poll_wait 3, gc_cc 2 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 3; `[libxul.so]` 1; `__lll_lock_wake [libc.so.6]` 1

**tab pid 7355** — 1 ms CPU in the window

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

**tab pid 7734** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 0, Other 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0

