### webkit switch-to-gecko (profile pass)

**parent pid 7161** — 133 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 73 | 24.8 | JavaScript 34, Other 16, Layout 9, Graphics 5 | 7 / 36 / 30 | paint_layout 13, harness_diagnostics 11, engine_stream_read 7, poll_wait 6 |
| Renderer | 23 | 7.9 | Graphics 18, Idle 5 | 0 / 0 / 23 | webrender_render 18, poll_wait 6 |
| DOM Worker | 13 | 4.5 | JavaScript 13, Idle 1 | 0 / 0 / 13 | subprocess_pipe_io 13, poll_wait 13, worker_messaging 1 |
| BgIOThreadPool #1 | 10 | 3.5 | Other 8, Idle 2 | 0 / 0 / 10 | poll_wait 2 |
| Compositor | 3 | 1.1 | Idle 2, Other 1 | 0 / 0 / 3 | poll_wait 2, webrender_render 0, paint_layout 0 |
| WRRenderBackend#0 | 3 | 0.9 | Other 3 | 0 / 0 / 3 |  |
| WRSceneBuilder#0 | 3 | 0.9 | Other 3 | 0 / 0 / 3 | poll_wait 0 |
| IPC I/O Parent | 2 | 0.8 | Idle 2 | 0 / 0 / 2 |  |

Main thread, top self: `[libxul.so]` 45; `__syscall_cancel_arch [libc.so.6]` 10; `get persistentBackground (resource://gre/modules/Extension.sys.mjs:163` 6; `[unknown]` 4; `[axiosozo-dev]` 1; `g_private_get [libglib-2.0.so.0]` 1; `map (self-hosted:163:18)[17]` 1; `[libgobject-2.0.so.0]` 1

**tab pid 7711** — 30 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 28 | 9.5 | Other 11, JavaScript 9, Idle 4, DOM 2 | 0 / 9 / 18 | poll_wait 4, paint_layout 0 |
| IPC I/O Child | 1 | 0.5 | Idle 1, Other 0 | 0 / 0 / 1 |  |
| Socket Thread | 0 | 0.1 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 24; `__syscall_cancel_arch [libc.so.6]` 4; `__lll_lock_wait [libc.so.6]` 0; `[]` 0

**tab pid 7247** — 4 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 4 | 1.3 | Idle 3, Other 0, JavaScript 0 | 0 / 0 / 4 | poll_wait 3 |
| IPC I/O Child | 1 | 0.2 | Idle 0, Other 0 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 4; `applySafeWithoutClone (resource://gre/modules/ExtensionCommon.sys.mjs:` 0

**tab pid 7717** — 0 ms CPU in the window

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

