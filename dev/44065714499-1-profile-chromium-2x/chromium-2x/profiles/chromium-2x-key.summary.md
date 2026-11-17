### chromium-2x key (profile pass)

**parent pid 4071** — 812 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 410 | 11.2 | Idle 157, GC / CC 72, JavaScript 69, Layout 36 | 10 / 118 / 283 | poll_wait 201, gc_cc 72, paint_layout 56, engine_stream_read 27 |
| DOM Worker | 176 | 4.8 | JavaScript 171, Other 3, Profiler 1 | 0 / 0 / 176 | subprocess_pipe_io 176, poll_wait 166, memcpy_memset 1 |
| Renderer | 99 | 2.7 | Graphics 77, Idle 21 | 0 / 0 / 99 | webrender_render 77, poll_wait 21, memcpy_memset 3 |
| SwComposite | 44 | 1.2 | Other 44 | 0 / 0 / 44 | memcpy_memset 22 |
| Timer | 27 | 0.7 | Other 27, Profiler 0 | 0 / 0 / 27 | poll_wait 27 |
| Compositor | 15 | 0.4 | Idle 15, Other 0 | 0 / 0 / 15 | poll_wait 15, memcpy_memset 0 |
| WRRenderBackend#0 | 15 | 0.4 | Other 15 | 0 / 0 / 15 | memcpy_memset 0 |
| WRSceneBuilder#0 | 8 | 0.2 | Other 7, Graphics 0 | 0 / 0 / 8 |  |

Main thread, top self: `[libxul.so]` 191; `poll [libc.so.6]` 160; `[unknown]` 8; `[axiosozo-dev]` 8; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 8; `write [libc.so.6]` 6; `recvmsg [libc.so.6]` 2; `[libX11.so.6]` 2

**tab pid 4158** — 7 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 6 | 0.2 | Idle 5, JavaScript 1, Other 0 | 0 / 0 / 5 | poll_wait 5 |
| IPC I/O Child | 1 | 0.0 | Idle 1 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 4; `[libxul.so]` 1; `[linux-vdso.so.1]` 0; `[]` 0

**tab pid 4223** — 1 ms CPU in the window

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

**tab pid 4262** — 1 ms CPU in the window

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

