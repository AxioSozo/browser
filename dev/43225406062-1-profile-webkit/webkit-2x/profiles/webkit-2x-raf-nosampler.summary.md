### webkit-2x raf-nosampler (profile pass)

**parent pid 8832** — 987 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| DOM Worker | 231 | 7.6 | JavaScript 216, Profiler 10, Other 5 | 0 / 0 / 231 | subprocess_pipe_io 231, poll_wait 196, memcpy_memset 4 |
| GeckoMain | 196 | 6.5 | Idle 125, JavaScript 43, Other 14, DOM 10 | 7 / 47 / 142 | poll_wait 133, engine_stream_read 40, native_receiver 13, subprocess_pipe_io 12 |
| Renderer | 195 | 6.4 | Idle 114, Graphics 80, Other 0 | 0 / 0 / 195 | poll_wait 118, webrender_render 80, memcpy_memset 38 |
| BackgroundThreadPool #1 | 144 | 4.8 | Idle 91, Other 49, Graphics 4, Profiler 0 | 0 / 0 / 144 | poll_wait 94, memcpy_memset 44, image_container 4 |
| SwComposite | 112 | 3.7 | Other 112 | 0 / 0 / 112 | memcpy_memset 6 |
| WRRenderBackend#0 | 49 | 1.6 | Other 49 | 0 / 0 / 49 | poll_wait 0, memcpy_memset 0 |
| Compositor | 36 | 1.2 | Idle 35, Other 1, Profiler 0, Graphics 0 | 0 / 0 / 36 | poll_wait 35, webrender_render 0 |
| ImageBridgeChld | 14 | 0.5 | Idle 14, Other 0, Profiler 0 | 0 / 0 / 14 | poll_wait 14 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 133; `[libxul.so]` 39; `[unknown]` 10; `__lll_lock_wake [libc.so.6]` 2; `read (resource://gre/modules/subprocess/subprocess_common.sys.mjs:447:` 1; `[axiosozo-dev]` 1; `__lll_lock_wait [libc.so.6]` 1; `next (self-hosted:392:27)[1]` 1

**tab pid 9013** — 1 ms CPU in the window

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

**tab pid 9392** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1

**tab pid 8994** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1

