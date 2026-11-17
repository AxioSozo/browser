### chromium-2x switch-to-engine (profile pass)

**parent pid 4071** — 203 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Renderer | 83 | 37.9 | Graphics 81, Profiler 2, Idle 0 | 0 / 0 / 83 | webrender_render 83, memcpy_memset 1, poll_wait 0 |
| GeckoMain | 73 | 33.0 | Layout 16, JavaScript 15, Idle 13, DOM 10 | 0 / 31 / 42 | poll_wait 17, harness_diagnostics 12, paint_layout 9, gc_cc 8 |
| BackgroundThreadPool #2 | 17 | 7.6 | Other 14, Idle 3 | 0 / 0 / 17 | memcpy_memset 7, poll_wait 3 |
| DOM Worker | 10 | 4.4 | JavaScript 10 | 0 / 0 / 10 | subprocess_pipe_io 10, poll_wait 9 |
| SwComposite | 7 | 3.0 | Other 7 | 0 / 0 / 7 | memcpy_memset 0 |
| WRRenderBackend#0 | 5 | 2.1 | Other 5 | 0 / 0 / 5 |  |
| Compositor | 4 | 1.9 | Idle 3, Other 2 | 0 / 0 / 4 | poll_wait 3, paint_layout 0 |
| WRSceneBuilder#0 | 3 | 1.3 | Other 3 | 0 / 0 / 3 |  |

Main thread, top self: `[libxul.so]` 43; `poll [libc.so.6]` 13; `[axiosozo-dev]` 8; `mprotect [libc.so.6]` 4; `g_source_ref [libglib-2.0.so.0]` 3; `getcontext [libc.so.6]` 1; `__lll_lock_wait [libc.so.6]` 1; `recvmsg [libc.so.6]` 0

**tab pid 4970** — 27 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 26 | 11.8 | Other 22, JavaScript 3, Idle 1, DOM 1 | 0 / 2 / 24 | poll_wait 1 |
| IPC I/O Child | 0 | 0.1 | Idle 0 | 0 / 0 / 0 |  |
| Timer | 0 | 0.1 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 17; `[libexpat.so.1]` 2; `[]` 1; `poll [libc.so.6]` 1; `FcNameParse [libfontconfig.so.1]` 1; `__fcntl64_nocancel_adjusted [libc.so.6]` 1; `getpid [libc.so.6]` 1; `mprotect [libc.so.6]` 1

**tab pid 4777** — 4 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 3 | 1.3 | Idle 2, Graphics 1, Profiler 0, Other 0 | 0 / 0 / 3 | poll_wait 2, paint_layout 1 |
| IPC I/O Child | 1 | 0.3 | Idle 1 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 2; `[libxul.so]` 1; `__lll_lock_wait [libc.so.6]` 0; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0

**tab pid 4974** — 0 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| GeckoMain | 0 | 0.0 | Other 0 | 0 / 0 / 0 |  |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 0

