### gecko-debian scroll (profile pass)

**parent pid 8175** — 901 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Renderer | 630 | 30.7 | Graphics 576, Idle 54 | 0 / 0 / 630 | webrender_render 576, poll_wait 56, memcpy_memset 1 |
| GeckoMain | 101 | 4.9 | Idle 71, JavaScript 8, Other 8, Graphics 7 | 0 / 9 / 91 | poll_wait 85, paint_layout 10, harness_diagnostics 7, memcpy_memset 1 |
| WRRenderBackend#0 | 70 | 3.4 | Other 70 | 0 / 0 / 70 | memcpy_memset 1, poll_wait 1 |
| SwComposite | 34 | 1.6 | Other 34 | 0 / 0 / 34 | memcpy_memset 2 |
| Compositor | 29 | 1.4 | Idle 29, Other 1 | 0 / 0 / 29 | poll_wait 29, paint_layout 0 |
| WRSceneBuilder#0 | 22 | 1.1 | Other 22 | 0 / 0 / 22 |  |
| IPC I/O Parent | 9 | 0.4 | Idle 8, Other 0 | 0 / 0 / 9 |  |
| WRSceneBuilderLP#0 | 1 | 0.1 | Other 1 | 0 / 0 / 1 |  |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 75; `[libxul.so]` 20; `[unknown]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `mprotect [libc.so.6]` 1; `PresShell::DoFlushPendingNotifications Layout` 1; `[axiosozo-dev]` 0; `[libgdk-3.so.0]` 0

**tab pid 8427** — 116 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 100 | 4.9 | Idle 63, Graphics 17, GC / CC 8, Other 5 | 0 / 3 / 97 | poll_wait 63, paint_layout 19, gc_cc 8, harness_diagnostics 2 |
| IPC I/O Child | 15 | 0.7 | Idle 15, Other 0, Profiler 0 | 0 / 0 / 15 |  |
| Timer | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 64; `[libxul.so]` 32; `__pthread_mutex_unlock_usercnt [libc.so.6]` 2; `__memmove_avx_unaligned_erms [libc.so.6]` 1; `[]` 1; `std::__detail::_Prime_rehash_policy::_M_need_rehash(unsigned long, uns` 0; `[linux-vdso.so.1]` 0; `__lll_lock_wait [libc.so.6]` 0

**tab pid 8429** — 1 ms CPU in the window

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

**tab pid 8516** — 1 ms CPU in the window

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

