### webkit key (profile pass)

**parent pid 7161** — 945 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 538 | 14.6 | Idle 227, JavaScript 84, GC / CC 67, Layout 50 | 10 / 144 / 384 | poll_wait 264, gc_cc 67, paint_layout 65, engine_stream_read 64 |
| DOM Worker | 242 | 6.6 | JavaScript 238, Other 2, Profiler 2 | 0 / 0 / 242 | subprocess_pipe_io 242, poll_wait 229, memcpy_memset 0 |
| Renderer | 56 | 1.5 | Idle 32, Graphics 24 | 0 / 0 / 56 | poll_wait 32, webrender_render 24, memcpy_memset 0 |
| Timer | 34 | 0.9 | Other 34, Profiler 0 | 0 / 0 / 34 | poll_wait 33, memcpy_memset 0 |
| SwComposite | 17 | 0.5 | Other 17 | 0 / 0 / 17 | memcpy_memset 3 |
| WRRenderBackend#0 | 16 | 0.4 | Other 16 | 0 / 0 / 16 | poll_wait 0 |
| Compositor | 16 | 0.4 | Idle 16, Other 0, Profiler 0 | 0 / 0 / 16 | poll_wait 16 |
| WRSceneBuilder#0 | 9 | 0.2 | Other 8, Graphics 1 | 0 / 0 / 9 |  |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 246; `[libxul.so]` 222; `[unknown]` 8; `mprotect [libc.so.6]` 7; `[axiosozo-dev]` 7; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 6; `__pthread_mutex_unlock_usercnt [libc.so.6]` 5; `syscall [libc.so.6]` 4

**tab pid 7247** — 8 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 7 | 0.2 | Idle 6, JavaScript 0, Other 0 | 0 / 0 / 7 | poll_wait 6 |
| IPC I/O Child | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 6; `[libxul.so]` 0

**tab pid 7717** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1

**tab pid 7330** — 1 ms CPU in the window

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

