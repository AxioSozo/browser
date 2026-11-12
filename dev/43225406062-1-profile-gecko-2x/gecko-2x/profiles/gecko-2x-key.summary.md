### gecko-2x key (profile pass)

**parent pid 2825** — 268 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 166 | 4.4 | Idle 38, Layout 30, JavaScript 30, GC / CC 27 | 4 / 31 / 131 | poll_wait 52, paint_layout 39, gc_cc 27, harness_diagnostics 7 |
| Renderer | 40 | 1.1 | Idle 22, Graphics 19, Other 0 | 0 / 0 / 40 | poll_wait 22, webrender_render 19, memcpy_memset 4 |
| WRRenderBackend#0 | 16 | 0.4 | Other 16 | 0 / 0 / 16 | poll_wait 0 |
| Compositor | 14 | 0.4 | Idle 14, Other 0 | 0 / 0 / 14 | poll_wait 14, memcpy_memset 0, webrender_render 0 |
| WRSceneBuilder#0 | 11 | 0.3 | Other 11 | 0 / 0 / 11 |  |
| SwComposite | 11 | 0.3 | Other 11 | 0 / 0 / 11 | memcpy_memset 4 |
| IPC I/O Parent | 7 | 0.2 | Idle 6, Other 0 | 0 / 0 / 7 |  |
| Timer | 2 | 0.0 | Other 2 | 0 / 0 / 2 | poll_wait 2 |

Main thread, top self: `[libxul.so]` 98; `poll [libc.so.6]` 39; `[axiosozo-dev]` 6; `[unknown]` 3; `sendmsg [libc.so.6]` 2; `mprotect [libc.so.6]` 2; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1; `recvmsg [libc.so.6]` 1

**tab pid 3088** — 50 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 44 | 1.2 | Idle 24, Layout 5, JavaScript 4, Other 4 | 1 / 4 / 40 | poll_wait 24, paint_layout 4, harness_diagnostics 2 |
| IPC I/O Child | 5 | 0.1 | Idle 5, Other 0 | 0 / 0 / 5 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 24; `[libxul.so]` 15; `[]` 1; `getcontext [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `sendmsg [libc.so.6]` 1; `update (http://127.0.0.1:36507/engine.html:11:16)[21]` 1

**tab pid 2923** — 7 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 6 | 0.2 | Idle 6, JavaScript 0, GC / CC 0, Other 0 | 0 / 0 / 6 | poll_wait 6, gc_cc 0 |
| IPC I/O Child | 1 | 0.0 | Idle 1 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 6; `[libxul.so]` 0

**tab pid 2977** — 1 ms CPU in the window

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

