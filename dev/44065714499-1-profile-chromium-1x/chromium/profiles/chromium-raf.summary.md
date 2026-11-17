### chromium raf (profile pass)

**parent pid 4163** — 657 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 240 | 7.8 | Idle 177, JavaScript 35, Other 16, DOM 7 | 6 / 35 / 200 | poll_wait 183, engine_stream_read 21, json_metadata 14, subprocess_pipe_io 9 |
| DOM Worker | 206 | 6.7 | JavaScript 203, Other 2, Profiler 1 | 0 / 0 / 206 | subprocess_pipe_io 206, poll_wait 191, memcpy_memset 0 |
| Renderer | 57 | 1.9 | Idle 49, Graphics 7, Profiler 0 | 0 / 0 / 57 | poll_wait 49, webrender_render 8, memcpy_memset 4 |
| SwComposite | 33 | 1.1 | Other 33 | 0 / 0 / 33 | memcpy_memset 1 |
| BackgroundThreadPool #2 | 28 | 0.9 | Idle 27, Other 1 | 0 / 0 / 28 | poll_wait 27, memcpy_memset 1 |
| WRRenderBackend#0 | 27 | 0.9 | Other 27, Profiler 0 | 0 / 0 / 27 |  |
| Compositor | 26 | 0.9 | Idle 26, Other 1, Graphics 0, Profiler 0 | 0 / 0 / 26 | poll_wait 26 |
| Timer | 21 | 0.7 | Other 21, Profiler 0 | 0 / 0 / 21 | poll_wait 21, memcpy_memset 0 |

Main thread, top self: `poll [libc.so.6]` 178; `[libxul.so]` 38; `[unknown]` 5; `write [libc.so.6]` 3; `[linux-vdso.so.1]` 2; `__memset_avx512_unaligned_erms [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `recvmsg [libc.so.6]` 1

**tab pid 4873** — 6 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 6 | 0.2 | GC / CC 3, Idle 3, Other 0 | 0 / 0 / 6 | poll_wait 3, gc_cc 3 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 3; `[libxul.so]` 2; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 0

**tab pid 4321** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 1; `[libxul.so]` 0

**tab pid 4343** — 1 ms CPU in the window

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

