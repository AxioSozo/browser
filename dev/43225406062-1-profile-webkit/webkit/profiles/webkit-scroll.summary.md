### webkit scroll (profile pass)

**parent pid 7161** — 1096 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 580 | 28.3 | Idle 270, JavaScript 98, GC / CC 74, Other 67 | 8 / 119 / 453 | poll_wait 338, gc_cc 75, engine_stream_read 67, harness_diagnostics 41 |
| DOM Worker | 247 | 12.1 | JavaScript 229, Profiler 10, Other 8 | 0 / 0 / 247 | subprocess_pipe_io 247, poll_wait 199, memcpy_memset 5 |
| BackgroundThreadPool #2 | 83 | 4.1 | Idle 65, Other 16, Graphics 2 | 0 / 0 / 83 | poll_wait 67, memcpy_memset 15, image_container 2 |
| Renderer | 60 | 2.9 | Idle 44, Graphics 15, Other 1, Profiler 1 | 0 / 0 / 60 | poll_wait 44, webrender_render 16, memcpy_memset 5 |
| WRRenderBackend#0 | 32 | 1.6 | Other 32 | 0 / 0 / 32 | memcpy_memset 0 |
| SwComposite | 31 | 1.5 | Other 31 | 0 / 0 / 31 | memcpy_memset 1 |
| Compositor | 24 | 1.2 | Idle 23, Other 1, Graphics 0 | 0 / 0 / 24 | poll_wait 23, webrender_render 0, memcpy_memset 0 |
| Timer | 17 | 0.9 | Other 17 | 0 / 0 / 17 | poll_wait 17 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 300; `[libxul.so]` 194; `[unknown]` 21; `[axiosozo-dev]` 7; `[linux-vdso.so.1]` 6; `syscall [libc.so.6]` 4; `__lll_lock_wait [libc.so.6]` 4; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 3

**tab pid 7355** — 1 ms CPU in the window

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

**tab pid 7314** — 1 ms CPU in the window

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

**tab pid 7734** — 1 ms CPU in the window

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

