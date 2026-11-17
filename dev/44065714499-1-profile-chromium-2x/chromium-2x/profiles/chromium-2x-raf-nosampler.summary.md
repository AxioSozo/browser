### chromium-2x raf-nosampler (profile pass)

**parent pid 4071** — 846 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| DOM Worker | 220 | 7.2 | JavaScript 213, Profiler 3, Other 3 | 0 / 0 / 220 | subprocess_pipe_io 220, poll_wait 202, memcpy_memset 1 |
| GeckoMain | 183 | 6.0 | Idle 111, JavaScript 44, Other 16, DOM 11 | 7 / 44 / 132 | poll_wait 118, engine_stream_read 27, json_metadata 17, subprocess_pipe_io 11 |
| Renderer | 139 | 4.6 | Idle 82, Graphics 56, Other 2 | 0 / 0 / 139 | poll_wait 83, webrender_render 56, memcpy_memset 41 |
| SwComposite | 106 | 3.5 | Other 106 | 0 / 0 / 106 | memcpy_memset 16 |
| BackgroundThreadPool #2 | 90 | 3.0 | Idle 75, Other 15 | 0 / 0 / 90 | poll_wait 74, memcpy_memset 15 |
| WRRenderBackend#0 | 46 | 1.5 | Other 46 | 0 / 0 / 46 | poll_wait 1, memcpy_memset 0 |
| Compositor | 36 | 1.2 | Idle 35, Other 1, Graphics 0 | 0 / 0 / 36 | poll_wait 35, webrender_render 0, memcpy_memset 0 |
| ImageBridgeChld | 14 | 0.5 | Idle 14, Other 0, Profiler 0 | 0 / 0 / 14 | poll_wait 14 |

Main thread, top self: `poll [libc.so.6]` 111; `[libxul.so]` 39; `[unknown]` 10; `recvmsg [libc.so.6]` 2; `write [libc.so.6]` 2; `[linux-vdso.so.1]` 2; `[axiosozo-dev]` 2; `mprotect [libc.so.6]` 2

**tab pid 4262** — 9 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 9 | 0.3 | GC / CC 7, Idle 2 | 0 / 0 / 9 | gc_cc 7, poll_wait 2 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 6; `poll [libc.so.6]` 2; `prctl [libc.so.6]` 1

**tab pid 4158** — 9 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 9 | 0.3 | GC / CC 7, Idle 1 | 0 / 0 / 9 | gc_cc 7, poll_wait 1, memcpy_memset 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 6; `poll [libc.so.6]` 1; `mmap64 [libc.so.6]` 1; `write [libc.so.6]` 0

**tab pid 4223** — 5 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 4 | 0.1 | Idle 3, GC / CC 1, Other 0 | 0 / 0 / 4 | poll_wait 3, gc_cc 1 |
| Timer | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 3; `[libxul.so]` 1; `sendmsg [libc.so.6]` 0

