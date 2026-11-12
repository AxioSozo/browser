### gecko-debian idle (profile pass)

**parent pid 8188** — 116 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 58 | 2.8 | GC / CC 38, JavaScript 7, Idle 6, Other 5 | 0 / 8 / 50 | gc_cc 38, poll_wait 7, harness_diagnostics 4, json_metadata 1 |
| DOM Worker | 48 | 2.3 | Other 43, GC / CC 4, Idle 1 | 0 / 0 / 48 | memcpy_memset 17, gc_cc 4, poll_wait 2, worker_messaging 1 |
| DOM Worker | 2 | 0.1 | Other 2, Idle 1 | 0 / 0 / 2 | worker_messaging 1, poll_wait 1 |
| Compositor | 2 | 0.1 | Other 1, Idle 1 | 0 / 0 / 2 | memcpy_memset 1, poll_wait 1 |
| DOM Worker | 2 | 0.1 | Idle 1, Other 1 | 0 / 0 / 2 | poll_wait 2, worker_messaging 1 |
| IPC I/O Parent | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 |  |
| Socket Thread | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| Renderer | 1 | 0.0 | Graphics 0, Idle 0 | 0 / 0 / 1 | webrender_render 0, poll_wait 0 |

Main thread, top self: `[libxul.so]` 43; `__syscall_cancel_arch [libc.so.6]` 7; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 3; `prctl [libc.so.6]` 1; `mprotect [libc.so.6]` 1; `[axiosozo-dev]` 1; `g_main_context_default [libglib-2.0.so.0]` 1; `__lll_lock_wake [libc.so.6]` 1

**tab pid 8457** — 28 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 23 | 1.1 | Idle 17, JavaScript 3, Other 1, DOM 1 | 0 / 4 / 19 | poll_wait 17, harness_diagnostics 3, memcpy_memset 1 |
| IPC I/O Child | 5 | 0.3 | Idle 5, Other 0, Profiler 0 | 0 / 0 / 5 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 18; `[libxul.so]` 4; `__memset_evex_unaligned_erms [libc.so.6]` 1

**tab pid 8549** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0

**tab pid 8546** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0; `[linux-vdso.so.1]` 0

