### webkit switch-to-engine (profile pass)

**parent pid 7161** — 85 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 42 | 13.0 | JavaScript 16, Idle 8, Layout 7, DOM 5 | 1 / 26 / 15 | poll_wait 10, harness_diagnostics 10, paint_layout 7, engine_stream_read 6 |
| DOM Worker | 21 | 6.6 | JavaScript 21 | 0 / 0 / 21 | subprocess_pipe_io 21, poll_wait 21 |
| BackgroundThreadPool #2 | 6 | 1.8 | Other 4, Idle 2 | 0 / 0 / 6 | poll_wait 2, memcpy_memset 1 |
| Renderer | 5 | 1.7 | Idle 5, Graphics 0 | 0 / 0 / 5 | poll_wait 5, webrender_render 0 |
| WRRenderBackend#0 | 3 | 0.8 | Other 3 | 0 / 0 / 3 |  |
| Compositor | 2 | 0.7 | Idle 2 | 0 / 0 / 2 | poll_wait 2 |
| IPC I/O Parent | 2 | 0.6 | Idle 2, Other 0 | 0 / 0 / 2 |  |
| WRSceneBuilder#0 | 2 | 0.6 | Other 1, Graphics 0 | 0 / 0 / 2 |  |

Main thread, top self: `[libxul.so]` 24; `__syscall_cancel_arch [libc.so.6]` 9; `[axiosozo-dev]` 2; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 2; `mprotect [libc.so.6]` 1; `untrackRequest (chrome://browser/content/axiosozo/EngineStreamClient.s` 1; `[unknown]` 1; `__memmove_evex_unaligned_erms [libc.so.6]` 1

**tab pid 7855** — 51 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 50 | 19.7 | Other 39, DOM 4, JavaScript 3, Profiler 3 | 0 / 5 / 45 | gc_cc 4, poll_wait 1, memcpy_memset 1 |
| IPC I/O Child | 1 | 0.3 | Idle 1, Other 0 | 0 / 0 / 1 |  |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 25; `_Unwind_Find_FDE@@GCC_3.0 [libgcc_s.so.1]` 4; `__syscall_cancel_arch [libc.so.6]` 3; `[]` 3; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 3; `__lll_lock_wake [libc.so.6]` 3; `[libfontconfig.so.1]` 2; `__strcmp_evex [libc.so.6]` 2

**tab pid 7859** — 48 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 47 | 15.4 | Other 39, DOM 4, JavaScript 2, Profiler 1 | 0 / 4 / 43 | memcpy_memset 1, gc_cc 1, poll_wait 1 |
| IPC I/O Child | 1 | 0.2 | Idle 1, Other 0, Profiler 0 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0, Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 19; `[]` 7; `[libfontconfig.so.1]` 3; `__syscall_cancel_arch [libc.so.6]` 3; `[libexpat.so.1]` 2; `__strlen_evex [libc.so.6]` 2; `__lll_lock_wake [libc.so.6]` 2; `[libdbus-1.so.3]` 1

**tab pid 7716** — 3 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 2 | 0.7 | Idle 2, Profiler 0 | 0 / 0 / 2 | poll_wait 2 |
| IPC I/O Child | 0 | 0.1 | Idle 0 | 0 / 0 / 0 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 2; `[libxul.so]` 0

