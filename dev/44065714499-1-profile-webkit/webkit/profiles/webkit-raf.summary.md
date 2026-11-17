### webkit raf (profile pass)

**parent pid 7161** — 956 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 437 | 14.0 | Idle 275, JavaScript 77, Other 35, GC / CC 29 | 7 / 81 / 349 | poll_wait 295, engine_stream_read 45, harness_diagnostics 36, gc_cc 29 |
| DOM Worker | 254 | 8.1 | JavaScript 238, Profiler 11, Other 5 | 0 / 0 / 254 | subprocess_pipe_io 254, poll_wait 225, memcpy_memset 3 |
| Renderer | 71 | 2.3 | Idle 58, Graphics 13, Other 0 | 0 / 0 / 71 | poll_wait 58, webrender_render 13, memcpy_memset 7 |
| WRRenderBackend#0 | 40 | 1.3 | Other 40 | 0 / 0 / 40 |  |
| SwComposite | 37 | 1.2 | Other 37 | 0 / 0 / 37 | memcpy_memset 1 |
| Compositor | 35 | 1.1 | Idle 34, Other 0, Graphics 0 | 0 / 0 / 35 | poll_wait 34, webrender_render 0, memcpy_memset 0 |
| Timer | 30 | 1.0 | Other 30, Profiler 0 | 0 / 0 / 30 | poll_wait 30 |
| BackgroundThreadPool #3 | 28 | 0.9 | Idle 26, Other 1, Graphics 0 | 0 / 0 / 28 | poll_wait 26, memcpy_memset 1, image_container 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 293; `[libxul.so]` 102; `[unknown]` 13; `mprotect [libc.so.6]` 4; `[axiosozo-dev]` 4; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 2; `[linux-vdso.so.1]` 2; `__lll_lock_wait [libc.so.6]` 2

**tab pid 7711** — 4 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 4 | 0.1 | GC / CC 2, Idle 2, Other 0 | 0 / 0 / 4 | poll_wait 3, gc_cc 2 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 3; `[libxul.so]` 1

**tab pid 7717** — 1 ms CPU in the window

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

**tab pid 7357** — 1 ms CPU in the window

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

