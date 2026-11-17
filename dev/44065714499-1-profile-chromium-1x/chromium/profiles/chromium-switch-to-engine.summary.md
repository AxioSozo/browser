### chromium switch-to-engine (profile pass)

**parent pid 4163** — 97 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 49 | 37.2 | JavaScript 26, Layout 10, Idle 7, Other 2 | 2 / 30 / 16 | poll_wait 8, harness_diagnostics 8, subprocess_pipe_io 6, array_buffer_copy 6 |
| Renderer | 21 | 15.8 | Graphics 18, Idle 2 | 0 / 0 / 21 | webrender_render 18, poll_wait 2 |
| DOM Worker | 14 | 10.4 | JavaScript 11, Profiler 2, Other 1 | 0 / 0 / 14 | subprocess_pipe_io 14, poll_wait 10, memcpy_memset 2 |
| BackgroundThreadPool #2 | 4 | 3.4 | Other 2, Idle 2 | 0 / 0 / 4 | poll_wait 2, memcpy_memset 1 |
| WRRenderBackend#0 | 3 | 2.1 | Other 3 | 0 / 0 / 3 |  |
| SwComposite | 2 | 1.3 | Other 2 | 0 / 0 / 2 |  |
| Compositor | 2 | 1.3 | Idle 2 | 0 / 0 / 2 | poll_wait 2 |
| WRSceneBuilder#0 | 2 | 1.3 | Other 2 | 0 / 0 / 2 |  |

Main thread, top self: `[libxul.so]` 30; `poll [libc.so.6]` 7; `write [libc.so.6]` 6; `[unknown]` 2; `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 1; `[axiosozo-dev]` 1; `#removeURLFormat (moz-src:///browser/components/urlbar/UrlbarValueForm` 1; `recvmsg [libc.so.6]` 1

**tab pid 4873** — 3 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 2 | 1.9 | Idle 2, Other 1, Layout 0 | 0 / 0 / 2 | poll_wait 2 |
| IPC I/O Child | 1 | 0.4 | Idle 1 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 2; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1; `[libxul.so]` 0

**tab pid 5069** — 0 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 0

**tab pid 5064** — 0 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 0

