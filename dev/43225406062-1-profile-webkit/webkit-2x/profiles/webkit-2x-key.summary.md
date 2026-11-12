### webkit-2x key (profile pass)

**parent pid 8832** — 1053 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 539 | 14.7 | Idle 248, JavaScript 104, Other 55, Graphics 43 | 21 / 145 / 374 | poll_wait 296, engine_stream_read 73, paint_layout 69, harness_diagnostics 39 |
| DOM Worker | 226 | 6.2 | JavaScript 223, Profiler 3, Other 0 | 0 / 0 / 226 | subprocess_pipe_io 226, poll_wait 210, memcpy_memset 3 |
| Renderer | 112 | 3.0 | Graphics 86, Idle 26 | 0 / 0 / 112 | webrender_render 86, poll_wait 26, memcpy_memset 5 |
| SwComposite | 76 | 2.1 | Other 76 | 0 / 0 / 76 | memcpy_memset 46 |
| Timer | 31 | 0.8 | Other 31, Profiler 0 | 0 / 0 / 31 | poll_wait 31, memcpy_memset 0 |
| WRRenderBackend#0 | 19 | 0.5 | Other 19 | 0 / 0 / 19 | memcpy_memset 1 |
| Compositor | 18 | 0.5 | Idle 17, Other 0 | 0 / 0 / 18 | poll_wait 17, paint_layout 0 |
| WRSceneBuilder#0 | 10 | 0.3 | Other 9, Graphics 1 | 0 / 0 / 10 | memcpy_memset 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 270; `[libxul.so]` 184; `[unknown]` 16; `[axiosozo-dev]` 11; `readStreamPacket (chrome://browser/content/axiosozo/EngineStreamClient` 6; `get formattingEnabled (moz-src:///browser/components/urlbar/UrlbarValu` 5; `__lll_lock_wait [libc.so.6]` 4; `__memset_evex_unaligned_erms [libc.so.6]` 4

**tab pid 8919** — 8 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 7 | 0.2 | Idle 6, DOM 1, Other 0, JavaScript 0 | 0 / 1 / 6 | poll_wait 6, array_buffer_copy 1 |
| IPC I/O Child | 1 | 0.0 | Idle 1 | 0 / 0 / 1 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 6; `[libxul.so]` 1

**tab pid 8994** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0, Other 0 | 0 / 0 / 0 |  |
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

