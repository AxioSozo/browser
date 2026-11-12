### webkit switch-to-gecko (profile pass)

**parent pid 7161** — 128 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 79 | 28.1 | JavaScript 32, GC / CC 11, Layout 8, Profiler 6 | 2 / 47 / 30 | gc_cc 11, harness_diagnostics 11, paint_layout 9, engine_stream_read 7 |
| Renderer | 18 | 6.5 | Graphics 16, Idle 2 | 0 / 0 / 18 | webrender_render 16, poll_wait 2 |
| DOM Worker | 12 | 4.4 | JavaScript 12, Idle 0 | 0 / 0 / 12 | subprocess_pipe_io 12, poll_wait 11, worker_messaging 0 |
| BgIOThreadPool #2 | 5 | 1.8 | Other 5, Idle 0 | 0 / 0 / 5 | poll_wait 0 |
| Compositor | 3 | 1.2 | Idle 2, Other 1 | 0 / 0 / 3 | poll_wait 2, memcpy_memset 1 |
| WRRenderBackend#0 | 3 | 0.9 | Other 2, Profiler 0 | 0 / 0 / 3 |  |
| WRSceneBuilder#0 | 2 | 0.8 | Other 2 | 0 / 0 / 2 |  |
| IPC I/O Parent | 2 | 0.7 | Idle 2, Other 0 | 0 / 0 / 2 |  |

Main thread, top self: `[libxul.so]` 51; `__syscall_cancel_arch [libc.so.6]` 7; `[linux-vdso.so.1]` 4; `[axiosozo-dev]` 4; `[unknown]` 4; `mprotect [libc.so.6]` 3; `syscall [libc.so.6]` 1; `record/< (chrome://browser/content/axiosozo/AgentTabRegistry.sys.mjs:1` 1

**tab pid 7716** — 30 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 28 | 9.8 | Other 9, JavaScript 6, DOM 4, Idle 4 | 0 / 9 / 18 | poll_wait 4, gc_cc 1 |
| IPC I/O Child | 1 | 0.5 | Idle 1, Other 0 | 0 / 0 / 1 |  |
| Socket Thread | 0 | 0.1 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.1 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 19; `__syscall_cancel_arch [libc.so.6]` 5; `[]` 2; `__lll_lock_wait [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `PR_GetCurrentThread [libnspr4.so]` 0

**tab pid 7261** — 4 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 4 | 1.3 | Idle 3, JavaScript 0, DOM 0 | 0 / 0 / 3 | poll_wait 3, array_buffer_copy 0 |
| IPC I/O Child | 1 | 0.2 | Idle 1, Profiler 0 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 3; `[libxul.so]` 0; `get (resource://gre/modules/ExtensionCommon.sys.mjs:603:12)[3]` 0

**tab pid 7859** — 0 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.1 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0

