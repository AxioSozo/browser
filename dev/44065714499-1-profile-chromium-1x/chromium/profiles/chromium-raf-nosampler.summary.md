### chromium raf-nosampler (profile pass)

**parent pid 4163** — 512 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| DOM Worker | 185 | 6.1 | JavaScript 176, Other 6, Profiler 4 | 0 / 0 / 185 | subprocess_pipe_io 185, poll_wait 164, memcpy_memset 3 |
| GeckoMain | 130 | 4.3 | Idle 86, JavaScript 26, Other 9, DOM 4 | 3 / 27 / 100 | poll_wait 91, engine_stream_read 19, subprocess_pipe_io 10, json_metadata 7 |
| Renderer | 57 | 1.9 | Idle 47, Graphics 9, Other 0 | 0 / 0 / 57 | poll_wait 48, webrender_render 9, memcpy_memset 4, gc_cc 0 |
| BackgroundThreadPool #2 | 34 | 1.1 | Idle 32, Other 1, Graphics 0 | 0 / 0 / 34 | poll_wait 32, memcpy_memset 1, image_container 0 |
| SwComposite | 34 | 1.1 | Other 34 | 0 / 0 / 34 | memcpy_memset 2 |
| Compositor | 27 | 0.9 | Idle 26, Other 0, Profiler 0, Graphics 0 | 0 / 0 / 27 | poll_wait 26, memcpy_memset 0, webrender_render 0 |
| WRRenderBackend#0 | 26 | 0.9 | Other 26 | 0 / 0 / 26 | poll_wait 0 |
| ImageBridgeChld | 11 | 0.4 | Idle 11, Other 0 | 0 / 0 / 11 | poll_wait 11 |

Main thread, top self: `poll [libc.so.6]` 86; `[libxul.so]` 25; `[unknown]` 5; `recvmsg [libc.so.6]` 3; `mprotect [libc.so.6]` 2; `[linux-vdso.so.1]` 2; `write [libc.so.6]` 1; `next (self-hosted:392:27)[1]` 1

**tab pid 4873** — 4 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 3 | 0.1 | Idle 1, Profiler 1, GC / CC 1, Other 0 | 0 / 0 / 3 | poll_wait 2, gc_cc 2 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1; `sendmsg [libc.so.6]` 0

**tab pid 4343** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0, Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 0; `[libxul.so]` 0

**tab pid 4321** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 0

