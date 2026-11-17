### chromium key (profile pass)

**parent pid 4163** — 599 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 302 | 8.3 | Idle 127, JavaScript 72, Layout 35, Other 26 | 13 / 109 / 180 | poll_wait 164, paint_layout 48, engine_stream_read 37, subprocess_pipe_io 13 |
| DOM Worker | 165 | 4.5 | JavaScript 157, Other 6, Profiler 2 | 0 / 0 / 165 | subprocess_pipe_io 165, poll_wait 149, memcpy_memset 1 |
| Renderer | 44 | 1.2 | Graphics 25, Idle 19 | 0 / 0 / 44 | webrender_render 25, poll_wait 19, memcpy_memset 0 |
| Timer | 23 | 0.6 | Other 23, Profiler 0 | 0 / 0 / 23 | poll_wait 22, memcpy_memset 0 |
| SwComposite | 19 | 0.5 | Other 19 | 0 / 0 / 19 | memcpy_memset 3 |
| WRRenderBackend#0 | 12 | 0.3 | Other 12 | 0 / 0 / 12 | memcpy_memset 0 |
| Compositor | 12 | 0.3 | Idle 12, Other 0 | 0 / 0 / 12 | poll_wait 12, memcpy_memset 0 |
| WRSceneBuilder#0 | 7 | 0.2 | Other 7, Graphics 0 | 0 / 0 / 7 | memcpy_memset 0 |

Main thread, top self: `poll [libc.so.6]` 128; `[libxul.so]` 116; `[unknown]` 15; `write [libc.so.6]` 5; `[axiosozo-dev]` 4; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 2; `recvmsg [libc.so.6]` 2; `[libX11.so.6]` 2

**tab pid 4258** — 8 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 6 | 0.2 | Idle 5, JavaScript 1, DOM 1, Profiler 0 | 0 / 1 / 5 | poll_wait 5, array_buffer_copy 0, gc_cc 0 |
| IPC I/O Child | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 5; `[libxul.so]` 1; `[]` 0

**tab pid 4878** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 0, Other 0 | 0 / 0 / 1 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 0; `[libxul.so]` 0

**tab pid 4369** — 1 ms CPU in the window

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

