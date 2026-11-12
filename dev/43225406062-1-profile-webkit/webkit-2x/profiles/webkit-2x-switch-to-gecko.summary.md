### webkit-2x switch-to-gecko (profile pass)

**parent pid 8832** — 145 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 75 | 25.7 | JavaScript 35, Layout 11, Other 7, DOM 6 | 9 / 36 / 30 | paint_layout 11, harness_diagnostics 10, poll_wait 6, engine_stream_read 3 |
| Renderer | 36 | 12.3 | Graphics 34, Idle 2 | 0 / 0 / 36 | webrender_render 34, memcpy_memset 2, poll_wait 2 |
| DOM Worker | 13 | 4.5 | JavaScript 12, Idle 1, Profiler 1 | 0 / 0 / 13 | subprocess_pipe_io 13, poll_wait 12, worker_messaging 1 |
| SwComposite | 4 | 1.5 | Other 4 | 0 / 0 / 4 | memcpy_memset 0 |
| Compositor | 3 | 1.2 | Idle 3 | 0 / 0 / 3 | poll_wait 3 |
| WRRenderBackend#0 | 3 | 1.2 | Other 3 | 0 / 0 / 3 |  |
| BgIOThreadPool #2 | 3 | 0.9 | Other 2, Idle 1 | 0 / 0 / 3 | poll_wait 1 |
| WRSceneBuilder#0 | 2 | 0.8 | Other 2 | 0 / 0 / 2 |  |

Main thread, top self: `[libxul.so]` 52; `get _isBrokenConnection (chrome://browser/content/browser-siteIdentity` 8; `__syscall_cancel_arch [libc.so.6]` 6; `mprotect [libc.so.6]` 2; `__lll_lock_wait [libc.so.6]` 2; `[unknown]` 1; `malloc [axiosozo-dev]` 1; `validFixtureOrigin (chrome://browser/content/axiosozo/EngineStreamClie` 1

**tab pid 9388** — 29 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 27 | 9.3 | Other 8, JavaScript 7, Profiler 3, Idle 3 | 0 / 7 / 20 | poll_wait 3, memcpy_memset 2, paint_layout 0 |
| IPC I/O Child | 1 | 0.5 | Idle 1, Other 0 | 0 / 0 / 1 |  |
| Socket Thread | 0 | 0.1 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.1 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 17; `__syscall_cancel_arch [libc.so.6]` 5; `__memset_evex_unaligned_erms [libc.so.6]` 2; `__pthread_mutex_unlock_usercnt [libc.so.6]` 1; `__lll_lock_wait [libc.so.6]` 1; `PL_strncasecmp [libplc4.so]` 1; `[]` 0

**tab pid 8919** — 5 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 5 | 1.5 | Idle 3, JavaScript 2 | 0 / 2 / 3 | poll_wait 3 |
| IPC I/O Child | 0 | 0.2 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 3; `[libxul.so]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1

**tab pid 9013** — 0 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0

