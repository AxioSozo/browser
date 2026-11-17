### webkit-2x raf-nosampler (profile pass)

**parent pid 8797** — 895 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| DOM Worker | 246 | 8.0 | JavaScript 240, Profiler 6, Other 1 | 0 / 0 / 246 | subprocess_pipe_io 246, poll_wait 215, memcpy_memset 1 |
| GeckoMain | 203 | 6.6 | Idle 117, JavaScript 49, Other 18, DOM 15 | 5 / 55 / 143 | poll_wait 130, engine_stream_read 44, native_receiver 14, subprocess_pipe_io 13 |
| Renderer | 167 | 5.5 | Idle 114, Graphics 53, Other 0 | 0 / 0 / 167 | poll_wait 117, webrender_render 53, memcpy_memset 28 |
| BackgroundThreadPool #2 | 84 | 2.8 | Idle 68, Other 15, Graphics 1 | 0 / 0 / 84 | poll_wait 67, memcpy_memset 14, image_container 1 |
| SwComposite | 78 | 2.6 | Other 78 | 0 / 0 / 78 | memcpy_memset 8 |
| WRRenderBackend#0 | 50 | 1.6 | Other 50 | 0 / 0 / 50 | memcpy_memset 0, poll_wait 0 |
| Compositor | 39 | 1.3 | Idle 37, Other 1, Graphics 1, Profiler 0 | 0 / 0 / 39 | poll_wait 38, webrender_render 0 |
| ImageBridgeChld | 17 | 0.6 | Idle 17, Other 0 | 0 / 0 / 17 | poll_wait 17, webrender_render 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 129; `[libxul.so]` 43; `[unknown]` 10; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 5; `[axiosozo-dev]` 4; `__lll_lock_wake [libc.so.6]` 1; `g_hash_table_insert [libglib-2.0.so.0]` 1; `mprotect [libc.so.6]` 1

**tab pid 9482** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1; `[]` 0

**tab pid 9348** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0, Other 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libglib-2.0.so.0]` 0

**tab pid 8955** — 1 ms CPU in the window

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

