### webkit-2x switch-to-engine (profile pass)

**parent pid 8832** — 97 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 38 | 13.3 | JavaScript 18, Idle 8, Layout 5, Other 3 | 2 / 22 / 14 | harness_diagnostics 9, poll_wait 9, paint_layout 5, engine_stream_read 1 |
| DOM Worker | 21 | 7.3 | JavaScript 21 | 0 / 0 / 21 | subprocess_pipe_io 21, poll_wait 18, memcpy_memset 0 |
| BackgroundThreadPool #1 | 17 | 6.1 | Other 15, Idle 3 | 0 / 0 / 17 | memcpy_memset 7, poll_wait 3 |
| Renderer | 11 | 3.7 | Idle 7, Graphics 3 | 0 / 0 / 11 | poll_wait 7, webrender_render 3, memcpy_memset 0 |
| Compositor | 3 | 1.0 | Idle 3 | 0 / 0 / 3 | poll_wait 3 |
| SwComposite | 2 | 0.7 | Other 2 | 0 / 0 / 2 |  |
| WRRenderBackend#0 | 2 | 0.6 | Other 2 | 0 / 0 / 2 |  |
| WRSceneBuilder#0 | 1 | 0.5 | Other 1 | 0 / 0 / 1 |  |

Main thread, top self: `[libxul.so]` 18; `__syscall_cancel_arch [libc.so.6]` 9; `mprotect [libc.so.6]` 4; `[unknown]` 3; `engineAvailability (chrome://browser/content/axiosozo/EngineRegistry.s` 1; `__memmove_evex_unaligned_erms [libc.so.6]` 1; `[axiosozo-dev]` 1; `__memcmp_evex_movbe [libc.so.6]` 1

**tab pid 9534** — 10 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 10 | 3.3 | DOM 3, JavaScript 3, Other 2, Idle 2 | 0 / 6 / 4 | poll_wait 2, gc_cc 1, memcpy_memset 0 |
| IPC I/O Child | 0 | 0.1 | Idle 0 | 0 / 0 / 0 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 5; `__syscall_cancel_arch [libc.so.6]` 2; `[libmozsandbox.so]` 1; `syscall [libc.so.6]` 1; `_Unwind_Find_FDE@@GCC_3.0 [libgcc_s.so.1]` 1; `mmap64 [libc.so.6]` 0; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0

**tab pid 9388** — 2 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 2 | 0.6 | Idle 1, Other 1 | 0 / 0 / 2 | poll_wait 1 |
| IPC I/O Child | 0 | 0.1 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 1

**tab pid 9528** — 0 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0

