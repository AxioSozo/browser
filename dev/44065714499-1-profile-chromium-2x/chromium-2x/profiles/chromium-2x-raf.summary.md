### chromium-2x raf (profile pass)

**parent pid 4071** — 1121 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 361 | 11.5 | Idle 219, JavaScript 63, Other 30, GC / CC 27 | 7 / 69 / 285 | poll_wait 238, engine_stream_read 39, gc_cc 27, subprocess_pipe_io 19 |
| DOM Worker | 281 | 9.0 | JavaScript 219, GC / CC 31, Other 28, Profiler 3 | 0 / 0 / 281 | subprocess_pipe_io 281, poll_wait 202, gc_cc 31, memcpy_memset 13 |
| Renderer | 143 | 4.6 | Idle 87, Graphics 55, Profiler 1, Other 0 | 0 / 0 / 143 | poll_wait 89, webrender_render 55, memcpy_memset 39 |
| SwComposite | 106 | 3.4 | Other 106 | 0 / 0 / 106 | memcpy_memset 21 |
| BackgroundThreadPool #2 | 98 | 3.1 | Idle 82, Other 16, Graphics 1 | 0 / 0 / 98 | poll_wait 82, memcpy_memset 15, image_container 1 |
| WRRenderBackend#0 | 47 | 1.5 | Other 47 | 0 / 0 / 47 | poll_wait 0, memcpy_memset 0 |
| Compositor | 35 | 1.1 | Idle 34, Other 1, Graphics 0, Profiler 0 | 0 / 0 / 35 | poll_wait 34, webrender_render 0, memcpy_memset 0 |
| Timer | 25 | 0.8 | Other 25 | 0 / 0 / 25 | poll_wait 25, memcpy_memset 0 |

Main thread, top self: `poll [libc.so.6]` 219; `[libxul.so]` 87; `[unknown]` 11; `recvmsg [libc.so.6]` 7; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 6; `[axiosozo-dev]` 4; `write [libc.so.6]` 3; `__lll_lock_wait [libc.so.6]` 3

**tab pid 4974** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 1

**tab pid 4782** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 0, Other 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 0; `read [libc.so.6]` 0; `[libxul.so]` 0

**tab pid 4970** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 1

