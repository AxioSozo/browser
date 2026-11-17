### chromium switch-to-gecko (profile pass)

**parent pid 4163** — 61 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 34 | 21.5 | Layout 13, JavaScript 9, Other 5, Idle 3 | 2 / 19 / 14 | harness_diagnostics 7, poll_wait 4, paint_layout 3, json_metadata 0 |
| Renderer | 10 | 6.5 | Graphics 9, Idle 1 | 0 / 0 / 10 | webrender_render 9, poll_wait 1 |
| DOM Worker | 6 | 3.9 | JavaScript 5, Idle 1, Other 0 | 0 / 0 / 6 | subprocess_pipe_io 6, poll_wait 6, worker_messaging 1 |
| BgIOThreadPool #2 | 3 | 2.0 | Other 3, Idle 0 | 0 / 0 / 3 | poll_wait 0 |
| WRRenderBackend#0 | 2 | 1.0 | Other 2 | 0 / 0 / 2 | poll_wait 0 |
| WRSceneBuilder#0 | 1 | 0.9 | Other 1 | 0 / 0 / 1 |  |
| Compositor | 1 | 0.9 | Idle 1 | 0 / 0 / 1 | poll_wait 1 |
| SwComposite | 1 | 0.5 | Other 1 | 0 / 0 / 1 |  |

Main thread, top self: `[libxul.so]` 22; `poll [libc.so.6]` 3; `[axiosozo-dev]` 3; `mozilla::TimeStamp::Now(bool) [axiosozo-dev]` 2; `assert.open (chrome://remote/content/shared/webdriver/Assert.sys.mjs:1` 1; `onTabLabelChanged (chrome://browser/content/zen-components/ZenPinnedTa` 1; `__memcmp_evex_movbe [libc.so.6]` 1; `read [libc.so.6]` 1

**tab pid 4873** — 4 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 3 | 2.2 | Idle 3, Other 1, Layout 0, DOM 0 | 0 / 0 / 3 | poll_wait 3 |
| IPC I/O Child | 1 | 0.4 | Idle 1, Other 0 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 3; `sendmsg [libc.so.6]` 0; `[libxul.so]` 0

**tab pid 4258** — 0 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.3 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 0

**tab pid 4343** — 0 ms CPU in the window

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

