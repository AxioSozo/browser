### gecko-debian key (profile pass)

**parent pid 8188** — 325 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 212 | 5.7 | Layout 42, Idle 42, JavaScript 32, Other 32 | 5 / 32 / 175 | poll_wait 67, paint_layout 56, gc_cc 31, harness_diagnostics 6 |
| Renderer | 41 | 1.1 | Graphics 21, Idle 19, Other 0 | 0 / 0 / 41 | webrender_render 21, poll_wait 19, memcpy_memset 3 |
| WRRenderBackend#0 | 20 | 0.5 | Other 20 | 0 / 0 / 20 | memcpy_memset 0 |
| Compositor | 19 | 0.5 | Idle 19, Other 1, Profiler 0 | 0 / 0 / 19 | poll_wait 19, memcpy_memset 0, paint_layout 0 |
| WRSceneBuilder#0 | 15 | 0.4 | Other 15 | 0 / 0 / 15 |  |
| IPC I/O Parent | 9 | 0.2 | Idle 8, Other 0, Profiler 0 | 0 / 0 / 9 | memcpy_memset 0 |
| SwComposite | 5 | 0.1 | Other 5 | 0 / 0 / 5 | memcpy_memset 0 |
| Timer | 2 | 0.1 | Other 2 | 0 / 0 / 2 | poll_wait 2 |

Main thread, top self: `[libxul.so]` 122; `__syscall_cancel_arch [libc.so.6]` 49; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 5; `mprotect [libc.so.6]` 4; `[axiosozo-dev]` 3; `__memset_evex_unaligned_erms [libc.so.6]` 3; `[unknown]` 3; `__lll_lock_wait [libc.so.6]` 2

**tab pid 8457** — 77 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 70 | 1.9 | Idle 25, Other 11, GC / CC 11, JavaScript 8 | 2 / 6 / 62 | poll_wait 25, gc_cc 11, paint_layout 6, harness_diagnostics 4 |
| IPC I/O Child | 7 | 0.2 | Idle 6, Other 0 | 0 / 0 / 7 | poll_wait 0 |
| Timer | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 39; `__syscall_cancel_arch [libc.so.6]` 27; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `[]` 1; `handleEvent (moz-src:///toolkit/actors/FindBarChild.sys.mjs:74:14)[12]` 1; `evaluate.sandbox/promise< (chrome://remote/content/marionette/evaluate` 1; `[unknown]` 0

**tab pid 8280** — 8 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 7 | 0.2 | Idle 7, Other 0, DOM 0, JavaScript 0 | 0 / 0 / 7 | poll_wait 7 |
| IPC I/O Child | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 7; `[libxul.so]` 0; `get (resource://gre/modules/ExtensionUtils.sys.mjs:102:6)[9]` 0

**tab pid 8386** — 1 ms CPU in the window

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

