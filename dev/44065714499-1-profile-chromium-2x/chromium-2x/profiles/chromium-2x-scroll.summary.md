### chromium-2x scroll (profile pass)

**parent pid 4071** — 1140 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 500 | 23.9 | Idle 254, JavaScript 88, Other 50, GC / CC 33 | 11 / 104 / 385 | poll_wait 334, gc_cc 33, engine_stream_read 28, json_metadata 26 |
| DOM Worker | 240 | 11.5 | JavaScript 228, Profiler 8, Other 3 | 0 / 0 / 240 | subprocess_pipe_io 240, poll_wait 213, memcpy_memset 2 |
| BackgroundThreadPool #2 | 143 | 6.9 | Idle 88, Other 54, Graphics 2 | 0 / 0 / 143 | poll_wait 88, memcpy_memset 52, image_container 2 |
| Renderer | 98 | 4.7 | Idle 52, Graphics 45, Other 1 | 0 / 0 / 98 | poll_wait 53, webrender_render 45, memcpy_memset 23 |
| SwComposite | 67 | 3.2 | Other 67 | 0 / 0 / 67 | memcpy_memset 3 |
| WRRenderBackend#0 | 33 | 1.6 | Other 33 | 0 / 0 / 33 |  |
| Compositor | 24 | 1.1 | Idle 23, Other 1, Graphics 0, Profiler 0 | 0 / 0 / 24 | poll_wait 23, webrender_render 0 |
| Timer | 18 | 0.9 | Other 18, Profiler 0 | 0 / 0 / 18 | poll_wait 18 |

Main thread, top self: `poll [libc.so.6]` 258; `[libxul.so]` 159; `[unknown]` 18; `recvmsg [libc.so.6]` 8; `__lll_lock_wake [libc.so.6]` 6; `mprotect [libc.so.6]` 6; `[axiosozo-dev]` 6; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 4

**tab pid 4782** — 1 ms CPU in the window

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

**tab pid 4223** — 1 ms CPU in the window

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

**tab pid 4970** — 1 ms CPU in the window

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

