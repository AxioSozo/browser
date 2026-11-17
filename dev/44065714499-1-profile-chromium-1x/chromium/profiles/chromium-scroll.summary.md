### chromium scroll (profile pass)

**parent pid 4163** — 725 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 334 | 16.6 | Idle 207, JavaScript 58, Other 36, DOM 16 | 6 / 63 / 266 | poll_wait 246, subprocess_pipe_io 19, engine_stream_read 13, array_buffer_copy 12 |
| DOM Worker | 209 | 10.4 | JavaScript 192, Profiler 12, Other 6 | 0 / 0 / 209 | subprocess_pipe_io 209, poll_wait 168, memcpy_memset 2 |
| BackgroundThreadPool #2 | 62 | 3.1 | Idle 49, Other 13, Graphics 0 | 0 / 0 / 62 | poll_wait 49, memcpy_memset 12, image_container 0 |
| Renderer | 37 | 1.8 | Idle 31, Graphics 5, Other 0 | 0 / 0 / 37 | poll_wait 31, webrender_render 5, memcpy_memset 2 |
| SwComposite | 20 | 1.0 | Other 20 | 0 / 0 / 20 | memcpy_memset 0 |
| WRRenderBackend#0 | 18 | 0.9 | Other 18, Profiler 0 | 0 / 0 / 18 |  |
| Compositor | 17 | 0.8 | Idle 16, Other 0, Graphics 0 | 0 / 0 / 17 | poll_wait 16 |
| Timer | 17 | 0.8 | Other 17, Profiler 0 | 0 / 0 / 17 | poll_wait 16, memcpy_memset 0 |

Main thread, top self: `poll [libc.so.6]` 208; `[libxul.so]` 71; `[unknown]` 11; `[axiosozo-dev]` 5; `__lll_lock_wait [libc.so.6]` 4; `write [libc.so.6]` 4; `recvmsg [libc.so.6]` 3; `__memset_avx512_unaligned_erms [libc.so.6]` 2

**tab pid 4369** — 4 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 4 | 0.2 | Idle 1, JavaScript 1, DOM 1 | 0 / 3 / 2 | poll_wait 1 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 2; `poll [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 0; `[]` 0

**tab pid 4873** — 1 ms CPU in the window

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

**tab pid 5069** — 0 ms CPU in the window

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

